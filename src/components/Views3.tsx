import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BackBtn } from './Shared';
import { MacroTemaTable } from './Views2';
import { 
  Moon, Star, Map, ChevronRight, Binary, Orbit, Shield, Zap, Target, 
  Activity, Radio, Compass, Cpu, Crosshair 
} from 'lucide-react';

/* ── HYPER-PRO HUD & BACKGROUND ───────────────────────────────────────── */
const HyperProBackground = () => {
  return (
    <div style={{ position: 'fixed', inset: 0, backgroundColor: '#040114', zIndex: 0, overflow: 'hidden' }}>
      {/* Deep Nebula Layer */}
      <motion.div 
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', inset: '-10%',
          background: 'radial-gradient(circle at 70% 30%, #1B0088 0%, transparent 60%)',
          filter: 'blur(100px)',
          zIndex: 1
        }}
      />
      <motion.div 
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', inset: '-10%',
          background: 'radial-gradient(circle at 20% 80%, #1B0088 0%, transparent 50%)',
          filter: 'blur(80px)',
          zIndex: 1
        }}
      />

      {/* Parallax Star Layers */}
      {[20, 40, 60].map((count, layer) => (
        <div key={layer} style={{ position: 'absolute', inset: 0, zIndex: 2 }}>
          {[...Array(count)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.1, 1, 0.1], scale: [1, 1.2, 1] }}
              transition={{ duration: Math.random() * 5 + 3, repeat: Infinity, delay: Math.random() * 5 }}
              style={{
                position: 'absolute',
                width: layer === 2 ? 3 : layer === 1 ? 2 : 1,
                height: layer === 2 ? 3 : layer === 1 ? 2 : 1,
                background: '#fff',
                borderRadius: '50%',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                boxShadow: layer === 2 ? '0 0 10px #fff' : 'none'
              }}
            />
          ))}
        </div>
      ))}

      {/* Grid Overlay */}
      <div style={{ 
        position: 'absolute', inset: 0, 
        backgroundImage: 'linear-gradient(rgba(27,0,136,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(27,0,136,0.05) 1px, transparent 1px)', 
        backgroundSize: '100px 100px',
        zIndex: 3
      }} />
    </div>
  );
};

const CornerHUD = () => (
  <div style={{ position: 'fixed', inset: 40, pointerEvents: 'none', zIndex: 100 }}>
    {/* TOP LEFT */}
    <div style={{ position: 'absolute', top: 0, left: 0, display: 'flex', gap: 15 }}>
      <div style={{ width: 40, height: 40, borderLeft: '2px solid rgba(255,255,255,0.2)', borderTop: '2px solid rgba(255,255,255,0.2)' }} />
      <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px' }}>
        SYSTEM_SCANNING // ACTIVE<br/>COORDS: [42.109, 12.944]
      </div>
    </div>
    {/* BOTTOM RIGHT */}
    <div style={{ position: 'absolute', bottom: 0, right: 0, textAlign: 'right' }}>
      <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: 10 }}>
        SIGNAL: OPTIMUM<br/>ENCRYPT: 256_BIT
      </div>
      <div style={{ width: 40, height: 40, borderRight: '2px solid rgba(255,255,255,0.2)', borderBottom: '2px solid rgba(255,255,255,0.2)', marginLeft: 'auto' }} />
    </div>
  </div>
);

/* ── HYPER-PRO PLANET VISUAL ─────────────────────────────────────────── */
const HyperProPlanetVisual = ({ color, index }: { color: string, index: number }) => {
  return (
    <div style={{ position: 'relative', width: 180, height: 180, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* 1. ATMOSPHERIC OUTER GLOW */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute', width: '130%', height: '130%',
          background: `radial-gradient(circle, ${color}33 0%, transparent 70%)`,
          borderRadius: '50%', filter: 'blur(30px)', zIndex: 0
        }} 
      />

      {/* 2. ATMOSPHERIC RIM LIGHTING */}
      <div style={{
        position: 'absolute', width: '100%', height: '100%',
        background: `radial-gradient(circle at 30% 30%, ${color}44 0%, transparent 60%)`,
        borderRadius: '50%', border: `1px solid ${color}44`, filter: 'blur(2px)', zIndex: 5, pointerEvents: 'none'
      }} />

      {/* 3. MAIN PLANET BODY */}
      <div style={{
          position: 'relative', width: 100, height: 100, borderRadius: '50%',
          background: '#040114', // Base black
          zIndex: 2, overflow: 'hidden', boxShadow: '0 0 30px rgba(0,0,0,0.8)'
      }}>
          {/* Day Side (Gradient) */}
          <div style={{
            position: 'absolute', inset: 0,
            background: `radial-gradient(circle at 30% 30%, #fff6 0%, ${color}aa 40%, transparent 80%)`,
            zIndex: 3
          }} />

          {/* Night Side "City Lights" (using dots) */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 2, opacity: 0.6 }}>
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.2, 0.7, 0.2] }}
                transition={{ duration: 2 + Math.random() * 3, repeat: Infinity }}
                style={{
                  position: 'absolute',
                  width: 2, height: 2, borderRadius: '50%', background: '#fff',
                  left: (50 + Math.random() * 40) + '%',
                  top: (20 + Math.random() * 60) + '%',
                  boxShadow: '0 0 5px #fff'
                }}
              />
            ))}
          </div>

          {/* Surface Detail Craters */}
          {[...Array(6)].map((_, i) => (
             <div key={i} style={{
                 position: 'absolute', width: 20 + Math.random() * 30, height: 10 + Math.random() * 15,
                 background: 'rgba(0,0,0,0.3)', top: (20 + Math.random() * 60) + '%', left: (10 + Math.random() * 70) + '%',
                 borderRadius: '50%', transform: `rotate(${Math.random() * 360}deg)`, zIndex: 1
             }} />
          ))}
          
          <span style={{ position: 'absolute', bottom: 15, right: 15, fontSize: 10, fontWeight: 900, color: 'rgba(255,255,255,0.15)', zIndex: 10 }}>
            P0{index + 1}
          </span>
      </div>

      {/* 4. DYNAMIC RINGS */}
      <svg viewBox="0 0 180 180" style={{ position: 'absolute', width: '160%', height: '160%', zIndex: 1, pointerEvents: 'none', transform: 'rotateX(75deg) rotateY(10deg)' }}>
        <motion.ellipse 
          cx="90" cy="90" rx="80" ry="30"
          fill="none" stroke={`url(#ringGrad-${index})`} strokeWidth="4" opacity="0.6"
          initial={{ pathLength: 0, rotate: 0 }}
          animate={{ pathLength: 1, rotate: 360 }}
          transition={{ pathLength: { duration: 2 }, rotate: { duration: 60, repeat: Infinity, ease: 'linear' } }}
        />
        <defs>
          <linearGradient id={`ringGrad-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={color} stopOpacity="0" />
            <stop offset="50%" stopColor={color} stopOpacity="0.8" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* 5. HUD SCANNER RETICLE (on hover parent) */}
      <motion.div 
        className="hud-reticle"
        style={{ position: 'absolute', inset: -10, border: '1px dashed rgba(255,255,255,0.1)', borderRadius: '50%', opacity: 0 }}
        whileHover={{ opacity: 1, rotate: 90, scale: 1.1 }}
      />
    </div>
  );
};

/* ── TACTICAL PLANET CARD ────────────────────────────────────────────── */
const TacticalPlanetCard = ({ course, index, color, type, onClick }: any) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onClick={onClick}
      whileHover={{ y: -15 }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', perspective: '1000px' }}
    >
      <div style={{ marginBottom: 20 }}>
          <HyperProPlanetVisual color={color} index={index} />
      </div>

      <motion.div 
        style={{
          width: '100%', position: 'relative',
          background: 'rgba(27, 0, 136, 0.4)', backdropFilter: 'blur(15px)',
          padding: '30px 24px',
          clipPath: 'polygon(0% 15px, 15px 0%, 100% 0%, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0% 100%)',
          border: `1px solid ${color}44`,
          boxShadow: `inset 0 0 30px ${color}11, 0 10px 40px rgba(0,0,0,0.5)`,
          overflow: 'hidden'
        }}
      >
          {/* Scanning Line Animation */}
          <motion.div 
            animate={{ top: ['-10%', '110%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            style={{
               position: 'absolute', left: 0, right: 0, height: '2px',
               background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
               boxShadow: `0 0 15px ${color}`, opacity: 0.3, zIndex: 10
            }}
          />

          <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ fontSize: 9, color: color, fontWeight: 900, letterSpacing: '3px', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center' }}>
                  <div style={{ width: 4, height: 4, background: color }} />
                  {type} // PLN-{String(index + 1).padStart(3, '0')}
              </div>
              <div style={{ fontSize: 24, fontWeight: 900, color: '#fff', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 15, textShadow: '0 0 10px rgba(255,255,255,0.2)' }}>
                  {course.label}
              </div>
              
              <div style={{ height: '1.5px', background: `linear-gradient(90deg, transparent, ${color}44, transparent)`, marginBottom: 15 }} />

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                  <div style={{ border: `1px solid ${color}44`, padding: '4px 10px', borderRadius: 4, fontSize: 8, fontWeight: 900, color: color, background: `${color}11` }}>
                    STATUS: ACTIVE
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <motion.div 
                        animate={{ opacity: [1, 0.3, 1] }} 
                        transition={{ duration: 1.5, repeat: Infinity }}
                        style={{ width: 6, height: 6, borderRadius: '50%', background: color, boxShadow: `0 0 10px ${color}` }} 
                      />
                      <span style={{ fontSize: 9, fontWeight: 900, color: '#fff', letterSpacing: '1px' }}>EN ÓRBITA</span>
                  </div>
              </div>
          </div>

          {/* Tactical Corner Decals */}
          <div style={{ position: 'absolute', top: 5, left: 5, width: 10, height: 10, borderLeft: '1.5px solid rgba(255,255,255,0.1)', borderTop: '1.5px solid rgba(255,255,255,0.1)' }} />
          <div style={{ position: 'absolute', bottom: 5, right: 5, width: 10, height: 10, borderRight: '1.5px solid rgba(255,255,255,0.1)', borderBottom: '1.5px solid rgba(255,255,255,0.1)' }} />
      </motion.div>
    </motion.div>
  );
};

/* ── MAIN SELECTION VIEW ─────────────────────────────────────────────── */
export const PlanetSelection = ({ sectorId, config, onNavigate, onBack }: any) => {
  const sectorData = config.exploracion[sectorId] || [];
  const satelites = config.satelites || {};
  const [activeMap, setActiveMap] = useState<string | null>(null);
  
  const COLORS = ['#ED1650', '#00D6CC', '#D400FF', '#FFE017'];
  const TYPES = ['INFERNO_CORE', 'AQUA_STREAM', 'VOID_VOID', 'SOLAR_FLARE'];

  const PORTALS = [
    { key:'conhecendo', title:'Conhecendo Universo Customer Care', icon: <Compass size={20} /> },
    { key:'imersao',    title:'Imersão Operacional Estratégica', icon: <Cpu size={20} /> },
  ];

  if(activeMap === 'conhecendo') return <ConhecendoRutaView data={satelites.conhecendo} onBack={()=>setActiveMap(null)}/>;
  if(activeMap === 'imersao')    return <ImersaoRutaView    data={satelites.imersao}    onBack={()=>setActiveMap(null)}/>;
  
  const sectorLabel = sectorId==='frontLine'?'FRONT LINE':sectorId==='soporte'?'SOPORTE':'FIELD SUPPORT';
  
  return (
    <div style={{ minHeight: '100vh', background: '#040114', color: '#fff', position: 'relative', overflow: 'hidden', paddingBottom: 150 }}>
       <HyperProBackground />
       <CornerHUD />
       
       <div style={{ position: 'relative', zIndex: 10 }}>
           
           {/* HEADER */}
           <div style={{ padding: '60px 80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
                    <button 
                        onClick={onBack} 
                        style={{ 
                            background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', 
                            padding: '12px 30px', borderRadius: 4, cursor: 'pointer', fontSize: 11, fontWeight: 900, 
                            display: 'flex', alignItems: 'center', gap: 15, letterSpacing: '3px', transition: '0.3s' 
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#040114' }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#fff' }}
                    >
                        <ChevronRight style={{ transform: 'rotate(180deg)' }} size={16} /> VOLVER
                    </button>
                    <div style={{ height: 40, width: 2, background: 'rgba(255,255,255,0.1)' }} />
                    <div>
                        <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)', fontWeight: 900, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: 4 }}>LOCATING_SECTOR</div>
                        <div style={{ fontSize: 32, fontWeight: 900, letterSpacing: '4px', textTransform: 'uppercase' }}>{sectorLabel}</div>
                    </div>
               </div>

               <div style={{ textAlign: 'right' }}>
                   <div style={{ fontSize: 42, fontWeight: 900, color: 'rgba(255,255,255,0.03)', position: 'absolute', top: 30, right: 80, letterSpacing: '10px' }}>
                        ALPHA_STATION
                   </div>
                   <div style={{ fontSize: 10, color: '#ED1650', fontWeight: 900, letterSpacing: '2px', display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'flex-end' }}>
                        <Radio size={14} /> LIVE FEED // PLANETS: {sectorData.length}
                   </div>
               </div>
           </div>

           {/* CONTENT */}
           <div style={{ padding: '0 80px', maxWidth: 1600, margin: '0 auto' }}>
                
                {/* SATELLITES */}
                {sectorId === 'frontLine' && (
                    <div style={{ marginBottom: 80 }}>
                        <div style={{ fontSize: 11, color: '#00D6CC', fontWeight: 900, letterSpacing: '4px', marginBottom: 25, display: 'flex', alignItems: 'center', gap: 12 }}>
                             <Crosshair size={16} /> AUXILIARY_SATELLITE_ARRAY
                        </div>
                        <div style={{ display: 'flex', gap: 20 }}>
                            {PORTALS.map((portal) => (
                                <motion.div 
                                    key={portal.key}
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    onClick={() => setActiveMap(portal.key)}
                                    style={{
                                        background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)',
                                        padding: '20px 30px', borderRadius: 8, cursor: 'pointer', flex: 1, maxWidth: 400,
                                        display: 'flex', alignItems: 'center', gap: 20
                                    }}
                                >
                                    <div style={{ color: '#00D6CC' }}>{portal.icon}</div>
                                    <div>
                                        <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)', fontWeight: 900, letterSpacing: '1px', marginBottom: 4 }}>PROTOCOLO_MAPPA</div>
                                        <div style={{ fontSize: 12, fontWeight: 900, color: '#fff', textTransform: 'uppercase' }}>{portal.title}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                {/* PLANETS */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '80px 40px' }}>
                    {sectorData.map((course: any, i: number) => {
                        const DEFAULT_COLORS = [
                          '#ED1650', '#00D6CC', '#D400FF', '#FFE017', '#99CC33', 
                          '#00A9E0', '#FF8C00', '#FF00FF', '#00FF00', '#FFFFFF'
                        ];
                        const color = course.color || DEFAULT_COLORS[i % DEFAULT_COLORS.length];
                        const type = TYPES[i % TYPES.length];
                        return (
                            <TacticalPlanetCard 
                                key={i} index={i} course={course} color={color} type={type}
                                onClick={() => onNavigate('mission', sectorId, i)}
                            />
                        );
                    })}
                </div>
           </div>
       </div>
    </div>
  );
};

/* ── SATELLITE VIEWS ─────────────────────────────────────────────────── */
const ConhecendoRutaView = ({ onBack, data }: any) => {
  const rows = data || [];
  const macroTemas = [...new Set(rows.map((r: any)=>r.macroTema))];
  const byMacro: any = {};
  macroTemas.forEach(mt=>{ byMacro[String(mt)]=rows.filter((r: any)=>r.macroTema===mt); });
  return (
    <div style={{minHeight:'100vh', background:'#040114', color: '#fff'}}>
      <HyperProBackground />
      <div style={{position: 'relative', zIndex: 1}}>
        <div style={{background:'rgba(0,0,0,0.6)', backdropFilter: 'blur(20px)', padding:'20px 40px', display:'flex', alignItems:'center', gap:30, borderBottom: '2px solid #00D6CC'}}>
            <button onClick={onBack} style={{ background: 'transparent', border: '1.5px solid #00D6CC', color: '#00D6CC', padding: '10px 24px', borderRadius: 4, cursor: 'pointer', fontSize: 11, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px' }}>
                ← REGRESAR_A_SISTEMA
            </button>
            <span style={{fontSize:22, fontWeight: 900, letterSpacing: '4px'}}>CONHECENDO UNIVERSO CUSTOMER CARE</span>
        </div>
        <div style={{padding:60, maxWidth:1200, margin:'0 auto'}}>
            {macroTemas.map((mt: any)=>(
            <MacroTemaTable key={String(mt)} mt={String(mt)} rows={byMacro[String(mt)]} />
            ))}
        </div>
      </div>
    </div>
  );
};

export const ImersaoRutaView = ({ onBack, data }: any) => {
  const rows = data || [];
  const macroTemas = [...new Set(rows.map((r: any)=>r.macroTema))];
  const byMacro: any = {};
  macroTemas.forEach(mt=>{ byMacro[String(mt)]=rows.filter((r: any)=>r.macroTema===mt); });
  return (
    <div style={{minHeight:'100vh', background:'#040114', color: '#fff'}}>
      <HyperProBackground />
      <div style={{position: 'relative', zIndex: 1}}>
        <div style={{background:'rgba(0,0,0,0.6)', backdropFilter: 'blur(20px)', padding:'20px 40px', display:'flex', alignItems:'center', gap:30, borderBottom: '2px solid #FFE017'}}>
            <button onClick={onBack} style={{ background: 'transparent', border: '1.5px solid #FFE017', color: '#FFE017', padding: '10px 24px', borderRadius: 4, cursor: 'pointer', fontSize: 11, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px' }}>
                ← REGRESAR_A_SISTEMA
            </button>
            <span style={{fontSize:22, fontWeight: 900, letterSpacing: '4px'}}>IMERSÃO OPERACIONAL ESTRATÉGICA</span>
        </div>
        <div style={{padding:60, maxWidth:1200, margin:'0 auto'}}>
            {macroTemas.map((mt: any)=>(
            <MacroTemaTable key={String(mt)} mt={String(mt)} rows={byMacro[String(mt)]} />
            ))}
        </div>
      </div>
    </div>
  );
};
