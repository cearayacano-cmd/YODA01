import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BackBtn } from './Shared';
import { MacroTemaTable } from './Views2';
import { 
  Moon, Star, Map, ChevronRight, Binary, Orbit, Shield, Zap, Target, 
  Activity, Radio, Compass, Cpu, Crosshair, Anchor, Rocket, ArrowLeft,
  LayoutGrid, Share2, Award, Terminal, Lock, Eye
} from 'lucide-react';
import { PlanetContentView, ClassicMissionBlock } from './Views6';
import { TacticalSatelliteIcon, HyperProPlanetVisual } from './Shared';

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



/* ── TACTICAL PLANET CARD ────────────────────────────────────────────── */
const TacticalPlanetCard = ({ course, index, color, type, contentData, onClick }: any) => {
  const planetLabel = course.label;
  
  let allSecciones: any[] = [];
  if (contentData) {
      if (contentData.secciones) {
          allSecciones = contentData.secciones;
      } else if (Array.isArray(contentData)) {
          allSecciones = (contentData.length > 0 && (contentData[0].tipo || contentData[0].rows)) ? contentData : [{ rows: contentData }];
      } else if (contentData.rows) {
          allSecciones = [contentData];
      }
  } else if (course.secciones) {
      allSecciones = course.secciones;
  }

  let totalRows = 0;
  let resolvedCount = 0;
  
  allSecciones.forEach((s: any) => {
    (s.rows || []).forEach((r: any, i: number) => {
      totalRows++;
      if (localStorage.getItem(`resolved_${planetLabel}_${r.tema}_${i}`) === 'true') {
        resolvedCount++;
      }
    });
  });
  
  const isCompleted = totalRows > 0 && resolvedCount === totalRows;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onClick={totalRows > 0 ? onClick : undefined}
      whileHover={totalRows > 0 ? { y: -15 } : {}}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: totalRows > 0 ? 'pointer' : 'not-allowed', perspective: '1000px', opacity: totalRows > 0 ? 1 : 0.6 }}
    >
      <div style={{ marginBottom: 20 }}>
          <HyperProPlanetVisual color={color} index={index} texture={course.texture} />
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
              <div style={{ fontSize: 9, color: '#fff', fontWeight: 900, letterSpacing: '3px', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center', textShadow: `0 0 10px ${color}, 0 0 20px ${color}88` }}>
                  <div style={{ width: 4, height: 4, background: color, boxShadow: `0 0 8px ${color}` }} />
                  PLN-{String(index + 1).padStart(3, '0')}
              </div>
              <div style={{ fontSize: 24, fontWeight: 900, color: '#fff', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 15, textShadow: '0 0 10px rgba(255,255,255,0.2)', textAlign: 'center' }}>
                  {course.label}
              </div>
              
              <div style={{ height: '1.5px', background: `linear-gradient(90deg, transparent, ${color}44, transparent)`, marginBottom: 15 }} />

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                  {totalRows > 0 ? (
                    <>
                      <div style={{ border: `1px solid ${color}44`, padding: '4px 10px', borderRadius: 4, fontSize: 8, fontWeight: 900, color: '#fff', background: `${color}11`, boxShadow: `0 0 10px ${color}33`, textShadow: `0 0 5px ${color}` }}>
                        Status: Ativo
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <motion.div 
                            animate={{ opacity: [1, 0.3, 1] }} 
                            transition={{ duration: 1.5, repeat: Infinity }}
                            style={{ width: 6, height: 6, borderRadius: '50%', background: isCompleted ? '#99CC33' : color, boxShadow: `0 0 10px ${isCompleted ? '#99CC33' : color}` }} 
                          />
                          <span style={{ fontSize: 9, fontWeight: 900, color: '#fff', letterSpacing: '1px' }}>{isCompleted ? 'Finalizado' : 'Em órbita'}</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div style={{ border: `1px solid rgba(255,255,255,0.2)`, padding: '4px 10px', borderRadius: 4, fontSize: 8, fontWeight: 900, color: 'rgba(255,255,255,0.5)', background: `rgba(255,255,255,0.05)` }}>
                        Status: Bloqueado
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.5)' }}>
                          <Lock size={12} />
                          <span style={{ fontSize: 9, fontWeight: 900, letterSpacing: '1px' }}>Sem dados</span>
                      </div>
                    </>
                  )}
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
  const [selectedPlanetForModal, setSelectedPlanetForModal] = useState<number | null>(null);
  
  const contentKey = sectorId === 'fieldSupport' ? 'fsc' : sectorId === 'soporte' ? 'soporteContent' : 'frontLineContent';
  const advData = config[contentKey] || [];

  const COLORS = ['#3B82F6', '#00D6CC', '#D400FF', '#FFE017'];
  const TYPES = ['INFERNO_CORE', 'AQUA_STREAM', 'VOID_VOID', 'SOLAR_FLARE'];

  const PORTALS = [
    { key:'conhecendo', title:'Conhecendo Universo Customer Care', icon: <Compass size={20} /> },
    { key:'imersao',    title:'Imersão Operacional Estratégica', icon: <Cpu size={20} /> },
  ];

  if(activeMap === 'conhecendo') return <ConhecendoRutaView data={satelites.conhecendo} onBack={()=>setActiveMap(null)}/>;
  if(activeMap === 'imersao')    return <ImersaoRutaView    data={satelites.imersao}    onBack={()=>setActiveMap(null)}/>;
  if(activeMap === 'onboarding') return <OnboardingRutaView data={config.onboarding}    onBack={()=>setActiveMap(null)}/>;
  
  const sectorLabel = sectorId==='frontLine'?'FRONT LINE':sectorId==='soporte'?'SUPORTE':'FIELD SUPPORT';
  
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
                        <ChevronRight style={{ transform: 'rotate(180deg)' }} size={16} /> VOLTAR
                    </button>
               </div>

               <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ 
                        fontSize: 10, color: '#00D6CC', fontWeight: 900, letterSpacing: '4px', textTransform: 'uppercase', marginBottom: 12, 
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 15,
                        background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(8px)', padding: '6px 20px', borderRadius: '20px',
                        border: '1px solid rgba(0,214,204,0.1)', textShadow: '0 0 8px #00D6CC, 0 0 15px rgba(0,214,204,0.5)'
                    }}>
                        <Compass size={12} /> MAPA ESTELAR · SETOR ATIVO <Compass size={12} />
                    </div>
                    <div style={{ fontSize: 48, fontWeight: 900, letterSpacing: '8px', textTransform: 'uppercase', color: '#fff' }}>{sectorLabel}</div>
                    <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                        <div style={{ flex: 1, maxWidth: 120, height: 1.5, background: 'linear-gradient(90deg, transparent, #00D6CC)' }} />
                        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#00D6CC', boxShadow: '0 0 10px #00D6CC' }} />
                        <div style={{ flex: 1, maxWidth: 120, height: 1.5, background: 'linear-gradient(-90deg, transparent, #00D6CC)' }} />
                    </div>
               </div>

               <div style={{ width: 250, display: 'flex', justifyContent: 'flex-end' }}>
                   <div style={{ 
                        fontSize: 10, color: '#ED1650', fontWeight: 900, letterSpacing: '2px', display: 'flex', alignItems: 'center', gap: 10, 
                        marginTop: 10, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(10px)', padding: '6px 20px', borderRadius: '30px',
                        border: '1px solid rgba(237,22,80,0.1)', textShadow: '0 0 8px #ED1650, 0 0 15px rgba(237,22,80,0.5)'
                    }}>
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
                    <div style={{ 
                        fontSize: 11, color: '#ED1650', fontWeight: 900, letterSpacing: '6px', textTransform: 'uppercase',
                        background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(10px)', padding: '8px 30px', borderRadius: '30px',
                        border: '1px solid rgba(237,22,80,0.1)', textShadow: '0 0 8px #ED1650, 0 0 15px rgba(237,22,80,0.5)'
                    }}>
                        SELECIONE UM PLANETA
                    </div>
                    <div style={{ height: 1.5, flex: 1, background: 'linear-gradient(-90deg, transparent, rgba(237,22,80,0.5))' }} />
                </div>

                {/* PLANETS */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '80px 40px' }}>
                    {sectorData.map((course: any, i: number) => {
                        const DEFAULT_COLORS = ['#3B82F6', '#9D00FF', '#00D6CC', '#ED1650'];
                        const color = course.color || DEFAULT_COLORS[i % DEFAULT_COLORS.length];
                        const type = TYPES[i % TYPES.length];
                        return (
                            <TacticalPlanetCard 
                                key={i} index={i} course={course} color={color} type={type}
                                contentData={advData[i]}
                                onClick={() => setSelectedPlanetForModal(i)}
                            />
                        );
                    })}
                </div>
           </div>
       </div>

       {/* MODAL MODO EXPLORACIÓN */}
       <AnimatePresence>
           {selectedPlanetForModal !== null && (
               <motion.div 
                   initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                   style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(4, 1, 20, 0.6)', backdropFilter: 'blur(20px)' }}
               >
                   <motion.div 
                       initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
                       style={{ 
                           background: 'rgba(15, 0, 79, 0.65)', 
                           border: '1px solid rgba(0, 214, 204, 0.3)', 
                           borderRadius: 24, 
                           padding: 40, 
                           maxWidth: 500, 
                           width: '90%', 
                           position: 'relative', 
                           boxShadow: '0 30px 60px rgba(0,0,0,0.6), inset 0 0 30px rgba(0, 214, 204, 0.1)',
                           backdropFilter: 'blur(30px)' 
                       }}
                   >
                       <div style={{ position: 'absolute', top: 20, right: 20, cursor: 'pointer', color: '#fff', opacity: 0.5, transition: '0.2s', padding: 10 }} onMouseEnter={e => e.currentTarget.style.opacity='1'} onMouseLeave={e => e.currentTarget.style.opacity='0.5'} onClick={() => setSelectedPlanetForModal(null)}>✕</div>
                       <div style={{ textAlign: 'center', marginBottom: 30 }}>
                           <div style={{ display: 'inline-flex', padding: 15, borderRadius: '50%', background: 'rgba(0, 214, 204, 0.1)', marginBottom: 15, boxShadow: 'inset 0 0 20px rgba(0, 214, 204, 0.2)' }}>
                               <Compass size={40} color="#00D6CC" />
                           </div>
                           <div style={{ fontSize: 12, color: '#00D6CC', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 900, marginBottom: 10 }}>Seleccione Modo de Ingreso</div>
                           <div style={{ fontSize: 28, fontWeight: 900, color: '#fff', letterSpacing: '2px', textShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>{sectorData[selectedPlanetForModal]?.label}</div>
                       </div>

                       <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                           {(() => {
                               const planetLabel = sectorData[selectedPlanetForModal]?.label;
                               let hasProgress = false;
                               if (typeof localStorage !== 'undefined' && planetLabel) {
                                   for (let i = 0; i < localStorage.length; i++) {
                                       const key = localStorage.key(i);
                                       if (key && key.startsWith(`resolved_${planetLabel}_`) && localStorage.getItem(key) === 'true') {
                                           hasProgress = true;
                                           break;
                                       }
                                   }
                               }
                               return hasProgress ? (
                                   <button 
                                       onClick={() => {
                                           localStorage.setItem('yoda_read_only_mode', 'false');
                                           onNavigate('mission', sectorId, selectedPlanetForModal);
                                       }}
                                       style={{ background: 'rgba(27, 0, 136, 0.6)', border: '1px solid rgba(255,255,255,0.2)', padding: '15px 20px', borderRadius: 12, color: '#fff', display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer', transition: '0.3s cubic-bezier(0.4, 0, 0.2, 1)', textAlign: 'left', backdropFilter: 'blur(10px)' }}
                                       onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.transform = 'scale(1.02)'; }}
                                       onMouseLeave={e => { e.currentTarget.style.background = 'rgba(27, 0, 136, 0.6)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.transform = 'scale(1)'; }}
                                   >
                                       <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 0 10px rgba(255,255,255,0.2)' }}><Rocket size={20} /></div>
                                       <div>
                                           <div style={{ fontSize: 14, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px' }}>Continuar Expedición</div>
                                           <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', marginTop: 2 }}>El progreso se guardará en tu partida actual.</div>
                                       </div>
                                   </button>
                               ) : null;
                           })()}

                           <button 
                               onClick={() => {
                                   if (window.confirm('¿Seguro que deseas iniciar una NUEVA PARTIDA? Esto creará una clase en blanco.')) {
                                       const newPartida = 'MISION-' + Math.random().toString(36).substring(2, 6).toUpperCase();
                                       localStorage.setItem('yoda_active_partida', newPartida);
                                       
                                       Object.keys(localStorage).forEach(key => {
                                           if (key.startsWith('resolved_') || key.startsWith('congrats_shown_')) {
                                               localStorage.removeItem(key);
                                           }
                                       });

                                       const savedLogs = localStorage.getItem('yoda_activity_logs');
                                       let logs = savedLogs ? JSON.parse(savedLogs) : [];
                                       logs = [{ time: new Date().toISOString(), user: localStorage.getItem('yoda_active_user') || 'carlose.araya@latam.com', action: 'NUEVA_PARTIDA', details: `Partida Generada: ${newPartida}`, partidaId: newPartida }, ...logs].slice(0, 1000);
                                       localStorage.setItem('yoda_activity_logs', JSON.stringify(logs));

                                       localStorage.setItem('yoda_read_only_mode', 'false');
                                       onNavigate('mission', sectorId, selectedPlanetForModal);
                                   }
                               }}
                               style={{ background: 'rgba(237, 22, 80, 0.1)', border: '1px solid rgba(237, 22, 80, 0.4)', padding: '15px 20px', borderRadius: 12, color: '#fff', display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer', transition: '0.3s cubic-bezier(0.4, 0, 0.2, 1)', textAlign: 'left', backdropFilter: 'blur(10px)' }}
                               onMouseEnter={e => { e.currentTarget.style.background = 'rgba(237, 22, 80, 0.25)'; e.currentTarget.style.borderColor = '#ED1650'; e.currentTarget.style.transform = 'scale(1.02)'; }}
                               onMouseLeave={e => { e.currentTarget.style.background = 'rgba(237, 22, 80, 0.1)'; e.currentTarget.style.borderColor = 'rgba(237, 22, 80, 0.4)'; e.currentTarget.style.transform = 'scale(1)'; }}
                           >
                               <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(237, 22, 80, 0.2)', color: '#ED1650', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 0 10px rgba(237, 22, 80, 0.2)' }}><Star size={20} /></div>
                               <div>
                                   <div style={{ fontSize: 14, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', color: '#FF4D79' }}>Nueva Partida</div>
                                   <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', marginTop: 2 }}>Inicia desde cero con un nuevo código.</div>
                               </div>
                           </button>

                           <button 
                               onClick={() => {
                                   localStorage.setItem('yoda_read_only_mode', 'true');
                                   onNavigate('mission', sectorId, selectedPlanetForModal);
                               }}
                               style={{ background: 'rgba(0, 214, 204, 0.05)', border: '1px solid rgba(0, 214, 204, 0.3)', padding: '15px 20px', borderRadius: 12, color: '#fff', display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer', transition: '0.3s cubic-bezier(0.4, 0, 0.2, 1)', textAlign: 'left', backdropFilter: 'blur(10px)' }}
                               onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0, 214, 204, 0.15)'; e.currentTarget.style.borderColor = '#00D6CC'; e.currentTarget.style.transform = 'scale(1.02)'; }}
                               onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0, 214, 204, 0.05)'; e.currentTarget.style.borderColor = 'rgba(0, 214, 204, 0.3)'; e.currentTarget.style.transform = 'scale(1)'; }}
                           >
                               <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(0, 214, 204, 0.1)', color: '#00D6CC', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 0 10px rgba(0, 214, 204, 0.2)' }}><Eye size={20} /></div>
                               <div>
                                   <div style={{ fontSize: 14, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', color: '#00D6CC' }}>Modo Exploración</div>
                                   <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', marginTop: 2 }}>Solo lectura. El progreso no se guardará.</div>
                               </div>
                           </button>
                       </div>
                   </motion.div>
               </motion.div>
           )}
       </AnimatePresence>
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
  const secciones: { nombre: string; rows: any[] }[] = [];
  rows.forEach((r: any) => {
    const mt = r.macroTema || 'GENERAL';
    if (secciones.length > 0 && secciones[secciones.length - 1].nombre === mt) {
      secciones[secciones.length - 1].rows.push(r);
    } else {
      secciones.push({ nombre: mt, rows: [r] });
    }
  });

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
  const secciones: { nombre: string; rows: any[] }[] = [];
  rows.forEach((r: any) => {
    const mt = r.macroTema || 'GENERAL';
    if (secciones.length > 0 && secciones[secciones.length - 1].nombre === mt) {
      secciones[secciones.length - 1].rows.push(r);
    } else {
      secciones.push({ nombre: mt, rows: [r] });
    }
  });

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
