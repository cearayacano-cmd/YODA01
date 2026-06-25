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
    const countNodes = (sections: any[]) => {
      sections.forEach(sec => {
        (sec.rows || []).forEach(row => {
          count++;
          mins += parseTime(row.tiempo || row.ch || '0');
        });
      });
    };

    if (config.onboarding) {
      config.onboarding.forEach((planet: any) => {
        countNodes(planet.secciones || planet.data?.secciones || []);
      });
    }
    if (config.frontLineContent) {
      config.frontLineContent.forEach((planet: any) => {
        countNodes(Array.isArray(planet) ? planet : (planet.secciones || []));
      });
    }
    if (config.soporteContent) {
      config.soporteContent.forEach((planet: any) => {
        countNodes(Array.isArray(planet) ? planet : (planet.secciones || []));
      });
    }
    if (config.fsc) {
      config.fsc.forEach((planet: any) => {
        countNodes(Array.isArray(planet) ? planet : (planet.secciones || []));
      });
    }
    if (config.rutaLider) {
      config.rutaLider.forEach((planet: any) => {
        countNodes(Array.isArray(planet) ? planet : (planet.secciones || []));
      });
    }
    return { totalMissionsAvailable: count === 0 ? 1 : count, totalProgrammedMinutes: mins };
  }, [config]);

  // Aggregate data per instructor
  // Aggregate data per instructor
  const instructorStats = useMemo(() => {
    const stats: Record<string, { email: string, instructorId: string, planetName: string, expedicion: string, opened: number, finished: number, totalNodes: number, totalProgrammedMinutesStr: string, lastMission: string, lastActive: number, sessionCode: string, consumedMinutes: number }> = {};

    data.forEach(log => {
      const planetName = log.planetas || 'Desconocido';
      const expedicion = log.expedicion || 'Galaxia Principal';
      const key = `${log.instructor}|${planetName}`;

      if (!stats[key]) {
        // Calculate total nodes for this planet
        let tNodes = 1;
        let tMins = 0;
        if (config && config.rutaLider) {
          const section = config.rutaLider.find((s: any) => s.label === planetName || s.name === planetName);
          if (section) {
            let n = 0;
            const countNodes = (rows: any[]) => {
                rows.forEach((r: any) => {
                    if (r.tipo === 'group') {
                        countNodes(r.rows || []);
                    } else if (r.tema) {
                        n++;
                        tMins += parseTime(r.tiempo || r.ch || '0');
                    }
                });
            };
            countNodes(Array.isArray(section) ? section : (section.secciones || []));
            if (n > 0) tNodes = n;
          }
        }

        stats[key] = {
          email: log.email,
          instructorId: log.instructor,
          planetName: planetName,
          expedicion: expedicion,
          opened: 0,
          finished: 0,
          totalNodes: tNodes,
          totalProgrammedMinutesStr: tMins > 0 ? formatTime(tMins) : '0h 0m',
          lastMission: 'N/A',
          lastActive: 0,
          sessionCode: log.codigo,
          consumedMinutes: 0
        };
      }

      if (log.tiempoAperturaRaw && log.tiempoAperturaRaw > stats[key].lastActive) {
        stats[key].lastActive = log.tiempoAperturaRaw;
        stats[key].lastMission = log.tema || log.missao;
      }
      if (log.marcarComoVistoRaw && log.marcarComoVistoRaw > stats[key].lastActive) {
         stats[key].lastActive = log.marcarComoVistoRaw;
         stats[key].lastMission = log.tema || log.missao;
      }
    });

    // Now count unique missions opened and finished per instructor+planet
    Object.keys(stats).forEach(key => {
        const [instructor, planetName] = key.split('|');
        const instructorLogs = data.filter(d => d.instructor === instructor && (d.planetas || 'Desconocido') === planetName);
        
        // Unique missions opened
        const openedMissions = new Set(instructorLogs.filter(d => !!d.tiempoApertura).map(d => `${d.missao}-${d.tema}`));
        stats[key].opened = openedMissions.size;

        // Unique missions finished
        const finishedLogs = instructorLogs.filter(d => !!d.marcarComoFinalizado);
        const finishedMap = new Map<string, string>();
        finishedLogs.forEach(d => finishedMap.set(`${d.missao}-${d.tema}`, d.tiempoEstimado));
        
        stats[key].finished = finishedMap.size;
        
        let mins = 0;
        finishedMap.forEach(timeStr => mins += parseTime(timeStr));
        stats[key].consumedMinutes = mins;
    });

    return Object.values(stats); // We sort later
  }, [data, config]);

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

    if (searchQuery) {
      const term = searchQuery.toLowerCase();
      result = result.filter(inst => 
        inst.email.toLowerCase().includes(term) || 
        inst.instructorId.toLowerCase().includes(term) ||
        inst.planetName.toLowerCase().includes(term)
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
          const progressPercentage = Math.min(100, Math.round((inst.finished / inst.totalNodes) * 100));
          let progressColor = '#ED1650'; // Red for < 30%
          if (progressPercentage >= 30) progressColor = '#FFB800'; // Yellow for 30-70%
          if (progressPercentage >= 70) progressColor = '#99CC33'; // Green for > 70%

          return (
            <motion.div 
              key={`${inst.email}-${inst.planetName}`}
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: i * 0.05, duration: 0.4, type: 'spring'}}
              style={{ 
                background: 'linear-gradient(145deg, #ffffff, #fcfdff)', 
                borderRadius: 24, 
                padding: 30, 
                boxShadow: '0 10px 40px rgba(0,0,0,0.04), 0 2px 10px rgba(0,0,0,0.02)', 
                cursor: 'pointer', 
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.8)'
              }}
              whileHover={{ 
                y: -5, 
                boxShadow: `0 20px 40px ${progressColor}22, 0 10px 20px rgba(0,0,0,0.05)`,
                borderColor: `${progressColor}55`
              }}
              onClick={() => onViewDetails && onViewDetails(inst.instructorId, inst.sessionCode)}
            >
              {/* Dynamic Glow Background */}
              <div style={{ position: 'absolute', top: -50, right: -50, width: 150, height: 150, background: `radial-gradient(circle, ${progressColor}15 0%, transparent 70%)`, borderRadius: '50%', pointerEvents: 'none' }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ 
                    width: 50, height: 50, borderRadius: 16, 
                    background: `linear-gradient(135deg, ${progressColor}22, ${progressColor}11)`, 
                    border: `2px solid ${progressColor}44`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: progressColor, fontWeight: 900, fontSize: 20,
                    boxShadow: `inset 0 2px 10px ${progressColor}22`
                  }}>
                    {inst.expedicion.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div style={{ fontSize: 18, fontWeight: 900, color: '#0F004F', letterSpacing: '-0.5px' }}>{inst.expedicion}</div>
                    <div style={{ fontSize: 12, color: '#888', fontWeight: 600 }}>{inst.planetName}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
                  <div style={{ background: 'rgba(15,0,79,0.04)', border: '1px solid rgba(15,0,79,0.1)', padding: '4px 10px', borderRadius: 20, fontSize: 10, fontWeight: 800, color: '#0F004F', letterSpacing: '1px', maxWidth: '120px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {inst.email.split('@')[0]}
                  </div>
                  <div style={{ background: 'rgba(22, 163, 74, 0.1)', border: '1px solid rgba(22, 163, 74, 0.2)', padding: '2px 8px', borderRadius: 10, fontSize: 9, fontWeight: 800, color: '#16A34A', letterSpacing: '1px' }}>
                    ACTIVO
                  </div>
                </div>
              </div>

              {/* Premium Progress Bar */}
              <div style={{ marginBottom: 24, background: 'rgba(245,247,249,0.8)', padding: 16, borderRadius: 16, border: '1px solid rgba(0,0,0,0.03)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12, alignItems: 'center' }}>
                  <span style={{ fontSize: 11, fontWeight: 800, color: '#666', textTransform: 'uppercase', letterSpacing: '1px' }}>Progreso de la Clase</span>
                  <span style={{ fontSize: 16, fontWeight: 900, color: progressColor }}>{progressPercentage}%</span>
                </div>
                <div style={{ height: 10, background: '#E2E8F0', borderRadius: 10, overflow: 'hidden', position: 'relative', boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)' }}>
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercentage}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    style={{ height: '100%', background: `linear-gradient(90deg, ${progressColor}, ${progressColor}dd)`, borderRadius: 10, position: 'relative' }}
                  >
                    <motion.div 
                        animate={{ x: ['-100%', '200%'] }} 
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} 
                        style={{ position: 'absolute', top: 0, left: 0, width: '50%', height: '100%', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)', transform: 'skewX(-20deg)' }} 
                    />
                  </motion.div>
                </div>
                <div style={{ fontSize: 11, color: '#888', marginTop: 10, textAlign: 'right', fontWeight: 700 }}>
                  <span style={{ color: '#0F004F' }}>{inst.finished}</span> de {inst.totalNodes} módulos completados
                </div>
              </div>

              {/* Time Analysis */}
              <div style={{ marginBottom: 24, display: 'flex', gap: 12 }}>
                <div style={{ flex: 1, background: '#fff', border: '1px solid #E2E8F0', padding: 12, borderRadius: 12, display: 'flex', alignItems: 'center', gap: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                  <div style={{ background: 'rgba(15,0,79,0.05)', padding: 8, borderRadius: 8 }}><Clock size={16} color="#0F004F" /></div>
                  <div>
                    <div style={{ fontSize: 9, fontWeight: 800, color: '#888', textTransform: 'uppercase', marginBottom: 2 }}>Asignado</div>
                    <div style={{ fontSize: 13, fontWeight: 900, color: '#0F004F' }}>{inst.totalProgrammedMinutesStr}</div>
                  </div>
                </div>
                <div style={{ flex: 1, background: '#fff', border: `1px solid ${progressColor}33`, padding: 12, borderRadius: 12, display: 'flex', alignItems: 'center', gap: 12, boxShadow: `0 2px 8px ${progressColor}11` }}>
                  <div style={{ background: `${progressColor}15`, padding: 8, borderRadius: 8 }}><Clock size={16} color={progressColor} /></div>
                  <div>
                    <div style={{ fontSize: 9, fontWeight: 800, color: '#888', textTransform: 'uppercase', marginBottom: 2 }}>Invertido</div>
                    <div style={{ fontSize: 13, fontWeight: 900, color: progressColor }}>{formatTime(inst.consumedMinutes)}</div>
                  </div>
                </div>
              </div>

              {/* Last Activity Badge */}
              <div style={{ background: 'linear-gradient(90deg, rgba(0,214,204,0.1), transparent)', padding: '12px 16px', borderRadius: 12, borderLeft: '4px solid #00D6CC', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ fontSize: 10, fontWeight: 800, color: '#00D6CC', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Última Actividad</div>
                <div style={{ fontSize: 13, fontWeight: 800, color: '#333', maxWidth: '50%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', textAlign: 'right' }}>
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
