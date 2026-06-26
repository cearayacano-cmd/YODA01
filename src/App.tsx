/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Rocket, Satellite, Users, Settings, Star, Wrench, Package, Activity,
  User, ChevronLeft, LayoutGrid, Zap, ShieldCheck, ChevronRight, Orbit, Target,
  Flag, CheckCircle2, ExternalLink, FileText, Database,
  Cpu, BookOpen, ClipboardList, Compass, Trophy, BarChart4, GraduationCap,
  CalendarDays, FileBadge, Save, Globe, Lock, Plus,
  Trash2, Layers, ArrowUpRight, Terminal, Wifi, Shield, Gauge,
  Crosshair, Radio, HardDrive, AlertTriangle, Map as MapIcon
} from 'lucide-react';

import {
  RUTA_DATA_DEFAULT,
  SUPORTE_PLANET_1,
  FSC_DATA_DEFAULT,
  CONHECENDO_DATA,
  IMERSAO_DATA,
  BASE_PLANET_DATA,
  POS_VENDA_1_DATA,
  POS_VENDA_2_DATA,
  HVC_BAG_DATA,
  LAE_DATA,
  VENDAS_WS_12_DATA,
  ONBOARDING_DATA_DEFAULT,
  ONBOARDING_VENDAS_DATA,
  ONBOARDING_EMPTY
} from './lib/data';

import appConfigJson from './lib/appConfig.json';

import { AdminCenter } from './components/AdminViews';
import { AdminExploracion } from './components/AdminViews2';
import { AdminRutaLider } from './components/AdminViews3';
import { AdminSatelites } from './components/AdminViews4';
import { AdminPlanetEditor } from './components/AdminPlanetEditor';
import { Landing, BaseStation } from './components/Views';
import { GalaxySelection } from './components/Views2';
import { PlanetSelection } from './components/Views3';
import { LinksView } from './components/Views4';
import { LaboratorioView, IngenieriaView, SuministrosView, OperacionesView, RutaLiderView } from './components/Views5';
import { PlanetContentView } from './components/Views6';
import { ActivityLogView } from './components/ActivityLogView';
import { InstructorDashboard } from './components/InstructorDashboard';
import { UnifiedTrackingDashboard } from './components/UnifiedTrackingDashboard';

/* ── SIMPLE BUTTONS ─────────────────────────────────────────────────── */
const Btn = ({ onClick, children, style = {} }: any) => (
  <button onClick={onClick} style={{
    background: '#ffffff', border: '2px solid #111111', padding: '8px 18px',
    cursor: 'pointer', fontSize: 13, fontWeight: 700, color: '#111111',
    fontFamily: 'Trebuchet MS,Trebuchet,Arial,sans-serif',
    borderRadius: 4, ...style
  }}>{children}</button>
);

const BackBtn = ({ onClick, label }: any) => {
  const isEs = typeof localStorage !== 'undefined' && localStorage.getItem('yoda_station_name') === 'SSC';
  const displayLabel = label && label !== 'VOLTAR' && label !== 'VOLVER' ? label : (isEs ? 'VOLVER' : 'VOLTAR');
  return (
    <Btn onClick={onClick} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
      ← {displayLabel}
    </Btn>
  );
};

/* ── SHARED COMPONENTS ──────────────────────────────────────────────── */
const thS = () => ({ padding: '6px 10px', fontSize: 9, color: '#555555', textTransform: 'uppercase' as const, fontWeight: 700, letterSpacing: '0.05em', textAlign: 'left' as const, borderBottom: '1px solid #cccccc' });
const tdS = () => ({ padding: '8px 10px', fontSize: 12, borderBottom: '1px solid #eeeeee' });

const MacroTemaTable = ({ mt, rows }: any) => {
  const tiempo = rows[0] ? rows[0].tiempo || '' : '';
  return (
    <div style={{ marginBottom: 32 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10, borderBottom: '2px solid #111111', paddingBottom: 8 }}>
        <div style={{ fontSize: 14, fontWeight: 900, color: '#111111', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{mt}</div>
        {tiempo && <div style={{ fontSize: 11, color: '#555555', background: '#f5f5f5', border: '1px solid #cccccc', padding: '2px 10px', borderRadius: 12 }}>⏱ {tiempo}</div>}
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f5f5f5' }}>
            <th style={{ ...thS(), width: 40 }}>DÍA</th>
            <th style={{ ...thS(), width: 160 }}>TEMA</th>
            <th style={{ ...thS() }}>DETALHE PARA O INSTRUTOR</th>
            <th style={{ ...thS(), width: 160 }}>FERRAMENTAS</th>
            <th style={{ ...thS(), width: 90 }}>TIEMPO</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row: any, i: number) => (
            <tr key={i} style={{ background: i % 2 === 0 ? '#fafafa' : '#ffffff', verticalAlign: 'top' }}>
              <td style={{ ...tdS(), textAlign: 'center', fontWeight: 700, width: 40 }}>{row.dia}</td>
              <td style={{ ...tdS(), width: 160 }}>
                <div style={{ fontSize: 12, fontWeight: 600, lineHeight: 1.5 }}>{row.tema}</div>
              </td>
              <td style={{ ...tdS() }}>
                <div style={{ fontSize: 12, lineHeight: 1.6, whiteSpace: 'pre-line' }}>{row.detalhe || row.tema}</div>
                {row.detalheUrl && (
                  <a href={row.detalheUrl} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 6, fontSize: 11, color: '#1a56db', fontWeight: 600, textDecoration: 'none', border: '1px solid #c3d9ff', background: '#f0f5ff', padding: '3px 9px', borderRadius: 4 }}>
                    🔗 Ver recurso
                  </a>
                )}
              </td>
              <td style={{ ...tdS(), width: 160 }}>
                <span style={{ fontSize: 12, color: '#333' }}>{row.ferramentas || ''}</span>
              </td>
              <td style={{ ...tdS(), width: 90, textAlign: 'center', fontWeight: 700, fontSize: 12 }}>{i === 0 ? tiempo : ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/* ── VIEWS ─────────────────────────────────────────────────────────── */











/* ── MAIN APP COMPONENT ─────────────────────────────────────────────── */
export default function App() {
  const [view, setView] = useState('landing');
  const [currentStation, setCurrentStation] = useState(() => typeof localStorage !== 'undefined' ? localStorage.getItem('yoda_station_name') || 'BR' : 'BR');
  if (typeof window !== 'undefined') (window as any).YODA_STATION = currentStation;
  const [activeSector, setActiveSector] = useState('frontLine');
  const [activeCourseIdx, setActiveCourseIdx] = useState(0);
  const [adminStation, setAdminStation] = useState<string>('BR');
  const [selectedInstructorId, setSelectedInstructorId] = useState<string | null>(null);
  const [adminSector, setAdminSector] = useState('frontLine');
  const [adminCourseIdx, setAdminCourseIdx] = useState(0);
  const [adminSatellitePk, setAdminSatellitePk] = useState('conhecendo');

  // Profile and Activity Tracking
  const [activeUser, setActiveUser] = useState('carlose.araya@latam.com');
  const [activityLogs, setActivityLogs] = useState<{ time: string, user: string, action: string, details: string, partidaId?: string }[]>([]);

  useEffect(() => {
    // Load persisted state
    const savedLogs = localStorage.getItem('yoda_activity_logs');
    if (savedLogs) {
      try { setActivityLogs(JSON.parse(savedLogs)); } catch (e) { }
    }
    const savedUser = localStorage.getItem('yoda_active_user');
    if (savedUser) setActiveUser(savedUser);

    // Ensure an active partida exists
    if (!localStorage.getItem('yoda_active_partida')) {
      localStorage.setItem('yoda_active_partida', 'MISION-INICIAL');
    }
  }, []);

  const changeUser = (email: string) => {
    setActiveUser(email);
    localStorage.setItem('yoda_active_user', email);
    addLog('SYSTEM', `Usuario cambiado a: ${email}`, email);
  };

  const addLog = (action: string, details: string, explicitUser?: string) => {
    const user = explicitUser || activeUser;
    const partidaId = localStorage.getItem('yoda_active_partida') || 'MISION-INICIAL';
    setActivityLogs(prev => {
      const next = [{ time: new Date().toISOString(), user, action, details, partidaId }, ...prev].slice(0, 1000); // keep last 1000 logs
      localStorage.setItem('yoda_activity_logs', JSON.stringify(next));
      return next;
    });
  };

  const initGalaxy = (labels: string[]) => {
    const COLORS = [
      '#ED1650', '#00D6CC', '#D400FF', '#FFE017', '#99CC33',
      '#00A9E0', '#FF8C00', '#FF00FF', '#00FF00', '#FFFFFF'
    ];
    return labels.map((l, i) => ({
      label: l,
      color: COLORS[i % COLORS.length],
      secciones: [],
      materiais: [],
      evalKon: [],
      evalAec: [],
      evalMsg: ''
    }));
  };

  const [appConfig, setAppConfig] = useState(appConfigJson);

  React.useEffect(() => {
    // ONE-TIME AUTO WIPE FOR VERSION UPDATE
    // This ensures that all old, corrupted, or conflicting progress markers are cleared for the user.
    if (!localStorage.getItem('yoda_auto_wipe_v7')) {
      Object.keys(localStorage).forEach(key => {
        if ((key.startsWith('yoda_') && key !== 'yoda_active_user' && key !== 'yoda_station_name' && key !== 'yoda_auto_wipe_v7') || 
            key.startsWith('resolved_') || 
            key.startsWith('congrats_shown_')) {
          localStorage.removeItem(key);
        }
      });
      localStorage.setItem('yoda_auto_wipe_v7', 'true');
      console.log('Automated wipe complete (v7) - FULL CLEAR.');
    }

    // Dynamic config loading from /api/config
    const fetchConfig = async () => {
      try {
        const res = await fetch('/api/config');
        if (res.ok) {
          const data = await res.json();
          if (data && data.br) {
            setAppConfig(data);
          }
        }
      } catch (err) {
        console.error('Failed to load dynamic config, using bundle config', err);
      }
    };
    fetchConfig();
  }, []);

  const configRef = React.useRef(appConfig);
  React.useEffect(() => {
    configRef.current = appConfig;
  }, [appConfig]);

  const saveConfigToDisk = async () => {
    try {
      const res = await fetch('/api/save-config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(configRef.current)
      });
      if (!res.ok) {
        console.error('Failed to save configuration to disk');
      } else {
        console.log('Configuration saved to disk successfully');
      }
    } catch (err) {
      console.error('Error saving configuration:', err);
    }
  };

  const activeConfig = appConfig?.[currentStation.toLowerCase()] || appConfigJson[currentStation.toLowerCase()] || appConfig?.br || appConfigJson.br;
  const go = (v: string, sector: string | null = null, courseIdx: number | null = null) => {
    let details = `Navegación a: ${v}`;
    if (sector) details += ` | Sector: ${sector}`;
    if (courseIdx !== null) details += ` | Planeta Index: ${courseIdx}`;
    addLog('NAVIGATE', details);

    setView(v);
    if (sector) setActiveSector(sector);
    if (courseIdx !== null) setActiveCourseIdx(courseIdx);
    try {
      window.scrollTo(0, 0);
    } catch (e) {
      console.error("window.scrollTo failed:", e);
    }
  };

  const renderView = () => {
    const isAdmin = activeUser.includes('carlose.araya');
    const isBRUser = activeUser.includes('konectabr.com') || activeUser.includes('aec.com');
    const isSSCUser = activeUser.includes('konectaperu.com') || activeUser.includes('almacontact.com');

    // Admin accesses everything.
    // BR users access only BR. SSC users access only SSC.
    // If unknown, default to BR.
    const canAccessBR = isAdmin || isBRUser || (!isAdmin && !isSSCUser);
    const canAccessSSC = isAdmin || isSSCUser;

    switch (view) {
      case 'landing':
        return <Landing
          onNavigate={(st: string) => { setCurrentStation(st.toUpperCase()); go(st.toLowerCase()) }}
          onAdmin={() => go('admin')}
          onActivityLog={() => go('activity-log')}
          activeUser={activeUser}
          changeUser={changeUser}
          canAccessBR={canAccessBR}
          canAccessSSC={canAccessSSC}
        />;
      case 'activity-log':
        return <ActivityLogView logs={activityLogs} activeUser={activeUser} onBack={() => go('landing')} />;
      case 'br':
        return <BaseStation stationName="BR" config={appConfig?.br || appConfigJson.br} onBack={() => go('landing')} onNavigate={go} />;
      case 'ssc':
        return <BaseStation stationName="SSC" config={appConfig?.ssc || appConfigJson.ssc} onBack={() => go('landing')} onNavigate={go} />;
      case 'galaxies':
        return <GalaxySelection isEs={currentStation === 'SSC'} onNavigate={go} onBack={() => go(currentStation.toLowerCase())} />;
      case 'planets':
        return <PlanetSelection isEs={currentStation === 'SSC'} sectorId={activeSector} config={activeConfig} onNavigate={go} onBack={() => go('galaxies')} />;
      case 'mission':
        {
          const sectorData = activeSector === 'fieldSupport' ? activeConfig.fsc :
            activeSector === 'soporte' ? activeConfig.soporteContent :
              activeConfig.frontLineContent;
          const planetMeta = activeConfig.exploracion[activeSector]?.[activeCourseIdx] || {};
          const planetLabel = planetMeta.label || 'Planeta';
          const sectorLabel = activeSector === 'frontLine' ? 'FRONT LINE' :
            activeSector === 'soporte' ? 'SUPORTE' : 'FIELD SUPPORT';

          return (
            <PlanetContentView
              isEs={currentStation === 'SSC'}
              planetIdx={activeCourseIdx}
              onBack={() => go('planets')}
              data={sectorData}
              planetMeta={planetMeta}
              planetLabel={planetLabel}
              sectorLabel={sectorLabel}
              onboardingData={activeConfig.onboarding}
              onTrackEvent={addLog}
            />
          );
        }
      case 'ruta-lider':
        return <RutaLiderView links={activeConfig.laboratorio} rutaData={activeConfig.rutaLider} onBack={() => go('laboratorio')} />;
      case 'laboratorio':
        return <LaboratorioView isEs={currentStation === 'SSC'} config={activeConfig} links={activeConfig.laboratorio} rutaData={activeConfig.rutaLider} onBack={() => go(currentStation.toLowerCase())} onNavigate={go} onNavigateRuta={() => go('ruta-lider')} title={activeConfig.moduleMeta?.lab?.title} subtitle={activeConfig.moduleMeta?.lab?.subtitle} />;
      case 'ingenieria':
        return <IngenieriaView isEs={currentStation === 'SSC'} config={activeConfig} title={activeConfig.moduleMeta?.eng?.title || 'WORKSHOPS'} subtitle={activeConfig.moduleMeta?.eng?.subtitle} links={activeConfig.ingenieria} onBack={() => go(currentStation.toLowerCase())} onNavigate={go} />;
      case 'suministros':
        return <SuministrosView isEs={currentStation === 'SSC'} config={activeConfig} title={activeConfig.moduleMeta?.sup?.title || 'FORMULÁRIOS'} subtitle={activeConfig.moduleMeta?.sup?.subtitle} links={activeConfig.suministros} onBack={() => go(currentStation.toLowerCase())} onNavigate={go} />;
      case 'operaciones':
        return <OperacionesView isEs={currentStation === 'SSC'} config={activeConfig} title={activeConfig.moduleMeta?.ops?.title || 'PORTAL INSTRUTOR'} subtitle={activeConfig.moduleMeta?.ops?.subtitle} links={activeConfig.operaciones} onBack={() => go(currentStation.toLowerCase())} onNavigate={go} />;
      case 'admin':
        return (
          <AdminCenter
            adminStation={adminStation}
            config={appConfig || appConfigJson}
            setConfig={setAppConfig}
            onBack={() => go('landing')}
            onViewStation={(st: string) => go(st.toLowerCase())}
            onExploracion={(st: string) => { setAdminStation(st); go('admin-exploracion') }}
            onRutaLider={(st: string) => { setAdminStation(st); go('admin-ruta-lider') }}
            onSave={saveConfigToDisk}
            onActivityLog={() => go('activity-log')}
            onInstructorDashboard={() => go('instructor-dashboard')}
            onMissionTracking={(st: string) => { setAdminStation(st); go('admin-activity-tracking') }}
          />
        );
      case 'instructor-dashboard':
        return (
          <InstructorDashboard logs={activityLogs} config={activeConfig} initialUser={selectedInstructorId} onBack={() => go('admin')} />
        );
      case 'admin-activity-tracking':
        return (
          <UnifiedTrackingDashboard
            stationName={adminStation}
            logs={activityLogs}
            config={activeConfig}
            initialInstructorId={selectedInstructorId}
            onBack={() => go('admin')}
          />
        );
      case 'admin-exploracion':
        return (
          <AdminExploracion
            stationName={adminStation}
            currentStationConfig={adminStation === 'BR' ? (appConfig?.br || appConfigJson.br) : (appConfig?.ssc || appConfig?.br || appConfigJson.br)}
            updateStationConfig={(f: string, v: any) => {
              const sk = adminStation.toLowerCase();
              setAppConfig((prev: any) => ({ ...prev, [sk]: { ...(prev[sk] || prev.br || appConfigJson.br), [f]: v } }));
            }}
            onBack={() => go('admin')}
            onSatelites={(pk: string) => { setAdminSatellitePk(pk); go('admin-satelites') }}
            onAdvancedContent={(sec: string, idx: number) => { setAdminSector(sec); setAdminCourseIdx(idx); go('admin-advanced-content') }}
            onSave={saveConfigToDisk}
          />
        );
      case 'admin-ruta-lider':
        return (
          <AdminRutaLider
            rutaData={adminStation === 'BR' ? (appConfig?.br?.rutaLider || appConfigJson.br.rutaLider) : (appConfig?.ssc?.rutaLider || appConfig?.br?.rutaLider || appConfigJson.br.rutaLider)}
            setRutaData={(v: any) => {
              const sk = adminStation.toLowerCase();
              setAppConfig((prev: any) => ({ ...prev, [sk]: { ...(prev[sk] || prev.br || appConfigJson.br), rutaLider: v } }));
            }}
            onBack={() => go('admin')}
            title={`EDITOR RUTA DEL LÍDER - ${adminStation}`}
            onSave={saveConfigToDisk}
          />
        );
      case 'admin-satelites':
        return (
          <AdminSatelites
            stationName={adminStation}
            pk={adminSatellitePk}
            satelites={adminStation === 'BR' ? (appConfig?.br?.satelites || appConfigJson.br.satelites) : (appConfig?.ssc?.satelites || appConfig?.br?.satelites || appConfigJson.br.satelites)}
            setSatelites={(v: any) => {
              const sk = adminStation.toLowerCase();
              setAppConfig((prev: any) => ({ ...prev, [sk]: { ...(prev[sk] || prev.br || appConfigJson.br), satelites: v } }));
            }}
            onBack={() => go('admin-exploracion')}
          />
        );
      case 'admin-advanced-content':
        {
          const sk = adminStation.toLowerCase();
          let contentKey = 'fsc';
          let title = 'EDITOR FSC';

          if (adminSector === 'frontLine') {
            contentKey = 'frontLineContent';
            title = 'EDITOR FRONT LINE';
          } else if (adminSector === 'soporte') {
            contentKey = 'soporteContent';
            title = 'EDITOR SUPORTE';
          } else if (adminSector === 'onboarding') {
            contentKey = 'onboarding';
            title = 'EDITOR DE ONBOARDING (NAVE)';
          }

          const targetConfig = appConfig?.[sk] || appConfig?.br || appConfigJson.br;

          return (
            <AdminPlanetEditor
              stationName={adminStation}
              dataArray={targetConfig[contentKey] || []}
              setDataArray={(v: any) => {
                setAppConfig((prev: any) => ({
                  ...prev,
                  [sk]: {
                    ...(prev[sk] || prev.br || appConfigJson.br),
                    [contentKey]: v
                  }
                }));
              }}
              planets={adminSector === 'onboarding' ? (targetConfig.onboarding || []) : (targetConfig.exploracion?.[adminSector] || [])}
              onBack={() => go('admin-exploracion')}
              initialPlanet={adminCourseIdx}
              title={title}
              isOnboarding={adminSector === 'onboarding'}
              onSave={saveConfigToDisk}
            />
          );
        }
      default: {
        const checkAccess = (station: string, email: string) => {
          if (!email) return false;
          const lowerEmail = email.toLowerCase();
          if (lowerEmail.includes('@latam.com')) return true;
          if (station === 'br') {
            return lowerEmail.includes('@konectabr.com') || lowerEmail.includes('@aec.com');
          }
          if (station === 'ssc') {
            return lowerEmail.includes('@konectaperu.com') || lowerEmail.includes('@almacontact.com');
          }
          return false;
        };
        return <Landing
          canAccessBR={checkAccess('br', activeUser || 'instructor@example.com')}
          canAccessSSC={checkAccess('ssc', activeUser || 'instructor@example.com')}
          onNavigate={(st: string) => {
            if (checkAccess(st, activeUser || 'instructor@example.com')) {
              setCurrentStation(st.toUpperCase());
              localStorage.setItem('yoda_station_name', st.toUpperCase());
              go(st.toLowerCase());
            } else {
              alert(`ACCESO DENEGADO\nTu perfil (${activeUser}) no pertenece a una fábrica con permisos para ingresar a ${st.toUpperCase()} Station.`);
              addLog('ACCESO DENEGADO', `Intento fallido a ${st.toUpperCase()} Station`);
            }
          }}
          onAdmin={() => go('admin')}
          onActivityLog={() => go('activity-log')}
          activeUser={activeUser}
          changeUser={changeUser}
        />;
      }
    }
  };

  return (
    <div style={{ fontFamily: 'Trebuchet MS, Trebuchet, Arial, sans-serif' }}>
      {renderView()}
    </div>
  );
}
