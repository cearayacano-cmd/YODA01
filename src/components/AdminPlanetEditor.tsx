import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    ArrowLeft, Save, CheckCircle2, Plus, Trash2, Database, Layers, Satellite, Globe, Shield, Zap,
    Edit3, Briefcase, Rocket, Target, Anchor, ChevronUp, ChevronDown, Monitor, FileText, Link as LinkIcon, AlertTriangle, Clock, Cpu
} from 'lucide-react';

const TIPO_INFO: any = {
  mision1: { label: 'MISSÃO 1', emoji: <Rocket size={20} />, accent: '#1B0088' },
  landing: { label: 'LANDING', emoji: <Anchor size={20} />, accent: '#99CC33' },
  ojt:     { label: 'DESAFIO OJT', emoji: <Target size={20} />, accent: '#00D6CC' },
  imersao: { label: 'IMERSÃO',     emoji: <Cpu size={20} />,    accent: '#D400FF' }
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

export const AdminPlanetEditor = ({ dataArray, setDataArray, planets, onBack, initialPlanet, title = "EDITOR", isOnboarding }: any) => {
  const [activePlanet, setActivePlanet] = useState(initialPlanet || 0);
  const [editingSecIdx, setEditingSecIdx] = useState<number | null>(null);
  const [saved, setSaved] = useState(false);

  const data = Array.isArray(dataArray) ? dataArray : [];
  const rawPlanetData = data[activePlanet];
  const planetObj = (rawPlanetData && !Array.isArray(rawPlanetData)) 
    ? rawPlanetData 
    : { secciones: Array.isArray(rawPlanetData) ? rawPlanetData : [], materiais: [], evalKon: [], evalAec: [] };

  const currentSections = planetObj.secciones || [];

  const updatePlanetData = (nextObj: any) => {
    const nextData = [...data];
    while (nextData.length <= activePlanet) nextData.push([]);
    nextData[activePlanet] = nextObj;
    setDataArray(nextData);
  };

  const updateSections = (nextSecs: any[]) => {
    updatePlanetData({ ...planetObj, secciones: nextSecs });
  };

  const addSection = (tipo: string) => {
    const info = TIPO_INFO[tipo];
    const newSec = {
      tipo, label: info.label, rows: [],
      dbOjtLabel: tipo === 'ojt' ? 'Diário de Bordo OJT · Grupo 01' : '',
      dbOjtUrl: tipo === 'ojt' ? '' : '',
      totalCh: tipo === 'ojt' ? '5:40:00' : '',
      ajusteRota: tipo === 'ojt' ? 'Os alumnos que não atingirem a média final de 80%...' : '',
      ajusteRotaUrlKon: tipo === 'ojt' ? '' : '',
      ajusteRotaUrlAec: tipo === 'ojt' ? '' : '',
      ajusteRotaCh: tipo === 'ojt' ? '0:30:00' : ''
    };
    updateSections([...currentSections, newSec]);
  };

  const moveSec = (idx: number, dir: number) => {
    const next = [...currentSections];
    const target = idx + dir;
    if (target < 0 || target >= next.length) return;
    [next[idx], next[target]] = [next[target], next[idx]];
    updateSections(next);
  };

  const deleteSec = (idx: number) => { updateSections(currentSections.filter((_, i) => i !== idx)); };

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
    const prev = Array.isArray(planetObj[field]) ? planetObj[field] : [];
    updateGlobalField(field, prev.filter((_: any, i: number) => i !== idx));
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

  const addRow = (secIdx: number) => {
    const next = [...currentSections];
    const rows = [...next[secIdx].rows, { macroTema: '', tema: '', detalhe: '', consejo: '', herramientas: [{ tipo: '🖼️ Slide', url: '' }], iaPic: '', tiempo: '' }];
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
    const next = [...currentSections];
    next[secIdx] = { ...next[secIdx], rows: next[secIdx].rows.filter((_: any, i: number) => i !== rowIdx) };
    updateSections(next);
  };

  const saveFlash = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };

  const inp = (extra={}) => ({
    background:'#ffffff', border:'1px solid #E2E8F0', padding:'10px 14px', fontFamily:'inherit', fontSize:13, color:'#1B0088', outline:'none', borderRadius:10, transition: 'all 0.2s ease', ...extra
  });

  return (
    <div style={{ display: 'flex', height: '100vh', background: '#F8F7FF', fontFamily: '"Inter", sans-serif' }}>
      <div style={{ width: '280px', background: '#1B0088', borderRight: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', boxShadow: '10px 0 30px rgba(0,0,0,0.05)', zIndex: 50 }}>
        <div style={{ padding: '32px 24px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <button onClick={onBack} style={{ background: 'rgba(255,255,255,0.1)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)', padding: '12px 24px', borderRadius: '10px', cursor: 'pointer', fontSize: '12px', fontWeight: 900, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 10, transition: 'all 0.2s', width: '100%', justifyContent: 'center' }} onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#1B0088' }} onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff' }}><ArrowLeft size={16} /> VOLVER</button>
          <div style={{ marginTop: '32px', fontSize: '10px', fontWeight: 900, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.25em', paddingLeft: 8 }}>EXPEDICIÓN LUNAR</div>
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px 16px' }}>
          {planets.map((p: any, i: number) => {
            const isAct = activePlanet === i;
            return (
                <motion.div key={i} whileHover={{ x: 6, background: 'rgba(255,255,255,0.05)' }} onClick={() => { setActivePlanet(i); setEditingSecIdx(null); }} style={{ padding: '16px 20px', marginBottom: '8px', borderRadius: '12px', cursor: 'pointer', background: isAct ? 'rgba(153,204,51,0.15)' : 'transparent', borderLeft: `4px solid ${isAct ? '#99CC33' : 'transparent'}`, transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', color: isAct ? '#99CC33' : 'rgba(255,255,255,0.6)' }}>
                    <div style={{ fontSize: '9px', fontWeight: 900, marginBottom: 4, color: isAct ? '#99CC33' : 'rgba(255,255,255,0.3)' }}>PLANETA {String(i+1).padStart(2,'0')}</div>
                    <div style={{ fontSize: '14px', fontWeight: 800, letterSpacing: '0.02em' }}>{p.label || `Sector ${i + 1}`}</div>
                </motion.div>
            );
          })}
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ padding: '20px 48px', background: '#1B0088', borderBottom: '4px solid #99CC33', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 8px 32px rgba(27,0,136,0.15)', zIndex: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <div style={{ width: 44, height: 44, background: 'rgba(153,204,51,0.2)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#99CC33' }}><Satellite size={24} /></div>
            <div>
                <div style={{ fontSize: 10, fontWeight: 900, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 2 }}>{title}</div>
                <div style={{ fontSize: 20, fontWeight: 900, color: '#ffffff', letterSpacing: '-0.02em' }}>{planets[activePlanet]?.label}</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            {(isOnboarding ? ['mision1', 'imersao'] : ['mision1', 'landing', 'ojt', 'imersao']).map(t => {
                const totalTypeTime = currentSections.filter((s:any) => s.tipo === t).reduce((acc:any, s:any) => acc + (s.rows||[]).reduce((a:any, r:any) => a + timeToSeconds(r.tiempo || r.ch || ''), 0), 0);
                return (
                <button key={t} onClick={() => addSection(t)} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', padding: '10px 20px', borderRadius: '10px', cursor: 'pointer', fontSize: '12px', fontWeight: 900, color: '#ffffff', display: 'flex', alignItems: 'center', gap: 8, transition: 'all 0.2s' }} onMouseEnter={e => e.currentTarget.style.background = TIPO_INFO[t].accent} onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>{TIPO_INFO[t].emoji} {TIPO_INFO[t].label} {totalTypeTime > 0 && <span style={{ background: 'rgba(0,0,0,0.2)', padding: '2px 6px', borderRadius: 6, fontSize: 10 }}>{secondsToTime(totalTypeTime)}</span>}</button>
            )})}
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={saveFlash} style={{ background: saved ? '#00D6CC' : '#99CC33', border: 'none', padding: '10px 28px', borderRadius: '10px', cursor: 'pointer', fontSize: '12px', fontWeight: 900, color: '#ffffff', marginLeft: 16, display: 'flex', alignItems: 'center', gap: 8, boxShadow: `0 8px 20px ${saved ? '#00D6CC' : '#99CC33'}40` }}>{saved ? <CheckCircle2 size={18}/> : <Save size={18}/>} {saved ? 'GUARDADO' : 'GUARDAR'}</motion.button>
          </div>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '48px 64px' }}>
          {!isOnboarding && (
            <div style={{ background: '#ffffff', borderRadius: '24px', padding: '32px', marginBottom: '48px', border: '1px solid rgba(27,0,136,0.1)', boxShadow: '0 10px 40px rgba(0,0,0,0.02)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32, borderBottom: '1px solid #f1f5f9', paddingBottom: 20 }}>
                  <div style={{ background: 'rgba(27,0,136,0.05)', padding: 12, borderRadius: 12 }}><Globe size={24} color="#1B0088" /></div>
                  <div>
                      <div style={{ fontSize: 10, fontWeight: 900, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.15em' }}>CONFIGURACIÓN SECTORIAL</div>
                      <div style={{ fontSize: 18, fontWeight: 900, color: '#1B0088' }}>Recursos Globales del Planeta</div>
                  </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <div style={{ fontSize: 11, fontWeight: 900, color: '#1B0088', display: 'flex', alignItems: 'center', gap: 8 }}><FileText size={16} /> 📚 MATERIAIS</div>
                          <button onClick={() => addGlobalLink('materiais')} style={{ background: '#1B0088', color: '#fff', border: 'none', padding: '6px 14px', borderRadius: 6, fontSize: 10, fontWeight: 800, cursor: 'pointer' }}>+ AÑADIR</button>
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
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                              <div style={{ fontSize: 11, fontWeight: 900, color: '#99CC33', display: 'flex', alignItems: 'center', gap: 8 }}><Shield size={16} /> 🛡️ AVALIAÇÕES: KON BR</div>
                              <button onClick={() => addGlobalLink('evalKon')} style={{ background: '#99CC33', color: '#fff', border: 'none', padding: '4px 10px', borderRadius: 6, fontSize: 9, fontWeight: 800, cursor: 'pointer' }}>+ LINK</button>
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
                <div style={{ textAlign: 'center', padding: '80px', color: '#1B0088', background: '#fff', borderRadius: '32px', border: '2px dashed rgba(27,0,136,0.1)', boxShadow: '0 20px 60px rgba(0,0,0,0.03)' }}>
                    <Layers size={64} style={{ opacity: 0.05, marginBottom: 24 }} />
                    <div style={{ fontSize: 18, fontWeight: 900 }}>Sin secciones operativas</div>
                    <div style={{ fontSize: 14, color: '#64748b', marginTop: 8 }}>Inicia la construcción agregando una misión desde el panel superior.</div>
                </div>
            </div>
          ) : currentSections.map((sec: any, si: number) => {
            const secInfo = TIPO_INFO[sec.tipo] || TIPO_INFO['mision1'];
            return (
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: si * 0.1 }} key={si} style={{ background: '#ffffff', borderRadius: '24px', padding: '32px', marginBottom: '32px', boxShadow: '0 10px 40px rgba(0,0,0,0.02)', border: '1px solid rgba(27,0,136,0.1)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: secInfo.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 8px 15px rgba(0,0,0,0.1)' }}>{secInfo.emoji}</div>
                  <div>
                    <input value={sec.label} onChange={e => updateSecField(si, 'label', e.target.value)} style={{ background: 'transparent', border: 'none', fontSize: '20px', fontWeight: 900, color: '#1B0088', outline: 'none', padding: '4px 8px', letterSpacing: '-0.02em', borderBottom: '2px solid transparent' }} onFocus={e => e.target.style.borderBottom = `2px solid ${secInfo.accent}`} onBlur={e => e.target.style.borderBottom = 'none'} />
                    <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', paddingLeft: 8, display: 'flex', alignItems: 'center' }}>
                        <span>{(sec.rows||[]).length} NODOS CONFIGURADOS</span>
                        <span style={{ margin: '0 8px', color: '#cbd5e1' }}>•</span>
                        <span style={{ background: '#f1f5f9', padding: '2px 8px', borderRadius: 12, color: '#1B0088' }}>⏱ TIEMPO TOTAL: {secondsToTime((sec.rows||[]).reduce((a:any, r:any) => a + timeToSeconds(r.tiempo || r.ch || ''), 0))}</span>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button onClick={() => addRow(si)} style={{ background: '#1B0088', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: '12px', cursor: 'pointer', fontSize: '11px', fontWeight: 900, display: 'flex', alignItems: 'center', gap: 8, boxShadow: '0 8px 25px rgba(27,0,136,0.2)' }}><Plus size={16}/> AGREGAR NODO</button>
                  <button onClick={() => setEditingSecIdx(editingSecIdx === si ? null : si)} style={{ background: '#ffffff', border: '1px solid #E2E8F0', padding: '12px 20px', borderRadius: '12px', cursor: 'pointer', fontSize: '11px', fontWeight: 900, color: '#1B0088', display: 'flex', alignItems: 'center', gap: 8 }}>{editingSecIdx === si ? <CheckCircle2 size={16}/> : <Edit3 size={16}/>} {editingSecIdx === si ? 'FINALIZAR' : 'RECONFIGURAR'}</button>
                  <div style={{ display: 'flex', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 12, overflow: 'hidden' }}>
                    <button onClick={() => moveSec(si, -1)} style={{ padding: '12px', border: 'none', background: 'transparent', borderRight: '1px solid #E2E8F0', color: '#64748b', cursor: 'pointer' }}><ChevronUp size={18}/></button>
                    <button onClick={() => moveSec(si, 1)} style={{ padding: '12px', border: 'none', background: 'transparent', color: '#64748b', cursor: 'pointer' }}><ChevronDown size={18}/></button>
                  </div>
                  <button onClick={() => deleteSec(si)} style={{ background: '#fee2e2', color: '#ef4444', border: 'none', width: 44, height: 44, borderRadius: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Trash2 size={20}/></button>
                </div>
              </div>

              <div style={{ padding: '40px' }}>
                  <div style={{ background: '#ffffff', borderRadius: '16px', padding: '40px', border: '1px solid #E2E8F0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                        {(() => {
                          const groupedRows: { [key: string]: any[] } = {};
                          sec.rows.forEach((row: any, idx: number) => {
                            const mt = row.macroTema || 'SIN MACROTEMA';
                            if (!groupedRows[mt]) groupedRows[mt] = [];
                            groupedRows[mt].push({ ...row, originalIndex: idx });
                          });

                          return Object.entries(groupedRows).map(([mt, rows], gi) => {
                            const totalSecs = rows.reduce((acc, r) => acc + timeToSeconds(r.tiempo || r.ch || ''), 0);
                            let previousSecs = 0;
                            for (let i = 0; i < sec.rows.indexOf(rows[0]); i++) {
                                previousSecs += timeToSeconds(sec.rows[i].tiempo || sec.rows[i].ch || '');
                            }

                            return (
                              <div key={mt} style={{ marginBottom: '48px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#f8fafc', border: '2px solid #1B0088', padding: '12px 24px', borderRadius: '8px', marginBottom: '16px' }}>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                    <span style={{ fontSize: '11px', fontWeight: 900, color: '#1B0088', textTransform: 'uppercase', letterSpacing: '0.1em' }}>MACROTEMA:</span>
                                    <input value={mt === 'SIN MACROTEMA' ? '' : mt} onChange={e => { const newVal = e.target.value; rows.forEach(r => updateRow(si, r.originalIndex, 'macroTema', newVal)); }} style={{ background: 'transparent', border: 'none', color: '#1B0088', fontSize: '16px', fontWeight: 900, outline: 'none', width: '400px' }} placeholder="DEFINA MACRO TEMA..." />
                                  </div>
                                  <div style={{ background: '#1B0088', color: '#fff', padding: '6px 14px', borderRadius: '20px', fontSize: '11px', fontWeight: 900 }}>⏱ TOTAL BLOQUE: {secondsToTime(totalSecs)}</div>
                                </div>
                                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                  <thead>
                                    <tr style={{ background: '#f1f5f9' }}>
                                      <th style={{ padding: '10px', fontSize: '10px', color: '#64748b', fontWeight: 900, textAlign: 'left', border: '1px solid #e2e8f0' }}>TEMA</th>
                                      <th style={{ padding: '10px', fontSize: '10px', color: '#64748b', fontWeight: 900, textAlign: 'left', border: '1px solid #e2e8f0' }}>DETALLE</th>
                                      <th style={{ padding: '10px', fontSize: '10px', color: '#64748b', fontWeight: 900, textAlign: 'left', border: '1px solid #e2e8f0', width: '200px' }}>RECURSOS (TIPO / URL)</th>
                                      <th style={{ padding: '10px', fontSize: '10px', color: '#64748b', fontWeight: 900, textAlign: 'left', border: '1px solid #e2e8f0', width: '200px' }}>CONSEJO TÁCTICO</th>
                                      <th style={{ padding: '10px', fontSize: '10px', color: '#64748b', fontWeight: 900, textAlign: 'center', border: '1px solid #e2e8f0', width: '60px' }}>IA</th>
                                      <th style={{ padding: '10px', fontSize: '10px', color: '#64748b', fontWeight: 900, textAlign: 'center', border: '1px solid #e2e8f0', width: '90px' }}>DURACIÓN</th>
                                      <th style={{ padding: '10px', border: '1px solid #e2e8f0', width: '40px' }}></th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {rows.map((row: any, ri: number) => {
                                      const oi = row.originalIndex;
                                      return (
                                        <tr key={oi} style={{ background: ri % 2 === 0 ? '#fff' : '#fafafa' }}>
                                          <td style={{ border: '1px solid #e2e8f0', padding: '8px' }}><input value={row.tema} onChange={e => updateRow(si, oi, 'tema', e.target.value)} placeholder="Título..." style={{ background: 'transparent', border: 'none', color: '#111', fontSize: '13px', fontWeight: 700, width: '100%', outline: 'none' }} /></td>
                                          <td style={{ border: '1px solid #e2e8f0', padding: '8px' }}><textarea value={row.detalhe} onChange={e => updateRow(si, oi, 'detalhe', e.target.value)} placeholder="Detalle..." style={{ background: 'transparent', border: 'none', color: '#64748b', fontSize: '11px', width: '100%', outline: 'none', resize: 'none', height: '60px' }} /></td>
                                          <td style={{ border: '1px solid #e2e8f0', padding: '8px' }}>
                                            {(Array.isArray(row.herramientas) ? row.herramientas : row.herramientas ? [row.herramientas] : []).map((h: any, hi: number) => (
                                              <div key={hi} style={{ marginBottom: 8, paddingBottom: 8, borderBottom: '1px dashed #e2e8f0', position: 'relative' }}>
                                                <select value={h.tipo || 'PPT'} onChange={e => { const newH = Array.isArray(row.herramientas) ? [...row.herramientas] : [row.herramientas || {}]; newH[hi] = { ...newH[hi], tipo: e.target.value }; updateRow(si, oi, 'herramientas', newH); }} style={{ background: '#fff', border: '1px solid #ccc', fontSize: '10px', padding: '2px', width: '100%', marginBottom: 4 }}>{['🖼️ Slide','📄 Docs','📊 Sheets','📕 PDF','🎬 Video','📝 Form','📋 Form AeC','📋 Form Kon BR','➖ NA','🌟 Genially','🎮 Educaplay','✈️ Latam.com','▶️ Youtube','🔗 Link','🎯 Actividad','🖥️ Painel','🔄 Fluxo','🌐 Plataforma','🗂️ PIC','📂 CDA','⏱️ WTD'].map(t => <option key={t} value={t}>{t}</option>)}</select>
                                                <input value={h.url || ''} onChange={e => { const newH = Array.isArray(row.herramientas) ? [...row.herramientas] : [row.herramientas || {}]; newH[hi] = { ...newH[hi], url: e.target.value }; updateRow(si, oi, 'herramientas', newH); }} placeholder="URL" style={{ background: 'transparent', border: 'none', borderBottom: '1px solid #eee', color: '#1a56db', fontSize: '9px', width: '100%' }} />
                                                <button onClick={() => { const newH = Array.isArray(row.herramientas) ? [...row.herramientas] : [row.herramientas || {}]; newH.splice(hi, 1); updateRow(si, oi, 'herramientas', newH); }} style={{ position: 'absolute', top: 2, right: -4, background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: '10px' }}>x</button>
                                              </div>
                                            ))}
                                            <button onClick={() => { const newH = Array.isArray(row.herramientas) ? [...row.herramientas] : (row.herramientas ? [row.herramientas] : []); newH.push({ tipo: 'PPT', url: '' }); updateRow(si, oi, 'herramientas', newH); }} style={{ background: '#f1f5f9', border: '1px dashed #cbd5e1', width: '100%', padding: '4px', fontSize: '9px', cursor: 'pointer', borderRadius: 4, color: '#64748b' }}>+ AÑADIR RECURSO</button>
                                          </td>
                                          <td style={{ border: '1px solid #e2e8f0', padding: '8px' }}><textarea value={row.consejo} onChange={e => updateRow(si, oi, 'consejo', e.target.value)} placeholder="Consejo..." style={{ background: 'transparent', border: 'none', fontSize: '10px', color: '#333', width: '100%', resize: 'none', height: '60px' }} /></td>
                                          <td style={{ border: '1px solid #e2e8f0', padding: '8px', textAlign: 'center' }}></td>
                                          <td style={{ border: '1px solid #e2e8f0', padding: '8px', textAlign: 'center' }}><input value={row.tiempo || row.ch} onChange={e => updateRow(si, oi, 'tiempo', e.target.value)} style={{ background: 'transparent', border: 'none', color: '#111', fontSize: '12px', fontWeight: 800, textAlign: 'center', width: '100%' }} /></td>
                                          <td style={{ border: '1px solid #e2e8f0', padding: '8px', textAlign: 'center' }}><button onClick={() => deleteRow(si, oi)} style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', opacity: 0.5 }} onMouseEnter={e=>e.currentTarget.style.opacity='1'} onMouseLeave={e=>e.currentTarget.style.opacity='0.5'}><Trash2 size={14}/></button></td>
                                        </tr>
                                      );
                                    })}
                                  </tbody>
                                </table>
                              </div>
                            );
                          });
                        })()}
                  </div>
              </div>

              {sec.tipo === 'ojt' && editingSecIdx === si && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} style={{ marginTop: '32px', padding: '32px', background: '#fff', borderRadius: '24px', border: '1px solid rgba(0,214,204,0.15)', boxShadow: '0 20px 60px rgba(0,0,0,0.05)' }}>
                  <div style={{ fontSize: '14px', fontWeight: 900, marginBottom: '32px', display: 'flex', alignItems: 'center', gap: 12, color: '#00D6CC', letterSpacing: '0.1em' }}><AlertTriangle size={24}/> PARÁMETROS OPERATIVOS OJT <span style={{ fontWeight: 700, fontSize: '11px', color: '#64748b', letterSpacing: 0, textTransform: 'uppercase' }}>· Configuración Avanzada</span></div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '32px', borderBottom: '1px solid #E2E8F0', paddingBottom: '32px' }}>
                    <div style={{ background: '#F8FAFC', padding: 24, borderRadius: 20, border: '1px solid #E2E8F0' }}>
                      <div style={{ fontSize: '11px', fontWeight: 900, marginBottom: 20, color: '#1B0088', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: 8 }}><Monitor size={16}/> DIARIO DE BORDO OJT</div>
                      <div style={{ marginBottom: '20px' }}>
                        <label style={{ fontSize: '10px', color: '#64748b', display: 'block', marginBottom: '8px', fontWeight: 900, textTransform: 'uppercase' }}>Etiqueta del Botón</label>
                        <input value={sec.dbOjtLabel} onChange={e => updateSecField(si, 'dbOjtLabel', e.target.value)} placeholder="ej: Diário de Bordo OJT" style={{ ...inp({ fontWeight: 800 }), width: '100%' }} />
                      </div>
                      <div>
                        <label style={{ fontSize: '10px', color: '#64748b', display: 'block', marginBottom: '8px', fontWeight: 900, textTransform: 'uppercase' }}>Enlace de Destino (URL)</label>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#fff', border: '1px solid #E2E8F0', borderRadius: 10, padding: '0 16px' }}><LinkIcon size={16} color="#1B0088" /><input value={sec.dbOjtUrl} onChange={e => updateSecField(si, 'dbOjtUrl', e.target.value)} placeholder="https://docs.google.com/..." style={{ border: 'none', background: 'transparent', padding: '14px 0', outline: 'none', color: '#1a56db', fontWeight: 700, width: '100%', fontSize: 13 }} /></div>
                      </div>
                    </div>
                    <div style={{ background: '#F8FAFC', padding: 24, borderRadius: 20, border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                      <div style={{ fontSize: '11px', fontWeight: 900, marginBottom: 20, color: '#1B0088', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: 8 }}><Clock size={16}/> CARGA HORARIA TOTAL</div>
                      <input value={sec.totalCh} onChange={e => updateSecField(si, 'totalCh', e.target.value)} placeholder="HH:MM:SS" style={{ ...inp({ fontSize: 28, fontWeight: 900, textAlign: 'center', color: '#1B0088' }), width: '200px' }} />
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
                </motion.div>
              )}
            </motion.div>
            );
          })}
          <div style={{ height: 100 }} />
        </div>
      </div>
    </div>
  );
};
