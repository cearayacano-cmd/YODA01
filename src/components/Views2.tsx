import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BackBtn 
} from './Shared';
import { 
  Users, 
  ShieldCheck, 
  MapPin, 
  ChevronRight,
  Sparkles,
  Target,
  Rocket
} from 'lucide-react';

const GalaxyVisual = ({ color }: { color: string }) => {
  const numStars = 60;
  const numArms = 3;
  
  return (
    <div style={{ 
      position: 'relative', 
      width: 260, 
      height: 260, 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      perspective: '1200px'
    }}>
      {/* 3D Tilted Container */}
      <motion.div
        animate={{ 
          rotateX: 55, 
          rotateY: 15,
          rotateZ: [0, -360] 
        }}
        transition={{ 
          rotateZ: { duration: 120, repeat: Infinity, ease: "linear" },
          default: { duration: 0 }
        }}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Deep Volumetric Nebula Layer 1 */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: 'absolute',
            width: '180%',
            height: '180%',
            background: `radial-gradient(circle, ${color}33 0%, transparent 70%)`,
            filter: 'blur(60px)',
            transform: 'translateZ(-40px)'
          }} 
        />

        {/* Core Volumetric Nebula Layer 2 */}
        <div style={{
          position: 'absolute',
          width: '120%',
          height: '120%',
          background: `radial-gradient(circle, #fff2 0%, ${color}22 40%, transparent 80%)`,
          filter: 'blur(30px)',
          transform: 'translateZ(10px)'
        }} />

        <svg viewBox="-20 -20 140 140" style={{ width: '140%', height: '140%', overflow: 'visible' }}>
          <defs>
            <filter id="proGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.2" result="blur" />
              <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8" result="hardGlow" />
              <feComposite in="SourceGraphic" in2="hardGlow" operator="over" />
            </filter>
          </defs>

          {/* Central Galactic Hub */}
          <g transform="translate(50, 50)" style={{ filter: 'url(#proGlow)' }}>
              <circle r="7" fill="#fff" style={{ filter: `drop-shadow(0 0 10px #fff) drop-shadow(0 0 25px ${color})` }} />
              <motion.circle
                r="10"
                fill="none"
                stroke={color}
                strokeWidth="0.5"
                animate={{ scale: [1, 2.5], opacity: [0.4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
              />
          </g>

          {/* Logarithmic Spiral Arms */}
          {[...Array(numArms)].map((_, armIdx) => {
            const armOffset = (armIdx * 2 * Math.PI) / numArms;
            return (
              <g key={armIdx} transform="translate(50, 50)">
                {[...Array(numStars)].map((_, i) => {
                  const a = 3.5; 
                  const b = 0.32;
                  const theta = i * 0.18;
                  const r = a * Math.exp(b * theta);
                  
                  if (r > 75) return null;

                  const x = r * Math.cos(theta + armOffset);
                  const y = r * Math.sin(theta + armOffset);
                  const isTopStar = i % 12 === 0;
                  const size = isTopStar ? Math.random() * 1.5 + 0.8 : Math.random() * 0.8 + 0.3;

                  return (
                    <motion.g key={i}>
                      <motion.circle
                        cx={x}
                        cy={y}
                        r={size}
                        fill={isTopStar ? '#fff' : color}
                        style={{ opacity: Math.random() * 0.7 + 0.3 }}
                        animate={{ 
                          opacity: [0.3, 1, 0.3],
                          scale: [1, isTopStar ? 1.3 : 1.1, 1]
                        }}
                        transition={{ 
                          duration: 2 + Math.random() * 4, 
                          repeat: Infinity, 
                          delay: Math.random() * 10 
                        }}
                      />
                      {/* Cinematic Cross Lens Flare for bright stars */}
                      {isTopStar && (
                        <g transform={`translate(${x}, ${y})`}>
                          <line x1="-4" y1="0" x2="4" y2="0" stroke="#fff" strokeWidth="0.15" opacity="0.4" />
                          <line x1="0" y1="-4" x2="0" y2="4" stroke="#fff" strokeWidth="0.15" opacity="0.4" />
                        </g>
                      )}
                    </motion.g>
                  );
                })}
              </g>
            );
          })}
        </svg>
      </motion.div>
    </div>
  );
};

const TacticalSectorCard = ({ color, id, label, desc, onClick, tag }: any) => {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      onClick={() => onClick(id)}
      style={{
        width: 380,
        height: 520,
        background: 'rgba(27, 0, 136, 0.4)',
        backdropFilter: 'blur(10px)',
        border: `1px solid ${color}30`,
        position: 'relative',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        margin: '0 15px',
        boxShadow: `0 20px 50px rgba(0,0,0,0.5)`,
        willChange: 'transform'
      }}
    >
      {/* TACTICAL CORNERS */}
      <div style={{ position: 'absolute', top: 10, left: 10, width: 20, height: 20, borderTop: `2px solid ${color}`, borderLeft: `2px solid ${color}` }} />
      <div style={{ position: 'absolute', top: 10, right: 10, width: 20, height: 20, borderTop: `2px solid ${color}`, borderRight: `2px solid ${color}` }} />

      {/* TOP RIGHT ID TAG */}
      <div style={{
        position: 'absolute',
        top: 20,
        right: 40,
        background: `${color}15`,
        padding: '4px 12px',
        border: `1px solid ${color}30`,
        borderRadius: 4,
        fontSize: 10,
        fontWeight: 900,
        color: color,
        letterSpacing: '0.1em',
        fontFamily: 'monospace',
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }}>
        <div style={{ width: 4, height: 4, borderRadius: '50%', background: color }} />
        {tag}
      </div>

      {/* UPPER VISUALIZATION AREA */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        paddingTop: 40
      }}>
        <GalaxyVisual color={color} />
      </div>

      {/* LOWER TEXT AREA (GLASSMORPISM) */}
      <div style={{
        padding: '30px 40px',
        background: 'rgba(255, 255, 255, 0.03)',
        borderTop: `1px solid rgba(255,255,255,0.05)`,
        textAlign: 'center'
      }}>
        <div style={{ 
          fontSize: 10, 
          color: color, 
          letterSpacing: '0.5em', 
          fontWeight: 900, 
          marginBottom: 10,
          textTransform: 'uppercase'
        }}>
          GEOMETRÍA {idxLabel(id)}
        </div>
        <div style={{ 
          fontSize: 42, 
          fontWeight: 900, 
          color: '#fff', 
          letterSpacing: '0.05em', 
          marginBottom: 10,
          textTransform: 'uppercase'
        }}>
          {label}
        </div>
        <div style={{ 
          fontSize: 12, 
          color: 'rgba(255,255,255,0.4)', 
          fontWeight: 700,
          maxWidth: 240,
          margin: '0 auto',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          lineHeight: 1.5
        }}>
          {desc}
        </div>

        <motion.div
          whileHover={{ scale: 1.05, background: color, color: '#000' }}
          style={{
            marginTop: 30,
            padding: '12px 0',
            width: '100%',
            border: `1px solid ${color}`,
            borderRadius: 4,
            fontSize: 11,
            fontWeight: 900,
            letterSpacing: '0.3em',
            color: color,
            transition: 'all 0.3s'
          }}
        >
          INGRESAR
        </motion.div>
      </div>
    </motion.div>
  );
};

const idxLabel = (id: string) => {
    if (id === 'frontLine') return 'ALPHA';
    if (id === 'soporte') return 'BETA';
    return 'GAMMA';
}

export const GalaxySelection = ({ onNavigate, onBack }: any) => {
  const sectors = [
    { 
      id: 'frontLine', 
      label: 'FRONT LINE', 
      desc: 'Atención primaria y gestión comercial directa.', 
      color: '#00A9E0', 
      tag: 'GLX-001'
    },
    { 
      id: 'soporte',   
      label: 'SOPORTE',    
      desc: 'Back office, procesos y fidelización de socios.', 
      color: '#D400FF', 
      tag: 'GLX-002'
    },
    { 
      id: 'fieldSupport', 
      label: 'FIELD SUPPORT', 
      desc: 'Mantenimiento técnico y operaciones tácticas.', 
      color: '#99CC33', 
      tag: 'GLX-003'
    },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: '#1B0088',
      backgroundImage: `
         radial-gradient(circle at 50% 50%, #1B0088 0%, #040114 100%)
      `,
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* OPTIMIZED STARFIELD BACKGROUND */}
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0
      }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          {[...Array(200)].map((_, i) => (
            <circle
              key={i}
              cx={`${Math.random() * 100}%`}
              cy={`${Math.random() * 100}%`}
              r={Math.random() * 0.8 + 0.2}
              fill="white"
              opacity={Math.random() * 0.5 + 0.1}
            />
          ))}
        </svg>
      </div>

      {/* HEADER */}
      <div style={{
        padding: '40px 60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 10
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
          <BackBtn onClick={onBack} label="VOLVER" />
          <div style={{ height: 30, width: 2, background: 'rgba(255,255,255,0.1)' }} />
          <span style={{ fontSize: 24, fontWeight: 900, letterSpacing: '0.4em', textTransform: 'uppercase', textShadow: '0 0 10px rgba(0,0,0,0.5)' }}>
            EXPLORACIÓN DE SECTORES
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          width: '100%',
          padding: '0 20px',
          perspective: '1500px'
        }}>
          {sectors.map((s, idx) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
            >
              <TacticalSectorCard 
                {...s}
                onClick={() => onNavigate('planets', s.id)} 
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* FOOTER DECOR */}
      <div style={{
        position: 'absolute',
        bottom: 40,
        width: '100%',
        textAlign: 'center',
        fontSize: 10,
        color: 'rgba(255,255,255,0.2)',
        fontWeight: 900,
        letterSpacing: '1em',
        zIndex: 10
      }}>
        LATAM_STATION // NAVIGATION_SYSTEM_BETA
      </div>
    </div>
  );
};

const thS = () => ({padding:'12px 10px', fontSize:10, color:'rgba(11,0,51,0.5)', textTransform:'uppercase', fontWeight:700, letterSpacing:'0.05em', textAlign:'left', borderBottom:'1px solid rgba(11,0,51,0.1)'});
const tdS = () => ({padding:'12px 10px', fontSize:12, borderBottom:'1px solid rgba(11,0,51,0.05)', color: '#0B0033'});

export const MacroTemaTable = ({ mt, rows }: any) => {
  const tiempo = rows[0] ? rows[0].tiempo||'' : '';
  return (
    <div style={{marginBottom:48}}>
      <div style={{display:'flex', alignItems:'center', gap:12, marginBottom:16, borderBottom:'2px solid rgba(11,0,51,0.2)', paddingBottom:12}}>
        <div style={{fontSize:16, fontWeight:900, color:'#0B0033', textTransform:'uppercase', letterSpacing:'0.05em'}}>{mt}</div>
        {tiempo&&<div style={{fontSize:11, color:'#B20F3B', background:'rgba(178,15,59,0.05)', border:'1px solid rgba(178,15,59,0.2)', padding:'2px 12px', borderRadius:12}}>⏱ {tiempo}</div>}
      </div>
      <table style={{width:'100%', borderCollapse:'collapse', background: '#ffffff', borderRadius: 8, overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.05)'}}>
        <thead>
          <tr style={{background:'#F4F5F9'}}>
            <th style={{...thS(), width:40}}>DÍA</th>
            <th style={{...thS(), width:160}}>TEMA</th>
            <th style={{...thS()}}>DETALHE PARA O INSTRUTOR</th>
            <th style={{...thS(), width:160}}>FERRAMENTAS</th>
            <th style={{...thS(), width:90}}>TIEMPO</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row,i)=>(
            <tr key={i} style={{background:i%2===0?'#fafafa':'#ffffff', verticalAlign:'top'}}>
              <td style={{...tdS(), textAlign:'center', fontWeight:700, width:40, color: '#B20F3B'}}>{row.dia}</td>
              <td style={{...tdS(), width:160}}>
                <div style={{fontSize:12, fontWeight:600, lineHeight:1.5, color: '#0B0033'}}>{row.tema}</div>
              </td>
              <td style={{...tdS()}}>
                <div style={{fontSize:12, lineHeight:1.6, whiteSpace:'pre-line', color: 'rgba(11,0,51,0.8)'}}>{row.detalhe||row.tema}</div>
                {row.detalheUrl && (
                  <a href={row.detalheUrl} target="_blank" rel="noopener noreferrer"
                    style={{display:'inline-flex', alignItems:'center', gap:4, marginTop:8, fontSize:11, color:'#B20F3B', fontWeight:600, textDecoration:'none', border:'1px solid rgba(178,15,59,0.2)', background:'rgba(178,15,59,0.05)', padding:'4px 12px', borderRadius:4, transition: 'all 0.2s ease'}}
                    onMouseEnter={e=>e.currentTarget.style.background='rgba(178,15,59,0.1)'}
                    onMouseLeave={e=>e.currentTarget.style.background='rgba(178,15,59,0.05)'}>
                    🔗 Ver recurso
                  </a>
                )}
              </td>
              <td style={{...tdS(), width:160}}>
                <span style={{fontSize:12, color:'rgba(11,0,51,0.7)'}}>{row.ferramentas||''}</span>
              </td>
              <td style={{...tdS(), width:90, textAlign:'center', fontWeight:700, fontSize:12, color: '#B20F3B'}}>{i===0?tiempo:''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
