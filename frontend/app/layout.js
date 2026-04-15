export const metadata = {
  title: 'Universo Customer Care - LATAM',
  description: 'Mission Control · LATAM Carrier',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <style>{`
          * { box-sizing: border-box; }
          body { 
            margin: 0; 
            background: #0B0033; 
            font-family: 'Inter', sans-serif; 
            color: #111111; 
            overflow-x: hidden;
          }
          ::-webkit-scrollbar { width: 6px; }
          ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 3px; }
          
          @keyframes scanner-move {
            0% { top: -10px; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 310px; opacity: 0; }
          }

          .scanner-line {
            display: block;
            position: absolute;
            left: 0;
            width: 100%;
            height: 2px;
            background: rgba(255, 255, 255, 0.8);
            box-shadow: 0 0 15px 2px white;
            z-index: 10;
            pointer-events: none;
            animation: scanner-move 2s linear infinite;
            animation-play-state: paused;
            transition: none;
          }
          
          @keyframes scanline {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
          }
          
          @keyframes flicker {
            0% { opacity: 0.97; }
            5% { opacity: 0.95; }
            10% { opacity: 0.9; }
            15% { opacity: 0.95; }
            20% { opacity: 0.98; }
            25% { opacity: 0.95; }
            30% { opacity: 0.9; }
            100% { opacity: 1; }
          }

          @keyframes pulse {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
          }

          .hologram-scan {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%);
            animation: scanline 8s linear infinite;
            pointer-events: none;
            z-index: 1;
          }

          .hologram-flicker {
            animation: flicker 0.15s infinite;
          }

          .tactical-grid {
            background-image: 
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
            background-size: 10px 10px;
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
