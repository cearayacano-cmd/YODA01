import React from 'react';
import { Lock, ChevronLeft, Beaker, Settings, Package, Webcam, Rocket, Radar, Microscope, Cpu } from 'lucide-react';
import { Btn, BackBtn } from './Shared';

export const Landing = ({ onNavigate, onAdmin }: any) => (
  <div style={{minHeight:'100vh', background:'#ffffff', display:'flex', flexDirection:'column'}}>
    <div style={{background:'#111111', padding:'10px 24px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      <span style={{color:'#ffffff', fontSize:13, fontWeight:700, letterSpacing:'0.1em'}}>MISSION CONTROL · LATAM CARRIER</span>
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
          <div style={{fontSize:11, color:'#555555', letterSpacing:'0.3em', marginBottom:8}}>MISIÓN · SSC</div>
          <div style={{fontSize:42, fontWeight:900, color:'#111111', marginBottom:4}}>SSC</div>
          <div style={{fontSize:11, color:'#777777'}}>Satellite Alpha · Orbit 1</div>
          <div style={{marginTop:14, fontSize:11, fontWeight:700, letterSpacing:'0.18em'}}>INICIAR SECUENCIA →</div>
        </div>
        <div onClick={()=>onNavigate('br')} style={{border:'2px solid #111111', padding:'28px 40px', cursor:'pointer', textAlign:'center', borderRadius:6, minWidth:180}}
          onMouseEnter={e=>e.currentTarget.style.background='#f0f0f0'}
          onMouseLeave={e=>e.currentTarget.style.background='#ffffff'}>
          <div style={{fontSize:11, color:'#555555', letterSpacing:'0.3em', marginBottom:8}}>MISIÓN · BR</div>
          <div style={{fontSize:42, fontWeight:900, color:'#111111', marginBottom:4}}>BR</div>
          <div style={{fontSize:11, color:'#777777'}}>Satellite Beta · Orbit 2</div>
          <div style={{marginTop:14, fontSize:11, fontWeight:700, letterSpacing:'0.18em'}}>INICIAR SECUENCIA →</div>
        </div>
      </div>
    </div>
    <div style={{background:'#111111', padding:'8px 24px', display:'flex', justifyContent:'center'}}>
      <span style={{color:'#ffffff', fontSize:11, letterSpacing:'0.3em'}}>Selecciona tu destino · CHOOSE YOUR STATION</span>
    </div>
  </div>
);

const SpaceBackground = () => (
  <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', background: '#0B0033' }}>
    {/* Deep space base */}
    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 30%, #1B0088 0%, #0B0033 80%)' }} />

    {/* Bright Pulsing Stars */}
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

    {/* Static Stars Field */}
    <div style={{ 
      position: 'absolute', inset: 0, opacity: 0.4,
      backgroundImage: 'radial-gradient(1px 1px at 20px 30px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #ffffff, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 50px 160px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 90px 40px, #ffffff, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 130px 80px, #ffffff, rgba(0,0,0,0))',
      backgroundSize: '200px 200px'
    }} />

    {/* Animated Nebula/Cosmic Dust */}
    <div style={{ 
      position: 'absolute', top: '10%', left: '20%', width: '60%', height: '40%', 
      background: 'radial-gradient(ellipse, rgba(178,15,59,0.1) 0%, rgba(27,0,136,0) 70%)', 
      filter: 'blur(60px)', transform: 'rotate(-15deg)',
      animation: 'pulse 10s infinite alternate ease-in-out'
    }} />
    <div style={{ 
      position: 'absolute', top: '30%', right: '10%', width: '50%', height: '50%', 
      background: 'radial-gradient(ellipse, rgba(0,214,204,0.1) 0%, rgba(27,0,136,0) 70%)', 
      filter: 'blur(80px)', transform: 'rotate(20deg)',
      animation: 'pulse 12s infinite alternate-reverse ease-in-out'
    }} />

    {/* Planet Horizon */}
    <div style={{ 
      position: 'absolute', bottom: '-50%', left: '-20%', width: '140%', height: '80%', 
      background: 'radial-gradient(ellipse at top, rgba(173,216,230,0.3) 0%, rgba(27,0,136,0.6) 40%, #0B0033 70%)', 
      filter: 'blur(30px)', transform: 'rotate(-8deg)',
      boxShadow: '0 -20px 100px rgba(173,216,230,0.1)'
    }} />
  </div>
);

const CommandCenterInterior = () => (
  <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
    <svg width="100%" height="100%" viewBox="0 0 1000 600" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0 }}>
      <defs>
        <mask id="windowMask">
          <rect width="1000" height="600" fill="white" />
          {/* Smaller geometric window cutout */}
          <path d="
            M 300,80 
            L 700,80 
            L 750,130 
            L 750,390 
            L 700,440 
            L 300,440 
            L 250,390 
            L 250,130 
            Z
          " fill="black" />
        </mask>
      </defs>
      
      {/* Main Interior Surface - Metallic Light Purple/White */}
      <rect width="1000" height="600" fill="#E8E7F2" mask="url(#windowMask)" />
      
      <defs>
        <filter id="neonGlow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Multi-layered Metallic Bezel for Depth */}
      <path 
        d="M 300,80 L 700,80 L 750,130 L 750,390 L 700,440 L 300,440 L 250,390 L 250,130 Z" 
        fill="none" 
        stroke="#858585" 
        strokeWidth="24" 
        strokeLinejoin="round"
      />
      {/* Vivid Energy Conduits (Neon Lines) */}
      <path d="M 310,90 L 450,90" stroke="#B20F3B" strokeWidth="3" filter="url(#neonGlow)" />
      <path d="M 550,90 L 690,90" stroke="#00D6CC" strokeWidth="3" filter="url(#neonGlow)" />
      <path d="M 310,430 L 450,430" stroke="#00D6CC" strokeWidth="3" filter="url(#neonGlow)" />
      <path d="M 550,430 L 690,430" stroke="#B20F3B" strokeWidth="3" filter="url(#neonGlow)" />

      {/* Additional Color Accents */}
      <path d="M 250,200 L 250,300" stroke="#D400FF" strokeWidth="2" filter="url(#neonGlow)" opacity="0.6" />
      <path d="M 750,200 L 750,300" stroke="#A4FF00" strokeWidth="2" filter="url(#neonGlow)" opacity="0.6" />

      {/* Status Indicators / Technical Decals */}
      <g opacity="0.9">
        <rect x="260" y="160" width="4" height="20" fill="#B20F3B" filter="url(#neonGlow)" />
        <rect x="260" y="190" width="4" height="10" fill="#B20F3B" opacity="0.7" />
        <circle cx="262" cy="215" r="3" fill="#B20F3B" filter="url(#neonGlow)">
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
        </circle>
        
        <rect x="736" y="160" width="4" height="20" fill="#00D6CC" filter="url(#neonGlow)" />
        <rect x="736" y="190" width="4" height="10" fill="#00D6CC" opacity="0.7" />
        <circle cx="738" cy="215" r="3" fill="#00D6CC" filter="url(#neonGlow)">
          <animate attributeName="opacity" values="1;0.3;1" dur="2.5s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Technical Details */}
      <rect x="480" y="15" width="40" height="4" fill="#B20F3B" opacity="0.3" />
      <rect x="480" y="581" width="40" height="4" fill="#00D6CC" opacity="0.3" />
    </svg>
  </div>
);

const ModuleCard = ({ sec, title, subtitle, color, icon, stats, onClick, baseTransform = '' }: any) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div style={{ position: 'relative', width: '100%', perspective: '1000px' }}>
      <div 
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          width: '100%',
          height: '300px',
          background: `linear-gradient(135deg, #1B0088 0%, rgba(27, 0, 136, 0.8) 100%)`,
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: `2px solid ${color}`,
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          clipPath: 'polygon(0 12px, 12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px))',
          transform: `perspective(800px) rotateX(1deg)`,
          boxShadow: isHovered 
            ? `10px 10px 0px 0px rgba(0,0,0,0.7), 0 0 40px ${color}60, inset 0 0 20px rgba(0,0,0,0.3)` 
            : `6px 6px 0px 0px rgba(0,0,0,0.6), inset 0 0 20px rgba(0,0,0,0.3)`,
        }}
      >
        {/* Scanner Effect Line */}
        <div 
          className="scanner-line" 
          style={{ 
            background: color, 
            boxShadow: `0 0 15px 2px ${color}`,
            opacity: isHovered ? 0.8 : 0,
            animationPlayState: isHovered ? 'running' : 'paused',
            visibility: isHovered ? 'visible' : 'hidden'
          }} 
        />

        {/* Monitor Stand/Bezel Effect (Integrated) */}
        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          height: '4px',
          background: 'rgba(255,255,255,0.15)',
          boxShadow: `0 -2px 10px ${color}40`,
          zIndex: 1
        }} />

        {/* Monitor Bezel Detail */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          border: `1px solid rgba(255,255,255,0.1)`,
          pointerEvents: 'none'
        }} />
        
        {/* Scanline Overlay */}
        <div className="hologram-scan" style={{ opacity: 0.4 }} />
        <div style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.1) 0px, rgba(0,0,0,0.1) 1px, transparent 1px, transparent 2px)',
          pointerEvents: 'none',
          opacity: 0.3
        }} />

        {/* Corner Brackets (Tactical UI) */}
        <div style={{ position: 'absolute', top: 8, left: 8, width: 12, height: 12, borderTop: `3px solid ${color}`, borderLeft: `3px solid ${color}`, zIndex: 3 }} />
        <div style={{ position: 'absolute', top: 8, right: 8, width: 12, height: 12, borderTop: `3px solid ${color}`, borderRight: `3px solid ${color}`, zIndex: 3 }} />
        <div style={{ position: 'absolute', bottom: 8, left: 8, width: 12, height: 12, borderBottom: `3px solid ${color}`, borderLeft: `3px solid ${color}`, zIndex: 3 }} />
        <div style={{ position: 'absolute', bottom: 8, right: 8, width: 12, height: 12, borderBottom: `3px solid ${color}`, borderRight: `3px solid ${color}`, zIndex: 3 }} />

        {/* Top Content Group */}
        <div style={{ zIndex: 2 }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <div style={{ fontSize: 11, color: color, letterSpacing: '0.15em', fontWeight: 900, textShadow: `0 0 8px ${color}60` }}>{sec}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 10, color: '#ffffff', letterSpacing: '0.1em', fontWeight: 900, textShadow: `0 0 5px ${color}40` }}>
              <div style={{ width: 8, height: 8, background: '#22c55e', borderRadius: '50%', boxShadow: '0 0 10px #22c55e', animation: 'pulse 2s infinite' }} />
              ONLINE
            </div>
          </div>

          {/* Title Section */}
          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 18, fontWeight: 900, color: '#ffffff', marginBottom: 2, lineHeight: 1.1, letterSpacing: '0.01em', textShadow: `0 0 15px ${color}` }}>{title}</div>
            <div style={{ fontSize: 9, color: color, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 900, textShadow: `0 0 10px ${color}` }}>{subtitle}</div>
          </div>

          {/* Central Icon Box with Tactical Grid (HUD Style) */}
          <div style={{ 
            height: '120px', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            background: 'rgba(0,0,0,0.4)',
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            borderRadius: '4px',
            position: 'relative',
            border: `1px solid ${color}60`,
            overflow: 'hidden',
            boxShadow: `inset 0 0 20px ${color}40`,
            marginBottom: 16
          }}>
            {/* Sharp Tactical Grid Overlay */}
            <div style={{ 
              position: 'absolute', 
              inset: 0, 
              opacity: 0.1, 
              backgroundImage: `
                linear-gradient(to right, ${color} 1px, transparent 1px),
                linear-gradient(to bottom, ${color} 1px, transparent 1px)
              `,
              backgroundSize: '12px 12px'
            }} />
            
            {/* Floating Icon with Bloom */}
            <div style={{ 
              filter: `drop-shadow(0 0 30px ${color})`, 
              transform: 'scale(1.6)', 
              color: color,
              zIndex: 5,
              position: 'relative'
            }}>
              {React.cloneElement(icon, { color: 'currentColor', strokeWidth: 1.5 })}
            </div>
          </div>
        </div>

        {/* Independent Stats Boxes (Footer) */}
        <div style={{ display: 'flex', gap: '10px', zIndex: 2 }}>
          {stats.map((s: any, i: number) => (
            <div key={i} style={{ 
              flex: 1, 
              background: 'rgba(0, 0, 0, 0.5)', 
              padding: '12px', 
              borderRadius: '4px',
              border: `1px solid ${color}40`,
              textAlign: 'left',
              boxShadow: `inset 0 0 10px ${color}10`
            }}>
              <div style={{ fontSize: 9, color: color, letterSpacing: '0.1em', fontWeight: 900, marginBottom: 4, textTransform: 'uppercase', textShadow: `0 0 5px ${color}30` }}>{s.label}</div>
              <div style={{ fontSize: 16, fontWeight: 900, color: '#ffffff', textShadow: `0 0 8px rgba(255,255,255,0.2)` }}>{s.val}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SpaceKeyboard = () => {
  return (
    <div style={{ 
      position: 'absolute', 
      bottom: '20px', 
      left: '50%', 
      transform: 'translateX(-50%) perspective(1500px) rotateX(45deg)',
      width: '700px',
      height: '180px',
      zIndex: 50,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      pointerEvents: 'auto'
    }}>
      {/* Console Base */}
      <svg width="700" height="180" viewBox="0 0 700 180" style={{ position: 'absolute', top: 0, left: 0, filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.9))' }}>
        <defs>
          <linearGradient id="consoleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3A3A42" />
            <stop offset="50%" stopColor="#2A2A2F" />
            <stop offset="100%" stopColor="#15151A" />
          </linearGradient>
          <filter id="keyGlow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        {/* Main Body */}
        <path d="M 100,0 L 600,0 L 700,180 L 0,180 Z" fill="url(#consoleGrad)" stroke="#555" strokeWidth="1" />
        
        {/* Side Panels */}
        <path d="M 0,180 L 100,0 L 0,0 Z" fill="#1A1A20" />
        <path d="M 700,180 L 600,0 L 700,0 Z" fill="#1A1A20" />

        {/* Decorative Tech Lines */}
        <path d="M 110,15 L 590,15" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <path d="M 50,150 L 650,150" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        
        {/* Neon Accents */}
        <rect x="340" y="5" width="20" height="3" fill="#00D6CC" filter="url(#keyGlow)" />
      </svg>

      {/* Main Display Strip */}
      <div style={{ 
        marginTop: '20px', 
        width: '440px', 
        height: '35px', 
        background: 'rgba(0,0,0,0.6)', 
        border: '1px solid rgba(0,214,204,0.4)',
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        color: '#00D6CC',
        fontFamily: 'monospace',
        fontSize: '11px',
        letterSpacing: '2px',
        position: 'relative',
        zIndex: 2,
        boxShadow: 'inset 0 0 15px rgba(0,214,204,0.2)'
      }}>
        <div style={{ display: 'flex', gap: '15px' }}>
          <span style={{ opacity: 0.8 }}>PWR: OPTIMAL</span>
          <span style={{ opacity: 0.8 }}>SYNC: ACTIVE</span>
        </div>
        <div className="hologram-flicker" style={{ fontWeight: 900 }}>COMMAND CONSOLE // v4.0</div>
      </div>

      {/* Keys Grid */}
      <div style={{ 
        marginTop: '25px', 
        display: 'grid', 
        gridTemplateColumns: 'repeat(14, 1fr)', 
        gap: '10px', 
        width: '90%',
        position: 'relative',
        zIndex: 2
      }}>
        {Array.from({ length: 42 }).map((_, i) => {
          const isSpecial = i % 7 === 0 || i === 15 || i === 28 || i === 35 || i === 10;
          const color = i % 7 === 0 ? '#B20F3B' : 
                        i === 15 ? '#00D6CC' : 
                        i === 28 ? '#FFE017' : 
                        i === 35 ? '#D400FF' :
                        i === 10 ? '#A4FF00' :
                        'rgba(255,255,255,0.15)';
          return (
            <div key={i} style={{ 
              height: '28px', 
              background: color,
              borderRadius: '4px',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: isSpecial ? `0 0 15px ${color}` : 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '9px',
              color: isSpecial ? '#fff' : 'rgba(255,255,255,0.4)',
              fontWeight: 900,
              fontFamily: 'monospace',
              transition: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = 'scale(0.9) translateY(4px)';
              e.currentTarget.style.filter = 'brightness(2)';
              e.currentTarget.style.boxShadow = `0 0 25px ${color}`;
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = 'scale(1) translateY(0)';
              e.currentTarget.style.filter = 'brightness(1)';
              e.currentTarget.style.boxShadow = isSpecial ? `0 0 15px ${color}` : 'none';
            }}
            >
              {isSpecial ? 'CMD' : ''}
            </div>
          );
        })}
      </div>

      {/* Large Space Bar / Interaction Pad */}
      <div style={{
        marginTop: '15px',
        width: '260px',
        height: '40px',
        background: 'linear-gradient(to bottom, #2A2A2F, #15151A)',
        border: '1px solid rgba(255,255,255,0.15)',
        borderRadius: '8px',
        boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.6)',
        position: 'relative',
        zIndex: 2,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.2s'
      }}
      onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98) translateY(2px)'}
      onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1) translateY(0)'}
      >
        <div style={{ width: '70%', height: '3px', background: 'rgba(0,214,204,0.3)', boxShadow: '0 0 15px #00D6CC', borderRadius: '2px' }} />
      </div>
    </div>
  );
};

export const BaseStation = ({ stationName, config, onBack, onNavigate }: any) => {
  return (
    <div style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', backgroundColor: '#0B0033', fontFamily: '"Inter", sans-serif', display: 'flex', flexDirection: 'column' }}>
      <SpaceBackground />
      <CommandCenterInterior />
      
      {/* Space Keyboard / Console */}
      <SpaceKeyboard />

      {/* Background Grid Effect */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: `linear-gradient(rgba(11, 0, 51, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(11, 0, 51, 0.05) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        pointerEvents: 'none',
        zIndex: 1
      }} />
      
      {/* Top Metallic Bar */}
      <div style={{ 
        height: '64px', 
        background: '#E8E7F2',
        borderBottom: '1px solid rgba(11,0,51,0.1)',
        position: 'relative',
        zIndex: 20,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 32px'
      }}>
        {/* Left: Back Button */}
        <button onClick={onBack} style={{ 
          background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(10px)', 
          border: '1px solid rgba(11,0,51,0.1)', padding: '8px 20px', 
          borderRadius: '30px', color: '#0B0033', fontWeight: 800, fontSize: 11, 
          display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer',
          boxShadow: '0 2px 10px rgba(11,0,51,0.05)', transition: 'all 0.2s'
        }}
        onMouseEnter={e => e.currentTarget.style.background = '#ffffff'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.8)'}
        >
          <ChevronLeft size={14} /> SALIR
        </button>

        {/* Center: Title */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 10, letterSpacing: '0.4em', color: '#64748b', textTransform: 'uppercase', marginBottom: 2, fontWeight: 700 }}>Estación Espacial</div>
          <div style={{ fontSize: 20, fontWeight: 900, color: '#0B0033', letterSpacing: '0.1em' }}>{stationName} STATION</div>
        </div>

        {/* Right: Status Indicators */}
        <div style={{ display: 'flex', gap: 12, color: '#0B0033', fontSize: 10, fontWeight: 800, letterSpacing: '0.1em' }}>
          <div style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(11,0,51,0.1)', padding: '6px 12px', borderRadius: '6px', boxShadow: '0 2px 10px rgba(11,0,51,0.05)' }}>
            SYS <span style={{ color: '#22c55e', marginLeft: 4 }}>99%</span>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(11,0,51,0.1)', padding: '6px 12px', borderRadius: '6px', boxShadow: '0 2px 10px rgba(11,0,51,0.05)' }}>
            ER <span style={{ color: '#FF007F', marginLeft: 4 }}>BR</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', padding: '30px 60px' }}>
        
        {/* Middle Section (Cards) */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0' }}>
          
          {/* Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', width: '340px' }}>
            <ModuleCard 
              sec="SEC-A1" title="PORTAL DE LÍDERES" subtitle="LAB. DE ESTRATEGIA" 
              color="#A4FF00" icon={<Microscope size={36} strokeWidth={1.5} />}
              stats={[{label: 'RECURSOS', val: config.laboratorio?.length || 0}, {label: 'ACTIVOS', val: 'OK'}]}
              onClick={() => onNavigate('laboratorio')}
              baseTransform="rotateY(12deg) translateZ(0px) scale(1.05)"
            />
            <ModuleCard 
              sec="SEC-A2" title="TALLERES" subtitle="TALLER DE INGENIERÍA" 
              color="#D400FF" icon={<Cpu size={36} strokeWidth={1.5} />}
              stats={[{label: 'TALLERES', val: config.ingenieria?.length || 0}, {label: 'ACTIVOS', val: 'OK'}]}
              onClick={() => onNavigate('ingenieria')}
              baseTransform="rotateY(12deg) translateZ(0px) scale(1.05)"
            />
          </div>

          {/* Center Column */}
          <div style={{ width: '460px', display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'translateY(115px) scale(1.1)', position: 'relative' }}>
            <div className="hologram-flicker" style={{ 
              background: 'rgba(11, 0, 51, 0.7)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
              border: '2px solid #B20F3B', borderRadius: '24px',
              padding: '8px 16px', width: '100%', textAlign: 'center',
              boxShadow: `
                0 0 30px rgba(178, 15, 59, 0.4),
                0 0 0 1px rgba(255,255,255,0.1),
                inset 0 1px 0 rgba(255,255,255,0.2),
                inset 0 -1px 0 rgba(0,0,0,0.4),
                0 40px 80px rgba(0,0,0,0.4)
              `,
              position: 'relative',
              overflow: 'hidden',
              zIndex: 10
            }}>
              {/* Holographic Scanline */}
              <div className="hologram-scan" />

              {/* Central Panel Accents */}
              <div style={{ position: 'absolute', top: -2, left: '50%', transform: 'translateX(-50%)', width: '60px', height: '4px', background: '#B20F3B', borderRadius: '4px', boxShadow: '0 0 15px #B20F3B' }} />
              <div style={{ position: 'absolute', bottom: -2, left: '50%', transform: 'translateX(-50%)', width: '60px', height: '4px', background: '#B20F3B', borderRadius: '4px', boxShadow: '0 0 15px #B20F3B' }} />

              <div style={{ fontSize: 7, letterSpacing: '0.25em', color: '#B20F3B', marginBottom: 2, fontWeight: 700, position: 'relative', zIndex: 2 }}>HANGAR BAY - DOCK-01</div>
              <div style={{ fontSize: 16, fontWeight: 900, color: '#ffffff', marginBottom: 8, lineHeight: 1.1, position: 'relative', zIndex: 2 }}>NAVE DE EXPLORACIÓN</div>
              
              <div style={{ display: 'flex', justifyContent: 'space-around', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '6px 0', marginBottom: 8, position: 'relative', zIndex: 2 }}>
                <div>
                  <div style={{ fontSize: 6, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.15em', marginBottom: 1, fontWeight: 600 }}>SECTORES</div>
                  <div style={{ fontSize: 12, fontWeight: 900, color: '#ffffff' }}>3</div>
                </div>
                <div>
                  <div style={{ fontSize: 6, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.15em', marginBottom: 1, fontWeight: 600 }}>PLANETAS</div>
                  <div style={{ fontSize: 12, fontWeight: 900, color: '#ffffff' }}>{config.exploracion?.frontLine?.length || 0}</div>
                </div>
                <div>
                  <div style={{ fontSize: 6, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.15em', marginBottom: 1, fontWeight: 600 }}>MISIONES</div>
                  <div style={{ fontSize: 12, fontWeight: 900, color: '#ffffff' }}>77</div>
                </div>
              </div>

              <button onClick={() => onNavigate('galaxies')} style={{ 
                background: 'rgba(178,15,59,0.1)', border: '1px solid #B20F3B', color: '#B20F3B',
                padding: '5px 12px', borderRadius: '40px', width: '100%', fontSize: 8, fontWeight: 800,
                letterSpacing: '0.15em', cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                boxShadow: '0 10px 25px rgba(178,15,59,0.15)',
                position: 'relative', zIndex: 2
              }}
              onMouseEnter={e => { 
                e.currentTarget.style.background = '#B20F3B'; 
                e.currentTarget.style.color = '#fff'; 
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(178,15,59,0.25)';
              }}
              onMouseLeave={e => { 
                e.currentTarget.style.background = 'rgba(178,15,59,0.1)'; 
                e.currentTarget.style.color = '#B20F3B'; 
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(178,15,59,0.15)';
              }}
              >
                + LAUNCH SEQUENCE <Rocket size={10} />
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', width: '340px' }}>
            <ModuleCard 
              sec="SEC-B1" title="FORMULARIOS" subtitle="MÓDULO DE SUMINISTROS" 
              color="#00FFF2" icon={<Package size={36} strokeWidth={1.5} />}
              stats={[{label: 'FORMULARIOS', val: config.suministros?.length || 0}, {label: 'SYNC', val: '0'}]}
              onClick={() => onNavigate('suministros')}
              baseTransform="rotateY(-12deg) translateZ(0px) scale(1.05)"
            />
            <ModuleCard 
              sec="SEC-B2" title="PORTAL INSTRUCTOR" subtitle="CENTRO DE OPERACIONES" 
              color="#FFD700" icon={<Radar size={36} strokeWidth={1.5} />}
              stats={[{label: 'MÓDULOS', val: config.operaciones?.length || 0}, {label: 'ACTIVOS', val: '0'}]}
              onClick={() => onNavigate('operaciones')}
              baseTransform="rotateY(-12deg) translateZ(0px) scale(1.05)"
            />
          </div>
        </div>

      </div>

      {/* Bottom Metallic Bar */}
      <div style={{ 
        height: '64px', 
        background: '#E8E7F2',
        borderTop: '1px solid rgba(11,0,51,0.1)',
        position: 'relative',
        zIndex: 20,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 32px'
      }}>
        {/* Left: Monitoring Button */}
        <div>
          {config.monitoringUrl ? (
            <button onClick={()=>window.open(config.monitoringUrl,'_blank')} style={{ 
              background: '#00D6CC', color: '#0B0033', border: 'none', padding: '10px 24px', 
              borderRadius: '8px', fontSize: 11, fontWeight: 800, letterSpacing: '0.05em',
              display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0,214,204,0.25)', transition: 'all 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ width: 8, height: 8, background: '#0B0033', borderRadius: '50%' }} />
              CENTRO DE MONITOREO <span style={{ opacity: 0.6, fontWeight: 600 }}>+ LIVE TELEMETRY</span>
            </button>
          ) : <div/>}
        </div>

        {/* Right: Training & Sales */}
        <div style={{ 
          fontSize: 11,
          fontWeight: 800,
          letterSpacing: '0.15em',
          color: '#64748b',
          textTransform: 'uppercase',
          display: 'flex',
          alignItems: 'center',
          gap: 12
        }}>
          <div>Universo Training</div>
          <div style={{ width: 1, height: 14, background: '#cbd5e1' }} />
          <div>Customer Care & Sales</div>
        </div>
      </div>
    </div>
  );
};
