import React, { useState, useMemo, useEffect } from 'react';
import { ChevronLeft, Users, Navigation, CheckCircle, Clock, CalendarDays, Activity, Target, ExternalLink, BookOpen, Rocket, LayoutDashboard, Star } from 'lucide-react';
import { getMissionTracking } from '../lib/tracking';
import { motion } from 'framer-motion';

const getPartidasInfo = (userLogs: any[], config: any) => {
    const groupedByPartida: Record<string, any[]> = {};
    userLogs.forEach((l: any) => {
        const pid = l.partidaId || 'MISION-INICIAL';
        if (!groupedByPartida[pid]) groupedByPartida[pid] = [];
        groupedByPartida[pid].push(l);
    });

    return Object.keys(groupedByPartida).map(pid => {
        const pLogs = [...groupedByPartida[pid]].sort((a: any, b: any) => new Date(a.time).getTime() - new Date(b.time).getTime());
        
        const planetNav = pLogs.find((l: any) => l.action === 'NAVIGATE' && l.details.includes('Planeta Index:'));
        let planetName = 'Base de Operaciones';
        let totalNodes = 0;
        let planetStructure: any[] = [];
        
        if (planetNav) {
            planetName = planetNav.details.replace('Navegación a: ', '').split('|')[0].trim();
            const sectorMatch = planetNav.details.match(/Sector: (\w+)/);
            const planetIdxMatch = planetNav.details.match(/Planeta Index: (\d+)/);
            if (sectorMatch && planetIdxMatch && config) {
                const sector = sectorMatch[1];
                const planetIdx = parseInt(planetIdxMatch[1]);
                const sectorData = sector === 'fieldSupport' ? config.fsc : sector === 'soporte' ? config.soporteContent : config.frontLineContent;
                if (sectorData) {
                    const planetObj = Array.isArray(sectorData) ? sectorData[planetIdx] : null;
                    if (planetObj) {
                        let secciones = [];
                        if (planetObj.secciones) secciones = planetObj.secciones;
                        else if (Array.isArray(planetObj)) secciones = (planetObj.length > 0 && (planetObj[0].tipo || planetObj[0].rows)) ? planetObj : [{ rows: planetObj }];
                        else if (planetObj.rows) secciones = [{ rows: planetObj.rows }];
                        
                        planetStructure = secciones;
                        let total = 0;
                        secciones.forEach((s: any) => { if (s.rows) total += s.rows.length; });
                        totalNodes = total;
                    }
                }
            }
        }

        const navIndex = planetNav ? pLogs.findIndex((l: any) => l === planetNav) : -1;
        const logsAfterNav = navIndex >= 0 ? pLogs.slice(navIndex) : pLogs;
        
        const completedNodes = logsAfterNav.filter((l: any) => l.action === 'COMPLETION' && l.details.includes('Finalizado:')).length;
        const completedNodeTitles = logsAfterNav
            .filter((l: any) => l.action === 'COMPLETION' && l.details.includes('Finalizado:'))
            .map((l: any) => l.details.split('Finalizado: ')[1]?.trim())
            .filter(Boolean);
        
        pLogs.sort((a: any, b: any) => new Date(b.time).getTime() - new Date(a.time).getTime());
        const lastActivity = pLogs[0]?.time;
        const firstActivity = pLogs[pLogs.length - 1]?.time;

        const isCompleted = totalNodes > 0 && completedNodes >= totalNodes;

        return { id: pid, planetName, totalNodes, completedNodes: Math.min(completedNodes, totalNodes || 999), isCompleted, lastActivity, firstActivity, logs: pLogs, planetStructure, completedNodeTitles };
    });
};

// --- MOCK SUPERVISOR DATA ---
// Replace this with actual data once provided.
export const SUPERVISOR_DATA = [
  {
    id: "sup_br1@konectabr.com",
    name: "Carlos Silva",
    region: "BR",
    instructors: ["instructor@konectabr.com", "inst2_br@konectabr.com", "inst3_br@konectabr.com"]
  },
  {
    id: "sup_br2@konectabr.com",
    name: "Ana Santos",
    region: "BR",
    instructors: ["inst4_br@konectabr.com", "inst5_br@konectabr.com"]
  },
  {
    id: "sup_es1@latam.com",
    name: "Jorge Perez",
    region: "ES",
    instructors: ["inst1_es@latam.com", "inst2_es@latam.com"]
  },
  {
    id: "sup_es2@latam.com",
    name: "Maria Lopez",
    region: "ES",
    instructors: ["inst3_es@latam.com", "inst4_es@latam.com"]
  }
];

export const InstructorDashboard = ({ logs, config, onBack, initialUser, isEmbedded, stationName }: any) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('ALL'); // 'ALL', 'BR', 'ES'
  const [selectedSupervisor, setSelectedSupervisor] = useState<string | null>(null);
  const [selectedFabrica, setSelectedFabrica] = useState<string>('ALL');

  const getFabrica = (email: string) => {
    if (!email) return 'Otra';
    const e = email.toLowerCase();
    if (e.includes('carlose.araya')) return 'LATAM';
    if (e.includes('konectabr.com')) return 'Konecta Brasil';
    if (e.includes('aec.com')) return 'AeC';
    if (e.includes('konectaperu.com')) return 'Konecta Perú';
    if (e.includes('almacontact.com')) return 'Alma Contact';
    const charCodeSum = email.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return charCodeSum % 2 === 0 ? 'Konecta Brasil' : 'AeC';
  };

  
  // Filter out admin user
  const relevantLogs = useMemo(() => logs.filter((l: any) => l.user !== 'carlose.araya@latam.com'), [logs]);
  
  // Get unique users active THIS MONTH
  const uniqueUsers = useMemo(() => {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    
    // Users with any log in the current month
    const activeLogs = relevantLogs.filter((l: any) => {
        const logDate = new Date(l.time);
        return logDate.getMonth() === currentMonth && logDate.getFullYear() === currentYear;
    });
    
    const users = Array.from(new Set(activeLogs.map((l: any) => l.user))) as string[];
    return users.sort((a, b) => a.localeCompare(b));
  }, [relevantLogs]);
  
  const filteredUsers = useMemo(() => {
    let users = uniqueUsers;

    // Filter by Region
    if (selectedRegion !== 'ALL') {
      const validInstructors = new Set(SUPERVISOR_DATA.filter(s => s.region === selectedRegion).flatMap(s => s.instructors));
      // In a real app, you might want to show instructors even if they haven't logged in yet, 
      // but for now we filter the active uniqueUsers. 
      // If we want to show all assigned instructors regardless of activity:
      // users = Array.from(validInstructors);
      users = users.filter(u => validInstructors.has(u));
    }

    // Filter by Supervisor
    if (selectedSupervisor) {
      const supervisor = SUPERVISOR_DATA.find(s => s.id === selectedSupervisor);
      if (supervisor) {
        users = users.filter(u => supervisor.instructors.includes(u));
      }
    }

    return users.filter(u => u.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [uniqueUsers, selectedRegion, selectedSupervisor, searchTerm]);

  const filteredUsersByStation = useMemo(() => {
    return filteredUsers.filter((u: string) => {
      if (!stationName) return true;
      const f = getFabrica(u);
      if (stationName === 'BR') return f === 'Konecta Brasil' || f === 'AeC';
      if (stationName === 'ES') return f !== 'Konecta Brasil' && f !== 'AeC';
      return true;
    });
  }, [filteredUsers, stationName]);

  const availableFabricas = useMemo(() => {
    return Array.from(new Set(filteredUsersByStation.map(u => getFabrica(u))));
  }, [filteredUsersByStation]);

  const finalInstructorsList = useMemo(() => {
    if (selectedFabrica === 'ALL') return filteredUsersByStation;
    return filteredUsersByStation.filter(u => getFabrica(u) === selectedFabrica);
  }, [filteredUsersByStation, selectedFabrica]);
  
  const [selectedUser, setSelectedUser] = useState<string | null>(initialUser || null);
  const [selectedPartida, setSelectedPartida] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'reporte' | 'historial'>('reporte');

  // Group logs by partidaId and calculate progress
  const userPartidasData = useMemo(() => {
    if (!selectedUser) return [];
    const userLogs = relevantLogs.filter((l: any) => l.user === selectedUser);
    let partidasInfo = getPartidasInfo(userLogs, config);
    
    // Merge Ruta Lider missions from getMissionTracking
    const missions = getMissionTracking().filter((m: any) => m.email === selectedUser);
    const groupedMissions: Record<string, any[]> = {};
    missions.forEach((m: any) => {
        const pName = m.planetas || m.missao || 'Desconocido';
        if (pName.toUpperCase().includes('ONBOARDING')) return;
        if (!groupedMissions[pName]) groupedMissions[pName] = [];
        groupedMissions[pName].push(m);
    });
    
    Object.keys(groupedMissions).forEach(planetName => {
        const mList = groupedMissions[planetName];
        
        let totalNodes = Math.max(mList.length, 1);
        const getSecs = (obj: any) => obj ? (obj.secciones || (Array.isArray(obj) ? obj : (obj.rows ? [obj] : []))) : [];
        const countSecs = (sections: any[]) => sections.reduce((acc, sec) => acc + (sec.rows ? sec.rows.length : (sec.secciones ? countSecs(sec.secciones) : (Array.isArray(sec) ? sec.length : 1))), 0);
        
        if (config) {
            let foundNodes = 0;
            const searchTotal = (key: string, arr: any[]) => {
                if (!config.exploracion || !config.exploracion[key] || !arr) return false;
                const idx = config.exploracion[key].findIndex((p: any) => p.label === planetName || p.name === planetName || p.id === planetName);
                let p = idx !== -1 ? arr[idx] : arr.find((s: any) => s.label === planetName || s.name === planetName || s.id === planetName);
                if (p) {
                    if (config.onboarding) {
                        const oIdx = (idx !== -1 ? config.exploracion[key][idx].onboardingIdx : p.onboardingIdx) || 0;
                        if (config.onboarding[oIdx]) foundNodes += countSecs(getSecs(config.onboarding[oIdx].data || config.onboarding[oIdx]));
                    }
                    foundNodes += countSecs(getSecs(p));
                    return true;
                }
                return false;
            };
            
            if (planetName === 'Ruta del Líder' && config.rutaLider) {
                config.rutaLider.forEach((p: any) => foundNodes += countSecs(getSecs(p)));
            } else if (!searchTotal('frontLine', config.frontLineContent)) {
                if (!searchTotal('soporte', config.soporteContent)) {
                    if (!searchTotal('fieldSupport', config.fsc)) {
                        if (config.onboarding) {
                            const p = config.onboarding.find((s: any) => s.label === planetName || s.name === planetName || s.id === planetName);
                            if (p) foundNodes += countSecs(getSecs(p));
                        }
                    }
                }
            }
            if (foundNodes > 0) totalNodes = foundNodes;
        }
        const completedNodes = mList.filter((m: any) => m.marcarComoFinalizado).length;
        const isCompleted = totalNodes > 0 && completedNodes >= totalNodes;
        
        // Find latest activity
        let lastActivity = new Date(0).toISOString();
        let firstActivity = new Date().toISOString();
        mList.forEach((m: any) => {
            const timeA = m.tiempoAperturaRaw || new Date(0).getTime();
            const timeV = m.marcarComoVistoRaw || new Date(0).getTime();
            const timeF = m.marcarComoFinalizadoRaw || new Date(0).getTime();
            const latest = Math.max(timeA, timeV, timeF);
            const earliest = Math.min(timeA || Date.now(), timeV || Date.now(), timeF || Date.now());
            if (latest > new Date(lastActivity).getTime()) lastActivity = new Date(latest).toISOString();
            if (earliest < new Date(firstActivity).getTime()) firstActivity = new Date(earliest).toISOString();
        });

        partidasInfo.push({
            id: mList[0]?.codigo || ('YODA-' + Math.floor(1000 + Math.random() * 9000)),
            planetName: planetName,
            totalNodes,
            completedNodes,
            isCompleted,
            lastActivity,
            firstActivity,
            logs: [],
            planetStructure: [],
            completedNodeTitles: mList.filter((m: any) => m.marcarComoFinalizado).map((m: any) => m.tema),
            rawMissions: mList
        });
    });

    return partidasInfo.sort((a: any, b: any) => new Date(b.lastActivity).getTime() - new Date(a.lastActivity).getTime());
  }, [relevantLogs, selectedUser, config]);

  // KPI & Gamification logic for the selected instructor
  const instructorKPIs = useMemo(() => {
    if (!selectedUser) return null;
    
    // REAL Gamification Engine based on completed missions time
    const missionData = getMissionTracking().filter(m => m.email === selectedUser);
    let totalMinutes = 0;
    
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
        return (parseInt(parts[0]) || 0) * 60 + (parseInt(parts[1]) || 0);
      }
      return 0;
    };

    missionData.filter(m => !!m.marcarComoFinalizado).forEach(m => {
      const finishRaw = m.marcarComoFinalizadoRaw || 0;
      const startRaw = m.tiempoAperturaRaw || finishRaw;
      const diffMs = finishRaw - startRaw;
      const diffMins = Math.max(0, Math.floor(diffMs / 60000));
      const estMins = parseTime(m.tiempoEstimado);
      totalMinutes += Math.min(diffMins, estMins);
    });

    const totalHoras = Math.floor(totalMinutes / 60);
    const completedCourses = userPartidasData.filter(p => p.isCompleted).length;

    let level = "Instructor";
    let nextLevelHours = 20;
    let progress = (totalHoras / 20) * 100;
    
    if (totalHoras >= 100) {
      level = "Instructor ⭐⭐⭐";
      nextLevelHours = totalHoras;
      progress = 100;
    } else if (totalHoras >= 51) {
      level = "Instructor ⭐⭐";
      nextLevelHours = 100;
      progress = ((totalHoras - 51) / (100 - 51)) * 100;
    } else if (totalHoras >= 21) {
      level = "Instructor ⭐";
      nextLevelHours = 50;
      progress = ((totalHoras - 21) / (50 - 21)) * 100;
    }

    const sellos = [
      { id: 'primer_paso', title: 'Primer Salto', desc: 'Completaste tu primer módulo.', unlocked: completedCourses >= 1, icon: '🚀' },
      { id: 'horas_20', title: 'Constancia Inicial', desc: 'Acumulaste 20 horas de instrucción.', unlocked: totalHoras >= 20, icon: '⏱️' },
      { id: 'experto_5', title: 'Especialista', desc: 'Terminaste 5 cursos completos.', unlocked: completedCourses >= 5, icon: '📚' },
      { id: 'master_100', title: 'Master Trainer', desc: 'Alcanzaste 100 horas de capacitación.', unlocked: totalHoras >= 100, icon: '🔥' }
    ];

    return { totalHoras, completedCourses, level, nextLevelHours, progress: Math.min(100, Math.max(0, progress)), sellos };
  }, [selectedUser, userPartidasData]);

  // Global stats for ALL active users
  const globalUsersData = useMemo(() => {
    return finalInstructorsList.map(u => {
      const uLogs = relevantLogs.filter((l: any) => l.user === u);
      
      const operaciones = uLogs.filter((l: any) => l.action === 'NAVIGATE' && l.details === 'Navegación a: operaciones').length;
      const suministros = uLogs.filter((l: any) => l.action === 'NAVIGATE' && l.details === 'Navegación a: suministros').length;
      const laboratorio = uLogs.filter((l: any) => l.action === 'NAVIGATE' && l.details === 'Navegación a: laboratorio').length;
      const ingenieria = uLogs.filter((l: any) => l.action === 'NAVIGATE' && l.details === 'Navegación a: ingenieria').length;

      const pInfo = getPartidasInfo(uLogs, config);
      let partidasGeneradas = pInfo.length;
      let partidasCompletadas = pInfo.filter(p => p.isCompleted).length;
      let isDictando = pInfo.some(p => !p.isCompleted && p.totalNodes > 0);
      
      // Also add Lider missions
      const uMissions = getMissionTracking().filter((m: any) => m.email === u);
      const groupedMissions: Record<string, any[]> = {};
      uMissions.forEach((m: any) => {
          if (!groupedMissions[m.missao]) groupedMissions[m.missao] = [];
          groupedMissions[m.missao].push(m);
      });
      partidasGeneradas += Object.keys(groupedMissions).length;
      Object.keys(groupedMissions).forEach(missaoName => {
          const mList = groupedMissions[missaoName];
          const completedNodes = mList.filter(m => m.marcarComoFinalizado).length;
          if (completedNodes >= mList.length && mList.length > 0) {
              partidasCompletadas++;
          } else if (mList.length > 0) {
              isDictando = true;
          }
      });
      
      const sortedLogs = [...uLogs].sort((a: any, b: any) => new Date(b.time).getTime() - new Date(a.time).getTime());
      const lastActivity = sortedLogs[0]?.time;

      return {
          user: u,
          partidasGeneradas,
          partidasCompletadas,
          isDictando,
          operaciones,
          suministros,
          laboratorio,
          ingenieria,
          lastActivity
      };
    }).sort((a: any, b: any) => new Date(b.lastActivity).getTime() - new Date(a.lastActivity).getTime());
  }, [filteredUsers, relevantLogs, config]);

  const supervisorSummaryData = useMemo(() => {
    if (selectedSupervisor) return [];
    
    const relevantSupervisors = SUPERVISOR_DATA.filter(s => selectedRegion === 'ALL' || s.region === selectedRegion);
    
    return relevantSupervisors.map(sup => {
      const supInstructors = globalUsersData.filter(u => sup.instructors.includes(u.user));
      const totalInstructors = supInstructors.length;
      const partidasGeneradas = supInstructors.reduce((acc, u) => acc + u.partidasGeneradas, 0);
      const partidasCompletadas = supInstructors.reduce((acc, u) => acc + u.partidasCompletadas, 0);
      const activeInstructors = supInstructors.filter(u => u.isDictando).length;
      
      return {
        ...sup,
        totalInstructors,
        activeInstructors,
        partidasGeneradas,
        partidasCompletadas,
        completionRate: partidasGeneradas > 0 ? (partidasCompletadas / partidasGeneradas) * 100 : 0
      };
    }).filter(s => s.totalInstructors > 0);
  }, [globalUsersData, selectedSupervisor, selectedRegion]);

  const allUserLogs = useMemo(() => {
    if (!selectedUser) return [];
    
    const validNavigations = [
        'Navegación a: operaciones',
        'Navegación a: suministros',
        'Navegación a: laboratorio',
        'Navegación a: ingenieria'
    ];

    const labelMap: Record<string, string> = {
        'Navegación a: operaciones': 'Visitó: Portal Instrutor',
        'Navegación a: suministros': 'Visitó: Formulários',
        'Navegación a: laboratorio': 'Visitó: Portal de Líderes',
        'Navegación a: ingenieria': 'Visitó: Workshops'
    };

    return relevantLogs
        .filter((l: any) => l.user === selectedUser && l.action === 'NAVIGATE' && validNavigations.includes(l.details))
        .map((l: any) => ({
            ...l,
            displayDetails: labelMap[l.details]
        }))
        .sort((a: any, b: any) => new Date(b.time).getTime() - new Date(a.time).getTime());
  }, [relevantLogs, selectedUser]);

  const primaryBrand = '#0f004f';
  const secondaryBrand = '#16A34A';
  const highlightBrand = '#00D6CC';

  return (
    <div style={{ height: '100vh', background: isEmbedded ? '#f5f7f9' : '#F8F7FF', display: 'flex', flexDirection: 'column', color: '#111827', fontFamily: '"Inter", Trebuchet MS, Arial, sans-serif' }}>
      
      {!isEmbedded && (
        <div style={{ background: '#FFFFFF', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.1)', boxShadow: '0 2px 4px rgba(0,0,0,0.02)', zIndex: 10 }}>
          <button 
            onClick={onBack} 
            style={{ background: 'transparent', border: '1px solid rgba(0,0,0,0.2)', color: '#111827', padding: '8px 20px', borderRadius: '30px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, fontSize: '12px', fontWeight: 700, transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.05)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
          >
            <ChevronLeft size={16} /> VOLVER
          </button>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Activity size={24} color={primaryBrand} />
            <div style={{ fontSize: '20px', fontWeight: 900, letterSpacing: '0.1em', color: primaryBrand }}>MONITOREO DE INSTRUCTORES</div>
          </div>
        </div>
      )}

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        
        {!isEmbedded && (
          <div style={{ width: '320px', background: primaryBrand, color: '#ffffff', display: 'flex', flexDirection: 'column', borderRight: '1px solid rgba(0,0,0,0.1)', boxShadow: '2px 0 10px rgba(0,0,0,0.1)' }}>
          <div style={{ padding: '24px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px', fontWeight: 700, color: 'rgba(255,255,255,0.7)' }}>Filtros de Red</div>
            
            <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
              <select 
                value={selectedRegion}
                onChange={(e) => { setSelectedRegion(e.target.value); setSelectedSupervisor(null); }}
                style={{ flex: 1, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', padding: '8px', borderRadius: '8px', color: '#fff', fontSize: '12px', outline: 'none' }}
              >
                <option value="ALL" style={{ color: '#000' }}>Todas las Regiones</option>
                <option value="BR" style={{ color: '#000' }}>Brasil (BR)</option>
                <option value="ES" style={{ color: '#000' }}>Hispano (ES)</option>
              </select>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <select 
                value={selectedSupervisor || ''}
                onChange={(e) => setSelectedSupervisor(e.target.value || null)}
                style={{ width: '100%', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', padding: '8px', borderRadius: '8px', color: '#fff', fontSize: '12px', outline: 'none' }}
              >
                <option value="" style={{ color: '#000' }}>Todos los Supervisores</option>
                {SUPERVISOR_DATA.filter(s => selectedRegion === 'ALL' || s.region === selectedRegion).map(s => (
                  <option key={s.id} value={s.id} style={{ color: '#000' }}>{s.name}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div style={{ padding: '0 24px 16px' }}>
            <div style={{ fontSize: 11, fontWeight: 900, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>INSTRUCTORES ACTIVOS</div>
            <input 
              type="text" 
              placeholder="Buscar instructor..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', padding: '10px 16px', borderRadius: '8px', color: '#ffffff', outline: 'none', width: '100%', fontSize: '14px', boxSizing: 'border-box' }}
            />
          </div>
          
          <div style={{ flex: 1, overflowY: 'auto', padding: '12px' }}>
            <button
              onClick={() => setSelectedUser(null)}
              style={{ width: '100%', textAlign: 'left', padding: '16px', background: selectedUser === null ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)', border: selectedUser === null ? '1px solid rgba(255,255,255,0.4)' : '1px solid transparent', borderRadius: '8px', color: '#ffffff', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', transition: 'all 0.2s', marginBottom: '16px' }}
            >
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#ffffff', color: primaryBrand, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><LayoutDashboard size={20} /></div>
              <div style={{ flex: 1, overflow: 'hidden' }}>
                <div style={{ fontWeight: 800, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>VISTA GLOBAL</div>
                <div style={{ fontSize: '11px', opacity: 0.7 }}>Tabla Estratégica</div>
              </div>
            </button>

            {filteredUsers.length === 0 ? (
              <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', padding: '20px', fontSize: '14px' }}>No se encontraron instructores</div>
            ) : (
              filteredUsers.map((user) => (
                <button
                  key={user}
                  onClick={() => setSelectedUser(user)}
                  style={{ width: '100%', textAlign: 'left', padding: '16px', background: selectedUser === user ? 'rgba(255,255,255,0.15)' : 'transparent', border: 'none', borderRadius: '8px', color: '#ffffff', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', transition: 'all 0.2s', marginBottom: '4px' }}
                >
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: selectedUser === user ? '#ffffff' : 'rgba(255,255,255,0.2)', color: selectedUser === user ? primaryBrand : '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>{user.charAt(0).toUpperCase()}</div>
                  <div style={{ flex: 1, overflow: 'hidden' }}><div style={{ fontWeight: 600, fontSize: '14px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{user}</div></div>
                </button>
              ))
            )}
          </div>
        </div>
        )}

        <div style={{ flex: 1, overflowY: 'auto', padding: isEmbedded ? '20px 40px' : '40px', background: isEmbedded ? '#f5f7f9' : '#F8F7FF' }}>
          
          {isEmbedded && (
            <div style={{ background: '#fff', borderRadius: '16px', padding: '16px 24px', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ background: 'rgba(178, 0, 255, 0.1)', padding: '12px', borderRadius: '12px', color: '#B200FF' }}><Star size={24} /></div>
                <div>
                  <div style={{ fontSize: '18px', fontWeight: 900, color: primaryBrand }}>PERFIL INSTRUCTOR</div>
                  <div style={{ fontSize: '12px', color: '#6B7280', fontWeight: 600 }}>Análisis gamificado del instructor</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <select 
                  value={selectedFabrica} 
                  onChange={(e) => {
                    const newFabrica = e.target.value;
                    setSelectedFabrica(newFabrica);
                    if (newFabrica !== 'ALL' && selectedUser && getFabrica(selectedUser) !== newFabrica) {
                      const newAvailable = filteredUsersByStation.filter(u => getFabrica(u) === newFabrica);
                      if (newAvailable.length > 0) {
                        setSelectedUser(newAvailable[0]);
                      } else {
                        setSelectedUser(null);
                      }
                    }
                  }} 
                  style={{ padding: '12px 16px', borderRadius: '10px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '14px', fontWeight: 800, color: '#6B7280', cursor: 'pointer', background: '#F8FAFC', minWidth: '180px' }}
                >
                  <option value="ALL">Todas las Fábricas</option>
                  {availableFabricas.map(f => <option key={f} value={f}>{f}</option>)}
                </select>

                <select value={selectedUser || ''} onChange={(e) => setSelectedUser(e.target.value || null)} style={{ padding: '12px 20px', borderRadius: '10px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '14px', fontWeight: 800, color: primaryBrand, cursor: 'pointer', background: '#F8FAFC', minWidth: '300px' }}>
                  <option value="">-- Vista Global --</option>
                  {finalInstructorsList.map((u: any) => <option key={u} value={u}>{u}</option>)}
                </select>
              </div>
            </div>
          )}

          {selectedUser === null ? (
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <div style={{ marginBottom: '30px' }}>
                <div style={{ fontSize: '14px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>Visión Estratégica</div>
                <div style={{ fontSize: '32px', fontWeight: 900, color: primaryBrand }}>Consolidado del Mes</div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '40px' }}>
                <div style={{ background: '#fff', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '12px', color: '#6B7280', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '1px', marginBottom: '4px' }}>Instructores Activos</div>
                    <div style={{ fontSize: '42px', fontWeight: 900, color: primaryBrand, lineHeight: '1' }}>{globalUsersData.length}</div>
                  </div>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(15, 0, 79, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: primaryBrand }}><Users size={28} /></div>
                </div>
                <div style={{ background: '#fff', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '12px', color: '#6B7280', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '1px', marginBottom: '4px' }}>Total Partidas Generadas</div>
                    <div style={{ fontSize: '42px', fontWeight: 900, color: '#EAB308', lineHeight: '1' }}>{globalUsersData.reduce((acc, u) => acc + u.partidasGeneradas, 0)}</div>
                  </div>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(234, 179, 8, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#EAB308' }}><Target size={28} /></div>
                </div>
                <div style={{ background: '#fff', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '12px', color: '#6B7280', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '1px', marginBottom: '4px' }}>Partidas Completadas</div>
                    <div style={{ fontSize: '42px', fontWeight: 900, color: secondaryBrand, lineHeight: '1' }}>{globalUsersData.reduce((acc, u) => acc + u.partidasCompletadas, 0)}</div>
                  </div>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(22, 163, 74, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: secondaryBrand }}><CheckCircle size={28} /></div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
                {!selectedSupervisor && supervisorSummaryData.length > 0 ? (
                  supervisorSummaryData.map(sup => (
                    <div key={sup.id} onClick={() => setSelectedSupervisor(sup.id)} style={{ background: '#FFFFFF', borderRadius: '16px', padding: '24px', cursor: 'pointer', transition: 'all 0.2s', position: 'relative', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.05)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                        <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(15,0,79,0.1)', color: primaryBrand, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '20px' }}><Users size={24} /></div>
                        <div style={{ flex: 1, overflow: 'hidden' }}>
                          <div style={{ fontSize: '11px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 800 }}>EQUIPO {sup.region}</div>
                          <div style={{ fontSize: '18px', fontWeight: 900, color: '#111827', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: '4px' }}>{sup.name}</div>
                          <div style={{ fontSize: '12px', color: '#6B7280', fontWeight: 600 }}>{sup.totalInstructors} instructores asignados</div>
                        </div>
                      </div>
                      <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <span style={{ fontSize: '12px', fontWeight: 700, color: '#4B5563' }}>Módulos Completados</span>
                          <span style={{ fontSize: '12px', fontWeight: 900, color: primaryBrand }}>{Math.round(sup.completionRate)}%</span>
                        </div>
                        <div style={{ width: '100%', height: '8px', background: '#F3F4F6', borderRadius: '4px', overflow: 'hidden', marginBottom: '16px' }}>
                          <div style={{ height: '100%', background: secondaryBrand, width: `${sup.completionRate}%`, borderRadius: '4px' }} />
                        </div>
                        <div style={{ display: 'flex', gap: '16px' }}>
                          <div>
                            <div style={{ fontSize: '18px', fontWeight: 900, color: primaryBrand }}>{sup.partidasGeneradas}</div>
                            <div style={{ fontSize: '10px', color: '#9CA3AF', textTransform: 'uppercase', fontWeight: 700 }}>Iniciados</div>
                          </div>
                          <div>
                            <div style={{ fontSize: '18px', fontWeight: 900, color: secondaryBrand }}>{sup.partidasCompletadas}</div>
                            <div style={{ fontSize: '10px', color: '#9CA3AF', textTransform: 'uppercase', fontWeight: 700 }}>Completados</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  globalUsersData.map(u => (
                    <div key={u.user} onClick={() => { setSelectedUser(u.user); setActiveTab('reporte'); }} style={{ background: '#FFFFFF', borderRadius: '16px', padding: '24px', cursor: 'pointer', transition: 'all 0.2s', position: 'relative', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.05)' }}>
                      <div style={{ position: 'absolute', top: '24px', right: '24px', display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(22, 163, 74, 0.1)', color: secondaryBrand, padding: '4px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: 800 }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: secondaryBrand }} /> ACTIVO</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(15,0,79,0.1)', color: primaryBrand, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '20px' }}>{u.user.charAt(0).toUpperCase()}</div>
                        <div style={{ flex: 1, overflow: 'hidden' }}>
                          <div style={{ fontSize: '16px', fontWeight: 800, color: '#111827', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: '4px' }}>{u.user}</div>
                          {u.isDictando ? <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: '#F59E0B' }}><BookOpen size={12} /> Dictando Curso</div> : <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 600, color: '#9CA3AF' }}><CheckCircle size={12} /> Sin curso activo</div>}
                        </div>
                      </div>
                      <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: '20px' }}>
                        <div style={{ fontSize: '11px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 800, marginBottom: '16px' }}>Accesos a Módulos (Este Mes)</div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                          <div style={{ textAlign: 'center', padding: '8px', background: '#F9FAFB', borderRadius: '8px' }}><div style={{ fontSize: '18px', fontWeight: 900, color: '#EAB308' }}>{u.operaciones}</div><div style={{ fontSize: '9px', color: '#9CA3AF', textTransform: 'uppercase', fontWeight: 800, marginTop: '2px' }}>Instrutor</div></div>
                          <div style={{ textAlign: 'center', padding: '8px', background: '#F9FAFB', borderRadius: '8px' }}><div style={{ fontSize: '18px', fontWeight: 900, color: '#06B6D4' }}>{u.suministros}</div><div style={{ fontSize: '9px', color: '#9CA3AF', textTransform: 'uppercase', fontWeight: 800, marginTop: '2px' }}>Forms</div></div>
                          <div style={{ textAlign: 'center', padding: '8px', background: '#F9FAFB', borderRadius: '8px' }}><div style={{ fontSize: '18px', fontWeight: 900, color: '#84CC16' }}>{u.laboratorio}</div><div style={{ fontSize: '9px', color: '#9CA3AF', textTransform: 'uppercase', fontWeight: 800, marginTop: '2px' }}>Líderes</div></div>
                          <div style={{ textAlign: 'center', padding: '8px', background: '#F9FAFB', borderRadius: '8px' }}><div style={{ fontSize: '18px', fontWeight: 900, color: '#A855F7' }}>{u.ingenieria}</div><div style={{ fontSize: '9px', color: '#9CA3AF', textTransform: 'uppercase', fontWeight: 800, marginTop: '2px' }}>Workshops</div></div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          ) : (
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
              
              <div style={{ 
                marginBottom: '30px', 
                background: 'linear-gradient(135deg, #0F004F 0%, #1B0068 100%)', 
                borderRadius: '24px', 
                padding: '32px', 
                boxShadow: '0 10px 30px rgba(15,0,79,0.3)', 
                position: 'relative', 
                overflow: 'hidden',
                color: '#fff' 
              }}>
                <div style={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, background: 'radial-gradient(circle, rgba(237,22,80,0.2) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%' }} />
                <div style={{ position: 'absolute', bottom: -50, left: -50, width: 200, height: 200, background: 'radial-gradient(circle, rgba(0,214,204,0.15) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%' }} />

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px', position: 'relative', zIndex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                    <div style={{ width: '80px', height: '80px', borderRadius: '20px', background: 'rgba(255,255,255,0.1)', border: '2px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', fontWeight: 'bold', color: '#fff', boxShadow: '0 8px 20px rgba(0,0,0,0.2)' }}>{selectedUser.charAt(0).toUpperCase()}</div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                        <div style={{ background: 'rgba(0,214,204,0.2)', color: '#00D6CC', padding: '4px 12px', borderRadius: '12px', fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', border: '1px solid rgba(0,214,204,0.3)' }}>{instructorKPIs?.level}</div>
                      </div>
                      <div style={{ fontSize: '28px', fontWeight: 900, color: '#fff', lineHeight: '1' }}>{selectedUser}</div>
                      <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginTop: '6px' }}>Instructor Registrado</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '8px', background: 'rgba(0,0,0,0.3)', padding: '6px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <button onClick={() => setActiveTab('reporte')} style={{ padding: '8px 20px', borderRadius: '10px', border: 'none', background: activeTab === 'reporte' ? '#ED1650' : 'transparent', color: '#fff', fontWeight: 800, fontSize: '12px', cursor: 'pointer', transition: 'all 0.2s' }}>Reporte / XP</button>
                    <button onClick={() => setActiveTab('historial')} style={{ padding: '8px 20px', borderRadius: '10px', border: 'none', background: activeTab === 'historial' ? '#ED1650' : 'transparent', color: '#fff', fontWeight: 800, fontSize: '12px', cursor: 'pointer', transition: 'all 0.2s' }}>Historial</button>
                  </div>
                </div>

                {activeTab === 'reporte' && instructorKPIs && (
                  <div style={{ position: 'relative', zIndex: 1, background: 'rgba(0,0,0,0.2)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '12px' }}>
                      <div>
                        <span style={{ fontSize: '11px', fontWeight: 800, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '1px' }}>Experiencia Acumulada</span>
                        <div style={{ fontSize: '24px', fontWeight: 900, color: '#fff', marginTop: '4px' }}>{instructorKPIs.totalHoras} <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)' }}>/ {instructorKPIs.nextLevelHours} Horas</span></div>
                      </div>
                      <div style={{ fontSize: '16px', fontWeight: 900, color: '#00D6CC', textShadow: '0 0 10px rgba(0,214,204,0.5)' }}>{Math.round(instructorKPIs.progress)}% XP</div>
                    </div>
                    <div style={{ width: '100%', height: '12px', background: 'rgba(0,0,0,0.5)', borderRadius: '6px', overflow: 'hidden', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)' }}>
                      <motion.div initial={{ width: 0 }} animate={{ width: `${instructorKPIs.progress}%` }} transition={{ duration: 1.5, ease: 'easeOut' }} style={{ height: '100%', background: `linear-gradient(90deg, #ED1650, #B200FF)`, borderRadius: '6px', boxShadow: '0 0 10px rgba(237,22,80,0.5)' }} />
                    </div>

                    <div style={{ marginTop: '24px' }}>
                      <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '1px', marginBottom: '16px' }}>Logros Desbloqueados</div>
                      <div style={{ display: 'flex', gap: '16px' }}>
                        {instructorKPIs.sellos.map(sello => (
                          <div key={sello.id} style={{ flex: 1, background: sello.unlocked ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.2)', border: sello.unlocked ? '1px solid rgba(0,214,204,0.3)' : '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '16px', opacity: sello.unlocked ? 1 : 0.4, display: 'flex', gap: '12px', alignItems: 'center', transition: 'all 0.3s' }}>
                            <div style={{ fontSize: '24px', filter: sello.unlocked ? 'drop-shadow(0 0 8px rgba(255,255,255,0.5))' : 'grayscale(100%)' }}>{sello.icon}</div>
                            <div>
                              <div style={{ fontSize: '12px', fontWeight: 900, color: sello.unlocked ? '#fff' : 'rgba(255,255,255,0.5)', marginBottom: '2px' }}>{sello.title}</div>
                              <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', lineHeight: '1.2' }}>{sello.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {activeTab === 'reporte' ? (
                <>
                  <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                    <div style={{ flex: 1, background: '#fff', padding: '20px', borderRadius: '16px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ fontSize: '11px', color: '#6B7280', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '1px', marginBottom: '4px' }}>Partidas Generadas</div>
                        <div style={{ fontSize: '36px', fontWeight: 900, color: primaryBrand, lineHeight: '1' }}>{userPartidasData.length}</div>
                      </div>
                      <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(15, 0, 79, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: primaryBrand }}>
                        <Target size={24} />
                      </div>
                    </div>
                    <div style={{ flex: 1, background: '#fff', padding: '20px', borderRadius: '16px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ fontSize: '11px', color: '#6B7280', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '1px', marginBottom: '4px' }}>Partidas Completadas</div>
                        <div style={{ fontSize: '36px', fontWeight: 900, color: secondaryBrand, lineHeight: '1' }}>{userPartidasData.filter(p => p.isCompleted).length}</div>
                      </div>
                      <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(22, 163, 74, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: secondaryBrand }}>
                        <CheckCircle size={24} />
                      </div>
                    </div>
                  </div>

                  {/* Module Access Counts */}
                  <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.05)', marginBottom: '40px' }}>
                    <div style={{ fontSize: '14px', fontWeight: 800, color: '#111827', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>Accesos a Módulos (Este Mes)</div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
                      <div style={{ padding: '16px', background: '#F8F9FA', borderRadius: '12px', border: '1px solid #E5E7EB', textAlign: 'center' }}>
                        <div style={{ fontSize: '12px', fontWeight: 700, color: '#4B5563', marginBottom: '8px' }}>Portal Instrutor</div>
                        <div style={{ fontSize: '28px', fontWeight: 900, color: '#EAB308' }}>
                            {globalUsersData.find(u => u.user === selectedUser)?.operaciones || 0}
                        </div>
                        <div style={{ fontSize: '10px', color: '#9CA3AF', textTransform: 'uppercase', fontWeight: 700, marginTop: '4px' }}>visitas</div>
                      </div>
                      <div style={{ padding: '16px', background: '#F8F9FA', borderRadius: '12px', border: '1px solid #E5E7EB', textAlign: 'center' }}>
                        <div style={{ fontSize: '12px', fontWeight: 700, color: '#4B5563', marginBottom: '8px' }}>Formulários</div>
                        <div style={{ fontSize: '28px', fontWeight: 900, color: '#06B6D4' }}>
                            {globalUsersData.find(u => u.user === selectedUser)?.suministros || 0}
                        </div>
                        <div style={{ fontSize: '10px', color: '#9CA3AF', textTransform: 'uppercase', fontWeight: 700, marginTop: '4px' }}>visitas</div>
                      </div>
                      <div style={{ padding: '16px', background: '#F8F9FA', borderRadius: '12px', border: '1px solid #E5E7EB', textAlign: 'center' }}>
                        <div style={{ fontSize: '12px', fontWeight: 700, color: '#4B5563', marginBottom: '8px' }}>Portal de Líderes</div>
                        <div style={{ fontSize: '28px', fontWeight: 900, color: '#84CC16' }}>
                            {globalUsersData.find(u => u.user === selectedUser)?.laboratorio || 0}
                        </div>
                        <div style={{ fontSize: '10px', color: '#9CA3AF', textTransform: 'uppercase', fontWeight: 700, marginTop: '4px' }}>visitas</div>
                      </div>
                      <div style={{ padding: '16px', background: '#F8F9FA', borderRadius: '12px', border: '1px solid #E5E7EB', textAlign: 'center' }}>
                        <div style={{ fontSize: '12px', fontWeight: 700, color: '#4B5563', marginBottom: '8px' }}>Workshops</div>
                        <div style={{ fontSize: '28px', fontWeight: 900, color: '#A855F7' }}>
                            {globalUsersData.find(u => u.user === selectedUser)?.ingenieria || 0}
                        </div>
                        <div style={{ fontSize: '10px', color: '#9CA3AF', textTransform: 'uppercase', fontWeight: 700, marginTop: '4px' }}>visitas</div>
                      </div>
                    </div>
                  </div>

              {/* Partidas Table */}
              <div style={{ background: '#FFFFFF', borderRadius: '16px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.05)', overflow: 'hidden', marginBottom: '40px' }}>
                <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(0,0,0,0.05)', background: 'rgba(15, 0, 79, 0.02)' }}>
                  <h2 style={{ margin: 0, fontSize: '18px', fontWeight: 800, color: '#111827' }}>Registro de Partidas</h2>
                </div>
                
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid rgba(0,0,0,0.05)', textAlign: 'left' }}>
                      <th style={{ padding: '16px 24px', fontSize: '12px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '1px' }}>Código</th>
                      <th style={{ padding: '16px 24px', fontSize: '12px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '1px' }}>Módulo / Curso</th>
                      <th style={{ padding: '16px 24px', fontSize: '12px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '1px', width: '200px' }}>Progreso General</th>
                      <th style={{ padding: '16px 24px', fontSize: '12px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '1px' }}>Riesgo / Status</th>
                      <th style={{ padding: '16px 24px', fontSize: '12px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '1px' }}>Estado</th>
                      <th style={{ padding: '16px 24px', fontSize: '12px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '1px' }}>Última Actividad</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userPartidasData.map(partida => (
                      <React.Fragment key={partida.id}>
                      <tr 
                        onClick={() => setSelectedPartida(selectedPartida === partida.id ? null : partida.id)}
                        style={{ borderBottom: '1px solid rgba(0,0,0,0.05)', cursor: 'pointer', background: selectedPartida === partida.id ? 'rgba(0,0,0,0.02)' : 'transparent', transition: 'background 0.2s' }}
                      >
                        <td style={{ padding: '16px 24px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            {selectedPartida === partida.id ? <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: highlightBrand }} /> : <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'transparent' }} />}
                            <span style={{ fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, color: primaryBrand }}>{partida.id}</span>
                          </div>
                        </td>
                        <td style={{ padding: '16px 24px', fontSize: '14px', fontWeight: 600, color: '#111827' }}>
                          {partida.planetName}
                        </td>
                        <td style={{ padding: '16px 24px' }}>
                          {partida.totalNodes > 0 ? (
                            <div style={{ width: '100%' }}>
                              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                                <span style={{ fontSize: '11px', fontWeight: 800, color: '#6B7280' }}>Avance Módulo</span>
                                <span style={{ fontSize: '12px', fontWeight: 900, color: primaryBrand }}>{Math.round((partida.completedNodes / partida.totalNodes) * 100)}%</span>
                              </div>
                              <div style={{ width: '100%', height: '8px', background: '#E5E7EB', borderRadius: '4px', overflow: 'hidden' }}>
                                <div style={{ height: '100%', background: partida.isCompleted ? secondaryBrand : primaryBrand, width: `${(partida.completedNodes / partida.totalNodes) * 100}%` }} />
                              </div>
                              <div style={{ fontSize: '10px', color: '#9CA3AF', marginTop: '4px', textAlign: 'right' }}>{partida.completedNodes} / {partida.totalNodes} Actividades</div>
                            </div>
                          ) : (
                            <span style={{ fontSize: '13px', color: '#9CA3AF' }}>Sin datos</span>
                          )}
                        </td>
                        <td style={{ padding: '16px 24px' }}>
                          {(() => {
                            const daysSinceActivity = Math.floor((new Date().getTime() - new Date(partida.lastActivity).getTime()) / (1000 * 3600 * 24));
                            let riskColor = secondaryBrand; // Green
                            let riskText = 'Al Día';
                            if (!partida.isCompleted) {
                              if (daysSinceActivity > 5) { riskColor = '#EF4444'; riskText = 'En Riesgo (Inactivo)'; }
                              else if (daysSinceActivity > 2) { riskColor = '#F59E0B'; riskText = 'Atención Requerida'; }
                            }
                            
                            return (
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: riskColor, boxShadow: `0 0 8px ${riskColor}80` }} />
                                <span style={{ fontSize: '12px', fontWeight: 800, color: riskColor }}>{riskText}</span>
                              </div>
                            );
                          })()}
                        </td>
                        <td style={{ padding: '16px 24px' }}>
                          {partida.isCompleted ? (
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: 'rgba(22, 163, 74, 0.1)', color: secondaryBrand, padding: '4px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: 800 }}>
                              <CheckCircle size={12} /> TERMINADA
                            </div>
                          ) : (
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: 'rgba(245, 158, 11, 0.1)', color: '#F59E0B', padding: '4px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: 800 }}>
                              <Clock size={12} /> EN PROGRESO
                            </div>
                          )}
                        </td>
                        <td style={{ padding: '16px 24px', fontSize: '13px', color: '#6B7280' }}>
                          {new Date(partida.lastActivity).toLocaleString([], { dateStyle: 'short', timeStyle: 'short' })}
                        </td>
                      </tr>
                      {selectedPartida === partida.id && (
                        <tr>
                          <td colSpan={6} style={{ padding: 0 }}>
                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} style={{ background: '#F8FAFC', borderBottom: '1px solid rgba(0,0,0,0.05)', padding: '24px', overflow: 'hidden' }}>
                              <div style={{ fontSize: '12px', fontWeight: 800, color: primaryBrand, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>Detalle de Actividades</div>
                              {partida.rawMissions && partida.rawMissions.length > 0 ? (
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '12px' }}>
                                  {partida.rawMissions.map((m: any, i: number) => {
                                    const isDone = !!m.marcarComoFinalizado;
                                    const isViewed = !!m.marcarComoVisto;
                                    return (
                                      <div key={i} style={{ padding: '12px', background: '#fff', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: isDone ? 'rgba(22, 163, 74, 0.1)' : isViewed ? 'rgba(245, 158, 11, 0.1)' : 'rgba(0,0,0,0.05)', color: isDone ? secondaryBrand : isViewed ? '#F59E0B' : '#9CA3AF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                          {isDone ? <CheckCircle size={16} /> : isViewed ? <Clock size={16} /> : <div style={{ width: 8, height: 8, borderRadius: 4, background: '#9CA3AF' }} />}
                                        </div>
                                        <div style={{ flex: 1, overflow: 'hidden' }}>
                                          <div style={{ fontSize: '12px', fontWeight: 700, color: '#111827', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{m.tema}</div>
                                          <div style={{ fontSize: '10px', color: '#6B7280', textTransform: 'uppercase', fontWeight: 600 }}>{isDone ? `Finalizado: ${m.marcarComoFinalizado}` : isViewed ? `Visto: ${m.marcarComoVisto}` : 'Pendiente'}</div>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              ) : (
                                <div style={{ fontSize: '13px', color: '#6B7280' }}>Este tipo de partida agrupa nodos tradicionales de OJT. No hay submisiones rastreadas en el formato Gamificado para este módulo.</div>
                              )}
                            </motion.div>
                          </td>
                        </tr>
                      )}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
              </>
              ) : (
              <>
              {/* EXCEL LIKE TIMELINE */}
              <div style={{ background: '#FFFFFF', borderRadius: '16px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(0,0,0,0.05)', background: 'rgba(15, 0, 79, 0.02)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <h2 style={{ margin: 0, fontSize: '18px', fontWeight: 800, color: '#111827' }}>Historial General (Tipo Excel)</h2>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#6B7280', background: '#F3F4F6', padding: '4px 12px', borderRadius: '12px' }}>
                    {allUserLogs.length} Registros
                  </div>
                </div>

                <div style={{ overflowX: 'auto', maxHeight: '600px' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '800px' }}>
                    <thead style={{ position: 'sticky', top: 0, background: '#F9FAFB', zIndex: 1, boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                      <tr style={{ textAlign: 'left' }}>
                        <th style={{ padding: '12px 24px', fontSize: '11px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid #E5E7EB' }}>Fecha</th>
                        <th style={{ padding: '12px 24px', fontSize: '11px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid #E5E7EB' }}>Hora</th>
                        <th style={{ padding: '12px 24px', fontSize: '11px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid #E5E7EB' }}>Partida</th>
                        <th style={{ padding: '12px 24px', fontSize: '11px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid #E5E7EB' }}>Acción</th>
                        <th style={{ padding: '12px 24px', fontSize: '11px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid #E5E7EB' }}>Detalle</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allUserLogs.map((log: any, i: number) => {
                        const dateObj = new Date(log.time);
                        const isCompletion = log.action === 'COMPLETION';
                        const isNav = log.action === 'NAVIGATE';
                        const isLogin = log.action === 'LOGIN';
                        
                        let actionColor = '#6B7280';
                        if (isCompletion) actionColor = secondaryBrand;
                        else if (isNav) actionColor = primaryBrand;
                        else if (isLogin) actionColor = highlightBrand;

                        return (
                          <tr key={i} style={{ borderBottom: '1px solid #E5E7EB', background: i % 2 === 0 ? '#ffffff' : '#F9FAFB' }}>
                            <td style={{ padding: '12px 24px', fontSize: '13px', color: '#4B5563', fontWeight: 600 }}>
                              {dateObj.toLocaleDateString()}
                            </td>
                            <td style={{ padding: '12px 24px', fontSize: '13px', color: '#4B5563', fontFamily: 'monospace' }}>
                              {dateObj.toLocaleTimeString()}
                            </td>
                            <td style={{ padding: '12px 24px', fontSize: '12px', color: '#9CA3AF', fontFamily: 'monospace' }}>
                              {log.partidaId || 'N/A'}
                            </td>
                            <td style={{ padding: '12px 24px' }}>
                              <span style={{ 
                                display: 'inline-block',
                                padding: '2px 8px',
                                borderRadius: '4px',
                                fontSize: '11px',
                                fontWeight: 800,
                                background: `${actionColor}15`,
                                color: actionColor,
                                border: `1px solid ${actionColor}30`
                              }}>
                                {log.action}
                              </span>
                            </td>
                            <td style={{ padding: '12px 24px', fontSize: '13px', color: '#111827', lineHeight: '1.4', fontWeight: 700 }}>
                              {log.displayDetails}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  {allUserLogs.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '40px', color: '#6B7280', fontSize: '14px' }}>
                      No hay registros para mostrar.
                    </div>
                  )}
                </div>
              </div>
              </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
