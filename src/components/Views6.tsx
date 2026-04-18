import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, ArrowLeft, ExternalLink, Clock, Target, Rocket, 
  Anchor, Activity, Cpu, Shield, Globe, Zap, Radio, Terminal, Map as MapIcon,
  Navigation, Hexagon, Crosshair
} from 'lucide-react';

/* ── HELPER COMPONENTS ──────────────────────────────────────────────── */
const StarsBackground = () => (
  <div style={{ position: 'fixed', inset: 0, backgroundColor: '#040114', zIndex: 0, overflow: 'hidden' }}>
    <motion.div 
      animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
      transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      style={{
        position: 'absolute', inset: '-10%',
        background: 'radial-gradient(circle at 70% 30%, #1B0088 0%, transparent 60%)',
        filter: 'blur(100px)', zIndex: 1
      }}
    />
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={i}
        animate={{ opacity: [0.1, 1, 0.1], scale: [1, 1.2, 1] }}
        transition={{ duration: Math.random() * 5 + 3, repeat: Infinity, delay: Math.random() * 5 }}
        style={{
          position: 'absolute', width: 2, height: 2, background: '#fff', borderRadius: '50%',
          left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, zIndex: 2
        }}
      />
    ))}
  </div>
);

const FERR_ICONS: any = {
    PPT: <Activity size={14} />,
    Video: <Zap size={14} />,
    Link: <ExternalLink size={14} />,
    Doc: <Target size={14} />,
    'Operação': <Shield size={14} />,
    Simulador: <Cpu size={14} />,
    'N/A': <Activity size={14} />
};

const MissionHeaderHUD = ({ sectorLabel, planetLabel, planetColor, onBack }: any) => (
    <div style={{ padding: '30px 60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
            <button 
                onClick={onBack}
                style={{ 
                    background: 'rgba(255,255,255,0.05)', border: `1.5px solid ${planetColor}44`, color: '#fff', 
                    padding: '12px 28px', borderRadius: 4, cursor: 'pointer', fontSize: 11, fontWeight: 900, 
                    display: 'flex', alignItems: 'center', gap: 15, letterSpacing: '3px', transition: '0.3s' 
                }}
                onMouseEnter={e => { e.currentTarget.style.background = planetColor; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#fff' }}
            >
                <ArrowLeft size={16} /> REGRESAR
            </button>
            <div style={{ height: 40, width: 2, background: 'rgba(255,255,255,0.1)' }} />
            <div>
                <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)', fontWeight: 900, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: 4 }}>SECTOR: {sectorLabel}</div>
                <div style={{ fontSize: 28, fontWeight: 900, letterSpacing: '4px', textTransform: 'uppercase', color: '#fff' }}>
                    {planetLabel || 'PROYECCIÓN_ESTELAR'}
                </div>
            </div>
        </div>

        <div style={{ textAlign: 'right' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'flex-end', color: planetColor, fontSize: 10, fontWeight: 900, letterSpacing: '2px' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: planetColor, boxShadow: `0 0 10px ${planetColor}` }} />
                PROVISIÓN DE DATOS ACTIVA // COMM_LINK: STABLE
            </div>
            <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', fontWeight: 800, letterSpacing: '1px', marginTop: 4 }}>
                COORDS_GRID: [AX-099 // BX-21] · LATAM_V4
            </div>
        </div>
    </div>
);

const FscFerrCell = ({ f, planetColor }: any) => {
  const ferr = (f && typeof f==='object') ? f : {tipo:f||'',url:''};
  const icon = FERR_ICONS[ferr.tipo] || <Activity size={14} />;
  
  if(!ferr.tipo && !ferr.url) return null;
  
  return (
    <motion.a 
        whileHover={{ scale: 1.02, boxShadow: `0 8px 20px ${planetColor}33` }}
        href={ferr.url !== '#' ? ferr.url : undefined} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 12, 
            padding: '12px 16px', 
            background: '#1B0088', 
            borderRadius: 10,
            textDecoration: 'none',
            color: '#fff',
            boxShadow: '0 4px 12px rgba(27,0,136,0.2)'
        }}
    >
       <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
           {icon}
       </div>
       <div style={{ display: 'flex', flexDirection: 'column' }}>
           <span style={{ fontSize: 9, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.7 }}>{ferr.tipo}</span>
           <span style={{ fontSize: 11, fontWeight: 900, letterSpacing: '1px' }}>RECURSO_LINK →</span>
       </div>
    </motion.a>
  );
};

const ContentNode = ({ row, type, planetColor, index }: any) => (
    <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        style={{
            background: '#FFFFFF', 
            borderRadius: '16px',
            padding: '30px',
            marginBottom: '20px',
            display: 'grid',
            gridTemplateColumns: '80px 1fr 240px',
            gap: '30px',
            alignItems: 'start',
            position: 'relative',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            border: '1px solid #E2E8F0',
            transition: '0.3s'
        }}
        whileHover={{ translateY: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
    >
        {/* Index Decal */}
        <div style={{ fontSize: '48px', fontWeight: 900, color: '#E2E8F0', fontStyle: 'italic', lineHeight: 1, userSelect: 'none', textAlign: 'center' }}>
            {(index + 1).toString().padStart(2, '0')}
        </div>

        {/* Main Content */}
        <div style={{ color: '#1B0088' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: planetColor }} />
                <div style={{ fontSize: '10px', fontWeight: 900, color: planetColor, letterSpacing: '2px', textTransform: 'uppercase' }}>
                    {row.macroTema}
                </div>
            </div>
            
            <div style={{ fontSize: '24px', fontWeight: 900, color: '#1B0088', marginBottom: 14, lineHeight: 1.2 }}>
                {row.tema}
            </div>

            {type !== 'ojt' && (
                <div style={{ fontSize: '15px', color: '#4D4D4D', lineHeight: 1.6, fontWeight: 500, maxWidth: '800px' }}>
                    {row.detalhe}
                </div>
            )}

            {/* Tactical Badges Row */}
            <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
                <div style={{ padding: '8px 16px', background: '#F1F5F9', borderRadius: '8px', fontSize: '10px', fontWeight: 900, color: '#64748B', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Clock size={14} /> DÍA: {row.dia}
                </div>
                <div style={{ padding: '8px 16px', background: `${planetColor}15`, borderRadius: '8px', fontSize: '10px', fontWeight: 900, color: planetColor, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Activity size={14} /> {type === 'ojt' ? 'CH:' : 'TIEMPO:'} {type === 'landing' || type === 'ojt' ? row.ch : row.tiempo}
                </div>
            </div>
        </div>

        {/* Action Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <FscFerrCell f={row.ferramentas} planetColor={planetColor} />
            
            {row.iaPic && (
                <motion.a 
                    whileHover={{ scale: 1.02, background: planetColor, color: '#fff' }}
                    href={row.iaPic} target="_blank" rel="noopener noreferrer" 
                    style={{ 
                        fontSize: '11px', color: planetColor, fontWeight: 900, textDecoration: 'none', 
                        border: `1.8px solid ${planetColor}`, padding: '14px', borderRadius: 10,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                        transition: '0.2s', textTransform: 'uppercase', letterSpacing: '1px'
                    }}
                >
                    <Cpu size={16} /> IA_PRO_LINK
                </motion.a>
            )}
        </div>
    </motion.div>
);

/* ── INTERACTIVE SECTOR MAP COMPONENTS ──────────────────────────────── */
const MissionMapNode = ({ section, index, total, planetColor, onClick }: any) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.2 }}
        whileHover={{ scale: 1.05 }}
        onClick={onClick}
        style={{ 
            position: 'relative', 
            zIndex: 10,
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '0 40px'
        }}
    >
        {/* Node Visual */}
        <div style={{ position: 'relative', width: 120, height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{ position: 'absolute', inset: -10, border: '1px dashed rgba(255,255,255,0.1)', borderRadius: '50%' }}
            />
            <motion.div 
                animate={{ boxShadow: [`0 0 20px ${planetColor}44`, `0 0 40px ${planetColor}66`, `0 0 20px ${planetColor}44`] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ 
                    width: 80, height: 80, borderRadius: '50%', background: planetColor, 
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
                    position: 'relative', zIndex: 2, boxShadow: `0 0 30px ${planetColor}88`
                }}
            >
                <div style={{ fontSize: 32, fontWeight: 900, fontStyle: 'italic' }}>{(index + 1).toString()}</div>
            </motion.div>
            
            {/* Pulsing Aura */}
            <motion.div 
                animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ position: 'absolute', width: 80, height: 80, borderRadius: '50%', background: planetColor, zIndex: 1 }}
            />
        </div>

        {/* Label */}
        <div style={{ 
            marginTop: 20, textAlign: 'center', background: 'rgba(255,255,255,0.05)', 
            backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)',
            padding: '10px 20px', borderRadius: 8, minWidth: 200
        }}>
            <div style={{ fontSize: 8, color: planetColor, fontWeight: 900, letterSpacing: '2px', marginBottom: 4 }}>MÓDULO_{String(index + 1).padStart(2, '0')}</div>
            <div style={{ fontSize: 13, fontWeight: 900, color: '#fff', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {section.nombre || 'PROTOCOLO_ESTÁNDAR'}
            </div>
        </div>

        {/* Tactical Hover Info (shown on hover parent) */}
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            style={{ position: 'absolute', top: -40, fontSize: 9, color: planetColor, fontWeight: 900, letterSpacing: '1px', pointerEvents: 'none' }}
        >
            [ CLIC_PARA_ACCEDER_AL_NÚCLEO ]
        </motion.div>
    </motion.div>
  );
};

const MissionSectorMap = ({ secciones, planetColor, onSelectSection }: any) => {
  return (
    <div style={{ padding: '60px 20px', position: 'relative', minHeight: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflowX: 'auto' }}>
       {/* Background Connection Path */}
       <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
           <defs>
             <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={planetColor} stopOpacity="0.2" />
                <stop offset="50%" stopColor={planetColor} stopOpacity="0.8" />
                <stop offset="100%" stopColor={planetColor} stopOpacity="0.2" />
             </linearGradient>
           </defs>
           {secciones.length > 1 && (
               <motion.path 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2 }}
                    d={`M 150 300 L ${secciones.length * 280} 300`} // Simple horizontal path for now
                    stroke="url(#pathGrad)" 
                    strokeWidth="4" 
                    fill="none" 
                    strokeDasharray="15 15"
                    style={{ filter: `drop-shadow(0 0 10px ${planetColor})` }}
               />
           )}
       </svg>

       <div style={{ display: 'flex', alignItems: 'center', position: 'relative', zIndex: 10, padding: '0 100px' }}>
            {secciones.map((sec: any, i: number) => (
                <MissionMapNode 
                    key={i} index={i} total={secciones.length} section={sec} 
                    planetColor={planetColor} onClick={() => onSelectSection(i)} 
                />
            ))}
       </div>
    </div>
  );
};

const GlassMissionBlock = ({ seccion, planetColor, onBackToMap }: any) => {
  const tipo = seccion.tipo || 'mision1';
  const rows = seccion.rows || [];
  
  const typeIcons: any = {
      mision1: <Rocket size={18} />,
      landing: <Anchor size={18} />,
      ojt: <Target size={18} />
  };

  const typeLabels: any = {
      mision1: 'MÓDULO DE APRENDIZAJE_01',
      landing: 'PROTOCOLO DE DESEMBARQUE',
      ojt: 'DESAFÍO OJT - OPERATIVO'
  };

  return (
    <div style={{ marginBottom: 80 }}>
        {/* BLOCK HEADER (Pro Look) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 30, paddingLeft: 10 }}>
            <div style={{ width: 56, height: 56, borderRadius: 12, background: planetColor, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 15px 30px ${planetColor}44` }}>
                {typeIcons[tipo]}
            </div>
            <div>
                <div style={{ fontSize: 10, color: planetColor, fontWeight: 900, letterSpacing: '4px', textTransform: 'uppercase' }}>{typeLabels[tipo]}</div>
                <div style={{ fontSize: 24, fontWeight: 900, color: '#fff', letterSpacing: '2px', textTransform: 'uppercase' }}>{seccion.nombre || 'CARNA DE OPERACIONES'}</div>
            </div>
            <div style={{ marginLeft: 'auto', textAlign: 'right', display: 'flex', gap: 24, alignItems: 'center' }}>
                <button 
                  onClick={onBackToMap}
                  style={{ background: 'rgba(255,255,255,0.05)', border: `1px solid ${planetColor}66`, color: planetColor, padding: '10px 20px', borderRadius: 6, fontSize: 10, fontWeight: 900, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10, letterSpacing: '1px' }}
                >
                    <MapIcon size={14} /> SALIR AL MAPA
                </button>
                <div style={{ height: 30, width: 1, background: 'rgba(255,255,255,0.1)' }} />
                <div>
                  <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', fontWeight: 800, letterSpacing: '1px', marginBottom: 4 }}>PROTOCOLO_SEGMENTO</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', fontWeight: 900 }}>NODOS_DETECTADOS: {rows.length}</div>
                </div>
            </div>
        </div>

        {/* BLOCK BODY - List of Cards */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {rows.map((row: any, i: number) => (
                <ContentNode key={i} index={i} row={row} type={tipo} planetColor={planetColor} />
            ))}
        </div>

        {/* Footer Specialist Info for OJT */}
        {tipo === 'ojt' && (
            <div style={{ background: '#FFFFFF', borderRadius: 16, padding: '30px 40px', marginTop: 10, display: 'flex', alignItems: 'center', gap: 30, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 20 }}>
                    <div style={{ width: 44, height: 44, borderRadius: '50%', background: `${planetColor}22`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Terminal size={20} color={planetColor} />
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#4D4D4D', lineHeight: 1.6 }}>
                        <span style={{ color: planetColor, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px' }}>Notificación Operativa:</span> Reservar tiempo para completar el cuaderno de registro de prácticas según protocolo operativo de la estación.
                    </span>
                </div>
                {seccion.dbOjtUrl && seccion.dbOjtUrl !== '#' && (
                    <a href={seccion.dbOjtUrl} target="_blank" rel="noopener noreferrer" style={{ background: planetColor, color: '#fff', padding: '16px 32px', borderRadius: 10, fontSize: 12, fontWeight: 900, textDecoration: 'none', letterSpacing: '1px', boxShadow: `0 10px 20px ${planetColor}33` }}>
                        {seccion.dbOjtLabel || 'DB OJT'} →
                    </a>
                )}
                <div style={{ minWidth: 100, textAlign: 'center' }}>
                    <div style={{ fontSize: 9, color: '#94A3B8', fontWeight: 800, textTransform: 'uppercase', marginBottom: 4 }}>Total CH</div>
                    <div style={{ fontSize: 24, fontWeight: 900, color: planetColor, fontFamily: 'monospace' }}>{seccion.totalCh}</div>
                </div>
            </div>
        )}
    </div>
  );
};

export const PlanetContentView = ({ planetIdx, onBack, data, planetLabel, sectorLabel="SECTOR" }: any) => {
  const [viewMode, setViewMode] = React.useState<'map' | 'detail'>('map');
  const [selectedIdx, setSelectedIdx] = React.useState(0);
  
  const planetObj = (Array.isArray(data) && data[planetIdx]) ? data[planetIdx] : null;
  const planetColor = planetObj?.color || '#ED1650';

  let secciones = [];
  if (planetObj) {
    if (planetObj.secciones) {
      secciones = planetObj.secciones;
    } else if (Array.isArray(planetObj)) { 
      secciones = (planetObj.length > 0 && (planetObj[0].tipo || planetObj[0].rows)) ? planetObj : [{ tipo: 'mision1', nombre: '', rows: planetObj }];
    } else if (planetObj.rows) {
      secciones = [{ tipo: planetObj.tipo || 'mision1', nombre: '', rows: planetObj.rows }];
    }
  }

  const handleSelectSection = (idx: number) => {
    setSelectedIdx(idx);
    setViewMode('detail');
  };

  return (
    <div style={{ minHeight: '100vh', background: '#040114', color: '#fff', position: 'relative', paddingBottom: 100 }}>
      <StarsBackground />
      
      <div style={{ position: 'relative', zIndex: 10 }}>
        <MissionHeaderHUD 
          sectorLabel={sectorLabel} 
          planetLabel={planetLabel} 
          planetColor={planetColor} 
          onBack={onBack} 
        />

        <div style={{ padding: '0 60px', maxWidth: 1600, margin: '0 auto' }}>
            {secciones.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '100px', marginTop: 60, background: 'rgba(255,255,255,0.02)', border: '1.5px dashed rgba(255,255,255,0.1)', borderRadius: 12 }}>
                    <Activity size={48} style={{ opacity: 0.1, marginBottom: 20 }} />
                    <div style={{ fontSize: 14, fontWeight: 900, color: 'rgba(255,255,255,0.3)', letterSpacing: '4px' }}>ESTRUCTURA DE DATOS VACÍA // SIN MISIONES</div>
                </div>
            ) : (
                <AnimatePresence mode="wait">
                    {viewMode === 'map' ? (
                        <motion.div
                            key="map"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
                            transition={{ duration: 0.6 }}
                        >
                            <div style={{ textAlign: 'center', marginTop: 40 }}>
                                <div style={{ fontSize: 10, color: planetColor, fontWeight: 900, letterSpacing: '5px', marginBottom: 12 }}>MAPA TÁCTICO DE SECTOR</div>
                                <div style={{ fontSize: 32, fontWeight: 900, color: '#fff', letterSpacing: '2px' }}>EXPLORE LOS MÓDULOS DE APRENDIZAJE</div>
                                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 15 }}>
                                    <div style={{ width: 100, height: 2, background: `linear-gradient(90deg, transparent, ${planetColor}, transparent)` }} />
                                </div>
                            </div>
                            <MissionSectorMap secciones={secciones} planetColor={planetColor} onSelectSection={handleSelectSection} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="detail"
                            initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            style={{ paddingTop: 40 }}
                        >
                            <GlassMissionBlock 
                              seccion={secciones[selectedIdx]} 
                              planetColor={planetColor} 
                              onBackToMap={() => setViewMode('map')}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            )}
        </div>
      </div>

      {/* Background HUD Accents */}
      <div style={{ position: 'fixed', bottom: 40, left: 40, zIndex: 5, pointerEvents: 'none', opacity: 0.3 }}>
          <div style={{ width: 60, height: 60, borderLeft: '2px solid #fff', borderBottom: '2px solid #fff' }} />
      </div>
      <div style={{ position: 'fixed', bottom: 40, right: 40, zIndex: 5, pointerEvents: 'none', opacity: 0.3 }}>
          <div style={{ width: 60, height: 60, borderRight: '2px solid #fff', borderBottom: '2px solid #fff', marginLeft: 'auto' }} />
      </div>
    </div>
  );
};
