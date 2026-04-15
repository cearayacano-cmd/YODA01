import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Wrench, BookOpen, Settings, Hexagon, Network, Microscope, Package, Box, Radar, Activity, Cpu } from 'lucide-react';

const Stars = () => (
  <div className="stars-container">
    {[...Array(50)].map((_, i) => (
      <div
        key={i}
        className="star"
        style={{
          width: Math.random() * 3 + 'px',
          height: Math.random() * 3 + 'px',
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%',
          opacity: Math.random(),
          animation: `stars-float ${Math.random() * 10 + 10}s linear infinite`
        }}
      />
    ))}
  </div>
);

export const RutaLiderView = ({ links, rutaData, onBack }: any) => {
  const [completed, setCompleted] = useState(new Set());
  const [activePanel, setActivePanel] = useState(null);
  const poderes = [...new Set((rutaData||[]).map((d: any)=>d.poder))];
  const getItems = (poder: any) => (rutaData||[]).filter((d: any)=>d.poder===poder);
  const temas = (poder: any) => {
    const items = getItems(poder);
    const map: any = {};
    items.forEach((item: any)=>{if(!map[item.tema])map[item.tema]=[];map[item.tema].push(item);});
    return map;
  };
  const handleComplete = (poder: any) => {
    const n = new Set([...completed, poder]);
    setCompleted(n);
    setActivePanel(null);
  };
  return (
    <div style={{minHeight:'100vh', background:'#F8F7FF', color: '#0B0033'}}>
      <div style={{background:'#111111', padding:'10px 24px', display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom: '1px solid rgba(0,0,0,0.1)'}}>
        <button onClick={onBack} style={{background:'#ffffff', border:'none', padding:'6px 16px', cursor:'pointer', fontSize:12, fontWeight:700, borderRadius:3}}>← VOLVER</button>
        <span style={{color:'#ffffff', fontSize:15, fontWeight:900}}>RUTA DEL LÍDER GUARDIÁN</span>
        <span style={{color:'#ffffff', fontSize:12}}>XP: {completed.size * 200} / {poderes.length*200}</span>
      </div>
      <div style={{padding:32, maxWidth:900, margin:'0 auto'}}>
        <div style={{fontSize:11, color:'rgba(11,0,51,0.5)', letterSpacing:'0.3em', textTransform:'uppercase', marginBottom:20}}>
          {completed.size}/{poderes.length} PODERES COMPLETADOS
        </div>
        {poderes.map((poder: any, pi: number) => {
          const isDone = completed.has(poder);
          const isOpen = activePanel === poder;
          const items = getItems(poder);
          const temasData = temas(poder);
          return (
            <div key={poder} style={{border:`2px solid ${isDone?'#B20F3B':'rgba(11,0,51,0.2)'}`, marginBottom:12, borderRadius:4, background: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}>
              <div onClick={()=>setActivePanel(isOpen?null:poder)} style={{padding:'14px 20px', cursor:'pointer', display:'flex', justifyContent:'space-between', alignItems:'center', transition: 'all 0.2s ease'}}
                onMouseEnter={e=>e.currentTarget.style.background='rgba(11,0,51,0.02)'}
                onMouseLeave={e=>e.currentTarget.style.background='transparent'}>
                <div>
                  <div style={{fontSize:10, color:isDone?'#B20F3B':'rgba(11,0,51,0.4)', letterSpacing:'0.2em', marginBottom:4}}>{isDone?'✓ COMPLETADO':'• DISPONIBLE'} · {items.length} NODOS</div>
                  <div style={{fontSize:16, fontWeight:900, color:'#111111', textTransform:'uppercase'}}>{poder}</div>
                </div>
                <div style={{fontSize:18, color: '#111111'}}>{isOpen?'▲':'▼'}</div>
              </div>
              {isOpen && (
                <div style={{borderTop:'1px solid rgba(11,0,51,0.1)', padding:'16px 20px', background:'#F4F5F9'}}>
                  {Object.entries(temasData).map(([tema, tItems]: [string, any])=>(
                    <div key={tema} style={{marginBottom:14}}>
                      <div style={{fontSize:11, fontWeight:700, color:'#B20F3B', textTransform:'uppercase', letterSpacing:'0.15em', marginBottom:8}}>{tema}</div>
                      {tItems.map((item: any,ii: number)=>(
                        <div key={ii} style={{padding:'8px 12px', marginBottom:4, border:'1px solid rgba(11,0,51,0.05)', borderRadius:3, background:'#ffffff'}}>
                          <div style={{fontSize:12, color:'#0B0033', marginBottom:item.consejo&&item.consejo!=='-'?4:0}}>{item.desc}</div>
                          {item.consejo&&item.consejo!=='-' && <div style={{fontSize:10, color:'rgba(11,0,51,0.5)'}}>💡 {item.consejo}</div>}
                          {item.adjunto&&item.adjunto!=='#' && <button onClick={()=>window.open(item.adjunto,'_blank')} style={{marginTop:6, background:'#F8F7FF', border:'1px solid rgba(11,0,51,0.2)', color: '#0B0033', padding:'3px 8px', cursor:'pointer', fontSize:10, borderRadius:3}}>ADJUNTO ↗</button>}
                        </div>
                      ))}
                    </div>
                  ))}
                  {!isDone && (
                    <button onClick={()=>handleComplete(poder)} style={{background:'#B20F3B', color:'#ffffff', border:'none', padding:'10px 24px', cursor:'pointer', fontSize:12, fontWeight:700, borderRadius:3, marginTop:8}}>
                      ✓ MARCAR COMO COMPLETADO
                    </button>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
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
            <Stars />
            
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
              whileHover={{ scale: 1.02, filter: `drop-shadow(0 0 25px ${themeColor}80)` }}
              style={{ position: 'relative', filter: `drop-shadow(0 5px 15px ${themeColor}60)`, transition: 'all 0.3s ease' }}
            >
              <div style={{
                position: 'absolute', inset: -2,
                background: `linear-gradient(45deg, ${themeColor}, #FF007F, ${themeColor})`,
                clipPath: 'polygon(20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 20px)',
                opacity: 0.8,
                zIndex: 0,
                animation: 'pulse-border 3s infinite alternate'
              }} />
              
              <div style={{
                position: 'relative',
                background: '#0B0033',
                clipPath: 'polygon(19px 0, calc(100% - 19px) 0, 100% 19px, 100% calc(100% - 19px), calc(100% - 19px) 100%, 19px 100%, 0 calc(100% - 19px), 0 19px)',
                padding: '20px 24px',
                display: 'flex', alignItems: 'center', gap: 24,
                cursor: 'pointer',
                zIndex: 1
              }} onClick={() => link.url !== '#' && window.open(link.url, '_blank')}>
                
                <div style={{
                  width: 80, height: 80,
                  position: 'relative',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: themeColor,
                    clipPath: 'polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)',
                    boxShadow: `0 0 25px ${themeColor}`
                  }} />
                  <div style={{
                    position: 'absolute', inset: 2,
                    background: '#0B0033',
                    clipPath: 'polygon(11px 0, calc(100% - 11px) 0, 100% 11px, 100% calc(100% - 11px), calc(100% - 11px) 100%, 11px 100%, 0 calc(100% - 11px), 0 11px)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: `inset 0 0 20px ${themeColor}90`
                  }}>
                    {listIcon}
                  </div>
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                    <div style={{ fontSize: 20, fontWeight: 900, color: '#FF007F', textShadow: '0 0 10px #FF007F' }}>{String(i + 1).padStart(2, '0')}</div>
                    <div style={{ fontSize: 18, fontWeight: 900, letterSpacing: '0.02em', color: '#ffffff', textTransform: 'uppercase', textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>{link.label}</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 11, fontWeight: 800, color: '#888', marginBottom: 8, textTransform: 'uppercase' }}>
                    <div>STATUS: <span style={{ color: '#00F3FF', textShadow: '0 0 8px #00F3FF' }}>● AVAILABLE</span></div>
                    <div style={{ color: '#444' }}>|</div>
                    <div>ACCESS: <span style={{ color: '#00F3FF', textShadow: '0 0 8px #00F3FF' }}>ENABLED</span></div>
                  </div>
                  <div style={{ fontSize: 13, color: '#aaa', fontWeight: 500 }}>
                    {description}
                  </div>
                </div>

                <div style={{
                  position: 'relative',
                  padding: '12px 24px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: themeColor,
                    clipPath: 'polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)',
                    boxShadow: `0 0 15px ${themeColor}80`
                  }} />
                  <div style={{
                    position: 'absolute', inset: 2,
                    background: '#0B0033',
                    clipPath: 'polygon(9px 0, calc(100% - 9px) 0, 100% 9px, 100% calc(100% - 9px), calc(100% - 9px) 100%, 9px 100%, 0 calc(100% - 9px), 0 9px)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: `inset 0 0 20px ${themeColor}90`
                  }} />
                  <div style={{ position: 'relative', zIndex: 1, fontSize: 12, fontWeight: 900, color: '#ffffff', display: 'flex', alignItems: 'center', gap: 8 }}>
                    {link.url && link.url !== '#' ? 'ABRIR RECURSO' : 'SIN ENLACE'}
                    <span style={{ color: '#00F3FF' }}>&gt;</span>
                  </div>
                </div>

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
        <Activity size={24} color="#ffffff" style={{ position: 'absolute', bottom: 5, right: 5, filter: 'drop-shadow(0 0 5px #ffffff)' }} />
      </motion.div>
    </div>
  );

  return (
    <TechBaseView
      title={title || 'LAB. DE ESTRATEGIA'}
      subtitle={subtitle || 'Portal de líderes, estrategias de formación y análisis de datos.'}
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
          whileHover={{ scale: 1.02, filter: `drop-shadow(0 0 25px ${themeColor}80)` }}
          style={{ position: 'relative', filter: `drop-shadow(0 5px 15px ${themeColor}60)`, transition: 'all 0.3s ease', marginBottom: 32 }}
        >
          <div style={{
            position: 'absolute', inset: -2,
            background: `linear-gradient(45deg, ${themeColor}, #558800, ${themeColor})`,
            clipPath: 'polygon(20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 20px)',
            opacity: 0.8,
            zIndex: 0,
            animation: 'pulse-border 3s infinite alternate'
          }} />
          
          <div style={{
            position: 'relative',
            background: '#0B0033',
            clipPath: 'polygon(19px 0, calc(100% - 19px) 0, 100% 19px, 100% calc(100% - 19px), calc(100% - 19px) 100%, 19px 100%, 0 calc(100% - 19px), 0 19px)',
            padding: '20px 24px',
            display: 'flex', alignItems: 'center', gap: 24,
            cursor: 'pointer',
            zIndex: 1
          }} onClick={onNavigateRuta}>
            
            <div style={{
              width: 80, height: 80,
              position: 'relative',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                background: themeColor,
                clipPath: 'polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)',
                boxShadow: `0 0 25px ${themeColor}`
              }} />
              <div style={{
                position: 'absolute', inset: 2,
                background: '#0B0033',
                clipPath: 'polygon(11px 0, calc(100% - 11px) 0, 100% 11px, 100% calc(100% - 11px), calc(100% - 11px) 100%, 11px 100%, 0 calc(100% - 11px), 0 11px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: `inset 0 0 20px ${themeColor}90`
              }}>
                <Microscope size={36} color="#ffffff" style={{ filter: `drop-shadow(0 0 8px ${themeColor})` }} strokeWidth={1.5} />
              </div>
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 10, color: themeColor, letterSpacing: '0.2em', fontWeight: 900, marginBottom: 4, textShadow: `0 0 8px ${themeColor}` }}>PROGRAMA FORMATIVO · CAPA LIDERAZGO</div>
              <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: '0.02em', color: '#ffffff', textTransform: 'uppercase', textShadow: '0 0 10px rgba(255,255,255,0.5)', marginBottom: 8 }}>RUTA DEL LÍDER GUARDIÁN</div>
              <div style={{ fontSize: 13, color: '#aaa', fontWeight: 500 }}>
                {rutaData.length} Nodos · Mapa Visual Interactivo
              </div>
            </div>

            <div style={{
              position: 'relative',
              padding: '12px 24px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                background: themeColor,
                clipPath: 'polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)',
                boxShadow: `0 0 15px ${themeColor}80`
              }} />
              <div style={{
                position: 'absolute', inset: 2,
                background: '#0B0033',
                clipPath: 'polygon(9px 0, calc(100% - 9px) 0, 100% 9px, 100% calc(100% - 9px), calc(100% - 9px) 100%, 9px 100%, 0 calc(100% - 9px), 0 9px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: `inset 0 0 20px ${themeColor}90`
              }} />
              <div style={{ position: 'relative', zIndex: 1, fontSize: 12, fontWeight: 900, color: '#ffffff', display: 'flex', alignItems: 'center', gap: 8 }}>
                ABRIR MAPA <span style={{ color: themeColor, textShadow: `0 0 8px ${themeColor}` }}>&gt;</span>
              </div>
            </div>

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
