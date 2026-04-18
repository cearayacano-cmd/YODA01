import React, { useState } from 'react';
import { Lock, ChevronLeft, Beaker, Settings, Package, Webcam, Rocket, Radar, Microscope, Cpu, Box, Activity } from 'lucide-react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Btn, BackBtn } from './Shared';

export const Landing = ({ onNavigate, onAdmin }: any) => (
  <div style={{minHeight:'100vh', background:'#ffffff', display:'flex', flexDirection:'column'}}>
    <div style={{background:'#111111', padding:'10px 24px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      <span style={{color:'#ffffff', fontSize:13, fontWeight:700, letterSpacing:'0.1em'}}>MISSION CONTROL • LATAM CARRIER</span>
      <button onClick={onAdmin} style={{background:'#ffffff', border:'2px solid #ffffff', padding:'5px 14px', cursor:'pointer', fontSize:11, fontWeight:700, color:'#111111', borderRadius:3}}>SYS.ADMIN</button>
    </div>
    <div style={{flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:40}}>
      <div style={{fontSize:14, color:'#555555', letterSpacing:'0.5em', textTransform:'uppercase', marginBottom:8}}>PREPARE FOR LAUNCH</div>
      <div style={{fontSize:64, fontWeight:900, letterSpacing:'0.08em', color:'#111111', marginBottom:4}}>UNIVERSO</div>
      <div style={{fontSize:16, fontWeight:700, letterSpacing:'0.5em', color:'#333333', marginBottom:40}}>CUSTOMER CARE</div>
      <div style={{display:'flex', gap:20, marginBottom:16}}>
        <div onClick={()=>onNavigate('ssc')} style={{border:'2px solid #111111', padding:'28px 40px', cursor:'pointer', textAlign:'center', borderRadius:6, minWidth:180}}
          onMouseEnter={e=>e.currentTarget.style.background='#f0f0f0'}
          onMouseLeave={e=>e.currentTarget.style.background='#ffffff'}>
          <div style={{fontSize:11, color:'#555555', letterSpacing:'0.3em', marginBottom:8}}>MISIÓN • SSC</div>
          <div style={{fontSize:42, fontWeight:900, color:'#111111', marginBottom:4}}>SSC</div>
          <div style={{fontSize:11, color:'#777777'}}>Satellite Alpha • Orbit 1</div>
          <div style={{marginTop:14, fontSize:11, fontWeight:700, letterSpacing:'0.18em'}}>INICIAR SECUENCIA →</div>
        </div>
        <div onClick={()=>onNavigate('br')} style={{border:'2px solid #111111', padding:'28px 40px', cursor:'pointer', textAlign:'center', borderRadius:6, minWidth:180}}
          onMouseEnter={e=>e.currentTarget.style.background='#f0f0f0'}
          onMouseLeave={e=>e.currentTarget.style.background='#ffffff'}>
          <div style={{fontSize:11, color:'#555555', letterSpacing:'0.3em', marginBottom:8}}>MISIÓN • BR</div>
          <div style={{fontSize:42, fontWeight:900, color:'#111111', marginBottom:4}}>BR</div>
          <div style={{fontSize:11, color:'#777777'}}>Satellite Beta • Orbit 2</div>
          <div style={{marginTop:14, fontSize:11, fontWeight:700, letterSpacing:'0.18em'}}>INICIAR SECUENCIA →</div>
        </div>
      </div>
    </div>
    <div style={{background:'#111111', padding:'8px 24px', display:'flex', justifyContent:'center'}}>
      <span style={{color:'#ffffff', fontSize:11, letterSpacing:'0.3em'}}>Selecciona tu destino • CHOOSE YOUR STATION</span>
    </div>
  </div>
);

const RotatingEarth = () => {
  return (
    <div style={{
      position: 'absolute',
      top: '55%', 
      left: '72%', 
      transform: 'translate(-50%, -50%)', 
      width: '450px',
      height: '450px',
      borderRadius: '50%',
      zIndex: 1,
      pointerEvents: 'none',
      boxShadow: `
        0 0 60px rgba(0, 150, 255, 0.6),               /* Intense Atmospheric Rim */
        0 0 120px rgba(0, 100, 255, 0.25)             /* Diffuse Bloom */
      `,
      overflow: 'hidden'
    }}>
      {/* LAYER 1: BASE SURFACE (DAY) */}
      <div style={{
        position: 'absolute',
        inset: 0,
        borderRadius: '50%',
        background: 'url("/earth-texture.png")',
        backgroundSize: '900px 450px',
        backgroundRepeat: 'repeat-x',
        animation: 'earthSeamlessRotate 120s linear infinite',
      }} />

      {/* LAYER 2: NIGHT LIGHTS (Visible only in shadow) */}
      <div style={{
        position: 'absolute',
        inset: 0,
        borderRadius: '50%',
        background: 'url("/earth_night_lights_v5_1776432149193.png")',
        backgroundSize: '900px 450px',
        backgroundRepeat: 'repeat-x',
        animation: 'earthSeamlessRotate 120s linear infinite',
        mixBlendMode: 'screen',
        opacity: 0.8,
        maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 40%, rgba(0,0,0,1) 60%)',
        WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 40%, rgba(0,0,0,1) 60%)'
      }} />

      {/* LAYER 3: MOVING CLOUDS (Parallax effect) */}
      <div style={{
        position: 'absolute',
        inset: 0,
        borderRadius: '50%',
        background: 'url("/earth_clouds_mask_1776432085038.png")',
        backgroundSize: '900px 450px',
        backgroundRepeat: 'repeat-x',
        animation: 'earthSeamlessRotate 180s linear infinite', /* Slightly slower than surface */
        opacity: 0.45,
        mixBlendMode: 'screen'
      }} />

      {/* LIGHTING & SHADOWS (Terminator Line) */}
      <div style={{
        position: 'absolute',
        inset: 0,
        borderRadius: '50%',
        background: 'linear-gradient(90deg, transparent 30%, rgba(0,0,0,0.85) 75%)',
        boxShadow: 'inset -30px 0 50px rgba(0,0,0,0.9), inset 30px 0 40px rgba(0,180,255,0.2)',
        pointerEvents: 'none'
      }} />

      {/* SPECULAR REFLECTION (Sun Glint) */}
      <div style={{
        position: 'absolute',
        inset: 0,
        borderRadius: '50%',
        background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.2) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />

      {/* ATMOSPHERIC RIM GLOW (Inner) */}
      <div style={{
        position: 'absolute',
        inset: 0,
        borderRadius: '50%',
        boxShadow: 'inset 0 0 30px rgba(0, 150, 255, 0.4)',
        pointerEvents: 'none'
      }} />
    </div>
  );
};

const SpaceBackground = () => {
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => setIsMounted(true), []);
  if (!isMounted) return <div style={{ position: 'absolute', inset: 0, background: '#0B0033' }} />;

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', background: '#0B0033' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 30%, #1B0088 0%, #0B0033 80%)' }} />
      <RotatingEarth />
      {/* ... stars ... */}
      {[...Array(20)].map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 3}px`,
          height: `${Math.random() * 3}px`,
          background: '#ffffff',
          borderRadius: '50%',
          boxShadow: '0 0 10px #ffffff',
          animation: `pulse ${2 + Math.random() * 4}s infinite ease-in-out`,
          animationDelay: `${Math.random() * 5}s`
        }} />
      ))}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.4, backgroundImage: 'radial-gradient(1px 1px at 20px 30px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #ffffff, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 50px 160px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 90px 40px, #ffffff, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 130px 80px, #ffffff, rgba(0,0,0,0))', backgroundSize: '200px 200px' }} />
      <div style={{ position: 'absolute', top: '10%', left: '20%', width: '60%', height: '40%', background: 'radial-gradient(ellipse, rgba(178,15,59,0.1) 0%, rgba(27,0,136,0) 70%)', filter: 'blur(60px)', transform: 'rotate(-15deg)', animation: 'pulse 10s infinite alternate ease-in-out' }} />
      <div style={{ position: 'absolute', top: '30%', right: '10%', width: '50%', height: '50%', background: 'radial-gradient(ellipse, rgba(0,214,204,0.1) 0%, rgba(27,0,136,0) 70%)', filter: 'blur(80px)', transform: 'rotate(20deg)', animation: 'pulse 12s infinite alternate-reverse ease-in-out' }} />
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.4; transform: scale(0.8); } }
        @keyframes earthSeamlessRotate { from { background-position: 0 0; } to { background-position: -900px 0; } }
      `}} />
    </div>


  );
};

const CommandCenterInterior = ({ isAlert, isDim, isHudHidden }: any) => {
  const wallPath = `
    M 0,0 L 1000,0 L 1000,600 L 0,600 L 0,0 Z 
    M 300,80 L 700,80 L 750,130 L 750,390 L 700,440 L 300,440 L 250,390 L 250,130 Z
  `.replace(/\n/g, ' ');

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 10 }}>
      <svg width="100%" height="100%" viewBox="0 0 1000 600" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0 }}>
        <defs>
          <linearGradient id="metalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={isAlert ? "#B20F3B" : isDim ? "#0F172A" : "#F5F6FA"} />
            <stop offset="50%" stopColor={isAlert ? "#7A0A28" : isDim ? "#1E293B" : "#EBEDF5"} />
            <stop offset="100%" stopColor={isAlert ? "#4A0618" : isDim ? "#020617" : "#DDE1E7"} />
          </linearGradient>
          <pattern id="techGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(27,0,136,0.12)" strokeWidth="0.5"/>
            <circle cx="0" cy="0" r="1.5" fill="rgba(27,0,136,0.08)"/>
          </pattern>
          <filter id="neonGlow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* FULL-SCREEN INTERIOR WALL WITH CUTOUT */}
        <path d={wallPath} fill="url(#metalGrad)" fillRule="evenodd" />
        <path d={wallPath} fill="url(#techGrid)" fillRule="evenodd" />

        {/* ALERT MODE PULSING OVERLAY */}
        {isAlert && (
          <motion.path 
            d={wallPath} fill="#B20F3B" fillRule="evenodd"
            animate={{ opacity: [0, 0.15, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        )}

        {/* WINDOW FRAME */}
        <path 
          d="M 300,80 L 700,80 L 750,130 L 750,390 L 700,440 L 300,440 L 250,390 L 250,130 Z" 
          fill="none" 
          stroke={isAlert ? "#B20F3B" : "#A0A0B0"} 
          strokeWidth="3" 
        />
        
        {/* Edge LED Elements */}
        <path d="M 320,85 L 450,85" stroke="#00FFF2" strokeWidth="3" filter="url(#neonGlow)" />
        <path d="M 550,85 L 680,85" stroke="#00FFF2" strokeWidth="3" filter="url(#neonGlow)" />
      </svg>
    </div>
  );
};

const ConsoleSideFrame = ({ children, side }: any) => {
  const rotation = side === 'left' ? 15 : -15;
  return (
    <div style={{
      position: 'relative',
      padding: '20px 8px',
      background: 'linear-gradient(135deg, #A0A0B0 0%, #D1D1D1 30%, #9A9AA5 50%, #7A7A8A 100%)',
      borderRadius: '8px',
      border: '1px solid rgba(255,255,255,0.6)',
      boxShadow: `
        0 25px 50px rgba(0,0,0,0.4),
        inset 0 1px 1px rgba(255,255,255,0.8),
        inset 0 -2px 10px rgba(0,0,0,0.2)
      `,
      display: 'flex',
      flexDirection: 'column',
      gap: '0px',
      width: '365px',
      zIndex: 25,
      transform: `perspective(1800px) rotateY(${rotation}deg) rotateX(2deg)`,
      transformStyle: 'preserve-3d',
    }}>
      {/* LED EDGE PIPES */}
      <div style={{ position: 'absolute', top: '10%', [side === 'left' ? 'left' : 'right']: -3, height: '80%', width: 2, background: '#00FFF2', boxShadow: '0 0 15px #00FFF2', borderRadius: 2, opacity: 0.8 }} />
      <div style={{ position: 'absolute', top: -1, [side === 'left' ? 'left' : 'right']: '10%', width: '40%', height: 2, background: '#00FFF2', boxShadow: '0 0 15px #00FFF2', borderRadius: 2, opacity: 0.6 }} />

      {/* TECHNICAL DECALS */}
      <div style={{ position: 'absolute', top: 6, [side === 'left' ? 'left' : 'right']: 10, fontSize: 8, fontFamily: 'monospace', fontWeight: 900, color: 'rgba(0,0,0,0.5)', letterSpacing: '0.1em' }}>
        HUD_UNIT_B7 // {side === 'left' ? 'PORT' : 'STARBOARD'}
      </div>
      <div style={{ position: 'absolute', bottom: 6, [side === 'left' ? 'right' : 'left']: 10, fontSize: 7, fontFamily: 'monospace', fontWeight: 800, color: 'rgba(0,0,0,0.3)' }}>
        SER_NO: 89AB-0021-X
      </div>

      {/* PROCESSING LEDS */}
      <div style={{ position: 'absolute', top: 20, [side === 'left' ? 'right' : 'left']: -4, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <motion.div animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 0.8, repeat: Infinity }} style={{ width: 4, height: 4, borderRadius: '50%', background: '#22c55e', border: '1px solid rgba(255,255,255,0.4)' }} />
        <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.2, repeat: Infinity }} style={{ width: 4, height: 4, borderRadius: '50%', background: '#ef4444', border: '1px solid rgba(255,255,255,0.4)' }} />
        <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#FFE017', border: '1px solid rgba(255,255,255,0.4)' }} />
      </div>

      {children}
    </div>
  );
};

const ModuleCard = ({ sec, title, subtitle, color, icon, stats, onClick }: any) => {
  return (
    <motion.div
      onClick={onClick}
      style={{
        width: '100%',
        height: '280px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        cursor: 'pointer',
        overflow: 'hidden',
        transition: 'all 0.4s ease',
        background: '#1B0088',
        border: '1px solid rgba(255,255,255,0.15)',
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ 
        filter: 'brightness(1.2)',
        backgroundColor: '#2300AA'
      }}
    >
      {/* Glass Panel Bezel */}
      <div style={{ position: 'absolute', inset: 0, border: '2px solid rgba(255,255,255,0.1)', pointerEvents: 'none', zIndex: 10 }} />
      <div style={{ position: 'absolute', inset: 1, border: '1px solid rgba(0,0,0,0.3)', pointerEvents: 'none', zIndex: 10 }} />

      {/* Realistic Glass Reflection */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: 'linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.08) 48%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.08) 52%, transparent 55%)',
        zIndex: 11,
        pointerEvents: 'none',
        transform: 'rotate(-20deg)',
        opacity: 0.6
      }} />

      {/* Internal Glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 50% 0%, ${color}15 0%, transparent 70%)`,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Glossy Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 50%, rgba(255,255,255,0.02) 100%)',
        zIndex: 1,
        pointerEvents: 'none'
      }} />

      {/* Tactical Corners */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: 16, height: 16, borderTop: `4px solid ${color}`, borderLeft: `4px solid ${color}`, zIndex: 3 }} />
      <div style={{ position: 'absolute', top: 0, right: 0, width: 16, height: 16, borderTop: `4px solid ${color}`, borderRight: `4px solid ${color}`, zIndex: 3 }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: 16, height: 16, borderBottom: `4px solid ${color}`, borderLeft: `4px solid ${color}`, zIndex: 3 }} />
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: 16, height: 16, borderBottom: `4px solid ${color}`, borderRight: `4px solid ${color}`, zIndex: 3 }} />

      <div style={{ zIndex: 2, position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <div style={{ fontSize: 13, color: color, letterSpacing: '0.15em', fontWeight: 900 }}>{sec}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: '#ffffff', letterSpacing: '0.1em', fontWeight: 900 }}>
            <motion.div 
              animate={{ opacity: [1, 0.5, 1] }} 
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ width: 8, height: 8, background: '#22c55e', borderRadius: '50%', boxShadow: '0 0 10px #22c55e' }} 
            />
            ONLINE
          </div>
        </div>

        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 22, fontWeight: 900, color: '#ffffff', marginBottom: 2, lineHeight: 1.1, letterSpacing: '0.02em' }}>{title}</div>
          <div style={{ fontSize: 10, color: color, letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 900, opacity: 0.9 }}>{subtitle}</div>
        </div>

        {/* ICON SCAN AREA */}
        <div style={{ 
          height: '100px', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          background: 'rgba(0,0,0,0.5)',
          borderRadius: '4px',
          position: 'relative',
          border: `1px solid ${color}40`,
          overflow: 'hidden',
          marginBottom: 16,
          backgroundImage: `linear-gradient(${color}10 1px, transparent 1px), linear-gradient(90deg, ${color}10 1px, transparent 1px)`,
          backgroundSize: '12px 12px'
        }}>
          {/* SCANNER LINE */}
          <motion.div 
            animate={{ top: ['0%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              height: '3px',
              background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
              boxShadow: `0 0 20px ${color}`,
              zIndex: 10,
              pointerEvents: 'none',
              opacity: 0.8
            }}
          />

          <motion.div 
            animate={{ 
              filter: [`drop-shadow(0 0 20px ${color})`, `drop-shadow(0 0 10px ${color}80)`],
              scale: 1.3
            }}
            transition={{ duration: 2, repeat: Infinity, alternate: true }}
            style={{ color: color }}
          >
            {React.cloneElement(icon, { color: 'currentColor', strokeWidth: 1.5, size: 28 })}
          </motion.div>
        </div>
      </div>

      {/* STATS AREA - Refined Dual Box Layout */}
      <div style={{ display: 'flex', gap: '4px', zIndex: 12, position: 'relative' }}>
        <div style={{ 
          flex: 1, 
          background: 'rgba(0, 0, 0, 0.3)', 
          padding: '8px 12px', 
          border: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', fontWeight: 900, marginBottom: 2, textTransform: 'uppercase' }}>{stats[0].label}</div>
          <div style={{ fontSize: 16, fontWeight: 900, color: '#ffffff' }}>{stats[0].val}</div>
        </div>
        <div style={{ 
          flex: 0.8, 
          background: 'rgba(0, 0, 0, 0.3)', 
          padding: '8px 12px', 
          border: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', fontWeight: 900, marginBottom: 2, textTransform: 'uppercase' }}>ACTIVOS</div>
          <div style={{ fontSize: 16, fontWeight: 900, color: color }}>OK</div>
        </div>
      </div>
    </motion.div>
  );
};

const CentralMonitorCard = ({ onNavigate }: any) => {
  const color = "#B20F3B"; // Use red theme for the central mission module
  return (
    <motion.div
      style={{
        width: '440px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        background: '#1B0088',
        border: '1px solid rgba(255,255,255,0.15)',
        boxShadow: '0 40px 80px rgba(0,0,0,0.4)',
        transform: 'perspective(1500px) rotateX(10deg)',
        transformStyle: 'preserve-3d',
        zIndex: 20
      }}
    >
      {/* Glass Panel Bezel */}
      <div style={{ position: 'absolute', inset: 0, border: '2px solid rgba(255,255,255,0.1)', pointerEvents: 'none', zIndex: 10 }} />
      
      {/* Tactical Corners */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: 24, height: 24, borderTop: `6px solid ${color}`, borderLeft: `6px solid ${color}`, zIndex: 3 }} />
      <div style={{ position: 'absolute', top: 0, right: 0, width: 24, height: 24, borderTop: `6px solid ${color}`, borderRight: `6px solid ${color}`, zIndex: 3 }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: 24, height: 24, borderBottom: `6px solid ${color}`, borderLeft: `6px solid ${color}`, zIndex: 3 }} />
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: 24, height: 24, borderBottom: `6px solid ${color}`, borderRight: `6px solid ${color}`, zIndex: 3 }} />

      <div style={{ zIndex: 2, position: 'relative', width: '100%', textAlign: 'center' }}>
        <div style={{ fontSize: 9, color: color, letterSpacing: '0.3em', fontWeight: 900, marginBottom: 4, textTransform: 'uppercase' }}>HANGAR BAY - DOCK-01</div>
        <div style={{ fontSize: 24, fontWeight: 900, color: '#ffffff', marginBottom: 20, letterSpacing: '0.05em' }}>NAVE DE EXPLORACIÓN</div>

        {/* SCANNER AREA */}
        <div style={{ 
          height: '60px', 
          width: '100%',
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          background: 'rgba(0,0,0,0.5)',
          borderRadius: '4px',
          position: 'relative',
          border: `1px solid ${color}40`,
          overflow: 'hidden',
          marginBottom: 24,
          backgroundImage: `linear-gradient(${color}10 1px, transparent 1px), linear-gradient(90deg, ${color}10 1px, transparent 1px)`,
          backgroundSize: '16px 16px'
        }}>
          <motion.div 
            animate={{ left: ['0%', '100%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              width: '4px',
              background: `linear-gradient(180deg, transparent, ${color}, transparent)`,
              boxShadow: `0 0 20px ${color}`,
              zIndex: 10,
              pointerEvents: 'none',
              opacity: 0.8
            }}
          />
          <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
            <Activity color={color} size={20} />
            <div style={{ fontSize: 10, color: '#ffffff', fontFamily: 'monospace', letterSpacing: '0.2em' }}>SYS_READY // PROPULSION: 100%</div>
          </div>
        </div>

        <motion.button 
          whileHover={{ scale: 1.02, backgroundColor: '#d11246' }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onNavigate('galaxies')} 
          style={{ 
            background: color, 
            color: '#fff', 
            padding: '16px 32px', 
            borderRadius: '4px', 
            width: '100%', 
            fontSize: 12, 
            fontWeight: 900, 
            cursor: 'pointer', 
            border: 'none',
            letterSpacing: '0.2em',
            boxShadow: `0 0 20px ${color}40`,
            textTransform: 'uppercase'
          }}
        >
          + LAUNCH SEQUENCE
        </motion.button>
      </div>
    </motion.div>
  );
};

const SpaceKeyboard = ({ onAlert, onHud, onDim, onMonitoring, states }: any) => {
  const { alertMode, hudHidden, dimLights } = states;
  
  const Key = ({ label, color, active, onClick, large }: any) => (
    <motion.div
      whileHover={{ scale: 1.05, filter: 'brightness(1.5)' }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      style={{
        width: large ? '120px' : '48px',
        height: '32px',
        background: active ? color : 'rgba(255,255,255,0.1)',
        border: `1px solid ${active ? color : 'rgba(255,255,255,0.3)'}`,
        borderRadius: '3px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: active ? `0 0 20px ${color}` : 'none',
        position: 'relative',
        transition: 'all 0.3s ease',
        textAlign: 'center'
      }}
    >
      <span style={{ fontSize: label.length > 10 ? 6 : 7, fontWeight: 900, color: active ? '#fff' : 'rgba(255,255,255,0.6)', letterSpacing: '0.1em', padding: '0 4px' }}>{label}</span>
      {active && <div style={{ position: 'absolute', top: 2, right: 2, width: 4, height: 4, borderRadius: '50%', background: '#fff' }} />}
    </motion.div>
  );

  return (
    <div style={{ 
      position: 'absolute', 
      bottom: '45px', 
      left: '50%', 
      transform: 'translateX(-50%) perspective(1500px) rotateX(45deg)',
      width: '800px',
      height: '160px',
      zIndex: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      pointerEvents: 'auto'
    }}>
      <svg width="800" height="160" viewBox="0 0 800 160" style={{ position: 'absolute', top: 0, left: 0 }}>
        <defs>
          <linearGradient id="consoleGradColorful" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={alertMode ? "#4A0618" : "#1E293B"} />
            <stop offset="100%" stopColor={alertMode ? "#1A0308" : "#020617"} />
          </linearGradient>
        </defs>
        <path d="M 120,0 L 680,0 L 800,160 L 0,160 Z" fill="url(#consoleGradColorful)" stroke="#00FFF2" strokeWidth="2" strokeOpacity="0.5" />
      </svg>
      
      <div style={{ marginTop: '15px', width: '440px', height: '28px', background: 'rgba(0,0,0,0.8)', border: '1px solid rgba(0,214,204,0.3)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 15px', color: alertMode ? '#ff0000' : '#00D6CC', fontFamily: 'monospace', fontSize: '9px', letterSpacing: '2px', position: 'relative', zIndex: 2 }}>
        <span>SYS: {alertMode ? 'ALERT_MODE' : 'NOMINAL'}</span>
        <span style={{ fontWeight: 900 }}>COMMAND_INTERFACE_V_5.0</span>
      </div>

      <div style={{ marginTop: '20px', display: 'flex', gap: '30px', position: 'relative', zIndex: 2 }}>
        {/* LEFT CLUSTER */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
          <Key label="NAV" color="#00D6CC" />
          <Key label="ENG" color="#D400FF" />
          <Key label="COM" color="#FFE017" />
          <Key label="LT" color="#00D6CC" active={!dimLights} onClick={onDim} />
        </div>

        {/* CENTER ACTION CLUSTER */}
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Key label="!! ALERT !!" color="#B20F3B" active={alertMode} onClick={onAlert} large />
          <Key label="PAINÉIS & RELATÓRIOS" color="#00D6CC" onClick={onMonitoring} large />
          <Key label="HUD" color="#00FFF2" active={!hudHidden} onClick={onHud} />
        </div>

        {/* RIGHT CLUSTER */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
          <Key label="SCAN" color="#A4FF00" />
          <Key label="GEN" color="#00D6CC" />
          <Key label="RST" color="#B20F3B" />
          <Key label="AUTO" color="#00FFF2" />
        </div>
      </div>
    </div>
  );
};

export const BaseStation = ({ stationName, config, onBack, onNavigate }: any) => {
  const [alertMode, setAlertMode] = useState(false);
  const [hudHidden, setHudHidden] = useState(false);
  const [dimLights, setDimLights] = useState(false);

  return (
    <div style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', backgroundColor: '#0B0033', fontFamily: '"Inter", sans-serif', display: 'flex', flexDirection: 'column' }}>
      <SpaceBackground />
      {!hudHidden && <CommandCenterInterior isAlert={alertMode} isDim={dimLights} isHudHidden={hudHidden} />}
      <SpaceKeyboard 
        onAlert={() => setAlertMode(!alertMode)}
        onHud={() => setHudHidden(!hudHidden)}
        onDim={() => setDimLights(!dimLights)}
        onMonitoring={() => config.monitoringUrl && window.open(config.monitoringUrl, '_blank')}
        states={{ alertMode, hudHidden, dimLights }}
      />

      <div style={{ height: '64px', background: alertMode ? '#4A0618' : '#E8E7F2', position: 'relative', zIndex: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 32px', transition: 'all 0.5s ease' }}>
        <button onClick={onBack} style={{ background: '#fff', border: '1px solid rgba(11,0,51,0.1)', padding: '8px 20px', borderRadius: '30px', color: '#0B0033', fontWeight: 800, fontSize: 11, cursor: 'pointer' }}>
          ← SALIR
        </button>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 10, letterSpacing: '0.4em', color: alertMode ? '#ff5555' : '#64748b', textTransform: 'uppercase', marginBottom: 2, fontWeight: 700 }}>Estación Espacial</div>
          <div style={{ fontSize: 20, fontWeight: 900, color: alertMode ? '#fff' : '#0B0033', letterSpacing: '0.1em' }}>{stationName} STATION</div>
        </div>
        <div style={{ display: 'flex', gap: 12, color: alertMode ? '#fff' : '#0B0033', fontSize: 10, fontWeight: 800 }}>
          <span>SOFT: 99%</span> | <span>ER: BR</span>
        </div>
      </div>

      <div style={{ flex: 1, position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 40px' }}>
        <ConsoleSideFrame side="left">
          <ModuleCard 
            sec="SEC-A1" title="PORTAL DE LÍDERES" subtitle="LAB. DE ESTRATEGIA" color="#A4FF00" side="left"
            icon={<Microscope />} stats={[{label: 'RECURSOS', val: config.laboratorio?.length || 0}]} onClick={() => onNavigate('laboratorio')} 
          />
          <ModuleCard 
            sec="SEC-A2" title="TALLERES" subtitle="TALLER DE INGENIERÍA" color="#D400FF" side="left"
            icon={<Cpu />} stats={[{label: 'TALLERES', val: config.ingenieria?.length || 0}]} onClick={() => onNavigate('ingenieria')} 
          />
        </ConsoleSideFrame>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'translateY(88px)' }}>
          <CentralMonitorCard onNavigate={onNavigate} />
        </div>

        <ConsoleSideFrame side="right">
          <ModuleCard 
            sec="SEC-B1" title="FORMULARIOS" subtitle="MÓDULO DE SUMINISTROS" color="#00FFF2" side="right"
            icon={<Package />} stats={[{label: 'FORMULARIOS', val: config.suministros?.length || 0}]} onClick={() => onNavigate('suministros')} 
          />
          <ModuleCard 
            sec="SEC-B2" title="PORTAL INSTRUCTOR" subtitle="CENTRO DE OPERACIONES" color="#FFE017" side="right"
            icon={<Radar />} stats={[{label: 'MÓDULOS', val: config.operaciones?.length || 0}]} onClick={() => onNavigate('operaciones')} 
          />
        </ConsoleSideFrame>
      </div>

      <div style={{ height: '64px', background: alertMode ? '#4A0618' : '#E8E7F2', position: 'relative', zIndex: 20, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 32px', borderTop: alertMode ? '1px solid #ff0000' : 'none', transition: 'all 0.5s ease' }}>
        <div style={{ fontSize: 10, fontWeight: 800, color: alertMode ? '#ffaaaa' : '#64748b' }}>Universo Training | Customer Care & Sales</div>
      </div>
    </div>
  );
};
