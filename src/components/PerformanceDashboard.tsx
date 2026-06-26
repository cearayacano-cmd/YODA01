import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Clock, Target, Star, Zap, Award, Activity, MousePointerClick, CalendarDays, Medal, Crown } from 'lucide-react';

export const PerformanceDashboard = () => {
  const [sortConfig, setSortConfig] = useState<{ key: string, direction: 'asc' | 'desc' }>({ key: 'score', direction: 'desc' });
  const [forceRender, setForceRender] = useState(0);

  const injectFakeData = () => {
    const logsStr = localStorage.getItem('yoda_activity_logs');
    let logs = logsStr ? JSON.parse(logsStr) : [];
    
    // Veterano
    logs.push({ time: new Date().toISOString(), user: 'veterano@latam.com', action: 'TRACK_TIEMPO', elapsedSecs: 200 * 3600 });
    for(let i=0; i<150; i++) logs.push({ time: new Date().toISOString(), user: 'veterano@latam.com', action: 'MARCAR_COMPLETADO' });
    for(let i=0; i<300; i++) logs.push({ time: new Date().toISOString(), user: 'veterano@latam.com', action: 'NAVIGATE' });
    
    // Medio
    logs.push({ time: new Date().toISOString(), user: 'medio@latam.com', action: 'TRACK_TIEMPO', elapsedSecs: 50 * 3600 });
    for(let i=0; i<40; i++) logs.push({ time: new Date().toISOString(), user: 'medio@latam.com', action: 'MARCAR_COMPLETADO' });
    for(let i=0; i<100; i++) logs.push({ time: new Date().toISOString(), user: 'medio@latam.com', action: 'NAVIGATE' });

    // Nuevo
    logs.push({ time: new Date().toISOString(), user: 'nuevo@latam.com', action: 'TRACK_TIEMPO', elapsedSecs: 5 * 3600 });
    for(let i=0; i<5; i++) logs.push({ time: new Date().toISOString(), user: 'nuevo@latam.com', action: 'MARCAR_COMPLETADO' });
    for(let i=0; i<10; i++) logs.push({ time: new Date().toISOString(), user: 'nuevo@latam.com', action: 'NAVIGATE' });

    localStorage.setItem('yoda_activity_logs', JSON.stringify(logs));
    setForceRender(prev => prev + 1);
  };

  const stats = useMemo(() => {
    const logsStr = localStorage.getItem('yoda_activity_logs');
    const logs = logsStr ? JSON.parse(logsStr) : [];
    
    const usersData: Record<string, any> = {};

    logs.forEach((log: any) => {
      if (!log.user) return;
      if (log.user === 'admin') return;

      if (!usersData[log.user]) {
        usersData[log.user] = {
          email: log.user,
          name: log.user.split('@')[0].replace(/\./g, ' '),
          totalSecs: 0,
          missionsCompleted: 0,
          toolClicks: 0,
          activeDays: new Set<string>(),
          lastActive: 0
        };
      }

      const ud = usersData[log.user];
      
      if (log.action === 'TRACK_TIEMPO') {
        ud.totalSecs += (log.elapsedSecs || 0);
      }
      if (log.action === 'MARCAR_COMPLETADO') {
        ud.missionsCompleted++;
      }
      if (log.action === 'NAVIGATE' || log.action === 'ACCESO_LINK') {
        ud.toolClicks++;
      }

      if (log.time) {
        const dateStr = new Date(log.time).toISOString().split('T')[0];
        ud.activeDays.add(dateStr);
        const timeVal = new Date(log.time).getTime();
        if (timeVal > ud.lastActive) ud.lastActive = timeVal;
      }
    });

    const arr = Object.values(usersData).map(ud => {
      const hours = ud.totalSecs / 3600;
      // Formula to create a global "Performance Score"
      // Weighting: 1 hour = 50 pts, 1 mission = 20 pts, 1 tool click = 5 pts, 1 active day = 10 pts
      const score = Math.round((hours * 50) + (ud.missionsCompleted * 20) + (ud.toolClicks * 5) + (ud.activeDays.size * 10));
      return {
        ...ud,
        hoursFormatted: hours.toFixed(1),
        daysCount: ud.activeDays.size,
        score
      };
    });

    arr.sort((a, b) => {
      if (sortConfig.direction === 'asc') {
        return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
      }
      return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
    });

    return arr;
  }, [sortConfig, forceRender]);

  const requestSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'desc';
    if (sortConfig.key === key && sortConfig.direction === 'desc') {
      direction = 'asc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div style={{ padding: '40px 60px', background: '#F8F7FF', minHeight: '100%', overflowY: 'auto' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 8 }}>
            <div style={{ background: '#0F004F', padding: 12, borderRadius: 16, boxShadow: '0 8px 20px rgba(15,0,79,0.2)' }}>
              <Trophy size={28} color="#00D6CC" />
            </div>
            <h1 style={{ fontSize: 28, fontWeight: 900, color: '#0F004F', letterSpacing: '-0.02em', margin: 0 }}>Performance Ranking</h1>
          </div>
          <p style={{ fontSize: 15, color: '#64748B', margin: 0, maxWidth: 600 }}>
            Tablero global de medición de instructores. Calcula horas de vuelo acumuladas, misiones finalizadas y el nivel de adopción del ecosistema.
          </p>
          <button 
             onClick={injectFakeData}
             style={{ marginTop: 12, background: 'rgba(237,22,80,0.1)', color: '#ED1650', border: '1px dashed rgba(237,22,80,0.3)', padding: '6px 12px', borderRadius: 8, cursor: 'pointer', fontSize: 12, fontWeight: 700 }}
          >
             🤖 Inyectar Datos Ficticios
          </button>
        </div>
        
        <div style={{ background: '#ffffff', padding: '16px 24px', borderRadius: 20, display: 'flex', gap: 32, boxShadow: '0 10px 40px rgba(0,0,0,0.05)', border: '1px solid rgba(27,0,136,0.08)' }}>
           <div>
              <div style={{ fontSize: 11, color: '#64748B', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Instructores Activos</div>
              <div style={{ fontSize: 24, fontWeight: 900, color: '#0F004F' }}>{stats.length}</div>
           </div>
           <div style={{ width: 1, background: '#E2E8F0' }} />
           <div>
              <div style={{ fontSize: 11, color: '#64748B', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Horas Globales</div>
              <div style={{ fontSize: 24, fontWeight: 900, color: '#ED1650' }}>
                {Math.round(stats.reduce((acc, s) => acc + (s.totalSecs/3600), 0))}h
              </div>
           </div>
        </div>
      </div>

      <div style={{ background: '#ffffff', borderRadius: 24, boxShadow: '0 8px 30px rgba(27,0,136,0.04)', border: '1px solid rgba(27,0,136,0.08)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#0F004F' }}>
              <th style={{ padding: '20px 24px', textAlign: 'left', color: '#fff', fontSize: 12, fontWeight: 800, letterSpacing: '0.1em' }}>RANK</th>
              <th style={{ padding: '20px 24px', textAlign: 'left', color: '#fff', fontSize: 12, fontWeight: 800, letterSpacing: '0.1em' }}>INSTRUCTOR</th>
              <th 
                onClick={() => requestSort('score')}
                style={{ padding: '20px 24px', textAlign: 'center', color: '#00D6CC', fontSize: 12, fontWeight: 900, letterSpacing: '0.1em', cursor: 'pointer' }}
              >
                SCORE {sortConfig.key === 'score' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
              </th>
              <th 
                onClick={() => requestSort('totalSecs')}
                style={{ padding: '20px 24px', textAlign: 'center', color: '#fff', fontSize: 12, fontWeight: 800, letterSpacing: '0.1em', cursor: 'pointer' }}
              >
                HORAS {sortConfig.key === 'totalSecs' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
              </th>
              <th 
                onClick={() => requestSort('missionsCompleted')}
                style={{ padding: '20px 24px', textAlign: 'center', color: '#fff', fontSize: 12, fontWeight: 800, letterSpacing: '0.1em', cursor: 'pointer' }}
              >
                MISIONES {sortConfig.key === 'missionsCompleted' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
              </th>
              <th 
                onClick={() => requestSort('toolClicks')}
                style={{ padding: '20px 24px', textAlign: 'center', color: '#fff', fontSize: 12, fontWeight: 800, letterSpacing: '0.1em', cursor: 'pointer' }}
              >
                USO HERRAMIENTAS {sortConfig.key === 'toolClicks' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
              </th>
            </tr>
          </thead>
          <tbody>
            {stats.map((s, idx) => {
              const isTop1 = sortConfig.key === 'score' && sortConfig.direction === 'desc' && idx === 0;
              const isTop2 = sortConfig.key === 'score' && sortConfig.direction === 'desc' && idx === 1;
              const isTop3 = sortConfig.key === 'score' && sortConfig.direction === 'desc' && idx === 2;

              return (
                <motion.tr 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={s.email} 
                  style={{ 
                    borderBottom: '1px solid #F1F5F9',
                    background: isTop1 ? 'linear-gradient(90deg, rgba(255,224,23,0.1) 0%, rgba(255,255,255,0) 100%)' : 'transparent',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#F8FAFC'}
                  onMouseLeave={e => e.currentTarget.style.background = isTop1 ? 'linear-gradient(90deg, rgba(255,224,23,0.1) 0%, rgba(255,255,255,0) 100%)' : 'transparent'}
                >
                  <td style={{ padding: '20px 24px', textAlign: 'center' }}>
                    {isTop1 ? <Crown size={28} color="#FFB800" style={{ filter: 'drop-shadow(0 4px 6px rgba(255,184,0,0.3))' }} /> :
                     isTop2 ? <Medal size={24} color="#94A3B8" /> :
                     isTop3 ? <Medal size={24} color="#B45309" /> :
                     <span style={{ fontSize: 16, fontWeight: 800, color: '#94A3B8' }}>{idx + 1}</span>}
                  </td>
                  <td style={{ padding: '20px 24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                      <div style={{ 
                        width: 44, height: 44, borderRadius: '50%', 
                        background: isTop1 ? '#FFB800' : '#E2E8F0', 
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: isTop1 ? '#fff' : '#475569', fontWeight: 900, fontSize: 16,
                        boxShadow: isTop1 ? '0 4px 12px rgba(255,184,0,0.4)' : 'none'
                      }}>
                        {s.name.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div style={{ fontSize: 15, fontWeight: 800, color: '#0F004F', textTransform: 'capitalize' }}>{s.name}</div>
                        <div style={{ fontSize: 12, color: '#64748B' }}>{s.email}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '20px 24px', textAlign: 'center' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(0,214,204,0.1)', color: '#00BDB4', padding: '6px 16px', borderRadius: 20, fontWeight: 900, fontSize: 15 }}>
                      <Star size={16} fill="currentColor" /> {s.score}
                    </div>
                  </td>
                  <td style={{ padding: '20px 24px', textAlign: 'center' }}>
                    <div style={{ fontSize: 16, fontWeight: 800, color: '#0F004F' }}>{s.hoursFormatted}h</div>
                  </td>
                  <td style={{ padding: '20px 24px', textAlign: 'center' }}>
                    <div style={{ fontSize: 15, fontWeight: 700, color: '#64748B' }}>{s.missionsCompleted}</div>
                  </td>
                  <td style={{ padding: '20px 24px', textAlign: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, fontSize: 15, fontWeight: 700, color: '#64748B' }}>
                      <MousePointerClick size={16} /> {s.toolClicks}
                    </div>
                  </td>
                </motion.tr>
              );
            })}
            
            {stats.length === 0 && (
              <tr>
                <td colSpan={6} style={{ padding: '60px 20px', textAlign: 'center', color: '#94A3B8' }}>
                  <Activity size={48} style={{ margin: '0 auto 16px', opacity: 0.5 }} />
                  <div style={{ fontSize: 16, fontWeight: 600 }}>No hay datos suficientes todavía</div>
                  <div style={{ fontSize: 14 }}>A medida que los instructores usen la plataforma, aparecerán aquí.</div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      <div style={{ height: 60 }} />
    </div>
  );
};
