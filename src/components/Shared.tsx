import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Btn = ({ onClick, children, style={} }) => (
  <motion.button 
    onClick={onClick} 
    whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(0,243,255,0.4)' }}
    whileTap={{ scale: 0.95 }}
    style={{
      background: 'rgba(0,10,40,0.8)', 
      border: '1px solid rgba(0,243,255,0.5)', 
      padding: '8px 20px',
      cursor: 'pointer', 
      fontSize: 11, 
      fontWeight: 900, 
      color: '#00F3FF',
      fontFamily: 'monospace',
      borderRadius: 20,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      boxShadow: '0 0 5px rgba(0,243,255,0.2)',
      ...style
    }}
  >
    {children}
  </motion.button>
);

export const BackBtn = ({ onClick, label }: any) => {
  const isEs = (typeof window !== 'undefined' && (window as any).YODA_STATION === 'SSC') || (typeof localStorage !== 'undefined' && localStorage.getItem('yoda_station_name') === 'SSC');
  const displayLabel = label && label !== 'VOLTAR' && label !== 'VOLVER' ? label : (isEs ? 'VOLVER' : 'VOLTAR');
  return (
  <Btn onClick={onClick} style={{ padding: '8px 18px', fontSize: 13 }}>
    <ChevronLeft size={18} strokeWidth={3} />
    {displayLabel}
  </Btn>
  );
};

export const TacticalSatelliteIcon = ({ size = 24, color = 'currentColor', bgColor = "#0F004F", panelColor }: any) => {
    const accentColor = color; 
    const pColor = panelColor || bgColor;
    
    return (
        <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: size, height: (size * 0.6), display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
            <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 140 90" 
                preserveAspectRatio="xMidYMid meet"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                style={{ 
                    filter: `drop-shadow(0 0 12px ${accentColor}66)`,
                    overflow: 'visible' 
                }}
            >
                {/* Rotating Orbit (dashed) */}
                <motion.ellipse 
                    cx="70" cy="48" rx="65" ry="20"
                    stroke={color} strokeWidth="1" strokeOpacity="0.4"
                    strokeDasharray="8 5"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: '70px 48px' }}
                />

                {/* Left Solar Panel */}
                <rect x="5" y="28" width="35" height="28" rx="2" fill={pColor} stroke={color} strokeWidth="1.5" strokeOpacity="1" />
                <line x1="5" y1="37" x2="40" y2="37" stroke={color} strokeWidth="0.5" strokeOpacity="0.4" />
                <line x1="5" y1="46" x2="40" y2="46" stroke={color} strokeWidth="0.5" strokeOpacity="0.4" />

                {/* Connectors */}
                <rect x="40" y="39" width="12" height="6" rx="2" fill={bgColor} stroke={color} strokeWidth="1" strokeOpacity="0.6" />
                <rect x="88" y="39" width="12" height="6" rx="2" fill={bgColor} stroke={color} strokeWidth="1" strokeOpacity="0.6" />

                {/* Central Body (Square Box) */}
                <rect x="52" y="24" width="36" height="36" rx="4" fill={bgColor} stroke={color} strokeWidth="2.5" />
                <rect x="54" y="26" width="32" height="32" rx="3" stroke={color} strokeWidth="0.5" strokeOpacity="0.3" /> 
                <rect x="56" y="28" width="28" height="28" rx="2" stroke={color} strokeWidth="0.8" strokeOpacity="0.5" />

                {/* Central Eye / Sensor */}
                <circle cx="70" cy="42" r="9" fill={bgColor} stroke={accentColor} strokeWidth="1.5" />
                <circle cx="70" cy="42" r="5" fill={accentColor} fillOpacity="0.4" />
                <motion.circle 
                    cx="70" cy="42" r="2.5" fill="#fff" 
                    animate={{ opacity: [1, 0.4, 1], scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                />

                {/* Right Solar Panel */}
                <rect x="100" y="28" width="35" height="28" rx="2" fill={pColor} stroke={color} strokeWidth="1.5" strokeOpacity="1" />
                <line x1="100" y1="37" x2="135" y2="37" stroke={color} strokeWidth="0.5" strokeOpacity="0.4" />
                <line x1="100" y1="46" x2="135" y2="46" stroke={color} strokeWidth="0.5" strokeOpacity="0.4" />

                {/* Top Antenna */}
                <line x1="70" y1="24" x2="70" y2="10" stroke={color} strokeWidth="1.5" strokeOpacity="0.8" />
                <path d="M58 10 Q70 4 82 10" stroke={accentColor} strokeWidth="2" strokeOpacity="0.8" fill="none" />
                <motion.circle 
                    cx="70" cy="4" r="2.5" fill={accentColor}
                    animate={{ opacity: [1, 0.3, 1], scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </svg>
        </motion.div>
    );
};

/* ── HYPER-PRO PLANET VISUAL ─────────────────────────────────────────── */
export const HyperProPlanetVisual = ({ color, index, texture = 'CRATERS', size = 100, children }: { color: string, index: number, texture?: string, size?: number, children?: any }) => {
  const scale = size / 100;
  return (
    <div style={{ position: 'relative', width: size * 1.8, height: size * 1.8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* 1. ATMOSPHERIC OUTER GLOW */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute', width: '130%', height: '130%',
          background: `radial-gradient(circle, #03001C 0%, transparent 70%)`,
          borderRadius: '50%', filter: 'blur(40px)', zIndex: 0
        }} 
      />

      {/* 2. ATMOSPHERIC RIM LIGHTING */}
      <div style={{
        position: 'absolute', width: '100%', height: '100%',
        background: `radial-gradient(circle at 30% 30%, ${color}44 0%, transparent 60%)`,
        borderRadius: '50%', border: `1px solid ${color}44`, filter: 'blur(2px)', zIndex: 5, pointerEvents: 'none'
      }} />

      {/* 3. MAIN PLANET BODY */}
      <div style={{
          position: 'relative', width: size, height: size, borderRadius: '50%',
          background: color,
          zIndex: 2, overflow: 'hidden', 
          boxShadow: '0 0 30px rgba(0,0,0,0.8), inset -15px -15px 30px rgba(0,0,0,0.5)',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, transparent 60%)`,
            zIndex: 4
          }} />

          {/* Surface Detail Craters */}
          {(texture === 'CRATERS' || texture === 'RINGS') && [...Array(6)].map((_, i) => (
             <div key={i} style={{
                 position: 'absolute', width: (20 + Math.random() * 30) * scale, height: (10 + Math.random() * 15) * scale,
                 background: 'rgba(0,0,0,0.3)', top: (20 + Math.random() * 60) + '%', left: (10 + Math.random() * 70) + '%',
                 borderRadius: '50%', transform: `rotate(${Math.random() * 360}deg)`, zIndex: 1
             }} />
          ))}

          {/* Surface Detail Gas Bands */}
          {texture === 'GAS' && [...Array(5)].map((_, i) => (
             <div key={i} style={{
                 position: 'absolute', width: '200%', height: (8 + Math.random() * 12) * scale,
                 background: 'rgba(255,255,255,0.15)', top: (15 + i * 18) + '%', left: '-50%',
                 borderRadius: '50%', zIndex: 1, filter: 'blur(4px)'
             }} />
          ))}

          {/* Surface Detail Ocean/Continents */}
          {texture === 'OCEAN' && [...Array(3)].map((_, i) => (
             <div key={i} style={{
                 position: 'absolute', width: (40 + Math.random() * 40) * scale, height: (30 + Math.random() * 30) * scale,
                 background: 'rgba(0,0,0,0.2)', top: (Math.random() * 50) + '%', left: (Math.random() * 50) + '%',
                 borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%', zIndex: 1, transform: `rotate(${Math.random() * 360}deg)`,
                 filter: 'blur(2px)'
             }} />
          ))}
          
          <div style={{ position: 'relative', zIndex: 10 }}>{children}</div>
          
          <span style={{ position: 'absolute', bottom: 15 * scale, right: 15 * scale, fontSize: 11 * scale, fontWeight: 900, color: 'rgba(255,255,255,0.4)', zIndex: 10, letterSpacing: '2px' }}>
            P0{index + 1}
          </span>
      </div>

      {/* 4. DYNAMIC RINGS */}
      <svg viewBox="0 0 180 180" style={{ position: 'absolute', width: '160%', height: '160%', zIndex: 1, pointerEvents: 'none', transform: 'rotateX(75deg) rotateY(10deg)' }}>
        <motion.ellipse 
          cx="90" cy="90" rx="80" ry="30"
          fill="none" stroke={`url(#ringGrad-${index})`} strokeWidth={texture === 'RINGS' ? 8 : 4} opacity={texture === 'RINGS' ? 1 : 0.6}
          initial={{ pathLength: 0, rotate: 0 }}
          animate={{ pathLength: 1, rotate: 360 }}
          transition={{ pathLength: { duration: 2 }, rotate: { duration: 60, repeat: Infinity, ease: 'linear' } }}
        />
        <defs>
          <linearGradient id={`ringGrad-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={color} stopOpacity="0" />
            <stop offset="50%" stopColor={color} stopOpacity="0.8" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
