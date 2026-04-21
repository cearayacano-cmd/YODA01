import React, { useState } from 'react';
import { Lock, ChevronLeft, Beaker, Settings, Package, Webcam, Rocket, Radar, Microscope, Cpu, Box, Activity, Monitor, Eye, Sun, Layers } from 'lucide-react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Btn, BackBtn, TacticalSatelliteIcon } from './Shared';

const MissionIcon = ({ color, alertMode }: any) => (
  <motion.div
    animate={{ 
      y: [0, -3, 0],
      rotate: [0, 2, 0]
    }}
    transition={{ 
      duration: 4, 
      repeat: Infinity, 
      ease: 'easeInOut' 
    }}
    style={{ position: 'relative', width: 200, height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}
  >
    <TacticalSatelliteIcon size={180} color={color} />
  </motion.div>
);

const LandingMissionCard = ({ title, subtitle, id, color, onClick }: any) => (
  <motion.div 
    onClick={onClick}
    whileHover={{ scale: 1.05, translateY: -10 }}
    style={{
      background: 'rgba(15, 0, 79, 0.4)',
      backdropFilter: 'blur(12px)',
      border: `1px solid ${color}40`,
      padding: '50px 40px',
      cursor: 'pointer',
      textAlign: 'center',
      borderRadius: 12,
      minWidth: 320,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: `0 20px 40px rgba(0,0,0,0.4), inset 0 0 20px ${color}10`
    }}
  >
    {/* Decorative corner light */}
    <div style={{ position: 'absolute', top: 0, right: 0, width: 40, height: 40, background: `radial-gradient(circle at top right, ${color}30, transparent)`, borderRadius: '0 12px 0 0' }} />
    
    <div style={{ fontSize: 11, color: '#999', letterSpacing: '0.4em', marginBottom: 15, fontWeight: 700 }}>MISIÓN • {id.toUpperCase()}</div>
    <MissionIcon color={color} />
    <div style={{ fontSize: 72, fontWeight: 900, color: '#fff', marginBottom: 8, letterSpacing: '0.05em' }}>{id.toUpperCase()}</div>
    <div style={{ fontSize: 14, color: '#bbb', marginBottom: 30, fontWeight: 500 }}>{subtitle}</div>
    
    <div style={{ 
      padding: '10px 24px', 
      background: color, 
      color: '#fff', 
      fontSize: 10, 
      fontWeight: 900, 
      borderRadius: 4, 
      letterSpacing: '0.2em' 
    }}>
      INICIAR SECUENCIA
    </div>
  </motion.div>
);

export const Landing = ({ onNavigate, onAdmin }: any) => (
  <div style={{minHeight:'100vh', background:'#0F004F', display:'flex', flexDirection:'column', position: 'relative', overflow: 'hidden'}}>
    <SpaceBackground showEarth={false} showShip={false} showHorizon={true} />
    {/* Header */}
    <div style={{background:'linear-gradient(to bottom, rgba(15, 0, 79, 0.9), transparent)', padding:'24px 48px', display:'flex', justifyContent:'space-between', alignItems:'center', zIndex: 10}}>
      <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
        <div style={{width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.05)'}}>
          <Rocket size={18} color="#fff" />
        </div>
        <span style={{color:'#ffffff', fontSize:12, fontWeight:900, letterSpacing:'0.3em', opacity: 0.8}}>Capacitación | Customer Care & Sales</span>
      </div>
      <button onClick={onAdmin} style={{background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.2)', padding:'8px 24px', cursor:'pointer', fontSize:10, fontWeight:900, color:'#fff', borderRadius:30, letterSpacing: '0.15em', backdropFilter: 'blur(10px)'}}>
        SYS.ADMIN
      </button>
    </div>

    {/* Content */}
    <div style={{flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', paddingBottom: 100, zIndex: 10}}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{textAlign: 'center', marginBottom: 50}}
      >
        <div style={{ textAlign: 'center' }}>
          <div style={{fontSize:110, fontWeight:900, letterSpacing:'0.05em', color:'#fff', lineHeight: 0.9, textShadow: '0 0 60px rgba(0,255,242,0.3)', marginBottom: 12}}>UNIVERSO</div>
          <div style={{fontSize:20, fontWeight:500, letterSpacing:'0.7em', color:'rgba(255,255,255,0.5)', textTransform: 'uppercase'}}>Customer Care & Sales</div>
        </div>
      </motion.div>

      <div style={{display:'flex', gap:60, alignItems: 'center'}}>
        <LandingMissionCard 
          id="ssc" 
          subtitle="Satellite Alpha • Orbit 1" 
          color="#7000AB" 
          onClick={() => onNavigate('ssc')} 
        />

        {/* Center Nave with floating animation and thruster effects */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: 1, 
            y: [0, -15, 0]
          }}
          transition={{ 
            opacity: { duration: 1 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          style={{ position: 'relative', width: 400, display: 'flex', justifyContent: 'center' }}
        >
          <img 
            src="/Nave.png" 
            alt="Nave" 
            style={{ height: 460, width: 'auto', filter: 'drop-shadow(0 0 60px rgba(0,255,242,0.6))' }} 
          />
          {/* 4 Thruster Glow Spheres & Propulsores - Perfectly Synchronized */}
          {[
            { bottom: 24, left: '36.0%', isOuter: true },
            { bottom: 24, left: '58.0%', isOuter: true },
            { bottom: -2, left: '44.0%', isOuter: false },
            { bottom: -2, left: '52.0%', isOuter: false }
          ].map((pos: any, i) => (
            <div key={i} style={{ position: 'absolute', bottom: pos.bottom, left: pos.left, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <motion.div
                animate={{ 
                  scale: [1, 1.15, 1],
                  opacity: [0.9, 1, 0.9]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                style={{
                  width: pos.isOuter ? 28 : 20, 
                  height: pos.isOuter ? 28 : 20,
                  background: '#fff',
                  borderRadius: '50%',
                  boxShadow: `0 0 ${pos.isOuter ? '40px' : '25px'} #00FFF2, 0 0 10px #fff`,
                  zIndex: 6
                }}
              />
              {/* Propulsor Beam - Pegado a la nave */}
              <div
                style={{
                  width: pos.isOuter ? 22 : 16,
                  height: 100,
                  opacity: 0.6,
                  background: 'linear-gradient(to bottom, #00FFF2, transparent)',
                  filter: 'blur(6px)',
                  marginTop: -15, 
                  borderRadius: '0 0 25px 25px',
                  zIndex: 5
                }}
              />
            </div>
          ))}
        </motion.div>

        <LandingMissionCard 
          id="br" 
          subtitle="Satellite Beta • Orbit 2" 
          color="#99CC33" 
          onClick={() => onNavigate('br')} 
        />
      </div>
    </div>

    {/* Footer */}
    <div style={{background:'rgba(15, 0, 79, 0.8)', padding:'12px 24px', display:'flex', justifyContent:'center', borderTop: '1px solid rgba(255,255,255,0.1)', zIndex: 10}}>
      <span style={{color:'rgba(255,255,255,0.5)', fontSize:11, letterSpacing:'0.4em', fontWeight: 700}}>SELECCIONA TU DESTINO • CHOOSE YOUR STATION</span>
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

const Thruster = ({ top, right, scale = 1, delay = 0 }: any) => (
  <div style={{
    position: 'absolute',
    top,
    right,
    transform: 'translateY(-50%)',
    zIndex: 5,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row-reverse',
    pointerEvents: 'none'
  }}>
    <motion.div
      animate={{ 
        scale: [1, 1.6, 1], 
        opacity: [0.8, 1, 0.8],
      }}
      transition={{ duration: 0.07, repeat: Infinity, delay }}
      style={{
        width: 22 * scale, height: 22 * scale, borderRadius: '50%',
        background: '#fff', 
        boxShadow: '0 0 30px #99CC33, 0 0 60px #99CC33, 0 0 100px rgba(153, 204, 51, 0.6)',
        filter: 'blur(1px)'
      }}
    />
    <motion.div
      animate={{ 
        width: [100 * scale, 300 * scale, 120 * scale], 
        opacity: [0.5, 1, 0.6],
        x: [0, -10, 0]
      }}
      transition={{ duration: 0.1, repeat: Infinity, delay }}
      style={{
        height: 28 * scale,
        background: 'linear-gradient(to right, transparent, rgba(0, 255, 242, 1) 60%, rgba(0, 150, 255, 0.8))',
        borderRadius: '50% 0 0 50%', filter: 'blur(16px)', marginRight: -10
      }}
    />
  </div>
);

const FloatingSpaceship = () => {
  return (
    <motion.div
      style={{
        position: 'absolute',
        top: '18%',
        left: '28%',
        width: '260px',
        zIndex: 2,
        pointerEvents: 'none',
        mixBlendMode: 'screen',
      }}
      initial={{ x: -150, opacity: 0, rotate: -5 }}
      animate={{ 
        x: 0, 
        opacity: 1,
        y: [0, -30, 0],
        rotate: [-1.5, 1.5, -1.5]
      }}
      transition={{
        x: { duration: 4, ease: "easeOut" },
        opacity: { duration: 3 },
        y: { duration: 12, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 15, repeat: Infinity, ease: "easeInOut" }
      }}
    >
      <img 
        src="/nava_exploracion.png" 
        alt="Nava exploracion" 
        style={{ width: '100%', height: 'auto', display: 'block' }} 
      />
      
      {/* Dynamic Cinematic Thrusters */}
      <Thruster top="36%" right="95%" scale={0.8} delay={0} />
      <Thruster top="52%" right="90%" scale={1.3} delay={0.05} />
      <Thruster top="68%" right="95%" scale={0.8} delay={0.1} />
    </motion.div>
  );
};

const EarthHorizon = () => {
  return (
    <div style={{
      position: 'absolute',
      bottom: '-1080px', // Lowered just a bit more as requested
      left: '50%',
      transform: 'translateX(-50%)',
      width: '120vw', // Narrowed further for a sharper 'oval' curve as requested
      height: '1400px', // Taller for deeper oval curve
      borderRadius: '50%',
      zIndex: 1,
      pointerEvents: 'none',
      // Deep space gradient with star-field simulation
      background: 'radial-gradient(ellipse at top, #1B0088 0%, #0F004F 85%)',
      boxShadow: `
        0 -60px 160px rgba(0, 255, 242, 0.4),
        inset 0 0 200px rgba(0, 0, 0, 0.95)
      `,
      overflow: 'hidden',
    }}>
      {/* BACKGROUND LAYER: CSS STARFIELD */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.4,
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.8) 1px, transparent 0)',
        backgroundSize: '100px 100px'
      }} />

      {/* 3D SQUASH CONTAINER FOR PROJECTION EFFECT */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        perspective: '1200px' // Enhanced perspective
      }}>
        {/* LAYER 1: USER-PROVIDED VECTOR MAP SILHOUETTE (Processed into Hologram) */}
        <div 
          style={{
            position: 'absolute',
            top: 0, 
            width: '100%',
            height: '240%', 
            opacity: 1, 
            backgroundImage: 'url("/user_map_vector.png")',
            backgroundSize: '1500px auto',
            backgroundPosition: 'top center',
            backgroundRepeat: 'repeat-x',
            // Invert the black lines to white, tint cyan, and boost contrast
            filter: 'invert(1) hue-rotate(180deg) brightness(2) contrast(1.5)',
            mixBlendMode: 'screen', 
            transformOrigin: 'top center',
            // significantly increased scaleY (0.6) and rotateX (20deg) for the final 'oval' look
            transform: 'scaleY(0.6) rotateX(20deg)', 
          }} 
        />

        {/* MAP LAYER 1.5: PRECISION SOFT FILL (Using your same silhouette as a mask) */}
        <div 
          style={{
            position: 'absolute',
            top: 0, 
            width: '100%',
            height: '240%', 
            opacity: 0.15, 
            maskImage: 'url("/user_map_vector.png")',
            WebkitMaskImage: 'url("/user_map_vector.png")',
            maskSize: '1500px auto',
            WebkitMaskSize: '1500px auto',
            maskPosition: 'top center',
            WebkitMaskPosition: 'top center',
            maskRepeat: 'repeat-x',
            WebkitMaskRepeat: 'repeat-x',
            
            // The trick to fill the 'inside': The mask is inverted so white landmasses are revealed
            filter: 'invert(1) blur(6px) contrast(100) brightness(1.1)', 
            
            background: 'white',
            mixBlendMode: 'screen', 
            transformOrigin: 'top center',
            transform: 'scaleY(0.6) rotateX(20deg)', 
          }} 
        />

        {/* MAP LAYER 1.7: GLOWING STARLIGHT DOTS (City Lights Effect) */}
        <div 
          style={{
            position: 'absolute',
            top: 0, 
            width: '100%',
            height: '240%', 
            opacity: 0.6, 
            maskImage: 'url("/user_map_vector.png")',
            WebkitMaskImage: 'url("/user_map_vector.png")',
            maskSize: '1500px auto',
            WebkitMaskSize: '1500px auto',
            maskPosition: 'top center',
            WebkitMaskPosition: 'top center',
            maskRepeat: 'repeat-x',
            WebkitMaskRepeat: 'repeat-x',
            
            // This inversion makes sure the dots ONLY appear inside the landmasses
            filter: 'invert(1)', 
            
            // Procedural white dot pattern (Micro-LEDs)
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.8) 0.8px, transparent 1px)',
            backgroundSize: '10px 10px',
            
            mixBlendMode: 'screen', 
            // Glowing effect
            filter: 'invert(1) drop-shadow(0 0 3px rgba(255, 255, 255, 0.8))',
            transformOrigin: 'top center',
            transform: 'scaleY(0.6) rotateX(20deg)', 
          }} 
        />
      </div>

      {/* LAYER 2: CINEMATIC HORIZON FLARE (RAZOR SHARP LINE) */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, height: '180px',
        background: 'linear-gradient(to bottom, rgba(0, 255, 242, 0.3) 0%, rgba(0, 255, 242, 0.1) 15%, transparent 60%)',
        zIndex: 2,
        borderTop: '2.5px solid rgba(255, 255, 255, 0.85)', // High-intensity flare
        filter: 'drop-shadow(0 0 10px rgba(0, 255, 242, 1))'
      }} />

      {/* LAYER 3: COMPLEX GLOBAL NETWORK (REPLICATING REFERENCE SVG) */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', justifyContent: 'center', pointerEvents: 'none' }}>
        <svg width="1500" height="700" viewBox="0 0 1500 700" style={{ position: 'absolute', top: '-100px', zIndex: 3, overflow: 'visible' }}>
          <defs>
            <filter id="nodeGlow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="linkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#00FFF2" stopOpacity="0.8" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>

          {/* DENSE NETWORK ARCS - REPLICATING THE WEB EFFECT */}
          {[
            "M 250,300 Q 500,100 750,250", "M 150,350 Q 400,150 650,300", 
            "M 450,280 Q 750,50 1050,250", "M 600,320 Q 900,100 1200,300",
            "M 800,250 Q 1100,80 1400,350", "M 350,400 Q 750,150 1150,400",
            "M 520,450 Q 800,200 1080,450", "M 200,450 Q 500,300 800,450",
            "M 700,200 Q 1000,50 1300,200", "M 100,500 Q 450,300 800,450",
            "M 1200,200 Q 1350,100 1500,250", "M 850,220 Q 950,150 1050,220"
          ].map((path, i) => (
            <motion.path 
              key={i} d={path} stroke="url(#linkGrad)" 
              strokeWidth={i % 2 === 0 ? "1.5" : "0.8"} fill="none" opacity={0.4 + (i % 5) * 0.1}
              animate={{ strokeDashoffset: i % 2 === 0 ? [2000, 0] : [-2000, 0] }}
              transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
              style={{ strokeDasharray: i % 3 === 0 ? '100 1900' : '50 1950' }}
            />
          ))}

          {/* BRIGHT MISSION NODES (INTERSECTIONS) */}
          {[
            {x: 250, y: 300, r: 4}, {x: 450, y: 280, r: 3},
            {x: 1050, y: 250, r: 5}, {x: 600, y: 320, r: 4}, {x: 1200, y: 300, r: 5},
            {x: 1400, y: 350, r: 3}, {x: 350, y: 400, r: 5}, {x: 1150, y: 400, r: 6},
            {x: 520, y: 450, r: 4}, {x: 200, y: 450, r: 4},
            {x: 100, y: 500, r: 3}, {x: 850, y: 220, r: 4},
            {x: 1300, y: 200, r: 5}, {x: 1050, y: 220, r: 4}
          ].map((pt, i) => (
            <React.Fragment key={i}>
              <motion.circle 
                cx={pt.x} cy={pt.y} r={pt.r + (i%2?2:0)} fill="white" filter="url(#nodeGlow)"
                animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1] }}
                transition={{ duration: 2 + (i%3), repeat: Infinity, delay: i*0.2 }}
                style={{ filter: 'drop-shadow(0 0 8px rgba(0, 255, 242, 1))' }}
              />
              <motion.circle 
                cx={pt.x} cy={pt.y} r={pt.r + 15} stroke="rgba(0, 255, 242, 0.3)" fill="none" strokeWidth="0.5"
                animate={{ scale: [1, 3], opacity: [0.5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: i*0.5 }}
              />
            </React.Fragment>
          ))}
        </svg>
      </div>
    </div>
  );
};

const SpaceBackground = ({ showEarth = true, showShip = true, showHorizon = false }: any) => {
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => setIsMounted(true), []);
  if (!isMounted) return <div style={{ position: 'absolute', inset: 0, background: '#0F004F' }} />;

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', background: '#0F004F' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 30%, #1B0088 0%, #0F004F 80%)' }} />
      {showEarth && <RotatingEarth />}
      {showShip && <FloatingSpaceship />}
      {showHorizon && <EarthHorizon />}

      {/* High Performance CSS Starfield */}
      <style>{`
        @keyframes subtleTwinkle { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
      `}</style>
      <div style={{ 
        position: 'absolute', inset: 0, opacity: 0.6,
        backgroundImage: 'radial-gradient(1.5px 1.5px at 20px 30px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #ffffff, rgba(0,0,0,0)), radial-gradient(2px 2px at 50px 160px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 90px 40px, #ffffff, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 130px 80px, #ffffff, rgba(0,0,0,0)), radial-gradient(2px 2px at 300px 480px, #ffffff, rgba(0,0,0,0))', 
        backgroundSize: '400px 400px',
        animation: 'subtleTwinkle 5s infinite ease-in-out'
      }} />

      <div style={{ position: 'absolute', top: '10%', left: '20%', width: '60%', height: '40%', background: 'radial-gradient(ellipse, rgba(178,15,59,0.05) 0%, rgba(27,0,136,0) 70%)', filter: 'blur(60px)', transform: 'rotate(-15deg)' }} />
      <div style={{ position: 'absolute', top: '30%', right: '10%', width: '50%', height: '50%', background: 'radial-gradient(ellipse, rgba(0,214,204,0.05) 0%, rgba(27,0,136,0) 70%)', filter: 'blur(80px)', transform: 'rotate(20deg)' }} />
      
      <style dangerouslySetInnerHTML={{ __html: `
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
          <filter id="whiteNeon">
            <feGaussianBlur stdDeviation="4" result="blur" />
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

        {/* ADDITIONAL WHITE NEON BORDER (Glow layer) */}
        <path 
          d="M 300,80 L 700,80 L 750,130 L 750,390 L 700,440 L 300,440 L 250,390 L 250,130 Z" 
          fill="none" 
          stroke="rgba(255,255,255,0.4)" 
          strokeWidth="6" 
          filter="url(#whiteNeon)"
        />

        {/* WINDOW FRAME (Main silver/white line) */}
        <path 
          d="M 300,80 L 700,80 L 750,130 L 750,390 L 700,440 L 300,440 L 250,390 L 250,130 Z" 
          fill="none" 
          stroke={isAlert ? "#B20F3B" : "#ffffff"} 
          strokeWidth="2" 
        />
        
        {/* Edge LED Elements */}
        <path d="M 320,85 L 450,85" stroke="#99CC33" strokeWidth="3" filter="url(#neonGlow)" />
        <path d="M 550,85 L 680,85" stroke="#99CC33" strokeWidth="3" filter="url(#neonGlow)" />
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
      <div style={{ position: 'absolute', top: '10%', [side === 'left' ? 'left' : 'right']: -3, height: '80%', width: 2, background: '#99CC33', boxShadow: '0 0 15px #99CC33', borderRadius: 2, opacity: 0.8 }} />
      <div style={{ position: 'absolute', top: -1, [side === 'left' ? 'left' : 'right']: '10%', width: '40%', height: 2, background: '#99CC33', boxShadow: '0 0 15px #99CC33', borderRadius: 2, opacity: 0.6 }} />

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
      animate={{
        boxShadow: [
          '0 0 8px rgba(255,255,255,0.15), 0 0 20px rgba(255,255,255,0.06), inset 0 0 15px rgba(255,255,255,0.02)',
          '0 0 18px rgba(255,255,255,0.35), 0 0 40px rgba(255,255,255,0.12), inset 0 0 25px rgba(255,255,255,0.05)',
          '0 0 8px rgba(255,255,255,0.15), 0 0 20px rgba(255,255,255,0.06), inset 0 0 15px rgba(255,255,255,0.02)',
        ]
      }}
      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
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
        background: 'linear-gradient(180deg, #1E0A6E 0%, #160850 100%)',
        border: '1.5px solid rgba(220,235,255,0.65)',
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ 
        filter: 'brightness(1.2)',
        boxShadow: `0 0 25px rgba(255,255,255,0.5), 0 0 60px rgba(255,255,255,0.18), 0 0 80px ${color}30, inset 0 0 20px rgba(255,255,255,0.06)`,
      }}
    >
      {/* Pearl outer bezel */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(220,235,255,0.12) 0%, rgba(140,180,220,0.04) 40%, transparent 100%)', pointerEvents: 'none', zIndex: 10 }} />
      {/* Top edge highlight — like keyboard teal strip */}
      <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1.5px', background: `linear-gradient(90deg, transparent, ${color}90, rgba(200,230,255,0.7), ${color}90, transparent)`, pointerEvents: 'none', zIndex: 12 }} />
      {/* Pearl bevel inner */}
      <div style={{ position: 'absolute', top: 1, left: 1, right: 1, height: '6px', background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 100%)', pointerEvents: 'none', zIndex: 10, borderRadius: '1px 1px 0 0' }} />

      {/* Tactical Corners — pearl style */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: 18, height: 18, borderTop: `3px solid rgba(210,230,255,0.8)`, borderLeft: `3px solid rgba(210,230,255,0.8)`, zIndex: 13 }} />
      <div style={{ position: 'absolute', top: 0, right: 0, width: 18, height: 18, borderTop: `3px solid rgba(210,230,255,0.8)`, borderRight: `3px solid rgba(210,230,255,0.8)`, zIndex: 13 }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: 18, height: 18, borderBottom: `3px solid rgba(210,230,255,0.8)`, borderLeft: `3px solid rgba(210,230,255,0.8)`, zIndex: 13 }} />
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: 18, height: 18, borderBottom: `3px solid rgba(210,230,255,0.8)`, borderRight: `3px solid rgba(210,230,255,0.8)`, zIndex: 13 }} />
      {/* Accent corner dots */}
      <div style={{ position: 'absolute', top: 3, left: 3, width: 4, height: 4, background: color, borderRadius: '50%', boxShadow: `0 0 6px ${color}`, zIndex: 14 }} />
      <div style={{ position: 'absolute', top: 3, right: 3, width: 4, height: 4, background: color, borderRadius: '50%', boxShadow: `0 0 6px ${color}`, zIndex: 14 }} />
      <div style={{ position: 'absolute', bottom: 3, left: 3, width: 4, height: 4, background: color, borderRadius: '50%', boxShadow: `0 0 6px ${color}`, zIndex: 14 }} />
      <div style={{ position: 'absolute', bottom: 3, right: 3, width: 4, height: 4, background: color, borderRadius: '50%', boxShadow: `0 0 6px ${color}`, zIndex: 14 }} />

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

const SectorScanDisplay = ({ color }: any) => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '60px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
      {/* BACKGROUND GRID */}
      <div style={{ 
        position: 'absolute', inset: 0, 
        backgroundImage: `linear-gradient(${color}15 1px, transparent 1px), linear-gradient(90deg, ${color}15 1px, transparent 1px)`,
        backgroundSize: '20px 20px',
        opacity: 0.5
      }} />

      {/* SCANNING LASER LINE */}
      <motion.div
        animate={{ left: ['-5%', '105%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          width: '2px',
          background: `linear-gradient(180deg, transparent, ${color}, #fff, ${color}, transparent)`,
          boxShadow: `0 0 15px ${color}`,
          zIndex: 5
        }}
      />

      {/* TACTICAL DATA OVERLAYS */}
      <div style={{ position: 'absolute', top: 4, left: 8, fontSize: 6, fontFamily: 'monospace', color: color, opacity: 0.6, letterSpacing: '1px' }}>
        SEC_SCAN_INIT // RANGE: 400ly
      </div>
      <div style={{ position: 'absolute', bottom: 4, right: 8, fontSize: 6, fontFamily: 'monospace', color: color, opacity: 0.6 }}>
        AUTO_LOCK: ACTIVE
      </div>

      {/* STAR PINGS (Reactive to scan) */}
      {[0.1, 0.3, 0.5, 0.7, 0.9].map((pos, i) => (
        <React.Fragment key={i}>
          <div style={{
            position: 'absolute',
            left: `${pos * 100}%`,
            top: `${20 + (i * 15) % 60}%`,
            width: '3px',
            height: '3px',
            background: color,
            borderRadius: '50%',
            opacity: 0.3
          }} />
          <motion.div
            animate={{ 
              opacity: [0, 1, 0],
              scale: [1, 1.5, 1]
            }}
            transition={{ 
              duration: 1, 
              repeat: Infinity, 
              repeatDelay: 3, 
              delay: pos * 4 // Sync with scan line (4s duration)
            }}
            style={{
              position: 'absolute',
              left: `${pos * 100}%`,
              top: `${20 + (i * 15) % 60}%`,
              width: '6px',
              height: '6px',
              background: '#fff',
              borderRadius: '50%',
              boxShadow: `0 0 10px ${color}, 0 0 20px ${color}`,
              zIndex: 4
            }}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

const CentralMonitorCard = ({ onNavigate }: any) => {
  const color = "#B20F3B"; 
  return (
    <motion.div
      animate={{
        boxShadow: [
          '0 0 8px rgba(255,255,255,0.15), 0 0 20px rgba(255,255,255,0.06), inset 0 0 15px rgba(255,255,255,0.02)',
          '0 0 18px rgba(255,255,255,0.35), 0 0 40px rgba(255,255,255,0.12), inset 0 0 25px rgba(255,255,255,0.05)',
          '0 0 8px rgba(255,255,255,0.15), 0 0 20px rgba(255,255,255,0.06), inset 0 0 15px rgba(255,255,255,0.02)',
        ]
      }}
      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      style={{
        width: '440px',
        padding: '16px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        background: 'linear-gradient(180deg, #1E0A6E 0%, #160850 100%)',
        border: '1.5px solid rgba(220,235,255,0.65)',
        boxShadow: '0 40px 80px rgba(0,0,0,0.4)',
        transform: 'translateZ(20px)',
        transformStyle: 'preserve-3d',
        zIndex: 20,
        overflow: 'hidden'
      }}
    >
      {/* Pearl outer bezel */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(220,235,255,0.12) 0%, rgba(140,180,220,0.04) 40%, transparent 100%)', pointerEvents: 'none', zIndex: 10 }} />
      {/* Top edge highlight */}
      <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1.5px', background: `linear-gradient(90deg, transparent, ${color}90, rgba(200,230,255,0.7), ${color}90, transparent)`, pointerEvents: 'none', zIndex: 12 }} />
      {/* Pearl bevel inner */}
      <div style={{ position: 'absolute', top: 1, left: 1, right: 1, height: '6px', background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 100%)', pointerEvents: 'none', zIndex: 10, borderRadius: '1px 1px 0 0' }} />

      {/* Tactical Corners — pearl style */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: 22, height: 22, borderTop: `4px solid rgba(210,230,255,0.8)`, borderLeft: `4px solid rgba(210,230,255,0.8)`, zIndex: 13 }} />
      <div style={{ position: 'absolute', top: 0, right: 0, width: 22, height: 22, borderTop: `4px solid rgba(210,230,255,0.8)`, borderRight: `4px solid rgba(210,230,255,0.8)`, zIndex: 13 }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: 22, height: 22, borderBottom: `4px solid rgba(210,230,255,0.8)`, borderLeft: `4px solid rgba(210,230,255,0.8)`, zIndex: 13 }} />
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: 22, height: 22, borderBottom: `4px solid rgba(210,230,255,0.8)`, borderRight: `4px solid rgba(210,230,255,0.8)`, zIndex: 13 }} />
      {/* Accent corner dots */}
      <div style={{ position: 'absolute', top: 4, left: 4, width: 5, height: 5, background: color, borderRadius: '50%', boxShadow: `0 0 8px ${color}`, zIndex: 14 }} />
      <div style={{ position: 'absolute', top: 4, right: 4, width: 5, height: 5, background: color, borderRadius: '50%', boxShadow: `0 0 8px ${color}`, zIndex: 14 }} />
      <div style={{ position: 'absolute', bottom: 4, left: 4, width: 5, height: 5, background: color, borderRadius: '50%', boxShadow: `0 0 8px ${color}`, zIndex: 14 }} />
      <div style={{ position: 'absolute', bottom: 4, right: 4, width: 5, height: 5, background: color, borderRadius: '50%', boxShadow: `0 0 8px ${color}`, zIndex: 14 }} />

      <div style={{ zIndex: 2, position: 'relative', width: '100%', textAlign: 'center' }}>
        <div style={{ fontSize: 9, color: color, letterSpacing: '0.3em', fontWeight: 900, marginBottom: 4, textTransform: 'uppercase' }}>ESTADO_ESTACIÓN: ÓPTIMO</div>
        <div style={{ fontSize: 24, fontWeight: 900, color: '#ffffff', marginBottom: 12, letterSpacing: '0.05em' }}>NAVE DE EXPLORACIÓN</div>

        {/* SECTOR SCAN AREA (Widescreen tactical display) */}
        <div style={{ 
          height: '55px', 
          width: '100%',
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          background: 'rgba(0,0,0,0.6)',
          borderRadius: '4px',
          position: 'relative',
          border: `1px solid ${color}30`,
          overflow: 'hidden',
          marginBottom: 16,
        }}>
          <SectorScanDisplay color={color} />
        </div>

        <motion.button 
          whileHover={{ scale: 1.02, backgroundColor: '#d11246' }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onNavigate('galaxies')} 
          style={{ 
            background: color, 
            color: '#fff', 
            padding: '12px 32px', 
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
          READY
        </motion.button>
      </div>
    </motion.div>
  );
};

const SubMonitor = ({ label, color, active = false }: any) => (
  <div style={{
    width: '90px',
    height: '55px',
    background: 'rgba(0,0,0,0.8)',
    border: `1px solid ${active ? color : 'rgba(255,255,255,0.2)'}`,
    borderRadius: '3px',
    padding: '6px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
    boxShadow: active ? `inset 0 0 15px ${color}50, 0 0 20px ${color}30` : 'none',
    overflow: 'hidden'
  }}>
    <div style={{ fontSize: 5, color, opacity: 0.8, fontFamily: 'monospace', letterSpacing: '1px' }}>SYS_{label}_ACTIVE</div>
    <div style={{ fontSize: 9, fontWeight: 900, color: '#fff' }}>{label}</div>
    <div style={{ height: '3px', width: '100%', background: 'rgba(255,255,255,0.1)', borderRadius: 1 }}>
      <motion.div 
        animate={{ width: ['20%', '80%', '20%'] }}
        transition={{ duration: 1.5 + Math.random(), repeat: Infinity }}
        style={{ height: '100%', background: color, borderRadius: 1 }}
      />
    </div>
  </div>
);

const ConsoleCentralFrame = ({ children }: any) => {
  return (
    <div style={{
      position: 'relative',
      padding: '10px 10px 6px 10px',
      background: 'linear-gradient(180deg, #A0A0B0 0%, #D1D1D1 25%, #9A9AA5 50%, #6A6A7A 100%)',
      borderRadius: '10px 10px 4px 4px',
      border: '1px solid rgba(255,255,255,0.7)',
      boxShadow: '0 30px 60px rgba(0,0,0,0.5), inset 0 1px 2px rgba(255,255,255,0.8)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '465px',
      zIndex: 25,
      transform: 'perspective(1500px) rotateX(4deg)',
      transformStyle: 'preserve-3d',
    }}>
      {/* Structural trapezoid base at bottom */}
      <div style={{
        position: 'absolute',
        bottom: '-15px',
        left: '-5%',
        width: '110%',
        height: '25px',
        background: 'linear-gradient(180deg, #7A7A8A 0%, #303040 100%)',
        clipPath: 'polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)',
        border: '1px solid rgba(255,255,255,0.2)',
        zIndex: -1
      }} />

      {/* LED EDGE PIPES */}
      <div style={{ position: 'absolute', bottom: '20px', left: -4, height: '40%', width: 3, background: '#B20F3B', boxShadow: '0 0 12px #B20F3B', borderRadius: 2, opacity: 0.8 }} />
      <div style={{ position: 'absolute', bottom: '20px', right: -4, height: '40%', width: 3, background: '#B20F3B', boxShadow: '0 0 12px #B20F3B', borderRadius: 2, opacity: 0.8 }} />
      <div style={{ position: 'absolute', top: 8, left: '15%', width: '70%', height: 1.5, background: 'rgba(255,255,255,0.4)', borderRadius: 1 }} />

      {/* TECHNICAL DECALS */}
      <div style={{ position: 'absolute', top: 5, left: '50%', transform: 'translateX(-50%)', fontSize: 7, fontFamily: 'monospace', fontWeight: 900, color: 'rgba(0,0,0,0.4)', letterSpacing: '0.2em' }}>
        CENTRAL_HUB_UNIT_A0
      </div>

      <div style={{ transform: 'translateZ(10px)', transformStyle: 'preserve-3d', width: '100%', display: 'flex', justifyContent: 'center' }}>
        {children}
      </div>
    </div>
  );
};
const TacticalKey = ({ label, color, active = false, onClick, large = false }: any) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    style={{
      width: large ? '140px' : '75px',
      height: '34px',
      background: active ? color : 'rgba(15, 23, 42, 0.9)',
      border: `1px solid ${active ? '#fff' : 'rgba(255,255,255,0.2)'}`,
      borderRadius: '2px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      boxShadow: active ? `0 0 20px ${color}` : 'none',
      position: 'relative',
      overflow: 'hidden'
    }}
  >
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '2px', background: 'rgba(255,255,255,0.1)' }} />
    <span style={{ fontSize: 8, fontWeight: 900, color: active ? '#fff' : 'rgba(255,255,255,0.7)', letterSpacing: '0.15em' }}>{label}</span>
  </motion.div>
);

const SpaceKeyboard = ({ onAlert, onHud, onDim, onMonitoring, onIara, iaraActive, states }: any) => {
  const { alertMode, hudHidden, dimLights } = states;
  const color = alertMode ? "#B20F3B" : "#99CC33";

  return (
    <div style={{ 
      position: 'absolute', 
      bottom: '85px', 
      left: '50%', 
      transform: 'translateX(-50%) perspective(1500px) rotateX(8deg)',
      width: '620px',
      height: '100px',
      zIndex: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      pointerEvents: 'auto'
    }}>
      {/* HOLODECK TERMINAL FRAME — smaller, more upright */}
      <svg width="620" height="100" viewBox="0 0 620 100" style={{ position: 'absolute', top: 0, left: 0 }}>
        <defs>
          <linearGradient id="hullGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c8d8e8" />
            <stop offset="8%" stopColor="#e8f0f8" />
            <stop offset="25%" stopColor="#a0b4c8" />
            <stop offset="75%" stopColor="#6080a0" />
            <stop offset="100%" stopColor="#304060" />
          </linearGradient>
          <linearGradient id="innerSurf" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#130060" />
            <stop offset="100%" stopColor="#0a003a" />
          </linearGradient>
          <linearGradient id="edgeGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0,200,220,0)" />
            <stop offset="30%" stopColor="rgba(0,200,220,0.8)" />
            <stop offset="70%" stopColor="rgba(0,200,220,0.8)" />
            <stop offset="100%" stopColor="rgba(0,200,220,0)" />
          </linearGradient>
          <filter id="edgeBlur"><feGaussianBlur stdDeviation="2" /></filter>
        </defs>
        {/* Hull trapezoid — narrower sides */}
        <path d="M 60,0 L 560,0 L 620,100 L 0,100 Z" fill="url(#hullGrad)" />
        <path d="M 62,2 L 558,2 L 560,8 L 60,8 Z" fill="rgba(255,255,255,0.35)" />
        <path d="M 68,9 L 552,9 L 610,93 L 10,93 Z" fill="url(#innerSurf)" />
        <path d="M 68,9 L 552,9 L 610,93 L 10,93 Z" fill="none" stroke="rgba(0,200,220,0.2)" strokeWidth="1" />
        {/* Top glow edge */}
        <path d="M 66,8 L 554,8" stroke="url(#edgeGlow)" strokeWidth="2.5" filter="url(#edgeBlur)" />
        <path d="M 66,8 L 554,8" stroke="rgba(0,220,240,0.6)" strokeWidth="1" />
        {/* Bottom glow */}
        <path d="M 12,92 L 608,92" stroke="rgba(0,160,200,0.35)" strokeWidth="1.5" filter="url(#edgeBlur)" />
        {/* Corner screws */}
        <circle cx="78" cy="16" r="2.5" fill="#304060" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
        <circle cx="542" cy="16" r="2.5" fill="#304060" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
        <circle cx="22" cy="84" r="2.5" fill="#304060" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
        <circle cx="598" cy="84" r="2.5" fill="#304060" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
        {/* Outer stroke */}
        <path d="M 60,0 L 560,0 L 620,100 L 0,100 Z" fill="none" stroke="rgba(180,210,230,0.6)" strokeWidth="1.5" />
      </svg>

      {/* TACTICAL STATUS BAR with Mini-Controls */}
      <div style={{ 
        marginTop: '12px', 
        width: '420px', 
        height: '24px', 
        background: '#0F004F',
        border: '1px solid rgba(255,255,255,0.25)',
        borderRadius: '3px', 
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 10px',
        color: '#ffffff', fontFamily: 'monospace', fontSize: '8px', fontWeight: 900,
        letterSpacing: '1.5px', position: 'relative', zIndex: 2
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }}
            style={{ width: 4, height: 4, borderRadius: '50%', background: '#fff', boxShadow: '0 0 5px #fff', flexShrink: 0 }} />
          <span>Treinamento Customer Care &amp; Sales</span>
        </div>

        <div style={{ display: 'flex', gap: '6px' }}>
          {/* Mini Sun Toggle (Illumination) */}
          <motion.div
            whileHover={{ backgroundColor: 'rgba(0,184,204,0.3)', boxShadow: '0 0 10px rgba(0,200,220,0.8)' }}
            whileTap={{ scale: 0.95 }}
            onClick={onDim}
            style={{
              height: '18px', width: '28px',
              background: !dimLights ? 'rgba(0,184,204,0.35)' : 'transparent',
              border: `1px solid ${!dimLights ? '#00DDEE' : 'rgba(255,255,255,0.2)'}`,
              borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', transition: 'all 0.3s',
            }}
            title="Alternar Iluminación"
          >
            <Sun size={12} color="#fff" style={{ filter: !dimLights ? 'drop-shadow(0 0 4px #00FFFF)' : 'none' }} />
          </motion.div>

          {/* Mini Layers Toggle (HUD) */}
          <motion.div
            whileHover={{ backgroundColor: 'rgba(0,184,204,0.3)', boxShadow: '0 0 10px rgba(0,200,220,0.8)' }}
            whileTap={{ scale: 0.97 }}
            onClick={onHud}
            style={{
              height: '18px', width: '28px',
              background: !hudHidden ? 'rgba(0,184,204,0.35)' : 'transparent',
              border: `1px solid ${!hudHidden ? '#00DDEE' : 'rgba(255,255,255,0.2)'}`,
              borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', transition: 'all 0.3s',
            }}
            title="Alternar HUD"
          >
            <Layers size={12} color="#fff" style={{ filter: !hudHidden ? 'drop-shadow(0 0 4px #00FFFF)' : 'none' }} />
          </motion.div>
        </div>
      </div>

      {/* MAIN CONSOLE ROW — Focused Actions */}
      <div style={{ 
        marginTop: '8px', display: 'flex', justifyContent: 'center', gap: '10px',
        alignItems: 'center', position: 'relative', zIndex: 2 
      }}>
        {/* PAINÉIS & RELATÓRIOS */}
        <motion.div
          animate={{ boxShadow: ['0 0 6px rgba(153,204,51,0.25)', '0 0 16px rgba(153,204,51,0.6)', '0 0 6px rgba(153,204,51,0.25)'] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          whileHover={{ backgroundColor: 'rgba(153,204,51,0.22)', boxShadow: '0 0 18px rgba(153,204,51,0.8), 0 0 36px rgba(153,204,51,0.35)' }}
          whileTap={{ scale: 0.97, backgroundColor: 'rgba(153,204,51,0.4)' }}
          onClick={onMonitoring}
          style={{
            height: '36px', padding: '0 16px',
            background: 'transparent', border: '1.5px solid rgba(153,204,51,0.55)',
            borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', position: 'relative', overflow: 'hidden', gap: 8,
            transition: 'background 0.3s, box-shadow 0.3s',
          }}
        >
          <motion.div animate={{ x: ['-100%', '200%'] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
            style={{ position: 'absolute', top: 0, left: 0, width: '35%', height: '100%', background: 'linear-gradient(90deg, transparent, rgba(153,204,51,0.12), transparent)', pointerEvents: 'none' }} />
          <span style={{ fontSize: 10, fontWeight: 900, color: '#fff', letterSpacing: '0.12em', textShadow: '0 0 8px rgba(153,204,51,0.7)', fontFamily: 'monospace', whiteSpace: 'nowrap' }}>📊 PAINÉIS</span>
        </motion.div>

        {/* IARA */}
        <motion.div
          animate={{ boxShadow: iaraActive
            ? ['0 0 14px rgba(123,64,255,0.6)', '0 0 26px rgba(123,64,255,1)', '0 0 14px rgba(123,64,255,0.6)']
            : ['0 0 5px rgba(123,64,255,0.2)', '0 0 10px rgba(123,64,255,0.4)', '0 0 5px rgba(123,64,255,0.2)'] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ backgroundColor: iaraActive ? 'rgba(160,80,255,0.45)' : 'rgba(100,20,220,0.3)', boxShadow: '0 0 18px rgba(130,60,255,0.8)' }}
          whileTap={{ scale: 0.97 }}
          onClick={onIara}
          style={{
            height: '36px', padding: '0 18px',
            background: iaraActive ? 'rgba(100,32,200,0.45)' : 'transparent',
            border: `1.5px solid ${iaraActive ? '#A060FF' : 'rgba(123,64,255,0.45)'}`,
            borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', position: 'relative', overflow: 'hidden',
            transition: 'background 0.3s, box-shadow 0.3s',
          }}
        >
          <span style={{ fontSize: 11, fontWeight: 900, color: '#fff', letterSpacing: '0.2em', fontFamily: 'monospace', textShadow: iaraActive ? '0 0 10px #C090FF, 0 0 3px #fff' : 'none', whiteSpace: 'nowrap' }}>IARA</span>
        </motion.div>
      </div>
    </div>
  );
};

const IaraHologram = ({ isVisible, onClose, iaraLink }: any) => {
  if (!isVisible) return null;

  const scanlineStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,243,255,0.05) 3px, rgba(0,243,255,0.05) 4px)',
    pointerEvents: 'none',
    zIndex: 3,
    borderRadius: 'inherit'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 40 }}
      style={{
        position: 'fixed',
        bottom: '140px',
        left: 'calc(50% + 220px)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pointerEvents: 'auto',
        transform: 'translateX(-50%)',
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute', top: 0, right: -10,
          background: 'rgba(0,20,60,0.8)', border: '1px solid rgba(0,243,255,0.4)',
          color: '#00F3FF', width: 24, height: 24, borderRadius: '50%',
          fontSize: 10, cursor: 'pointer', fontWeight: 900, zIndex: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}
      >✕</button>

      {/* TRANSMISSION LABEL */}
      <motion.div
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ fontSize: 7, color: '#00F3FF', letterSpacing: '0.4em', fontFamily: 'monospace', marginBottom: 6, textTransform: 'uppercase' }}
      >
        ◉ TRANSMISIÓN ACTIVA
      </motion.div>

      {/* IARA FIGURE — transparent background, floating */}
      <div style={{ position: 'relative', width: 180, height: 260 }}>

        {/* Ground glow disc */}
        <motion.div
          animate={{ scaleX: [1, 1.1, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{
            position: 'absolute', bottom: -6, left: '50%',
            transform: 'translateX(-50%)',
            width: 120, height: 16,
            background: 'radial-gradient(ellipse, rgba(0,243,255,0.7) 0%, transparent 70%)',
            zIndex: 1, filter: 'blur(3px)'
          }}
        />

        {/* Ambient glow pulse behind IARA */}
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          style={{
            position: 'absolute', inset: 10, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,243,255,0.4) 0%, transparent 65%)',
            zIndex: 2, filter: 'blur(12px)'
          }}
        />

        {/* IARA floating + swaying */}
        <motion.div
          animate={{
            y: [0, -14, 0, -8, 0],
            rotate: [-1.5, 1.5, -0.5, 1, -1.5],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'relative', zIndex: 5, width: '100%', height: '100%', background: 'transparent' }}
        >
          {/* Glitch flicker */}
          <motion.div
            animate={{ opacity: [0, 0, 0, 0.5, 0, 0, 0, 0.3, 0, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{ position: 'absolute', inset: 0, zIndex: 8, background: 'rgba(0,243,255,0.08)', pointerEvents: 'none', mixBlendMode: 'screen' }}
          />

          <img
            src="/iara.png"
            alt="IARA"
            style={{
              width: '100%', height: '100%', objectFit: 'contain',
              position: 'relative', zIndex: 5,
              mixBlendMode: 'screen',
              filter: 'drop-shadow(0 0 25px rgba(0,243,255,1)) drop-shadow(0 0 8px #00F3FF) brightness(1.2) contrast(1.1)',
            }}
          />
        </motion.div>
      </div>

      {/* NAME + CTA */}
      <motion.div
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{ fontSize: 9, color: '#00F3FF', letterSpacing: '0.5em', fontFamily: 'monospace', fontWeight: 900, marginBottom: 10 }}
      >
        I · A · R · A
      </motion.div>

      <motion.button
        animate={{ boxShadow: ['0 0 12px rgba(0,243,255,0.4)', '0 0 28px rgba(0,243,255,0.9)', '0 0 12px rgba(0,243,255,0.4)'] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => { if (iaraLink) window.open(iaraLink, '_blank'); }}
        style={{
          background: 'rgba(0,15,50,0.75)',
          color: '#00F3FF',
          border: '1px solid #00F3FF',
          padding: '7px 18px',
          borderRadius: 20,
          fontSize: 9,
          fontFamily: 'monospace',
          fontWeight: 900,
          cursor: 'pointer',
          letterSpacing: '0.2em',
        }}
      >
        ▶ CONECTAR
      </motion.button>
    </motion.div>
  );
};

const StationIcon = ({ alertMode, color }: any) => {
  const mainColor = alertMode ? "#ff0000" : (color || "#99CC33");
  
  return (
    <motion.div
      animate={{ 
        y: [0, -5, 0],
        rotate: [0, 3, 0]
      }}
      transition={{ 
        duration: 5, 
        repeat: Infinity, 
        ease: 'easeInOut' 
      }}
      style={{ position: 'relative', width: 70, height: 70, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <div style={{ 
        position: 'relative', 
        filter: alertMode 
          ? `drop-shadow(0 0 15px #ff0000aa)` 
          : `drop-shadow(0 0 15px ${mainColor}aa)` // Intense resplandor
      }}>
        <TacticalSatelliteIcon size={84} color={mainColor} />
        {/* Additional decorative rim for the header version */}
        <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ 
              position: 'absolute', 
              inset: -6, 
              border: `1px solid ${alertMode ? '#ff000044' : `${mainColor}44`}`, // Rim inherits the glow color
              borderRadius: '50%' 
            }} 
        />
      </div>
    </motion.div>
  );
};

export const BaseStation = ({ stationName, config, onBack, onNavigate }: any) => {
  const [alertMode, setAlertMode] = useState(false);
  const [hudHidden, setHudHidden] = useState(false);
  const [dimLights, setDimLights] = useState(false);
  const [showIara, setShowIara] = useState(false);

  return (
    <div style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', backgroundColor: '#0F004F', fontFamily: '"Inter", sans-serif', display: 'flex', flexDirection: 'column' }}>
      <SpaceBackground showEarth={true} showShip={true} />
      <IaraHologram isVisible={showIara} onClose={() => setShowIara(false)} iaraLink={config.iaraLink} />
      {!hudHidden && <CommandCenterInterior isAlert={alertMode} isDim={dimLights} isHudHidden={hudHidden} />}
      <SpaceKeyboard 
        onAlert={() => setAlertMode(!alertMode)}
        onHud={() => setHudHidden(!hudHidden)}
        onDim={() => setDimLights(!dimLights)}
        onMonitoring={() => config.monitoringUrl && window.open(config.monitoringUrl, '_blank')}
        onIara={() => setShowIara(prev => !prev)}
        iaraActive={showIara}
        states={{ alertMode, hudHidden, dimLights }}
      />

      <div style={{ height: '84px', background: alertMode ? '#4A0618' : '#E8E7F2', position: 'relative', zIndex: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 32px', transition: 'all 0.5s ease' }}>
        <button onClick={onBack} style={{ background: '#fff', border: '1px solid rgba(11,0,51,0.1)', padding: '8px 20px', borderRadius: '30px', color: '#0F004F', fontWeight: 800, fontSize: 11, cursor: 'pointer' }}>
          ← SALIR
        </button>
        <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', gap: '20px' }}>
          <StationIcon alertMode={alertMode} color={stationName === "BR" ? "#99CC33" : "#7000AB"} />
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.4em', color: alertMode ? '#ff5555' : '#64748b', textTransform: 'uppercase', marginBottom: 2, fontWeight: 700 }}>Estación Espacial</div>
            <div style={{ fontSize: 24, fontWeight: 900, color: alertMode ? '#fff' : '#0F004F', letterSpacing: '0.1em' }}>{stationName} STATION</div>
          </div>
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
        
        <div style={{ transform: 'translateY(102px)' }}>
          <ConsoleCentralFrame>
            <CentralMonitorCard onNavigate={onNavigate} />
          </ConsoleCentralFrame>
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

      <div style={{ height: '80px', background: alertMode ? '#4A0618' : '#E8E7F2', position: 'relative', zIndex: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 40px', borderTop: alertMode ? '1px solid #ff0000' : 'none', transition: 'all 0.5s ease' }}>
        <div style={{ transform: 'translateY(4px)' }}>
          <img src="/por_logo.png" alt="Capacitación Logo" style={{ height: '60px', width: 'auto', opacity: 1, filter: 'brightness(1.2)' }} />
        </div>
        <div style={{ transform: 'translateY(4px)' }}>
          <img src="/guardianes_logo.png" alt="Guardianes Logo" style={{ height: '60px', width: 'auto', opacity: 1, filter: 'brightness(1.1)' }} />
        </div>
      </div>
    </div>
  );
};
