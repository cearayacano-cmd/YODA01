import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wrench, BookOpen, Settings, Hexagon, Network, Microscope, Package, Box, Radar, Activity, Cpu, ArrowLeft, Zap, Target, Info, ExternalLink, X, CheckCircle2, Lightbulb, Rocket, Shield, Award, Star } from 'lucide-react';

const Stars = () => (
  <div className="stars-container" style={{ position: 'fixed', inset: 0, pointerEvents: 'none' }}>
    {[...Array(80)].map((_, i) => (
      <div
        key={i}
        className="star"
        style={{
          position: 'absolute',
          width: (Math.random() * 2 + 0.5) + 'px',
          height: (Math.random() * 2 + 0.5) + 'px',
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%',
          background: '#ffffff',
          borderRadius: '50%',
          opacity: Math.random(),
          animation: `twinkle ${Math.random() * 5 + 3}s ease-in-out infinite`,
          animationDelay: `-${Math.random() * 5}s`
        }}
      />
    ))}
  </div>
);

const MapBackground = () => (
  <div style={{ position: 'fixed', inset: 0, backgroundColor: '#0F004F', zIndex: 0, overflow: 'hidden' }}>
    {/* Dynamic Tactical Glows */}
    <div style={{ position: 'absolute', top: '5%', left: '15%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(27,0,136,0.3) 0%, transparent 70%)', filter: 'blur(100px)', animation: 'dataPulse 12s ease-in-out infinite' }} />
    <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0,214,204,0.15) 0%, transparent 70%)', filter: 'blur(80px)', animation: 'dataPulse 15s ease-in-out infinite alternate' }} />
    
    {/* Vector Tactical Grid */}
    <div style={{ 
      position: 'absolute', inset: 0, 
      backgroundImage: `
        linear-gradient(rgba(0,214,204,0.05) 1px, transparent 1px), 
        linear-gradient(90deg, rgba(0,214,204,0.05) 1px, transparent 1px)
      `, 
      backgroundSize: '100px 100px',
      maskImage: 'radial-gradient(circle at center, black 40%, transparent 95%)'
    }} />

    {/* Twinkly Stars Background */}
    <Stars />

    {/* Moon Surface (Lunar Base) */}
    <div style={{
      position: 'absolute',
      bottom: '-600px',
      left: '-10%',
      width: '120%',
      height: '700px',
      background: 'radial-gradient(circle at 50% 0%, #E2E8F0 0%, #94A3B8 20%, #475569 50%, #0F172A 100%)',
      borderRadius: '50%',
      boxShadow: '0 -20px 100px rgba(226,232,240,0.2), inset 0 20px 50px rgba(255,255,255,0.1)',
      zIndex: 1,
      opacity: 0.8,
      display: 'flex',
      justifyContent: 'center'
    }}>
      {/* Craters with more depth */}
      {[...Array(15)].map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          top: `${Math.random() * 180}px`,
          left: `${5 + Math.random() * 90}%`,
          width: `${30 + Math.random() * 100}px`,
          height: `${15 + Math.random() * 50}px`,
          background: 'rgba(0,0,0,0.2)',
          borderRadius: '50%',
          boxShadow: 'inset 4px 4px 12px rgba(0,0,0,0.4), 1px 1px 2px rgba(255,255,255,0.05)',
          transform: `rotate(${Math.random() * 360}deg)`,
          opacity: 0.6
        }} />
      ))}
    </div>

    <style>{`
      @keyframes twinkle {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.2); }
      }
      @keyframes dataPulse { 0%, 100% { opacity: 0.4; transform: scale(1); } 50% { opacity: 0.8; transform: scale(1.1); } }
      @keyframes pathFlow { from { stroke-dashoffset: 100; stroke-opacity: 0.4; } to { stroke-dashoffset: 0; stroke-opacity: 0.8; } }
      @keyframes hologramRotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    `}</style>
  </div>
);

const HUD = ({ level, xp, totalXp, activePowers, onBack }: any) => (
  <div style={{ position: 'sticky', top: 0, background: 'rgba(15, 0, 79, 0.95)', backdropFilter: 'blur(20px)', borderBottom: '2px solid #00D6CC', padding: '14px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 100, boxShadow: '0 4px 30px rgba(0,0,0,0.3)' }}>
    <button onClick={onBack} style={{ background: 'transparent', border: '1.5px solid rgba(0,214,204,0.4)', color: '#00D6CC', padding: '8px 18px', borderRadius: '4px', cursor: 'pointer', fontSize: '10px', fontWeight: 900, letterSpacing: '2px', textTransform: 'uppercase', transition: '0.3s' }} onMouseEnter={e => { e.currentTarget.style.background = '#00D6CC'; e.currentTarget.style.color = '#0F004F'; }}>
      ← SALIR AL ESPACIO
    </button>
    
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '8px', color: '#ED1650', letterSpacing: '4px', fontWeight: 900, textTransform: 'uppercase', marginBottom: '2px' }}>TERMINAL DE EXPLORACIÓN ESTRATÉGICA</div>
      <div style={{ 
        fontSize: '28px', 
        fontWeight: 900, 
        letterSpacing: '2px', 
        background: 'linear-gradient(to bottom, #FFFFFF 0%, #D1D5DB 40%, #9CA3AF 50%, #4B5563 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.2))',
        textTransform: 'uppercase'
      }}>
        RUTA DEL <span style={{ 
          background: 'linear-gradient(to bottom, #FFE017 0%, #FFD700 40%, #FF8A00 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 0 10px rgba(255,224,23,0.3))'
        }}>LÍDER GUARDIÁN</span>
      </div>
    </div>

    <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
      <div style={{ border: '2.5px solid #00D6CC', borderRadius: '8px', padding: '6px 16px', textAlign: 'center', minWidth: '80px', background: 'rgba(0,214,204,0.05)' }}>
        <div style={{ fontSize: '8px', color: '#00D6CC', fontWeight: 900 }}>NIVEL</div>
        <div style={{ fontSize: '22px', color: '#fff', fontWeight: 900 }}>{level}</div>
      </div>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: 'rgba(255,255,255,0.6)', fontWeight: 800, marginBottom: '6px' }}>
          <span>PROGRESO DE COMPRENSIÓN</span>
          <span style={{ color: '#00D6CC' }}>{xp} / {totalXp} XP</span>
        </div>
        <div style={{ width: '160px', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden' }}>
          <div style={{ width: `${(xp / totalXp) * 100}%`, height: '100%', background: 'linear-gradient(90deg, #00D6CC, #4257E8)', boxShadow: '0 0 10px #00D6CC', transition: 'width 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }} />
        </div>
      </div>
    </div>
  </div>
);

const PowerNode = ({ p, index, isCompleted, onOpen }: any) => {
  const isLeft = index % 2 === 0;
  const color = isCompleted ? '#A4FF00' : p.color;

  return (
    <div style={{ position: 'relative', height: '360px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '100%', maxWidth: '1200px', display: 'flex', flexDirection: isLeft ? 'row' : 'row-reverse', alignItems: 'center', padding: '0 5%' }}>
        
        {/* Planet Center (Holographic Pro Look) */}
        <div style={{ width: '120px', height: '120px', position: 'relative', zIndex: 5, flexShrink: 0 }}>
          <div style={{ 
            position: 'absolute', inset: -15, borderRadius: '50%', border: `1px dashed ${color}44`, 
            animation: 'hologramRotate 20s linear infinite', borderTop: `2px solid ${color}` 
          }} />
          <div 
            className="planet-float"
            style={{ 
              width: '120px', height: '120px', borderRadius: '50%', 
              background: `radial-gradient(circle at 35% 35%, ${color}, #0F004F)`, 
              boxShadow: `0 0 40px ${color}33, inset -15px -15px 30px rgba(0,0,0,0.6)`, 
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '50px', cursor: 'pointer', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onClick={() => onOpen(p.name)}
          >
            {p.icon}
          </div>
        </div>

        {/* Info Card (Professional Glassmorphism) */}
        <div style={{ 
          width: '420px', background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(15px)', 
          border: '1.5px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px',
          padding: '28px', margin: isLeft ? '0 0 0 80px' : '0 80px 0 0', position: 'relative', zIndex: 5,
          boxShadow: '0 15px 35px rgba(0,0,0,0.5)'
        }}>
          <div style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: '2px', background: color }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: isCompleted ? '#99CC33' : color }} />
              <span style={{ fontSize: '10px', fontWeight: 900, color: isCompleted ? '#99CC33' : 'rgba(255,255,255,0.4)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                {isCompleted ? 'ADQUIRIDO' : 'ACCESO DISPONIBLE'}
              </span>
            </div>
          </div>
          <div style={{ fontSize: '24px', fontWeight: 900, color: '#fff', marginBottom: '10px', letterSpacing: '-0.01em' }}>{p.name}</div>
          <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6', marginBottom: '24px', fontWeight: 500 }}>{p.desc}</div>
          
          <div style={{ display: 'flex', gap: '16px', marginBottom: '28px' }}>
            <div style={{ flex: 1, padding: '12px', background: 'rgba(15, 0, 79, 0.4)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ fontSize: '22px', fontWeight: 900, color: '#fff' }}>{p.nodos}</div>
              <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.4)', fontWeight: 800, letterSpacing: '1px' }}>MÓDULOS</div>
            </div>
            <div style={{ flex: 1, padding: '12px', background: 'rgba(15, 0, 79, 0.4)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ fontSize: '22px', fontWeight: 900, color: '#fff' }}>{p.time.toUpperCase()}</div>
              <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.4)', fontWeight: 800, letterSpacing: '1px' }}>DURACIÓN</div>
            </div>
          </div>

          <button 
            onClick={() => onOpen(p.name)}
            style={{ 
              width: '100%', padding: '16px', background: isCompleted ? '#99CC33' : '#1B0088', 
              color: '#fff', border: isCompleted ? 'none' : '1px solid #00D6CC', borderRadius: '10px',
              fontWeight: 900, fontSize: '13px', letterSpacing: '1.5px', cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: isCompleted ? '0 10px 20px rgba(153,204,51,0.2)' : '0 10px 20px rgba(27,0,136,0.3)'
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = isCompleted ? '0 15px 25px rgba(153,204,51,0.3)' : '0 15px 25px rgba(27,0,136,0.5)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = isCompleted ? '0 10px 20px rgba(153,204,51,0.2)' : '0 10px 20px rgba(27,0,136,0.3)' }}
          >
            {isCompleted ? 'REVISAR CONTENIDO' : 'INICIAR EXPLORACIÓN'}
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Power Discovery Terminal (Detailed View) ---
const PowerDiscoveryTerminal = ({ p, nodes, onBack, onComplete }: any) => {
  const [checked, setChecked] = useState(new Set());

  const toggleCheck = (idx: number) => {
    const next = new Set(checked);
    if (next.has(idx)) next.delete(idx);
    else next.add(idx);
    setChecked(next);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      style={{ 
        position: 'fixed', inset: 0, backgroundColor: '#F8F7FF', zIndex: 9999,
        display: 'flex', flexDirection: 'column', overflow: 'hidden',
        color: '#1B0088', fontFamily: '"Inter", sans-serif'
      }}
    >
      {/* Background Decal */}
      <div style={{ position: 'absolute', bottom: -100, left: -100, width: 600, height: 600, background: `radial-gradient(circle, ${p.color}08 0%, transparent 70%)`, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, inset: 0, backgroundImage: 'linear-gradient(rgba(27,0,136,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(27,0,136,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />

      {/* Top Professional Header (Azul LATAM) */}
      <div style={{ 
        height: '90px', background: '#1B0088', borderBottom: '2px solid rgba(255,255,255,0.1)',
        display: 'flex', alignItems: 'center', padding: '0 60px', gap: 40, zIndex: 10,
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
      }}>
        <button onClick={onBack} style={{ 
          background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '10px 24px', 
          borderRadius: 6, cursor: 'pointer', fontSize: 11, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 12,
          textTransform: 'uppercase', letterSpacing: '1px', transition: 'all 0.2s'
        }} onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#1B0088' }} onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff' }}>
          <ArrowLeft size={16} /> MAPA GALÁCTICO
        </button>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ width: 56, height: 56, borderRadius: 14, background: p.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30, boxShadow: `0 10px 20px rgba(0,0,0,0.2)`, color: '#fff' }}>
            {p.icon}
          </div>
          <div>
            <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.6)', fontWeight: 900, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: 2 }}>MÓDULO DE APRENDIZAJE</div>
            <div style={{ fontSize: 26, fontWeight: 900, letterSpacing: '-0.01em', color: '#FFF' }}>{p.name.toUpperCase()}</div>
          </div>
        </div>

        <div style={{ marginLeft: 'auto', display: 'flex', gap: 48, alignItems: 'center' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', fontWeight: 800 }}>ESTADO</div>
            <div style={{ fontSize: 13, color: '#99CC33', fontWeight: 900, display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'flex-end' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#99CC33' }} /> EXPLORACIÓN ACTIVA
            </div>
          </div>
          <div style={{ height: 40, width: 1, background: 'rgba(255,255,255,0.2)' }} />
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', fontWeight: 800 }}>DURACIÓN</div>
            <div style={{ fontSize: 13, color: '#FFF', fontWeight: 900 }}>{p.time}</div>
          </div>
        </div>
      </div>

      {/* Content Area (Professional Light Look) */}
      <div style={{ flex: 1, padding: '40px 60px', overflowY: 'auto', zIndex: 10, display: 'grid', gridTemplateColumns: '1fr 380px', gap: 60, maxWidth: '1600px', margin: '0 auto', width: '100%' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {nodes.map((node: any, idx: number) => (
            <motion.div 
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: idx * 0.08 }}
              key={idx} 
              style={{ 
                background: '#FFFFFF', 
                border: checked.has(idx) ? '2px solid #99CC33' : '1px solid #E2E8F0', 
                borderRadius: 20, padding: '32px 40px',
                display: 'grid', gridTemplateColumns: '50px 1fr 180px', gap: 40, alignItems: 'start',
                position: 'relative', boxShadow: checked.has(idx) ? '0 10px 30px rgba(153,204,51,0.1)' : '0 4px 20px rgba(0,0,0,0.03)', 
                transition: 'all 0.3s'
              }}
            >
              {/* Check Validator */}
              <div 
                onClick={() => toggleCheck(idx)}
                style={{ 
                  position: 'absolute', top: 20, right: 20, cursor: 'pointer',
                  color: checked.has(idx) ? '#99CC33' : '#E2E8F0',
                  transition: '0.2s',
                  zIndex: 10
                }}
              >
                <CheckCircle2 size={24} fill={checked.has(idx) ? '#99CC3322' : 'transparent'} />
              </div>

              {/* Node Index */}
              <div style={{ fontSize: 42, fontWeight: 900, color: checked.has(idx) ? '#99CC3333' : '#E2E8F0', lineHeight: 1, fontStyle: 'italic', transition: '0.2s' }}>
                {(idx + 1).toString().padStart(2, '0')}
              </div>

              {/* Node Details */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: p.color }} />
                  <div style={{ fontSize: 20, fontWeight: 900, color: '#1B0088', letterSpacing: '-0.01em' }}>{node.tema}</div>
                </div>
                <div style={{ fontSize: 15, color: '#4D4D4D', lineHeight: 1.7, fontWeight: 500 }}>
                  {node.desc}
                </div>
                
                {/* Discreet Tip (Professional Approach) */}
                {node.consejo && node.consejo !== '-' && (
                  <div style={{ 
                    marginTop: 20, padding: '14px 20px', background: '#FFFBEB', border: '1px solid #FDE68A', 
                    borderRadius: 12, display: 'flex', gap: 14, alignItems: 'center'
                  }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#FFE017', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Lightbulb size={14} color="#0F004F" />
                    </div>
                    <div style={{ fontSize: 13, color: '#78350F', fontWeight: 600, fontStyle: 'italic' }}>
                      <span style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: 10, color: '#B45309', display: 'block', marginBottom: 2 }}>Consejo Estratégico</span>
                      {node.consejo}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {node.adjunto && node.adjunto !== '#' ? (
                  <a href={node.adjunto} target="_blank" rel="noopener noreferrer" style={{
                    background: '#1B0088', color: '#fff', border: 'none', padding: '12px 20px', borderRadius: 8, fontWeight: 900, fontSize: 11,
                    textDecoration: 'none', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, 
                    boxShadow: '0 4px 12px rgba(27,0,136,0.2)', transition: '0.2s'
                  }} onMouseEnter={e => e.currentTarget.style.background = '#0F004F'} onMouseLeave={e => e.currentTarget.style.background = '#1B0088'}>
                    ABRIR RECURSO <ExternalLink size={14} />
                  </a>
                ) : (
                  <div style={{ 
                    background: '#F1F5F9', color: '#94A3B8', padding: '12px 20px', borderRadius: 8, fontWeight: 800, fontSize: 10,
                    textAlign: 'center', border: '1px dashed #CBD5E1', textTransform: 'uppercase'
                  }}>
                    No disponible
                  </div>
                )}
                <div style={{ fontSize: 9, color: '#B8B8B8', fontWeight: 800, letterSpacing: '1px', textAlign: 'center', textTransform: 'uppercase' }}>
                   Ref. LAT-X{idx + 10}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 24, padding: 40, boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
              <Zap size={20} color="#ED1650" />
              <div style={{ fontWeight: 900, fontSize: 13, letterSpacing: '1.5px', color: '#0F004F' }}>RESUMEN DE PODER</div>
            </div>
            <div style={{ fontSize: 15, color: '#4D4D4D', lineHeight: 1.8, marginBottom: 30, fontWeight: 500 }}>
              {p.desc}
            </div>
            <div style={{ height: '1.5px', background: '#F1F5F9', marginBottom: 30 }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
              <span style={{ fontSize: 12, color: '#858585', fontWeight: 600 }}>Total de Módulos</span>
              <span style={{ fontSize: 13, fontWeight: 900, color: '#1B0088' }}>{nodes.length} Nódulos</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 40 }}>
              <span style={{ fontSize: 12, color: '#858585', fontWeight: 600 }}>Certificación</span>
              <span style={{ fontSize: 13, fontWeight: 900, color: '#1B0088' }}>{p.time.toUpperCase()}</span>
            </div>
            <button 
              onClick={() => { onComplete(); onBack(); }}
              style={{ 
                width: '100%', background: '#99CC33', color: '#fff', border: 'none', padding: '18px', borderRadius: 12, fontWeight: 900, fontSize: 14,
                cursor: 'pointer', boxShadow: '0 10px 25px rgba(153,204,51,0.3)', transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(153,204,51,0.4)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(153,204,51,0.3)' }}
            >
              MARCAR COMO COMPLETADO
            </button>
          </div>

          <div style={{ background: '#0F004F', borderRadius: 24, padding: 36, position: 'relative', overflow: 'hidden' }}>
             <div style={{ position: 'absolute', top: -30, right: -30, fontSize: 140, opacity: 0.05, transform: 'rotate(-20deg)' }}>{p.icon}</div>
             <div style={{ fontWeight: 900, fontSize: 11, color: '#00D6CC', letterSpacing: '2px', marginBottom: 16 }}>SOPORTE INTELIGENTE</div>
             <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, fontStyle: 'italic', position: 'relative', zIndex: 1 }}>
               "Los conceptos JETS vinculan la cultura LATAM con la excelencia operativa. Mantenga el enfoque en la mirada del líder."
             </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export const RutaLiderView = ({ links, rutaData, onBack }: any) => {
  const [completed, setCompleted] = useState(new Set());
  const [selectedPower, setSelectedPower] = useState<any>(null);
  
  // Dynamic Grouping Logic for the Map
  const poderNames = [...new Set((rutaData || []).map((d: any) => d.poder))];
  
  const mapConfig = poderNames.map((name, idx) => {
    const nodesInPower = (rutaData || []).filter((d: any) => d.poder === name);
    // Fixed aesthetics by position to maintain WOW factor
    const aesthetics = [
      { color: '#ED1650', icon: <Zap size={40} /> },
      { color: '#99CC33', icon: <Target size={40} /> },
      { color: '#00D6CC', icon: <Shield size={40} /> },
      { color: '#662D91', icon: <Award size={40} /> },
      { color: '#1B0088', icon: <Star size={40} /> }
    ];
    const aesthetic = aesthetics[idx % aesthetics.length];
    
    return {
      name: name,
      color: aesthetic.color,
      icon: aesthetic.icon,
      nodos: nodesInPower.length,
      time: nodesInPower[0]?.tiempo || 'N/A',
      desc: nodesInPower[0]?.desc || 'Contenido del poder'
    };
  });

  const handleOpenPower = (name: string) => {
    const p = mapConfig.find(p => p.name === name);
    if(p) setSelectedPower(p);
  };

  const markCompleted = (name: string) => {
    setCompleted(prev => new Set([...prev, name]));
  };

  const xp = [...completed].reduce((acc, name) => {
    const p = mapConfig.find(p => p.name === name);
    return acc + (p ? p.nodos * 30 : 0);
  }, 0);
  
  const totalXp = mapConfig.reduce((acc, p) => acc + (p.nodos * 30), 0);
  const level = Math.floor(xp / 200);

  return (
    <div style={{ minHeight: '100vh', position: 'relative', color: '#fff', fontFamily: 'inherit' }}>
      <MapBackground />
      <HUD level={level} xp={xp} totalXp={totalXp} activePowers={completed.size} onBack={onBack} />
      
      <div style={{ position: 'relative', paddingTop: '40px', paddingBottom: '100px', overflowY: 'auto', overflowX: 'hidden' }}>
        {/* Banner Pill */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '60px' }}>
          <div style={{ 
            background: 'rgba(3, 5, 15, 0.6)', backdropFilter: 'blur(10px)', border: '1px solid #FFD700', borderRadius: '30px', padding: '10px 32px',
            fontSize: '11px', fontWeight: 900, color: '#FFD700', letterSpacing: '2px', boxShadow: '0 0 20px rgba(255,215,0,0.2)'
          }}>
            🗺️ ELIGE TU CAMINO · TODOS LOS PODERES DISPONIBLES ✨
          </div>
        </div>

        {/* The Map */}
        <div style={{ position: 'relative', maxWidth: '1400px', margin: '0 auto' }}>
          {/* Path SVG */}
          <svg 
            viewBox={`0 0 1000 ${mapConfig.length * 320}`}
            preserveAspectRatio="none"
            style={{ position: 'absolute', top: '50px', left: 0, width: '100%', height: `${mapConfig.length * 320}px`, pointerEvents: 'none', zIndex: 1 }}
          >
            <defs>
              {mapConfig.map((p, i) => (
                i < mapConfig.length - 1 && (
                  <linearGradient key={`grad-${i}`} id={`grad-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor={p.color} />
                    <stop offset="100%" stopColor={mapConfig[i+1].color} />
                  </linearGradient>
                )
              ))}
              <filter id="pathGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            
            {/* Segments */}
            {mapConfig.map((p, i) => {
              if (i === mapConfig.length - 1) return null;
              const y1 = i * 320 + 160; 
              const y2 = (i + 1) * 320 + 160;
              const isP1Left = i % 2 === 0;
              
              // Coordinates relative to 1000px viewBox width
              const startX = isP1Left ? 200 : 800;
              const endX = isP1Left ? 800 : 200;
              const cpX1 = isP1Left ? 900 : 100;
              const cpX2 = isP1Left ? 900 : 100;
              
              const d = `M ${startX} ${y1} C ${cpX1} ${y1}, ${cpX2} ${y2}, ${endX} ${y2}`;
              
              return (
                <path key={`path-${i}`} d={d} stroke={`url(#grad-${i})`} strokeWidth="8" fill="none" 
                      strokeDasharray="20 20" filter="url(#pathGlow)" style={{ animation: 'pathFlow 4s linear infinite' }} />
              );
            })}
          </svg>

          {/* Node Components */}
          {mapConfig.map((poder, i) => (
            <PowerNode key={poder.name} p={poder} index={i} isCompleted={completed.has(poder.name)} onOpen={handleOpenPower} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPower && (
          <PowerDiscoveryTerminal 
            p={selectedPower} 
            nodes={(rutaData || []).filter((r: any) => r.poder === selectedPower.name)}
            onBack={() => setSelectedPower(null)}
            onComplete={() => markCompleted(selectedPower.name)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export const TechBaseView = ({ 
  title, 
  subtitle, 
  links, 
  onBack, 
  themeColor, 
  heroIcon, 
  listIcon, 
  children,
  headerTitle = "SEC-A2 · ENGINEERING",
  footerTitle = "TERMINAL DE INGENIERÍA",
  topDecalLeft = "Universo Training",
  topDecalRight = "Customer Care & Sales",
  sideDecalLeft = "Guardianes",
  sideDecalRight = "Capacitación",
  description = "Accedé a manuales técnicos, guías de procedimientos y recursos de soporte para operaciones."
}: any) => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#F8F7FF', 
      color: '#0B0033', 
      fontFamily: '"Orbitron", sans-serif', 
      position: 'relative', 
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Base Grid */}
      <div style={{ 
        position: 'absolute', inset: 0, 
        backgroundImage: `
          linear-gradient(90deg, rgba(11,0,51,0.05) 1px, transparent 1px),
          linear-gradient(0deg, rgba(11,0,51,0.05) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        zIndex: 0
      }} />

      {/* Background Decals */}
      <div style={{ position: 'absolute', top: 100, left: 40, fontSize: 10, color: '#888', fontWeight: 700, letterSpacing: '0.1em', lineHeight: 1.8, zIndex: 1, textTransform: 'uppercase' }}>
        <div>UNIVERSO TRAINING</div>
        <div>CUSTOMER CARE & SALES</div>
      </div>

      {/* Left Vertical Decal */}
      <div style={{ position: 'absolute', top: '40%', left: -30, display: 'flex', alignItems: 'center', gap: 10, transform: 'rotate(-90deg)', transformOrigin: 'center', zIndex: 1 }}>
        <div style={{ width: 40, height: 2, background: themeColor, boxShadow: `0 0 10px ${themeColor}` }} />
        <div style={{ fontSize: 12, fontWeight: 900, color: '#b0b0c0', letterSpacing: '0.2em', textTransform: 'uppercase' }}>GUARDIANES</div>
        <div style={{ width: 40, height: 2, background: themeColor, boxShadow: `0 0 10px ${themeColor}` }} />
      </div>

      {/* Right Vertical Decal */}
      <div style={{ position: 'absolute', top: '40%', right: -40, display: 'flex', alignItems: 'center', gap: 10, transform: 'rotate(90deg)', transformOrigin: 'center', zIndex: 1 }}>
        <div style={{ width: 40, height: 2, background: themeColor, boxShadow: `0 0 10px ${themeColor}` }} />
        <div style={{ fontSize: 12, fontWeight: 900, color: '#b0b0c0', letterSpacing: '0.2em', textTransform: 'uppercase' }}>CAPACITACIÓN</div>
        <div style={{ width: 40, height: 2, background: themeColor, boxShadow: `0 0 10px ${themeColor}` }} />
      </div>

      {/* Header */}
      <div style={{ 
        background: '#0B0033', 
        padding: '16px 32px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        position: 'relative', 
        zIndex: 10,
        borderBottom: '4px solid #FF007F',
        boxShadow: '0 4px 20px rgba(255,0,127,0.3)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
          <button onClick={onBack} style={{ 
            background: '#ffffff', 
            border: 'none', 
            color: '#0B0033', 
            padding: '8px 20px', 
            borderRadius: 4, 
            cursor: 'pointer', 
            fontSize: 14, 
            fontWeight: 900, 
            textTransform: 'uppercase',
            display: 'flex', alignItems: 'center', gap: 8
          }}>
            ← VOLVER
          </button>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: 10, color: '#FF007F', letterSpacing: '0.3em', fontWeight: 900 }}>{headerTitle}</div>
            <div style={{ fontSize: 24, fontWeight: 900, letterSpacing: '0.1em', color: '#ffffff', textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>
              {title}
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{ border: `1px solid #FF007F`, background: 'rgba(11,0,51,0.8)', color: '#FF007F', padding: '6px 16px', borderRadius: 4, fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8, boxShadow: `inset 0 0 10px rgba(255,0,127,0.4)` }}>
            CORE_STATUS: <span style={{ color: '#ffffff' }}>NUEVOS INGRESOS</span>
            <motion.div 
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ width: 6, height: 6, borderRadius: '50%', background: '#00F3FF', boxShadow: '0 0 8px #00F3FF' }} 
            />
          </div>
          <div style={{ border: `1px solid #FF007F`, background: 'rgba(11,0,51,0.8)', color: '#FF007F', padding: '6px 16px', borderRadius: 4, fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8, boxShadow: `inset 0 0 10px rgba(255,0,127,0.4)` }}>
            PÁGINAS PUBLICADAS: <span style={{ color: '#ffffff' }}>{links ? links.length : 0}</span>
          </div>
        </div>
      </div>

      <div style={{ padding: '60px 40px', maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 5, flex: 1, width: '100%' }}>
        
        {/* Hero Section */}
        <div style={{ position: 'relative', marginBottom: 50, width: '100%', maxWidth: 900, margin: '0 auto 50px auto' }}>
          {/* Outer Border Layer (Window Frame) */}
          <div style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(135deg, ${themeColor} 0%, #00F3FF 50%, ${themeColor} 100%)`,
            clipPath: 'polygon(24px 0, calc(100% - 24px) 0, 100% 24px, 100% calc(100% - 24px), calc(100% - 24px) 100%, 24px 100%, 0 calc(100% - 24px), 0 24px)',
            zIndex: 1,
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
          }} />
          
          {/* Inner Background Layer (Window Glass) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ 
              position: 'relative',
              top: 2, left: 2, right: 2, bottom: 2,
              width: 'calc(100% - 4px)', height: 'calc(100% - 4px)',
              background: '#1B0088', 
              clipPath: 'polygon(23px 0, calc(100% - 23px) 0, 100% 23px, 100% calc(100% - 23px), calc(100% - 23px) 100%, 23px 100%, 0 calc(100% - 23px), 0 23px)',
              padding: '36px 48px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: 40, 
              zIndex: 2,
              boxShadow: 'inset 0 0 60px rgba(0,0,0,0.8)'
            }}
          >
            <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
              <Stars />
              {/* Extra Depth Stars for the "Window" */}
              {[...Array(20)].map((_, i) => (
                <motion.div 
                  key={`wstar-${i}`}
                  animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.2, 1] }}
                  transition={{ duration: 3 + Math.random() * 4, repeat: Infinity }}
                  style={{ 
                    position: 'absolute', left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
                    width: 2, height: 2, background: i % 2 === 0 ? '#ffffff' : '#00F3FF', borderRadius: '50%',
                    boxShadow: `0 0 10px ${i % 2 === 0 ? '#fff' : '#00F3FF'}`
                  }}
                />
              ))}
            </div>
            
            <div style={{ position: 'absolute', top: 12, left: 12, width: 6, height: 3, background: '#fff', transform: 'rotate(-45deg)', opacity: 0.8 }} />
            <div style={{ position: 'absolute', top: 12, right: 12, width: 6, height: 3, background: '#fff', transform: 'rotate(45deg)', opacity: 0.8 }} />
            <div style={{ position: 'absolute', bottom: 12, left: 12, width: 6, height: 3, background: '#fff', transform: 'rotate(45deg)', opacity: 0.8 }} />
            <div style={{ position: 'absolute', bottom: 12, right: 12, width: 6, height: 3, background: '#fff', transform: 'rotate(-45deg)', opacity: 0.8 }} />

            {/* Inner Chamfered Icon Box */}
            <div style={{
              width: 110, height: 110,
              position: 'relative',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                background: themeColor,
                clipPath: 'polygon(16px 0, calc(100% - 16px) 0, 100% 16px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 16px 100%, 0 calc(100% - 16px), 0 16px)',
                opacity: 0.9
              }} />
              <div style={{
                position: 'absolute', inset: 2,
                background: '#0B0033',
                clipPath: 'polygon(15px 0, calc(100% - 15px) 0, 100% 15px, 100% calc(100% - 15px), calc(100% - 15px) 100%, 15px 100%, 0 calc(100% - 15px), 0 15px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)'
              }}>
                {heroIcon}
              </div>
            </div>

            {/* Text Content */}
            <div style={{ flex: 1, position: 'relative', zIndex: 5 }}>
              <div style={{ fontSize: 11, color: '#FF007F', letterSpacing: '0.3em', marginBottom: 10, fontWeight: 900, textTransform: 'uppercase' }}>
                MANTENIMIENTO · PROTOCOLOS · SOPORTE
              </div>
              <div style={{ fontSize: 42, fontWeight: 900, marginBottom: 12, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {title}
              </div>
              
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, maxWidth: 600, fontWeight: 500 }}>
                {subtitle || description}
              </div>

              {/* Line Separator */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 20 }}>
                <div style={{ height: 2, background: themeColor, width: '25%' }} />
                <div style={{ height: 2, background: themeColor, width: '12px', transform: 'skewX(-45deg)' }} />
                <div style={{ height: 2, background: themeColor, width: '6px', transform: 'skewX(-45deg)' }} />
                <div style={{ height: 2, background: themeColor, width: '3px', transform: 'skewX(-45deg)' }} />
              </div>
            </div>
          </motion.div>
        </div>

        {children}

        {/* List Section Header */}
        <div style={{ marginBottom: 24, display: 'flex', alignItems: 'center', gap: 20 }}>
          <div>
            <div style={{ fontSize: 11, color: '#FF007F', letterSpacing: '0.2em', marginBottom: 4, fontWeight: 900, textTransform: 'uppercase' }}>REGISTROS TÉCNICOS</div>
            <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: '0.05em', color: '#0B0033', textTransform: 'uppercase' }}>RECURSOS DISPONIBLES</div>
          </div>
          <div style={{ flex: 1, height: 1, background: 'rgba(11,0,51,0.2)', position: 'relative' }}>
            <div style={{ position: 'absolute', left: 20, top: -3, display: 'flex', gap: 10 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: themeColor }} />
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: themeColor }} />
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: themeColor }} />
            </div>
          </div>
        </div>

        {/* List Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {(!links || links.length === 0) ? (
            <div style={{ textAlign: 'center', padding: 60, color: '#888888', border: '2px dashed #cccccc', borderRadius: 8, background: 'rgba(255,255,255,0.5)' }}>
              NO HAY RECURSOS CONFIGURADOS EN ESTA TERMINAL
            </div>
          ) : links.map((link: any, i: number) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.01 }}
              style={{ 
                position: 'relative', 
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                display: 'flex', 
                alignItems: 'center', 
                gap: 24,
                padding: '20px 24px',
                cursor: 'pointer',
                background: '#1B0088', 
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: `1px solid ${themeColor}40`,
                boxShadow: `inset 0 0 20px ${themeColor}10`
              }} 
              onClick={() => link.url !== '#' && window.open(link.url, '_blank')}
            >
              {/* Tactical Corners */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: 12, height: 12, borderTop: `3px solid ${themeColor}`, borderLeft: `3px solid ${themeColor}`, zIndex: 3 }} />
              <div style={{ position: 'absolute', top: 0, right: 0, width: 12, height: 12, borderTop: `3px solid ${themeColor}`, borderRight: `3px solid ${themeColor}`, zIndex: 3 }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: 12, height: 12, borderBottom: `3px solid ${themeColor}`, borderLeft: `3px solid ${themeColor}`, zIndex: 3 }} />
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: 12, height: 12, borderBottom: `3px solid ${themeColor}`, borderRight: `3px solid ${themeColor}`, zIndex: 3 }} />

              {/* ICON SCAN AREA */}
              <div style={{
                width: 80, height: 80,
                background: 'rgba(0,0,0,0.5)',
                borderRadius: '4px',
                position: 'relative',
                border: `1px solid ${themeColor}40`,
                overflow: 'hidden',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
                backgroundImage: `linear-gradient(${themeColor}10 1px, transparent 1px), linear-gradient(90deg, ${themeColor}10 1px, transparent 1px)`,
                backgroundSize: '10px 10px'
              }}>
                {/* SCANNER LINE */}
                <motion.div 
                  animate={{ top: ['0%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: `linear-gradient(90deg, transparent, ${themeColor}, transparent)`,
                    boxShadow: `0 0 15px ${themeColor}`,
                    zIndex: 10,
                    pointerEvents: 'none',
                    opacity: 0.8
                  }}
                />
                <motion.div 
                  animate={{ 
                    filter: [`drop-shadow(0 0 15px ${themeColor})`, `drop-shadow(0 0 8px ${themeColor})`],
                    scale: 1.1
                  }}
                  transition={{ duration: 2, repeat: Infinity, alternate: true }}
                  style={{ color: themeColor, zIndex: 2 }}
                >
                  {listIcon}
                </motion.div>
              </div>

              <div style={{ flex: 1, zIndex: 2 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                  <div style={{ fontSize: 20, fontWeight: 900, color: '#FF007F', opacity: 0.8 }}>{String(i + 1).padStart(2, '0')}</div>
                  <div style={{ fontSize: 18, fontWeight: 900, letterSpacing: '0.02em', color: '#ffffff', textTransform: 'uppercase' }}>{link.label}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 10, fontWeight: 800, color: 'rgba(255,255,255,0.4)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  <div>STATUS: <span style={{ color: '#22c55e' }}>● AVAILABLE</span></div>
                  <div style={{ color: 'rgba(255,255,255,0.1)' }}>|</div>
                  <div>ACCESS: <span style={{ color: '#22c55e' }}>ENABLED</span></div>
                </div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', fontWeight: 500, lineHeight: 1.4 }}>
                  {description}
                </div>
              </div>

              <div style={{
                position: 'relative',
                padding: '10px 20px',
                background: themeColor,
                borderRadius: '4px',
                color: '#ffffff',
                fontSize: 12,
                fontWeight: 900,
                zIndex: 2,
                boxShadow: `0 0 15px ${themeColor}40`
              }}>
                {link.url && link.url !== '#' ? 'ABRIR' : 'SIN ENLACE'}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ 
        background: '#0B0033', 
        padding: '12px 32px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        fontSize: 11, 
        fontWeight: 800, 
        zIndex: 100,
        color: '#ffffff',
        borderTop: '2px solid #FF007F',
        boxShadow: '0 -4px 20px rgba(255,0,127,0.2)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#FF007F', boxShadow: '0 0 10px #FF007F' }} />
          {footerTitle} <span style={{ color: '#666' }}>· LATAM STARSHIP</span>
        </div>
        <div style={{ display: 'flex', gap: 24 }}>
          <div>POWER: <span style={{ color: '#00C853' }}>STABLE</span></div>
          <div style={{ color: '#444' }}>|</div>
          <div>TEMP: <span style={{ color: '#00C853' }}>22°C</span></div>
          <div style={{ color: '#444' }}>|</div>
          <div>AUTH: <span style={{ color: '#00C853' }}>GRANTED</span></div>
        </div>
      </div>
    </div>
  );
};

export const IngenieriaView = ({ links, onBack, title, subtitle }: any) => {
  const themeColor = '#B200FF';
  const heroIcon = (
    <div style={{ position: 'relative', width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
        <Cpu size={48} color={themeColor} strokeWidth={1.5} style={{ filter: `drop-shadow(0 0 12px ${themeColor})` }} />
      </motion.div>
      <Settings size={20} color="#ffffff" style={{ position: 'absolute', bottom: 5, right: 5, filter: 'drop-shadow(0 0 5px #ffffff)' }} />
    </div>
  );
  
  return (
    <TechBaseView
      title={title || 'TALLER TÉCNICO'}
      subtitle={subtitle}
      links={links}
      onBack={onBack}
      themeColor={themeColor}
      heroIcon={heroIcon}
      listIcon={<Cpu size={36} color="#ffffff" style={{ filter: `drop-shadow(0 0 8px ${themeColor})` }} strokeWidth={1.5} />}
      headerTitle="MANTENIMIENTO · PROTOCOLOS · SOPORTE"
      footerTitle="TALLER TÉCNICO"
    />
  );
};

export const LaboratorioView = ({ links, rutaData, onBack, onNavigateRuta, title, subtitle }: any) => {
  const themeColor = '#99CC33';
  const heroIcon = (
    <div style={{ position: 'relative', width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div animate={{ y: [0, -5, 0], opacity: [0.8, 1, 0.8] }} transition={{ duration: 3, repeat: Infinity }}>
        <Microscope size={48} color={themeColor} strokeWidth={1.5} style={{ filter: `drop-shadow(0 0 12px ${themeColor})` }} />
      </motion.div>
      <motion.div animate={{ scale: [0.9, 1.1, 0.9] }} transition={{ duration: 2, repeat: Infinity }}>
        <Activity size={20} color="#ffffff" style={{ position: 'absolute', bottom: 5, right: 5, filter: 'drop-shadow(0 0 6px #ffffff)' }} />
      </motion.div>
    </div>
  );

  return (
    <TechBaseView
      title={title || 'LAB. DE ESTRATEGIA'}
      subtitle={subtitle || 'Portal de líderes, expediciones de formación y análisis de datos en tiempo real.'}
      links={links}
      onBack={onBack}
      themeColor={themeColor}
      heroIcon={heroIcon}
      listIcon={<Microscope size={36} color="#ffffff" style={{ filter: `drop-shadow(0 0 8px ${themeColor})` }} strokeWidth={1.5} />}
      headerTitle="MANTENIMIENTO · PROTOCOLOS · SOPORTE"
      footerTitle="LABORATORIO DE ESTRATEGIA"
      topDecalLeft="ESTRATEGIA"
      topDecalRight="LIDERAZGO"
      sideDecalLeft="ANÁLISIS"
      sideDecalRight="DATOS"
    >
      {rutaData && rutaData.length > 0 && (
        <motion.div
          whileHover={{ scale: 1.01 }}
          style={{ 
            position: 'relative', 
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            display: 'flex', 
            alignItems: 'center', 
            gap: 24,
            padding: '20px 24px',
            cursor: 'pointer',
            background: '#1B0088',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: `1px solid ${themeColor}40`,
            boxShadow: `inset 0 0 20px ${themeColor}10`,
            marginBottom: 32
          }} 
          onClick={onNavigateRuta}
        >
          {/* Tactical Corners */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: 12, height: 12, borderTop: `3px solid ${themeColor}`, borderLeft: `3px solid ${themeColor}`, zIndex: 3 }} />
          <div style={{ position: 'absolute', top: 0, right: 0, width: 12, height: 12, borderTop: `3px solid ${themeColor}`, borderRight: `3px solid ${themeColor}`, zIndex: 3 }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: 12, height: 12, borderBottom: `3px solid ${themeColor}`, borderLeft: `3px solid ${themeColor}`, zIndex: 3 }} />
          <div style={{ position: 'absolute', bottom: 0, right: 0, width: 12, height: 12, borderBottom: `3px solid ${themeColor}`, borderRight: `3px solid ${themeColor}`, zIndex: 3 }} />

          <div style={{
            width: 80, height: 80,
            background: 'rgba(0,0,0,0.5)',
            borderRadius: '4px',
            position: 'relative',
            border: `1px solid ${themeColor}40`,
            overflow: 'hidden',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
            backgroundImage: `linear-gradient(${themeColor}10 1px, transparent 1px), linear-gradient(90deg, ${themeColor}10 1px, transparent 1px)`,
            backgroundSize: '10px 10px'
          }}>
            {/* SCANNER LINE */}
            <motion.div 
              animate={{ top: ['0%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                height: '2px',
                background: `linear-gradient(90deg, transparent, ${themeColor}, transparent)`,
                boxShadow: `0 0 15px ${themeColor}`,
                zIndex: 10,
                pointerEvents: 'none',
                opacity: 0.8
              }}
            />
            <motion.div 
              animate={{ 
                filter: [`drop-shadow(0 0 20px ${themeColor})`, `drop-shadow(0 0 10px ${themeColor})`],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ color: themeColor, zIndex: 2 }}
            >
              <Rocket size={36} color="currentColor" strokeWidth={1.5} />
            </motion.div>
          </div>

          <div style={{ flex: 1, zIndex: 2 }}>
            <div style={{ fontSize: 10, color: themeColor, letterSpacing: '0.2em', fontWeight: 900, marginBottom: 4, textShadow: `0 0 8px ${themeColor}` }}>PROGRAMA FORMATIVO · CAPA LIDERAZGO</div>
            <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: '0.02em', color: '#ffffff', textTransform: 'uppercase', marginBottom: 8 }}>RUTA DEL LÍDER GUARDIÁN</div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>
              {rutaData.length} Nodos · Mapa Visual Interactivo
            </div>
          </div>

          <div style={{
            position: 'relative',
            padding: '10px 20px',
            background: themeColor,
            borderRadius: '4px',
            color: '#ffffff',
            fontSize: 12,
            fontWeight: 900,
            zIndex: 2,
            boxShadow: `0 0 15px ${themeColor}40`
          }}>
            ABRIR MAPA
          </div>
        </motion.div>
      )}
    </TechBaseView>
  );
};

export const SuministrosView = ({ links, onBack, title, subtitle }: any) => {
  const themeColor = '#00D6CC';
  const heroIcon = (
    <div style={{ position: 'relative', width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
        <Package size={48} color={themeColor} strokeWidth={1.5} style={{ filter: `drop-shadow(0 0 12px ${themeColor})` }} />
      </motion.div>
      <Box size={20} color="#ffffff" style={{ position: 'absolute', bottom: 10, right: 10, filter: 'drop-shadow(0 0 5px #ffffff)' }} />
    </div>
  );

  return (
    <TechBaseView
      title={title || 'MÓDULO SUMINISTROS'}
      subtitle={subtitle || 'Gestión de recursos, formularios operativos y control de inventario.'}
      links={links}
      onBack={onBack}
      themeColor={themeColor}
      heroIcon={heroIcon}
      listIcon={<Package size={36} color="#ffffff" style={{ filter: `drop-shadow(0 0 8px ${themeColor})` }} strokeWidth={1.5} />}
      headerTitle="MANTENIMIENTO · PROTOCOLOS · SOPORTE"
      footerTitle="MÓDULO SUMINISTROS"
      description="Formularios de solicitud, inventario y recursos logísticos."
    />
  );
};

export const OperacionesView = ({ links, onBack, title, subtitle }: any) => {
  const themeColor = '#FFE017';
  const heroIcon = (
    <div style={{ position: 'relative', width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
        <Radar size={48} color={themeColor} strokeWidth={1.5} style={{ filter: `drop-shadow(0 0 12px ${themeColor})` }} />
      </motion.div>
      <Activity size={24} color="#ffffff" style={{ position: 'absolute', filter: 'drop-shadow(0 0 5px #ffffff)' }} />
    </div>
  );

  return (
    <TechBaseView
      title={title || 'CENTRO DE OPERACIONES'}
      subtitle={subtitle || 'Monitoreo en tiempo real, portal de instructores y control de misiones.'}
      links={links}
      onBack={onBack}
      themeColor={themeColor}
      heroIcon={heroIcon}
      listIcon={<Radar size={36} color="#ffffff" style={{ filter: `drop-shadow(0 0 8px ${themeColor})` }} strokeWidth={1.5} />}
      headerTitle="MANTENIMIENTO · PROTOCOLOS · SOPORTE"
      footerTitle="CENTRO DE OPERACIONES"
      description="Recursos de instrucción, monitoreo y operaciones de vuelo."
    />
  );
};
