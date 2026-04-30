import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BackBtn } from './Shared';
import { MacroTemaTable } from './Views2';
import { 
  Moon, Star, Map, ChevronRight, Binary, Orbit, Shield, Zap, Target, 
  Activity, Radio, Compass, Cpu, Crosshair, Anchor, Rocket, ArrowLeft,
  LayoutGrid, Share2, Award, Terminal
} from 'lucide-react';
import { PlanetContentView, ClassicMissionBlock, JourneyStartShip } from './Views6';

/* ── HYPER-PRO HUD & BACKGROUND ───────────────────────────────────────── */
const HyperProBackground = () => {
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'radial-gradient(circle at 50% 50%, #1B0088 0%, #0F004F 100%)', zIndex: 0, overflow: 'hidden' }}>
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
      {[100, 150, 250].map((count, layer) => (
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
        animate={{ scale: [1, 1.05, 1], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute', width: '130%', height: '130%',
          background: `radial-gradient(circle, #03001C 0%, transparent 70%)`,
          borderRadius: '50%', filter: 'blur(40px)', zIndex: 0
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
          background: color, // Use vivid color as base
          zIndex: 2, overflow: 'hidden', 
          boxShadow: '0 0 30px rgba(0,0,0,0.8), inset -15px -15px 30px rgba(0,0,0,0.5)'
      }}>
          {/* Subtle Spherical Highlight */}
          <div style={{
            position: 'absolute', inset: 0,
            background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, transparent 60%)`,
            zIndex: 4
          }} />

          {/* Night Side "City Lights" (using dots) */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 5, opacity: 0.6 }}>
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
          
          <span style={{ position: 'absolute', bottom: 15, right: 15, fontSize: 11, fontWeight: 900, color: 'rgba(255,255,255,0.4)', zIndex: 10, letterSpacing: '2px' }}>
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
          background: '#0F004F', backdropFilter: 'blur(15px)',
          padding: '30px 24px',
          clipPath: 'polygon(0% 15px, 15px 0%, 100% 0%, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0% 100%)',
          border: `1px solid ${color}44`,
          boxShadow: `inset 0 0 30px ${color}11, 0 10px 40px rgba(0,0,0,0.5)`,
          overflow: 'hidden'
        }}
      >


          <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ fontSize: 9, color: color, fontWeight: 900, letterSpacing: '3px', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center' }}>
                  <div style={{ width: 4, height: 4, background: color }} />
                  PLN-{String(index + 1).padStart(3, '0')}
              </div>
              <div style={{ fontSize: 24, fontWeight: 900, color: '#fff', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 15, textShadow: '0 0 10px rgba(255,255,255,0.2)', textAlign: 'center' }}>
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
  
  const COLORS = ['#3B82F6', '#00D6CC', '#D400FF', '#FFE017'];
  const TYPES = ['INFERNO_CORE', 'AQUA_STREAM', 'VOID_VOID', 'SOLAR_FLARE'];

  const PORTALS = [
    { key:'conhecendo', title:'Conhecendo Universo Customer Care', icon: <Compass size={20} /> },
    { key:'imersao',    title:'Imersão Operacional Estratégica', icon: <Cpu size={20} /> },
  ];

  if(activeMap === 'conhecendo') return <ConhecendoRutaView data={satelites.conhecendo} onBack={()=>setActiveMap(null)}/>;
  if(activeMap === 'imersao')    return <ImersaoRutaView    data={satelites.imersao}    onBack={()=>setActiveMap(null)}/>;
  if(activeMap === 'onboarding') return <OnboardingRutaView data={config.onboarding}    onBack={()=>setActiveMap(null)}/>;
  
  const sectorLabel = sectorId==='frontLine'?'FRONT LINE':sectorId==='soporte'?'SOPORTE':'FIELD SUPPORT';
  
  return (
    <div style={{ minHeight: '100vh', background: 'radial-gradient(circle at 50% 50%, #1B0088 0%, #0F004F 100%)', color: '#fff', position: 'relative', overflow: 'hidden', paddingBottom: 150 }}>
       <HyperProBackground />
       
       <div style={{ position: 'relative', zIndex: 10 }}>
           
           {/* HEADER */}
           <div style={{ padding: '50px 80px 20px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', position: 'relative' }}>
               <div style={{ width: 250 }}>
                    <button 
                        onClick={onBack} 
                        style={{ 
                            background: '#1B0088', border: '1px solid #1B0088', color: '#fff', 
                            padding: '12px 30px', borderRadius: '4px 20px 20px 4px', cursor: 'pointer', fontSize: 11, fontWeight: 900, 
                            display: 'flex', alignItems: 'center', gap: 10, letterSpacing: '2px', transition: '0.3s',
                            boxShadow: '0 0 20px rgba(27,0,136,0.6)'
                        }}
                    >
                        <ChevronRight style={{ transform: 'rotate(180deg)' }} size={16} /> VOLVER
                    </button>
               </div>

               <div style={{ flex: 1, textAlign: 'center' }}>
                    <div style={{ fontSize: 10, color: '#00D6CC', fontWeight: 900, letterSpacing: '4px', textTransform: 'uppercase', marginBottom: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 15 }}>
                        <Compass size={12} /> MAPA ESTELAR · SECTOR ACTIVO <Compass size={12} />
                    </div>
                    <div style={{ fontSize: 48, fontWeight: 900, letterSpacing: '8px', textTransform: 'uppercase', color: '#fff' }}>{sectorLabel}</div>
                    <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                        <div style={{ flex: 1, maxWidth: 120, height: 1.5, background: 'linear-gradient(90deg, transparent, #00D6CC)' }} />
                        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#00D6CC', boxShadow: '0 0 10px #00D6CC' }} />
                        <div style={{ flex: 1, maxWidth: 120, height: 1.5, background: 'linear-gradient(-90deg, transparent, #00D6CC)' }} />
                    </div>
               </div>

               <div style={{ width: 250, textAlign: 'right' }}>
                   <div style={{ fontSize: 10, color: '#ED1650', fontWeight: 900, letterSpacing: '2px', display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'flex-end', marginTop: 10 }}>
                        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#ED1650', boxShadow: '0 0 10px #ED1650' }} /> PLANETAS: {sectorData.length} DETECTADOS
                   </div>
               </div>
           </div>

           {/* CONTENT */}
           <div style={{ padding: '40px 80px 0', maxWidth: 1600, margin: '0 auto' }}>
                
                {/* SATELLITES HIDDEN BY USER REQUEST - KEPT IN CONFIG FOR ADMIN USE */}
                {/* 
                {sectorId === 'frontLine' && (
                    <div style={{ marginBottom: 60 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 20 }}>
                            <div style={{ fontSize: 10, color: '#00D6CC', fontWeight: 900, letterSpacing: '4px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 10 }}>
                                <Compass size={12} /> SATÉLITES AUXILIARES · FORMAÇÃO BASE
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: 30 }}>
                            {PORTALS.map((portal, idx) => {
                                const isLeft = idx === 0;
                                const pColor = isLeft ? '#00D6CC' : '#FFE017';
                                const pType = isLeft ? 'LUNA' : 'ESTRELLA';
                                return (
                                    <motion.div 
                                        key={portal.key}
                                        whileHover={{ scale: 1.02 }}
                                        onClick={() => setActiveMap(portal.key)}
                                        style={{
                                            background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)',
                                            borderRadius: '4px', cursor: 'pointer', flex: 1,
                                            display: 'flex', alignItems: 'center', gap: 20,
                                            padding: '15px 25px', position: 'relative', overflow: 'hidden'
                                        }}
                                    >
                                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 1.5, background: `linear-gradient(90deg, ${pColor}88, transparent)` }} />
                                        
                                        <div style={{ position: 'relative', width: 60, height: 60, flexShrink: 0, borderRadius: '50%', background: `radial-gradient(circle at 30% 30%, ${pColor}, #040114)`, boxShadow: `0 0 20px ${pColor}33`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <div style={{ position: 'absolute', inset: -5, borderRadius: '50%', border: `1px solid ${pColor}33`, filter: 'blur(2px)' }} />
                                            {isLeft ? <Moon size={24} color="#040114" /> : <Star size={24} color="#040114" />}
                                        </div>
                                        
                                        <div>
                                            <div style={{ fontSize: 9, color: pColor, fontWeight: 900, letterSpacing: '2px', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, textTransform: 'uppercase' }}>
                                                {isLeft ? <Moon size={10} /> : <Star size={10} />} {pType} · AUXILIAR
                                            </div>
                                            <div style={{ fontSize: 13, fontWeight: 900, color: '#fff', textTransform: 'uppercase', marginBottom: 8 }}>{portal.title}</div>
                                            <div style={{ fontSize: 9, color: pColor, fontWeight: 900, letterSpacing: '2px', display: 'flex', alignItems: 'center', gap: 6, textTransform: 'uppercase' }}>
                                                <Map size={10} /> MAPA INTERATIVO
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                )}
                */}

                {/* PLANETS SEPARATOR */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, marginBottom: 80 }}>
                    <div style={{ height: 1.5, flex: 1, background: 'linear-gradient(90deg, transparent, rgba(237,22,80,0.5))' }} />
                    <div style={{ fontSize: 11, color: '#ED1650', fontWeight: 900, letterSpacing: '6px', textTransform: 'uppercase' }}>
                        SELECCIONA UN PLANETA
                    </div>
                    <div style={{ height: 1.5, flex: 1, background: 'linear-gradient(-90deg, transparent, rgba(237,22,80,0.5))' }} />
                </div>

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

/* ── SATELLITE CINEMATIC MAP COMPONENTS ──────────────────────────────── */

const SatelliteMapBackground = ({ color }: { color: string }) => (
  <div style={{ position: 'fixed', inset: 0, background: 'radial-gradient(circle at 50% 50%, #1B0088 0%, #0F004F 100%)', zIndex: 0, overflow: 'hidden' }}>
    <motion.div 
        animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: '5%', left: '15%', width: '800px', height: '800px', background: `radial-gradient(circle, ${color}22 0%, transparent 70%)`, filter: 'blur(120px)' }} 
    />
    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '100px 100px', maskImage: 'radial-gradient(circle at center, black 40%, transparent 95%)' }} />
    {[...Array(500)].map((_, i) => (
      <motion.div key={i} animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: Math.random() * 5 + 2, repeat: Infinity, delay: -Math.random() * 5 }} style={{ position: 'absolute', width: 2, height: 2, background: '#fff', borderRadius: '50%', left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, boxShadow: '0 0 5px #fff' }} />
    ))}
    <div style={{ position: 'absolute', bottom: '-450px', left: '-10%', width: '120%', height: '500px', background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)', borderRadius: '50%', borderTop: '1px solid rgba(255,255,255,0.08)', zIndex: 1 }} />
  </div>
);

const SatelliteMapNode = ({ name, index, color, onClick }: any) => {
  const isLeft = index % 2 === 0;
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', width: '100%', height: '320px', flexDirection: isLeft ? 'row' : 'row-reverse' }}>
      <div style={{ position: 'relative', width: '200px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: 'linear' }} style={{ position: 'absolute', inset: -15, border: `1px dashed ${color}33`, borderRadius: '50%' }} />
          <motion.div whileHover={{ scale: 1.1, boxShadow: `0 0 50px ${color}66` }} onClick={onClick} style={{ width: '110px', height: '110px', borderRadius: '50%', background: `radial-gradient(circle at 30% 30%, ${color}, #040114)`, boxShadow: `0 0 30px ${color}33, inset -8px -8px 15px rgba(0,0,0,0.6)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', cursor: 'pointer', zIndex: 10, position: 'relative', border: `1px solid ${color}44` }}>
            <Orbit size={40} />
            <div style={{ position: 'absolute', top: -12, right: -12, width: 34, height: 34, borderRadius: '50%', background: '#fff', color: '#1B0088', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 900, border: `2px solid ${color}`, boxShadow: '0 4px 12px rgba(0,0,0,0.4)' }}>{index + 1}</div>
          </motion.div>
      </div>
      <motion.div initial={{ opacity: 0, x: isLeft ? 40 : -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ width: '400px', background: 'rgba(255, 255, 255, 0.04)', backdropFilter: 'blur(20px)', border: '1.5px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '28px', margin: isLeft ? '0 0 0 80px' : '0 80px 0 0', position: 'relative', zIndex: 5, boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
        <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: '2.5px', background: color }} />
        <div style={{ fontSize: 10, color: color, fontWeight: 900, letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: 10 }}>MACRO_TEMA_SATELLITE</div>
        <div style={{ fontSize: 24, fontWeight: 900, color: '#fff', marginBottom: 14, lineHeight: 1.2 }}>{name}</div>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: '1.6', marginBottom: 28 }}>Sincronización de datos disponible para este sector. Pulse para desplegar protocolos de ingeniería.</div>
        <button onClick={onClick} style={{ width: '100%', padding: '16px', background: '#1B0088', color: '#fff', border: `1px solid ${color}`, borderRadius: '10px', fontWeight: 900, fontSize: '12px', letterSpacing: '1.5px', cursor: 'pointer', transition: '0.3s', boxShadow: `0 10px 20px ${color}11` }} onMouseEnter={e => { e.currentTarget.style.background = color }} onMouseLeave={e => { e.currentTarget.style.background = '#1B0088' }}>
          DESPLEGAR TEMA →
        </button>
      </motion.div>
    </div>
  );
};

const SatelliteSectorMap = ({ topics, color, onSelect }: any) => {
  const nodeSpacing = 320;
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: `${topics.length * nodeSpacing + 200}px`, padding: '60px 0' }}>
       <svg viewBox={`0 0 1000 ${topics.length * nodeSpacing}`} preserveAspectRatio="none" style={{ position: 'absolute', top: 160, left: 0, width: '100%', height: `${topics.length * nodeSpacing}px`, pointerEvents: 'none', zIndex: 1 }}>
         {topics.map((_: any, i: number) => {
           if (i === topics.length - 1) return null;
           const y1 = i * nodeSpacing + 160; const y2 = (i + 1) * nodeSpacing + 160;
           const isL = i % 2 === 0;
           const sX = isL ? 250 : 750; const eX = isL ? 750 : 250;
           const cpX1 = isL ? 850 : 150; const cpX2 = isL ? 850 : 150;
           return (
             <motion.path key={i} d={`M ${sX} ${y1} C ${cpX1} ${y1}, ${cpX2} ${y2}, ${eX} ${y2}`} stroke={color} strokeWidth="6" fill="none" strokeDasharray="18 18" animate={{ strokeDashoffset: [100, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'linear' }} style={{ filter: `drop-shadow(0 0 12px ${color}44)` }} />
           );
         })}
       </svg>
       <div style={{ position: 'relative', zIndex: 10 }}>
            {topics.map((name: any, i: number) => (
                <SatelliteMapNode key={i} index={i} name={name} color={color} onClick={() => onSelect(i)} />
            ))}
       </div>
    </div>
  );
};

/* ── SATELLITE VIEWS ─────────────────────────────────────────────────── */
export const ConhecendoRutaView = ({ onBack, data }: any) => {
  const rows = data || [];
  const macroTemas = [...new Set(rows.map((r: any)=>r.macroTema))];
  const byMacro: any = {};
  macroTemas.forEach(mt=>{ byMacro[String(mt)]=rows.filter((r: any)=>r.macroTema===mt); });

  const secciones = macroTemas.map((mt: any) => ({
      nombre: mt,
      rows: byMacro[String(mt)]
  }));

  const planetObj = {
      color: '#00D6CC',
      secciones: secciones
  };

  return (
      <PlanetContentView 
          data={[planetObj]} 
          planetIdx={0} 
          onBack={onBack} 
          planetLabel="CONHECENDO UNIVERSO CC" 
          sectorLabel="SATÉLITE AUXILIAR" 
      />
  );
};

export const ImersaoRutaView = ({ onBack, data }: any) => {
  const rows = data || [];
  const macroTemas = [...new Set(rows.map((r: any)=>r.macroTema))];
  const byMacro: any = {};
  macroTemas.forEach(mt=>{ byMacro[String(mt)]=rows.filter((r: any)=>r.macroTema===mt); });

  const secciones = macroTemas.map((mt: any) => ({
      nombre: mt,
      rows: byMacro[String(mt)]
  }));

  const planetObj = {
      color: '#FFE017',
      secciones: secciones
  };

  return (
      <PlanetContentView 
          data={[planetObj]} 
          planetIdx={0} 
          onBack={onBack} 
          planetLabel="IMERSÃO OPERACIONAL" 
          sectorLabel="SATÉLITE DE ENTRENAMIENTO" 
      />
  );
};

export const OnboardingRutaView = ({ onBack, data }: any) => {
  return (
      <div style={{ minHeight: '100vh', background: '#040114', color: '#fff', position: 'relative', paddingBottom: 100 }}>
          <ClassicMissionBlock 
              seccion={data[0] || {rows:[]}} 
              planetColor="#FFB800" 
              titleOverride="PROTOCOLO DE PREPARACIÓN"
              subtitleOverride="NAVE DE ONBOARDING"
              onBackToMap={onBack} 
          />
      </div>
  );
};
