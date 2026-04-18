import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, ArrowLeft, ExternalLink, Clock, Target, Rocket, 
  Anchor, Activity, Cpu, Shield, Globe, Zap, Radio, Terminal
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
  
  if(!ferr.tipo && !ferr.url) return <span style={{color:'rgba(255,255,255,0.2)'}}>—</span>;
  
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
       <div style={{ width: 32, height: 32, borderRadius: 8, background: `${planetColor}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: planetColor, border: `1px solid ${planetColor}44` }}>
           {icon}
       </div>
       <div style={{ display: 'flex', flexDirection: 'column' }}>
           <span style={{ fontSize: 10, fontWeight: 900, color: '#fff', textTransform: 'uppercase', letterSpacing: '1px' }}>{ferr.tipo}</span>
           {ferr.url && ferr.url !== '#' && (
               <a href={ferr.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 9, color: planetColor, fontWeight: 800, textDecoration: 'none' }}>
                   EXECUTAR_LINK →
               </a>
           )}
       </div>
    </div>
  );
};

const ContentNode = ({ row, type, planetColor, index }: any) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.05 }}
        style={{
            display: 'grid', gridTemplateColumns: type==='ojt' ? '1fr 60px 2fr 180px 100px' : '1.2fr 60px 2fr 2fr 130px 100px 100px',
            gap: 20, padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'start', transition: '0.3s'
        }}
        whileHover={{ background: 'rgba(255,255,255,0.02)' }}
    >
        <div style={{ fontSize: 11, fontWeight: 900, color: planetColor, letterSpacing: '1px' }}>{row.macroTema}</div>
        <div style={{ fontSize: 11, fontWeight: 900, color: '#fff', textAlign: 'center' }}>{row.dia}</div>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#fff', whiteSpace: 'pre-line', lineHeight: '1.5' }}>{row.tema}</div>
        
        {type !== 'ojt' && (
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', lineHeight: '1.6', letterSpacing: '0.5px' }}>
                {row.detalhe}
            </div>
        )}

        <div><FscFerrCell f={row.ferramentas} planetColor={planetColor} /></div>
        
        {type !== 'ojt' && (
            <div style={{ textAlign: 'center' }}>
                {row.iaPic ? (
                    <a href={row.iaPic} target="_blank" rel="noopener noreferrer" style={{ fontSize: 10, color: planetColor, fontWeight: 900, textDecoration: 'none', border: `1px solid ${planetColor}44`, padding: '4px 10px', borderRadius: 4 }}>
                        IA_LINK
                    </a>
                ) : <span style={{ color: 'rgba(255,255,255,0.1)' }}>—</span>}
            </div>
        )}

        <div style={{ textAlign: 'center', fontSize: 11, fontWeight: 900, color: planetColor, fontFamily: 'monospace' }}>
            {type==='landing' || type==='ojt' ? row.ch : row.tiempo}
        </div>
    </motion.div>
);

const GlassMissionBlock = ({ seccion, planetColor }: any) => {
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
    <div style={{ marginBottom: 60 }}>
        {/* BLOCK HEADER */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 20 }}>
            <div style={{ width: 44, height: 44, borderRadius: 6, background: planetColor, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 20px ${planetColor}44` }}>
                {typeIcons[tipo]}
            </div>
            <div>
                <div style={{ fontSize: 9, color: planetColor, fontWeight: 900, letterSpacing: '3px' }}>{typeLabels[tipo]}</div>
                <div style={{ fontSize: 18, fontWeight: 900, color: '#fff', letterSpacing: '1px' }}>{seccion.nombre || 'CARNA DE OPERACIONES'}</div>
            </div>
            <div style={{ marginLeft: 'auto', fontSize: 10, color: 'rgba(255,255,255,0.3)', fontWeight: 800 }}>NODOS_DETECTADOS: {rows.length}</div>
        </div>

        {/* BLOCK BODY */}
        <div style={{ 
            background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(10px)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)',
            overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.4)', position: 'relative'
        }}>
            {/* Header Labels */}
            <div style={{ display: 'grid', gridTemplateColumns: tipo==='ojt' ? '1fr 60px 2fr 180px 100px' : '1.2fr 60px 2fr 2fr 130px 100px 100px', gap: 20, padding: '15px 24px', background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                {['MACRO TEMA', 'DÍA', 'TEMA', ...(tipo!=='ojt' ? ['DETALLE TÉCNICO'] : []), 'RECURSOS', ...(tipo!=='ojt' ? ['IA-PIC'] : []), tipo==='ojt'?'CH':'TIEMPO'].map((h, i) => (
                    <div key={i} style={{ fontSize: 9, fontWeight: 900, color: 'rgba(255,255,255,0.4)', letterSpacing: '2px', textAlign: i === 1 || i > 4 ? 'center' : 'left' }}>{h}</div>
                ))}
            </div>

            {/* Rows */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {rows.map((row: any, i: number) => (
                    <ContentNode key={i} index={i} row={row} type={tipo} planetColor={planetColor} />
                ))}
            </div>

            {/* Footer Specialist Info for OJT */}
            {tipo === 'ojt' && (
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 30 }}>
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 15 }}>
                        <Terminal size={18} color={planetColor} />
                        <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>
                            <span style={{ color: planetColor, fontWeight: 900 }}>NOTIFICACIÓN:</span> Reservar tiempo para completar el cuaderno de registro de prácticas según protocolo operativo.
                        </span>
                    </div>
                    {seccion.dbOjtUrl && seccion.dbOjtUrl !== '#' && (
                         <a href={seccion.dbOjtUrl} target="_blank" rel="noopener noreferrer" style={{ background: planetColor, color: '#fff', padding: '10px 20px', borderRadius: 4, fontSize: 10, fontWeight: 900, textDecoration: 'none', letterSpacing: '1px' }}>
                             {seccion.dbOjtLabel || 'DB OJT'} →
                         </a>
                    )}
                    <div style={{ width: 100, textAlign: 'center', fontSize: 14, fontWeight: 900, color: planetColor }}>{seccion.totalCh}</div>
                </div>
            )}
        </div>
    </div>
  );
};

export const PlanetContentView = ({ planetIdx, onBack, data, planetLabel, sectorLabel="SECTOR" }: any) => {
  const planetObj = (Array.isArray(data) && data[planetIdx]) ? data[planetIdx] : null;
  const planetColor = planetObj?.color || '#ED1650';

  let secciones = [];
  if (planetObj) {
    if (planetObj.secciones) {
      secciones = planetObj.secciones;
    } else if (Array.isArray(planetObj)) { // Fallback cases
      secciones = (planetObj.length > 0 && (planetObj[0].tipo || planetObj[0].rows)) ? planetObj : [{ tipo: 'mision1', nombre: '', rows: planetObj }];
    } else if (planetObj.rows) {
      secciones = [{ tipo: planetObj.tipo || 'mision1', nombre: '', rows: planetObj.rows }];
    }
  }

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

        <div style={{ padding: '40px 60px', maxWidth: 1400, margin: '0 auto' }}>
          {secciones.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '100px', background: 'rgba(255,255,255,0.02)', border: '1.5px dashed rgba(255,255,255,0.1)', borderRadius: 12 }}>
                <Activity size={48} style={{ opacity: 0.1, marginBottom: 20 }} />
                <div style={{ fontSize: 14, fontWeight: 900, color: 'rgba(255,255,255,0.3)', letterSpacing: '4px' }}>ESTRUCTURA DE DATOS VACÍA // SIN MISIONES</div>
            </div>
          ) : (
            <AnimatePresence>
                {secciones.map((sec: any, i: number) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                    >
                        <GlassMissionBlock seccion={sec} planetColor={planetColor} />
                    </motion.div>
                ))}
            </AnimatePresence>
          )}
        </div>
      </div>

      {/* Background HUD Accents */}
      <div style={{ position: 'fixed', bottom: 40, left: 40, zIndex: 5, pointerEvents: 'none', opacity: 0.3 }}>
          <div style={{ width: 60, height: 60, borderLeft: '2px solid #fff', borderBottom: '2px solid #fff' }} />
      </div>
    </div>
  );
};
