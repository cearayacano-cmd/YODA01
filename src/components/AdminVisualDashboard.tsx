import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Users, CheckCircle2, PlayCircle, BarChart3, Clock, Target, Search, Filter, SortDesc } from 'lucide-react';
import { getMissionTracking, MissionProgress } from '../lib/tracking';

export const AdminVisualDashboard = ({ config, initialSearchQuery, onViewDetails, stationName, isEs }: any) => {
  const [data, setData] = useState<MissionProgress[]>([]);
  const [activityLogs, setActivityLogs] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery || '');
  const [filterGroup, setFilterGroup] = useState('ALL');
  const [filterStatus, setFilterStatus] = useState('ALL');
  const [filterInstructor, setFilterInstructor] = useState('ALL');
  const [filterDate, setFilterDate] = useState('');
  const [filterFabrica, setFilterFabrica] = useState('ALL');
  const [filterExpedicion, setFilterExpedicion] = useState('ALL');
  const [sortOrder, setSortOrder] = useState('LAST_ACTIVE');
  const [forceRender, setForceRender] = useState(0);

  useEffect(() => {
    let trackingData = getMissionTracking();
    if (stationName) {
      const saved = localStorage.getItem('yoda_users_v4');
      const users = saved ? JSON.parse(saved) : [];
      trackingData = trackingData.filter(d => {
        const u = users.find((user: any) => user.correo === d.email);
        if (!u) return false;
        if (stationName === 'BR') return u.acceso === 'BR Station';
        if (stationName === 'SSC') return u.acceso === 'SSC Station';
        return true;
      });
    }
    setData(trackingData);
    const savedLogs = localStorage.getItem('yoda_activity_logs');
    setActivityLogs(savedLogs ? JSON.parse(savedLogs) : []);
  }, [forceRender, stationName]);

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
    const instructorStats = useMemo(() => {
        const stats: Record<string, { 
            email: string, 
            instructorId: string, 
            planetName: string, 
            expedicion: string, 
            opened: number, 
            finished: number, 
            totalNodes: number, 
            totalProgrammedMinutesStr: string, 
            lastMission: string, 
            lastActive: number, 
            sessionCode: string, 
            consumedMinutes: number,
            macroStructure: { sectionName: string, expectedRows: string[] }[]
        }> = {};

    data.forEach(log => {
      let planetName = log.planetas || 'Desconocido';
      const expedicion = log.expedicion || 'Galaxia Principal';
      
      if (expedicion === 'Módulo de Aprendizaje') {
          planetName = 'Ruta del Líder';
      }
      if (planetName.toUpperCase().includes('ONBOARDING')) return;

      const key = `${log.instructor}|${planetName}`;

      if (!stats[key]) {
        let tMins = 0;
        let macroStructure: { sectionName: string, expectedRows: string[] }[] = [];
        
        let fabrica = 'Otro';
        const prefix = log.email.split('@')[0];
        if (log.email.toLowerCase().includes('carlose.araya')) {
          fabrica = 'LATAM';
        } else if (log.email.toLowerCase().includes('konectabr.com')) {
          fabrica = 'Konecta Brasil';
        } else if (log.email.toLowerCase().includes('aec.com')) {
          fabrica = 'AeC';
        } else if (log.email.toLowerCase().includes('konectaperu.com')) {
          fabrica = 'Konecta Perú';
        } else if (log.email.toLowerCase().includes('almacontact.com')) {
          fabrica = 'Alma Contact';
        } else {
          const charCodeSum = log.email.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
          fabrica = charCodeSum % 2 === 0 ? 'Konecta Brasil' : 'AeC';
        }
        
        if (config) {
            const buildMacro = (sections: any[]) => {
                sections.forEach(sec => {
                    const secName = sec.label || sec.name || 'Unlabeled Section';
                    const expectedRows: string[] = [];
                    const rows = sec.rows || (sec.secciones ? sec.secciones : Array.isArray(sec) ? sec : [sec]);
                    rows.forEach((r: any) => {
                         if (r.tema) {
                             expectedRows.push(r.tema);
                             tMins += parseTime(r.tiempo || r.ch || '0');
                         }
                    });
                    if (expectedRows.length > 0) {
                        macroStructure.push({ sectionName: secName, expectedRows });
                    }
                });
            };

            const getSecciones = (obj: any) => {
                if (!obj) return [];
                if (obj.secciones) return obj.secciones;
                if (Array.isArray(obj)) return obj;
                if (obj.rows) return [obj];
                return [];
            };

            const searchAndCount = (exploracionKey: string, contentArray: any[]) => {
                if (!config.exploracion || !config.exploracion[exploracionKey] || !contentArray) return false;
                
                const idx = config.exploracion[exploracionKey].findIndex((p: any) => p.label === planetName || p.name === planetName || p.id === planetName);
                
                if (idx !== -1 && contentArray[idx]) {
                    const planetObj = config.exploracion[exploracionKey][idx];
                    if (config.onboarding) {
                        const onboardingIdx = planetObj.onboardingIdx || 0;
                        const isFirstPlanet = (idx === 0 && exploracionKey === 'frontLine') || planetObj.onboardingIdx != null;
                        if (isFirstPlanet && config.onboarding[onboardingIdx]) {
                            buildMacro(getSecciones(config.onboarding[onboardingIdx].data || config.onboarding[onboardingIdx]));
                        }
                    }
                    buildMacro(getSecciones(contentArray[idx]));
                    return true;
                }
                
                // Fallback direct search
                const p = contentArray.find((s: any) => s.label === planetName || s.name === planetName || s.id === planetName);
                if (p) {
                   if (config.onboarding) {
                       const onboardingIdx = p.onboardingIdx || 0;
                       const pIdx = contentArray.indexOf(p);
                       const isFirstPlanet = (pIdx === 0 && exploracionKey === 'frontLine') || p.onboardingIdx != null;
                       if (isFirstPlanet && config.onboarding[onboardingIdx]) {
                           buildMacro(getSecciones(config.onboarding[onboardingIdx].data || config.onboarding[onboardingIdx]));
                       }
                   }
                   buildMacro(getSecciones(p));
                   return true;
                }
                return false;
            };

            if (planetName === 'Ruta del Líder') {
                if (config.rutaLider) {
                    config.rutaLider.forEach((p: any) => {
                        buildMacro(getSecciones(p));
                    });
                }
            } else {
                if (!searchAndCount('frontLine', config.frontLineContent)) {
                    if (!searchAndCount('soporte', config.soporteContent)) {
                        if (!searchAndCount('fieldSupport', config.fsc)) {
                            if (config.onboarding) {
                                const p = config.onboarding.find((s: any) => s.label === planetName || s.name === planetName || s.id === planetName);
                                if (p) buildMacro(getSecciones(p));
                            }
                        }
                    }
                }
            }
        }

        stats[key] = {
          email: log.email,
          instructorId: log.instructor,
          fabrica: fabrica,
          planetName: planetName,
          expedicion: expedicion,
          opened: 0,
          finished: 0,
          totalNodes: macroStructure.length > 0 ? macroStructure.length : 1,
          totalProgrammedMinutesStr: tMins > 0 ? formatTime(tMins) : '0h 0m',
          lastMission: 'N/A',
          lastActive: 0,
          sessionCode: log.codigo,
          consumedMinutes: 0,
          macroStructure: macroStructure
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
        const instructorLogs = data.filter(d => {
            if (d.instructor !== instructor) return false;
            const logExp = d.expedicion || 'Galaxia Principal';
            const logPlanet = d.planetas || 'Desconocido';
            if (planetName === 'Ruta del Líder' && logExp === 'Módulo de Aprendizaje') return true;
            return logPlanet === planetName;
        });
        
        // Unique missions opened
        const openedMissions = new Set(instructorLogs.filter(d => !!d.tiempoApertura).map(d => `${d.missao}-${d.tema}`));
        stats[key].opened = openedMissions.size; // This can stay as raw clicks count

        // Unique missions finished
        const finishedLogs = instructorLogs.filter(d => !!d.marcarComoFinalizado);
        const finishedSet = new Set(finishedLogs.map(d => `${d.missao}-${d.tema}`));
        const finishedMap = new Map<string, string>();
        finishedLogs.forEach(d => finishedMap.set(`${d.missao}-${d.tema}`, d.tiempoEstimado));
        
        // Calculate MACRO finished: a macro is finished if ALL its expected rows are in the finishedSet
        let finishedMacroCount = 0;
        stats[key].macroStructure.forEach(macro => {
            const allFinished = macro.expectedRows.every(rowName => {
                 const secName = macro.sectionName.toUpperCase();
                 const rowUpper = rowName.toUpperCase();
                 return Array.from(finishedSet).some((finishedKey: any) => {
                     const keyUpper = String(finishedKey).toUpperCase();
                     return keyUpper === `${secName}-${rowUpper}` || 
                            keyUpper === `-${rowUpper}` || 
                            keyUpper === `${stats[key].planetName.toUpperCase()}-${rowUpper}`;
                 });
            });
            if (macro.expectedRows.length > 0 && allFinished) finishedMacroCount++;
        });
        
        stats[key].finished = finishedMacroCount;
        
        // Calculate INVERTIDO from actual activity logs!
        const planetLogs = activityLogs.filter(a => a.user === stats[key].email && a.action === 'TRACK_TIEMPO' && a.planetLabel === planetName);
        const totalElapsedSecs = planetLogs.reduce((acc, a) => acc + (a.elapsedSecs || 0), 0);
        
        // Always include at least 1 minute if they have any finished nodes but spent less than 60s, to show some progress.
        let mins = Math.floor(totalElapsedSecs / 60);
        if (mins === 0 && (totalElapsedSecs > 0 || finishedMacroCount > 0 || finishedSet.size > 0)) {
            mins = 1;
        }
        
        stats[key].consumedMinutes = mins;
    });

    return Object.values(stats); // We sort later
  }, [data, activityLogs, config]);

  // Extract unique groups for the filter dropdown
  const uniqueGroups = useMemo(() => {
    const groups = new Set<string>();
    instructorStats.forEach(inst => {
      if (inst.sessionCode) groups.add(inst.sessionCode);
    });
    return Array.from(groups).sort();
  }, [instructorStats]);

  // Extract unique instructors for the filter dropdown
  const uniqueInstructors = useMemo(() => {
    const instructors = new Set<string>();
    instructorStats.forEach(inst => {
      instructors.add(inst.email);
    });
    return Array.from(instructors).sort();
  }, [instructorStats]);

  const uniqueFabricas = useMemo(() => Array.from(new Set(instructorStats.map(s => s.fabrica))).sort(), [instructorStats]);
  const uniqueExpediciones = useMemo(() => Array.from(new Set(instructorStats.map(s => s.expedicion))).sort(), [instructorStats]);

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

    // Filter by Instructor
    if (filterInstructor !== 'ALL') {
      result = result.filter(inst => inst.email === filterInstructor);
    }

    // Filter by Group
    if (filterGroup !== 'ALL') {
      result = result.filter(inst => inst.sessionCode === filterGroup);
    }

    if (filterFabrica !== 'ALL') {
      result = result.filter(inst => inst.fabrica === filterFabrica);
    }

    if (filterExpedicion !== 'ALL') {
      result = result.filter(inst => inst.expedicion === filterExpedicion);
    }

    // Filter by Date
    if (filterDate) {
      result = result.filter(inst => {
        const instDate = new Date(inst.lastActive).toISOString().split('T')[0];
        return instDate === filterDate;
      });
    }

    // Filter by Status
    if (filterStatus !== 'ALL') {
      result = result.filter(inst => {
        const isFinished = inst.finished >= inst.totalNodes;
        if (filterStatus === 'FINISHED') return isFinished;
        if (filterStatus === 'IN_PROGRESS') return !isFinished;
        return true;
      });
    }

    // Sort
    result.sort((a, b) => {
      if (sortOrder === 'LAST_ACTIVE') return b.lastActive - a.lastActive;
      const pctA = Math.min(100, Math.round((a.finished / a.totalNodes) * 100));
      const pctB = Math.min(100, Math.round((b.finished / b.totalNodes) * 100));
      if (sortOrder === 'LOWEST_PROGRESS') return pctA - pctB;
      if (sortOrder === 'HIGHEST_PROGRESS') return pctB - pctA;
      if (sortOrder === 'ALPHABETICAL') return a.email.localeCompare(b.email);
      return 0;
    });

    return result;
  }, [instructorStats, searchQuery, filterInstructor, filterGroup, filterDate, filterStatus, sortOrder]);

  const globalStats = {
    instructors: new Set(instructorStats.map(s => s.email)).size,
    totalFinished: instructorStats.filter(curr => curr.finished >= curr.totalNodes).length,
    totalOpened: instructorStats.length
  };

  return (
    <div style={{ padding: '40px', background: '#F5F7F9', minHeight: '100%' }}>
      {/* Global KPIs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20, marginBottom: 40 }}>
        
        <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} style={{ background: '#fff', padding: 24, borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.03)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'rgba(15,0,79,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Users size={28} color="#0F004F" />
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 800, color: '#666', textTransform: 'uppercase', letterSpacing: '1px' }}>{isEs ? 'Instructores Activos' : 'Instrutores Ativos'}</div>
              <div style={{ fontSize: 32, fontWeight: 900, color: '#0F004F' }}>{globalStats.instructors}</div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay: 0.1}} style={{ background: '#fff', padding: 24, borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.03)', display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'rgba(153,204,51,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CheckCircle2 size={28} color="#99CC33" />
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 800, color: '#666', textTransform: 'uppercase', letterSpacing: '1px' }}>{isEs ? 'Planetas Finalizados' : 'Planetas Concluídos'}</div>
            <div style={{ fontSize: 32, fontWeight: 900, color: '#0F004F' }}>{globalStats.totalFinished}</div>
          </div>
        </motion.div>

        <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay: 0.2}} style={{ background: '#fff', padding: 24, borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.03)', display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'rgba(0,214,204,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <PlayCircle size={28} color="#00D6CC" />
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 800, color: '#666', textTransform: 'uppercase', letterSpacing: '1px' }}>{isEs ? 'Planetas en Curso' : 'Planetas em Curso'}</div>
            <div style={{ fontSize: 32, fontWeight: 900, color: '#0F004F' }}>{Math.max(0, globalStats.totalOpened - globalStats.totalFinished)}</div>
          </div>
        </motion.div>

      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <div style={{ fontSize: 20, fontWeight: 900, color: '#0F004F', display: 'flex', alignItems: 'center', gap: 10 }}>
          <BarChart3 size={24} color="#ED1650" /> {isEs ? 'PROGRESO POR INSTRUCTOR' : 'PROGRESSO POR INSTRUTOR'} ({processedStats.length})
        </div>
      </div>

      {/* Quick Filters Bar */}
      <div style={{ background: '#fff', padding: 20, borderRadius: 16, marginBottom: 24, display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: '1 1 250px', background: '#F5F7F9', padding: '10px 16px', borderRadius: 8 }}>
          <Search size={18} color="#888" />
          <input 
            type="text" 
            placeholder={isEs ? "Buscar instructor o código..." : "Buscar instrutor ou código..."} 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: 13, color: '#333', fontWeight: 600 }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <select 
            value={filterInstructor} 
            onChange={(e) => setFilterInstructor(e.target.value)}
            style={{ padding: '10px', borderRadius: 8, border: '1px solid #E2E8F0', outline: 'none', fontSize: 12, fontWeight: 700, color: '#0F004F', cursor: 'pointer', background: '#fff', maxWidth: 150 }}
          >
            <option value="ALL">{isEs ? 'INSTRUCTORES' : 'INSTRUTORES'}</option>
            {uniqueInstructors.map(g => <option key={g} value={g}>{g.split('@')[0]}</option>)}
          </select>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <select 
            value={filterFabrica} 
            onChange={(e) => setFilterFabrica(e.target.value)}
            style={{ padding: '10px', borderRadius: 8, border: '1px solid #E2E8F0', outline: 'none', fontSize: 12, fontWeight: 700, color: '#0F004F', cursor: 'pointer', background: '#fff' }}
          >
            <option value="ALL">{isEs ? 'FÁBRICAS' : 'FÁBRICAS'}</option>
            {uniqueFabricas.map(g => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <select 
            value={filterExpedicion} 
            onChange={(e) => setFilterExpedicion(e.target.value)}
            style={{ padding: '10px', borderRadius: 8, border: '1px solid #E2E8F0', outline: 'none', fontSize: 12, fontWeight: 700, color: '#0F004F', cursor: 'pointer', background: '#fff' }}
          >
            <option value="ALL">{isEs ? 'EXPEDICIONES' : 'EXPEDIÇÕES'}</option>
            {uniqueExpediciones.map(g => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <select 
            value={filterGroup} 
            onChange={(e) => setFilterGroup(e.target.value)}
            style={{ padding: '10px', borderRadius: 8, border: '1px solid #E2E8F0', outline: 'none', fontSize: 12, fontWeight: 700, color: '#0F004F', cursor: 'pointer', background: '#fff' }}
          >
            <option value="ALL">{isEs ? 'GRUPOS' : 'GRUPOS'}</option>
            {uniqueGroups.map(g => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>

        <select 
          value={filterStatus} 
          onChange={(e) => setFilterStatus(e.target.value)}
          style={{ padding: '10px', borderRadius: 8, border: '1px solid #E2E8F0', outline: 'none', fontSize: 12, fontWeight: 700, color: '#0F004F', cursor: 'pointer', background: '#fff' }}
        >
          <option value="ALL">{isEs ? 'CUALQUIER ESTADO' : 'QUALQUER ESTADO'}</option>
          <option value="IN_PROGRESS">{isEs ? 'EN CURSO' : 'EM CURSO'}</option>
          <option value="FINISHED">{isEs ? 'FINALIZADOS' : 'CONCLUÍDOS'}</option>
        </select>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <input 
            type="date" 
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid #E2E8F0', outline: 'none', fontSize: 12, fontWeight: 700, color: '#0F004F', cursor: 'pointer', background: '#fff' }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginLeft: 'auto' }}>
          <SortDesc size={16} color="#0F004F" />
          <select 
            value={sortOrder} 
            onChange={(e) => setSortOrder(e.target.value)}
            style={{ padding: '10px', borderRadius: 8, border: '1px solid #E2E8F0', outline: 'none', fontSize: 12, fontWeight: 700, color: '#0F004F', cursor: 'pointer', background: '#fff' }}
          >
            <option value="LAST_ACTIVE">{isEs ? 'Última Actividad' : 'Última Atividade'}</option>
            <option value="LOWEST_PROGRESS">{isEs ? 'Menor Progreso' : 'Menor Progresso'}</option>
            <option value="HIGHEST_PROGRESS">{isEs ? 'Mayor Progreso' : 'Maior Progresso'}</option>
            <option value="ALPHABETICAL">{isEs ? 'Alfabético' : 'Alfabético'}</option>
          </select>
        </div>

      </div>

      {/* Instructor Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: 20 }}>
        {processedStats.length === 0 && (
          <div style={{ padding: 60, background: '#fff', borderRadius: 16, gridColumn: '1 / -1', textAlign: 'center', color: '#94A3B8', border: '1px dashed #CBD5E1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <BarChart3 size={48} color="#CBD5E1" />
            <div style={{ fontSize: 18, fontWeight: 800, color: '#64748B' }}>{isEs ? 'No hay datos para mostrar' : 'Não há dados para mostrar'}</div>
            <div style={{ fontSize: 14, fontWeight: 600 }}>{isEs ? 'Prueba ajustando los filtros o genera datos de prueba usando el botón de arriba.' : 'Tente ajustar os filtros ou gere dados de teste usando o botão acima.'}</div>
          </div>
        )}

        {processedStats.map((inst, i) => {
          const progressPercentage = Math.min(100, Math.round((inst.finished / inst.totalNodes) * 100));
          let progressColor = '#ED1650'; // Default for Ruta del Líder / others
          const exp = (inst.expedicion || '').toUpperCase();
          if (exp.includes('FRONT LINE')) progressColor = '#00A9E0';
          else if (exp.includes('SUPORTE') || exp.includes('SOPORTE')) progressColor = '#D400FF';
          else if (exp.includes('FIELD SUPPORT')) progressColor = '#99CC33';
          else if (exp.includes('MÓDULO DE APRENDIZAJE') || exp.includes('RUTA DEL LÍDER') || inst.planetName === 'Ruta del Líder') progressColor = '#ed1650';

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
                    <div style={{ fontSize: 18, fontWeight: 900, color: '#0F004F', letterSpacing: '-0.5px', textTransform: 'uppercase' }}>{inst.planetName}</div>
                    <div style={{ fontSize: 12, color: '#888', fontWeight: 600 }}>{inst.expedicion}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
                  <div style={{ background: 'rgba(15,0,79,0.04)', border: '1px solid rgba(15,0,79,0.1)', padding: '4px 10px', borderRadius: 20, fontSize: 10, fontWeight: 800, color: '#0F004F', letterSpacing: '1px', maxWidth: '120px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {inst.email.split('@')[0]}
                  </div>
                  <div style={{ background: 'rgba(22, 163, 74, 0.1)', border: '1px solid rgba(22, 163, 74, 0.2)', padding: '2px 8px', borderRadius: 10, fontSize: 9, fontWeight: 800, color: '#16A34A', letterSpacing: '1px' }}>
                    {isEs ? 'ACTIVO' : 'ATIVO'}
                  </div>
                </div>
              </div>

              {/* Premium Progress Bar */}
              <div style={{ marginBottom: 24, background: 'rgba(245,247,249,0.8)', padding: 16, borderRadius: 16, border: '1px solid rgba(0,0,0,0.03)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12, alignItems: 'center' }}>
                  <span style={{ fontSize: 11, fontWeight: 800, color: '#666', textTransform: 'uppercase', letterSpacing: '1px' }}>{isEs ? 'Progreso de la Clase' : 'Progresso da Classe'}</span>
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
                  <span style={{ color: '#0F004F' }}>{inst.finished}</span> {isEs ? 'de' : 'de'} {inst.totalNodes} {isEs ? 'módulos completados' : 'módulos concluídos'}
                </div>
              </div>

              {/* Time Analysis */}
              <div style={{ marginBottom: 24, display: 'flex', gap: 12 }}>
                <div style={{ flex: 1, background: '#fff', border: '1px solid #E2E8F0', padding: 12, borderRadius: 12, display: 'flex', alignItems: 'center', gap: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                  <div style={{ background: 'rgba(15,0,79,0.05)', padding: 8, borderRadius: 8 }}><Clock size={16} color="#0F004F" /></div>
                  <div>
                    <div style={{ fontSize: 9, fontWeight: 800, color: '#888', textTransform: 'uppercase', marginBottom: 2 }}>{isEs ? 'Asignado' : 'Atribuído'}</div>
                    <div style={{ fontSize: 13, fontWeight: 900, color: '#0F004F' }}>{inst.totalProgrammedMinutesStr}</div>
                  </div>
                </div>
                <div style={{ flex: 1, background: '#fff', border: `1px solid ${progressColor}33`, padding: 12, borderRadius: 12, display: 'flex', alignItems: 'center', gap: 12, boxShadow: `0 2px 8px ${progressColor}11` }}>
                  <div style={{ background: `${progressColor}15`, padding: 8, borderRadius: 8 }}><Clock size={16} color={progressColor} /></div>
                  <div>
                    <div style={{ fontSize: 9, fontWeight: 800, color: '#888', textTransform: 'uppercase', marginBottom: 2 }}>{isEs ? 'Invertido' : 'Investido'}</div>
                    <div style={{ fontSize: 13, fontWeight: 900, color: progressColor }}>{formatTime(inst.consumedMinutes)}</div>
                  </div>
                </div>
              </div>

              {/* Last Activity Badge */}
              <div style={{ background: 'linear-gradient(90deg, rgba(0,214,204,0.1), transparent)', padding: '12px 16px', borderRadius: 12, borderLeft: '4px solid #00D6CC', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ fontSize: 10, fontWeight: 800, color: '#00D6CC', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{isEs ? 'Última Actividad' : 'Última Atividade'}</div>
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
