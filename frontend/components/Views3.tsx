import React, { useState } from 'react';
import { BackBtn } from './Shared';
import { MacroTemaTable } from './Views2';

const ConhecendoRutaView = ({ onBack, data }: any) => {
  const rows = data || [];
  const macroTemas = [...new Set(rows.map((r: any)=>r.macroTema))];
  const byMacro: any = {};
  macroTemas.forEach(mt=>{ byMacro[String(mt)]=rows.filter((r: any)=>r.macroTema===mt); });
  return (
    <div style={{minHeight:'100vh', background:'#F8F7FF', color: '#0B0033'}}>
      <div style={{background:'#111111', padding:'10px 24px', display:'flex', alignItems:'center', gap:20, borderBottom: '1px solid rgba(0,0,0,0.1)'}}>
        <BackBtn onClick={onBack} label="VOLVER"/>
        <span style={{color:'#ffffff', fontSize:15, fontWeight:900}}>CONHECENDO UNIVERSO CUSTOMER CARE</span>
      </div>
      <div style={{padding:24, maxWidth:1100, margin:'0 auto'}}>
        {macroTemas.map((mt: any)=>(
          <MacroTemaTable key={String(mt)} mt={String(mt)} rows={byMacro[String(mt)]} />
        ))}
      </div>
    </div>
  );
};

export const ImersaoRutaView = ({ onBack, data }: any) => {
  const rows = data || [];
  const macroTemas = [...new Set(rows.map((r: any)=>r.macroTema))];
  const byMacro: any = {};
  macroTemas.forEach(mt=>{ byMacro[String(mt)]=rows.filter((r: any)=>r.macroTema===mt); });
  return (
    <div style={{minHeight:'100vh', background:'#F8F7FF', color: '#0B0033'}}>
      <div style={{background:'#111111', padding:'10px 24px', display:'flex', alignItems:'center', gap:20, borderBottom: '1px solid rgba(0,0,0,0.1)'}}>
        <BackBtn onClick={onBack} label="VOLVER"/>
        <span style={{color:'#ffffff', fontSize:15, fontWeight:900}}>IMERSÃO OPERACIONAL ESTRATÉGICA</span>
      </div>
      <div style={{padding:24, maxWidth:1100, margin:'0 auto'}}>
        {macroTemas.map((mt: any)=>(
          <MacroTemaTable key={String(mt)} mt={String(mt)} rows={byMacro[String(mt)]} />
        ))}
      </div>
    </div>
  );
};

export const PlanetSelection = ({ sectorId, config, onNavigate, onBack }) => {
  const sectorData = config.exploracion[sectorId] || [];
  const satelites = config.satelites || {};
  const [activeMap, setActiveMap] = useState(null);
  const PORTALS = [
    { key:'conhecendo', title:'Conhecendo Universo Customer Care' },
    { key:'imersao',    title:'Imersão Operacional Estratégica'   },
  ];
  if(activeMap === 'conhecendo') return <ConhecendoRutaView data={satelites.conhecendo} onBack={()=>setActiveMap(null)}/>;
  if(activeMap === 'imersao')    return <ImersaoRutaView    data={satelites.imersao}    onBack={()=>setActiveMap(null)}/>;
  const sectorLabel = sectorId==='frontLine'?'FRONT LINE':sectorId==='soporte'?'SOPORTE':'FIELD SUPPORT';
  return (
    <div style={{minHeight:'100vh', background:'#F8F7FF', color: '#0B0033'}}>
      <div style={{background:'#111111', padding:'10px 24px', display:'flex', alignItems:'center', gap:20, borderBottom: '1px solid rgba(0,0,0,0.1)'}}>
        <BackBtn onClick={onBack} label="VOLVER"/>
        <span style={{color:'#ffffff', fontSize:15, fontWeight:900}}>SECTOR: {sectorLabel}</span>
      </div>
      <div style={{padding:32}}>
        {sectorId==='frontLine' && (
          <div style={{marginBottom:28}}>
            <div style={{fontSize:11, color:'rgba(11,0,51,0.5)', letterSpacing:'0.3em', textTransform:'uppercase', marginBottom:14}}>◇ SATÉLITES AUXILIARES · FORMAÇÃO BASE</div>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, maxWidth:500}}>
              {PORTALS.map((portal,i) => (
                <div key={portal.key} onClick={()=>setActiveMap(portal.key)} style={{border:'2px solid rgba(11,0,51,0.2)', padding:'10px 12px', cursor:'pointer', borderRadius:4, background: 'rgba(255,255,255,0.8)', transition: 'all 0.3s ease'}}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor='#111111'; e.currentTarget.style.background='#ffffff'}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(11,0,51,0.2)'; e.currentTarget.style.background='rgba(255,255,255,0.8)'}}>
                  <div style={{fontSize:11, fontWeight:700, color:'#111111', marginBottom:3}}>{portal.title}</div>
                  <div style={{fontSize:10, color:'#B20F3B'}}>🗺 MAPA INTERATIVO →</div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div style={{fontSize:11, color:'rgba(11,0,51,0.5)', letterSpacing:'0.3em', textTransform:'uppercase', marginBottom:14}}>SELECCIONA UN PLANETA</div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:16}}>
          {sectorData.map((course, i) => (
            <div key={i} onClick={()=>onNavigate('mission', sectorId, i)} style={{border:'2px solid rgba(11,0,51,0.2)', padding:16, cursor:'pointer', borderRadius:4, textAlign:'center', background: 'rgba(255,255,255,0.8)', transition: 'all 0.3s ease'}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor='#111111'; e.currentTarget.style.background='#ffffff'}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(11,0,51,0.2)'; e.currentTarget.style.background='rgba(255,255,255,0.8)'}}>
              <div style={{fontSize:10, color:'rgba(11,0,51,0.4)', letterSpacing:'0.2em', marginBottom:8}}>PLN-{String(i+1).padStart(3,'0')}</div>
              <div style={{fontSize:12, fontWeight:900, color:'#111111', textTransform:'uppercase', marginBottom:10}}>{course.label}</div>
              <div style={{fontSize:10, fontWeight:700, letterSpacing:'0.2em', color: '#B20F3B'}}>▶ INICIAR →</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
