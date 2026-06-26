import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wrench, BookOpen, Settings, Hexagon, Network, Microscope, Package, Box, Radar, Activity, Cpu, ArrowLeft, Zap, Target, Info, ExternalLink, X, CheckCircle2, Lightbulb, Rocket, Shield, Award, Star, GraduationCap, LayoutGrid, FileText, Lock } from 'lucide-react';
import { PlanetContentView, MissionSectorMap, AnimatedIaraOverlay } from './Views6';
import { BackBtn } from './Shared';
import { updatePortalTracking } from '../lib/portalTracking';

const Stars = () => (
  <div className="stars-container" style={{ position: 'fixed', inset: 0, pointerEvents: 'none' }}>
    {[...Array(80)].map((_, i) => (
      <motion.div
        key={i}
        animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1] }}
        transition={{ duration: Math.random() * 5 + 3, repeat: Infinity, ease: 'easeInOut', delay: -Math.random() * 5 }}
        style={{
          position: 'absolute',
          width: (Math.random() * 2 + 1) + 'px',
          height: (Math.random() * 2 + 1) + 'px',
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%',
          background: '#ffffff',
          borderRadius: '50%',
          boxShadow: '0 0 5px #fff'
        }}
      />
    ))}
  </div>
);

const MapBackground = () => (
  <div style={{ 
    position: 'fixed', 
    inset: 0, 
    background: 'linear-gradient(135deg, #1E1A48 0%, #4D1B42 100%)', 
    zIndex: 0, 
    overflow: 'hidden' 
  }}>
    {/* Dynamic Tactical Glows */}
    <motion.div 
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: '5%', left: '15%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(27,0,136,0.5) 0%, transparent 70%)', filter: 'blur(100px)' }} 
    />
    <motion.div 
        animate={{ opacity: [0.1, 0.3, 0.1], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', bottom: '10%', right: '5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(153,204,51,0.3) 0%, transparent 70%)', filter: 'blur(80px)' }} 
    />
    
    {/* Vector Tactical Grid */}
    <div style={{ 
      position: 'absolute', inset: 0, 
      backgroundImage: `
        linear-gradient(rgba(153,204,51,0.05) 1px, transparent 1px), 
        linear-gradient(90deg, rgba(153,204,51,0.05) 1px, transparent 1px)
      `, 
      backgroundSize: '100px 100px',
      maskImage: 'radial-gradient(circle at center, black 40%, transparent 95%)'
    }} />

    {/* Twinkly Stars Background */}
    <Stars />
  </div>
);

const HUD = ({ level, xp, totalXp, activePowers, onBack }: any) => (
  <div style={{ position: 'relative', top: 0, background: 'transparent', padding: '24px 40px', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 100 }}>
    <div style={{ position: 'fixed', left: 40, top: 24, zIndex: 200 }}>
      <BackBtn onClick={onBack} label="SAIR" />
    </div>
    
    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '40px' }}>
      <div style={{ fontSize: '10px', color: '#00D6CC', letterSpacing: '8px', fontWeight: 900, textTransform: 'uppercase', marginBottom: '8px' }}>
        Terminal de Exploração Estratégica
      </div>
      <div style={{ 
        fontSize: '56px', 
        fontWeight: 900, 
        letterSpacing: '6px', 
        color: '#FFFFFF',
        textTransform: 'uppercase',
        filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.2))'
      }}>
        Rota do Lider Guardião
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
              <span style={{ fontSize: '10px', fontWeight: 900, color: isCompleted ? '#99CC33' : 'rgba(255,255,255,0.4)', letterSpacing: '1.5px', textTransform: 'none' }}>
                {isCompleted ? 'Adquirido' : 'Acesso disponível'}
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
              <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.4)', fontWeight: 800, letterSpacing: '1px' }}>DURAÇÃO</div>
            </div>
          </div>

          <button 
            onClick={() => onOpen(p.name)}
            style={{ 
              width: '100%', padding: '16px', background: isCompleted ? '#99CC33' : '#1B0088', 
              color: '#fff', border: isCompleted ? 'none' : '1px solid #99CC33', borderRadius: '10px',
              fontWeight: 900, fontSize: '13px', letterSpacing: '1.5px', cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: isCompleted ? '0 10px 20px rgba(153,204,51,0.2)' : '0 10px 20px rgba(27,0,136,0.3)'
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = isCompleted ? '0 15px 25px rgba(153,204,51,0.3)' : '0 15px 25px rgba(27,0,136,0.5)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = isCompleted ? '0 10px 20px rgba(153,204,51,0.2)' : '0 10px 20px rgba(27,0,136,0.3)' }}
          >
            {isCompleted ? 'Revisar conteúdo' : 'Iniciar Exploração'}
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
            <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.6)', fontWeight: 900, letterSpacing: '3px', textTransform: 'none', marginBottom: 2 }}>Módulo de Aprendizagem</div>
            <div style={{ fontSize: 26, fontWeight: 900, letterSpacing: '-0.01em', color: '#FFF' }}>{p.name}</div>
          </div>
        </div>

        <div style={{ marginLeft: 'auto', display: 'flex', gap: 48, alignItems: 'center' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', fontWeight: 800, textTransform: 'none' }}>Status</div>
            <div style={{ fontSize: 13, color: '#99CC33', fontWeight: 900, display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'flex-end' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#99CC33' }} /> Exploração Ativa
            </div>
          </div>
          <div style={{ height: 40, width: 1, background: 'rgba(255,255,255,0.2)' }} />
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', fontWeight: 800, textTransform: 'none' }}>Duração</div>
            <div style={{ fontSize: 13, color: '#FFF', fontWeight: 900 }}>{p.time.toUpperCase()}</div>
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
                onClick={() => {
                  toggleCheck(idx);
                  updatePortalTracking(localStorage.getItem('yoda_active_user') || 'instructor@example.com', node.tema, 'COMPLETAR MÓDULO', 'CLICK');
                }}
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
                      <span style={{ fontWeight: 800, textTransform: 'none', fontSize: 10, color: '#B45309', display: 'block', marginBottom: 2 }}>Conselho Estratégico</span>
                      {node.consejo}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {node.adjunto && node.adjunto !== '#' && node.adjunto !== '-' && node.adjunto.trim() !== '' ? (
                  <a 
                    href={node.adjunto} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={() => updatePortalTracking(localStorage.getItem('yoda_active_user') || 'instructor@example.com', node.tema, 'ABRIR RECURSO', 'CLICK')}
                    style={{
                      background: '#1B0088', color: '#fff', border: 'none', padding: '12px 20px', borderRadius: 8, fontWeight: 900, fontSize: 11,
                      textDecoration: 'none', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, 
                      boxShadow: '0 4px 12px rgba(27,0,136,0.2)', transition: '0.2s'
                    }} onMouseEnter={e => e.currentTarget.style.background = '#0F004F'} onMouseLeave={e => e.currentTarget.style.background = '#1B0088'}>
                    ABRIR RECURSO <ExternalLink size={14} />
                  </a>
                ) : (
                  <div style={{ 
                    background: '#F1F5F9', color: '#94A3B8', padding: '12px 20px', borderRadius: 8, fontWeight: 800, fontSize: 10,
                    textAlign: 'center', border: '1px dashed #CBD5E1', textTransform: 'none'
                  }}>
                    Não disponível
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
              <div style={{ fontWeight: 900, fontSize: 13, letterSpacing: '1.5px', color: '#0F004F', textTransform: 'none' }}>Resumo do poder</div>
            </div>
            <div style={{ fontSize: 15, color: '#4D4D4D', lineHeight: 1.8, marginBottom: 30, fontWeight: 500 }}>
              {p.desc}
            </div>
            <div style={{ height: '1.5px', background: '#F1F5F9', marginBottom: 30 }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
              <span style={{ fontSize: 12, color: '#858585', fontWeight: 600 }}>Total de Módulos</span>
              <span style={{ fontSize: 13, fontWeight: 900, color: '#1B0088' }}>{nodes.length} Módulos</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 40 }}>
              <span style={{ fontSize: 12, color: '#858585', fontWeight: 600 }}>Certificação</span>
              <span style={{ fontSize: 13, fontWeight: 900, color: '#1B0088' }}>{p.time.toUpperCase()}</span>
            </div>
            <button 
              onClick={() => { onComplete(); onBack(); }}
              style={{ 
                width: '100%', background: '#99CC33', color: '#fff', border: 'none', padding: '18px', borderRadius: 12, fontWeight: 900, fontSize: 14,
                cursor: 'pointer', boxShadow: '0 10px 25px rgba(153,204,51,0.3)', transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                textTransform: 'none'
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(153,204,51,0.4)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(153,204,51,0.3)' }}
            >
              Marcar como finalizado
            </button>
          </div>

          <div style={{ background: '#0F004F', borderRadius: 24, padding: 36, position: 'relative', overflow: 'hidden' }}>
             <div style={{ position: 'absolute', top: -30, right: -30, fontSize: 140, opacity: 0.05, transform: 'rotate(-20deg)' }}>{p.icon}</div>
              <div style={{ fontWeight: 900, fontSize: 11, color: '#99CC33', letterSpacing: '2px', marginBottom: 16, textTransform: 'none' }}>Suporte inteligente</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, fontStyle: 'italic', position: 'relative', zIndex: 1 }}>
                "Os conceitos JETS vinculam a cultura LATAM com a excelência operacional. Mantenha o foco na visão do lider"
              </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export const RutaLiderView = ({ links, rutaData, onBack }: any) => {
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [selectedPower, setSelectedPower] = useState<any>(null);
  const [tick, setTick] = useState(0);
  const [showCongrats, setShowCongrats] = useState(false);
  
  // Dynamic Grouping Logic for the Map
  const mapConfig = (rutaData || []).map((section: any, idx: number) => {
    const aesthetics = [
      { color: '#ED1650', icon: 'Zap' },
      { color: '#99CC33', icon: 'Target' },
      { color: '#00D6CC', icon: 'Shield' },
      { color: '#662D91', icon: 'Award' },
      { color: '#1B0088', icon: 'Star' }
    ];
    const aesthetic = aesthetics[idx % aesthetics.length];
    
    return {
      name: section.label || 'MISIÓN',
      label: section.label || 'MISIÓN',
      color: aesthetic.color,
      icon: aesthetic.icon,
      nodos: (section.rows || []).length,
      time: section.rows?.[0]?.tiempo || 'N/A',
      desc: section.rows?.[0]?.desc || 'Contenido de la misión',
      rows: section.rows || []
    };
  });

  const handleOpenPower = (name: string) => {
    updatePortalTracking(localStorage.getItem('yoda_active_user') || 'instructor@example.com', name, 'ABRIR PODER', 'CLICK');
    const p = mapConfig.find(p => p.name === name);
    if(p) setSelectedPower(p);
  };

  useEffect(() => {
    const newCompleted = new Set<string>();
    mapConfig.forEach(poder => {
      const rows = poder.rows || [];
      const allDone = rows.length > 0 && rows.every((r:any, i:number) => localStorage.getItem(`resolved_${poder.name}_${r.tema}_${i}`) === 'true');
      console.log(`RutaLiderView - Node ${poder.name} allDone: ${allDone}`);
      if (allDone) {
          newCompleted.add(poder.name);
      }
    });
    console.log(`RutaLiderView - Total completed: ${newCompleted.size} / ${mapConfig.length}`);
    setCompleted(newCompleted);

    if (newCompleted.size === mapConfig.length && mapConfig.length > 0) {
        const congratsKey = `congrats_shown_RUTA_LIDER`;
        if (localStorage.getItem(congratsKey) !== 'true') {
            setTimeout(() => setShowCongrats(true), 1000);
            localStorage.setItem(congratsKey, 'true');
        }
    }
  }, [tick, mapConfig.length]);

  const handleTrackEvent = (type: string, payload: string) => {
    setTick(t => t + 1);
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


        {/* The Map */}
        <div style={{ position: 'relative', maxWidth: '1400px', margin: '0 auto', zIndex: 10 }}>
          <MissionSectorMap 
            secciones={mapConfig.map((p: any) => ({
                nombre: p.name,
                label: p.name,
                color: p.color,
                icon: p.icon,
                rows: p.rows && p.rows.length > 0 ? p.rows : [{ detalhe: p.desc, ch: p.time }]
            }))}
            planetColor="#3B82F6"
            onSelectSection={(idx: number) => handleOpenPower(mapConfig[idx].name)}
            isFirstPlanet={false}
            texture="CRATERS"
            tick={tick}
            planetLabel="RUTA DEL LÍDER"
          />
        </div>
      </div>

      <AnimatePresence>
        {selectedPower && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: 50 }}
            style={{ position: 'absolute', inset: 0, zIndex: 100, background: '#040114', overflowY: 'auto' }}
          >
            <PlanetContentView 
              planetIdx={mapConfig.findIndex(m => m.name === selectedPower.name)}
              data={{ secciones: mapConfig }}
              planetMeta={{
                color: selectedPower.color,
                texture: 'CRATERS',
                onboardingIdx: null
              }}
              planetLabel="RUTA DEL LÍDER"
              sectorLabel="Módulo de Aprendizaje"
              initialViewMode="detail"
              onBack={() => setSelectedPower(null)}
              onTrackEvent={handleTrackEvent}
              disableCongrats={true}
              forceSingleSection={selectedPower.name}
            />
          </motion.div>
        )}
      </AnimatePresence>

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
                      <motion.div 
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                          style={{ flex: 1, display: 'flex', justifyContent: 'center' }}
                      >
                          <div style={{ position: 'relative', width: '100%', maxWidth: '420px' }}>
                              <div style={{ position: 'absolute', inset: -60, borderRadius: '50%', background: `radial-gradient(circle, #3B82F611 0%, transparent 70%)`, filter: 'blur(50px)' }} />
                              <AnimatedIaraOverlay />
                              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.03), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.03))', backgroundSize: '100% 4px, 3px 100%', pointerEvents: 'none' }} />
                          </div>
                      </motion.div>

                      <motion.div 
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 }}
                          style={{ flex: 1, textAlign: 'left' }}
                      >
                          <div style={{ 
                              display: 'inline-block', padding: '6px 16px', background: 'rgba(153, 204, 51, 0.1)', 
                              border: '1px solid rgba(153, 204, 51, 0.3)', borderRadius: 100,
                              color: '#99CC33', fontSize: 12, fontWeight: 900, letterSpacing: '2px', marginBottom: 24, textTransform: 'uppercase'
                          }}>
                              RUTA DEL LÍDER COMPLETADA
                          </div>
                          
                          <div style={{ fontSize: 64, fontWeight: 900, color: '#fff', lineHeight: 1, marginBottom: 24, letterSpacing: '-2px', textTransform: 'uppercase' }}>
                              EXPEDICIÓN<br/>CONCLUIDA!
                          </div>
                          
                          <div style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: 40, maxWidth: 500 }}>
                              Excelente trabajo. Has dominado todas las misiones de la Ruta del Líder.
                          </div>

                          <button 
                              onClick={() => setShowCongrats(false)}
                              style={{ 
                                  background: '#1B0088', color: '#fff', border: 'none', padding: '16px 40px',
                                  borderRadius: 12, fontSize: 14, fontWeight: 900, letterSpacing: '1px', textTransform: 'uppercase',
                                  cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12,
                                  boxShadow: '0 10px 30px rgba(27, 0, 136, 0.3)'
                              }}
                          >
                              <ArrowLeft size={18} /> CONTINUAR
                          </button>
                      </motion.div>
                  </div>
              </motion.div>
          )}
      </AnimatePresence>
    </div>
  );
};

export const TechBaseView = ({ 
  config,
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
  sideDecalLeft = "Guardiões",
  sideDecalRight = "Capacitación",
  footerLogo = null,
  description = "Accedé a manuales técnicos, guías de procedimientos y recursos de soporte para operaciones.",
  onNavigate = () => {},
  isEs = false
}: any) => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#F8FAFC', 
      color: '#1B0088', 
      fontFamily: '"Orbitron", sans-serif', 
      position: 'relative', 
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Base Grid */}
      <div style={{ 
        position: 'absolute', inset: 0, 
        backgroundColor: '#F8FAFC',
        backgroundImage: `
          linear-gradient(rgba(27,0,136,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(27,0,136,0.05) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(27,0,136,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(27,0,136,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '10px 10px',
        zIndex: 0
      }} />

      {/* Logo moved to header */}

      {/* Left Vertical Decal */}
      <div style={{ position: 'absolute', top: '40%', left: -80, display: 'flex', alignItems: 'center', gap: 15, transform: 'rotate(-90deg)', transformOrigin: 'center', zIndex: 1 }}>
        <div style={{ width: 40, height: 2, background: themeColor, boxShadow: `0 0 10px ${themeColor}` }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ fontSize: 12, fontWeight: 900, color: '#64748B', letterSpacing: '0.2em' }}>Guardiões</div>
          <img src="/guardianes_logo.png" alt="Logo Guardianes" style={{ height: 32, filter: 'brightness(1.1) drop-shadow(0 0 8px rgba(153,204,51,0.2))' }} />
        </div>
        <div style={{ width: 40, height: 2, background: themeColor, boxShadow: `0 0 10px ${themeColor}40` }} />
      </div>

      {/* Right Vertical Decal (Bi-lingual) */}
      <div style={{ position: 'absolute', top: '45%', right: -120, display: 'flex', alignItems: 'center', gap: 15, transform: 'rotate(90deg)', transformOrigin: 'center', zIndex: 1 }}>
        <div style={{ width: 40, height: 2, background: themeColor, boxShadow: `0 0 10px ${themeColor}40` }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ fontSize: 11, fontWeight: 900, color: '#64748B', letterSpacing: '0.2em' }}>Guardianes</div>
          <img src="/guardianes_logo.png" alt="Logo" style={{ height: 24, filter: 'brightness(1.1) drop-shadow(0 0 8px rgba(153,204,51,0.2))' }} />
          <div style={{ fontSize: 11, fontWeight: 900, color: '#64748B', letterSpacing: '0.2em' }}>Guardiões</div>
        </div>
        <div style={{ width: 40, height: 2, background: themeColor, boxShadow: `0 0 10px ${themeColor}40` }} />
      </div>

      {/* SIDEBAR TACTICAL HUD */}
      <div style={{ 
        position: 'fixed', 
        left: 0, 
        top: 0, 
        bottom: 0, 
        width: 280, 
        height: '100vh',
        background: 'rgba(15, 0, 79, 0.9)', 
        backdropFilter: 'blur(20px)',
        borderRight: '1px solid rgba(0, 243, 255, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        zIndex: 200,
        boxShadow: '20px 0 50px rgba(0,0,0,0.5)',
        overflow: 'hidden'
      }}>
        {/* HUD Grid Overlay */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.1, pointerEvents: 'none',
          backgroundImage: `linear-gradient(rgba(0, 243, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 243, 255, 0.2) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
          zIndex: 1
        }} />

        {/* Back Button with Pill Style */}
        <div style={{ marginBottom: 25, zIndex: 5, display: 'flex', justifyContent: 'center' }}>
          <button onClick={onBack} style={{ 
            background: '#1B2533', 
            border: '2px solid #00F3FF', 
            color: '#00F3FF', 
            padding: '8px 24px', 
            borderRadius: 30, 
            cursor: 'pointer', 
            fontSize: 10, 
            fontWeight: 900, 
            textTransform: 'uppercase',
            display: 'flex', alignItems: 'center', gap: 10,
            letterSpacing: '0.1em',
            transition: 'all 0.3s',
            boxShadow: '0 0 15px rgba(0, 243, 255, 0.2)'
          }}>
            <span style={{ fontSize: 14 }}>‹</span>
            RETURN TO STATION
          </button>
        </div>

        {/* Main Logo with Scanning Glow - REPOSITIONED BACK UP */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 25, position: 'relative', zIndex: 5 }}>
          <motion.div
            animate={{ filter: ['drop-shadow(0 0 2px #00F3FF)', 'drop-shadow(0 0 10px #00F3FF)', 'drop-shadow(0 0 2px #00F3FF)'] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <img 
              src={isEs ? "/guardioes_capacitacion_es.png" : "/guardioes_capacitacion_pt.png"} 
              alt="Main Logo" 
              style={{ width: '100%', height: 'auto', maxWidth: 110, filter: 'brightness(1.2)' }} 
            />
          </motion.div>
          {/* Decorative lines */}
          <div style={{ position: 'absolute', top: '50%', left: -20, width: 15, height: 1, background: 'rgba(0, 243, 255, 0.5)' }} />
          <div style={{ position: 'absolute', top: '50%', right: -20, width: 15, height: 1, background: 'rgba(0, 243, 255, 0.5)' }} />
        </div>

        {/* System Metadata */}
        <div style={{ fontSize: 8, color: 'rgba(0, 243, 255, 0.4)', fontFamily: 'monospace', marginBottom: 15, letterSpacing: '0.1em' }}>
          CORE_STATUS: ONLINE // DB_LINK: ACTIVE
        </div>

        {/* Menu Items with Tactical Slots */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, position: 'relative', zIndex: 5 }}>
          {[
            { label: 'Portal Instrutor', sec: 'SEC-A1', target: 'operaciones', color: '#FFD700' },
            { label: 'Formulários', sec: 'SEC-A2', target: 'suministros', color: '#00F3FF' },
            { label: 'Portal de Lideres', sec: 'SEC-B1', target: 'laboratorio', color: '#39FF14' },
            { label: 'Workshops', sec: 'SEC-B2', target: 'ingenieria', color: '#BF00FF' }
          ].map((item, idx) => {
            const isActive = title?.toLowerCase() === item.label.toLowerCase() || (item.label === 'Portal de Lideres' && title?.toLowerCase() === 'portal de líderes');
            const targetList = config?.[item.target] || [];
            const isTargetReady = targetList.length > 0;
            const itemColor = isTargetReady ? item.color : '#707E94';
            
            return (
              <motion.div
                key={idx}
                whileHover={isTargetReady ? { x: 5, background: `${itemColor}15` } : {}}
                onClick={isTargetReady ? () => onNavigate(item.target) : undefined}
                style={{ 
                  padding: '10px 15px', 
                  borderRadius: 0, 
                  color: isActive ? itemColor : (isTargetReady ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)'),
                  fontSize: 10,
                  fontWeight: 900,
                  cursor: isTargetReady ? 'pointer' : 'not-allowed',
                  background: isActive ? `${itemColor}20` : 'rgba(255,255,255,0.02)',
                  borderLeft: isActive ? `3px solid ${itemColor}` : '3px solid transparent',
                  borderBottom: '1px solid rgba(255,255,255,0.03)',
                  letterSpacing: '0.1em',
                  transition: 'all 0.2s',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  opacity: isTargetReady ? 1 : 0.5,
                  textDecoration: isTargetReady ? 'none' : 'line-through'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: 7, opacity: 0.5, marginBottom: 2 }}>{item.sec}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    {item.label}
                    {!isTargetReady && <Lock size={10} style={{ opacity: 0.7 }} />}
                  </span>
                </div>
                {isActive && (
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} 
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ width: 6, height: 6, borderRadius: '50%', background: itemColor, boxShadow: `0 0 8px ${itemColor}` }} 
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Grid of Shields at the very bottom (1 row of 2) */}
        <div style={{ 
          marginTop: 'auto', 
          display: 'flex', 
          justifyContent: 'center',
          gap: 30,
          paddingTop: '20px',
          paddingBottom: '10px',
          borderTop: '1px solid rgba(0, 243, 255, 0.1)',
          zIndex: 5
        }}>
          {[
            isEs ? '/escudos/YODA - Konecta PE.png' : '/escudos/YODA - Konecta BR.png',
            isEs ? '/escudos/YODA - AMC.png' : '/escudos/YODA - AeC.png'
          ].map((src, i) => (
            <img key={i} src={src} alt="Shield" style={{ width: '110px', height: 'auto', filter: 'brightness(1.1)', objectFit: 'contain' }} />
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', flex: 1, position: 'relative', zIndex: 5 }}>
        {/* Spacer for Sidebar */}
        <div style={{ width: 280, flexShrink: 0 }} />

        <div style={{ padding: '60px 40px', maxWidth: 1100, margin: '0 auto', position: 'relative', flex: 1, width: '100%', overflowY: 'auto' }}>
        
        {/* Hero Section */}
        <div style={{ position: 'relative', marginBottom: 40, width: '100%', maxWidth: 1050, margin: '0 auto 40px auto' }}>
          {/* Outer Border Layer (Window Frame) */}
          <div style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(90deg, ${themeColor} 0%, #00F3FF 50%, ${themeColor} 100%)`,
            clipPath: 'polygon(40px 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%, 0 40px)',
            zIndex: 1,
            boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
          }} />
          
          {/* Inner Background Layer (Window Glass) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ 
              position: 'relative',
              top: 2, left: 2, right: 2, bottom: 2,
              width: 'calc(100% - 4px)', height: 'calc(100% - 4px)',
              background: '#1B0088', 
              clipPath: 'polygon(39px 0, 100% 0, 100% calc(100% - 39px), calc(100% - 39px) 100%, 0 100%, 0 39px)',
              padding: '24px 60px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: 50, 
              zIndex: 2,
              boxShadow: 'inset 0 0 80px rgba(0,0,0,0.9)',
              overflow: 'hidden'
            }}
          >
            <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
              <Stars />
              {/* Data stream effect */}
              <motion.div 
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                style={{ position: 'absolute', top: '20%', left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,243,255,0.2), transparent)', zIndex: 1 }}
              />
            </div>
            
            {/* Geometric Decorative Elements */}
            <div style={{ position: 'absolute', top: 0, right: 100, width: 60, height: 4, background: themeColor, opacity: 0.6 }} />
            <div style={{ position: 'absolute', bottom: 0, left: 100, width: 60, height: 4, background: themeColor, opacity: 0.6 }} />

            {/* Inner Geometric Icon Box */}
            <div style={{
              width: 90, height: 90,
              position: 'relative',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                background: themeColor,
                clipPath: 'polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)',
                opacity: 0.9
              }} />
              <div style={{
                position: 'absolute', inset: 2,
                background: '#1B0088',
                clipPath: 'polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)'
              }}>
                {heroIcon}
              </div>
            </div>

            {/* Text Content */}
            <div style={{ flex: 1, position: 'relative', zIndex: 5 }}>
              <div style={{ fontSize: 48, fontWeight: 900, marginBottom: 8, color: '#ffffff', textTransform: 'none', letterSpacing: '0.05em', textShadow: '0 0 20px rgba(255,255,255,0.2)' }}>
                {title}
              </div>
              
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, maxWidth: 700, fontWeight: 500, letterSpacing: '0.02em' }}>
                {subtitle || description}
              </div>

              {/* Geometric Line Separator */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginTop: 16 }}>
                <div style={{ height: 3, background: themeColor, width: 100 }} />
                <div style={{ width: 0, height: 0, borderTop: '3px solid transparent', borderBottom: '3px solid transparent', borderLeft: `8px solid ${themeColor}` }} />
                <div style={{ height: 1, background: 'rgba(255,255,255,0.2)', flex: 1, marginLeft: 10 }} />
              </div>
            </div>
          </motion.div>
        </div>

        {children}

        {/* List Section Header */}
        <div style={{ marginBottom: 24, display: 'flex', alignItems: 'center', gap: 20 }}>
          <div>
            <div style={{ fontSize: 11, color: '#ED1650', letterSpacing: '0.2em', marginBottom: 4, fontWeight: 900, textTransform: 'uppercase' }}>REGISTROS TÉCNICOS</div>
            <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: '0.05em', color: '#0B0033' }}>{isEs ? 'Recursos Disponibles' : 'Recursos Disponíveis'}</div>
            <div style={{ fontSize: 13, color: 'rgba(11,0,51,0.6)', marginTop: 4, fontWeight: 500, fontFamily: 'sans-serif' }}>
              {isEs ? 'Acceda a manuales técnicos, guías de procedimientos y recursos de soporte para operaciones.' : 'Acesse manuais técnicos, guias de procedimentos e recursos de suporte para operações.'}
            </div>
          </div>
          <div style={{ flex: 1 }} />
        </div>

        {/* List Items Grid (3 Columns) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {(!links || links.length === 0) ? (
            <div style={{ textAlign: 'center', padding: 60, color: '#888888', border: '2px dashed #cccccc', borderRadius: 8, background: 'rgba(255,255,255,0.5)' }}>
              {isEs ? 'NO HAY RECURSOS CONFIGURADOS EN ESTA TERMINAL' : 'NENHUM RECURSO CONFIGURADO NESTE TERMINAL'}
            </div>
          ) : links.map((link: any, i: number) => (
            <motion.div
              key={i}
              whileHover={{ x: 10, background: '#2500A5' }}
              style={{ 
                position: 'relative', 
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                display: 'flex', 
                flexDirection: 'column',
                gap: 16,
                padding: '24px',
                cursor: 'pointer',
                background: '#1B0088', 
                borderLeft: `4px solid ${themeColor}`,
                borderRight: '1px solid rgba(255,255,255,0.1)',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                boxShadow: `0 10px 30px rgba(0,0,0,0.2)`,
                borderRadius: '0 8px 8px 0'
              }} 
              onClick={() => {
                if (link.url !== '#') {
                  const email = localStorage.getItem('yoda_active_user') || 'instructor@example.com';
                  updatePortalTracking(email, footerTitle || title, link.label, 'CLICK_LINK');
                  window.open(link.url, '_blank');
                }
              }}
            >
              <div style={{ zIndex: 2 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 0 }}>
                  <div style={{ fontSize: 16, fontWeight: 900, color: themeColor }}>{(i + 1).toString().padStart(2, '0')}.</div>
                  <div style={{ fontSize: 15, fontWeight: 900, letterSpacing: '0.02em', color: '#ffffff', textTransform: 'none', flex: 1 }}>{link.label}</div>
                </div>

              </div>

              <div style={{
                marginTop: 'auto',
                padding: '10px 16px',
                background: 'transparent',
                border: `1.5px solid ${themeColor}`,
                borderRadius: '4px',
                color: themeColor,
                fontSize: 11,
                fontWeight: 900,
                zIndex: 2,
                textAlign: 'center',
                letterSpacing: '1px',
                transition: 'all 0.2s ease'
              }}>
                {link.url && link.url !== '#' ? (isEs ? 'ACCEDER AL MÓDULO' : 'ACESSAR O MÓDULO') : (isEs ? 'SIN ENLACE' : 'SEM LINK')}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

    {/* Footer */}
      <div style={{ 
        background: '#ffffff', 
        padding: '12px 32px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        fontSize: 11, 
        fontWeight: 800, 
        zIndex: 100,
        color: '#1B0088',
        borderTop: `2px solid ${themeColor}`,
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.05)',
        marginLeft: 280
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {footerLogo ? (
            <img src={footerLogo} alt="Footer Logo" style={{ height: 18, filter: 'brightness(0) sepia(1) hue-rotate(240deg) saturate(3) opacity(0.8)' }} />
          ) : (
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: themeColor, boxShadow: `0 0 10px ${themeColor}` }} />
          )}
          <span style={{ fontWeight: 900 }}>{footerTitle}</span>
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{ border: `1px solid ${themeColor}40`, background: '#F1F5F9', color: '#1B0088', padding: '6px 16px', borderRadius: 4, fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8, boxShadow: `inset 0 0 10px rgba(0,0,0,0.02)` }}>
            CORE_STATUS: <span style={{ color: '#1B0088' }}>NUEVOS INGRESOS</span>
            <motion.div 
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} 
            />
          </div>
          <div style={{ border: `1px solid ${themeColor}40`, background: '#F1F5F9', color: '#1B0088', padding: '6px 16px', borderRadius: 4, fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8, boxShadow: `inset 0 0 10px rgba(0,0,0,0.02)` }}>
            PÁGINAS PUBLICADAS: <span style={{ color: '#1B0088' }}>{links ? links.length : 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const IngenieriaView = ({ config, links, onBack, onNavigate, title, subtitle, isEs = false }: any) => {
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
      config={config}
      title={title || 'Workshops'}
      subtitle={subtitle || (isEs ? '¡Acceda a contenidos que elevarán su conocimiento y llevarán nuestra operación cada vez más alto!' : 'Acesse conteúdos que irão elevar seu conhecimento e levar nossa operação cada vez mais alto!')}
      description={isEs ? "¡Acceda a contenidos que elevarán su conocimiento y llevarán nuestra operación cada vez más alto!" : "Acesse conteúdos que irão elevar seu conhecimento e levar nossa operação cada vez mais alto!"}
      links={links}
      onBack={onBack}
      onNavigate={onNavigate}
      themeColor={themeColor}
      heroIcon={heroIcon}
      listIcon={<Cpu size={36} color="#ffffff" style={{ filter: `drop-shadow(0 0 8px ${themeColor})` }} strokeWidth={1.5} />}
      headerTitle="MANTENIMIENTO · PROTOCOLOS · SUPORTE"
      footerTitle="Workshops"
      isEs={isEs}
    />
  );
};

export const LaboratorioView = ({ config, links, rutaData, onBack, onNavigate, onNavigateRuta, title, subtitle, isEs = false }: any) => {
  const themeColor = '#99CC33';
  const heroIcon = (
    <div style={{ position: 'relative', width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
        <Microscope size={48} color={themeColor} strokeWidth={1.5} style={{ filter: `drop-shadow(0 0 12px ${themeColor})` }} />
      </motion.div>
      <Star size={20} color="#ffffff" style={{ position: 'absolute', bottom: 10, right: 10, filter: 'drop-shadow(0 0 5px #ffffff)' }} />
    </div>
  );

  const progress = React.useMemo(() => {
    let totalNodes = 0;
    let completedNodes = 0;
    
    if (rutaData && rutaData.length > 0) {
      const isNested = !!rutaData[0].label;
      if (isNested) {
        rutaData.forEach((poder: any) => {
          (poder.rows || []).forEach((r: any, i: number) => {
            totalNodes++;
            if (localStorage.getItem(`resolved_Ruta del Líder_${r.tema}_${i}`) === 'true') {
              completedNodes++;
            }
          });
        });
      } else {
        const poderNames = [...new Set(rutaData.map((d: any) => d.poder))];
        poderNames.forEach((name) => {
          const nodes = rutaData.filter((d: any) => d.poder === name);
          nodes.forEach((r: any, i: number) => {
            totalNodes++;
            if (localStorage.getItem(`resolved_Ruta del Líder_${r.tema}_${i}`) === 'true') {
              completedNodes++;
            }
          });
        });
      }
    }
    return { total: totalNodes, completed: completedNodes };
  }, [rutaData]);

  let btnText = isEs ? 'NUEVA MISIÓN' : 'NOVA MISSÃO';
  if (progress.total > 0 && progress.completed === progress.total) {
    btnText = isEs ? 'VER MAPA' : 'VER MAPA';
  } else if (progress.completed > 0) {
    btnText = isEs ? 'CONTINUAR' : 'CONTINUAR';
  }

  const [showResetConfirm, setShowResetConfirm] = useState(false);

  return (
    <TechBaseView
      config={config}
      title={title || (isEs ? 'Portal de Líderes' : 'Portal de Lideres')}
      subtitle={subtitle || (isEs ? 'Laboratorio de estrategia, misiones de formación y análisis de datos en tiempo real.' : 'Lab. de estratégia, missões de formação e análise de dados em tempo real.')}
      links={links}
      onBack={onBack}
      onNavigate={onNavigate}
      themeColor={themeColor}
      heroIcon={heroIcon}
      listIcon={<Microscope size={36} color="#ffffff" style={{ filter: `drop-shadow(0 0 8px ${themeColor})` }} strokeWidth={1.5} />}
      headerTitle="MANTENIMIENTO · PROTOCOLOS · SUPORTE"
      footerTitle="PORTAL DE LÍDERES"
      footerLogo="/logo_blanco_1.png"
      topDecalLeft="ESTRATEGIA"
      topDecalRight="LIDERAZGO"
      sideDecalLeft="ANÁLISIS"
      sideDecalRight="DATOS"
      isEs={isEs}
    >
      <AnimatePresence>
        {showResetConfirm && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              style={{
                background: '#0F004F', border: `2px solid ${themeColor}`, borderRadius: 24, padding: 40,
                maxWidth: 500, width: '90%', textAlign: 'center', boxShadow: `0 20px 60px rgba(0,0,0,0.5)`,
                position: 'relative', overflow: 'hidden'
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: themeColor }} />
              <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(0, 214, 204, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${themeColor}` }}>
                  <Zap size={40} color={themeColor} />
                </div>
              </div>
              <div style={{ fontSize: 24, fontWeight: 900, color: '#fff', marginBottom: 12, letterSpacing: '1px' }}>
                {isEs ? '¡ATENCIÓN GUARDIÁN!' : 'ATENÇÃO GUARDIÃO!'}
              </div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', marginBottom: 32, lineHeight: 1.6 }}>
                {isEs 
                  ? 'Estás a punto de iniciar una nueva partida. Todo tu progreso anterior será borrado de los registros y tendrás que iniciar desde cero. ¿Estás listo para esta misión?' 
                  : 'Você está prestes a iniciar um novo jogo. Todo o seu progresso anterior será apagado dos registros e você terá que começar do zero. Você está pronto para esta missão?'}
              </div>
              
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
                <button
                  onClick={() => setShowResetConfirm(false)}
                  style={{
                    padding: '14px 28px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: 12, color: '#fff', fontSize: 13, fontWeight: 900, letterSpacing: '1px', cursor: 'pointer', flex: 1
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  {isEs ? 'CANCELAR' : 'CANCELAR'}
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const email = localStorage.getItem('yoda_active_user') || 'instructor@example.com';
                    localStorage.removeItem(`yoda_session_code_lider_${email}`);
                    if (rutaData) {
                        rutaData.forEach((section: any) => {
                            (section.rows || []).forEach((r:any, i:number) => {
                                localStorage.removeItem(`resolved_MISIÓN_${r.tema}_${i}`);
                                localStorage.removeItem(`resolved_${section.label || 'MISIÓN'}_${r.tema}_${i}`);
                                localStorage.removeItem(`resolved_${section.name || 'MISIÓN'}_${r.tema}_${i}`);
                            });
                        });
                    }
                    updatePortalTracking(email, 'PROGRAMA DE FORMAÇÃO - CAPA LIDERANÇA', 'NUEVA PARTIDA', 'CLICK');
                    setShowResetConfirm(false);
                    onNavigateRuta();
                  }}
                  style={{
                    padding: '14px 28px', background: themeColor, border: `1px solid ${themeColor}`,
                    borderRadius: 12, color: '#0F004F', fontSize: 13, fontWeight: 900, letterSpacing: '1px', cursor: 'pointer', flex: 1,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8
                  }}
                  onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.1)'}
                  onMouseLeave={e => e.currentTarget.style.filter = 'brightness(1)'}
                >
                  <Rocket size={16} /> {isEs ? 'SÍ, REINICIAR' : 'SIM, REINICIAR'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {rutaData && rutaData.length > 0 && config?.rutaLiderEnabled !== false && (
        <motion.div
          whileHover={{ x: 10, background: '#2500A5' }}
          style={{ 
            position: 'relative', 
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            display: 'flex', 
            alignItems: 'center', 
            gap: 24,
            padding: '24px 32px',
            cursor: 'default', // Removed pointer from parent
            background: '#1B0088',
            borderLeft: `6px solid ${themeColor}`,
            borderRight: '1px solid rgba(255,255,255,0.1)',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            boxShadow: `0 20px 40px rgba(0,0,0,0.2)`,
            borderRadius: '0 12px 12px 0',
            marginBottom: 32
          }} 
        >
          <div style={{
            width: 84, height: 84,
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '8px',
            position: 'relative',
            border: `1px solid rgba(255,255,255,0.1)`,
            overflow: 'hidden',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
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
            <div style={{ color: themeColor, zIndex: 2 }}>
              <Rocket size={40} color="currentColor" strokeWidth={1.5} />
            </div>
          </div>

          <div style={{ flex: 1, zIndex: 2 }}>
            <div style={{ fontSize: 10, color: themeColor, letterSpacing: '0.2em', fontWeight: 900, marginBottom: 6 }}>{isEs ? 'PROGRAMA FORMATIVO · CAPA LIDERAZGO' : 'PROGRAMA FORMATIVO · CAPA LIDERANÇA'}</div>
            <div style={{ fontSize: 24, fontWeight: 900, letterSpacing: '0.02em', color: '#ffffff', marginBottom: 6 }}>{isEs ? 'Programa de Formación - Capa Liderazgo' : 'Programa de Formação - Capa Liderança'}</div>
            {progress.total > 0 && progress.completed > 0 && progress.completed < progress.total && (
                <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ flex: 1, height: 4, background: 'rgba(255,255,255,0.2)', borderRadius: 2, overflow: 'hidden' }}>
                    <div style={{ width: `${(progress.completed / progress.total) * 100}%`, height: '100%', background: themeColor, borderRadius: 2 }} />
                  </div>
                  <div style={{ fontSize: 10, fontWeight: 900, color: themeColor }}>{progress.completed}/{progress.total}</div>
                </div>
            )}
          </div>

          <div style={{ display: 'flex', gap: 12, zIndex: 2 }}>
            {btnText === 'CONTINUAR' ? (
               <>
                 <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={(e) => { 
                    e.stopPropagation(); 
                    setShowResetConfirm(true);
                 }} style={{
                    padding: '14px 24px',
                    background: 'rgba(255,255,255,0.1)',
                    border: `1px solid rgba(255,255,255,0.2)`,
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: 12,
                    fontWeight: 900,
                    letterSpacing: '1px',
                    cursor: 'pointer',
                    display: 'flex', alignItems: 'center', gap: 8
                 }}>
                    <Zap size={16} /> {isEs ? 'NUEVA PARTIDA' : 'NOVA PARTIDA'}
                 </motion.button>
                 <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={(e) => {
                    e.stopPropagation();
                    updatePortalTracking(localStorage.getItem('yoda_active_user') || 'instructor@example.com', 'PROGRAMA DE FORMAÇÃO - CAPA LIDERANÇA', 'CONTINUAR PARTIDA', 'CLICK');
                    onNavigateRuta();
                 }} style={{
                    padding: '14px 32px',
                    background: themeColor,
                    border: `none`,
                    borderRadius: '8px',
                    color: '#0F004F',
                    fontSize: 12,
                    fontWeight: 900,
                    letterSpacing: '1px',
                    cursor: 'pointer',
                    display: 'flex', alignItems: 'center', gap: 8,
                    boxShadow: `0 0 20px ${themeColor}66`
                 }}>
                    <Rocket size={16} /> {btnText}
                 </motion.button>
               </>
            ) : (
               <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={(e) => {
                  e.stopPropagation();
                  updatePortalTracking(localStorage.getItem('yoda_active_user') || 'instructor@example.com', 'PROGRAMA DE FORMAÇÃO - CAPA LIDERANÇA', btnText === 'VER MAPA' ? 'VER MAPA' : 'NUEVA PARTIDA', 'CLICK');
                  onNavigateRuta();
               }} style={{
                  padding: '14px 32px',
                  background: progress.completed === progress.total ? '#99CC33' : themeColor,
                  border: `none`,
                  borderRadius: '8px',
                  color: '#0F004F',
                  fontSize: 12,
                  fontWeight: 900,
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: 8,
                  boxShadow: `0 0 20px ${progress.completed === progress.total ? '#99CC3366' : `${themeColor}66`}`
               }}>
                 <Rocket size={16} /> {btnText}
               </motion.button>
            )}
          </div>
        </motion.div>
      )}
    </TechBaseView>
  );
};

export const SuministrosView = ({ config, links, onBack, onNavigate, title, subtitle, isEs = false }: any) => {
  const themeColor = '#00D6CC';
  const heroIcon = (
    <div style={{ position: 'relative', width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
        <Box size={48} color={themeColor} strokeWidth={1.5} style={{ filter: `drop-shadow(0 0 12px ${themeColor})` }} />
      </motion.div>
      <Package size={20} color="#ffffff" style={{ position: 'absolute', bottom: 10, right: 10, filter: 'drop-shadow(0 0 5px #ffffff)' }} />
    </div>
  );

  return (
    <TechBaseView
      config={config}
      title={title || (isEs ? 'Formularios' : 'Formulários')}
      subtitle={subtitle || (isEs ? 'Gestión y control de clases y equipo de instructores' : 'Gestão e controle de turmas e equipe de instrutores')}
      links={links}
      onBack={onBack}
      onNavigate={onNavigate}
      themeColor={themeColor}
      heroIcon={heroIcon}
      listIcon={<Box size={36} color="#ffffff" style={{ filter: `drop-shadow(0 0 8px ${themeColor})` }} strokeWidth={1.5} />}
      headerTitle="MANTENIMIENTO · PROTOCOLOS · SUPORTE"
      footerTitle={isEs ? "Formularios" : "Formulários"}
      description={isEs ? "Formularios de solicitud, inventario y recursos logísticos." : "Formulários de solicitação, inventário e recursos logísticos."}
      isEs={isEs}
    />
  );
};

export const OperacionesView = ({ config, links, onBack, onNavigate, title, subtitle, isEs = false }: any) => {
  const themeColor = '#FFE017';
  const heroIcon = (
    <div style={{ position: 'relative', width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
        <GraduationCap size={48} color={themeColor} strokeWidth={1.5} style={{ filter: `drop-shadow(0 0 12px ${themeColor})` }} />
      </motion.div>
      <Activity size={20} color="#ffffff" style={{ position: 'absolute', bottom: 5, right: 5, filter: 'drop-shadow(0 0 5px #ffffff)' }} />
    </div>
  );

  return (
    <TechBaseView
      config={config}
      title={title || (isEs ? 'Portal Instructor' : 'Portal Instrutor')}
      subtitle={subtitle || (isEs ? 'Monitoreo en tiempo real, portal de instructores y control de misiones.' : 'Monitoramento em tempo real, portal de instrutores e controle de missões.')}
      links={links}
      onBack={onBack}
      onNavigate={onNavigate}
      themeColor={themeColor}
      heroIcon={heroIcon}
      listIcon={<GraduationCap size={36} color="#ffffff" style={{ filter: `drop-shadow(0 0 8px ${themeColor})` }} strokeWidth={1.5} />}
      headerTitle="MANTENIMIENTO · PROTOCOLOS · SUPORTE"
      footerTitle={isEs ? "Portal Instructor" : "Portal Instrutor"}
      description={isEs ? "Recursos de instrucción, monitoreo y operaciones de vuelo." : "Recursos de instrução, monitoramento e operações de voo."}
      isEs={isEs}
    />
  );
};
