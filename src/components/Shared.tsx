import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

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

export const BackBtn = ({ onClick, label='VOLVER' }) => (
  <Btn onClick={onClick} style={{ padding: '6px 14px' }}>
    <ChevronLeft size={16} strokeWidth={3} />
    {label}
  </Btn>
);

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
