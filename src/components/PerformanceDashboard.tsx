import React, { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Clock, Target, Star, AlertCircle, CheckCircle2, ChevronDown, ChevronRight, Activity, Zap } from 'lucide-react';
import { getMissionTracking, MissionProgress } from '../lib/tracking';

export const PerformanceDashboard = () => {
  const [expandedInstructor, setExpandedInstructor] = useState<string | null>(null);
  const [data, setData] = useState<MissionProgress[]>([]);
  const [activityLogs, setActivityLogs] = useState<any[]>([]);
  const [forceRender, setForceRender] = useState(0);

  const injectFakeData = () => {
    const tracking = getMissionTracking();
    const date = new Date();
    const mesAño = `${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}`;
    
    // Helper to generate a fake mission
    const addMissions = (email: string, planet: string, count: number, expectedMins: number, actualMins: number) => {
        for(let i=0; i<count; i++) {
           const apert = Date.now() - (actualMins * 60000);
           const fin = Date.now();
           tracking.push({
             mesAño, instructor: email.split('@')[0], email, codigo: 'YODA-FAKE', expedicion: 'MOCK',
             planetas: planet, missao: `Misión ${i}`, macrotema: 'Tema', tema: `Tema ${i}`,
             tiempoEstimado: `${expectedMins}m`, 
             tiempoApertura: new Date(apert).toISOString(), marcarComoFinalizado: new Date(fin).toISOString(),
             marcarComoVisto: null,
             tiempoAperturaRaw: apert, marcarComoFinalizadoRaw: fin
           });
        }
    };

    // Veterano: 200 hours, high precision on course A, some fast on course B
    addMissions('veterano@latam.com', 'HVC BAG', 100, 60, 60); // On time (100 hours)
    addMissions('veterano@latam.com', 'HVC BAG', 20, 60, 30); // Fast (10 hours)
    addMissions('veterano@latam.com', 'LAE', 50, 120, 120); // On time (100 hours)

    // Medio: 50 hours, mostly slow
    addMissions('medio@latam.com', 'ONBOARDING LATAM', 40, 30, 60); // Slow (40 hours)
    addMissions('medio@latam.com', 'SOPORTE AVANZADO', 10, 60, 60); // On time (10 hours)

    // Nuevo: 5 hours, very fast
    addMissions('nuevo@latam.com', 'FIELD SUPPORT BASE', 5, 60, 10); // Fast (less than 1 hour)
    addMissions('nuevo@latam.com', 'ONBOARDING LATAM', 4, 60, 60); // On time (4 hours)

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

    // Base records from Mission Tracking
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
        
        // Sometimes tracking isn't perfect, cap anomalies
        if (actual < 0) actual = 0;
        if (actual > expected * 3) actual = expected * 3;

        courseStats.expectedMins += expected;
        courseStats.actualMins += actual;
        courseStats.count++;

        ud.totalExpectedMins += expected;
        ud.totalActualMins += actual;

        const diff = actual - expected;
        const tolerance = expected * 0.15; // 15% tolerance

        if (diff < -tolerance) ud.fast++;
        else if (diff > tolerance) ud.slow++;
        else ud.onTime++;
      }
    });

    // We can also merge raw tracking time from activity logs to make hours more robust
    activityLogs.forEach((log: any) => {
        if (!log.user || log.user === 'admin') return;
        if (log.action === 'TRACK_TIEMPO' && log.elapsedSecs) {
            const ud = usersData[log.user];
            if (ud) {
               // We could add this to total actual mins if we want strict activity logs time
            }
        }
    });

    return Object.values(usersData).map(ud => {
      const totalMissions = ud.onTime + ud.fast + ud.slow;
      
      // Calculate Most Dictated Course
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

  }, [data, activityLogs]);

  return (
    <div style={{ padding: '40px 60px', background: '#F8F7FF', minHeight: '100%', overflowY: 'auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 40 }}>
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

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {stats.map((s, idx) => {
          const isExpanded = expandedInstructor === s.email;
          
          return (
            <div key={s.email} style={{ background: '#fff', borderRadius: 20, boxShadow: '0 4px 20px rgba(27,0,136,0.05)', border: '1px solid rgba(27,0,136,0.05)', overflow: 'hidden' }}>
              {/* Row Header */}
              <div 
                onClick={() => setExpandedInstructor(isExpanded ? null : s.email)}
                style={{ padding: '24px 32px', display: 'flex', alignItems: 'center', gap: 24, cursor: 'pointer', background: isExpanded ? '#FAFAFA' : '#fff' }}
              >
                 <div style={{ 
                    width: 48, height: 48, borderRadius: '50%', background: '#E2E8F0', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569', fontWeight: 900, fontSize: 16
                  }}>
                    {s.name.substring(0, 2).toUpperCase()}
                  </div>

                  <div style={{ flex: 1.5 }}>
                     <div style={{ fontSize: 16, fontWeight: 800, color: '#0F004F', textTransform: 'capitalize' }}>{s.name}</div>
                     <div style={{ fontSize: 12, color: '#64748B' }}>{s.email}</div>
                  </div>

                  <div style={{ flex: 1 }}>
                     <div style={{ fontSize: 11, color: '#94A3B8', fontWeight: 800, letterSpacing: '0.1em' }}>TOP CURSO</div>
                     <div style={{ fontSize: 14, fontWeight: 700, color: '#ED1650' }}>{s.topCourse}</div>
                  </div>

                  <div style={{ flex: 1, textAlign: 'center' }}>
                     <div style={{ fontSize: 11, color: '#94A3B8', fontWeight: 800, letterSpacing: '0.1em' }}>HORAS ACUM.</div>
                     <div style={{ fontSize: 20, fontWeight: 900, color: '#0F004F' }}>{(s.totalActualMins / 60).toFixed(1)}h</div>
                  </div>

                  <div style={{ flex: 1, textAlign: 'center' }}>
                     <div style={{ fontSize: 11, color: '#94A3B8', fontWeight: 800, letterSpacing: '0.1em' }}>PRECISIÓN</div>
                     <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: s.precisionScore >= 70 ? 'rgba(0,214,204,0.1)' : 'rgba(255,184,0,0.1)', color: s.precisionScore >= 70 ? '#00BDB4' : '#B45309', padding: '4px 12px', borderRadius: 20, fontWeight: 900, fontSize: 14 }}>
                       <Clock size={14} /> {s.precisionScore}%
                     </div>
                  </div>

                  <div style={{ color: '#94A3B8' }}>
                    {isExpanded ? <ChevronDown /> : <ChevronRight />}
                  </div>
              </div>

              {/* Expanded Breakdown */}
              {isExpanded && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} style={{ borderTop: '1px solid #F1F5F9', background: '#FAFAFA', padding: '32px' }}>
                   
                   <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 40 }}>
                     {/* Accuracy Stats */}
                     <div>
                       <h3 style={{ fontSize: 13, fontWeight: 800, color: '#0F004F', letterSpacing: '0.1em', marginBottom: 20 }}>RITMO DE ENSEÑANZA</h3>
                       <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                           <span style={{ fontSize: 13, color: '#64748B', display: 'flex', alignItems: 'center', gap: 8 }}><CheckCircle2 size={16} color="#00D6CC" /> A Tiempo</span>
                           <span style={{ fontSize: 14, fontWeight: 800, color: '#0F004F' }}>{s.onTime} misiones</span>
                         </div>
                         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                           <span style={{ fontSize: 13, color: '#64748B', display: 'flex', alignItems: 'center', gap: 8 }}><Zap size={16} color="#FFB800" /> Muy Rápido</span>
                           <span style={{ fontSize: 14, fontWeight: 800, color: '#0F004F' }}>{s.fast} misiones</span>
                         </div>
                         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                           <span style={{ fontSize: 13, color: '#64748B', display: 'flex', alignItems: 'center', gap: 8 }}><AlertCircle size={16} color="#ED1650" /> Tiempo Excedido</span>
                           <span style={{ fontSize: 14, fontWeight: 800, color: '#0F004F' }}>{s.slow} misiones</span>
                         </div>
                       </div>
                     </div>

                     {/* Courses List */}
                     <div>
                       <h3 style={{ fontSize: 13, fontWeight: 800, color: '#0F004F', letterSpacing: '0.1em', marginBottom: 20 }}>CURSOS DICTADOS ({s.courseList.length})</h3>
                       <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                         {s.courseList.map((c: any, i: number) => (
                           <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff', padding: '12px 16px', borderRadius: 12, border: '1px solid #E2E8F0' }}>
                             <div style={{ fontSize: 14, fontWeight: 700, color: '#0F004F' }}>{c.name}</div>
                             <div style={{ display: 'flex', gap: 24 }}>
                               <div style={{ textAlign: 'right' }}>
                                 <div style={{ fontSize: 10, color: '#94A3B8', fontWeight: 800 }}>MISIONES COMP.</div>
                                 <div style={{ fontSize: 13, fontWeight: 800, color: '#0F004F' }}>{c.count}</div>
                               </div>
                               <div style={{ textAlign: 'right' }}>
                                 <div style={{ fontSize: 10, color: '#94A3B8', fontWeight: 800 }}>TIEMPO INVERTIDO</div>
                                 <div style={{ fontSize: 13, fontWeight: 800, color: '#0F004F' }}>{(c.actualMins/60).toFixed(1)}h</div>
                               </div>
                               <div style={{ textAlign: 'right' }}>
                                 <div style={{ fontSize: 10, color: '#94A3B8', fontWeight: 800 }}>DESVIACIÓN</div>
                                 <div style={{ fontSize: 13, fontWeight: 800, color: c.actualMins > c.expectedMins ? '#ED1650' : '#00D6CC' }}>
                                    {Math.abs(c.actualMins - c.expectedMins)}m {c.actualMins > c.expectedMins ? 'extra' : 'menos'}
                                 </div>
                               </div>
                             </div>
                           </div>
                         ))}
                       </div>
                     </div>
                   </div>
                </motion.div>
              )}
            </div>
          );
        })}

        {stats.length === 0 && (
          <div style={{ padding: '60px 20px', textAlign: 'center', color: '#94A3B8', background: '#fff', borderRadius: 20, border: '1px dashed #CBD5E1' }}>
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
