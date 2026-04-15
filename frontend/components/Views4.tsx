import React, { useState } from 'react';
import { BackBtn } from './Shared';

export const LinksView = ({ title, subtitle, links, onBack, children }: any) => (
  <div style={{minHeight:'100vh', background:'#ffffff'}}>
    <div style={{background:'#111111', padding:'10px 24px', display:'flex', alignItems:'center', gap:20}}>
      <BackBtn onClick={onBack} label="VOLVER"/>
      <span style={{color:'#ffffff', fontSize:15, fontWeight:900}}>{title}</span>
    </div>
    <div style={{padding:32, maxWidth:960, margin:'0 auto'}}>
      {subtitle && <div style={{fontSize:11, color:'#555555', letterSpacing:'0.3em', textTransform:'uppercase', marginBottom:24}}>{subtitle}</div>}
      {children}
      {(!links || links.length===0) ? (
        <div style={{textAlign:'center', padding:60, color:'#888888', border:'1px dashed #cccccc', borderRadius:4}}>NO HAY RECURSOS CONFIGURADOS</div>
      ) : links.map((link, i) => (
        <div key={i} onClick={()=>link.url!=='#'&&window.open(link.url,'_blank')}
          style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'14px 20px', marginBottom:8, cursor:'pointer', border:'1px solid #cccccc', borderRadius:4}}
          onMouseEnter={e=>e.currentTarget.style.borderColor='#111111'}
          onMouseLeave={e=>e.currentTarget.style.borderColor='#cccccc'}>
          <div style={{fontSize:14, fontWeight:700, color:'#111111', textTransform:'uppercase'}}>{link.label}</div>
          <div style={{fontSize:11, color:'#555555'}}>{link.url&&link.url!=='#'?'ABRIR ↗':'SIN LINK'}</div>
        </div>
      ))}
    </div>
  </div>
);

export const RutaLiderView = ({ links, rutaData, onBack }) => {
  const [completed, setCompleted] = useState(new Set());
  const [activePanel, setActivePanel] = useState(null);
  const poderes = [...new Set((rutaData||[]).map(d=>d.poder))];
  const getItems = (poder) => (rutaData||[]).filter(d=>d.poder===poder);
  const temas = (poder) => {
    const items = getItems(poder);
    const map = {};
    items.forEach(item=>{if(!map[item.tema])map[item.tema]=[];map[item.tema].push(item);});
    return map;
  };
  const handleComplete = (poder) => {
    const n = new Set([...completed, poder]);
    setCompleted(n);
    setActivePanel(null);
  };
  return (
    <div style={{minHeight:'100vh', background:'#ffffff'}}>
      <div style={{background:'#111111', padding:'10px 24px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <BackBtn onClick={onBack} label="VOLVER"/>
        <span style={{color:'#ffffff', fontSize:15, fontWeight:900}}>RUTA DEL LÍDER GUARDIÁN</span>
        <span style={{color:'#ffffff', fontSize:12}}>XP: {completed.size * 200} / {poderes.length*200}</span>
      </div>
      <div style={{padding:32, maxWidth:900, margin:'0 auto'}}>
        <div style={{fontSize:11, color:'#555555', letterSpacing:'0.3em', textTransform:'uppercase', marginBottom:20}}>
          {completed.size}/{poderes.length} PODERES COMPLETADOS
        </div>
        {poderes.map((poder, pi) => {
          const isDone = completed.has(poder);
          const isOpen = activePanel === poder;
          const items = getItems(poder);
          const temasData = temas(poder);
          return (
            <div key={poder} style={{border:`2px solid ${isDone?'#111111':'#cccccc'}`, marginBottom:12, borderRadius:4}}>
              <div onClick={()=>setActivePanel(isOpen?null:poder)} style={{padding:'14px 20px', cursor:'pointer', display:'flex', justifyContent:'space-between', alignItems:'center'}}
                onMouseEnter={e=>e.currentTarget.style.background='#f0f0f0'}
                onMouseLeave={e=>e.currentTarget.style.background='#ffffff'}>
                <div>
                  <div style={{fontSize:10, color:'#777777', letterSpacing:'0.2em', marginBottom:4}}>{isDone?'✓ COMPLETADO':'• DISPONIBLE'} · {items.length} NODOS</div>
                  <div style={{fontSize:16, fontWeight:900, color:'#111111', textTransform:'uppercase'}}>{poder}</div>
                </div>
                <div style={{fontSize:18}}>{isOpen?'▲':'▼'}</div>
              </div>
              {isOpen && (
                <div style={{borderTop:'1px solid #cccccc', padding:'16px 20px', background:'#fafafa'}}>
                  {Object.entries(temasData).map(([tema, tItems]: [string, any])=>(
                    <div key={tema} style={{marginBottom:14}}>
                      <div style={{fontSize:11, fontWeight:700, color:'#333333', textTransform:'uppercase', letterSpacing:'0.15em', marginBottom:8}}>{tema}</div>
                      {tItems.map((item,ii)=>(
                        <div key={ii} style={{padding:'8px 12px', marginBottom:4, border:'1px solid #eeeeee', borderRadius:3, background:'#ffffff'}}>
                          <div style={{fontSize:12, color:'#222222', marginBottom:item.consejo&&item.consejo!=='-'?4:0}}>{item.desc}</div>
                          {item.consejo&&item.consejo!=='-' && <div style={{fontSize:10, color:'#666666'}}>💡 {item.consejo}</div>}
                          {item.adjunto&&item.adjunto!=='#' && <button onClick={()=>window.open(item.adjunto,'_blank')} style={{marginTop:6, background:'#ffffff', border:'1px solid #cccccc', padding:'3px 8px', cursor:'pointer', fontSize:10, borderRadius:3}}>ADJUNTO ↗</button>}
                        </div>
                      ))}
                    </div>
                  ))}
                  {!isDone && (
                    <button onClick={()=>handleComplete(poder)} style={{background:'#111111', color:'#ffffff', border:'none', padding:'10px 24px', cursor:'pointer', fontSize:12, fontWeight:700, borderRadius:3, marginTop:8}}>
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
