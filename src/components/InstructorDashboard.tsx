import React, { useState, useMemo } from 'react';
import { ChevronLeft, Users, Navigation, CheckCircle, Clock, CalendarDays, Activity, Target, ExternalLink, BookOpen, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export const InstructorDashboard = ({ logs, config, onBack }: any) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter out admin user
  const relevantLogs = useMemo(() => logs.filter((l: any) => l.user !== 'carlose.araya@latam.com'), [logs]);
  
  // Get unique users
  const uniqueUsers = useMemo(() => {
    const users = Array.from(new Set(relevantLogs.map((l: any) => l.user))) as string[];
    return users.sort((a, b) => a.localeCompare(b));
  }, [relevantLogs]);
  
  const filteredUsers = uniqueUsers.filter(u => u.toLowerCase().includes(searchTerm.toLowerCase()));
  
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [selectedPartida, setSelectedPartida] = useState<string | null>(null);

  // Auto-select first user if none selected
  React.useEffect(() => {
    if (!selectedUser && filteredUsers.length > 0) {
      setSelectedUser(filteredUsers[0]);
    }
  }, [filteredUsers, selectedUser]);

  // Get unique partidas for the selected user
  const userPartidas = useMemo(() => {
    if (!selectedUser) return [];
    const userLogs = relevantLogs.filter((l: any) => l.user === selectedUser);
    const partidas = Array.from(new Set(userLogs.map((l: any) => l.partidaId || 'MISION-INICIAL'))) as string[];
    // Sort reverse alphabetically so newer MISION-XXX are likely first
    return partidas.sort((a, b) => b.localeCompare(a));
  }, [relevantLogs, selectedUser]);

  // Auto-select first partida when user changes
  React.useEffect(() => {
    if (userPartidas.length > 0 && (!selectedPartida || !userPartidas.includes(selectedPartida))) {
      setSelectedPartida(userPartidas[0]);
    }
  }, [userPartidas, selectedUser, selectedPartida]);

  // Filter logs by both user and selected partida
  const filteredUserLogs = useMemo(() => {
    if (!selectedUser) return [];
    return relevantLogs.filter((l: any) => 
      l.user === selectedUser && 
      (l.partidaId === selectedPartida || (!l.partidaId && selectedPartida === 'MISION-INICIAL'))
    );
  }, [relevantLogs, selectedUser, selectedPartida]);

  // Group logs for selected user by day
  const groupedLogs = useMemo(() => {
    if (!selectedUser) return {};
    const userLogs = [...filteredUserLogs];
    
    // Sort user logs by time (newest first)
    userLogs.sort((a: any, b: any) => new Date(b.time).getTime() - new Date(a.time).getTime());

    const groups: { [date: string]: any[] } = {};
    userLogs.forEach((log: any) => {
      const date = new Date(log.time).toLocaleDateString();
      if (!groups[date]) groups[date] = [];
      groups[date].push(log);
    });
    return groups;
  }, [filteredUserLogs, selectedUser]);

  // Calculate Metrics
  const userMetrics = useMemo(() => {
    if (!selectedUser) return null;
    const userLogs = [...filteredUserLogs];
    
    const sortedUserLogs = [...userLogs].sort((a: any, b: any) => new Date(b.time).getTime() - new Date(a.time).getTime());
    
    // Última ubicación general
    const lastNav = sortedUserLogs.find((l: any) => l.action === 'NAVIGATE' && l.details.includes('a:'));
    let lastLocation = 'Base de Operaciones';
    if (lastNav) {
        lastLocation = lastNav.details.replace('Navegación a: ', '');
        if (lastLocation.includes('|')) {
            lastLocation = lastLocation.split('|').map((s: string) => s.trim()).join(' - ');
        }
    }

    // Último planeta visitado (para ver dónde se quedó y su progreso)
    const lastPlanetNav = sortedUserLogs.find((l: any) => l.action === 'NAVIGATE' && l.details.includes('Planeta Index:'));
    let lastPlanetLocation = '';
    let currentPlanetTotalNodes = 0;
    let currentPlanetCompletedNodes = 0;
    let hasVisitedPlanet = false;

    if (lastPlanetNav) {
        hasVisitedPlanet = true;
        lastPlanetLocation = lastPlanetNav.details.replace('Navegación a: ', '');
        if (lastPlanetLocation.includes('|')) {
            lastPlanetLocation = lastPlanetLocation.split('|').map((s: string) => s.trim()).join(' - ');
        }
        
        const sectorMatch = lastPlanetNav.details.match(/Sector: (\w+)/);
        const planetIdxMatch = lastPlanetNav.details.match(/Planeta Index: (\d+)/);
        
        if (sectorMatch && planetIdxMatch && config) {
            const sector = sectorMatch[1];
            const planetIdx = parseInt(planetIdxMatch[1]);
            
            // Get total nodes for this planet
            const sectorData = sector === 'fieldSupport' ? config.fsc : 
                               sector === 'soporte' ? config.soporteContent : 
                               config.frontLineContent;
            
            if (sectorData) {
                const planetObj = Array.isArray(sectorData) ? sectorData[planetIdx] : null;
                if (planetObj) {
                    let secciones = [];
                    if (planetObj.secciones) {
                        secciones = planetObj.secciones;
                    } else if (Array.isArray(planetObj)) { 
                        secciones = (planetObj.length > 0 && (planetObj[0].tipo || planetObj[0].rows)) ? planetObj : [{ rows: planetObj }];
                    } else if (planetObj.rows) {
                        secciones = [{ rows: planetObj.rows }];
                    }
                    
                    let total = 0;
                    secciones.forEach((s: any) => {
                        if (s.rows) total += s.rows.length;
                    });
                    currentPlanetTotalNodes = total;
                }
            }
        }

        // Calcular completados DENTRO de este planeta (es decir, desde el último NAVIGATE a ese planeta)
        const navIndex = sortedUserLogs.findIndex((l: any) => l === lastPlanetNav);
        const logsSinceNav = sortedUserLogs.slice(0, navIndex);
        const completedSinceNav = logsSinceNav.filter((l: any) => l.action === 'COMPLETION' && l.details.includes('Finalizado')).length;
        
        currentPlanetCompletedNodes = Math.min(completedSinceNav, currentPlanetTotalNodes);
    }

    // Nodos completados totales
    const completedNodes = userLogs.filter((l: any) => l.action === 'COMPLETION' && l.details.includes('Finalizado')).length;

    // Recursos abiertos
    const openedResources = userLogs.filter((l: any) => l.action === 'OPEN_LINK').length;

    // Interacciones totales
    const totalInteractions = userLogs.length;

    return {
        lastLocation,
        completedNodes,
        openedResources,
        totalInteractions,
        hasVisitedPlanet,
        lastPlanetLocation,
        currentPlanetTotalNodes,
        currentPlanetCompletedNodes
    };
  }, [filteredUserLogs, selectedUser, config]);

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
            <div style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 700, color: 'rgba(255,255,255,0.7)' }}>Instructores</div>
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
          {selectedUser && userMetrics ? (
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
                    <div style={{ fontSize: '14px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>Resumen del Instructor</div>
                    <div style={{ fontSize: '32px', fontWeight: 900, color: primaryBrand }}>{selectedUser}</div>
                  </div>
                </div>

                {/* Partida Selector */}
                {userPartidas.length > 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <div style={{ fontSize: '12px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, marginBottom: '8px' }}>Sesión / Partida</div>
                    <select
                      value={selectedPartida || ''}
                      onChange={(e) => setSelectedPartida(e.target.value)}
                      style={{
                        padding: '10px 16px',
                        borderRadius: '8px',
                        border: '1px solid #D1D5DB',
                        background: '#FFFFFF',
                        color: primaryBrand,
                        fontSize: '14px',
                        fontWeight: 700,
                        outline: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                      }}
                    >
                      {userPartidas.map(p => (
                        <option key={p} value={p}>{p === 'MISION-INICIAL' ? 'Partida Base Inicial' : p}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              {/* Stats Panel */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                {/* Enseñando Actualmente */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                  style={{ background: '#FFFFFF', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.05)', position: 'relative', overflow: 'hidden' }}
                >
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: primaryBrand }} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(15, 0, 79, 0.1)', color: primaryBrand, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Rocket size={20} />
                    </div>
                    <div style={{ fontSize: '12px', fontWeight: 800, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '1px' }}>Ubicación Actual</div>
                  </div>
                  <div style={{ fontSize: '18px', fontWeight: 800, color: '#111827', lineHeight: '1.4', marginBottom: '16px' }}>
                    {userMetrics.lastLocation}
                  </div>
                  
                  {/* Last Planet Progress Bar */}
                  {userMetrics.hasVisitedPlanet && userMetrics.currentPlanetTotalNodes > 0 && (
                    <div style={{ background: '#f1f5f9', borderRadius: '8px', padding: '12px', border: '1px solid #e2e8f0' }}>
                      <div style={{ fontSize: '11px', fontWeight: 800, color: '#111827', marginBottom: '8px', textTransform: 'uppercase' }}>
                        Última Misión: {userMetrics.lastPlanetLocation.split('-')[0]}
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', fontWeight: 700, color: '#64748b', marginBottom: '6px' }}>
                        <span>AVANCE</span>
                        <span style={{ color: primaryBrand }}>{userMetrics.currentPlanetCompletedNodes} / {userMetrics.currentPlanetTotalNodes} NODOS</span>
                      </div>
                      <div style={{ height: '6px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ 
                          height: '100%', 
                          background: secondaryBrand, 
                          width: `${Math.min(100, (userMetrics.currentPlanetCompletedNodes / userMetrics.currentPlanetTotalNodes) * 100)}%`,
                          transition: 'width 0.5s ease-out'
                        }} />
                      </div>
                      <div style={{ fontSize: '10px', color: '#64748b', marginTop: '6px', textAlign: 'right', fontWeight: 700 }}>
                        FALTAN: {Math.max(0, userMetrics.currentPlanetTotalNodes - userMetrics.currentPlanetCompletedNodes)}
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Nodos Trabajados */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                  style={{ background: '#FFFFFF', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.05)', position: 'relative', overflow: 'hidden' }}
                >
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: secondaryBrand }} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(22, 163, 74, 0.1)', color: secondaryBrand, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <CheckCircle size={20} />
                    </div>
                    <div style={{ fontSize: '12px', fontWeight: 800, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '1px' }}>Nodos Trabajados (Total)</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
                    <div style={{ fontSize: '36px', fontWeight: 900, color: secondaryBrand, lineHeight: '1' }}>
                      {userMetrics.completedNodes}
                    </div>
                    <div style={{ fontSize: '14px', color: '#6B7280', fontWeight: 600, marginBottom: '4px' }}>finalizados</div>
                  </div>
                </motion.div>

                {/* Recursos Abiertos */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                  style={{ background: '#FFFFFF', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.05)', position: 'relative', overflow: 'hidden' }}
                >
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: highlightBrand }} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(0, 214, 204, 0.1)', color: '#00A9E0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <BookOpen size={20} />
                    </div>
                    <div style={{ fontSize: '12px', fontWeight: 800, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '1px' }}>Recursos Abiertos</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
                    <div style={{ fontSize: '36px', fontWeight: 900, color: '#00A9E0', lineHeight: '1' }}>
                      {userMetrics.openedResources}
                    </div>
                    <div style={{ fontSize: '14px', color: '#6B7280', fontWeight: 600, marginBottom: '4px' }}>materiales</div>
                  </div>
                </motion.div>
              </div>

              {/* Title for Timeline */}
              <div style={{ fontSize: '18px', fontWeight: 800, color: '#111827', marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid rgba(0,0,0,0.05)' }}>
                Historial Detallado de Actividad
              </div>

              {/* TIMELINE */}
              {Object.keys(groupedLogs).length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px', background: '#ffffff', borderRadius: '16px', border: '1px dashed #ccc' }}>
                  <Activity size={48} color="#ccc" style={{ margin: '0 auto 16px' }} />
                  <div style={{ fontSize: '18px', color: '#6B7280', fontWeight: 600 }}>No hay actividad registrada</div>
                </div>
              ) : (
                Object.keys(groupedLogs).map((date, index) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={date} 
                    style={{ marginBottom: '40px' }}
                  >
                    {/* Date Header */}
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '12px', 
                      marginBottom: '20px',
                      position: 'sticky',
                      top: '-40px',
                      background: '#F8F7FF',
                      padding: '10px 0',
                      zIndex: 5
                    }}>
                      <div style={{ background: primaryBrand, color: '#ffffff', padding: '8px 16px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 700, boxShadow: '0 2px 4px rgba(15, 0, 79, 0.2)' }}>
                        <CalendarDays size={16} />
                        {date}
                      </div>
                      <div style={{ height: '2px', flex: 1, background: 'linear-gradient(90deg, rgba(15,0,79,0.2) 0%, transparent 100%)' }} />
                    </div>

                    {/* Timeline */}
                    <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.05)' }}>
                      <div style={{ position: 'relative', paddingLeft: '24px' }}>
                        {/* Vertical line */}
                        <div style={{ position: 'absolute', left: '7px', top: '10px', bottom: '10px', width: '2px', background: '#E5E7EB' }} />
                        
                        {groupedLogs[date].map((log: any, i: number) => {
                          const isCompletion = log.action === 'COMPLETION';
                          const isLink = log.action === 'OPEN_LINK';
                          
                          let Icon = Navigation;
                          let iconColor = primaryBrand;
                          let bgColor = 'rgba(15, 0, 79, 0.1)';
                          let label = 'NAVEGACIÓN';

                          if (isCompletion) {
                            Icon = CheckCircle;
                            iconColor = secondaryBrand;
                            bgColor = 'rgba(22, 163, 74, 0.1)';
                            label = 'MARCÓ LISTO';
                          } else if (isLink) {
                            Icon = ExternalLink;
                            iconColor = highlightBrand;
                            bgColor = 'rgba(0, 214, 204, 0.1)';
                            label = 'ABRIÓ RECURSO';
                          }
                          
                          return (
                            <div key={i} style={{ position: 'relative', marginBottom: i === groupedLogs[date].length - 1 ? 0 : '24px' }}>
                              {/* Timeline Dot */}
                              <div style={{ position: 'absolute', left: '-24px', top: '2px', width: '16px', height: '16px', borderRadius: '50%', background: '#ffffff', border: `2px solid ${iconColor}`, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: iconColor }} />
                              </div>
                              
                              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                                <div style={{ 
                                  fontSize: '12px', 
                                  fontWeight: 700, 
                                  color: '#6B7280',
                                  width: '70px',
                                  flexShrink: 0,
                                  marginTop: '2px'
                                }}>
                                  {new Date(log.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                                </div>
                                
                                <div style={{ flex: 1 }}>
                                  <div style={{ 
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    background: bgColor, 
                                    color: iconColor, 
                                    padding: '4px 10px', 
                                    borderRadius: '12px', 
                                    fontSize: '11px', 
                                    fontWeight: 900, 
                                    letterSpacing: '0.05em',
                                    marginBottom: '8px'
                                  }}>
                                    <Icon size={12} />
                                    {label}
                                  </div>
                                  <div style={{ fontSize: '15px', color: '#111827', fontWeight: 500, lineHeight: '1.5' }}>
                                    {log.details}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          ) : (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#6B7280' }}>
              <Users size={64} style={{ marginBottom: '24px', opacity: 0.2 }} />
              <div style={{ fontSize: '24px', fontWeight: 600, marginBottom: '8px' }}>Selecciona un Instructor</div>
              <div style={{ fontSize: '15px' }}>Elige un usuario del panel izquierdo para ver su actividad detallada.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
