import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, ArrowLeft, ExternalLink, Clock, Target, Rocket, 
  Anchor, Activity, Cpu, Shield, Globe, Zap, Radio, Terminal, Map as MapIcon,
  Navigation, Hexagon, Crosshair, Lightbulb, BadgeCheck, FileText, Satellite, Gem, CheckCircle2, Check,
  ChevronUp, ChevronDown, GraduationCap, Star, RotateCcw, Calendar, Eye
} from 'lucide-react';
import { TacticalSatelliteIcon, HyperProPlanetVisual, BackBtn } from './Shared';
import { updateMissionTracking } from '../lib/tracking';

/* ── CONFIGURATIONS & CONSTANTS ─────────────────────────────────────── */
const typeIcons: any = {
    mision1: <Rocket size={40} />,
    mision2: <Rocket size={40} />,
    mision3: <Rocket size={40} />,
    mision4: <Rocket size={40} />,
    mision5: <Rocket size={40} />,
    mision6: <Rocket size={40} />,
    mision7: <Rocket size={40} />,
    mision8: <Rocket size={40} />,
    mision9: <Rocket size={40} />,
    mision10: <Rocket size={40} />,
    landing: <Anchor size={40} />,
    ojt:     <Target size={40} />,
    imersao: <Cpu size={40} />,
    avaliacao: <GraduationCap size={40} />
};

const typeColors: any = {
    mision: '#00AEEF',
    missao: '#00AEEF',
    mission: '#00AEEF',
    mision1: '#00AEEF',
    mision2: '#00AEEF',
    mision3: '#00AEEF',
    mision4: '#00AEEF',
    mision5: '#00AEEF',
    mision6: '#00AEEF',
    mision7: '#00AEEF',
    mision8: '#00AEEF',
    mision9: '#00AEEF',
    mision10: '#00AEEF',
    landing: '#FFC800', // Yellow
    ojt:     '#ED1650', // LATAM Coral
    imersao: '#D400FF', // Purple
    avaliacao: '#00D6CC' // Teal/Cyan
};

const AnimatedIaraOverlay = () => {
    return (
        <video 
            src="/IARA2.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            style={{ 
                width: '100%', height: 'auto', 
                objectFit: 'contain', background: 'transparent',
                mixBlendMode: 'screen' // Helps blend black backgrounds if needed
            }} 
        />
    );
};

export const JourneyStartShip = ({ onboardingData, onClick }: any) => {
    return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '350px', marginBottom: '40px' }}>
      <motion.div 
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
      >
        {/* High-Fidelity Thrusters (Plasma) */}
        <div style={{ position: 'absolute', top: '50%', left: '15px', transform: 'translateY(-50%)', zIndex: 12, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', width: '220px', height: '140px', background: 'radial-gradient(ellipse at center, rgba(174,239,255,0.2) 0%, transparent 80%)', filter: 'blur(30px)', left: '-180px', top: '-70px', borderRadius: '50% 0 0 50%' }} />
          {[ { top: -25, delay: 0 }, { top: -4, delay: 0.2 }, { top: 24, delay: 0.4 } ].map((beam, i) => (
            <motion.div 
              key={`beam-${i}`}
              animate={{ width: [100, 180, 100], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 0.12, repeat: Infinity, delay: beam.delay }}
              style={{ 
                position: 'absolute', height: '8px', left: -180, top: beam.top,
                background: 'linear-gradient(to right, transparent, rgba(153,204,51,0.2), #ffffff, #AEEFFF, transparent)',
                borderRadius: '50%', filter: 'blur(5px)', transformOrigin: 'right center'
              }}
            />
          ))}
          {[ { size: 28, top: -38, left: -22 }, { size: 36, top: -17, left: -18 }, { size: 28, top: 12, left: -22 } ].map((bola, i) => (
            <div key={i}>
              <motion.div 
                animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.2, 1] }}
                transition={{ duration: 0.8 + i * 0.2, repeat: Infinity }}
                style={{ 
                  position: 'absolute', width: bola.size, height: bola.size, borderRadius: '50%', 
                  background: 'radial-gradient(circle, #ffffff 0%, #AEEFFF 60%, rgba(0,214,204,0.4) 100%)',
                  filter: 'blur(3px)', left: bola.left, top: bola.top, zIndex: 2,
                  boxShadow: '0 0 15px rgba(174,239,255,0.5)'
                }}
              />
            </div>
          ))}
        </div>
        <motion.div
          whileHover={onClick ? { scale: 1.05, filter: 'drop-shadow(0 0 30px rgba(255,184,0,0.8))' } : {}}
          onClick={onClick}
          style={{ position: 'relative', zIndex: 10, cursor: onClick ? 'pointer' : 'default' }}
        >
          {onClick && (
            <motion.div
              animate={{ y: [-5, 5, -5], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: '-45px',
                left: '50%',
                x: '-50%',
                background: 'linear-gradient(90deg, #99CC33, #00D6CC)',
                color: '#0F004F',
                padding: '8px 24px',
                borderRadius: '24px',
                fontWeight: 900,
                fontSize: '13px',
                letterSpacing: '2px',
                boxShadow: '0 0 25px rgba(153,204,51,0.8)',
                zIndex: 20,
                pointerEvents: 'none',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                border: '2px solid rgba(255,255,255,0.4)'
              }}
            >
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#0F004F', animation: 'pulse 1.5s infinite' }} />
              CLIQUE AQUI PARA ENTRAR
            </motion.div>
          )}
          <img 
            src="./nava_exploracion_2.png" 
            alt="Nava Exploracion" 
            style={{ width: '300px', height: 'auto', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.6))' }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

const JourneyEndStation = ({ planetColor, onClick }: any) => {
    return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '400px', marginTop: '60px' }}>
      <motion.div 
        whileHover={{ scale: 1.05, cursor: 'pointer' }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        {/* Grand Holographic Beam Base */}
        <motion.div 
          animate={{ opacity: [0.3, 0.7, 0.3], height: ['250px', '320px', '250px'], width: ['80px', '120px', '80px'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ 
            background: `radial-gradient(ellipse at bottom, ${planetColor}88 0%, transparent 70%)`, 
            position: 'absolute', bottom: '100px', filter: 'blur(20px)', zIndex: 1 
          }}
        />

        {/* Central Complex Structure */}
        <div style={{ 
          width: '180px', height: '180px', 
          display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 10
        }}>
          {/* Outer Aura */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ position: 'absolute', inset: -20, background: `radial-gradient(circle, ${planetColor} 0%, transparent 60%)`, borderRadius: '50%', filter: 'blur(15px)' }}
          />

          {/* Rotating Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            style={{ position: 'absolute', inset: 0, border: `2px dashed ${planetColor}88`, borderRadius: '50%', opacity: 0.8 }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
            style={{ position: 'absolute', inset: 15, border: `1px dotted #fff`, borderRadius: '50%', opacity: 0.5 }}
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            style={{ position: 'absolute', inset: -10, border: `3px solid transparent`, borderTopColor: planetColor, borderBottomColor: planetColor, borderRadius: '50%', opacity: 0.6 }}
          />

          {/* Floating Data Particles */}
          {[...Array(6)].map((_, i) => (
             <motion.div
               key={`particle-${i}`}
               animate={{ 
                 y: [0, -30, 0], 
                 opacity: [0, 1, 0],
                 scale: [0.5, 1, 0.5]
               }}
               transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
               style={{ 
                 position: 'absolute', width: 4, height: 4, background: '#fff', borderRadius: '50%',
                 left: `${20 + Math.random() * 60}%`, top: `${20 + Math.random() * 60}%`,
                 boxShadow: `0 0 10px ${planetColor}`
               }}
             />
          ))}

          {/* The Core */}
          <div style={{ 
            width: '90px', height: '90px', borderRadius: '50%', background: '#0F004F',
            border: `4px solid ${planetColor}`, display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: `0 0 40px ${planetColor}, inset 0 0 20px ${planetColor}`,
            position: 'relative', overflow: 'hidden'
          }}>
            <motion.div 
               animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
               transition={{ duration: 2, repeat: Infinity }}
               style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle, ${planetColor}44 0%, transparent 70%)` }}
            />
            <div style={{ position: 'relative', zIndex: 2 }}>
               <Target size={45} color="#fff" strokeWidth={2.5} style={{ filter: `drop-shadow(0 0 10px #fff)` }} />
            </div>
          </div>
        </div>

        {/* Completion Text (Elevated Style) */}
        <div style={{ marginTop: '30px', textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <div style={{ 
            fontSize: '11px', color: planetColor, fontWeight: 900, letterSpacing: '6px', 
            textTransform: 'uppercase', marginBottom: '8px',
            textShadow: `0 0 15px ${planetColor}` 
          }}>
            MISSÃO CUMPRIDA
          </div>
          <div style={{ 
            fontSize: '32px', fontWeight: 900, color: '#fff', letterSpacing: '4px',
            textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 0 15px rgba(255,255,255,0.4)',
            marginBottom: '12px'
          }}>
            DESTINO FINAL
          </div>
          <div style={{ 
            fontSize: '11px', color: '#fff', fontWeight: 800, letterSpacing: '3px',
            background: 'rgba(255,255,255,0.1)', padding: '8px 24px', borderRadius: '20px',
            border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(5px)',
            display: 'inline-flex', alignItems: 'center', gap: 8, transition: '0.3s'
          }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: planetColor, boxShadow: `0 0 10px ${planetColor}` }} />
            VOLTAR AO MAPA ESTELAR
          </div>
        </div>
      </motion.div>
    </div>
    );
};

const MissionMapBackground = ({ color }: { color: string }) => (
  <div style={{ position: 'fixed', inset: 0, background: 'radial-gradient(circle at 50% 40%, #1B0088 0%, #0F004F 100%)', zIndex: 0, overflow: 'hidden' }}>
    {/* High Performance CSS Starfield */}
    <style>{`
      @keyframes twinkle {
        0%, 100% { opacity: 0.1; transform: scale(1); }
        50% { opacity: 0.8; transform: scale(1.2); }
      }
      .star-layer {
        position: absolute; inset: 0;
        background-image: 
          radial-gradient(2px 2px at 20px 30px, #ffffff, rgba(0,0,0,0)),
          radial-gradient(1px 1px at 40px 70px, #ffffff, rgba(0,0,0,0)),
          radial-gradient(2px 2px at 90px 40px, #ffffff, rgba(0,0,0,0)),
          radial-gradient(2.5px 2.5px at 160px 120px, #ffffff, rgba(0,0,0,0));
        background-size: 200px 200px;
        opacity: 0.4;
      }
    `}</style>
    <div className="star-layer" style={{ animation: 'twinkle 4s infinite ease-in-out' }} />
    <div className="star-layer" style={{ backgroundPosition: '400px 400px', animation: 'twinkle 7s infinite ease-in-out reverse', opacity: 0.2 }} />

    {/* Dynamic Tactical Glows */}
    <motion.div 
        animate={{ opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{ position: 'absolute', top: '5%', left: '15%', width: '700px', height: '700px', background: `radial-gradient(circle, ${color}22 0%, transparent 70%)`, filter: 'blur(100px)' }} 
    />
    
    {/* Vector Tactical Grid */}
    <div style={{ 
      position: 'absolute', inset: 0, 
      backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`, 
      backgroundSize: '100px 100px',
      maskImage: 'radial-gradient(circle at center, black 30%, transparent 90%)'
    }} />

    {/* Lunar Surface at bottom */}
    <div style={{ 
      position: 'absolute', bottom: -100, left: '50%', transform: 'translateX(-50%)',
      width: '140%', height: '400px', background: `radial-gradient(ellipse at center top, ${color}33 0%, #0F004F 70%)`,
      borderRadius: '50% 50% 0 0', filter: 'blur(30px)', opacity: 0.8
    }} />
  </div>
);

const FERR_ICONS: any = {
    PPT: <Activity size={14} />,
    Video: <Zap size={14} />,
    Link: <ExternalLink size={14} />,
    Doc: <Target size={14} />,
    'Operação': <Shield size={14} />,
    Simulador: <Cpu size={14} />,
    'N/A': <Activity size={14} />,
    '🖼️ Slide': <Activity size={14} />,
    '🖼️  Slide': <Activity size={14} />,
    '🎬 Video': <Zap size={14} />,
    '🎬  Video': <Zap size={14} />,
    '🎮 Educaplay': <Star size={14} />,
    '🎮  Educaplay': <Star size={14} />,
    '🔗 Link': <ExternalLink size={14} />,
    '🔗  Link': <ExternalLink size={14} />,
    '➖ NA': <Activity size={14} />,
    '➖  NA': <Activity size={14} />
};

const MissionHeaderHUD = ({ sectorLabel, planetLabel, planetColor, onBack }: any) => (
  <div style={{ 
    position: 'absolute', top: 0, left: 0, right: 0, zIndex: 100, 
    background: 'transparent', 
    borderBottom: 'none', padding: '15px 60px', 
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  }}>
    <BackBtn onClick={onBack} label="VOLTAR" />

    <div style={{ width: 220 }}>
        <div style={{ fontSize: 9, color: '#fff', fontWeight: 900, opacity: 0.6, marginBottom: 8, letterSpacing: '1px', textAlign: 'right' }}>PROGRESSO DE MISSÃO / 0 XP</div>
        <div style={{ height: 6, background: 'rgba(255,255,255,0.1)', borderRadius: 10, overflow: 'hidden' }}>
            <motion.div initial={{ width: 0 }} animate={{ width: '15%' }} style={{ height: '100%', background: planetColor }} />
        </div>
    </div>
  </div>
);

const TacticalSatelliteWidget = ({ title, icon, links, color, mode = 'PORTAL', directUrl = '', label = '', subGroups = [], evalMsg = '', evalTime = '' }: any) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [activeGroup, setActiveGroup] = React.useState<string | null>(null);

    // Initial check for active group if only one exists
    React.useEffect(() => {
        if (subGroups.length === 1) setActiveGroup(subGroups[0].id);
    }, [subGroups]);
    
    if (mode === 'PORTAL' && (!links || links.length === 0) && subGroups.length === 0 && !evalMsg) return null;
    if (mode === 'DIRECT' && !directUrl) return null;

    const mainLabel = mode === 'DIRECT' ? label : title;

    return (
        <div style={{ position: 'relative', zIndex: 110 }}>
            <motion.div 
                style={{ position: 'relative' }}
            >
                <motion.div 
                    whileHover={{ scale: 1.02, boxShadow: `0 0 30px ${color}44` }}
                    onClick={() => {
                        if (mode === 'DIRECT') window.open(directUrl, '_blank');
                        else setIsOpen(!isOpen);
                    }}
                    style={{ 
                        cursor: 'pointer', padding: '12px 20px', borderRadius: '4px 20px 4px 20px',
                        background: 'rgba(15,0,79,0.8)', backdropFilter: 'blur(12px)',
                        border: `1px solid ${color}88`, borderLeft: `4px solid ${color}`,
                        display: 'flex', alignItems: 'center', gap: 15,
                        boxShadow: `0 10px 30px rgba(0,0,0,0.5), inset 0 0 15px ${color}22`,
                        minWidth: 220,
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    {/* Background Pattern */}
                    <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)', backgroundSize: '10px 10px', pointerEvents: 'none' }} />
                    
                    <div style={{ 
                        width: 40, height: 40, borderRadius: '50%', 
                        background: `${color}22`, display: 'flex', alignItems: 'center', 
                        justifyContent: 'center', color: color, border: `1px solid ${color}44`,
                        boxShadow: `0 0 15px ${color}33`
                    }}>
                        {mode === 'DIRECT' ? <Rocket size={20} /> : (icon || <Radio size={20} />)}
                    </div>
                    
                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 8, color: color, fontWeight: 900, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 2 }}>
                            {mode === 'DIRECT' ? 'AUTO_EXEC' : 'DATA_LINK'}
                        </div>
                        <div style={{ fontSize: 15, fontWeight: 900, color: '#fff', letterSpacing: '1.5px', textTransform: 'uppercase' }}>{mainLabel}</div>
                    </div>

                    <div style={{ opacity: 0.5, color: color }}>
                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                </motion.div>
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        style={{ 
                            position: 'absolute', top: 'calc(100% + 20px)', right: 0, width: 340,
                            background: '#0f004f',
                            backgroundImage: `
                                linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                            `,
                            backgroundSize: '20px 20px',
                            backdropFilter: 'blur(20px)',
                            border: `1px solid ${color}44`, borderRadius: 24, padding: 24,
                            boxShadow: '0 40px 80px rgba(0,0,0,0.8), inset 0 0 40px rgba(0,0,0,0.5)', zIndex: 120,
                            overflow: 'hidden'
                        }}
                    >
                        {/* Decorative Corner */}
                        <div style={{ position: 'absolute', top: 0, left: 0, width: 40, height: 40, borderTop: `2px solid ${color}`, borderLeft: `2px solid ${color}`, opacity: 0.5, borderRadius: '24px 0 0 0' }} />
                        {/* SELECTOR DE GRUPO (Si hay subGroups) */}
                        {subGroups.length > 1 && (
                            <div style={{ display: 'flex', gap: 10, marginBottom: 20, background: 'rgba(0,0,0,0.3)', padding: 6, borderRadius: 14, border: '1px solid rgba(255,255,255,0.05)' }}>
                                {subGroups.map((g: any) => (
                                    <button 
                                        key={g.id}
                                        onClick={() => setActiveGroup(g.id)}
                                        style={{ 
                                            flex: 1, padding: '12px 14px', borderRadius: 10, border: 'none', cursor: 'pointer',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                                            background: activeGroup === g.id ? `linear-gradient(135deg, ${g.color}, ${g.color}dd)` : 'transparent',
                                            color: activeGroup === g.id ? '#000' : 'rgba(255,255,255,0.4)',
                                            fontWeight: 900, fontSize: 11, textTransform: 'uppercase', letterSpacing: '1px',
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            boxShadow: activeGroup === g.id ? `0 4px 15px ${g.color}66` : 'none',
                                            position: 'relative', overflow: 'hidden'
                                        }}
                                    >
                                        {activeGroup === g.id && (
                                            <>
                                                <motion.div 
                                                    layoutId="activeTab"
                                                    style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.1)' }}
                                                />
                                                <motion.div 
                                                    layoutId="indicator"
                                                    style={{ position: 'absolute', bottom: 0, left: '20%', right: '20%', height: 3, background: '#fff', borderRadius: '3px 3px 0 0' }}
                                                />
                                            </>
                                        )}
                                        <span style={{ position: 'relative', zIndex: 2 }}>{g.label}</span>
                                    </button>
                                ))}
                            </div>
                        )}


                        {evalMsg && (
                            <div style={{ 
                                background: '#0f004f', 
                                borderLeft: `3px solid ${color}`,
                                padding: '16px 20px',
                                borderRadius: 12,
                                marginBottom: 16,
                                border: '1px solid rgba(255,255,255,0.05)',
                                boxShadow: 'inset 0 0 20px rgba(0,0,0,0.3)'
                            }}>
                                {evalTime && (
                                    <div style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
                                        <span style={{ background: color, color: '#fff', fontSize: 10, fontWeight: 900, padding: '4px 10px', borderRadius: 12, display: 'inline-flex', alignItems: 'center', gap: 6, letterSpacing: '0.05em' }}>
                                            <Clock size={12} /> {evalTime}
                                        </span>
                                    </div>
                                )}
                                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                                    {evalMsg}
                                </div>
                            </div>
                        )}

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                            {((activeGroup ? subGroups.find((g: any) => g.id === activeGroup)?.links : (links || [])) || []).map((link: any, i: number) => (
                                <motion.a 
                                    key={i}
                                    whileHover={{ x: 8, background: 'rgba(255,255,255,0.08)' }}
                                    href={link.url} target="_blank" rel="noopener noreferrer"
                                    style={{ 
                                        padding: '14px 18px', borderRadius: 12, display: 'flex', 
                                        alignItems: 'center', justifyContent: 'space-between',
                                        textDecoration: 'none', color: '#fff', transition: '0.2s',
                                        background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)'
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                        <div style={{ width: 5, height: 5, borderRadius: '50%', background: color }} />
                                        <span style={{ fontSize: 13, fontWeight: 800 }}>{link.label}</span>
                                    </div>
                                    <ExternalLink size={14} color={color} style={{ opacity: 0.6 }} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FscFerrCell = ({ f, planetColor }: any) => {
  const recs = Array.isArray(f) ? f : (f ? [f] : []);
  const ferr = recs[0] || {tipo:'', url:''};
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
                {row.dia && (
                    <div style={{ padding: '8px 16px', background: '#F1F5F9', borderRadius: '8px', fontSize: '10px', fontWeight: 900, color: '#64748B', display: 'flex', alignItems: 'center', gap: 8 }}>
                        <Clock size={14} /> DÍA: {row.dia}
                    </div>
                )}
                <div style={{ padding: '8px 16px', background: `${planetColor}15`, borderRadius: '8px', fontSize: '10px', fontWeight: 900, color: planetColor, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Activity size={14} /> {type === 'ojt' ? 'CH:' : 'TIEMPO:'} {type === 'landing' || type === 'ojt' ? row.ch : row.tiempo}
                </div>
            </div>
        </div>

        {/* Action Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <FscFerrCell f={row.herramientas || row.ferramentas} planetColor={planetColor} />
            
            {/* PIC Links Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {(Array.isArray(row.iaPic) ? row.iaPic : row.iaPic ? [{ label: 'PIC LINK', url: row.iaPic }] : []).map((link: any, li: number) => (
                    <motion.a 
                        key={li}
                        whileHover={{ scale: 1.02, background: planetColor, color: '#fff' }}
                        href={link.url} target="_blank" rel="noopener noreferrer" 
                        style={{ 
                            fontSize: '10px', color: planetColor, fontWeight: 900, textDecoration: 'none', 
                            border: `1.5px solid ${planetColor}`, padding: '12px 16px', borderRadius: 10,
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                            transition: '0.2s', textTransform: 'uppercase', letterSpacing: '1px',
                            minWidth: 140, background: `${planetColor}05`
                        }}
                    >
                        <ExternalLink size={14} /> {link.label || 'LINK PIC'}
                    </motion.a>
                ))}
            </div>
        </div>
    </motion.div>
);

const MissionMapNode = ({ section, index, planetColor, onClick, texture = 'CRATERS', tick, planetLabel }: any) => {
  const isCompleted = React.useMemo(() => {
    const rows = section.rows || [];
    if (rows.length === 0) return false;
    return rows.every((r: any, i: number) => localStorage.getItem(`resolved_${planetLabel}_${r.tema}_${i}`) === 'true');
  }, [section, tick, planetLabel]);

  const nodeColor = section.color || typeColors[section.tipo] || planetColor;
  
  const iconMap: any = {
    BadgeCheck, GraduationCap, FileText, CheckCircle2, Target, Rocket, Anchor, Activity, Cpu, Shield, Globe, Zap, Radio, Terminal, Navigation, Hexagon, Crosshair, Lightbulb, Satellite, Gem
  };

  const CustomIcon = typeof section.icon === 'string' ? iconMap[section.icon] : section.icon;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      style={{ 
        position: 'relative', 
        zIndex: 20, 
        cursor: 'pointer', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center' 
      }}
      onClick={onClick}
    >
      <div style={{ position: 'relative', width: '200px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Holographic Portal Design */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 140, height: 140, background: isCompleted ? '#99CC33' : nodeColor, filter: 'blur(40px)', opacity: 0.6, zIndex: 1, borderRadius: '50%', pointerEvents: 'none' }} />
          
          <motion.div 
            whileHover={{ scale: 1.05, filter: 'brightness(1.2)' }}
            style={{ 
              width: 120, height: 120, 
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative', zIndex: 2,
              background: `radial-gradient(circle at center, ${isCompleted ? '#99CC33' : nodeColor}66 0%, ${isCompleted ? '#99CC33' : nodeColor}22 60%, transparent 100%)`,
              border: `2px solid ${isCompleted ? '#99CC33' : nodeColor}`,
              boxShadow: `inset 0 0 30px ${isCompleted ? '#99CC33' : nodeColor}, 0 0 20px ${isCompleted ? '#99CC33' : nodeColor}88`,
              backdropFilter: 'blur(5px)'
            }}
          >
             {/* Outer spinning rings */}
             <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }} style={{ position: 'absolute', inset: -15, border: `2px dashed ${isCompleted ? '#99CC33' : nodeColor}`, borderRadius: '50%', opacity: 0.6 }} />
             <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} style={{ position: 'absolute', inset: -8, border: `1px dotted ${isCompleted ? '#99CC33' : nodeColor}`, borderRadius: '50%', opacity: 0.8 }} />
             
             {/* Inner glowing core */}
             <div style={{
                 position: 'absolute', inset: 15,
                 borderRadius: '50%',
                 background: `radial-gradient(circle at center, ${isCompleted ? '#99CC33' : nodeColor}aa 0%, transparent 80%)`,
                 display: 'flex', alignItems: 'center', justifyContent: 'center',
                 border: `1px solid ${isCompleted ? '#99CC33' : nodeColor}aa`
             }}>
                 <div style={{ position: 'absolute', width: '100%', height: '1px', background: `${isCompleted ? '#99CC33' : nodeColor}`, top: '50%', opacity: 0.5 }} />
                 <div style={{ position: 'absolute', height: '100%', width: '1px', background: `${isCompleted ? '#99CC33' : nodeColor}`, left: '50%', opacity: 0.5 }} />
                 
                 <div style={{ position: 'relative', zIndex: 2, color: '#fff', filter: `drop-shadow(0 0 10px ${isCompleted ? '#99CC33' : nodeColor})` }}>
                    {isCompleted ? <Star size={45} /> : (CustomIcon ? <CustomIcon size={45} /> : (typeIcons[section.tipo] || typeIcons['mision1']))}
                 </div>
             </div>
          </motion.div>
          
          <div style={{ position: 'absolute', top: 20, right: 20, width: 32, height: 32, borderRadius: '50%', background: '#fff', color: '#1B0088', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 900, boxShadow: '0 4px 10px rgba(0,0,0,0.3)', border: `2px solid ${isCompleted ? '#99CC33' : nodeColor}`, zIndex: 30 }}>
              {index + 1}
          </div>
      </div>

      <div style={{ 
          marginTop: '20px', textAlign: 'center', 
          background: 'rgba(15, 0, 79, 0.5)', backdropFilter: 'blur(15px)', 
          padding: '16px 24px', borderRadius: '16px', 
          border: `2px solid ${isCompleted ? '#99CC33' : nodeColor}`, 
          minWidth: '320px', boxShadow: `0 0 30px ${isCompleted ? '#99CC33' : nodeColor}44`,
          position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.02) 50%)', backgroundSize: '100% 4px', pointerEvents: 'none' }} />
        <div style={{ fontSize: '20px', fontWeight: 900, color: '#fff', textTransform: 'uppercase', letterSpacing: '2px', position: 'relative' }}>{section.label || section.nombre || 'CARGA DE DATOS...'}</div>
        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', fontWeight: 800, marginTop: '8px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, flexWrap: 'wrap' }}>
          <span>⏱ {section.rows?.length || 0} NODOS_TÉCNICOS</span>
          <span>•</span>
          <span>TIEMPO: {
            (function(){
              let secs = 0;
              (section.rows || []).forEach((r:any) => {
                let t = r.tiempo || r.ch || '';
                if(typeof t === 'string' && t.includes(':')) {
                  const p = t.replace(/[hm\s]/g, ':').replace(/:+/g, ':').replace(/:$/, '').split(':').map(Number).filter(n => !isNaN(n));
                  if(p.length===3) secs += p[0]*3600+p[1]*60+p[2];
                  else if(p.length===2) secs += p[0]*60+p[1];
                  else if(p.length===1) secs += p[0]*60;
                } else if (typeof t === 'number') {
                  secs += t*60;
                }
              });
              const h = Math.floor(secs / 3600);
              const m = Math.floor((secs % 3600) / 60);
              const s = secs % 60;
              return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
            })()
          }</span>
          {(() => {
            const allDays = (section.rows || []).map((r: any) => r.dia).filter(Boolean);
            const lastDay = allDays.length > 0 ? allDays[allDays.length - 1] : '';
            return lastDay ? (
              <>
                <span>•</span>
                <span style={{ color: '#00D6CC', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                  <Calendar size={12} /> {lastDay}
                </span>
              </>
            ) : null;
          })()}
        </div>
      </div>
    </motion.div>
  );
};

export const MissionSectorMap = ({ secciones, planetColor, onSelectSection, onboardingData, activeOnboardingIdx, onSelectOnboarding, isFirstPlanet, onBackToPlanets, texture = 'CRATERS', tick, planetLabel }: any) => {
  const nodeSpacing = 360;
  const totalWidth = 1000;
  const lastNodeY = (secciones.length - 1) * nodeSpacing + 210;
  const finalPathLength = 180;
  const svgHeight = lastNodeY + finalPathLength;

  return (
    <div style={{ 
      position: 'relative', 
      width: '100%',
      maxWidth: '1200px', 
      margin: '0 auto',
      padding: '0 0 100px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
       {/* Expedition Ship at Start */}
       <div style={{ zIndex: 20 }}>
         <JourneyStartShip onboardingData={onboardingData} onClick={isFirstPlanet ? onSelectOnboarding : undefined} />
       </div>

       {/* Background Connection Path */}
       <div style={{ position: 'relative', width: '100%', marginTop: '-200px', minHeight: `${svgHeight}px` }}>
          <svg 
            viewBox={`0 0 ${totalWidth} ${svgHeight}`}
            preserveAspectRatio="none"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}
          >
            <defs>
              <filter id="missionPathGlow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Start Path: Adjusted to emerge from ship's thrusters */}
            <motion.path 
                d={`M 500 0 C 500 100, 200 100, 200 210`} stroke="#3B82F6" strokeWidth="8" fill="none" 
                strokeDasharray="20 20" filter="url(#missionPathGlow)" 
                animate={{ strokeDashoffset: [100, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />

            {secciones.map((sec: any, i: number) => {
              const yStart = i * nodeSpacing + 210;
              const isP1Left = i % 2 === 0;
              const startX = isP1Left ? 200 : 800;

              if (i < secciones.length - 1) {
                const yNext = (i + 1) * nodeSpacing + 210;
                const endX = isP1Left ? 800 : 200;
                // Cubic Bezier to swap sides naturally
                const cpX1 = isP1Left ? 800 : 200; 
                const cpX2 = isP1Left ? 200 : 800; // This was 1000/0 before, creating a huge "ear" or break
                
                // Let's use a smoother curve
                const d = `M ${startX} ${yStart} C ${isP1Left ? 800 : 200} ${yStart}, ${isP1Left ? 200 : 800} ${yNext}, ${endX} ${yNext}`;
                // Wait, if startX is 200 and endX is 800, a simple curve is M 200 y C 800 y, 800 yNext, 800 yNext is NOT quite right.
                // Correct logic for zig-zag:
                // M 200 y1 C 1000 y1, 1000 y2, 800 y2 (for left to right)
                // M 800 y2 C 0 y2, 0 y3, 200 y3 (for right to left)
                // The previous code had: const cpX = isP1Left ? 1000 : 0;
                // M 200 y1 C 1000 y1, 1000 y2, 800 y2
                // This curve is fine, but if isP1Left is true for i=0, then we go from 200 (left) to 800 (right).
                
                const controlX = isP1Left ? 1000 : 0;
                const dZigZag = `M ${startX} ${yStart} C ${controlX} ${yStart}, ${controlX} ${yNext}, ${endX} ${yNext}`;

                return (
                  <motion.path 
                    key={i} d={dZigZag} stroke="#3B82F6" strokeWidth="8" fill="none" 
                    strokeDasharray="20 20" filter="url(#missionPathGlow)"
                    animate={{ strokeDashoffset: [100, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  />
                );
              }
              
              // Final Segment to centered End Station - PULLED CLOSER
              const yEnd = yStart + 180;
              const dFinal = `M ${startX} ${yStart} C ${startX} ${yEnd - 80}, 500 ${yEnd - 80}, 500 ${yEnd}`;
              return (
                <motion.path 
                  key="final-path" d={dFinal} stroke="#3B82F6" strokeWidth="8" fill="none" 
                  strokeDasharray="20 20" filter="url(#missionPathGlow)"
                  animate={{ strokeDashoffset: [100, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />
              );
            })}
          </svg>

          <div style={{ position: 'relative', zIndex: 10 }}>
              {secciones.map((sec: any, i: number) => {
                const yPos = i * nodeSpacing + 210;
                const isLeft = i % 2 === 0;
                const xPos = isLeft ? '20%' : '80%';
                
                return (
                  <div key={i} style={{ position: 'absolute', top: yPos, left: xPos, transform: 'translate(-50%, -50%)' }}>
                     <MissionMapNode 
                        section={sec} index={i} planetColor={planetColor} texture={texture} tick={tick}
                        planetLabel={planetLabel}
                        onClick={() => onSelectSection(i)} 
                     />
                  </div>
                );
              })}
          </div>
       </div>

       {/* End Station at the very bottom - Snapped to path */}
       <div style={{ zIndex: 20, marginTop: '-120px' }}>
         <JourneyEndStation planetColor={planetColor} onClick={onBackToPlanets} />
       </div>
    </div>
  );
};

export const ClassicMissionBlock = ({ seccion, planetColor, onBackToMap, titleOverride, subtitleOverride }: any) => {
  const rows = seccion.rows || [];
  
  // Grouping logic
  const groupedRows: { macroTema: string; rows: any[] }[] = [];
  rows.forEach((row: any) => {
    const mt = row.macroTema || 'CONTENIDO GENERAL';
    if (groupedRows.length > 0 && groupedRows[groupedRows.length - 1].macroTema === mt) {
      groupedRows[groupedRows.length - 1].rows.push(row);
    } else {
      groupedRows.push({ macroTema: mt, rows: [row] });
    }
  });

  return (
    <div style={{ padding: '40px 60px', marginBottom: 100, background: '#ffffff', borderRadius: 24, margin: '40px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
      {/* HEADER CONTROLS */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30, borderBottom: '1px solid #eee', paddingBottom: 15 }}>
        <div>
          <div style={{ fontSize: 10, color: planetColor, fontWeight: 900, letterSpacing: '2px', textTransform: 'uppercase' }}>{titleOverride || 'MISSÃO DE APRENDIZAGEM'}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            <div style={{ fontSize: 24, fontWeight: 900, color: '#1B0088', textTransform: 'uppercase' }}>{subtitleOverride || seccion.nombre}</div>
            {(() => {
              const allDays = (seccion.rows || []).map((r: any) => r.dia).filter(Boolean);
              const lastDay = allDays.length > 0 ? allDays[allDays.length - 1] : '';
              return lastDay ? (
                <span style={{ fontSize: 11, background: '#f1f5f9', padding: '2px 8px', borderRadius: 12, color: '#1B0088', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                  <Calendar size={12} /> ACUMULADO: {lastDay}
                </span>
              ) : null;
            })()}
          </div>
        </div>
        <button 
          onClick={onBackToMap}
          style={{ background: '#f8fafc', border: '1px solid #ccc', color: '#64748b', padding: '8px 16px', borderRadius: 4, fontSize: 11, fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}
        >
          <MapIcon size={14} /> VOLVER AL MAPA
        </button>
      </div>

      {rows.length === 0 ? (
        <div style={{ padding: '60px', textAlign: 'center', background: '#f8fafc', borderRadius: 16, border: '2px dashed #cbd5e1' }}>
          <div style={{ fontSize: 48, marginBottom: 20 }}>🛸</div>
          <div style={{ fontSize: 18, fontWeight: 900, color: '#1B0088', marginBottom: 8 }}>SIN INFORMACIÓN CONFIGURADA</div>
          <div style={{ fontSize: 14, color: '#64748b' }}>Aún no se han agregado módulos. Ingresa al panel de administrador para configurar esta sección.</div>
        </div>
      ) : groupedRows.map(({ macroTema: mt, rows: mtRows }, gi) => {
        const totalSecs = mtRows.reduce((acc, r) => acc + (r.tiempo ? (typeof r.tiempo === 'string' ? (r.tiempo.includes(':') ? r.tiempo.split(':').reduce((a:any,b:any)=>a*60+parseInt(b),0) : parseInt(r.tiempo)*60) : r.tiempo) : 0), 0);
        // Note: Simplified time calculation for brevity, could use timeToSeconds if exported
        const uniqueDays = Array.from(new Set(mtRows.map((r: any) => r.dia).filter(Boolean))).sort((a: any, b: any) => Number(a) - Number(b));
        
        return (
          <div key={gi} style={{ marginBottom: 40 }}>
            {/* MACROTEMA HEADER */}
            <div style={{ 
              display: 'flex', alignItems: 'center', gap: 16, marginBottom: 15, 
              borderBottom: `2px solid ${planetColor}`, paddingBottom: 10 
            }}>
              <div style={{ fontSize: 16, fontWeight: 900, color: '#111', textTransform: 'uppercase' }}>{mt}</div>
              {uniqueDays.length > 0 && (
                <div style={{ fontSize: 11, color: '#1B0088', background: '#f1f5f9', padding: '2px 10px', borderRadius: 12, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Calendar size={12} /> {uniqueDays.length === 1 ? `DÍA: ${uniqueDays[0]}` : `DÍAS: ${uniqueDays.join(' - ')}`}
                </div>
              )}
              <div style={{ fontSize: 11, color: '#64748b', background: '#f1f5f9', padding: '2px 10px', borderRadius: 12, fontWeight: 700 }}>
                ⏱ BLOQUE: {mtRows[0]?.tiempo?.includes(':') ? 'SUMA TÁCTICA' : `${mtRows.length} NODOS`}
              </div>
            </div>

            {/* TABLE */}
            <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', borderRadius: 8, overflow: 'hidden' }}>
              <thead>
                <tr style={{ background: '#f8fafc' }}>
                  <th style={{ padding: '12px', fontSize: '10px', color: '#64748b', fontWeight: 900, textAlign: 'left', borderBottom: '1px solid #eee' }}>TEMA / ACTIVIDAD</th>
                  <th style={{ padding: '12px', fontSize: '10px', color: '#64748b', fontWeight: 900, textAlign: 'left', borderBottom: '1px solid #eee', width: 250 }}>DETALLE TÉCNICO</th>
                  <th style={{ padding: '12px', fontSize: '10px', color: '#64748b', fontWeight: 900, textAlign: 'center', borderBottom: '1px solid #eee', width: 150 }}>RECURSOS</th>
                  <th style={{ padding: '12px', fontSize: '10px', color: '#64748b', fontWeight: 900, textAlign: 'center', borderBottom: '1px solid #eee', width: 100 }}>TIEMPO</th>
                </tr>
              </thead>
              <tbody>
                {mtRows.map((row: any, ri: number) => (
                  <tr key={ri} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '12px' }}>
                      <div style={{ fontSize: 14, fontWeight: 800, color: '#1B0088' }}>{row.tema}</div>
                    </td>
                    <td style={{ padding: '12px', fontSize: 12, color: '#444', lineHeight: 1.5, whiteSpace: 'pre-line' }}>{row.detalhe}</td>
                    <td style={{ padding: '12px', textAlign: 'center' }}>
                      {(() => {
                        const recs = Array.isArray(row.herramientas) ? row.herramientas : 
                                     Array.isArray(row.ferramentas) ? row.ferramentas : 
                                     (row.herramientas ? [row.herramientas] : 
                                     (row.ferramentas ? [row.ferramentas] : []));
                        return (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center' }}>
                            {recs.filter((r:any) => r && r.url && r.url !== '#' && r.url !== '-' && r.url.trim() !== '').map((r:any, i:number) => (
                              <a 
                                key={i}
                                href={r.url} target="_blank" rel="noopener noreferrer"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: planetColor, color: '#fff', padding: '6px 12px', borderRadius: 4, textDecoration: 'none', fontSize: 10, fontWeight: 900, whiteSpace: 'nowrap' }}
                              >
                                <ExternalLink size={12} /> VER {r.tipo || 'LINK'}
                              </a>
                            ))}
                          </div>
                        );
                      })()}
                    </td>
                    <td style={{ padding: '12px', textAlign: 'center', fontSize: 12, fontWeight: 800, color: '#111' }}>{row.tiempo || row.ch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};


const timeToSeconds = (timeStr: string) => {
    if (!timeStr) return 0;
    const clean = timeStr.replace(/[hm\s]/g, ':').replace(/:+/g, ':').replace(/:$/, '');
    const parts = clean.split(':').map(Number).filter(n => !isNaN(n));
    if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
    if (parts.length === 2) return parts[0] * 60 + parts[1];
    if (parts.length === 1) return parts[0] * 60;
    return 0;
};

const secondsToTime = (secs: number) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    if (h > 0) return `${h}h ${m}m ${s}s`;
    return `${m}m ${s}s`;
};

const FscDetailedNodeCard = ({ node, index, planetColor, planetLabel, sectorLabel, missaoName, onTrackEvent, themeKey }: any) => {
    const storageKey = `resolved_${planetLabel}_${node.tema}_${index}`;
    const isResolved = localStorage.getItem(storageKey) === 'true';
    const recs = Array.isArray(node.herramientas) ? node.herramientas : 
                 Array.isArray(node.ferramentas) ? node.ferramentas : 
                 (node.herramientas ? [node.herramientas] : 
                 (node.ferramentas ? [node.ferramentas] : []));
    const firstRec = recs[0] || null;

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
                opacity: 1, 
                y: 0,
                backgroundColor: isResolved ? '#F8FCF0' : '#FFFFFF',
                borderColor: isResolved ? '#99CC33' : '#E2E8F0'
            }}
            style={{ 
                background: '#FFFFFF', 
                borderRadius: 24, 
                padding: '30px 40px', 
                marginBottom: 20, 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                border: `2px solid ${isResolved ? '#99CC33' : '#E2E8F0'}`,
                boxShadow: isResolved ? '0 10px 30px rgba(153,204,51,0.05)' : '0 10px 40px rgba(0,0,0,0.02)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s ease'
            }}
        >
            {isResolved && (
                <div style={{ position: 'absolute', top: 0, left: 0, width: 6, height: '100%', background: '#99CC33' }} />
            )}
            
            <div style={{ display: 'flex', gap: 20, alignItems: 'center', flex: 1 }}>
                <div style={{ 
                    fontSize: 32, fontWeight: 900, color: isResolved ? '#99CC33' : 'rgba(27,0,136,0.1)', 
                    fontStyle: 'italic', minWidth: 60, display: 'flex', alignItems: 'center'
                }}>
                    {String(index + 1).padStart(2, '0')}
                </div>

                {/* Main Content */}
                <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: planetColor }} />
                    <div style={{ fontSize: 20, fontWeight: 900, color: '#1B0088', letterSpacing: '-0.01em' }}>{node.tema}</div>
                </div>
                <div style={{ 
                    fontSize: '15px', color: '#334155', lineHeight: 1.8, fontWeight: 500,
                    background: 'rgba(27,0,136,0.02)', padding: '20px 25px', borderRadius: 14,
                    borderLeft: `4px solid ${planetColor}44`, marginTop: 12,
                    boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.02)',
                    whiteSpace: 'pre-line'
                }}>
                    {node.detalhe || node.desc}
                </div>
                
                {/* Context Stats */}
                <div style={{ display: 'flex', gap: 15, marginTop: 20 }}>
                    {node.dia && (
                        <div style={{ 
                            padding: '10px 18px', 
                            background: '#FFFFFF', 
                            borderRadius: 12, 
                            fontSize: 11, 
                            fontWeight: 900, 
                            color: '#1B0088', 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: 10,
                            border: `1px solid #E2E8F0`,
                            boxShadow: `0 4px 15px rgba(0,0,0,0.05)`
                        }}>
                            <Calendar size={16} color={planetColor} /> <span style={{ letterSpacing: '1px' }}>Día:</span> {node.dia}
                        </div>
                    )}
                    <div style={{ 
                        padding: '10px 18px', 
                        background: '#FFFFFF', 
                        borderRadius: 12, 
                        fontSize: 11, 
                        fontWeight: 900, 
                        color: '#1B0088', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 10,
                        border: `1px solid #E2E8F0`,
                        boxShadow: `0 4px 15px rgba(0,0,0,0.05)`
                    }}>
                        <Clock size={16} /> <span style={{ letterSpacing: '1px' }}>Duração:</span> {node.ch || node.tiempo || '-'}
                    </div>
                </div>

            </div>
            </div>
            
            {/* Tactical Divider between Text and Resources */}
            <div style={{ width: '2px', alignSelf: 'stretch', background: 'rgba(27,0,136,0.08)', margin: '0 40px', borderRadius: 1 }} />

            {/* Actions & Links Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, minWidth: '220px', justifyContent: 'center' }}>
                {/* PIC LINKS GROUP */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {(Array.isArray(node.iaPic) ? node.iaPic : node.iaPic ? [{ label: 'PIC LINK', url: node.iaPic }] : [])
                        .filter((link: any) => link && link.url && link.url !== '#' && link.url !== '-' && link.url.trim() !== '')
                        .map((link: any, li: number) => (
                        <motion.a 
                            key={li}
                            whileHover={{ scale: 1.05, background: '#e0f2fe' }}
                            href={link.url} target="_blank" rel="noopener noreferrer"
                            onClick={() => onTrackEvent && onTrackEvent('OPEN_LINK', `Abrió PIC: ${node.tema} - ${link.label || 'PIC'}`)}
                            style={{ 
                                background: '#f0f9ff',
                                border: '1px dashed #bae6fd', 
                                color: '#0284c7', 
                                padding: '6px 12px', 
                                borderRadius: 8, 
                                fontSize: 10, 
                                fontWeight: 800, 
                                textAlign: 'center', 
                                textDecoration: 'none', 
                                letterSpacing: '0.5px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 6
                            }}
                        >
                            <ExternalLink size={12} /> {link.label && link.label.length < 30 ? link.label : 'PIC'}
                        </motion.a>
                    ))}
                </div>

                {/* MAIN ACTION BUTTONS */}
                {recs.filter((r: any) => r && r.url && r.url !== '#' && r.url !== '-' && r.url.trim() !== '').map((rec: any, ri: number) => (
                    <motion.a 
                        key={ri}
                        whileHover={{ scale: 1.05, background: planetColor }}
                        whileTap={{ scale: 0.98 }}
                        href={rec.url} 
                        target="_blank" rel="noopener noreferrer"
                        onClick={() => onTrackEvent && onTrackEvent('OPEN_LINK', `Abrió recurso: ${node.tema} - ${rec.tipo || 'RECURSO'}`)}
                        style={{
                            background: '#1B0088', 
                            color: '#fff', 
                            padding: '14px 20px', 
                            borderRadius: 12, 
                            fontWeight: 900, 
                            fontSize: 10, 
                            textAlign: 'center', 
                            textDecoration: 'none',
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            gap: 10,
                            boxShadow: `0 4px 12px rgba(27,0,136,0.2)`,
                            transition: 'all 0.2s ease',
                            letterSpacing: '1px',
                            textTransform: 'uppercase'
                        }}
                    >
                        <ExternalLink size={14} /> ABRIR {(rec.tipo || 'RECURSO').replace(/[\uD83C-\uDBFF\uDC00-\uDFFF]+/g, '').trim().toUpperCase()}
                    </motion.a>
                ))}

                {/* Completion Check */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                        const isReadOnly = localStorage.getItem('yoda_read_only_mode') === 'true';
                        if (isReadOnly) return; // NO-OP in read-only mode
                        
                        const storageKey = `resolved_${planetLabel}_${node.tema}_${index}`;
                        const isDone = localStorage.getItem(storageKey) === 'true';
                        
                        if (!isDone) {
                            const email = localStorage.getItem('yoda_active_user') || 'instructor@example.com';
                            updateMissionTracking(email, sectorLabel || 'Sector', planetLabel || 'Planeta', missaoName, node.macroTema || 'GENERAL', node.tema, node.tiempo || node.ch || '-', 'VISTO');
                            const timeKey = `yoda_time_start_${planetLabel}_${themeKey}`;
                            const startStr = localStorage.getItem(timeKey);
                            if (startStr) {
                                const startTime = parseInt(startStr, 10);
                                const elapsedMs = Date.now() - startTime;
                                const elapsedSecs = Math.floor(elapsedMs / 1000);
                                
                                const m = Math.floor(elapsedSecs / 60);
                                const s = elapsedSecs % 60;
                                const timeFormatted = `${m}m ${s}s`;
                                
                                const savedLogs = localStorage.getItem('yoda_activity_logs');
                                let logs = savedLogs ? JSON.parse(savedLogs) : [];
                                logs = [{ 
                                    time: new Date().toISOString(), 
                                    user: localStorage.getItem('yoda_active_user') || 'carlose.araya@latam.com', 
                                    action: 'TRACK_TIEMPO', 
                                    details: `Resolvió nodo ${index + 1} en ${timeFormatted}. Planeado: ${node.tiempo || node.ch || '?'}`,
                                    partidaId: localStorage.getItem('yoda_active_partida') || 'N/A',
                                    planetLabel,
                                    nodeTema: node.tema,
                                    elapsedSecs
                                }, ...logs].slice(0, 1000);
                                localStorage.setItem('yoda_activity_logs', JSON.stringify(logs));
                                
                                // Reset the timer so the next node counts from now
                                localStorage.setItem(timeKey, Date.now().toString());
                            }
                        }

                        localStorage.setItem(storageKey, isDone ? 'false' : 'true');
                        onTrackEvent && onTrackEvent('COMPLETION', `Marcó nodo como ${isDone ? 'Pendiente' : 'Finalizado'}: ${node.tema}`);
                        if (typeof window !== 'undefined' && (window as any).refreshOnboarding) {
                            (window as any).refreshOnboarding();
                        } else {
                            window.location.reload();
                        }
                    }}
                    style={{
                        height: 36,
                        background: (typeof localStorage !== 'undefined' && localStorage.getItem('yoda_read_only_mode') === 'true') ? 'transparent' : isResolved ? '#99CC33' : planetColor,
                        color: (typeof localStorage !== 'undefined' && localStorage.getItem('yoda_read_only_mode') === 'true') ? planetColor : '#fff',
                        borderRadius: 10,
                        cursor: (typeof localStorage !== 'undefined' && localStorage.getItem('yoda_read_only_mode') === 'true') ? 'not-allowed' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        padding: '0 20px',
                        fontSize: 10,
                        fontWeight: 900,
                        letterSpacing: '0.5px',
                        gap: 8,
                        boxShadow: (typeof localStorage !== 'undefined' && localStorage.getItem('yoda_read_only_mode') === 'true') ? 'none' : `0 4px 12px ${isResolved ? 'rgba(153, 204, 51, 0.4)' : planetColor + '44'}`,
                        border: (typeof localStorage !== 'undefined' && localStorage.getItem('yoda_read_only_mode') === 'true') ? `1px dashed ${planetColor}` : 'none',
                        transition: 'all 0.2s ease',
                        textTransform: 'uppercase'
                    }}
                >
                    {(typeof localStorage !== 'undefined' && localStorage.getItem('yoda_read_only_mode') === 'true') ? <Eye size={16} strokeWidth={2.5} /> : isResolved ? <Check size={16} strokeWidth={4} /> : <CheckCircle2 size={16} strokeWidth={2.5} />} 
                    {(typeof localStorage !== 'undefined' && localStorage.getItem('yoda_read_only_mode') === 'true') ? 'MODO LECTURA' : isResolved ? 'FINALIZADO' : 'MARCAR COMO VISTO'}
                </motion.div>
            </div>
        </motion.div>
    );
};

const FscDetailedTerminal = ({ seccion, secciones, planetColor, onBack, titleOverride, subtitleOverride, tick, planetLabel, sectorLabel, onTrackEvent }: any) => {
    const allSecciones = secciones || (seccion ? [seccion] : []);
    const initialThemes = useMemo(() => {
        const keys: string[] = [];
        allSecciones.forEach((s: any, sidx: number) => {
            const contiguous: string[] = [];
            (s.rows || []).forEach((r: any) => {
                const mt = r.macroTema || 'GENERAL';
                if (contiguous.length === 0 || contiguous[contiguous.length - 1] !== mt) {
                    contiguous.push(mt);
                }
            });
            contiguous.forEach((mt, gi) => {
                keys.push(`${sidx}-${gi}-${mt}`);
            });
        });
        return keys;
    }, [allSecciones]);

    const [collapsedThemes, setCollapsedThemes] = useState<string[]>(initialThemes);
    const [showFeedbackModal, setShowFeedbackModal] = useState(false);
    const [feedbackText, setFeedbackText] = useState("");

    const handleMarkAllAsComplete = () => {
        setShowFeedbackModal(true);
    };

    const confirmCompletion = () => {
        if (feedbackText.trim()) {
            const savedLogs = localStorage.getItem('yoda_activity_logs');
            let logs = savedLogs ? JSON.parse(savedLogs) : [];
            logs = [{ 
                time: new Date().toISOString(), 
                user: localStorage.getItem('yoda_active_user') || 'carlose.araya@latam.com', 
                action: 'BITACORA', 
                details: `Bitácora en ${planetLabel}: ${feedbackText}`,
                partidaId: localStorage.getItem('yoda_active_partida') || 'N/A'
            }, ...logs].slice(0, 1000);
            localStorage.setItem('yoda_activity_logs', JSON.stringify(logs));
        }

        const missaoName = titleOverride || seccion?.nombre?.toUpperCase() || seccion?.label?.toUpperCase() || 'EXPLORAÇÃO TÁTICA';
        allSecciones.forEach((sec: any) => {
            (sec.rows || []).forEach((r: any, i: number) => {
                localStorage.setItem(`resolved_${planetLabel}_${r.tema}_${i}`, 'true');
                const email = localStorage.getItem('yoda_active_user') || 'instructor@example.com';
                updateMissionTracking(email, sectorLabel || 'Sector', planetLabel || 'Planeta', missaoName, r.macroTema || 'GENERAL', r.tema, r.tiempo || r.ch || '-', 'FINALIZADO');
            });
        });
        if (onTrackEvent) onTrackEvent('COMPLETION', `Marcó toda la expedición como finalizada: ${planetLabel}`);
        if ((window as any).refreshOnboarding) (window as any).refreshOnboarding();
        onBack();
    };

    const handleResetProgress = () => {
        // We remove the native confirm as it might be blocked in some environments
        // or causing issues with the React event loop.
        allSecciones.forEach(sec => {
            (sec.rows || []).forEach((r: any, i: number) => {
                localStorage.setItem(`resolved_${planetLabel}_${r.tema}_${i}`, 'false');
            });
        });
        
        if (onTrackEvent) onTrackEvent('COMPLETION', `Reinició el progreso de la expedición: ${planetLabel}`);
        
        // Clear congrats flag too
        const congratsKey = `congrats_shown_${planetLabel || titleOverride || seccion?.nombre || ''}_${sectorLabel || subtitleOverride || 'SECTOR'}`;
        localStorage.setItem(congratsKey, 'false');
        
        if (typeof window !== 'undefined' && (window as any).refreshOnboarding) {
            (window as any).refreshOnboarding();
        }
        
        // Return to map to see changes
        if (onBack) onBack();
    };

    const isAllComplete = useMemo(() => {
        return allSecciones.every(sec => 
            (sec.rows || []).every((r: any, i: number) => localStorage.getItem(`resolved_${planetLabel}_${r.tema}_${i}`) === 'true')
        );
    }, [allSecciones, tick, planetLabel]);
    
    const toggleTheme = (theme: string) => {
        setCollapsedThemes(prev => {
            const isCollapsed = prev.includes(theme);
            if (isCollapsed) {
                const timeKey = `yoda_time_start_${planetLabel}_${theme}`;
                if (!localStorage.getItem(timeKey)) {
                    localStorage.setItem(timeKey, Date.now().toString());
                }
                const themeParts = theme.split('-');
                const sidx = parseInt(themeParts[0]);
                const macroTemaName = themeParts.slice(2).join('-');
                const email = localStorage.getItem('yoda_active_user') || 'instructor@example.com';
                const missaoName = titleOverride || seccion?.nombre?.toUpperCase() || seccion?.label?.toUpperCase() || 'EXPLORAÇÃO TÁTICA';
                
                const sec = allSecciones[sidx];
                const rowsForMacroTema = (sec?.rows || []).filter((r: any) => (r.macroTema || 'GENERAL') === macroTemaName);
                
                if (rowsForMacroTema.length > 0) {
                    rowsForMacroTema.forEach((r: any) => {
                        updateMissionTracking(email, sectorLabel || 'Sector', planetLabel || 'Planeta', missaoName, macroTemaName, r.tema, r.tiempo || r.ch || '-', 'APERTURA');
                    });
                } else {
                    updateMissionTracking(email, sectorLabel || 'Sector', planetLabel || 'Planeta', missaoName, macroTemaName, '-', '-', 'APERTURA');
                }
                return prev.filter(t => t !== theme);
            } else {
                return [...prev, theme];
            }
        });
    };

    const firstSec = allSecciones[0] || { rows: [], tipo: 'mision1' };
    const tipo = firstSec.tipo || 'mision1';
    const nodeColor = typeColors[tipo] || planetColor;


    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ 
                position: 'fixed', inset: 0, backgroundColor: '#F8F7FF', zIndex: 9999,
                display: 'flex', flexDirection: 'column', overflow: 'hidden',
                color: '#1B0088'
            }}
        >
            {/* Blueprint Grid Background */}
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(27,0,136,0.02) 2px, transparent 2px), linear-gradient(90deg, rgba(27,0,136,0.02) 2px, transparent 2px)', backgroundSize: '50px 50px', pointerEvents: 'none' }} />
            
            {/* Specialized Header (Blueprint Pro Style) */}
            <div style={{ 
                height: '90px', background: '#1B0088', borderBottom: `4px solid ${planetColor}`,
                display: 'flex', alignItems: 'center', padding: '0 60px', gap: 40, zIndex: 10,
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
            }}>
                <button 
                  onClick={onBack}
                  style={{ 
                    background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', 
                    padding: '10px 24px', borderRadius: 8, cursor: 'pointer', fontSize: 11, fontWeight: 900, 
                    display: 'flex', alignItems: 'center', gap: 12, textTransform: 'uppercase', letterSpacing: '1px'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#1B0088' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff' }}
                >
                    <ArrowLeft size={16} /> Retornar ao mapa
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                    <div style={{ width: 56, height: 56, borderRadius: 14, background: nodeColor, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 10px 20px ${nodeColor}44`, color: '#fff' }}>
                        {typeIcons[tipo]}
                    </div>
                    <div>
                        <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.6)', fontWeight: 900, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: 2 }}>
                            {subtitleOverride || 'PROTOCOLO DE SEGMENTO'}
                        </div>
                        <div style={{ fontSize: 26, fontWeight: 900, color: '#FFF' }}>{titleOverride || seccion.nombre?.toUpperCase() || seccion.label?.toUpperCase() || 'EXPLORAÇÃO TÁTICA'}</div>
                    </div>
                </div>

                <div style={{ marginLeft: 'auto', display: 'flex', gap: 48, alignItems: 'center' }}>
                    {planetLabel && (
                        <>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', fontWeight: 800 }}>PLANETA</div>
                                <div style={{ fontSize: 13, color: '#FFF', fontWeight: 900, textTransform: 'uppercase' }}>
                                    {planetLabel}
                                </div>
                            </div>
                            <div style={{ height: 40, width: 2, background: 'rgba(255,255,255,0.1)' }} />
                        </>
                    )}
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', fontWeight: 800 }}>Status</div>
                        <div style={{ fontSize: 13, color: '#99CC33', fontWeight: 900, display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'flex-end' }}>
                            <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.5, repeat: Infinity }} style={{ width: 8, height: 8, borderRadius: '50%', background: '#99CC33' }} /> Exploração Ativa
                        </div>
                    </div>
                    <div style={{ height: 40, width: 2, background: 'rgba(255,255,255,0.1)' }} />
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', fontWeight: 800 }}>NODOS DETECTADOS</div>
                        <div style={{ fontSize: 22, color: '#FFF', fontWeight: 900 }}>
                            {allSecciones.reduce((acc, s) => acc + (s.rows || []).length, 0)}
                        </div>
                    </div>
                    {(() => {
                        const allDays = allSecciones.flatMap((s: any) => s.rows || []).map((r: any) => r.dia).filter(Boolean);
                        const lastDay = allDays.length > 0 ? allDays[allDays.length - 1] : '';
                        if (!lastDay) return null;
                        return (
                            <>
                                <div style={{ height: 40, width: 2, background: 'rgba(255,255,255,0.1)' }} />
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', fontWeight: 800 }}>ACUMULADO DÍAS</div>
                                    <div style={{ fontSize: 22, color: '#FFF', fontWeight: 900 }}>
                                        {lastDay}
                                    </div>
                                </div>
                            </>
                        );
                    })()}
                </div>
            </div>

            {/* Main Content Grid (Two Columns) */}
            <div style={{ flex: 1, padding: '40px 60px', overflowY: 'auto', zIndex: 10, display: 'grid', gridTemplateColumns: '1fr 400px', gap: 60, maxWidth: '1600px', margin: '0 auto', width: '100%' }}>
                
                {/* Left: Scrollable List of Cards */}
                <div style={{ paddingBottom: 60 }}>
                    {allSecciones.map((sec, sidx) => (
                        <div key={sidx} style={{ marginBottom: 40 }}>
                            {allSecciones.length > 1 && (
                                <div style={{ marginBottom: 20, borderBottom: `2px solid ${typeColors[sec.tipo] || planetColor}`, paddingBottom: 8, display: 'flex', alignItems: 'center', gap: 12 }}>
                                    <div style={{ color: typeColors[sec.tipo] || planetColor }}>{typeIcons[sec.tipo] || typeIcons.mision1}</div>
                                    <div style={{ fontSize: 14, fontWeight: 900, color: '#1B0088', textTransform: 'uppercase', letterSpacing: '1px' }}>{sec.label?.replace(/MÓDULO\s*\d*:\s*/i, '') || ''}</div>
                                </div>
                            )}
                            {(sec.rows || []).length === 0 ? (
                                <div style={{ padding: '40px', textAlign: 'center', background: 'rgba(27,0,136,0.02)', borderRadius: 16, border: '1px dashed rgba(27,0,136,0.1)' }}>
                                    <div style={{ fontSize: 14, color: '#1B0088', opacity: 0.7 }}>Sin nodos en esta sección.</div>
                                </div>
                            ) : (
                                <>
                                    {(() => {
                                        const grouped: { macroTema: string; rows: any[] }[] = [];
                                        (sec.rows || []).forEach((r: any, i: number) => {
                                            const mt = r.macroTema || 'GENERAL';
                                            if (grouped.length > 0 && grouped[grouped.length - 1].macroTema === mt) {
                                                grouped[grouped.length - 1].rows.push({ ...r, originalIndex: i });
                                            } else {
                                                grouped.push({ macroTema: mt, rows: [{ ...r, originalIndex: i }] });
                                            }
                                        });

                                        return grouped.map(({ macroTema: mt, rows }, gi) => {
                                            const themeKey = `${sidx}-${gi}-${mt}`;
                                            const isCollapsed = collapsedThemes.includes(themeKey);
                                            const uniqueDays = Array.from(new Set(rows.map((r: any) => r.dia).filter(Boolean))).sort((a: any, b: any) => Number(a) - Number(b));
                                            return (
                                                <div key={themeKey} style={{ marginBottom: isCollapsed ? 20 : 50 }}>
                                                    {/* Premium Tactical Theme Header - NOW CLICKABLE TO COLLAPSE */}
                                                    <motion.div 
                                                        whileHover={{ background: 'rgba(27,0,136,0.06)' }}
                                                        onClick={() => toggleTheme(themeKey)}
                                                        style={{ 
                                                            display: 'flex', alignItems: 'center', gap: 20, marginBottom: isCollapsed ? 0 : 24, 
                                                            padding: '16px 24px', background: 'rgba(27,0,136,0.03)', 
                                                            borderRadius: '12px', borderLeft: `4px solid ${planetColor}`,
                                                            position: 'relative', overflow: 'hidden', cursor: 'pointer',
                                                            transition: '0.3s ease'
                                                        }}
                                                    >
                                                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(27,0,136,0.05) 0%, transparent 100%)', pointerEvents: 'none' }} />
                                                        
                                                        <div style={{ 
                                                            width: 32, height: 32, borderRadius: 8, background: isCollapsed ? '#1B0088' : planetColor, 
                                                            display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
                                                            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                                                        }}>
                                                            {isCollapsed ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
                                                        </div>

                                                        <div style={{ fontSize: 20, fontWeight: 900, color: '#1B0088', letterSpacing: '-0.02em', textTransform: 'uppercase', flex: 1 }}>{mt}</div>
                                                        
                                                        {uniqueDays.length > 0 && (
                                                            <div style={{ fontSize: 11, color: '#1B0088', background: 'rgba(27,0,136,0.05)', padding: '4px 12px', borderRadius: 12, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 4 }}>
                                                                <Calendar size={12} /> {uniqueDays.length === 1 ? `DÍA: ${uniqueDays[0]}` : `DÍAS: ${uniqueDays.join(' - ')}`}
                                                            </div>
                                                        )}
                                                        
                                                        <div style={{ fontSize: 10, color: 'rgba(27,0,136,0.4)', fontWeight: 800 }}>{rows.length} NODOS DETECTADOS</div>
                                                    </motion.div>
                                                    
                                                    <AnimatePresence>
                                                        {!isCollapsed && (
                                                            <motion.div
                                                                initial={{ opacity: 0, height: 0 }}
                                                                animate={{ opacity: 1, height: 'auto' }}
                                                                exit={{ opacity: 0, height: 0 }}
                                                                style={{ overflow: 'hidden' }}
                                                            >
                                                                {rows.map((row: any) => (
                                                                    <FscDetailedNodeCard 
                                                                        key={`${sidx}-${row.originalIndex}`} 
                                                                        node={row} 
                                                                        index={row.originalIndex} 
                                                                        planetColor={planetColor} 
                                                                        planetLabel={planetLabel}
                                                                        sectorLabel={sectorLabel}
                                                                        missaoName={titleOverride || seccion?.nombre?.toUpperCase() || seccion?.label?.toUpperCase() || 'EXPLORAÇÃO TÁTICA'}
                                                                        onTrackEvent={onTrackEvent}
                                                                        themeKey={themeKey}
                                                                    />
                                                                ))}
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            );
                                        });
                                    })()}
                                </>
                            )}
                        </div>
                    ))}
                </div>

                {/* Right: Specialist Sidebar */}
                <div style={{ position: 'sticky', top: 0, height: 'max-content', display: 'flex', flexDirection: 'column', gap: 30 }}>
                    {/* Summary Block */}
                    <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 24, padding: 40, boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
                            <Target size={20} color={planetColor} />
                            <div style={{ fontWeight: 900, fontSize: 13, letterSpacing: '1.5px', color: '#0F004F' }}>Resumo de missão</div>
                        </div>
                        
                        <div style={{ height: '1.5px', background: '#F1F5F9', marginBottom: 30 }} />
                        
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                            <span style={{ fontSize: 13, color: '#858585', fontWeight: 600 }}>Tempo Restante</span>
                            <span style={{ fontSize: 14, fontWeight: 900, color: '#1B0088' }}>
                                {(() => {
                                    const remaining = allSecciones.reduce((acc, s) => acc + (s.rows || []).reduce((a: number, r: any, i: number) => {
                                        const isResolved = localStorage.getItem(`resolved_${planetLabel}_${r.tema}_${i}`) === 'true';
                                        return isResolved ? a : a + timeToSeconds(r.tiempo || r.ch || '');
                                    }, 0), 0);
                                    return secondsToTime(remaining);
                                })()}
                            </span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                            <span style={{ fontSize: 13, color: '#858585', fontWeight: 600 }}>Resolvidos</span>
                            <span style={{ fontSize: 14, fontWeight: 900, color: '#99CC33' }}>
                                {(() => {
                                    const totalRows = allSecciones.reduce((acc, s) => acc + (s.rows || []).length, 0);
                                    const resolvedCount = allSecciones.reduce((acc, s) => acc + (s.rows || []).filter((r: any, i: number) => localStorage.getItem(`resolved_${planetLabel}_${r.tema}_${i}`) === 'true').length, 0);
                                    return `${resolvedCount} / ${totalRows}`;
                                })()}
                            </span>
                        </div>

                        {/* Visual Progress Bar */}
                        <div style={{ height: 8, background: '#F1F5F9', borderRadius: 4, marginBottom: 40, overflow: 'hidden' }}>
                            <motion.div 
                                initial={{ width: 0 }}
                                animate={{ 
                                    width: `${(() => {
                                        const totalRows = allSecciones.reduce((acc, s) => acc + (s.rows || []).length, 0);
                                        const resolvedCount = allSecciones.reduce((acc, s) => acc + (s.rows || []).filter((r: any, i: number) => localStorage.getItem(`resolved_${planetLabel}_${r.tema}_${i}`) === 'true').length, 0);
                                        return totalRows > 0 ? (resolvedCount / totalRows) * 100 : 0;
                                    })()}%` 
                                }}
                                transition={{ type: 'spring', stiffness: 50, damping: 20 }}
                                style={{ height: '100%', background: 'linear-gradient(90deg, #99CC33, #00D6CC)', borderRadius: 4 }}
                            />
                        </div>


                        <AnimatePresence>
                            {isAllComplete && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -15, scale: 0.95 }}
                                    style={{ 
                                        marginTop: 24, 
                                        padding: '24px 20px', 
                                        background: 'linear-gradient(135deg, rgba(153,204,51,0.15), rgba(153,204,51,0.02))',
                                        border: '1px solid rgba(153,204,51,0.4)',
                                        borderRadius: 16,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: 12,
                                        boxShadow: '0 8px 30px rgba(153,204,51,0.15)',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                >
                                    <div style={{ position: 'absolute', top: -20, right: -20, opacity: 0.1 }}>
                                        <Star size={100} color="#99CC33" />
                                    </div>
                                    <motion.div 
                                        animate={{ rotate: [0, 10, -10, 0] }}
                                        transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
                                        style={{ background: '#99CC33', color: '#fff', borderRadius: '50%', padding: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 15px rgba(153,204,51,0.4)' }}
                                    >
                                        <BadgeCheck size={28} />
                                    </motion.div>
                                    <div style={{ fontSize: 16, color: '#1B0088', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', textAlign: 'center' }}>
                                        Missão Concluída!
                                    </div>
                                    <div style={{ fontSize: 12, color: '#64748B', fontWeight: 600, textAlign: 'center', lineHeight: 1.5, zIndex: 1, marginBottom: 8 }}>
                                        Excelente trabalho. Todos os objetivos desta missão foram alcançados com sucesso.
                                    </div>
                                    <button
                                        onClick={onBack}
                                        style={{
                                            background: '#1B0088', color: '#fff', border: 'none', padding: '12px 20px', borderRadius: 8,
                                            fontWeight: 800, fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8,
                                            boxShadow: '0 4px 15px rgba(27,0,136,0.3)', zIndex: 1, width: '100%', justifyContent: 'center', transition: 'all 0.2s ease', marginTop: 4
                                        }}
                                        onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                                        onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                                    >
                                        <ArrowLeft size={16} /> Retornar ao Mapa
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Extra OJT Card */}
                    {firstSec && firstSec.tipo === 'ojt' && (firstSec.ojtExtraTitle || firstSec.ojtExtraDesc || firstSec.ojtExtraLink) && (
                        <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 24, padding: 32, boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
                            {firstSec.ojtExtraTitle && (
                                <div style={{ fontSize: 14, fontWeight: 900, color: '#1B0088', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
                                    <Target size={18} color={planetColor} /> {firstSec.ojtExtraTitle}
                                </div>
                            )}
                            
                            {firstSec.ojtExtraDesc && (
                                <div style={{ fontSize: 13, color: '#64748b', lineHeight: 1.6, marginBottom: firstSec.ojtExtraLink ? 20 : 0, whiteSpace: 'pre-wrap' }}>
                                    {firstSec.ojtExtraDesc}
                                </div>
                            )}

                            {firstSec.ojtExtraLink && (
                                <a 
                                    href={firstSec.ojtExtraLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={{ 
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                                        width: '100%', background: 'rgba(27,0,136,0.05)', color: '#1B0088', 
                                        padding: '12px', borderRadius: 10, fontSize: 12, fontWeight: 900, 
                                        textDecoration: 'none', transition: 'all 0.2s', border: '1px solid rgba(27,0,136,0.1)'
                                    }}
                                    onMouseEnter={e => { e.currentTarget.style.background = '#1B0088'; e.currentTarget.style.color = '#fff'; }}
                                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(27,0,136,0.05)'; e.currentTarget.style.color = '#1B0088'; }}
                                >
                                    <ExternalLink size={16} /> ABRIR RECURSO EXTRA
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
            
            {/* Feedback / Logbook Modal */}
            <AnimatePresence>
                {showFeedbackModal && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ position: 'fixed', inset: 0, zIndex: 100000, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(15,0,79,0.9)', backdropFilter: 'blur(10px)' }}
                    >
                        <motion.div 
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            style={{ background: '#fff', borderRadius: 24, padding: 40, width: 500, maxWidth: '90%', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', border: `4px solid ${planetColor}` }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 20 }}>
                                <div style={{ background: `${planetColor}22`, color: planetColor, padding: 12, borderRadius: '50%' }}>
                                    <FileText size={24} />
                                </div>
                                <div>
                                    <h2 style={{ margin: 0, fontSize: 20, color: '#1B0088', fontWeight: 900 }}>Bitácora de Vuelo</h2>
                                    <p style={{ margin: 0, fontSize: 12, color: '#64748B' }}>¿Hubo algún problema o algo a destacar en esta misión?</p>
                                </div>
                            </div>

                            <textarea 
                                value={feedbackText}
                                onChange={e => setFeedbackText(e.target.value)}
                                placeholder="Ej: El PDF de la dinámica 2 no abría, nos demoramos 10 min extra..."
                                style={{ width: '100%', height: 120, padding: 15, borderRadius: 12, border: '2px solid #E2E8F0', fontSize: 14, fontFamily: 'inherit', resize: 'none', marginBottom: 25, outline: 'none', boxSizing: 'border-box' }}
                                onFocus={e => e.target.style.borderColor = planetColor}
                                onBlur={e => e.target.style.borderColor = '#E2E8F0'}
                            />

                            <div style={{ display: 'flex', gap: 15, justifyContent: 'flex-end' }}>
                                <button 
                                    onClick={() => setShowFeedbackModal(false)}
                                    style={{ padding: '12px 24px', background: '#F1F5F9', color: '#64748B', border: 'none', borderRadius: 12, fontWeight: 800, cursor: 'pointer' }}
                                >
                                    Cancelar
                                </button>
                                <button 
                                    onClick={() => {
                                        onTrackEvent?.('mission_feedback', { text: feedbackText });
                                        confirmCompletion();
                                    }}
                                    style={{ padding: '12px 24px', background: '#99CC33', color: '#fff', border: 'none', borderRadius: 12, fontWeight: 900, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, boxShadow: '0 4px 15px rgba(153,204,51,0.3)' }}
                                >
                                    <Check size={18} /> Finalizar Misión
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            
        </motion.div>
    );
};

export const PlanetContentView = ({ planetIdx, onBack, data, planetLabel, sectorLabel="SECTOR", onboardingData, onTrackEvent }: any) => {
    const [viewMode, setViewMode] = React.useState<'map' | 'detail' | 'onboarding'>('map');
    const [selectedIdx, setSelectedIdx] = React.useState(0);
    const [tick, setTick] = React.useState(0);
    const [showCongrats, setShowCongrats] = React.useState(false);

    React.useEffect(() => {
        (window as any).refreshOnboarding = () => setTick(t => t + 1);
        return () => { delete (window as any).refreshOnboarding; };
    }, []);
    
    // Safety check for data
    if (!data) return null;

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

    const isModuleComplete = React.useMemo(() => {
        if (!secciones || secciones.length === 0) return false;
        return secciones.every(sec => {
            const rows = sec.rows || [];
            if (rows.length === 0) return true;
            return rows.every((r: any, i: number) => localStorage.getItem(`resolved_${planetLabel}_${r.tema}_${i}`) === 'true');
        });
    }, [secciones, tick, planetLabel]);

    React.useEffect(() => {
        if (isModuleComplete) {
            const storageKey = `congrats_shown_${planetLabel}_${sectorLabel}`;
            if (localStorage.getItem(storageKey) !== 'true') {
                setTimeout(() => setShowCongrats(true), 1000);
                localStorage.setItem(storageKey, 'true');
            }
        }
    }, [isModuleComplete, planetLabel, sectorLabel]);

    const handleSelectSection = (idx: number) => {
        setSelectedIdx(idx);
        setViewMode('detail');
    };

    return (
        <div style={{ minHeight: '100vh', background: '#040114', color: '#fff', position: 'relative', paddingBottom: 100 }}>
            {/* Conditional background based on viewMode */}
            {viewMode === 'map' ? (
                <>
                    <MissionMapBackground color={planetColor} />
                    <div style={{ position: 'relative', zIndex: 10 }}>
                        <MissionHeaderHUD 
                            sectorLabel={sectorLabel} 
                            planetLabel={planetLabel} 
                            planetColor={planetColor} 
                            onBack={onBack} 
                        />
                        
                        {(typeof localStorage !== 'undefined' && localStorage.getItem('yoda_read_only_mode') === 'true') && (
                            <div style={{ background: 'rgba(237, 22, 80, 0.2)', border: '1px solid #ED1650', color: '#fff', padding: '10px 20px', borderRadius: 8, margin: '20px auto 0', width: 'fit-content', display: 'flex', alignItems: 'center', gap: 10, fontSize: 12, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', boxShadow: '0 0 20px rgba(237, 22, 80, 0.4)' }}>
                                <Eye size={18} color="#ED1650" />
                                <span>MODO EXPLORACIÓN ACTIVO: Tu progreso no será guardado ni reportado.</span>
                            </div>
                        )}

                        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '75px 60px 0 60px', position: 'absolute', top: 0, left: 0, right: 0, zIndex: 110, gap: 20, pointerEvents: 'none', alignItems: 'flex-start' }}>
                             <div style={{ pointerEvents: 'auto' }}>
                                <TacticalSatelliteWidget 
                                    title="MATERIAIS" 
                                    icon={<FileText size={24} />} 
                                    links={planetObj?.materiais} 
                                    color={planetColor} 
                                />
                             </div>
                             <div style={{ pointerEvents: 'auto' }}>
                                <TacticalSatelliteWidget 
                                    title="AVALIAÇÕES" 
                                    icon={<BadgeCheck size={24} />} 
                                    color="#00D6CC"
                                    evalMsg={planetObj?.evalMsg}
                                    evalTime={planetObj?.evalTime}
                                    subGroups={[
                                        { id: 'kon', label: 'KON BR', color: '#99CC33', links: planetObj?.evalKon || [] },
                                        { id: 'aec', label: 'AeC', color: '#00D6CC', links: planetObj?.evalAec || [] }
                                    ].filter(g => g.links.length > 0)}
                                />
                             </div>

                        </div>
                        <div style={{ padding: '0 60px', maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 10 }}>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key="map"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <div style={{ textAlign: 'center', marginTop: 40, marginBottom: 40 }}>
                                        <div style={{ display: 'inline-block', background: 'rgba(27, 0, 136, 0.4)', backdropFilter: 'blur(10px)', border: `1px solid ${planetColor === '#1b0088' ? '#99CC33' : planetColor}`, borderRadius: 30, padding: '8px 20px', marginBottom: 16, boxShadow: `0 0 15px ${planetColor === '#1b0088' ? 'rgba(153, 204, 51, 0.3)' : planetColor + '44'}` }}>
                                            <span style={{ fontSize: 10, color: planetColor === '#1b0088' ? '#99CC33' : '#ffffff', fontWeight: 900, letterSpacing: '4px', textTransform: 'uppercase' }}>MAPA TÁTICO DE EXPLORAÇÃO</span>
                                        </div>
                                        <div style={{ fontSize: 36, fontWeight: 900, color: '#fff', letterSpacing: '4px', textTransform: 'uppercase' }}>EXPEDIÇÃO: {planetLabel}</div>
                                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
                                            <div style={{ width: 140, height: 2, background: `linear-gradient(90deg, transparent, ${planetColor}, transparent)` }} />
                                        </div>
                                    </div>
                                    <MissionSectorMap 
                                        secciones={secciones} 
                                        planetColor={planetColor} 
                                        texture={planetObj?.texture}
                                        tick={tick}
                                        onSelectSection={handleSelectSection} 
                                        onboardingData={onboardingData}
                                        activeOnboardingIdx={planetObj?.onboardingIdx || 0}
                                        onSelectOnboarding={() => setViewMode('onboarding')}
                                        isFirstPlanet={(planetIdx === 0 || planetObj?.onboardingIdx !== undefined) && sectorLabel === 'FRONT LINE'}
                                        onBackToPlanets={onBack}
                                        planetLabel={planetLabel}
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </>
            ) : viewMode === 'detail' ? (
                <FscDetailedTerminal 
                    seccion={secciones[selectedIdx] || {rows:[]}} 
                    planetColor={planetColor} 
                    onBack={() => setViewMode('map')} 
                    tick={tick}
                    planetLabel={planetLabel}
                    sectorLabel={sectorLabel}
                    onTrackEvent={onTrackEvent}
                />
            ) : (
                <FscDetailedTerminal 
                    secciones={onboardingData?.[planetObj?.onboardingIdx || 0]?.data?.secciones || []} 
                    planetColor="#FFB800" 
                    subtitleOverride="PROTOCOLO DE PREPARACIÓN"
                    titleOverride={onboardingData?.[planetObj?.onboardingIdx || 0]?.label || "NAVE DE ONBOARDING"}
                    onBack={() => setViewMode('map')} 
                    tick={tick}
                    planetLabel="NAVE DE ONBOARDING"
                    sectorLabel="PROTOCOLO DE PREPARACIÓN"
                    onTrackEvent={onTrackEvent}
                />
            )}

            {/* Background HUD Accents */}
            {viewMode === 'map' && (
                <>
                    <div style={{ position: 'fixed', bottom: 40, left: 40, zIndex: 5, pointerEvents: 'none', opacity: 0.4 }}>
                        <div style={{ width: 80, height: 80, borderLeft: `3px solid ${planetColor}`, borderBottom: `3px solid ${planetColor}` }} />
                    </div>
                    <div style={{ position: 'fixed', bottom: 40, right: 40, zIndex: 5, pointerEvents: 'none', opacity: 0.4 }}>
                        <div style={{ width: 80, height: 80, borderRight: `3px solid ${planetColor}`, borderBottom: `3px solid ${planetColor}`, marginLeft: 'auto' }} />
                    </div>
                </>
            )}

            {/* IARA CONGRATS OVERLAY */}
            <AnimatePresence>
                {showCongrats && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ 
                            position: 'fixed', inset: 0, zIndex: 20000, 
                            background: '#000',
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}
                    >
                        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 50%, rgba(27,0,136,0.15) 0%, transparent 60%)', pointerEvents: 'none' }} />
                        
                        <div style={{ 
                            width: '100%', maxWidth: '1400px', display: 'flex', alignItems: 'center', gap: 80, padding: '0 80px',
                            position: 'relative', zIndex: 10
                        }}>
                            {/* MISSÃO SIDE */}
                            <motion.div 
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                style={{ flex: 1, display: 'flex', justifyContent: 'center' }}
                            >
                                <div style={{ position: 'relative', width: '100%', maxWidth: '420px' }}>
                                    <div style={{ position: 'absolute', inset: -60, borderRadius: '50%', background: `radial-gradient(circle, ${planetColor}11 0%, transparent 70%)`, filter: 'blur(50px)' }} />
                                    <AnimatedIaraOverlay />
                                    {/* Scanline overlay for tactical feel */}
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.03), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.03))', backgroundSize: '100% 4px, 3px 100%', pointerEvents: 'none' }} />
                                </div>
                            </motion.div>

                            {/* TEXT SIDE */}
                            <motion.div 
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                style={{ flex: 1, textAlign: 'left' }}
                            >
                                <div style={{ 
                                    fontSize: 14, color: planetColor, fontWeight: 900, letterSpacing: '8px', marginBottom: 24, 
                                    textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 20,
                                    textShadow: `0 0 12px ${planetColor}aa`
                                }}>
                                    <div style={{ width: 40, height: 2, background: planetColor, boxShadow: `0 0 10px ${planetColor}` }} /> MISSÃO CUMPRIDA
                                </div>
                                
                                <div style={{ display: 'flex', alignItems: 'center', gap: 40, marginBottom: 32 }}>
                                    <motion.img 
                                        initial={{ scale: 0, rotate: -20 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{ type: 'spring', damping: 12, stiffness: 100, delay: 0.7 }}
                                        src="/escudos/YODA_Escudo_PT1.png" 
                                        alt="Escudo" 
                                        style={{ width: '150px', height: 'auto', filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.15))' }} 
                                    />
                                    <div style={{ fontSize: 64, fontWeight: 900, color: '#fff', lineHeight: 1.1, letterSpacing: '-1px' }}>
                                        PARABÉNS,<br/>GUARDIÃO!
                                    </div>
                                </div>
                                
                                <div style={{ 
                                    height: '4px', width: '100px', background: planetColor, marginBottom: 40, borderRadius: 2,
                                    boxShadow: `0 0 15px ${planetColor}, 0 0 5px ${planetColor}`
                                }} />

                                <div style={{ fontSize: 20, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 60, fontWeight: 500 }}>
                                    Você concluiu com sucesso todos os protocolos atribuídos a <span style={{ color: '#fff', fontWeight: 900, borderBottom: `2px solid ${planetColor}` }}>{planetLabel}</span>. 
                                    Seu desempenho foi registrado no núcleo central da estação.
                                </div>

                                <button 
                                    onClick={() => setShowCongrats(false)}
                                    style={{ 
                                        background: planetColor, color: '#fff', border: 'none', 
                                        padding: '20px 60px', borderRadius: '4px', fontWeight: 900, fontSize: 14, 
                                        cursor: 'pointer', letterSpacing: '4px', textTransform: 'uppercase',
                                        transition: '0.3s', boxShadow: `0 10px 30px ${planetColor}44`
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = `0 15px 40px ${planetColor}66`;
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = `0 10px 30px ${planetColor}44`;
                                    }}
                                >
                                    VOLTAR AO SETOR
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

