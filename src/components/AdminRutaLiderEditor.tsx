import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    ArrowLeft, Save, CheckCircle2, Plus, Trash2, Database, Layers, Satellite, Globe, Shield, Zap,
    Edit3, Briefcase, Rocket, Target, Anchor, ChevronUp, ChevronDown, Monitor, FileText, Link as LinkIcon, AlertTriangle, Clock, Cpu,
    Maximize2, Minimize2, GripVertical, GraduationCap, Calendar, X
} from 'lucide-react';

const TIPO_INFO: any = {
  mision1: { label: 'MISSÃO', emoji: <Rocket size={20} />, accent: '#00AEEF' },
  landing: { label: 'LANDING', emoji: <Anchor size={20} />, accent: '#FFC800' },
  ojt:     { label: 'DESAFIO OJT', emoji: <Target size={20} />, accent: '#ED1650' },
  imersao: { label: 'IMERSÃO',     emoji: <Cpu size={20} />,    accent: '#D400FF' },
  avaliacao: { label: 'AVALIAÇÃO', emoji: <GraduationCap size={20} />, accent: '#00D6CC' }
};

const timeToSeconds = (timeStr: string) => {
  if (!timeStr) return 0;
  const clean = timeStr.replace(/[hm\s]/g, ':').replace(/:+/g, ':').replace(/:$/, '');
  const parts = clean.split(':').map(Number).filter(n => !isNaN(n));
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  if (parts.length === 1) return parts[0] * 60;
  return 0;
};

const secondsToTime = (secs: number) => {
  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  const s = secs % 60;
  return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
};

const SmartInput = ({ value, onChange, ...props }: any) => {
  const [val, setVal] = useState(value);
  useEffect(() => { setVal(value); }, [value]);
  return <input value={val} onChange={e => { setVal(e.target.value); onChange(e); }} {...props} />;
};

const SmartTextarea = ({ value, onChange, ...props }: any) => {
  const [val, setVal] = useState(value);
  useEffect(() => { setVal(value); }, [value]);
  return <textarea value={val} onChange={e => { setVal(e.target.value); onChange(e); }} {...props} />;
};

export const AdminPlanetEditor = ({ dataArray, setDataArray, planets, onBack, initialPlanet, title = "EDITOR", isOnboarding, onSave }: any) => {
  const stationName = typeof localStorage !== 'undefined' ? (localStorage.getItem('yoda_station') || 'BR') : 'BR';
  const [activePlanet, setActivePlanet] = useState(initialPlanet || 0);
  const [editingSecIdx, setEditingSecIdx] = useState<number | null>(null);
  const [editingExtraIdx, setEditingExtraIdx] = useState<number | null>(null);
  const [saved, setSaved] = useState(false);
  const [collapsedThemes, setCollapsedThemes] = useState<string[]>([]);
  const [collapsedSections, setCollapsedSections] = useState<number[]>([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  
  const toggleTheme = (theme: string) => {
    setCollapsedThemes(prev => prev.includes(theme) ? prev.filter(t => t !== theme) : [...prev, theme]);
  };

  const toggleSection = (idx: number) => {
    setCollapsedSections(prev => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]);
  };

  const data = Array.isArray(dataArray) ? dataArray : [];
  const planetObjRaw = data[activePlanet];
  const planetObj = isOnboarding 
    ? (planetObjRaw?.data || { secciones: [], materiais: [], evalKon: [], evalAec: [], evalMsg: '' }) 
    : (planetObjRaw && !Array.isArray(planetObjRaw) 
        ? planetObjRaw 
        : { secciones: Array.isArray(planetObjRaw) ? planetObjRaw : [], materiais: [], evalKon: [], evalAec: [], evalMsg: '', evalTime: '' });

  const currentSections = planetObj.secciones || [];

  const updatePlanetData = (nextObj: any) => {
    const nextData = [...data];
    while (nextData.length <= activePlanet) nextData.push(isOnboarding ? { label: '', data: {} } : []);
    nextData[activePlanet] = isOnboarding 
      ? { ...nextData[activePlanet], data: nextObj } 
      : nextObj;
    setDataArray(nextData);
  };

  const updateSections = (nextSecs: any[]) => {
    updatePlanetData({ ...planetObj, secciones: nextSecs });
  };

  const addSection = (tipo: string) => {
    const info = TIPO_INFO[tipo];
    // Auto-number MISSÃO sections
    let autoLabel = info.label;
    if (tipo === 'mision1') {
      const misionCount = currentSections.filter((s: any) => s.tipo === 'mision1').length;
      autoLabel = `MISSÃO ${misionCount + 1}:`;
    }
    const newSec = {
      tipo, label: autoLabel, rows: [],
      dbOjtLabel: (tipo === 'ojt' || tipo === 'avaliacao') ? 'Diário de Bordo · Grupo 01' : '',
      dbOjtUrl: '',
      totalCh: (tipo === 'ojt' || tipo === 'avaliacao') ? '5:40:00' : '',
      ajusteRota: (tipo === 'ojt' || tipo === 'avaliacao') ? 'Os alumnos que não atingirem a média final de 80%...' : '',
      ajusteRotaUrlKon: '',
      ajusteRotaUrlAec: '',
      ajusteRotaCh: (tipo === 'ojt' || tipo === 'avaliacao') ? '0:30:00' : ''
    };
    updateSections([...currentSections, newSec]);
  };

  const moveSec = (idx: number, dir: number) => {
    const next = [...currentSections];
    const target = idx + dir;
    if (target < 0 || target >= next.length) return;
    [next[idx], next[target]] = [next[target], next[idx]];
    updateSections(next);
    saveFlash();
  };

  const deleteSec = (idx: number) => { 
    if (window.confirm("¿Seguro que deseas eliminar esta MISIÓN entera?")) {
      updateSections(currentSections.filter((_, i) => i !== idx)); 
    }
  };

  const updateSecField = (idx: number, field: string, val: any) => {
    const next = [...currentSections];
    next[idx] = { ...next[idx], [field]: val };
    updateSections(next);
  };

  const updateGlobalField = (field: string, val: any) => { updatePlanetData({ ...planetObj, [field]: val }); };

  const addGlobalLink = (field: string) => {
    const prev = Array.isArray(planetObj[field]) ? planetObj[field] : [];
    updateGlobalField(field, [...prev, { label: 'NUEVO LINK', url: 'https://' }]);
  };

  const removeGlobalLink = (field: string, idx: number) => {
    if (window.confirm("¿Seguro que deseas eliminar este elemento?")) {
      const prev = Array.isArray(planetObj[field]) ? planetObj[field] : [];
      updateGlobalField(field, prev.filter((_: any, i: number) => i !== idx));
    }
  };

  const updateGlobalLink = (field: string, idx: number, sub: string, val: any) => {
    const next = [...(Array.isArray(planetObj[field]) ? planetObj[field] : [])];
    next[idx] = { ...next[idx], [sub]: val };
    updateGlobalField(field, next);
  };

  const updateRow = (secIdx: number, rowIdx: number, field: string, val: any) => {
    const next = [...currentSections];
    const rows = [...next[secIdx].rows];
    rows[rowIdx] = { ...rows[rowIdx], [field]: val };
    next[secIdx] = { ...next[secIdx], rows };
    updateSections(next);
  };

  const handleColumnPaste = (secIdx: number, startRowIdx: number, field: string, values: string[]) => {
    const next = [...currentSections];
    let rows = [...next[secIdx].rows];
    
    values.forEach((val, i) => {
      const targetIdx = startRowIdx + i;
      if (targetIdx < rows.length) {
         rows[targetIdx] = { ...rows[targetIdx], [field]: val };
      } else {
         const lastMt = rows.length > 0 ? rows[rows.length - 1].macroTema : '';
         const lastDia = rows.length > 0 ? rows[rows.length - 1].dia : '';
         rows.push({ macroTema: lastMt, dia: lastDia, tema: '', detalhe: '', consejo: '', herramientas: [{ tipo: '🖼️ Slide', url: '' }], iaPic: [], tiempo: '', [field]: val });
      }
    });
    
    next[secIdx] = { ...next[secIdx], rows };
    updateSections(next);
  };

  const commonPaste = (e: any, si: number, oi: number, field: string) => {
    const pasteData = e.clipboardData.getData('text');
    if (pasteData.includes('\n')) {
       e.preventDefault();
       const values = pasteData.split('\n').map((v:string) => v.trim()).filter((v:string) => v);
       if (values.length > 1) {
           handleColumnPaste(si, oi, field, values);
       } else {
           updateRow(si, oi, field, pasteData);
       }
    }
  };


  const updateMultipleRows = (secIdx: number, rowIndices: number[], field: string, val: any) => {
    const next = [...currentSections];
    const rows = [...next[secIdx].rows];
    rowIndices.forEach(rowIdx => {
      rows[rowIdx] = { ...rows[rowIdx], [field]: val };
    });
    next[secIdx] = { ...next[secIdx], rows };
    updateSections(next);
  };
  const addRow = (secIdx: number) => {
    const next = [...currentSections];
    const rows = [...next[secIdx].rows, { macroTema: `__TEMP_${Math.random().toString(36).substr(2, 9)}`, dia: '', tema: '', detalhe: '', consejo: '', herramientas: [{ tipo: '🖼️ Slide', url: '' }], iaPic: [], tiempo: '' }];
    next[secIdx] = { ...next[secIdx], rows };
    updateSections(next);
    
    // Auto-expand section so the user can see the new macrotema
    setCollapsedSections(prev => prev.filter(i => i !== secIdx));
  };

  const insertRowAfter = (secIdx: number, rowIdx: number, mt: string, d: string) => {
    const next = [...currentSections];
    const rows = [...next[secIdx].rows];
    rows.splice(rowIdx + 1, 0, { macroTema: mt, dia: d, tema: '', detalhe: '', consejo: '', herramientas: [{ tipo: '🖼️ Slide', url: '' }], iaPic: [], tiempo: '' });
    next[secIdx] = { ...next[secIdx], rows };
    updateSections(next);
  };

  const moveRow = (secIdx: number, rowIdx: number, dir: number) => {
    const next = [...currentSections];
    const rows = [...next[secIdx].rows];
    const target = rowIdx + dir;
    if (target < 0 || target >= rows.length) return;
    [rows[rowIdx], rows[target]] = [rows[target], rows[rowIdx]];
    next[secIdx] = { ...next[secIdx], rows };
    updateSections(next);
  };

  const deleteRow = (secIdx: number, rowIdx: number) => {
    if (window.confirm("¿Seguro que deseas eliminar este NODO?")) {
      const next = [...currentSections];
      next[secIdx] = { ...next[secIdx], rows: next[secIdx].rows.filter((_: any, i: number) => i !== rowIdx) };
      updateSections(next);
    }
  };

  const moveMacroTema = (secIdx: number, blockIdx: number, dir: number) => {
    const next = [...currentSections];
    const rows = [...next[secIdx].rows];
    
    // Group contiguously
    const groups: { macroTema: string; rows: any[] }[] = [];
    rows.forEach((row: any) => {
      const mt = row.macroTema || 'SIN MACROTEMA';
      if (groups.length > 0 && groups[groups.length - 1].macroTema === mt) {
        groups[groups.length - 1].rows.push(row);
      } else {
        groups.push({ macroTema: mt, rows: [row] });
      }
    });

    const targetIdx = blockIdx + dir;
    if (targetIdx < 0 || targetIdx >= groups.length) return;

    // Swap groups
    [groups[blockIdx], groups[targetIdx]] = [groups[targetIdx], groups[blockIdx]];

    // Flatten back to rows
    const newRows: any[] = [];
    groups.forEach(g => {
      newRows.push(...g.rows);
    });

    next[secIdx] = { ...next[secIdx], rows: newRows };
    updateSections(next);
  };

  const moveRowWithinMacroTema = (secIdx: number, rowIdx: number, dir: number) => {
    const next = [...currentSections];
    const rows = [...next[secIdx].rows];
    const currentMt = rows[rowIdx]?.macroTema || 'SIN MACROTEMA';
    const targetIdx = rowIdx + dir;
    if (targetIdx >= 0 && targetIdx < rows.length) {
      const targetMt = rows[targetIdx]?.macroTema || 'SIN MACROTEMA';
      if (targetMt === currentMt) {
        [rows[rowIdx], rows[targetIdx]] = [rows[targetIdx], rows[rowIdx]];
        next[secIdx] = { ...next[secIdx], rows };
        updateSections(next);
      }
    }
  };

  const saveFlash = () => { 
    setSaved(true); 
    setTimeout(() => setSaved(false), 2000); 
    if (onSave) onSave();
  };

  const inp = (extra={}) => ({
    background:'#ffffff', border:'1px solid #E2E8F0', padding:'10px 14px', fontFamily:'inherit', fontSize:13, color:'#0F004F', outline:'none', borderRadius:10, transition: 'all 0.2s ease', ...extra
  });

  return (
    <div style={{ display: 'flex', height: '100vh', background: '#F8F7FF', fontFamily: '"Trebuchet MS", sans-serif' }}>
      <div style={{ width: '280px', background: '#0F004F', borderRight: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', boxShadow: '10px 0 30px rgba(0,0,0,0.05)', zIndex: 50 }}>
        <div style={{ padding: '32px 24px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <button onClick={onBack} style={{ background: 'rgba(255,255,255,0.1)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)', padding: '12px 24px', borderRadius: '10px', cursor: 'pointer', fontSize: '12px', fontWeight: 900, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 10, transition: 'all 0.2s', width: '100%', justifyContent: 'center' }} onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#0F004F' }} onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff' }}><ArrowLeft size={16} /> VOLVER</button>
          <div style={{ marginTop: '32px', fontSize: '10px', fontWeight: 900, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.25em', paddingLeft: 8 }}>EXPEDIÇÃO LUNAR</div>
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px 16px' }}>
          {planets.map((p: any, i: number) => {
            const isAct = activePlanet === i;
            return (
                <motion.div key={i} whileHover={{ x: 6, background: isAct ? '#EAE8F9' : 'rgba(255,255,255,0.05)' }} onClick={() => { setActivePlanet(i); setEditingSecIdx(null); }} style={{ padding: '16px 20px', marginBottom: '8px', borderRadius: '30px', cursor: 'pointer', background: isAct ? '#EAE8F9' : 'transparent', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', color: isAct ? '#0F004F' : 'rgba(255,255,255,0.6)' }}>
                    <div style={{ fontSize: '9px', fontWeight: 900, marginBottom: 4, color: isAct ? '#0F004F' : 'rgba(255,255,255,0.3)' }}>PLANETA {String(i+1).padStart(2,'0')}</div>
                    <div style={{ fontSize: '14px', fontWeight: 800, letterSpacing: '0.02em' }}>{p.label || `Sector ${i + 1}`}</div>
                </motion.div>
            );
          })}
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ padding: '20px 48px', background: '#0F004F', borderBottom: '4px solid #ED1650', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 8px 32px rgba(27,0,136,0.15)', zIndex: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <div style={{ width: 44, height: 44, background: 'rgba(237,22,80,0.2)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ED1650' }}><Satellite size={24} /></div>
            <div>
                <div style={{ fontSize: 10, fontWeight: 900, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 2 }}>{title} <span style={{ color: 'rgba(255,255,255,0.3)', margin: '0 8px' }}>-</span> <span style={{ background: stationName === 'BR' ? '#99CC33' : '#682D88', padding: '2px 6px', borderRadius: 4, color: '#fff' }}>{stationName} STATION</span></div>
                <div style={{ fontSize: 20, fontWeight: 900, color: '#ffffff', letterSpacing: '-0.02em' }}>{planets[activePlanet]?.label}</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            {(isOnboarding ? ['mision1', 'imersao'] : ['mision1', 'landing', 'ojt', 'imersao', 'avaliacao']).map(t => {
                const totalTypeTime = currentSections.filter((s:any) => s.tipo === t).reduce((acc:any, s:any) => acc + (s.rows||[]).reduce((a:any, r:any) => a + timeToSeconds(r.tiempo || r.ch || ''), 0), 0);
                return (
                <button key={t} onClick={() => addSection(t)} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', padding: '10px 20px', borderRadius: '10px', cursor: 'pointer', fontSize: '12px', fontWeight: 900, color: '#ffffff', display: 'flex', alignItems: 'center', gap: 8, transition: 'all 0.2s' }} onMouseEnter={e => e.currentTarget.style.background = TIPO_INFO[t].accent} onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>{TIPO_INFO[t].emoji} {TIPO_INFO[t].label} {totalTypeTime > 0 && <span style={{ background: 'rgba(0,0,0,0.2)', padding: '2px 6px', borderRadius: 6, fontSize: 10 }}>{secondsToTime(totalTypeTime)}</span>}</button>
            )})}
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={saveFlash} style={{ background: saved ? '#00D6CC' : '#ED1650', border: 'none', padding: '10px 28px', borderRadius: '10px', cursor: 'pointer', fontSize: '12px', fontWeight: 900, color: '#ffffff', marginLeft: 16, display: 'flex', alignItems: 'center', gap: 8, boxShadow: `0 8px 20px ${saved ? '#00D6CC' : '#ED1650'}40` }}>{saved ? <CheckCircle2 size={18}/> : <Save size={18}/>} {saved ? 'GUARDADO' : 'GUARDAR'}</motion.button>
          </div>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '48px 64px' }}>
          {!isOnboarding && (
            <div style={{ background: '#ffffff', borderRadius: '24px', padding: '32px', marginBottom: '48px', border: '1px solid rgba(27,0,136,0.1)', boxShadow: '0 10px 40px rgba(0,0,0,0.02)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32, borderBottom: '1px solid #f1f5f9', paddingBottom: 20 }}>
                  <div style={{ background: 'rgba(27,0,136,0.05)', padding: 12, borderRadius: 12 }}><Globe size={24} color="#0F004F" /></div>
                  <div>
                      <div style={{ fontSize: 10, fontWeight: 900, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.15em' }}>CONFIGURACIÓN SECTORIAL</div>
                      <div style={{ fontSize: 18, fontWeight: 900, color: '#0F004F' }}>Recursos Globales del Planeta</div>
                  </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <div style={{ fontSize: 11, fontWeight: 900, color: '#0F004F', display: 'flex', alignItems: 'center', gap: 8 }}><FileText size={16} /> 📚 MATERIAIS</div>
                          <button onClick={() => addGlobalLink('materiais')} style={{ background: '#0F004F', color: '#fff', border: 'none', padding: '6px 14px', borderRadius: 6, fontSize: 10, fontWeight: 800, cursor: 'pointer' }}>+ AÑADIR</button>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                          {(planetObj.materiais || []).map((link: any, i: number) => (
                              <div key={i} style={{ display: 'flex', gap: 10 }}>
                                  <input value={link.label} onChange={e => updateGlobalLink('materiais', i, 'label', e.target.value)} style={{ ...inp({ background: '#F8FAFC', flex: 1, fontSize: 11, fontWeight: 700 }) }} placeholder="Nombre" />
                                  <input value={link.url} onChange={e => updateGlobalLink('materiais', i, 'url', e.target.value)} style={{ ...inp({ background: '#F8FAFC', flex: 2, fontSize: 11, color: '#1a56db' }) }} placeholder="URL" />
                                  <button onClick={() => removeGlobalLink('materiais', i)} style={{ background: '#fee2e2', border: 'none', padding: '0 10px', borderRadius: 8, color: '#ef4444', cursor: 'pointer' }}><Trash2 size={14}/></button>
                              </div>
                          ))}
                      </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                          <div style={{ marginBottom: 12 }}>
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                                  <label style={{ fontSize: '9px', color: '#64748b', fontWeight: 900, textTransform: 'uppercase', display: 'block' }}>Avaliação de Recuperação</label>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                      <label style={{ fontSize: '9px', color: '#64748b', fontWeight: 900, textTransform: 'uppercase' }}>Tiempo:</label>
                                      <input 
                                        value={planetObj.evalTime || ''} 
                                        onChange={e => updateGlobalField('evalTime', e.target.value)} 
                                        placeholder="Ej: 00:30:00"
                                        style={{ ...inp({ width: '80px', fontSize: 10, padding: '4px 8px', textAlign: 'center', background: '#F8FAFC' }) }}
                                      />
                                  </div>
                              </div>
                              <textarea 
                                value={planetObj.evalMsg || ''} 
                                onChange={e => updateGlobalField('evalMsg', e.target.value)} 
                                placeholder="Descreva o protocolo de recuperação..."
                                style={{ ...inp({ minHeight: 80, width: '100%', fontSize: 11, background: '#f8fafc', lineHeight: 1.4, border: '1px solid #e2e8f0' }) }}
                              />
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                              <div style={{ fontSize: 11, fontWeight: 900, color: '#ED1650', display: 'flex', alignItems: 'center', gap: 8 }}><Shield size={16} /> 🛡️ AVALIAÇÕES: KON BR</div>
                              <button onClick={() => addGlobalLink('evalKon')} style={{ background: '#ED1650', color: '#fff', border: 'none', padding: '4px 10px', borderRadius: 6, fontSize: 9, fontWeight: 800, cursor: 'pointer' }}>+ LINK</button>
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                              {(planetObj.evalKon || []).map((link: any, i: number) => (
                                  <div key={i} style={{ display: 'flex', gap: 8 }}>
                                      <input value={link.label} onChange={e => updateGlobalLink('evalKon', i, 'label', e.target.value)} style={{ ...inp({ padding: '6px 10px', fontSize: 11, background: '#f0fdf4' }), flex: 1 }} />
                                      <input value={link.url} onChange={e => updateGlobalLink('evalKon', i, 'url', e.target.value)} style={{ ...inp({ padding: '6px 10px', fontSize: 11, background: '#f0fdf4', color: '#1a56db' }), flex: 2 }} />
                                      <button onClick={() => removeGlobalLink('evalKon', i)} style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer' }}><Trash2 size={14}/></button>
                                  </div>
                              ))}
                          </div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                              <div style={{ fontSize: 11, fontWeight: 900, color: '#00D6CC', display: 'flex', alignItems: 'center', gap: 8 }}><Zap size={16} /> 💎 AVALIAÇÕES: AeC</div>
                              <button onClick={() => addGlobalLink('evalAec')} style={{ background: '#00D6CC', color: '#fff', border: 'none', padding: '4px 10px', borderRadius: 6, fontSize: 9, fontWeight: 800, cursor: 'pointer' }}>+ LINK</button>
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                              {(planetObj.evalAec || []).map((link: any, i: number) => (
                                  <div key={i} style={{ display: 'flex', gap: 8 }}>
                                      <input value={link.label} onChange={e => updateGlobalLink('evalAec', i, 'label', e.target.value)} style={{ ...inp({ padding: '6px 10px', fontSize: 11, background: '#f0f9ff' }), flex: 1 }} />
                                      <input value={link.url} onChange={e => updateGlobalLink('evalAec', i, 'url', e.target.value)} style={{ ...inp({ padding: '6px 10px', fontSize: 11, background: '#f0f9ff', color: '#1a56db' }), flex: 2 }} />
                                      <button onClick={() => removeGlobalLink('evalAec', i)} style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer' }}><Trash2 size={14}/></button>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          )}

          {currentSections.length === 0 ? (
            <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', padding: '80px', color: '#0F004F', background: '#fff', borderRadius: '32px', border: '2px dashed rgba(27,0,136,0.1)', boxShadow: '0 20px 60px rgba(0,0,0,0.03)' }}>
                    <Layers size={64} style={{ opacity: 0.05, marginBottom: 24 }} />
                    <div style={{ fontSize: 18, fontWeight: 900 }}>Sin secciones operativas</div>
                    <div style={{ fontSize: 14, color: '#64748b', marginTop: 8 }}>Inicia la construcción agregando una missão desde el panel superior.</div>
                </div>
            </div>
          ) : currentSections.map((sec: any, si: number) => {
            const secInfo = TIPO_INFO[sec.tipo] || TIPO_INFO['mision1'];
            return (
              <motion.div layout initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: si * 0.1 }} key={si} style={{ background: '#ffffff', borderRadius: '24px', padding: '32px', marginBottom: '32px', boxShadow: '0 10px 40px rgba(0,0,0,0.02)', border: '1px solid rgba(27,0,136,0.1)', position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: secInfo.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 8px 15px rgba(0,0,0,0.1)' }}>{secInfo.emoji}</div>
                  <div>
                    <SmartInput value={sec.label} onChange={(e: any) => updateSecField(si, 'label', e.target.value)} style={{ background: 'transparent', border: 'none', fontSize: '20px', fontWeight: 900, color: '#0F004F', outline: 'none', padding: '4px 8px', letterSpacing: '-0.02em', borderBottom: '2px solid transparent' }} onFocus={(e: any) => e.target.style.borderBottom = `2px solid ${secInfo.accent}`} onBlur={(e: any) => e.target.style.borderBottom = 'none'} />
                    <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', paddingLeft: 8, display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '4px 0' }}>
                        <span>{(sec.rows||[]).length} NODOS CONFIGURADOS</span>
                        <span style={{ margin: '0 8px', color: '#cbd5e1' }}>•</span>
                        <span style={{ background: '#f1f5f9', padding: '2px 8px', borderRadius: 12, color: '#0F004F' }}>⏱ TIEMPO TOTAL: {secondsToTime((sec.rows||[]).reduce((a:any, r:any) => a + timeToSeconds(r.tiempo || r.ch || ''), 0))}</span>
                        {(() => {
                          const allDays = (sec.rows || []).map((r: any) => r.dia).filter(Boolean);
                          const lastDay = allDays.length > 0 ? allDays[allDays.length - 1] : '';
                          return lastDay ? (
                            <>
                              <span style={{ margin: '0 8px', color: '#cbd5e1' }}>•</span>
                              <span style={{ background: '#f1f5f9', padding: '2px 8px', borderRadius: 12, color: '#0F004F', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                                <Calendar size={12} /> ACUMULADO: {lastDay}
                              </span>
                            </>
                          ) : null;
                        })()}
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  {sec.tipo === 'ojt' && (
                    <button onClick={() => setEditingExtraIdx(si)} style={{ background: '#f8fafc', border: '2px solid #E2E8F0', color: '#0F004F', padding: '10px 20px', borderRadius: '12px', cursor: 'pointer', fontSize: '11px', fontWeight: 900, display: 'flex', alignItems: 'center', gap: 8 }}><Layers size={16}/> TARJETA EXTRA</button>
                  )}
                  <button onClick={() => addRow(si)} style={{ background: '#0F004F', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: '12px', cursor: 'pointer', fontSize: '11px', fontWeight: 900, display: 'flex', alignItems: 'center', gap: 8, boxShadow: '0 8px 25px rgba(27,0,136,0.2)' }}><Plus size={16}/> AGREGAR MACROTEMA</button>
                  
                  <button 
                    onClick={() => toggleSection(si)} 
                    title={collapsedSections.includes(si) ? "Expandir Missão" : "Colapsar Missão"}
                    style={{ 
                      width: 44, height: 44, border: '1px solid #E2E8F0', borderRadius: '12px',
                      background: collapsedSections.includes(si) ? secInfo.accent : '#fff', 
                      color: collapsedSections.includes(si) ? '#fff' : secInfo.accent, 
                      cursor: 'pointer',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: '0.2s all ease'
                    }}
                  >
                    {collapsedSections.includes(si) ? <Maximize2 size={18}/> : <Minimize2 size={18}/>}
                  </button>
                  
                  <button onClick={() => deleteSec(si)} style={{ background: '#fee2e2', color: '#ef4444', border: 'none', width: 44, height: 44, borderRadius: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Trash2 size={20}/></button>
                </div>
              </div>

              <AnimatePresence>
                {!collapsedSections.includes(si) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    style={{ overflow: 'hidden' }}
                  >

              <div style={{ padding: '40px' }}>
              {(sec.tipo === 'ojt' || sec.tipo === 'avaliacao') && (
                <div style={{ marginBottom: '32px', padding: '32px', background: '#fff', borderRadius: '24px', border: '1px solid rgba(0,214,204,0.15)', boxShadow: '0 20px 60px rgba(0,0,0,0.05)' }}>
                  <div style={{ fontSize: '14px', fontWeight: 900, marginBottom: '32px', display: 'flex', alignItems: 'center', gap: 12, color: '#00D6CC', letterSpacing: '0.1em' }}><AlertTriangle size={24}/> PARÁMETROS OPERATIVOS OJT <span style={{ fontWeight: 700, fontSize: '11px', color: '#64748b', letterSpacing: 0, textTransform: 'uppercase' }}>· Configuración Avanzada</span></div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '32px', borderBottom: '1px solid #E2E8F0', paddingBottom: '32px' }}>
                    <div style={{ background: '#F8FAFC', padding: 24, borderRadius: 20, border: '1px solid #E2E8F0' }}>
                      <div style={{ fontSize: '11px', fontWeight: 900, marginBottom: 20, color: '#0F004F', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: 8 }}><Monitor size={16}/> DIARIO DE BORDO OJT</div>
                      <div style={{ marginBottom: '20px' }}>
                        <label style={{ fontSize: '10px', color: '#64748b', display: 'block', marginBottom: '8px', fontWeight: 900, textTransform: 'uppercase' }}>Etiqueta del Botón</label>
                        <input value={sec.dbOjtLabel} onChange={e => updateSecField(si, 'dbOjtLabel', e.target.value)} placeholder="ej: Diário de Bordo OJT" style={{ ...inp({ fontWeight: 800 }), width: '100%' }} />
                      </div>
                      <div>
                        <label style={{ fontSize: '10px', color: '#64748b', display: 'block', marginBottom: '8px', fontWeight: 900, textTransform: 'uppercase' }}>Enlace de Destino (URL)</label>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#fff', border: '1px solid #E2E8F0', borderRadius: 10, padding: '0 16px' }}><LinkIcon size={16} color="#0F004F" /><input value={sec.dbOjtUrl} onChange={e => updateSecField(si, 'dbOjtUrl', e.target.value)} placeholder="https://docs.google.com/..." style={{ border: 'none', background: 'transparent', padding: '14px 0', outline: 'none', color: '#1a56db', fontWeight: 700, width: '100%', fontSize: 13 }} /></div>
                      </div>
                    </div>
                    <div style={{ background: '#F8FAFC', padding: 24, borderRadius: 20, border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                      <div style={{ fontSize: '11px', fontWeight: 900, marginBottom: 20, color: '#0F004F', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: 8 }}><Clock size={16}/> CARGA HORARIA TOTAL</div>
                      <input value={sec.totalCh} onChange={e => updateSecField(si, 'totalCh', e.target.value)} placeholder="HH:MM:SS" style={{ ...inp({ fontSize: 28, fontWeight: 900, textAlign: 'center', color: '#0F004F' }), width: '200px' }} />
                      <div style={{ fontSize: 13, color: '#94a3b8', marginTop: 16 }}>Formato: <span style={{ fontWeight: 800 }}>HH:MM:SS</span></div>
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 900, marginBottom: '24px', color: '#00D6CC', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: 10 }}><Briefcase size={18}/> AJUSTE DE RUTA PARA REPROVADOS</div>
                    <div style={{ marginBottom: '24px' }}>
                      <label style={{ fontSize: '10px', color: '#64748b', display: 'block', marginBottom: '8px', fontWeight: 900, textTransform: 'uppercase' }}>Descripción del Protocolo (Muestra en App)</label>
                      <textarea value={sec.ajusteRota} onChange={e => updateSecField(si, 'ajusteRota', e.target.value)} placeholder="Protocolo de refuerzo para estudiantes..." style={{ ...inp({ minHeight: 80, lineHeight: 1.6 }), width: '100%', resize: 'vertical' }} />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>
                      <div><label style={{ fontSize: '10px', color: '#64748b', display: 'block', marginBottom: '8px', fontWeight: 900, textTransform: 'uppercase' }}>Forms KON (URL)</label><input value={sec.ajusteRotaUrlKon} onChange={e => updateSecField(si, 'ajusteRotaUrlKon', e.target.value)} placeholder="https://..." style={{ ...inp({ fontSize: 12, color: '#1a56db' }), width: '100%' }} /></div>
                      <div><label style={{ fontSize: '10px', color: '#64748b', display: 'block', marginBottom: '8px', fontWeight: 900, textTransform: 'uppercase' }}>Forms AeC (URL)</label><input value={sec.ajusteRotaUrlAec} onChange={e => updateSecField(si, 'ajusteRotaUrlAec', e.target.value)} placeholder="https://..." style={{ ...inp({ fontSize: 12, color: '#1a56db' }), width: '100%' }} /></div>
                      <div><label style={{ fontSize: '10px', color: '#64748b', display: 'block', marginBottom: '8px', fontWeight: 900, textTransform: 'uppercase' }}>Carga Horaria de Ajuste</label><input value={sec.ajusteRotaCh} onChange={e => updateSecField(si, 'ajusteRotaCh', e.target.value)} placeholder="0:30:00" style={{ ...inp({ fontWeight: 900, textAlign: 'center' }), width: '100%' }} /></div>
                    </div>
                  </div>
                </div>
              )}
                  <div style={{ background: '#ffffff', borderRadius: '16px', padding: '40px', border: '1px solid #E2E8F0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                        {(() => {
                          const groupedRows: { macroTema: string; rows: any[] }[] = [];
                          sec.rows.forEach((row: any, idx: number) => {
                            const mt = row.macroTema || 'SIN MACROTEMA';
                            if (groupedRows.length > 0 && groupedRows[groupedRows.length - 1].macroTema === mt) {
                              groupedRows[groupedRows.length - 1].rows.push({ ...row, originalIndex: idx });
                            } else {
                              groupedRows.push({ macroTema: mt, rows: [{ ...row, originalIndex: idx }] });
                            }
                          });

                          return groupedRows.map(({ macroTema: mt, rows }, gi) => {
                            const themeKey = `${si}-group-${rows[0]?.originalIndex}`;
                            const isCollapsed = collapsedThemes.includes(themeKey);
                            const totalSecs = rows.reduce((acc, r) => acc + timeToSeconds(r.tiempo || r.ch || ''), 0);
                            const uniqueDays = Array.from(new Set(rows.map((r: any) => r.dia).filter(Boolean)));

                            return (
                              <div key={themeKey} style={{ marginBottom: isCollapsed ? '16px' : '48px' }}>
                                <div 
                                  draggable
                                  onDragStart={e => { e.dataTransfer.setData('text/macro', String(gi)); e.currentTarget.style.opacity = '0.5'; }}
                                  onDragEnd={e => { e.currentTarget.style.opacity = '1'; }}
                                  onDragOver={e => { e.preventDefault(); e.currentTarget.style.border = '2px dashed #ED1650'; }}
                                  onDragLeave={e => { e.currentTarget.style.border = '2px solid #0F004F'; }}
                                  onDrop={e => {
                                    e.preventDefault();
                                    e.currentTarget.style.border = '2px solid #0F004F';
                                    const fromGi = parseInt(e.dataTransfer.getData('text/macro'), 10);
                                    if (!isNaN(fromGi) && fromGi !== gi) {
                                      const dir = gi - fromGi;
                                      moveMacroTema(si, fromGi, dir);
                                    }
                                  }}
                                  onClick={() => toggleTheme(themeKey)}
                                  style={{ 
                                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
                                    background: isCollapsed ? '#f8fafc' : '#ffffff', border: '2px solid #0F004F', 
                                    padding: '12px 24px', borderRadius: '8px', marginBottom: isCollapsed ? 0 : '16px',
                                    cursor: 'pointer', transition: '0.3s'
                                  }}
                                >
                                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                    <div style={{ width: 24, height: 24, borderRadius: 6, background: '#0F004F', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                                        {isCollapsed ? <ChevronDown size={14}/> : <ChevronUp size={14}/>}
                                    </div>
                                    
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }} onClick={e => e.stopPropagation()}>
                                      <button 
                                        disabled={gi === 0}
                                        onClick={() => moveMacroTema(si, gi, -1)}
                                        style={{ 
                                          background: 'transparent', border: 'none', padding: 0, cursor: gi === 0 ? 'default' : 'pointer', 
                                          color: gi === 0 ? '#cbd5e1' : '#0F004F', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                          height: 12
                                        }}
                                        title="Subir Macrotema"
                                      >
                                        <ChevronUp size={14} style={{ strokeWidth: 3 }} />
                                      </button>
                                      <button 
                                        disabled={gi === groupedRows.length - 1}
                                        onClick={() => moveMacroTema(si, gi, 1)}
                                        style={{ 
                                          background: 'transparent', border: 'none', padding: 0, cursor: gi === groupedRows.length - 1 ? 'default' : 'pointer', 
                                          color: gi === groupedRows.length - 1 ? '#cbd5e1' : '#0F004F', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                          height: 12
                                        }}
                                        title="Bajar Macrotema"
                                      >
                                        <ChevronDown size={14} style={{ strokeWidth: 3 }} />
                                      </button>
                                    </div>

                                    <span style={{ fontSize: '11px', fontWeight: 900, color: '#0F004F', textTransform: 'uppercase', letterSpacing: '0.1em' }}>MACROTEMA:</span>
                                    <SmartInput 
                                        value={mt === 'SIN MACROTEMA' || mt.startsWith('__TEMP_') ? '' : mt} 
                                        onClick={(e: any) => e.stopPropagation()}
                                        onChange={(e: any) => { const newVal = e.target.value; updateMultipleRows(si, rows.map(r => r.originalIndex), 'macroTema', newVal); }} 
                                        style={{ background: 'transparent', border: 'none', color: '#0F004F', fontSize: '16px', fontWeight: 900, outline: 'none', width: '400px' }} 
                                        placeholder="DEFINA MACRO TEMA..." 
                                    />
                                  </div>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }} onClick={e => e.stopPropagation()}>
                                      <span style={{ fontSize: '11px', fontWeight: 900, color: '#0F004F', textTransform: 'uppercase', letterSpacing: '0.1em' }}>DÍA:</span>
                                      <SmartInput 
                                        value={rows[0]?.dia || ''} 
                                        onChange={(e: any) => updateMultipleRows(si, rows.map(r => r.originalIndex), 'dia', e.target.value)} 
                                        style={{ background: '#f1f5f9', border: '1px solid #0F004F', borderRadius: '6px', padding: '6px 12px', color: '#0F004F', fontSize: '12px', fontWeight: 900, outline: 'none', width: '90px', textAlign: 'center' }} 
                                        placeholder="Ex: Dia 1" 
                                      />
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                      <div style={{ background: '#0F004F', color: '#fff', padding: '6px 14px', borderRadius: '20px', fontSize: '11px', fontWeight: 900 }}>⏱ TOTAL BLOQUE: {secondsToTime(totalSecs)}</div>
                                      <button 
                                        onClick={(e) => { 
                                            e.stopPropagation(); 
                                            if (confirm('¿Seguro que deseas eliminar este Macrotema COMPLETO y todas sus actividades?')) {
                                                const next = [...currentSections];
                                                const indicesToRemove = rows.map(r => r.originalIndex);
                                                next[si].rows = next[si].rows.filter((_:any, i:number) => !indicesToRemove.includes(i));
                                                updateSections(next);
                                            }
                                        }} 
                                        style={{ background: 'transparent', border: '1px solid #fee2e2', color: '#ef4444', width: 32, height: 32, borderRadius: 16, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
                                        onMouseEnter={e => { e.currentTarget.style.background = '#fef2f2'; e.currentTarget.style.borderColor = '#ef4444'; }}
                                        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = '#fee2e2'; }}
                                        title="Eliminar Macrotema Completo"
                                      >
                                        <Trash2 size={16} />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <AnimatePresence initial={false}>
                                  {!isCollapsed && (
                                  <motion.div 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    style={{ overflow: 'hidden' }}
                                  >
                                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                      <thead>
                                        <tr style={{ background: '#f1f5f9' }}>
                                          <th style={{ padding: '10px', width: '30px', border: '1px solid #e2e8f0' }}></th>
                                          <th style={{ padding: '10px', fontSize: '10px', color: '#64748b', fontWeight: 900, textAlign: 'left', border: '1px solid #e2e8f0', width: '200px' }}>TEMA</th>
                                          <th style={{ padding: '10px', fontSize: '10px', color: '#64748b', fontWeight: 900, textAlign: 'left', border: '1px solid #e2e8f0' }}>DETALLE</th>
                                          <th style={{ padding: '10px', fontSize: '10px', color: '#64748b', fontWeight: 900, textAlign: 'left', border: '1px solid #e2e8f0', width: '200px' }}>RECURSOS (TIPO / URL)</th>
                                          <th style={{ padding: '10px', fontSize: '10px', color: '#64748b', fontWeight: 900, textAlign: 'left', border: '1px solid #e2e8f0', width: '200px' }}>CONSEJO TÁCTICO</th>
                                          <th style={{ padding: '10px', fontSize: '10px', color: '#64748b', fontWeight: 900, textAlign: 'center', border: '1px solid #e2e8f0', width: '150px' }}>LINK PIC</th>
                                          <th style={{ padding: '10px', fontSize: '10px', color: '#64748b', fontWeight: 900, textAlign: 'center', border: '1px solid #e2e8f0', width: '80px' }}>DURACIÓN</th>
                                          <th style={{ padding: '10px', border: '1px solid #e2e8f0', width: '45px' }}></th>
                                        </tr>
                                      </thead>
                                  <tbody>
                                    {rows.map((row: any, ri: number) => {
                                      const oi = row.originalIndex;
                                      return (
                                        <tr 
                                          key={oi} 
                                          style={{ background: ri % 2 === 0 ? '#ffffff' : '#f8fafc', borderBottom: '1px solid #e2e8f0', transition: 'all 0.2s ease' }}
                                          onDragStart={e => { e.dataTransfer.setData('text/row', String(oi)); e.currentTarget.style.opacity = '0.5'; }}
                                          onDragEnd={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.borderTop = 'none'; e.currentTarget.style.borderBottom = '1px solid #e2e8f0'; }}
                                          onDragOver={e => { e.preventDefault(); e.currentTarget.style.borderTop = '3px solid #0F004F'; }}
                                          onDragLeave={e => { e.currentTarget.style.borderTop = 'none'; e.currentTarget.style.borderBottom = '1px solid #e2e8f0'; }}
                                          onDrop={e => {
                                            e.preventDefault();
                                            e.currentTarget.style.borderTop = 'none';
                                            const fromIdx = parseInt(e.dataTransfer.getData('text/row'), 10);
                                            const toIdx = oi;
                                            if (fromIdx === toIdx || isNaN(fromIdx)) return;
                                            const next = [...currentSections];
                                            const nextRows = [...next[si].rows];
                                            const [item] = nextRows.splice(fromIdx, 1);
                                            const adjustedToIdx = fromIdx < toIdx ? toIdx - 1 : toIdx;
                                            nextRows.splice(adjustedToIdx, 0, item);
                                            next[si] = { ...next[si], rows: nextRows };
                                            updateSections(next);
                                          }}
                                        >
                                          <td style={{ border: '1px solid #e2e8f0', padding: '8px', textAlign: 'center', cursor: 'grab', color: '#cbd5e1' }} onMouseEnter={e => e.currentTarget.parentElement?.setAttribute('draggable', 'true')} onMouseLeave={e => e.currentTarget.parentElement?.removeAttribute('draggable')}>
                                            <GripVertical size={16} />
                                          </td>
                                          <td style={{ border: '1px solid #e2e8f0', padding: '12px' }}><SmartTextarea value={row.tema} onChange={(e: any) => updateRow(si, oi, 'tema', e.target.value)} onPaste={(e: any) => commonPaste(e, si, oi, 'tema')} onInput={(e: any) => { e.currentTarget.style.height = 'auto'; e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`; }} onFocus={(e: any) => { e.currentTarget.style.boxShadow = '0 0 0 2px rgba(27,0,136,0.2)'; e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#0F004F'; }} onBlur={(e: any) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.background = '#F8FAFC'; e.currentTarget.style.borderColor = '#E2E8F0'; }} placeholder="Título..." style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '12px', color: '#0F004F', fontSize: '13px', fontWeight: 700, width: '100%', outline: 'none', resize: 'none', minHeight: '80px', overflow: 'hidden', transition: 'all 0.2s ease', boxSizing: 'border-box' }} /></td>
                                          <td style={{ border: '1px solid #e2e8f0', padding: '12px' }}><SmartTextarea value={row.detalhe} onChange={(e: any) => updateRow(si, oi, 'detalhe', e.target.value)} onPaste={(e: any) => commonPaste(e, si, oi, 'detalhe')} onInput={(e: any) => { e.currentTarget.style.height = 'auto'; e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`; }} onFocus={(e: any) => { e.currentTarget.style.boxShadow = '0 0 0 2px rgba(27,0,136,0.2)'; e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#0F004F'; }} onBlur={(e: any) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.background = '#F8FAFC'; e.currentTarget.style.borderColor = '#E2E8F0'; }} placeholder="Detalle..." style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '12px', color: '#475569', fontSize: '12px', width: '100%', outline: 'none', resize: 'none', minHeight: '80px', overflow: 'hidden', transition: 'all 0.2s ease', boxSizing: 'border-box', lineHeight: '1.5' }} /></td>
                                          <td style={{ border: '1px solid #e2e8f0', padding: '8px' }}>
                                            {(Array.isArray(row.herramientas) ? row.herramientas : row.herramientas ? [row.herramientas] : []).map((h: any, hi: number) => (
                                              <div key={hi} style={{ marginBottom: 8, paddingBottom: 8, borderBottom: '1px dashed #e2e8f0', position: 'relative' }}>
                                                <select value={h.tipo || 'PPT'} onChange={e => { const newH = Array.isArray(row.herramientas) ? [...row.herramientas] : [row.herramientas || {}]; newH[hi] = { ...newH[hi], tipo: e.target.value }; updateRow(si, oi, 'herramientas', newH); }} style={{ background: '#fff', border: '1px solid #ccc', fontSize: '10px', padding: '2px', width: '100%', marginBottom: 4 }}>{['🖼️ Slide','📄 Docs','📊 Sheets','📕 PDF','🎬 Video','📝 Form','📋 Form AeC','📋 Form Kon BR','➖ NA','🌟 Genially','Notebook LM','🎮 Educaplay','✈️ Latam.com','▶️ Youtube','🔗 Link','🎯 Actividad','🖥️ Painel','🔄 Fluxo','🌐 Plataforma','🗂️ PIC','📂 CDA','⏱️ WTD'].map(t => <option key={t} value={t}>{t}</option>)}</select>
                                                <SmartInput value={h.url || ''} onChange={(e: any) => { const newH = Array.isArray(row.herramientas) ? [...row.herramientas] : [row.herramientas || {}]; newH[hi] = { ...newH[hi], url: e.target.value }; updateRow(si, oi, 'herramientas', newH); }} placeholder="URL" style={{ background: 'transparent', border: 'none', borderBottom: '1px solid #eee', color: '#1a56db', fontSize: '9px', width: '100%' }} />
                                                <button onClick={() => { const newH = Array.isArray(row.herramientas) ? [...row.herramientas] : [row.herramientas || {}]; newH.splice(hi, 1); updateRow(si, oi, 'herramientas', newH); }} style={{ position: 'absolute', top: 2, right: -4, background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: '10px' }}>x</button>
                                              </div>
                                            ))}
                                            <button onClick={() => { const newH = Array.isArray(row.herramientas) ? [...row.herramientas] : (row.herramientas ? [row.herramientas] : []); newH.push({ tipo: 'PPT', url: '' }); updateRow(si, oi, 'herramientas', newH); }} style={{ background: '#f1f5f9', border: '1px dashed #cbd5e1', width: '100%', padding: '4px', fontSize: '9px', cursor: 'pointer', borderRadius: 4, color: '#64748b' }}>+ AÑADIR RECURSO</button>
                                          </td>
                                          <td style={{ border: '1px solid #e2e8f0', padding: '8px' }}><SmartTextarea value={row.consejo} onChange={(e: any) => updateRow(si, oi, 'consejo', e.target.value)} onPaste={(e: any) => commonPaste(e, si, oi, 'consejo')} onInput={(e: any) => { e.currentTarget.style.height = 'auto'; e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`; }} onFocus={(e: any) => { e.currentTarget.style.boxShadow = '0 0 0 2px rgba(237,22,80,0.4)'; e.currentTarget.style.background = '#fff'; }} onBlur={(e: any) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.background = 'transparent'; }} placeholder="Consejo..." style={{ background: 'transparent', border: '1px solid transparent', borderRadius: '8px', padding: '12px', fontSize: '11px', color: '#333', width: '100%', resize: 'none', minHeight: '80px', overflow: 'hidden', transition: 'all 0.2s ease', boxSizing: 'border-box', lineHeight: '1.5' }} /></td>
                                          <td style={{ border: '1px solid #e2e8f0', padding: '8px' }}>
                                            {(Array.isArray(row.iaPic) ? row.iaPic : row.iaPic ? [{ label: 'PIC LINK', url: row.iaPic }] : []).map((link: any, li: number) => (
                                              <div key={li} style={{ marginBottom: 6, paddingBottom: 6, borderBottom: '1px dashed #e2e8f0', position: 'relative' }}>
                                                <SmartInput value={link.url || ''} onChange={(e: any) => { const nextIA = [...(Array.isArray(row.iaPic) ? row.iaPic : [{ label: 'PIC', url: row.iaPic }])]; nextIA[li] = { ...nextIA[li], url: e.target.value }; updateRow(si, oi, 'iaPic', nextIA); }} placeholder="https://pic-latam..." style={{ background: '#f8fafc', border: '1px solid #e2e8f0', fontSize: '9px', padding: '4px', width: '100%', marginBottom: 4, fontWeight: 500 }} />
                                                <SmartInput value={link.label || ''} onChange={(e: any) => { const nextIA = [...(Array.isArray(row.iaPic) ? row.iaPic : [{ label: 'PIC', url: row.iaPic }])]; nextIA[li] = { ...nextIA[li], label: e.target.value }; updateRow(si, oi, 'iaPic', nextIA); }} placeholder="Nombre (ej. PIC)" style={{ background: 'transparent', border: 'none', borderBottom: '1px solid #eee', color: '#1a56db', fontSize: '9px', width: '100%' }} />
                                                <button onClick={() => { const nextIA = [...(Array.isArray(row.iaPic) ? row.iaPic : [])]; nextIA.splice(li, 1); updateRow(si, oi, 'iaPic', nextIA); }} style={{ position: 'absolute', top: 2, right: -4, background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: '10px' }}>x</button>
                                              </div>
                                            ))}
                                            <button onClick={() => { const nextIA = Array.isArray(row.iaPic) ? [...row.iaPic] : (row.iaPic ? [{ label: 'PIC LINK', url: row.iaPic }] : []); nextIA.push({ label: 'PIC LINK', url: '' }); updateRow(si, oi, 'iaPic', nextIA); }} style={{ background: '#f0f9ff', border: '1px dashed #bae6fd', width: '100%', padding: '4px', fontSize: '9px', cursor: 'pointer', borderRadius: 4, color: '#0369a1', fontWeight: 700 }}>+ ADD PIC</button>
                                          </td>
                                          <td style={{ border: '1px solid #e2e8f0', padding: '8px', textAlign: 'center', verticalAlign: 'middle' }}>
                                            <input value={row.tiempo || row.ch || ''} onChange={e => updateRow(si, oi, 'tiempo', e.target.value)} onPaste={(e: any) => commonPaste(e, si, oi, 'tiempo')} style={{ background: 'transparent', border: 'none', fontSize: 11, fontWeight: 900, textAlign: 'center', width: '60px', color: '#0F004F', outline: 'none' }} placeholder="0:00:00" />
                                          </td>
                                          <td style={{ border: '1px solid #e2e8f0', padding: '8px', textAlign: 'center' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, flexWrap: 'wrap', width: 40 }}>
                                              <div style={{ display: 'flex', gap: 4 }}>
                                                <button 
                                                  disabled={ri === 0}
                                                  onClick={() => moveRowWithinMacroTema(si, oi, -1)}
                                                  style={{ 
                                                    background: 'transparent', border: 'none', color: ri === 0 ? '#cbd5e1' : '#0F004F', 
                                                    cursor: ri === 0 ? 'default' : 'pointer', opacity: ri === 0 ? 0.4 : 0.7, padding: 0,
                                                    display: 'flex', alignItems: 'center'
                                                  }}
                                                  onMouseEnter={e => { if (ri !== 0) e.currentTarget.style.opacity = '1'; }}
                                                  onMouseLeave={e => { if (ri !== 0) e.currentTarget.style.opacity = '0.7'; }}
                                                  title="Subir Actividad"
                                                >
                                                  <ChevronUp size={14} />
                                                </button>
                                                <button 
                                                  disabled={ri === rows.length - 1}
                                                  onClick={() => moveRowWithinMacroTema(si, oi, 1)}
                                                  style={{ 
                                                    background: 'transparent', border: 'none', color: ri === rows.length - 1 ? '#cbd5e1' : '#0F004F', 
                                                    cursor: ri === rows.length - 1 ? 'default' : 'pointer', opacity: ri === rows.length - 1 ? 0.4 : 0.7, padding: 0,
                                                    display: 'flex', alignItems: 'center'
                                                  }}
                                                  onMouseEnter={e => { if (ri !== rows.length - 1) e.currentTarget.style.opacity = '1'; }}
                                                  onMouseLeave={e => { if (ri !== rows.length - 1) e.currentTarget.style.opacity = '0.7'; }}
                                                  title="Bajar Actividad"
                                                >
                                                  <ChevronDown size={14} />
                                                </button>
                                              </div>
                                              <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
                                                <button 
                                                  onClick={() => insertRowAfter(si, oi, row.macroTema, row.dia)} 
                                                  style={{ background: 'transparent', border: 'none', color: '#10b981', cursor: 'pointer', opacity: 0.7, padding: 0, display: 'flex', alignItems: 'center' }} 
                                                  onMouseEnter={e=>e.currentTarget.style.opacity='1'} 
                                                  onMouseLeave={e=>e.currentTarget.style.opacity='0.7'}
                                                  title="Añadir Actividad Aquí"
                                                >
                                                  <Plus size={15}/>
                                                </button>
                                                <button 
                                                  onClick={() => deleteRow(si, oi)} 
                                                  style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', opacity: 0.5, padding: 0, display: 'flex', alignItems: 'center' }} 
                                                  onMouseEnter={e=>e.currentTarget.style.opacity='1'} 
                                                  onMouseLeave={e=>e.currentTarget.style.opacity='0.5'}
                                                  title="Eliminar Actividad"
                                                >
                                                  <Trash2 size={14}/>
                                                </button>
                                              </div>
                                            </div>
                                          </td>
                                        </tr>
                                      );
                                    })}
                                  </tbody>
                                </table>
                                <div style={{ padding: '8px', background: '#ffffff', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px', border: '1px solid #e2e8f0', borderTop: 'none' }}>
                                      <button 
                                        onClick={() => {
                                          const lastRowIdx = rows.length > 0 ? rows[rows.length - 1].originalIndex : sec.rows.length - 1;
                                          const dia = rows.length > 0 ? rows[rows.length - 1].dia : '';
                                          insertRowAfter(si, lastRowIdx, mt === 'SIN MACROTEMA' ? '' : mt, dia);
                                        }}
                                        style={{ width: '100%', padding: '14px', background: '#F0F9FF', border: '2px dashed #0EA5E9', borderRadius: '12px', color: '#0EA5E9', fontWeight: 900, fontSize: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, transition: 'all 0.2s ease' }}
                                        onMouseEnter={e => { e.currentTarget.style.background = '#0EA5E9'; e.currentTarget.style.color = '#FFF'; e.currentTarget.style.borderStyle = 'solid'; e.currentTarget.style.transform = 'scale(1.01)'; }}
                                        onMouseLeave={e => { e.currentTarget.style.background = '#F0F9FF'; e.currentTarget.style.color = '#0EA5E9'; e.currentTarget.style.borderStyle = 'dashed'; e.currentTarget.style.transform = 'scale(1)'; }}
                                      >
                                        <Plus size={18} strokeWidth={3} /> AGREGAR UN TEMA
                                      </button>
                                </div>
                                  </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          });
                        })()}
                  </div>
              </div>


              </motion.div>
            )}
            </AnimatePresence>
          </motion.div>
            );
          })}

        {/* Modal para Tarjeta Extra OJT */}
        <AnimatePresence>
          {editingExtraIdx !== null && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
                style={{ background: '#fff', borderRadius: '24px', padding: '40px', width: '100%', maxWidth: '600px', boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                  <div style={{ fontSize: '18px', fontWeight: 900, color: '#0F004F', display: 'flex', alignItems: 'center', gap: 12 }}><Layers size={24}/> TARJETA EXTRA OJT</div>
                  <button onClick={() => setEditingExtraIdx(null)} style={{ background: '#f1f5f9', border: 'none', width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#64748b' }}><X size={18}/></button>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <label style={{ fontSize: '10px', color: '#64748b', display: 'block', marginBottom: '8px', fontWeight: 900, textTransform: 'uppercase' }}>Título (Tarjeta Extra)</label>
                    <input value={currentSections[editingExtraIdx]?.ojtExtraTitle || ''} onChange={e => updateSecField(editingExtraIdx, 'ojtExtraTitle', e.target.value)} placeholder="Ej: Material de Apoyo..." style={{ ...inp({ fontSize: 13 }), width: '100%' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: '10px', color: '#64748b', display: 'block', marginBottom: '8px', fontWeight: 900, textTransform: 'uppercase' }}>Link / URL</label>
                    <input value={currentSections[editingExtraIdx]?.ojtExtraLink || ''} onChange={e => updateSecField(editingExtraIdx, 'ojtExtraLink', e.target.value)} placeholder="https://..." style={{ ...inp({ fontSize: 13, color: '#1a56db' }), width: '100%' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: '10px', color: '#64748b', display: 'block', marginBottom: '8px', fontWeight: 900, textTransform: 'uppercase' }}>Descripción</label>
                    <textarea value={currentSections[editingExtraIdx]?.ojtExtraDesc || ''} onChange={e => updateSecField(editingExtraIdx, 'ojtExtraDesc', e.target.value)} placeholder="Breve descripción..." style={{ ...inp({ minHeight: 100, lineHeight: 1.6, fontSize: 13 }), width: '100%', resize: 'vertical' }} />
                  </div>
                </div>

                <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'flex-end' }}>
                  <button onClick={() => setEditingExtraIdx(null)} style={{ background: '#0F004F', color: '#fff', border: 'none', padding: '14px 32px', borderRadius: '12px', fontSize: '12px', fontWeight: 900, cursor: 'pointer' }}>LISTO</button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

          <div style={{ height: 100 }} />
        </div>
      </div>
    </div>
  );
};
