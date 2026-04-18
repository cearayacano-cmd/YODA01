import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    ArrowLeft, Save, CheckCircle2, Plus, Trash2, Database, Layers, Satellite, 
    Edit3, Briefcase, Rocket, Target, Anchor, ChevronUp, ChevronDown, Monitor, FileText, Link as LinkIcon, AlertTriangle, Clock
} from 'lucide-react';

const TIPO_INFO: any = {
  mision1: { label: 'MISSÃO 1', emoji: <Rocket size={20} />, accent: '#1B0088' },
  landing: { label: 'LANDING', emoji: <Anchor size={20} />, accent: '#99CC33' },
  ojt:     { label: 'DESAFIO OJT', emoji: <Target size={20} />, accent: '#00D6CC' }
};

export const AdminPlanetEditor = ({ dataArray, setDataArray, planets, onBack, initialPlanet, title = "EDITOR" }: any) => {
  const [activePlanet, setActivePlanet] = useState(initialPlanet || 0);
  const [editingSecIdx, setEditingSecIdx] = useState<number | null>(null);
  const [saved, setSaved] = useState(false);

  const data = Array.isArray(dataArray) ? dataArray : [];
  const currentSections = Array.isArray(data[activePlanet]) ? data[activePlanet] : [];

  const updateSections = (nextSecs: any[]) => {
    const nextData = [...data];
    while (nextData.length <= activePlanet) nextData.push([]);
    nextData[activePlanet] = nextSecs;
    setDataArray(nextData);
  };

  const addSection = (tipo: string) => {
    const info = TIPO_INFO[tipo];
    const newSec = {
      tipo,
      label: info.label,
      rows: [],
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

  const deleteSec = (idx: number) => {
    updateSections(currentSections.filter((_, i) => i !== idx));
  };

  const updateSecField = (idx: number, field: string, val: any) => {
    const next = [...currentSections];
    next[idx] = { ...next[idx], [field]: val };
    updateSections(next);
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
    const rows = [...next[secIdx].rows, { macroTema: '', dia: '', tema: '', detalhe: '', herramientas: { tipo: 'PPT', url: '' }, iaPic: '', tiempo: '' }];
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
    background:'#ffffff', 
    border:'1px solid #E2E8F0', 
    padding:'10px 14px', 
    fontFamily:'inherit', 
    fontSize:13, 
    color:'#1B0088', 
    outline:'none', 
    borderRadius:10, 
    transition: 'all 0.2s ease',
    ...extra
  });

  return (
    <div style={{ display: 'flex', height: '100vh', background: '#F8F7FF', fontFamily: '"Inter", sans-serif' }}>
      {/* SIDEBAR CORPORATIVA */}
      <div style={{ 
        width: '280px', 
        background: '#1B0088', 
        borderRight: '1px solid rgba(255,255,255,0.05)', 
        display: 'flex', 
        flexDirection: 'column',
        boxShadow: '10px 0 30px rgba(0,0,0,0.05)',
        zIndex: 50
      }}>
        <div style={{ padding: '32px 24px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <button onClick={onBack} style={{ 
            background: 'rgba(255,255,255,0.1)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)', padding: '12px 24px', 
            borderRadius: '10px', cursor: 'pointer', fontSize: '12px', fontWeight: 900, textTransform: 'uppercase',
            display: 'flex', alignItems: 'center', gap: 10, transition: 'all 0.2s', width: '100%', justifyContent: 'center'
          }} onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#1B0088' }} onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff' }}>
            <ArrowLeft size={16} /> VOLVER
          </button>
          <div style={{ marginTop: '32px', fontSize: '10px', fontWeight: 900, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.25em', paddingLeft: 8 }}>EXPEDICIÓN LUNAR</div>
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px 16px' }}>
          {planets.map((p: any, i: number) => {
            const isAct = activePlanet === i;
            return (
                <motion.div 
                    key={i} 
                    whileHover={{ x: 6, background: 'rgba(255,255,255,0.05)' }}
                    onClick={() => { setActivePlanet(i); setEditingSecIdx(null); }}
                    style={{ 
                        padding: '16px 20px', 
                        marginBottom: '8px', 
                        borderRadius: '12px', 
                        cursor: 'pointer', 
                        background: isAct ? 'rgba(153,204,51,0.15)' : 'transparent', 
                        borderLeft: `4px solid ${isAct ? '#99CC33' : 'transparent'}`,
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', 
                        color: isAct ? '#99CC33' : 'rgba(255,255,255,0.6)' 
                    }}>
                    <div style={{ fontSize: '9px', fontWeight: 900, marginBottom: 4, color: isAct ? '#99CC33' : 'rgba(255,255,255,0.3)' }}>PLANETA {String(i+1).padStart(2,'0')}</div>
                    <div style={{ fontSize: '14px', fontWeight: 800, letterSpacing: '0.02em' }}>{p.label || `Sector ${i + 1}`}</div>
                </motion.div>
            );
          })}
        </div>
      </div>

      {/* MAIN AREA */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ 
          padding: '20px 48px', 
          background: '#1B0088', 
          borderBottom: '4px solid #99CC33', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          boxShadow: '0 8px 32px rgba(27,0,136,0.15)',
          zIndex: 40
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <div style={{ width: 44, height: 44, background: 'rgba(153,204,51,0.2)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#99CC33' }}>
                <Satellite size={24} />
            </div>
            <div>
                <div style={{ fontSize: 10, fontWeight: 900, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 2 }}>{title}</div>
                <div style={{ fontSize: 20, fontWeight: 900, color: '#ffffff', letterSpacing: '-0.02em' }}>{planets[activePlanet]?.label}</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            {['mision1', 'landing', 'ojt'].map(t => (
                <button key={t} onClick={() => addSection(t)} style={{ 
                    background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', padding: '10px 20px', 
                    borderRadius: '10px', cursor: 'pointer', fontSize: '12px', fontWeight: 900, color: '#ffffff',
                    display: 'flex', alignItems: 'center', gap: 8, transition: 'all 0.2s'
                }} onMouseEnter={e => e.currentTarget.style.background = TIPO_INFO[t].accent} onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>
                    {TIPO_INFO[t].emoji} {TIPO_INFO[t].label}
                </button>
            ))}
            <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={saveFlash} 
                style={{ background: saved ? '#00D6CC' : '#99CC33', border: 'none', padding: '10px 28px', borderRadius: '10px', cursor: 'pointer', fontSize: '12px', fontWeight: 900, color: '#ffffff', marginLeft: 16, display: 'flex', alignItems: 'center', gap: 8, boxShadow: `0 8px 20px ${saved ? '#00D6CC' : '#99CC33'}40` }}>
                {saved ? <CheckCircle2 size={18}/> : <Save size={18}/>} {saved ? 'GUARDADO' : 'GUARDAR'}
            </motion.button>
          </div>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '48px 64px' }}>
          {currentSections.length === 0 ? (
            <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', padding: '80px', color: '#1B0088', background: '#fff', borderRadius: '32px', border: '2px dashed rgba(27,0,136,0.1)', boxShadow: '0 20px 60px rgba(0,0,0,0.03)' }}>
                    <Layers size={64} style={{ opacity: 0.05, marginBottom: 24 }} />
                    <div style={{ fontSize: 18, fontWeight: 900 }}>Sin secciones operativas</div>
                    <div style={{ fontSize: 14, color: '#64748b', marginTop: 8 }}>Inicia la construcción agregando una misión desde el panel superior.</div>
                </div>
            </div>
          ) : currentSections.map((sec: any, si: number) => (
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: si * 0.1 }}
                key={si} 
                style={{ marginBottom: '64px' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: TIPO_INFO[sec.tipo].accent, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 8px 15px rgba(0,0,0,0.1)' }}>
                    {TIPO_INFO[sec.tipo].emoji}
                  </div>
                  <div>
                    <input 
                        value={sec.label} 
                        onChange={e => updateSecField(si, 'label', e.target.value)} 
                        style={{ background: 'transparent', border: 'none', fontSize: '20px', fontWeight: 900, color: '#1B0088', outline: 'none', padding: '4px 8px', letterSpacing: '-0.02em' }} 
                        onFocus={e => e.target.style.borderBottom = `2px solid ${TIPO_INFO[sec.tipo].accent}`}
                        onBlur={e => e.target.style.borderBottom = 'none'}
                    />
                    <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', paddingLeft: 8 }}>{(sec.rows||[]).length} NODOS CONFIGURADOS</div>
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

              <div style={{ background: '#ffffff', border: '1px solid rgba(27,0,136,0.08)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 1000 }}>
                    <thead>
                        <tr style={{ background: '#1B0088' }}>
                            {['MACRO TEMA','DÍA','TEMA', ...(sec.tipo !== 'ojt' ? ['DETALLE TÉCNICO'] : []), 'HERRAMIENTAS', ...(sec.tipo !== 'ojt' ? ['IA-PIC'] : []), sec.tipo === 'ojt' ? 'CH' : 'TIEMPO', ''].map((h, i) => (
                                <th key={i} style={{ padding: '18px 20px', fontSize: '10px', color: '#ffffff', textTransform: 'uppercase', fontWeight: 900, letterSpacing: '0.1em', textAlign: 'left' }}>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {sec.rows.map((row: any, ri: number) => (
                        <tr key={ri} style={{ verticalAlign: 'middle', transition: 'background 0.2s ease', borderBottom: '1px solid #E2E8F0', background: ri % 2 === 0 ? '#ffffff' : 'rgba(27,0,136,0.01)' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(27,0,136,0.04)'} onMouseLeave={e => e.currentTarget.style.background = ri % 2 === 0 ? '#ffffff' : 'rgba(27,0,136,0.01)'}>
                            <td style={{ padding: '16px 20px' }}><input value={row.macroTema} onChange={e => updateRow(si, ri, 'macroTema', e.target.value)} style={{ ...inp({ fontWeight: 800 }), width: '100%' }} /></td>
                            <td style={{ padding: '16px 20px', width: 64 }}><input value={row.dia} onChange={e => updateRow(si, ri, 'dia', e.target.value)} style={{ ...inp({ textAlign: 'center', fontWeight: 900 }), width: '100%' }} /></td>
                            <td style={{ padding: '16px 20px' }}><input value={row.tema} onChange={e => updateRow(si, ri, 'tema', e.target.value)} style={{ ...inp({ fontWeight: 800 }), width: '100%' }} /></td>
                            {sec.tipo !== 'ojt' && (
                            <td style={{ padding: '16px 20px' }}><textarea value={row.detalhe} onChange={e => updateRow(si, ri, 'detalhe', e.target.value)} style={{ ...inp({ minHeight: 44, fontSize: 12, lineHeight: 1.4 }), width: '100%', resize: 'vertical' }} /></td>
                            )}
                            <td style={{ padding: '16px 20px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                <select value={row.ferramentas?.tipo || 'PPT'} onChange={e => updateRow(si, ri, 'ferramentas', { ...row.ferramentas, tipo: e.target.value })} style={{ ...inp({ padding: '6px 12px', fontSize: 11, background: '#F8FAFC' }), cursor: 'pointer' }}>
                                    <option value="PPT">📊 PPT</option>
                                    <option value="Vídeo">🎬 VÍDEO</option>
                                    <option value="Operação">⚙️ OPERACIÓN</option>
                                    <option value="Simulador">💻 SIMULADOR</option>
                                    <option value="Quiz">📝 QUIZ</option>
                                </select>
                                <input value={row.ferramentas?.url || ''} onChange={e => updateRow(si, ri, 'ferramentas', { ...row.ferramentas, url: e.target.value })} placeholder="URL Recurso" style={{ ...inp({ padding: '6px 12px', fontSize: 10, color: '#1a56db', background: '#F8FAFC' }) }} />
                            </div>
                            </td>
                            {sec.tipo !== 'ojt' && (
                            <td style={{ padding: '16px 20px' }}><input value={row.iaPic} onChange={e => updateRow(si, ri, 'iaPic', e.target.value)} style={{ ...inp({ fontSize: 10, color: '#666', background: '#F8FAFC' }), width: '100%' }} /></td>
                            )}
                            <td style={{ padding: '16px 20px', width: 100 }}><input value={row.tiempo || row.ch || ''} onChange={e => updateRow(si, ri, 'tiempo', e.target.value)} style={{ ...inp({ fontWeight: 900, textAlign: 'center' }), width: '100%' }} /></td>
                            <td style={{ padding: '16px 20px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                <button onClick={() => moveRow(si, ri, -1)} style={{ background: '#fff', border: '1px solid #E2E8F0', width: 28, height: 28, borderRadius: 8, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ChevronUp size={14}/></button>
                                <button onClick={() => moveRow(si, ri, 1)} style={{ background: '#fff', border: '1px solid #E2E8F0', width: 28, height: 28, borderRadius: 8, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ChevronDown size={14}/></button>
                                <button onClick={() => deleteRow(si, ri)} style={{ background: '#fee2e2', border: 'none', width: 28, height: 28, borderRadius: 8, cursor: 'pointer', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Trash2 size={16}/></button>
                            </div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
              </div>

              {sec.tipo === 'ojt' && editingSecIdx === si && (
                <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    style={{ marginTop: '32px', padding: '32px', background: '#fff', borderRadius: '24px', border: '1px solid rgba(0,214,204,0.15)', boxShadow: '0 20px 60px rgba(0,0,0,0.05)' }}
                >
                  <div style={{ fontSize: '14px', fontWeight: 900, marginBottom: '32px', display: 'flex', alignItems: 'center', gap: 12, color: '#00D6CC', letterSpacing: '0.1em' }}>
                    <AlertTriangle size={24}/> PARÁMETROS OPERATIVOS OJT <span style={{ fontWeight: 700, fontSize: '11px', color: '#64748b', letterSpacing: 0, textTransform: 'uppercase' }}>· Configuración Avanzada</span>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '32px', borderBottom: '1px solid #E2E8F0', paddingBottom: '32px' }}>
                    <div style={{ background: '#F8FAFC', padding: 24, borderRadius: 20, border: '1px solid #E2E8F0' }}>
                      <div style={{ fontSize: '11px', fontWeight: 900, marginBottom: 20, color: '#1B0088', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: 8 }}><Monitor size={16}/> DIARIO DE BORDO OJT</div>
                      <div style={{ marginBottom: '20px' }}>
                        <label style={{ fontSize: '10px', color: '#64748b', display: 'block', marginBottom: '8px', fontWeight: 900, textTransform: 'uppercase' }}>Etiqueta del Botón</label>
                        <input value={sec.dbOjtLabel} onChange={e => updateSecField(si, 'dbOjtLabel', e.target.value)} placeholder="ej: Diário de Bordo OJT" style={{ ...inp({ fontWeight: 800 }), width: '100%' }} />
                      </div>
                      <div>
                        <label style={{ fontSize: '10px', color: '#64748b', display: 'block', marginBottom: '8px', fontWeight: 900, textTransform: 'uppercase' }}>Enlace de Destino (URL)</label>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#fff', border: '1px solid #E2E8F0', borderRadius: 10, padding: '0 16px' }}>
                            <LinkIcon size={16} color="#1B0088" />
                            <input value={sec.dbOjtUrl} onChange={e => updateSecField(si, 'dbOjtUrl', e.target.value)} placeholder="https://docs.google.com/..." style={{ border: 'none', background: 'transparent', padding: '14px 0', outline: 'none', color: '#1a56db', fontWeight: 700, width: '100%', fontSize: 13 }} />
                        </div>
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
                      <div>
                        <label style={{ fontSize: '10px', color: '#64748b', display: 'block', marginBottom: '8px', fontWeight: 900, textTransform: 'uppercase' }}>Forms KON (URL)</label>
                        <input value={sec.ajusteRotaUrlKon} onChange={e => updateSecField(si, 'ajusteRotaUrlKon', e.target.value)} placeholder="https://..." style={{ ...inp({ fontSize: 12, color: '#1a56db' }), width: '100%' }} />
                      </div>
                      <div>
                        <label style={{ fontSize: '10px', color: '#64748b', display: 'block', marginBottom: '8px', fontWeight: 900, textTransform: 'uppercase' }}>Forms AeC (URL)</label>
                        <input value={sec.ajusteRotaUrlAec} onChange={e => updateSecField(si, 'ajusteRotaUrlAec', e.target.value)} placeholder="https://..." style={{ ...inp({ fontSize: 12, color: '#1a56db' }), width: '100%' }} />
                      </div>
                      <div>
                        <label style={{ fontSize: '10px', color: '#64748b', display: 'block', marginBottom: '8px', fontWeight: 900, textTransform: 'uppercase' }}>Carga Horaria de Ajuste</label>
                        <input value={sec.ajusteRotaCh} onChange={e => updateSecField(si, 'ajusteRotaCh', e.target.value)} placeholder="0:30:00" style={{ ...inp({ fontWeight: 900, textAlign: 'center' }), width: '100%' }} />
                      </div>
                    </div>
                    <div style={{ marginTop: '24px', padding: '16px 20px', borderRadius: 16, background: 'rgba(0,214,204,0.05)', display: 'flex', alignItems: 'center', gap: 12, border: '1px solid rgba(0,214,204,0.1)' }}>
                      <AlertTriangle size={18} color="#00D6CC" />
                      <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 600 }}>💡 El nodo "AJUSTE" aparecerá en la aplicación si se completa al menos uno de los enlaces o la descripción.</div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
          <div style={{ height: 100 }} />
        </div>
      </div>
    </div>
  );
};
