import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Users, CheckCircle2, PlayCircle, BarChart3, Clock, Target, Search, Filter, SortDesc } from 'lucide-react';
import { getMissionTracking, MissionProgress } from '../lib/tracking';

export const AdminVisualDashboard = ({ config, initialSearchQuery, onViewDetails }: any) => {
  const [data, setData] = useState<MissionProgress[]>([]);
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery || '');
  const [filterGroup, setFilterGroup] = useState('ALL');
  const [filterStatus, setFilterStatus] = useState('ALL');
  const [sortOrder, setSortOrder] = useState('LAST_ACTIVE');

  useEffect(() => {
    setData(getMissionTracking());
  }, []);

  // Calculate Total Available Missions in BR Onboarding
  const parseTime = (tStr: string) => {
    if (!tStr) return 0;
    const t = tStr.toLowerCase();
    if (t.includes('h')) {
      const h = parseFloat(t.replace('h', ''));
      return isNaN(h) ? 0 : h * 60;
    }
    if (t.includes('m')) {
      const m = parseFloat(t.replace('m', ''));
      return isNaN(m) ? 0 : m;
    }
    if (t.includes(':')) {
      const parts = t.split(':');
      const h = parseInt(parts[0]) || 0;
      const m = parseInt(parts[1]) || 0;
      return (h * 60) + m;
    }
    return 0;
  };

  const formatTime = (mins: number) => {
    const h = Math.floor(mins / 60);
    const m = Math.floor(mins % 60);
    if (h > 0) return `${h}h ${m}m`;
    return `${m}m`;
  };

  // Calculate Total Available Missions and Time in BR Onboarding
  const { totalMissionsAvailable, totalProgrammedMinutes } = useMemo(() => {
    if (!config || !config.onboarding) return { totalMissionsAvailable: 100, totalProgrammedMinutes: 0 };
    let count = 0;
    let mins = 0;
    config.onboarding.forEach((planet: any) => {
      (planet.secciones || []).forEach((sec: any) => {
        (sec.rows || []).forEach((row: any) => {
          count++;
          mins += parseTime(row.tiempo);
        });
      });
    });
    return { totalMissionsAvailable: count === 0 ? 1 : count, totalProgrammedMinutes: mins };
  }, [config]);

  // Aggregate data per instructor
  // Aggregate data per instructor
  const instructorStats = useMemo(() => {
    const stats: Record<string, { email: string, instructorId: string, opened: number, finished: number, openedPlanets: number, finishedPlanets: number, lastMission: string, lastActive: number, sessionCode: string, consumedMinutes: number }> = {};

    data.forEach(log => {
      if (!stats[log.instructor]) {
        stats[log.instructor] = {
          email: log.email,
          instructorId: log.instructor,
          opened: 0,
          finished: 0,
          openedPlanets: 0,
          finishedPlanets: 0,
          lastMission: 'N/A',
          lastActive: 0,
          sessionCode: log.codigo,
          consumedMinutes: 0
        };
      }

      if (log.tiempoAperturaRaw && log.tiempoAperturaRaw > stats[log.instructor].lastActive) {
        stats[log.instructor].lastActive = log.tiempoAperturaRaw;
        stats[log.instructor].lastMission = log.tema || log.missao;
      }
      if (log.marcarComoVistoRaw && log.marcarComoVistoRaw > stats[log.instructor].lastActive) {
         stats[log.instructor].lastActive = log.marcarComoVistoRaw;
         stats[log.instructor].lastMission = log.tema || log.missao;
      }
    });

    // Now count unique missions opened and finished per instructor
    Object.keys(stats).forEach(instructor => {
        const instructorLogs = data.filter(d => d.instructor === instructor);
        
        // Unique missions opened
        const openedMissions = new Set(instructorLogs.filter(d => !!d.tiempoApertura).map(d => `${d.planetas}-${d.missao}-${d.tema}`));
        stats[instructor].opened = openedMissions.size;

        // Unique missions finished
        const finishedLogs = instructorLogs.filter(d => !!d.marcarComoFinalizado);
        const finishedMap = new Map<string, string>();
        finishedLogs.forEach(d => finishedMap.set(`${d.planetas}-${d.missao}-${d.tema}`, d.tiempoEstimado));
        
        stats[instructor].finished = finishedMap.size;

        // Unique planets opened and finished
        const openedPlanetsSet = new Set(instructorLogs.filter(d => !!d.tiempoApertura && !!d.planetas).map(d => d.planetas));
        stats[instructor].openedPlanets = openedPlanetsSet.size;

        const finishedPlanetsSet = new Set(finishedLogs.filter(d => !!d.planetas).map(d => d.planetas));
        stats[instructor].finishedPlanets = finishedPlanetsSet.size;
        
        let mins = 0;
        finishedMap.forEach(timeStr => mins += parseTime(timeStr));
        stats[instructor].consumedMinutes = mins;
    });

    return Object.values(stats); // We sort later
  }, [data]);

  // Extract unique groups for the filter dropdown
  const uniqueGroups = useMemo(() => {
    const groups = new Set<string>();
    instructorStats.forEach(inst => {
      if (inst.sessionCode) groups.add(inst.sessionCode);
    });
    return Array.from(groups).sort();
  }, [instructorStats]);

  // Apply Filters and Sorting
  const processedStats = useMemo(() => {
    let result = [...instructorStats];

    // Filter by Search
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(inst => 
        inst.email.toLowerCase().includes(q) || 
        (inst.sessionCode && inst.sessionCode.toLowerCase().includes(q))
      );
    }

    // Filter by Group
    if (filterGroup !== 'ALL') {
      result = result.filter(inst => inst.sessionCode === filterGroup);
    }

    // Filter by Status
    if (filterStatus !== 'ALL') {
      result = result.filter(inst => {
        const pct = Math.min(100, Math.round((inst.finished / totalMissionsAvailable) * 100));
        if (filterStatus === 'BEHIND') return pct < 30;
        if (filterStatus === 'ON_TRACK') return pct >= 30 && pct < 70;
        if (filterStatus === 'GRADUATED') return pct >= 70;
        return true;
      });
    }

    // Sort
    result.sort((a, b) => {
      if (sortOrder === 'LAST_ACTIVE') return b.lastActive - a.lastActive;
      const pctA = Math.min(100, Math.round((a.finished / totalMissionsAvailable) * 100));
      const pctB = Math.min(100, Math.round((b.finished / totalMissionsAvailable) * 100));
      if (sortOrder === 'LOWEST_PROGRESS') return pctA - pctB;
      if (sortOrder === 'HIGHEST_PROGRESS') return pctB - pctA;
      if (sortOrder === 'ALPHABETICAL') return a.email.localeCompare(b.email);
      return 0;
    });

    return result;
  }, [instructorStats, searchQuery, filterGroup, filterStatus, sortOrder, totalMissionsAvailable]);

  const globalStats = {
    instructors: instructorStats.length,
    totalFinished: instructorStats.reduce((acc, curr) => acc + curr.finishedPlanets, 0),
    totalOpened: instructorStats.reduce((acc, curr) => acc + curr.openedPlanets, 0)
  };

  return (
    <div style={{ padding: '40px', background: '#F5F7F9', minHeight: '100%' }}>
      {/* Global KPIs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20, marginBottom: 40 }}>
        
        <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} style={{ background: '#fff', padding: 24, borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.03)', display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'rgba(15,0,79,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Users size={28} color="#0F004F" />
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 800, color: '#666', textTransform: 'uppercase', letterSpacing: '1px' }}>Instructores Activos</div>
            <div style={{ fontSize: 32, fontWeight: 900, color: '#0F004F' }}>{globalStats.instructors}</div>
          </div>
        </motion.div>

        <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay: 0.1}} style={{ background: '#fff', padding: 24, borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.03)', display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'rgba(153,204,51,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CheckCircle2 size={28} color="#99CC33" />
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 800, color: '#666', textTransform: 'uppercase', letterSpacing: '1px' }}>Planetas Finalizados</div>
            <div style={{ fontSize: 32, fontWeight: 900, color: '#0F004F' }}>{globalStats.totalFinished}</div>
          </div>
        </motion.div>

        <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay: 0.2}} style={{ background: '#fff', padding: 24, borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.03)', display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'rgba(0,214,204,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <PlayCircle size={28} color="#00D6CC" />
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 800, color: '#666', textTransform: 'uppercase', letterSpacing: '1px' }}>Planetas en Curso</div>
            <div style={{ fontSize: 32, fontWeight: 900, color: '#0F004F' }}>{Math.max(0, globalStats.totalOpened - globalStats.totalFinished)}</div>
          </div>
        </motion.div>

      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <div style={{ fontSize: 20, fontWeight: 900, color: '#0F004F', display: 'flex', alignItems: 'center', gap: 10 }}>
          <BarChart3 size={24} color="#ED1650" /> PROGRESO POR INSTRUCTOR ({processedStats.length})
        </div>
      </div>

      {/* Quick Filters Bar */}
      <div style={{ background: '#fff', padding: 20, borderRadius: 16, marginBottom: 24, display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: '1 1 250px', background: '#F5F7F9', padding: '10px 16px', borderRadius: 8 }}>
          <Search size={18} color="#888" />
          <input 
            type="text" 
            placeholder="Buscar instructor o código..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: 13, color: '#333', fontWeight: 600 }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Filter size={16} color="#0F004F" />
          <select 
            value={filterGroup} 
            onChange={(e) => setFilterGroup(e.target.value)}
            style={{ padding: '10px', borderRadius: 8, border: '1px solid #E2E8F0', outline: 'none', fontSize: 12, fontWeight: 700, color: '#0F004F', cursor: 'pointer', background: '#fff' }}
          >
            <option value="ALL">TODOS LOS GRUPOS</option>
            {uniqueGroups.map(g => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>

        <select 
          value={filterStatus} 
          onChange={(e) => setFilterStatus(e.target.value)}
          style={{ padding: '10px', borderRadius: 8, border: '1px solid #E2E8F0', outline: 'none', fontSize: 12, fontWeight: 700, color: '#0F004F', cursor: 'pointer', background: '#fff' }}
        >
          <option value="ALL">CUALQUIER ESTADO</option>
          <option value="BEHIND">ATRASADOS (&lt;30%)</option>
          <option value="ON_TRACK">EN CAMINO (30-70%)</option>
          <option value="GRADUATED">AVANZADOS (&gt;70%)</option>
        </select>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginLeft: 'auto' }}>
          <SortDesc size={16} color="#0F004F" />
          <select 
            value={sortOrder} 
            onChange={(e) => setSortOrder(e.target.value)}
            style={{ padding: '10px', borderRadius: 8, border: '1px solid #E2E8F0', outline: 'none', fontSize: 12, fontWeight: 700, color: '#0F004F', cursor: 'pointer', background: '#fff' }}
          >
            <option value="LAST_ACTIVE">Última Actividad</option>
            <option value="LOWEST_PROGRESS">Menor Progreso</option>
            <option value="HIGHEST_PROGRESS">Mayor Progreso</option>
            <option value="ALPHABETICAL">Alfabético</option>
          </select>
        </div>

      </div>

      {/* Instructor Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: 20 }}>
        {processedStats.length === 0 && (
          <div style={{ padding: 40, background: '#fff', borderRadius: 16, gridColumn: '1 / -1', textAlign: 'center', color: '#666', fontWeight: 600 }}>
            No se encontraron instructores con estos filtros.
          </div>
        )}

        {processedStats.map((inst, i) => {
          const progressPercentage = Math.min(100, Math.round((inst.finished / totalMissionsAvailable) * 100));
          let progressColor = '#ED1650'; // Red for < 30%
          if (progressPercentage >= 30) progressColor = '#FFB800'; // Yellow for 30-70%
          if (progressPercentage >= 70) progressColor = '#99CC33'; // Green for > 70%

          return (
            <motion.div 
              key={inst.email}
              initial={{opacity: 0, scale: 0.95}}
              animate={{opacity: 1, scale: 1}}
              transition={{delay: i * 0.05}}
              style={{ background: '#fff', borderRadius: 16, padding: 24, boxShadow: '0 4px 15px rgba(0,0,0,0.05)', cursor: 'pointer', border: '2px solid transparent', transition: 'all 0.2s ease' }}
              whileHover={{ scale: 1.02, borderColor: '#00D6CC', boxShadow: '0 8px 25px rgba(0,214,204,0.15)' }}
              onClick={() => onViewDetails && onViewDetails(inst.instructorId, inst.sessionCode)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 900, color: '#0F004F' }}>{inst.email.split('@')[0]}</div>
                  <div style={{ fontSize: 11, color: '#888', fontWeight: 600 }}>{inst.email}</div>
                </div>
                <div style={{ background: '#F0F4F8', padding: '4px 8px', borderRadius: 6, fontSize: 10, fontWeight: 800, color: '#555' }}>
                  {inst.sessionCode}
                </div>
              </div>

              {/* Progress Bar */}
              <div style={{ marginBottom: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 800, color: '#444', textTransform: 'uppercase' }}>Progreso Base</span>
                  <span style={{ fontSize: 12, fontWeight: 900, color: progressColor }}>{progressPercentage}%</span>
                </div>
                <div style={{ height: 8, background: '#EEEEEE', borderRadius: 4, overflow: 'hidden' }}>
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercentage}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    style={{ height: '100%', background: progressColor, borderRadius: 4 }}
                  />
                </div>
                <div style={{ fontSize: 10, color: '#888', marginTop: 6, textAlign: 'right', fontWeight: 600 }}>
                  {inst.finished} de {totalMissionsAvailable} misiones completadas
                </div>
              </div>

              {/* Time Analysis */}
              <div style={{ marginBottom: 20, display: 'flex', gap: 10 }}>
                <div style={{ flex: 1, background: '#F8F9FA', padding: 10, borderRadius: 8 }}>
                  <div style={{ fontSize: 9, fontWeight: 800, color: '#888', textTransform: 'uppercase', marginBottom: 4 }}>Tiempo Programado</div>
                  <div style={{ fontSize: 12, fontWeight: 900, color: '#0F004F', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Clock size={12} color="#0F004F" /> {formatTime(totalProgrammedMinutes)}
                  </div>
                </div>
                <div style={{ flex: 1, background: '#F8F9FA', padding: 10, borderRadius: 8 }}>
                  <div style={{ fontSize: 9, fontWeight: 800, color: '#888', textTransform: 'uppercase', marginBottom: 4 }}>Tiempo Consumido</div>
                  <div style={{ fontSize: 12, fontWeight: 900, color: progressColor, display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Clock size={12} color={progressColor} /> {formatTime(inst.consumedMinutes)}
                  </div>
                </div>
              </div>

              {/* Last Activity */}
              <div style={{ background: '#F8FAFC', padding: 12, borderRadius: 8, borderLeft: '3px solid #00D6CC' }}>
                <div style={{ fontSize: 10, fontWeight: 800, color: '#00D6CC', textTransform: 'uppercase', marginBottom: 4 }}>Última Misión Activa</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#333' }}>
                  {inst.lastMission}
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>

    </div>
  );
};
