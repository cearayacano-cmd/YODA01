'use client';

import React, { useState } from 'react';
import { Lock } from 'lucide-react';
import { Landing, BaseStation } from '../components/Views';
import { GalaxySelection, PlanetSelection } from '../components/Views3';
import { RutaLiderView, LaboratorioView, IngenieriaView, SuministrosView, OperacionesView } from '../components/Views5';
import { PlanetContentView } from '../components/Views6';
import { AdminCenter } from '../components/AdminViews';
import { AdminExploracion } from '../components/AdminViews2';
import { AdminRutaLider } from '../components/AdminViews3';
import { AdminSatelites } from '../components/AdminViews4';
import { AdminPlanetEditor } from '../components/AdminPlanetEditor';
import { RUTA_DATA_DEFAULT, SOPORTE_PLANET_1, FSC_DATA_DEFAULT, CONHECENDO_DATA, IMERSAO_DATA } from '../components/../lib/data';

export default function Page() {
  const [view, setView] = useState('landing');
  const [currentStation, setCurrentStation] = useState('BR');
  const [activeSector, setActiveSector] = useState('frontLine');
  const [activeCourseIdx, setActiveCourseIdx] = useState(0);
  
  const [adminStation, setAdminStation] = useState('BR');
  const [adminPortal, setAdminPortal] = useState('conhecendo');
  const [adminAdvancedSector, setAdminAdvancedSector] = useState('frontLine');
  const [adminAdvancedPlanetIdx, setAdminAdvancedPlanetIdx] = useState(0);

  const initGalaxy = (labels) => labels.map(l => ({ label:l }));

  const [appConfig, setAppConfig] = useState({
    br: {
      monitoringUrl:"https://lookerstudio.google.com/u/0/reporting/9d1f44d6-e585-4a9c-af76-c0883ed691e2/page/p_wtg2od23vd",
      suministros:[{label:"Formularios BR",url:"#"}],
      ingenieria:[{label:"Manuales Técnicos",url:"#"}],
      laboratorio:[{label:"KPIs Estratégicos",url:"#"}],
      operaciones:[{label:"Entrenamiento Tripulación",url:"#"}],
      rutaLider: RUTA_DATA_DEFAULT,
      frontLineContent: Array.from({length: 8}, ()=>[]),
      soporteContent: [ SOPORTE_PLANET_1, [] ],
      satelites: { conhecendo: CONHECENDO_DATA, imersao: IMERSAO_DATA },
      fsc: [ FSC_DATA_DEFAULT ],
      exploracion:{
        frontLine:initGalaxy(["Base 🪐","Pos Venta 1 🪐","Pos Venta 2 🪐","HVC 🪐","DT Bagagens 🪐","DT Devoluciones 🪐","RRSS 🪐","LAE 🪐"]),
        soporte:initGalaxy(["Soporte BO (Pendiente) 🪐","Soporte FFP (Pendiente) 🪐"]),
        fieldSupport:initGalaxy(["FSC (Pendiente) 🪐"])
      }
    },
    ssc: {
      monitoringUrl:"",
      suministros:[],ingenieria:[],laboratorio:[],operaciones:[],
      rutaLider:[],
      frontLineContent: [],
      soporteContent: [],
      satelites: { conhecendo: [], imersao: [] },
      fsc: [],
      exploracion:{frontLine:[],soporte:[],fieldSupport:[]}
    }
  });

  const activeConfig = currentStation==='BR' ? appConfig.br : appConfig.ssc;
  const go = (v, sector=null, courseIdx=null) => {
    setView(v);
    if(sector) setActiveSector(sector);
    if(courseIdx!==null) setActiveCourseIdx(courseIdx);
    window.scrollTo(0,0);
  };

  switch(view) {
    case 'landing':
      return <Landing onNavigate={st=>{setCurrentStation(st.toUpperCase());go(st==='br'?'br':'ssc-pending')}} onAdmin={()=>go('admin')}/>;
    case 'br':
      return <BaseStation stationName="BR" config={appConfig.br} onBack={()=>go('landing')} onNavigate={go}/>;
    case 'ssc-pending':
      return (
        <div style={{minHeight:'100vh', background:'#ffffff', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:48}}>
          <Lock size={48} color="#111111" style={{marginBottom:24}}/>
          <div style={{fontSize:36, fontWeight:900, color:'#111111', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:12}}>Sector SSC</div>
          <div style={{fontSize:12, color:'#555555', letterSpacing:'0.35em', textTransform:'uppercase', marginBottom:40}}>ACCESS DENIED - DOCKING INCOMPLETE</div>
          <button onClick={()=>go('landing')} style={{background:'#ffffff', border:'2px solid #111111', padding:'8px 18px', cursor:'pointer', fontSize:13, fontWeight:700, borderRadius:4}}>RETURN TO ORIGIN</button>
        </div>
      );
    case 'galaxies':
      return <GalaxySelection onNavigate={go} onBack={()=>go('br')}/>;
    case 'planets':
      return <PlanetSelection sectorId={activeSector} config={activeConfig} onNavigate={go} onBack={()=>go('galaxies')}/>;
    case 'mission': {
      const advDataKey = activeSector === 'soporte' ? 'soporteContent' : activeSector === 'frontLine' ? 'frontLineContent' : 'fsc';
      const labelPrefix = activeSector === 'soporte' ? 'SOPORTE' : activeSector === 'frontLine' ? 'FRONT LINE' : 'FIELD SUPPORT';
      return <PlanetContentView planetIdx={activeCourseIdx} data={activeConfig[advDataKey]} planetLabel={activeConfig.exploracion?.[activeSector]?.[activeCourseIdx]?.label} sectorLabel={labelPrefix} onBack={()=>go('planets',activeSector)}/>;
    }
    case 'admin':
      return <AdminCenter config={appConfig} setConfig={setAppConfig} onBack={()=>go('landing')} onExploracion={st=>{setAdminStation(st);go('admin-exploracion')}} onRutaLider={st=>{setAdminStation(st);go('admin-ruta-lider')}}/>;
    case 'admin-exploracion':
      return <AdminExploracion currentStationConfig={appConfig[adminStation.toLowerCase()]} updateStationConfig={(field,val)=>{const next={...appConfig};next[adminStation.toLowerCase()][field]=val;setAppConfig(next);}} onSatelites={(pk)=>{setAdminPortal(pk||'conhecendo');go('admin-satelites');}} onAdvancedContent={(sector, pi)=>{setAdminAdvancedSector(sector);setAdminAdvancedPlanetIdx(pi||0);go('admin-advanced');}} onBack={()=>go('admin')}/>;
    case 'admin-advanced': {
      const sk = adminStation.toLowerCase();
      const advDataKey = adminAdvancedSector === 'soporte' ? 'soporteContent' : adminAdvancedSector === 'frontLine' ? 'frontLineContent' : 'fsc';
      const titlePrefix = adminAdvancedSector === 'soporte' ? 'EDITOR SOPORTE' : adminAdvancedSector === 'frontLine' ? 'EDITOR FRONT LINE' : 'EDITOR FSC';
      return (
        <AdminPlanetEditor 
          dataArray={appConfig[sk][advDataKey] || []} 
          setDataArray={(val) => {
            const next = { ...appConfig };
            next[sk][advDataKey] = val;
            setAppConfig(next);
          }} 
          planets={appConfig[sk].exploracion?.[adminAdvancedSector] || []} 
          initialPlanet={adminAdvancedPlanetIdx} 
          title={titlePrefix} 
          onBack={() => go('admin-exploracion')}
        />
      );
    }
    case 'admin-ruta-lider':
      return <AdminRutaLider rutaData={appConfig[adminStation.toLowerCase()].rutaLider} setRutaData={(val)=>{const next={...appConfig};next[adminStation.toLowerCase()].rutaLider=val;setAppConfig(next);}} title="EDITOR: RUTA DEL LÍDER GUARDIÁN" onBack={()=>go('admin')}/>;
    case 'admin-satelites':
      return <AdminSatelites satelitesData={appConfig[adminStation.toLowerCase()].satelites||{conhecendo:[],imersao:[]}} setSatelitesData={(val)=>{const next={...appConfig};next[adminStation.toLowerCase()].satelites=val;setAppConfig(next);}} initialPortal={adminPortal} onBack={()=>go('admin-exploracion')}/>;
    case 'ruta-lider':
      return <RutaLiderView links={activeConfig.laboratorio} rutaData={activeConfig.rutaLider} onBack={()=>go('laboratorio')}/>;
    case 'laboratorio':
      return <LaboratorioView links={activeConfig.laboratorio} rutaData={activeConfig.rutaLider} onBack={()=>go('br')} onNavigateRuta={()=>go('ruta-lider')} title={activeConfig.moduleMeta?.lab?.title} subtitle={activeConfig.moduleMeta?.lab?.subtitle}/>;
    case 'ingenieria':
      return <IngenieriaView links={activeConfig.ingenieria} onBack={()=>go('br')} title={activeConfig.moduleMeta?.eng?.title} subtitle={activeConfig.moduleMeta?.eng?.subtitle}/>;
    case 'suministros':
      return <SuministrosView links={activeConfig.suministros} onBack={()=>go('br')} title={activeConfig.moduleMeta?.sup?.title} subtitle={activeConfig.moduleMeta?.sup?.subtitle}/>;
    case 'operaciones':
      return <OperacionesView links={activeConfig.operaciones} onBack={()=>go('br')} title={activeConfig.moduleMeta?.ops?.title} subtitle={activeConfig.moduleMeta?.ops?.subtitle}/>;
    default:
      return <Landing onNavigate={st=>{setCurrentStation(st.toUpperCase());go(st==='br'?'br':'ssc-pending')}} onAdmin={()=>go('admin')}/>;
  }
}
