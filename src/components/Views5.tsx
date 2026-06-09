import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wrench, BookOpen, Settings, Hexagon, Network, Microscope, Package, Box, Radar, Activity, Cpu, ArrowLeft, Zap, Target, Info, ExternalLink, X, CheckCircle2, Lightbulb, Rocket, Shield, Award, Star, GraduationCap, LayoutGrid, FileText, Lock } from 'lucide-react';

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
    background: 'radial-gradient(circle at center, #1B0088 0%, #0F004F 100%)', 
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
  <div style={{ position: 'sticky', top: 0, background: 'rgba(15, 0, 79, 0.95)', backdropFilter: 'blur(20px)', borderBottom: '2px solid #99CC33', padding: '14px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 100, boxShadow: '0 4px 30px rgba(0,0,0,0.3)' }}>
    <button onClick={onBack} style={{ background: 'transparent', border: '1.5px solid rgba(153, 204, 51, 0.4)', color: '#99CC33', padding: '8px 18px', borderRadius: '4px', cursor: 'pointer', fontSize: '10px', fontWeight: 900, letterSpacing: '2px', textTransform: 'uppercase', transition: '0.3s' }} onMouseEnter={e => { e.currentTarget.style.background = '#99CC33'; e.currentTarget.style.color = '#0F004F'; }}>
      ← Sair ao espaço
    </button>
    
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '8px', color: '#ED1650', letterSpacing: '4px', fontWeight: 900, textTransform: 'none', marginBottom: '2px' }}>Terminal de Exploração Estratégica</div>
      <div style={{ 
        fontSize: '28px', 
        fontWeight: 900, 
        letterSpacing: '2px', 
        color: '#FFFFFF',
        filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.2))'
      }}>
        Rota do Lider Guardião
      </div>
    </div>

    <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
      <div style={{ border: '2.5px solid #99CC33', borderRadius: '8px', padding: '6px 16px', textAlign: 'center', minWidth: '80px', background: 'rgba(153, 204, 51, 0.05)' }}>
        <div style={{ fontSize: '8px', color: '#99CC33', fontWeight: 900 }}>NIVEL</div>
        <div style={{ fontSize: '22px', color: '#fff', fontWeight: 900 }}>{level}</div>
      </div>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: 'rgba(255,255,255,0.6)', fontWeight: 800, marginBottom: '6px' }}>
          <span>PROGRESSO DE COMPREENSÃO</span>
          <span style={{ color: '#99CC33' }}>{xp} / {totalXp} XP</span>
        </div>
        <div style={{ width: '160px', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden' }}>
          <div style={{ width: `${(xp / totalXp) * 100}%`, height: '100%', background: 'linear-gradient(90deg, #99CC33, #4257E8)', boxShadow: '0 0 10px #99CC33', transition: 'width 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }} />
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
                      <span style={{ fontWeight: 800, textTransform: 'none', fontSize: 10, color: '#B45309', display: 'block', marginBottom: 2 }}>Conselho Estratégico</span>
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
            background: 'rgba(3, 5, 15, 0.6)', backdropFilter: 'blur(10px)', border: '1px solid #99CC33', borderRadius: '30px', padding: '10px 32px',
            fontSize: '11px', fontWeight: 900, color: '#99CC33', letterSpacing: '2px', boxShadow: '0 0 20px rgba(153, 204, 51, 0.2)'
          }}>
            🗺️ Escolha a sua rota - Todos as missões disponíveis ✨
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
                <motion.path 
                    key={`path-${i}`} d={d} stroke={`url(#grad-${i})`} strokeWidth="8" fill="none" 
                    strokeDasharray="20 20" filter="url(#pathGlow)" 
                    animate={{ strokeDashoffset: [100, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />
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
  onNavigate = () => {}
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
              src="/guardioes_capacitacion_pt.png" 
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
            '/escudos/YODA - Konecta BR.png',
            '/escudos/YODA - AeC.png'
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
            <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: '0.05em', color: '#0B0033' }}>Recursos Disponíveis</div>
            <div style={{ fontSize: 13, color: 'rgba(11,0,51,0.6)', marginTop: 4, fontWeight: 500, fontFamily: 'sans-serif' }}>
              Acesse manuais técnicos, guias de procedimentos e recursos de suporte para operações.
            </div>
          </div>
          <div style={{ flex: 1 }} />
        </div>

        {/* List Items Grid (3 Columns) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {(!links || links.length === 0) ? (
            <div style={{ textAlign: 'center', padding: 60, color: '#888888', border: '2px dashed #cccccc', borderRadius: 8, background: 'rgba(255,255,255,0.5)' }}>
              NO HAY RECURSOS CONFIGURADOS EN ESTA TERMINAL
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
              onClick={() => link.url !== '#' && window.open(link.url, '_blank')}
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
                {link.url && link.url !== '#' ? 'ACESSAR O MÓDULO' : 'SEM LINK'}
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

export const IngenieriaView = ({ config, links, onBack, onNavigate, title, subtitle }: any) => {
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
      subtitle={subtitle}
      description="Acesse conteúdos que irão elevar seu conhecimento e levar nossa operação cada vez mais alto!"
      links={links}
      onBack={onBack}
      onNavigate={onNavigate}
      themeColor={themeColor}
      heroIcon={heroIcon}
      listIcon={<Cpu size={36} color="#ffffff" style={{ filter: `drop-shadow(0 0 8px ${themeColor})` }} strokeWidth={1.5} />}
      headerTitle="MANTENIMIENTO · PROTOCOLOS · SUPORTE"
      footerTitle="Workshops"
    />
  );
};

export const LaboratorioView = ({ config, links, rutaData, onBack, onNavigate, onNavigateRuta, title, subtitle }: any) => {
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
      config={config}
      title={title || 'Portal de Lideres'}
      subtitle={subtitle || 'Lab. de estratégia, missões de formação e análise de dados em tempo real.'}
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
    >
      {rutaData && rutaData.length > 0 && (
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
            cursor: 'pointer',
            background: '#1B0088',
            borderLeft: `6px solid ${themeColor}`,
            borderRight: '1px solid rgba(255,255,255,0.1)',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            boxShadow: `0 20px 40px rgba(0,0,0,0.2)`,
            borderRadius: '0 12px 12px 0',
            marginBottom: 32
          }} 
          onClick={onNavigateRuta}
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
            <div style={{ fontSize: 10, color: themeColor, letterSpacing: '0.2em', fontWeight: 900, marginBottom: 6 }}>PROGRAMA FORMATIVO · CAPA LIDERAZGO</div>
            <div style={{ fontSize: 24, fontWeight: 900, letterSpacing: '0.02em', color: '#ffffff', marginBottom: 6 }}>Programa de Formação - Capa Liderança</div>
          </div>

          <div style={{
            position: 'relative',
            padding: '12px 24px',
            background: 'transparent',
            border: `2px solid ${themeColor}`,
            borderRadius: '6px',
            color: themeColor,
            fontSize: 12,
            fontWeight: 900,
            zIndex: 2,
            letterSpacing: '1px'
          }}>
            ABRIR MAPA
          </div>
        </motion.div>
      )}
    </TechBaseView>
  );
};

export const SuministrosView = ({ config, links, onBack, onNavigate, title, subtitle }: any) => {
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
      title={title || 'Formulários'}
      subtitle={subtitle || 'Gestão e controle de turmas e equipe de instrutores'}
      links={links}
      onBack={onBack}
      onNavigate={onNavigate}
      themeColor={themeColor}
      heroIcon={heroIcon}
      listIcon={<Box size={36} color="#ffffff" style={{ filter: `drop-shadow(0 0 8px ${themeColor})` }} strokeWidth={1.5} />}
      headerTitle="MANTENIMIENTO · PROTOCOLOS · SUPORTE"
      footerTitle="Formulários"
      description="Formularios de solicitud, inventario y recursos logísticos."
    />
  );
};

export const OperacionesView = ({ config, links, onBack, onNavigate, title, subtitle }: any) => {
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
      title={title || 'Portal Instrutor'}
      subtitle={subtitle || 'Monitoramento em tempo real, portal de instrutores e controle de missões.'}
      links={links}
      onBack={onBack}
      onNavigate={onNavigate}
      themeColor={themeColor}
      heroIcon={heroIcon}
      listIcon={<GraduationCap size={36} color="#ffffff" style={{ filter: `drop-shadow(0 0 8px ${themeColor})` }} strokeWidth={1.5} />}
      headerTitle="MANTENIMIENTO · PROTOCOLOS · SUPORTE"
      footerTitle="Portal Instrutor"
      description="Recursos de instrução, monitoramento e operações de voo."
    />
  );
};
