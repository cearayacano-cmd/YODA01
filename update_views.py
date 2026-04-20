import re

with open('src/components/Views5.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# We need to replace only the body of TechBaseView from the initial export up to the end of the functional component.
start_str = "export const TechBaseView ="
end_str = "export const IngenieriaView ="

idx_start = content.find(start_str)
idx_end = content.find(end_str)

if idx_start != -1 and idx_end != -1:
    before = content[:idx_start]
    after = content[idx_end:]
    
    # Define the new component
    new_tech_base = '''export const TechBaseView = ({ 
  title, 
  subtitle, 
  links, 
  onBack, 
  themeColor = '#00F3FF',
  children,
  heroIcon,
  listIcon,
  headerTitle = "SEC-A2 · ENGINEERING",
  footerTitle = "TERMINAL DE INGENIERÍA",
  topDecalLeft = "Universo Training",
  topDecalRight = "Customer Care & Sales",
  sideDecalLeft = "Guardianes",
  sideDecalRight = "Capacitación",
  footerLogo = null,
  description = "Accedé a manuales técnicos, guías de procedimientos y recursos de soporte para operaciones."
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
      {/* Base Grid Blueprint */}
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

      {/* Background Decals */}
      <div style={{ position: 'absolute', top: 100, left: 40, display: 'flex', alignItems: 'center', gap: 15, zIndex: 1 }}>
        <img src="/logo_pt.png" alt="Logo PT" style={{ height: 45, filter: 'brightness(0) sepia(1) hue-rotate(240deg) saturate(3) opacity(0.8)' }} />
        <div style={{ fontSize: 10, color: '#64748B', fontWeight: 700, letterSpacing: '0.1em', lineHeight: 1.8, textTransform: 'uppercase' }}>
          <div>UNIVERSO TRAINING</div>
          <div>CUSTOMER CARE & SALES</div>
        </div>
      </div>

      {/* Left Vertical Decal */}
      <div style={{ position: 'absolute', top: '40%', left: -80, display: 'flex', alignItems: 'center', gap: 15, transform: 'rotate(-90deg)', transformOrigin: 'center', zIndex: 1 }}>
        <div style={{ width: 40, height: 2, background: themeColor, boxShadow: `0 0 10px ${themeColor}` }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ fontSize: 12, fontWeight: 900, color: '#64748B', letterSpacing: '0.2em', textTransform: 'uppercase' }}>GUARDIANES</div>
          <img src="/logo_guardianes.png" alt="Logo Guardianes" style={{ height: 32, filter: 'brightness(0) sepia(1) hue-rotate(240deg) saturate(3) opacity(0.8)' }} />
        </div>
        <div style={{ width: 40, height: 2, background: themeColor, boxShadow: `0 0 10px ${themeColor}40` }} />
      </div>

      {/* Right Vertical Decal */}
      <div style={{ position: 'absolute', top: '40%', right: -80, display: 'flex', alignItems: 'center', gap: 15, transform: 'rotate(90deg)', transformOrigin: 'center', zIndex: 1 }}>
        <div style={{ width: 40, height: 2, background: themeColor, boxShadow: `0 0 10px ${themeColor}40` }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ fontSize: 12, fontWeight: 900, color: '#64748B', letterSpacing: '0.2em', textTransform: 'uppercase' }}>GUARDIANES</div>
          <img src="/logo_guardianes.png" alt="Logo Guardianes" style={{ height: 32, filter: 'brightness(0) sepia(1) hue-rotate(240deg) saturate(3) opacity(0.8)' }} />
        </div>
        <div style={{ width: 40, height: 2, background: themeColor, boxShadow: `0 0 10px ${themeColor}40` }} />
      </div>

      {/* Header */}
      <div style={{ 
        background: '#ffffff', 
        padding: '16px 32px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        position: 'relative', 
        zIndex: 10,
        borderBottom: `4px solid ${themeColor}`,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
          <button onClick={onBack} style={{ 
            background: '#1B0088', 
            border: 'none', 
            color: '#fff', 
            padding: '8px 20px', 
            borderRadius: 4, 
            cursor: 'pointer', 
            fontSize: 14, 
            fontWeight: 900, 
            textTransform: 'uppercase',
            display: 'flex', alignItems: 'center', gap: 8,
            boxShadow: '0 4px 10px rgba(27,0,136,0.2)'
          }}>
            ← VOLVER
          </button>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: 10, color: themeColor, letterSpacing: '0.3em', fontWeight: 900 }}>{headerTitle}</div>
            <div style={{ fontSize: 24, fontWeight: 900, letterSpacing: '0.1em', color: '#1B0088' }}>
              {title}
            </div>
          </div>
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
              background: '#ffffff',
              clipPath: 'polygon(23px 0, calc(100% - 23px) 0, 100% 23px, 100% calc(100% - 23px), calc(100% - 23px) 100%, 23px 100%, 0 calc(100% - 23px), 0 23px)',
              padding: '36px 48px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: 40, 
              zIndex: 2,
              boxShadow: '0 10px 40px rgba(0,0,0,0.05)'
            }}
          >
            <div style={{ position: 'absolute', top: 12, left: 12, width: 6, height: 3, background: themeColor, transform: 'rotate(-45deg)', opacity: 0.8 }} />
            <div style={{ position: 'absolute', top: 12, right: 12, width: 6, height: 3, background: themeColor, transform: 'rotate(45deg)', opacity: 0.8 }} />
            <div style={{ position: 'absolute', bottom: 12, left: 12, width: 6, height: 3, background: themeColor, transform: 'rotate(45deg)', opacity: 0.8 }} />
            <div style={{ position: 'absolute', bottom: 12, right: 12, width: 6, height: 3, background: themeColor, transform: 'rotate(-45deg)', opacity: 0.8 }} />

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
              <div style={{ fontSize: 11, color: themeColor, letterSpacing: '0.3em', marginBottom: 10, fontWeight: 900, textTransform: 'uppercase' }}>
                {headerTitle}
              </div>
              <div style={{ fontSize: 42, fontWeight: 900, marginBottom: 12, color: '#1B0088', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {title}
              </div>
              
              <div style={{ fontSize: 14, color: '#4D4D4D', lineHeight: 1.6, maxWidth: 600, fontWeight: 600 }}>
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
            <div style={{ fontSize: 11, color: themeColor, letterSpacing: '0.2em', marginBottom: 4, fontWeight: 900, textTransform: 'uppercase' }}>REGISTROS TÉCNICOS</div>
            <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: '0.05em', color: '#1B0088', textTransform: 'uppercase' }}>RECURSOS DISPONIBLES</div>
          </div>
          <div style={{ flex: 1, height: 1, background: 'rgba(27,0,136,0.1)', position: 'relative' }}>
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
            <div style={{ textAlign: 'center', padding: 60, color: '#64748B', border: '2px dashed #CBD5E1', borderRadius: 8, background: '#ffffff', fontWeight: 600 }}>
              NO HAY RECURSOS CONFIGURADOS EN ESTA TERMINAL
            </div>
          ) : links.map((link: any, i: number) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.01, boxShadow: `0 10px 30px ${themeColor}15` }}
              style={{ 
                position: 'relative', 
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                display: 'flex', 
                alignItems: 'center', 
                gap: 24,
                padding: '20px 24px',
                cursor: 'pointer',
                background: '#ffffff', 
                border: `1px solid ${themeColor}40`,
                boxShadow: `0 5px 15px rgba(0,0,0,0.02)`
              }} 
              onClick={() => link.url !== '#' && window.open(link.url, '_blank')}
            >
              {/* Tactical Corners */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: 12, height: 12, borderTop: `3px solid ${themeColor}`, borderLeft: `3px solid ${themeColor}`, zIndex: 3 }} />
              <div style={{ position: 'absolute', top: 0, right: 0, width: 12, height: 12, borderTop: `3px solid ${themeColor}`, borderRight: `3px solid ${themeColor}`, zIndex: 3 }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: 12, height: 12, borderBottom: `3px solid ${themeColor}`, borderLeft: `3px solid ${themeColor}`, zIndex: 3 }} />
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: 12, height: 12, borderBottom: `3px solid ${themeColor}`, borderRight: `3px solid ${themeColor}`, zIndex: 3 }} />

              {/* ICON SCAN AREA */}
              <div style={{
                width: 80, height: 80,
                background: '#F1F5F9',
                borderRadius: '4px',
                position: 'relative',
                border: `1px solid ${themeColor}30`,
                overflow: 'hidden',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
                backgroundImage: `linear-gradient(${themeColor}10 1px, transparent 1px), linear-gradient(90deg, ${themeColor}10 1px, transparent 1px)`,
                backgroundSize: '10px 10px'
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
                    boxShadow: `0 0 10px ${themeColor}80`,
                    zIndex: 10,
                    pointerEvents: 'none',
                    opacity: 0.8
                  }}
                />
                <motion.div 
                  animate={{ scale: 1.1 }}
                  transition={{ duration: 2, repeat: Infinity, alternate: true }}
                  style={{ color: themeColor, zIndex: 2 }}
                >
                  <div style={{ filter: 'invert(1) hue-rotate(180deg)' }}>
                    {listIcon}
                  </div>
                </motion.div>
              </div>

              <div style={{ flex: 1, zIndex: 2 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                  <div style={{ fontSize: 20, fontWeight: 900, color: themeColor, opacity: 0.8 }}>{String(i + 1).padStart(2, '0')}</div>
                  <div style={{ fontSize: 18, fontWeight: 900, letterSpacing: '0.02em', color: '#1B0088', textTransform: 'uppercase' }}>{link.label}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 10, fontWeight: 800, color: '#64748B', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  <div>STATUS: <span style={{ color: '#22c55e' }}>● AVAILABLE</span></div>
                  <div style={{ color: 'rgba(27,0,136,0.1)' }}>|</div>
                  <div>ACCESS: <span style={{ color: '#22c55e' }}>ENABLED</span></div>
                </div>
                <div style={{ fontSize: 13, color: '#4D4D4D', fontWeight: 600, lineHeight: 1.4 }}>
                  {description}
                </div>
              </div>

              <div style={{
                position: 'relative',
                padding: '10px 20px',
                background: themeColor,
                borderRadius: '4px',
                color: '#ffffff',
                fontSize: 12,
                fontWeight: 900,
                zIndex: 2,
                boxShadow: `0 4px 15px ${themeColor}40`
              }}>
                {link.url && link.url !== '#' ? 'ABRIR' : 'SIN ENLACE'}
              </div>
            </motion.div>
          ))}
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
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.05)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {footerLogo ? (
            <img src={footerLogo} alt="Footer Logo" style={{ height: 18, filter: 'brightness(0) sepia(1) hue-rotate(240deg) saturate(3) opacity(0.8)' }} />
          ) : (
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: themeColor, boxShadow: `0 0 10px ${themeColor}` }} />
          )}
          <span style={{ fontWeight: 900 }}>{footerTitle}</span>
        </div>
        <div style={{ display: 'flex', gap: 24, fontSize: 10 }}>
          <div style={{ color: '#64748B' }}>POWER: <span style={{ color: '#00C853' }}>STABLE</span></div>
          <div style={{ color: '#CBD5E1' }}>|</div>
          <div style={{ color: '#64748B' }}>TEMP: <span style={{ color: '#00C853' }}>22°C</span></div>
          <div style={{ color: '#CBD5E1' }}>|</div>
          <div style={{ color: '#64748B' }}>AUTH: <span style={{ color: '#00C853' }}>GRANTED</span></div>
        </div>
      </div>
    </div>
  );
}
'''
    
    with open('src/components/Views5.tsx', 'w', encoding='utf-8') as f:
        f.write(before + new_tech_base + "\n\n" + after)
