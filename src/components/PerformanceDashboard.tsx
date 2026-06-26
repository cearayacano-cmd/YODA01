import React, { useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Clock, Target, Activity, Zap, Layers, AlertCircle, CheckCircle2, ChevronRight, X, UserX, UserCheck, Shield, ShieldAlert, ShieldCheck, Crown } from 'lucide-react';
import { getMissionTracking, MissionProgress } from '../lib/tracking';

export const PerformanceDashboard = () => {
  const [data, setData] = useState<MissionProgress[]>([]);
  const [activityLogs, setActivityLogs] = useState<any[]>([]);
  const [forceRender, setForceRender] = useState(0);
  const [selectedToCompare, setSelectedToCompare] = useState<string[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  const injectFakeData = () => {
    const tracking = getMissionTracking();
    const date = new Date();
    const mesAño = `${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}`;
    
    // Helper to generate a fake mission
    const addMissions = (email: string, planet: string, count: number, expectedMins: number, actualMins: number, status: 'FINALIZADO' | 'ABANDONADO' | 'SOLO_LECTURA' = 'FINALIZADO', sessionCode: string = 'S1') => {
        for(let i=0; i<count; i++) {
           const apert = Date.now() - (actualMins * 60000);
           const fin = Date.now();
           tracking.push({
             mesAño, instructor: email.split('@')[0], email, codigo: sessionCode, expedicion: 'MOCK',
             planetas: planet, missao: `Misión ${i}`, macrotema: 'Tema', tema: `Tema ${i}`,
             tiempoEstimado: `${expectedMins}m`, 
             tiempoApertura: status === 'SOLO_LECTURA' ? null : new Date(apert).toISOString(), 
             marcarComoFinalizado: status === 'FINALIZADO' ? new Date(fin).toISOString() : null,
             marcarComoVisto: status === 'SOLO_LECTURA' ? new Date(fin).toISOString() : null,
             tiempoAperturaRaw: status === 'SOLO_LECTURA' ? undefined : apert, 
             marcarComoFinalizadoRaw: status === 'FINALIZADO' ? fin : undefined
           });
        }
    };

    const addLogs = (email: string, count: number) => {
       const logsStr = localStorage.getItem('yoda_activity_logs');
       let logs = logsStr ? JSON.parse(logsStr) : [];
       for(let i=0; i<count; i++) {
          logs.push({ time: new Date().toISOString(), user: email, action: 'NAVIGATE', details: 'PORTAL_EXTERNO' });
       }
       localStorage.setItem('yoda_activity_logs', JSON.stringify(logs));
       setActivityLogs(logs);
    };

    // Veterano: 200 hours, high precision, multi-sessions
    addMissions('veterano@latam.com', 'HVC BAG', 100, 60, 60, 'FINALIZADO', 'SES-01');
    addMissions('veterano@latam.com', 'HVC BAG', 20, 60, 30, 'FINALIZADO', 'SES-02');
    addMissions('veterano@latam.com', 'LAE', 50, 120, 120, 'FINALIZADO', 'SES-03');
    addMissions('veterano@latam.com', 'LAE', 5, 120, 60, 'ABANDONADO', 'SES-03');
    addLogs('veterano@latam.com', 45); // Portales externos

    // Medio: 50 hours, mostly slow, some read only
    addMissions('medio@latam.com', 'ONBOARDING LATAM', 40, 30, 60, 'FINALIZADO', 'SES-10');
    addMissions('medio@latam.com', 'ONBOARDING LATAM', 15, 30, 0, 'SOLO_LECTURA', 'SES-10');
    addLogs('medio@latam.com', 12);

    // Nuevo: very fast, abandons a lot
    addMissions('nuevo@latam.com', 'FIELD SUPPORT BASE', 5, 60, 10, 'FINALIZADO', 'SES-20');
    addMissions('nuevo@latam.com', 'FIELD SUPPORT BASE', 10, 60, 30, 'ABANDONADO', 'SES-20');
    addLogs('nuevo@latam.com', 2);

    localStorage.setItem('yoda_mission_tracking', JSON.stringify(tracking));
    setData(tracking);
    setForceRender(prev => prev + 1);
  };

  useEffect(() => {
    setData(getMissionTracking());
    const savedLogs = localStorage.getItem('yoda_activity_logs');
    setActivityLogs(savedLogs ? JSON.parse(savedLogs) : []);
  }, []);

  const parseTimeStr = (tStr: string) => {
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

  const stats = useMemo(() => {
    const usersData: Record<string, any> = {};

    data.forEach(log => {
      if (!log.email || log.email === 'admin') return;

      if (!usersData[log.email]) {
        usersData[log.email] = {
          email: log.email,
          name: log.instructor || log.email.split('@')[0].replace(/\./g, ' '),
          courses: new Map<string, { expectedMins: number, actualMins: number, count: number }>(),
          totalExpectedMins: 0,
          totalActualMins: 0,
          onTime: 0,
          fast: 0,
          slow: 0,
          abandoned: 0,
          readOnly: 0,
          sessions: new Set<string>(),
          activeDays: new Set<string>(),
          externalPortals: 0
        };
      }

      const ud = usersData[log.email];
      const planet = log.planetas || 'Desconocido';
      
      if (!ud.courses.has(planet)) {
        ud.courses.set(planet, { expectedMins: 0, actualMins: 0, count: 0 });
      }
      
      const courseStats = ud.courses.get(planet)!;
      
      if (log.marcarComoFinalizado) {
        const expected = parseTimeStr(log.tiempoEstimado);
        
        let actual = 0;
        if (log.marcarComoFinalizadoRaw && log.tiempoAperturaRaw) {
          actual = Math.round((log.marcarComoFinalizadoRaw - log.tiempoAperturaRaw) / 60000);
        }
        
        if (actual < 0) actual = 0;
        if (actual > expected * 3) actual = expected * 3;

        courseStats.expectedMins += expected;
        courseStats.actualMins += actual;
        courseStats.count++;

        ud.totalExpectedMins += expected;
        ud.totalActualMins += actual;

        const diff = actual - expected;
        const tolerance = expected * 0.15;

        if (diff < -tolerance) ud.fast++;
        else if (diff > tolerance) ud.slow++;
        else ud.onTime++;
      } else if (log.tiempoApertura) {
        ud.abandoned++;
      } else if (log.marcarComoVisto) {
        ud.readOnly++;
      }
      
      if (log.codigo) ud.sessions.add(log.codigo);
      if (log.tiempoAperturaRaw) ud.activeDays.add(new Date(log.tiempoAperturaRaw).toISOString().split('T')[0]);
      if (log.marcarComoVistoRaw) ud.activeDays.add(new Date(log.marcarComoVistoRaw).toISOString().split('T')[0]);
    });

    activityLogs.forEach((log: any) => {
        if (!log.user || log.user === 'admin') return;
        const ud = usersData[log.user];
        if (ud) {
            if (log.action === 'NAVIGATE' || log.action === 'ACCESO_LINK') {
                ud.externalPortals++;
            }
            if (log.time) ud.activeDays.add(new Date(log.time).toISOString().split('T')[0]);
        }
    });

    return Object.values(usersData).map(ud => {
      const totalMissions = ud.onTime + ud.fast + ud.slow;
      
      let topCourse = 'N/A';
      let maxCount = -1;
      const courseList = Array.from(ud.courses.entries()).map(([k, v]: any) => {
         if (v.count > maxCount) { maxCount = v.count; topCourse = k; }
         return { name: k, ...v };
      });

      return {
        ...ud,
        totalMissions,
        topCourse,
        courseList,
        precisionScore: totalMissions > 0 ? Math.round((ud.onTime / totalMissions) * 100) : 0
      };
    }).sort((a, b) => b.totalActualMins - a.totalActualMins);

  }, [data, activityLogs, forceRender]);

  const getRank = (totalHours: number) => {
    if (totalHours >= 150) return { title: 'Maestro Jedi', color: '#FFB800', bg: 'rgba(255,184,0,0.1)', icon: Crown };
    if (totalHours >= 50) return { title: 'Instructor Senior', color: '#8B5CF6', bg: 'rgba(139,92,246,0.1)', icon: ShieldCheck };
    if (totalHours >= 10) return { title: 'Instructor Regular', color: '#3B82F6', bg: 'rgba(59,130,246,0.1)', icon: Shield };
    return { title: 'Iniciado', color: '#94A3B8', bg: 'rgba(148,163,184,0.1)', icon: ShieldAlert };
  };

  const toggleSelect = (email: string) => {
     if (selectedToCompare.includes(email)) {
        setSelectedToCompare(prev => prev.filter(e => e !== email));
     } else {
        if (selectedToCompare.length < 3) {
           setSelectedToCompare(prev => [...prev, email]);
        }
     }
  };

  const CircleProgress = ({ score }: { score: number }) => {
    const radius = 24;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (score / 100) * circumference;
    const color = score >= 70 ? '#00D6CC' : score >= 40 ? '#FFB800' : '#ED1650';

    return (
      <div style={{ position: 'relative', width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="60" height="60" style={{ transform: 'rotate(-90deg)' }}>
          <circle cx="30" cy="30" r={radius} fill="none" stroke="#E2E8F0" strokeWidth="6" />
          <motion.circle 
            cx="30" cy="30" r={radius} fill="none" stroke={color} strokeWidth="6" 
            strokeLinecap="round" strokeDasharray={circumference} 
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
        <div style={{ position: 'absolute', fontSize: 13, fontWeight: 900, color: '#0F004F' }}>
          {score}%
        </div>
      </div>
    );
  };

  if (showComparison) {
      const selectedStats = stats.filter(s => selectedToCompare.includes(s.email));

      return (
         <div style={{ padding: '40px 60px', background: '#F8F7FF', minHeight: '100%', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 }}>
                <div>
                   <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 8 }}>
                     <div style={{ background: '#ED1650', padding: 12, borderRadius: 16, boxShadow: '0 8px 20px rgba(237,22,80,0.2)', cursor: 'pointer' }} onClick={() => setShowComparison(false)}>
                       <X size={28} color="#fff" />
                     </div>
                     <h1 style={{ fontSize: 28, fontWeight: 900, color: '#0F004F', margin: 0 }}>Modo Comparación</h1>
                   </div>
                   <p style={{ fontSize: 14, color: '#64748B', margin: 0 }}>Comparando métricas clave de {selectedToCompare.length} instructores.</p>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${selectedStats.length}, 1fr)`, gap: 32 }}>
                {selectedStats.map(s => (
                   <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} key={s.email} style={{ background: '#fff', borderRadius: 24, padding: 32, boxShadow: '0 10px 40px rgba(0,0,0,0.05)', border: '1px solid rgba(27,0,136,0.05)' }}>
                       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: 32 }}>
                          <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#0F004F', color: '#00D6CC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontWeight: 900, marginBottom: 16 }}>
                              {s.name.substring(0, 2).toUpperCase()}
                          </div>
                          <div style={{ fontSize: 22, fontWeight: 900, color: '#0F004F', textTransform: 'capitalize', marginBottom: 4 }}>{s.name}</div>
                          <div style={{ fontSize: 13, color: '#64748B', marginBottom: 16 }}>{s.email}</div>
                          
                          {(() => {
                             const rank = getRank(s.totalActualMins / 60);
                             const Icon = rank.icon;
                             return (
                                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: rank.bg, color: rank.color, padding: '6px 14px', borderRadius: 20, fontSize: 12, fontWeight: 800, letterSpacing: '0.05em' }}>
                                  <Icon size={14} strokeWidth={3} /> {rank.title.toUpperCase()}
                                </div>
                             );
                          })()}
                       </div>

                       <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                           <div>
                               <div style={{ fontSize: 11, color: '#94A3B8', fontWeight: 800, letterSpacing: '0.1em', marginBottom: 4 }}>PRECISIÓN GLOBAL</div>
                               <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                                  <CircleProgress score={s.precisionScore} />
                                  <div>
                                     <div style={{ fontSize: 13, color: '#64748B' }}><strong style={{color: '#0F004F'}}>{s.onTime}</strong> A Tiempo</div>
                                     <div style={{ fontSize: 13, color: '#64748B' }}><strong style={{color: '#0F004F'}}>{s.fast}</strong> Rápidos | <strong style={{color: '#0F004F'}}>{s.slow}</strong> Lentos</div>
                                  </div>
                               </div>
                           </div>

                           <div style={{ background: '#F8FAFC', borderRadius: 16, padding: 20 }}>
                               <div style={{ fontSize: 11, color: '#94A3B8', fontWeight: 800, letterSpacing: '0.1em', marginBottom: 12 }}>ESTADÍSTICAS VITALES</div>
                               <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                                  <span style={{ fontSize: 14, color: '#475569', fontWeight: 600 }}>Horas Acumuladas</span>
                                  <span style={{ fontSize: 15, color: '#0F004F', fontWeight: 900 }}>{(s.totalActualMins / 60).toFixed(1)}h</span>
                               </div>
                               <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                                  <span style={{ fontSize: 14, color: '#475569', fontWeight: 600 }}>Días Activos</span>
                                  <span style={{ fontSize: 15, color: '#0F004F', fontWeight: 900 }}>{s.activeDays.size}</span>
                               </div>
                               <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                                  <span style={{ fontSize: 14, color: '#475569', fontWeight: 600 }}>Portales Externos</span>
                                  <span style={{ fontSize: 15, color: '#0F004F', fontWeight: 900 }}>{s.externalPortals}</span>
                               </div>
                               <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                                  <span style={{ fontSize: 14, color: '#475569', fontWeight: 600 }}>Tasa de Abandono</span>
                                  <span style={{ fontSize: 15, color: '#ED1650', fontWeight: 900 }}>{s.abandoned}</span>
                               </div>
                           </div>

                           <div>
                               <div style={{ fontSize: 11, color: '#94A3B8', fontWeight: 800, letterSpacing: '0.1em', marginBottom: 12 }}>CURSOS MÁS DICTADOS</div>
                               <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                  {s.courseList.slice(0, 3).map((c: any, i: number) => (
                                     <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', border: '1px solid #E2E8F0', padding: '12px 16px', borderRadius: 12 }}>
                                        <div style={{ fontSize: 13, fontWeight: 700, color: '#0F004F' }}>{c.name}</div>
                                        <div style={{ fontSize: 13, fontWeight: 900, color: '#00D6CC' }}>{c.count}x</div>
                                     </div>
                                  ))}
                               </div>
                           </div>
                       </div>
                   </motion.div>
                ))}
            </div>
         </div>
      );
  }

  return (
    <div style={{ padding: '40px 60px', background: '#F8F7FF', minHeight: '100%', overflowY: 'auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ background: '#0F004F', padding: 12, borderRadius: 16, boxShadow: '0 8px 20px rgba(15,0,79,0.2)' }}>
              <Target size={28} color="#00D6CC" />
            </div>
            <div>
              <h1 style={{ fontSize: 28, fontWeight: 900, color: '#0F004F', letterSpacing: '-0.02em', margin: 0 }}>Rendimiento de Instructores</h1>
              <p style={{ fontSize: 14, color: '#64748B', margin: 0 }}>Analiza cursos dictados, horas acumuladas y precisión de cumplimiento horario.</p>
              <button 
                 onClick={injectFakeData}
                 style={{ marginTop: 12, background: 'rgba(237,22,80,0.1)', color: '#ED1650', border: '1px dashed rgba(237,22,80,0.3)', padding: '6px 12px', borderRadius: 8, cursor: 'pointer', fontSize: 12, fontWeight: 700 }}
              >
                 🤖 Inyectar Datos Ficticios
              </button>
            </div>
          </div>

          <AnimatePresence>
             {selectedToCompare.length > 0 && (
                <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }} 
                   animate={{ opacity: 1, scale: 1 }} 
                   exit={{ opacity: 0, scale: 0.9 }}
                   style={{ background: '#fff', border: '2px solid #00D6CC', borderRadius: 16, padding: '16px 24px', display: 'flex', alignItems: 'center', gap: 24, boxShadow: '0 8px 25px rgba(0,214,204,0.15)' }}
                >
                   <div>
                      <div style={{ fontSize: 12, fontWeight: 800, color: '#64748B' }}>SELECCIONADOS PARA COMPARAR</div>
                      <div style={{ fontSize: 16, fontWeight: 900, color: '#0F004F' }}>{selectedToCompare.length} / 3 Instructores</div>
                   </div>
                   <button 
                      onClick={() => setShowComparison(true)}
                      style={{ background: '#00D6CC', color: '#0F004F', border: 'none', padding: '12px 24px', borderRadius: 12, fontWeight: 900, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}
                   >
                      <Layers size={18} /> COMPARAR AHORA
                   </button>
                </motion.div>
             )}
          </AnimatePresence>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
        {stats.map((s, idx) => {
          const isSelected = selectedToCompare.includes(s.email);
          const canSelect = isSelected || selectedToCompare.length < 3;
          
          return (
             <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: idx * 0.05 }}
                key={s.email} 
                style={{ 
                   background: isSelected ? '#FAFAFA' : '#fff', 
                   borderRadius: 24, 
                   padding: 24,
                   boxShadow: isSelected ? '0 0 0 2px #00D6CC, 0 10px 30px rgba(0,214,204,0.1)' : '0 4px 20px rgba(27,0,136,0.05)', 
                   border: '1px solid rgba(27,0,136,0.05)', 
                   position: 'relative',
                   transition: 'all 0.2s'
                }}
             >
                <div style={{ position: 'absolute', top: 20, right: 20 }}>
                   <button 
                      onClick={() => toggleSelect(s.email)}
                      disabled={!canSelect}
                      style={{ 
                         background: isSelected ? '#00D6CC' : 'transparent',
                         border: isSelected ? 'none' : '1px solid #CBD5E1',
                         color: isSelected ? '#fff' : '#94A3B8',
                         width: 32, height: 32, borderRadius: '50%',
                         display: 'flex', alignItems: 'center', justifyContent: 'center',
                         cursor: canSelect ? 'pointer' : 'not-allowed',
                         opacity: canSelect ? 1 : 0.3
                      }}
                   >
                      {isSelected ? <CheckCircle2 size={18} /> : <UserCheck size={16} />}
                   </button>
                </div>

                <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 24 }}>
                   <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#0F004F', color: '#00D6CC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 900 }}>
                      {s.name.substring(0, 2).toUpperCase()}
                   </div>
                   <div>
                      <div style={{ fontSize: 16, fontWeight: 900, color: '#0F004F', textTransform: 'capitalize', marginBottom: 4 }}>{s.name}</div>
                      {(() => {
                         const rank = getRank(s.totalActualMins / 60);
                         const Icon = rank.icon;
                         return (
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, color: rank.color, fontSize: 11, fontWeight: 800, letterSpacing: '0.05em', marginBottom: 2 }}>
                              <Icon size={12} strokeWidth={3} /> {rank.title.toUpperCase()}
                            </div>
                         );
                      })()}
                      <div style={{ fontSize: 11, color: '#94A3B8' }}>{s.email}</div>
                   </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 24 }}>
                   <CircleProgress score={s.precisionScore} />
                   <div>
                      <div style={{ fontSize: 11, color: '#94A3B8', fontWeight: 800, letterSpacing: '0.1em' }}>PRECISIÓN</div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: '#0F004F' }}>
                         <span style={{ color: '#00D6CC' }}>{s.onTime}</span> a tiempo / {s.totalMissions}
                      </div>
                   </div>
                </div>

                <div style={{ background: '#F8FAFC', borderRadius: 16, padding: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                   <div>
                      <div style={{ fontSize: 10, color: '#94A3B8', fontWeight: 800, letterSpacing: '0.1em' }}>HORAS DICTADAS</div>
                      <div style={{ fontSize: 16, fontWeight: 900, color: '#0F004F' }}>{(s.totalActualMins / 60).toFixed(1)}h</div>
                   </div>
                   <div>
                      <div style={{ fontSize: 10, color: '#94A3B8', fontWeight: 800, letterSpacing: '0.1em' }}>TOP CURSO</div>
                      <div style={{ fontSize: 14, fontWeight: 800, color: '#ED1650', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{s.topCourse}</div>
                   </div>
                   <div>
                      <div style={{ fontSize: 10, color: '#94A3B8', fontWeight: 800, letterSpacing: '0.1em' }}>SESIONES</div>
                      <div style={{ fontSize: 16, fontWeight: 900, color: '#0F004F' }}>{s.sessions.size}</div>
                   </div>
                   <div>
                      <div style={{ fontSize: 10, color: '#94A3B8', fontWeight: 800, letterSpacing: '0.1em' }}>PORTALES</div>
                      <div style={{ fontSize: 16, fontWeight: 900, color: '#00D6CC' }}>{s.externalPortals} clics</div>
                   </div>
                </div>
             </motion.div>
          );
        })}

        {stats.length === 0 && (
          <div style={{ gridColumn: '1 / -1', padding: '60px 20px', textAlign: 'center', color: '#94A3B8', background: '#fff', borderRadius: 20, border: '1px dashed #CBD5E1' }}>
            <Activity size={48} style={{ margin: '0 auto 16px', opacity: 0.5 }} />
            <div style={{ fontSize: 16, fontWeight: 600 }}>No hay datos suficientes todavía</div>
            <div style={{ fontSize: 14 }}>A medida que los instructores completen misiones reales, aparecerán aquí.</div>
          </div>
        )}
      </div>
      <div style={{ height: 60 }} />
    </div>
  );
};
