import React, { useState, useMemo } from 'react';
import { ChevronLeft, Users, Navigation, CheckCircle, Clock, CalendarDays, Activity, Target, ExternalLink, BookOpen, Rocket, LayoutDashboard } from 'lucide-react';
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

export const InstructorDashboard = ({ logs, config, onBack }: any) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('ALL'); // 'ALL', 'BR', 'ES'
  const [selectedSupervisor, setSelectedSupervisor] = useState<string | null>(null);

  
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
  
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [selectedPartida, setSelectedPartida] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'reporte' | 'historial'>('reporte');

  // Group logs by partidaId and calculate progress
  const userPartidasData = useMemo(() => {
    if (!selectedUser) return [];
    const userLogs = relevantLogs.filter((l: any) => l.user === selectedUser);
    const partidasInfo = getPartidasInfo(userLogs, config);
    return partidasInfo.sort((a, b) => new Date(b.lastActivity).getTime() - new Date(a.lastActivity).getTime());
  }, [relevantLogs, selectedUser, config]);

  // Global stats for ALL active users
  const globalUsersData = useMemo(() => {
    return filteredUsers.map(u => {
      const uLogs = relevantLogs.filter((l: any) => l.user === u);
      
      const operaciones = uLogs.filter((l: any) => l.action === 'NAVIGATE' && l.details === 'Navegación a: operaciones').length;
      const suministros = uLogs.filter((l: any) => l.action === 'NAVIGATE' && l.details === 'Navegación a: suministros').length;
      const laboratorio = uLogs.filter((l: any) => l.action === 'NAVIGATE' && l.details === 'Navegación a: laboratorio').length;
      const ingenieria = uLogs.filter((l: any) => l.action === 'NAVIGATE' && l.details === 'Navegación a: ingenieria').length;

      const pInfo = getPartidasInfo(uLogs, config);
      const partidasGeneradas = pInfo.length;
      const partidasCompletadas = pInfo.filter(p => p.isCompleted).length;
      const isDictando = pInfo.some(p => !p.isCompleted && p.totalNodes > 0);
      
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
    }).filter(s => s.totalInstructors > 0); // Only show supervisors with active instructors
  }, [globalUsersData, selectedSupervisor, selectedRegion]);

  // Filtered logs for selected user (only main module accesses)
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

  // Colors
  const primaryBrand = '#0f004f'; // The requested very dark blue
  const secondaryBrand = '#16A34A'; // Green for completion
  const highlightBrand = '#00D6CC'; // Teal for resources/active

  return (
    <div style={{ minHeight: '100vh', background: '#F8F7FF', display: 'flex', flexDirection: 'column', color: '#111827', fontFamily: '"Inter", Trebuchet MS, Arial, sans-serif' }}>
      
      {/* Header Full Width */}
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

      {/* Main layout: Sidebar + Content */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        
        {/* Sidebar */}
        <div style={{ 
          width: '320px', 
          background: primaryBrand, 
          color: '#ffffff', 
          display: 'flex', 
          flexDirection: 'column',
          borderRight: '1px solid rgba(0,0,0,0.1)',
          boxShadow: '2px 0 10px rgba(0,0,0,0.1)'
        }}>
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
                {SUPERVISOR_DATA.filter(s => selectedRegion === 'ALL' || s.region === selectedRegion).map(sup => (
                  <option key={sup.id} value={sup.id} style={{ color: '#000' }}>{sup.name} ({sup.region})</option>
                ))}
              </select>
            </div>

            <div style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 700, color: 'rgba(255,255,255,0.7)' }}>Instructores Activos</div>
            <input 
              type="text" 
              placeholder="Buscar instructor..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                padding: '10px 16px',
                borderRadius: '8px',
                color: '#ffffff',
                outline: 'none',
                width: '100%',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
          </div>
          
          <div style={{ flex: 1, overflowY: 'auto', padding: '12px' }}>
            {/* VISTA GLOBAL BUTTON */}
            <button
              onClick={() => setSelectedUser(null)}
              style={{
                width: '100%',
                textAlign: 'left',
                padding: '16px',
                background: selectedUser === null ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
                border: selectedUser === null ? '1px solid rgba(255,255,255,0.4)' : '1px solid transparent',
                borderRadius: '8px',
                color: '#ffffff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                transition: 'all 0.2s',
                marginBottom: '16px',
                boxShadow: selectedUser === null ? '0 4px 10px rgba(0,0,0,0.2)' : 'none'
              }}
              onMouseEnter={e => { if (selectedUser !== null) e.currentTarget.style.background = 'rgba(0,0,0,0.3)' }}
              onMouseLeave={e => { if (selectedUser !== null) e.currentTarget.style.background = 'rgba(0,0,0,0.2)' }}
            >
              <div style={{ 
                width: '36px', height: '36px', borderRadius: '50%', background: '#ffffff', color: primaryBrand,
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <LayoutDashboard size={20} />
              </div>
              <div style={{ flex: 1, overflow: 'hidden' }}>
                <div style={{ fontWeight: 800, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>VISTA GLOBAL</div>
                <div style={{ fontSize: '11px', opacity: 0.7 }}>Tabla Estratégica</div>
              </div>
            </button>

            {filteredUsers.length === 0 ? (
              <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', padding: '20px', fontSize: '14px' }}>
                No se encontraron instructores
              </div>
            ) : (
              filteredUsers.map((user) => (
                <button
                  key={user}
                  onClick={() => setSelectedUser(user)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '16px',
                    background: selectedUser === user ? 'rgba(255,255,255,0.15)' : 'transparent',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#ffffff',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    transition: 'all 0.2s',
                    marginBottom: '4px'
                  }}
                  onMouseEnter={e => { if (selectedUser !== user) e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
                  onMouseLeave={e => { if (selectedUser !== user) e.currentTarget.style.background = 'transparent' }}
                >
                  <div style={{ 
                    width: '36px', 
                    height: '36px', 
                    borderRadius: '50%', 
                    background: selectedUser === user ? '#ffffff' : 'rgba(255,255,255,0.2)', 
                    color: selectedUser === user ? primaryBrand : '#ffffff',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontWeight: 'bold'
                  }}>
                    {user.charAt(0).toUpperCase()}
                  </div>
                  <div style={{ flex: 1, overflow: 'hidden' }}>
                    <div style={{ fontWeight: 600, fontSize: '14px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {user}
                    </div>
                  </div>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Main Content Area */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '40px', background: '#F8F7FF' }}>
          
          {selectedUser === null ? (
            /* GLOBAL OVERVIEW */
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <div style={{ marginBottom: '30px' }}>
                <div style={{ fontSize: '14px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>Visión Estratégica</div>
                <div style={{ fontSize: '32px', fontWeight: 900, color: primaryBrand }}>Consolidado del Mes</div>
              </div>

              {/* Global KPIs */}
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

              {/* Master Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
                {!selectedSupervisor && supervisorSummaryData.length > 0 ? (
                  // --- SHOW SUPERVISOR TEAMS ---
                  supervisorSummaryData.map(sup => (
                    <div 
                      key={sup.id}
                      onClick={() => setSelectedSupervisor(sup.id)}
                      style={{ background: '#FFFFFF', borderRadius: '16px', padding: '24px', cursor: 'pointer', transition: 'all 0.2s', position: 'relative', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.05)' }}
                      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                      onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.05)' }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                        <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(15,0,79,0.1)', color: primaryBrand, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '20px' }}>
                          <Users size={24} />
                        </div>
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
                  // --- SHOW INDIVIDUAL INSTRUCTORS ---
                  globalUsersData.map(u => (
                    <div 
                      key={u.user}
                      onClick={() => { setSelectedUser(u.user); setActiveTab('reporte'); }}
                      style={{ background: '#FFFFFF', borderRadius: '16px', padding: '24px', cursor: 'pointer', transition: 'all 0.2s', position: 'relative', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.05)' }}
                      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                      onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.05)' }}
                    >
                      {/* Active Badge */}
                      <div style={{ position: 'absolute', top: '24px', right: '24px', display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(22, 163, 74, 0.1)', color: secondaryBrand, padding: '4px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: 800 }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: secondaryBrand }} /> ACTIVO
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(15,0,79,0.1)', color: primaryBrand, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '20px' }}>
                          {u.user.charAt(0).toUpperCase()}
                        </div>
                        <div style={{ flex: 1, overflow: 'hidden' }}>
                          <div style={{ fontSize: '16px', fontWeight: 800, color: '#111827', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: '4px' }}>{u.user}</div>
                          
                          {u.isDictando ? (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: '#F59E0B' }}>
                              <BookOpen size={12} /> Dictando Curso
                            </div>
                          ) : (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 600, color: '#9CA3AF' }}>
                              <CheckCircle size={12} /> Sin curso activo
                            </div>
                          )}
                        </div>
                      </div>

                      <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: '20px' }}>
                        <div style={{ fontSize: '11px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 800, marginBottom: '16px' }}>Accesos a Módulos (Este Mes)</div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                          <div style={{ textAlign: 'center', padding: '8px', background: '#F9FAFB', borderRadius: '8px' }}>
                            <div style={{ fontSize: '18px', fontWeight: 900, color: '#EAB308' }}>{u.operaciones}</div>
                            <div style={{ fontSize: '9px', color: '#9CA3AF', textTransform: 'uppercase', fontWeight: 800, marginTop: '2px' }}>Instrutor</div>
                          </div>
                          <div style={{ textAlign: 'center', padding: '8px', background: '#F9FAFB', borderRadius: '8px' }}>
                            <div style={{ fontSize: '18px', fontWeight: 900, color: '#06B6D4' }}>{u.suministros}</div>
                            <div style={{ fontSize: '9px', color: '#9CA3AF', textTransform: 'uppercase', fontWeight: 800, marginTop: '2px' }}>Forms</div>
                          </div>
                          <div style={{ textAlign: 'center', padding: '8px', background: '#F9FAFB', borderRadius: '8px' }}>
                            <div style={{ fontSize: '18px', fontWeight: 900, color: '#84CC16' }}>{u.laboratorio}</div>
                            <div style={{ fontSize: '9px', color: '#9CA3AF', textTransform: 'uppercase', fontWeight: 800, marginTop: '2px' }}>Líderes</div>
                          </div>
                          <div style={{ textAlign: 'center', padding: '8px', background: '#F9FAFB', borderRadius: '8px' }}>
                            <div style={{ fontSize: '18px', fontWeight: 900, color: '#A855F7' }}>{u.ingenieria}</div>
                            <div style={{ fontSize: '9px', color: '#9CA3AF', textTransform: 'uppercase', fontWeight: 800, marginTop: '2px' }}>Workshops</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          ) : (
            /* DETAILED USER VIEW */
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
              
              {/* User Identity Header */}
              <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    borderRadius: '16px', 
                    background: primaryBrand, 
                    color: '#ffffff',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontSize: '28px',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 10px rgba(15, 0, 79, 0.2)'
                  }}>
                    {selectedUser.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ fontSize: '14px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>Resumen del Instructor</div>
                      <button 
                        onClick={() => setSelectedUser(null)}
                        style={{ background: 'transparent', border: '1px solid #D1D5DB', borderRadius: '4px', padding: '2px 8px', fontSize: '10px', fontWeight: 800, color: '#6B7280', cursor: 'pointer' }}
                      >
                        VOLVER A GLOBAL
                      </button>
                    </div>
                    <div style={{ fontSize: '32px', fontWeight: 900, color: primaryBrand }}>{selectedUser}</div>
                  </div>
                </div>

                {/* Tabs */}
                <div style={{ display: 'flex', gap: '8px', background: '#E5E7EB', padding: '4px', borderRadius: '12px' }}>
                  <button 
                    onClick={() => setActiveTab('reporte')}
                    style={{ padding: '8px 24px', borderRadius: '8px', border: 'none', background: activeTab === 'reporte' ? '#fff' : 'transparent', color: activeTab === 'reporte' ? primaryBrand : '#6B7280', fontWeight: 800, fontSize: '13px', cursor: 'pointer', transition: 'all 0.2s', boxShadow: activeTab === 'reporte' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none' }}
                  >
                    Reporte del Mes / Avance
                  </button>
                  <button 
                    onClick={() => setActiveTab('historial')}
                    style={{ padding: '8px 24px', borderRadius: '8px', border: 'none', background: activeTab === 'historial' ? '#fff' : 'transparent', color: activeTab === 'historial' ? primaryBrand : '#6B7280', fontWeight: 800, fontSize: '13px', cursor: 'pointer', transition: 'all 0.2s', boxShadow: activeTab === 'historial' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none' }}
                  >
                    Historial (Tipo Excel)
                  </button>
                </div>
              </div>

              {activeTab === 'reporte' ? (
                <>
                  {/* Overall Summary Stats */}
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
                      <tr 
                        key={partida.id}
                        style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}
                      >
                        <td style={{ padding: '16px 24px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            {selectedPartida === partida.id && <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: highlightBrand }} />}
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
