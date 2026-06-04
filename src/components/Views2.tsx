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
      <motion.div
        animate={{ 
          rotateX: 50, 
          rotateY: 10,
          rotateZ: [0, -360] 
        }}
        transition={{ 
          rotateZ: { duration: 180, repeat: Infinity, ease: "linear" },
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
        {/* EXTERNAL NEBULA CLOUD */}
        <motion.div 
          animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{
            position: 'absolute',
            width: '180%',
            height: '180%',
            background: `radial-gradient(circle, ${color}22 0%, transparent 70%)`,
            filter: 'blur(50px)',
            transform: 'translateZ(-20px)'
          }} 
        />

        {/* BRIGHT GASEOUS ARMS (NEBULA STRANDS) */}
        {[0, 120, 240].map((rot) => (
          <div key={rot} style={{ position: 'absolute', width: '100%', height: '100%', transform: `rotate(${rot}deg)` }}>
            <div style={{
              position: 'absolute',
              top: '20%',
              left: '50%',
              width: '40%',
              height: '60%',
              background: `radial-gradient(ellipse at center, ${color}44 0%, transparent 80%)`,
              filter: 'blur(35px)',
              borderRadius: '50%',
              transform: 'rotate(-30deg)'
            }} />
          </div>
        ))}

        {/* DENSE STAR CORE */}
        <div style={{
          position: 'absolute',
          width: '20px',
          height: '20px',
          background: '#fff',
          borderRadius: '50%',
          boxShadow: `0 0 20px #fff, 0 0 50px ${color}, 0 0 100px ${color}66`,
          zIndex: 10
        }} />

        {/* LOGARITHMIC DUST PARTICLES (Simulating stars) */}
        <svg viewBox="-50 -50 100 100" style={{ width: '140%', height: '140%', overflow: 'visible', opacity: 0.8 }}>
          {[...Array(120)].map((_, i) => {
            const angle = i * 0.4;
            const r = 4 * Math.exp(0.25 * angle);
            if (r > 60) return null;
            const x = r * Math.cos(angle + (i % 3) * (Math.PI * 2 / 3));
            const y = r * Math.sin(angle + (i % 3) * (Math.PI * 2 / 3));
            const size = Math.random() * 1.5;
            return (
              <motion.circle
                key={i}
                cx={x} cy={y} r={size}
                fill={i % 5 === 0 ? '#fff' : color}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 5 }}
              />
            );
          })}
        </svg>

        {/* CORE GLOW PULSE */}
        <motion.div 
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{
            position: 'absolute',
            width: '80px',
            height: '80px',
            background: `radial-gradient(circle, ${color}66 0%, transparent 70%)`,
            filter: 'blur(20px)',
            zIndex: 5
          }}
        />
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
        height: 580,
        background: '#0F004F',
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
      }}>
        <GalaxyVisual color={color} />
      </div>

      {/* LOWER TEXT AREA (GLASSMORPISM) */}
      <div style={{
        padding: '30px 40px',
        background: '#0F004F',
        borderTop: `1px solid rgba(255,255,255,0.08)`,
        textAlign: 'center'
      }}>
          EXPEDIÇÃO
        <div style={{ 
          fontSize: 36, 
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
          ACESSAR
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
      desc: '', 
      color: '#00A9E0', 
      tag: 'GLX-001'
    },
    { 
      id: 'soporte',   
      label: 'SUPORTE',    
      desc: '', 
      color: '#D400FF', 
      tag: 'GLX-002'
    },
    { 
      id: 'fieldSupport', 
      label: 'FIELD SUPPORT', 
      desc: '', 
      color: '#99CC33', 
      tag: 'GLX-003'
    },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(circle at 50% 50%, #1B0088 0%, #0F004F 100%)',
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
          {[...Array(500)].map((_, i) => (
            <circle
              key={i}
              cx={`${Math.random() * 100}%`}
              cy={`${Math.random() * 100}%`}
              r={Math.random() * 0.8 + 0.2}
              fill="white"
              opacity={Math.random() * 0.6 + 0.1}
            />
          ))}
        </svg>
      </div>

      {/* HEADER */}
      <div style={{
        padding: '60px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        position: 'relative'
      }}>
        <div style={{ position: 'absolute', left: 60 }}>
          <BackBtn onClick={onBack} label="VOLTAR" />
        </div>
        
        <span style={{ 
          fontSize: 32, 
          fontWeight: 900, 
          letterSpacing: '0.4em', 
          textTransform: 'uppercase', 
          textAlign: 'center',
          textShadow: '0 0 20px rgba(0,0,0,0.5)' 
        }}>
          SELECIONE A EXPEDIÇÃO
        </span>
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
          perspective: '1500px',
          transform: 'translateY(-30px)'
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

      {/* FOOTER DECOR REMOVED */}
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
