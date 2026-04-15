import React, { useState } from 'react';

const thS = { padding: '8px', fontSize: '10px', color: '#0F004F', textTransform: 'uppercase' as const, fontWeight: 700, borderBottom: '1px solid #ED1650', textAlign: 'left' as const };
const tdS = { padding: '8px', borderBottom: '1px solid #eee' };
const inpS = { width: '100%', padding: '6px', fontSize: '12px', border: '1px solid #ED1650', borderRadius: '4px', outline: 'none' };

export const AdminPlanetEditor = ({ dataArray, setDataArray, planets, onBack, initialPlanet, title = "EDITOR" }: any) => {
  const [activePlanet, setActivePlanet] = useState(initialPlanet || 0);
  const [editingSecIdx, setEditingSecIdx] = useState<number | null>(null);

  const data = Array.isArray(dataArray) ? dataArray : [];
  const currentSections = Array.isArray(data[activePlanet]) ? data[activePlanet] : [];

  const updateSections = (nextSecs: any[]) => {
    const nextData = [...data];
    while (nextData.length <= activePlanet) nextData.push([]);
    nextData[activePlanet] = nextSecs;
    setDataArray(nextData);
  };

  const addSection = (tipo: string) => {
    const labels: any = { mision1: '🚀 MISSÃO 1', landing: '🛬 LANDING', ojt: '🎯 DESAFIO OJT' };
    const newSec = {
      tipo,
      label: labels[tipo],
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
    if (!confirm('¿Eliminar sección?')) return;
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
    const rows = [...next[secIdx].rows, { macroTema: '', dia: '', tema: '', detalhe: '', ferramentas: { tipo: 'PPT', url: '' }, iaPic: '', tiempo: '' }];
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

  return (
    <div style={{ display: 'flex', height: '100vh', background: '#F4F5F9', fontFamily: '"Inter", sans-serif' }}>
      {/* SIDEBAR */}
      <div style={{ width: '260px', background: '#0B0033', borderRight: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '24px 16px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <button onClick={onBack} style={{ 
            background: '#ffffff', color: '#0B0033', border: 'none', padding: '8px 20px', 
            borderRadius: '4px', cursor: 'pointer', fontSize: '13px', fontWeight: 800, textTransform: 'uppercase',
            display: 'flex', alignItems: 'center', gap: 8
          }}>← VOLVER</button>
          <div style={{ marginTop: '24px', fontSize: '11px', fontWeight: 800, color: '#B20F3B', textTransform: 'uppercase', letterSpacing: '0.2em', paddingLeft: 12 }}>Planetas FSC</div>
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px' }}>
          {planets.map((p: any, i: number) => (
            <div key={i} onClick={() => { setActivePlanet(i); setEditingSecIdx(null); }}
              style={{ 
                padding: '12px 16px', marginBottom: '8px', borderRadius: '6px', cursor: 'pointer', 
                borderLeft: `3px solid ${activePlanet === i ? '#B20F3B' : 'transparent'}`, 
                background: activePlanet === i ? 'rgba(178,15,59,0.1)' : 'transparent', 
                transition: 'all 0.2s ease', color: activePlanet === i ? '#B20F3B' : '#a0aabf' 
              }}>
              <div style={{ fontSize: '13px', fontWeight: activePlanet === i ? 800 : 500 }}>{p.label || `Planeta ${i + 1}`}</div>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN AREA */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ 
          padding: '16px 32px', background: '#0B0033', borderBottom: '4px solid #B20F3B', 
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          boxShadow: '0 4px 20px rgba(178,15,59,0.15)'
        }}>
          <h2 style={{ margin: 0, fontSize: '16px', fontWeight: 800, textTransform: 'uppercase', color: '#ffffff', letterSpacing: '0.05em' }}>
            {title}: <span style={{ color: '#B20F3B' }}>{planets[activePlanet]?.label}</span>
          </h2>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={() => addSection('mision1')} style={{ background: '#ffffff', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: 800, color: '#0B0033' }}>+ 🚀 Missão 1</button>
            <button onClick={() => addSection('landing')} style={{ background: '#ffffff', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: 800, color: '#0B0033' }}>+ 🛬 LANDING</button>
            <button onClick={() => addSection('ojt')} style={{ background: '#ffffff', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: 800, color: '#0B0033' }}>+ 🎯 Desafio OJT</button>
          </div>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '40px 48px' }}>
          {currentSections.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px', color: '#64748b', border: '2px dashed #cbd5e1', borderRadius: '12px', fontSize: 14, fontWeight: 600 }}>No hay secciones en este planeta. Agrega una arriba.</div>
          ) : currentSections.map((sec: any, si: number) => (
            <div key={si} style={{ marginBottom: '40px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div>
                  <div style={{ fontSize: '16px', fontWeight: 800, color: '#0B0033', display: 'flex', alignItems: 'center', gap: '8px', letterSpacing: '0.05em' }}>
                    {sec.label}
                  </div>
                  <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, marginTop: 4 }}>{sec.rows?.length || 0} filas</div>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button onClick={() => addRow(si)} style={{ background: '#B20F3B', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontSize: '11px', fontWeight: 800, letterSpacing: '0.05em' }}>+ AGREGAR FILA</button>
                  <button onClick={() => setEditingSecIdx(editingSecIdx === si ? null : si)} style={{ background: '#ffffff', border: '1px solid #cbd5e1', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontSize: '11px', fontWeight: 800, color: '#0B0033' }}>{editingSecIdx === si ? 'CERRAR' : 'EDITAR'}</button>
                  <button onClick={() => moveSec(si, -1)} style={{ background: '#ffffff', border: '1px solid #cbd5e1', padding: '8px', borderRadius: '6px', cursor: 'pointer', color: '#64748b' }}>▲</button>
                  <button onClick={() => moveSec(si, 1)} style={{ background: '#ffffff', border: '1px solid #cbd5e1', padding: '8px', borderRadius: '6px', cursor: 'pointer', color: '#64748b' }}>▼</button>
                  <button onClick={() => deleteSec(si)} style={{ background: '#fee2e2', color: '#ef4444', border: 'none', padding: '8px', borderRadius: '6px', cursor: 'pointer' }}>🗑️</button>
                </div>
              </div>

              <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid #B20F3B', background: '#f8fafc' }}>
                      <th style={{ padding: '12px 16px', fontSize: '10px', color: '#64748b', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.05em', textAlign: 'left', width: '100px' }}>MACRO TEMA</th>
                      <th style={{ padding: '12px 16px', fontSize: '10px', color: '#64748b', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.05em', textAlign: 'left', width: '40px' }}>DÍA</th>
                      <th style={{ padding: '12px 16px', fontSize: '10px', color: '#64748b', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.05em', textAlign: 'left', width: '120px' }}>TEMA</th>
                      {sec.tipo !== 'ojt' && <th style={{ padding: '12px 16px', fontSize: '10px', color: '#64748b', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.05em', textAlign: 'left' }}>DETALHE P/ INSTRUTOR</th>}
                      <th style={{ padding: '12px 16px', fontSize: '10px', color: '#64748b', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.05em', textAlign: 'left', width: '160px' }}>FERRAMENTAS</th>
                      {sec.tipo !== 'ojt' && <th style={{ padding: '12px 16px', fontSize: '10px', color: '#64748b', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.05em', textAlign: 'left', width: '80px' }}>IA-PIC (URL)</th>}
                      <th style={{ padding: '12px 16px', fontSize: '10px', color: '#64748b', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.05em', textAlign: 'left', width: '60px' }}>{sec.tipo === 'ojt' ? 'CH' : 'TIEMPO'}</th>
                      <th style={{ padding: '12px 16px', fontSize: '10px', color: '#64748b', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.05em', textAlign: 'left', width: '30px' }}></th>
                    </tr>
                  </thead>
                  <tbody>
                    {sec.rows.map((row: any, ri: number) => (
                      <tr key={ri} style={{ verticalAlign: 'top', transition: 'background 0.2s ease' }} onMouseEnter={e => e.currentTarget.style.background = '#f1f5f9'} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                        <td style={{ padding: '12px 16px', borderBottom: '1px solid #e2e8f0' }}><input value={row.macroTema} onChange={e => updateRow(si, ri, 'macroTema', e.target.value)} style={{ width: '100%', padding: '8px 12px', fontSize: '12px', border: '1px solid #cbd5e1', borderRadius: '6px', outline: 'none' }} /></td>
                        <td style={{ padding: '12px 16px', borderBottom: '1px solid #e2e8f0' }}><input value={row.dia} onChange={e => updateRow(si, ri, 'dia', e.target.value)} style={{ width: '100%', padding: '8px 12px', fontSize: '12px', border: '1px solid #cbd5e1', borderRadius: '6px', outline: 'none' }} /></td>
                        <td style={{ padding: '12px 16px', borderBottom: '1px solid #e2e8f0' }}><input value={row.tema} onChange={e => updateRow(si, ri, 'tema', e.target.value)} style={{ width: '100%', padding: '8px 12px', fontSize: '12px', border: '1px solid #cbd5e1', borderRadius: '6px', outline: 'none' }} /></td>
                        {sec.tipo !== 'ojt' && (
                          <td style={{ padding: '12px 16px', borderBottom: '1px solid #e2e8f0' }}><textarea value={row.detalhe} onChange={e => updateRow(si, ri, 'detalhe', e.target.value)} style={{ width: '100%', padding: '8px 12px', fontSize: '12px', border: '1px solid #cbd5e1', borderRadius: '6px', outline: 'none', height: '60px', resize: 'vertical' }} /></td>
                        )}
                        <td style={{ padding: '12px 16px', borderBottom: '1px solid #e2e8f0' }}>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <select value={row.ferramentas?.tipo || 'PPT'} onChange={e => updateRow(si, ri, 'ferramentas', { ...row.ferramentas, tipo: e.target.value })} style={{ width: '100%', padding: '8px 12px', fontSize: '12px', border: '1px solid #cbd5e1', borderRadius: '6px', outline: 'none', background: '#fff' }}>
                              <option value="PPT">📊 PPT</option>
                              <option value="Vídeo">🎬 Vídeo</option>
                              <option value="Operação">⚙️ Operação</option>
                              <option value="Simulador">💻 Simulador</option>
                              <option value="Quiz">📝 Quiz</option>
                            </select>
                            <input value={row.ferramentas?.url || ''} onChange={e => updateRow(si, ri, 'ferramentas', { ...row.ferramentas, url: e.target.value })} placeholder="https://..." style={{ width: '100%', padding: '8px 12px', fontSize: '12px', border: '1px solid #cbd5e1', borderRadius: '6px', outline: 'none' }} />
                          </div>
                        </td>
                        {sec.tipo !== 'ojt' && (
                          <td style={{ padding: '12px 16px', borderBottom: '1px solid #e2e8f0' }}><input value={row.iaPic} onChange={e => updateRow(si, ri, 'iaPic', e.target.value)} style={{ width: '100%', padding: '8px 12px', fontSize: '12px', border: '1px solid #cbd5e1', borderRadius: '6px', outline: 'none' }} /></td>
                        )}
                        <td style={{ padding: '12px 16px', borderBottom: '1px solid #e2e8f0' }}><input value={row.tiempo || row.ch || ''} onChange={e => updateRow(si, ri, 'tiempo', e.target.value)} style={{ width: '100%', padding: '8px 12px', fontSize: '12px', border: '1px solid #cbd5e1', borderRadius: '6px', outline: 'none' }} /></td>
                        <td style={{ padding: '12px 16px', borderBottom: '1px solid #e2e8f0' }}>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <button onClick={() => moveRow(si, ri, -1)} style={{ background: '#f8fafc', border: '1px solid #cbd5e1', padding: '4px', borderRadius: '4px', cursor: 'pointer', fontSize: '10px' }}>▲</button>
                            <button onClick={() => moveRow(si, ri, 1)} style={{ background: '#f8fafc', border: '1px solid #cbd5e1', padding: '4px', borderRadius: '4px', cursor: 'pointer', fontSize: '10px' }}>▼</button>
                            <button onClick={() => deleteRow(si, ri)} style={{ background: '#fee2e2', color: '#ef4444', border: 'none', padding: '4px', borderRadius: '4px', cursor: 'pointer', fontSize: '10px' }}>🗑</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {sec.tipo === 'ojt' && (
                <div style={{ marginTop: '24px', padding: '24px', background: '#f8fafc', color: '#0B0033', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                  <div style={{ fontSize: '14px', fontWeight: 800, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px', letterSpacing: '0.05em', color: '#B20F3B' }}>
                    ⚠️ CAMPOS ESPECIALES OJT <span style={{ fontWeight: 600, fontSize: '11px', color: '#64748b' }}>· Alerta DB OJT + Ajuste de Rota</span>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px', borderBottom: '1px solid #cbd5e1', paddingBottom: '24px', marginBottom: '24px' }}>
                    <div>
                      <div style={{ fontSize: '12px', fontWeight: 800, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px', color: '#0B0033' }}>📋 DB OJT · TEXTO + LINK</div>
                      <div style={{ marginBottom: '16px' }}>
                        <label style={{ fontSize: '11px', color: '#64748b', display: 'block', marginBottom: '6px', fontWeight: 600 }}>✏️ Texto visible del botón</label>
                        <input value={sec.dbOjtLabel} onChange={e => updateSecField(si, 'dbOjtLabel', e.target.value)} placeholder="ej: Diário de Bordo OJT · Grupo 01" style={{ width: '100%', padding: '10px 14px', fontSize: '13px', border: '1px solid #cbd5e1', borderRadius: '6px', outline: 'none', background: '#fff', color: '#0B0033' }} />
                      </div>
                      <div>
                        <label style={{ fontSize: '11px', color: '#64748b', display: 'block', marginBottom: '6px', fontWeight: 600 }}>🔗 URL del enlace</label>
                        <input value={sec.dbOjtUrl} onChange={e => updateSecField(si, 'dbOjtUrl', e.target.value)} placeholder="https://docs.google.com/spreadsheets/d/..." style={{ width: '100%', padding: '10px 14px', fontSize: '13px', border: '1px solid #cbd5e1', borderRadius: '6px', outline: 'none', background: '#fff', color: '#0B0033' }} />
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', fontWeight: 800, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px', color: '#0B0033' }}>⏱ TOTAL CH (EJ: 5:40:00)</div>
                      <input value={sec.totalCh} onChange={e => updateSecField(si, 'totalCh', e.target.value)} placeholder="5:40:00" style={{ width: '100%', padding: '10px 14px', fontSize: '13px', border: '1px solid #cbd5e1', borderRadius: '6px', outline: 'none', background: '#fff', color: '#0B0033' }} />
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 800, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '6px', color: '#0B0033' }}>📦 AJUSTE DE ROTA PARA REPROVADOS</div>
                    <div style={{ marginBottom: '20px' }}>
                      <label style={{ fontSize: '11px', color: '#64748b', display: 'block', marginBottom: '6px', fontWeight: 600 }}>Descripción (vacío = usa texto por defecto)</label>
                      <textarea value={sec.ajusteRota} onChange={e => updateSecField(si, 'ajusteRota', e.target.value)} placeholder="Os alumnos que não atingirem a média final de 80%..." style={{ width: '100%', padding: '10px 14px', fontSize: '13px', border: '1px solid #cbd5e1', borderRadius: '6px', outline: 'none', background: '#fff', color: '#0B0033', height: '80px', resize: 'vertical' }} />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
                      <div>
                        <label style={{ fontSize: '11px', color: '#64748b', display: 'block', marginBottom: '6px', fontWeight: 600 }}>🔗 URL Forms KON</label>
                        <input value={sec.ajusteRotaUrlKon} onChange={e => updateSecField(si, 'ajusteRotaUrlKon', e.target.value)} placeholder="https://..." style={{ width: '100%', padding: '10px 14px', fontSize: '13px', border: '1px solid #cbd5e1', borderRadius: '6px', outline: 'none', background: '#fff', color: '#0B0033' }} />
                      </div>
                      <div>
                        <label style={{ fontSize: '11px', color: '#64748b', display: 'block', marginBottom: '6px', fontWeight: 600 }}>🔗 URL Forms AeC</label>
                        <input value={sec.ajusteRotaUrlAec} onChange={e => updateSecField(si, 'ajusteRotaUrlAec', e.target.value)} placeholder="https://..." style={{ width: '100%', padding: '10px 14px', fontSize: '13px', border: '1px solid #cbd5e1', borderRadius: '6px', outline: 'none', background: '#fff', color: '#0B0033' }} />
                      </div>
                      <div>
                        <label style={{ fontSize: '11px', color: '#64748b', display: 'block', marginBottom: '6px', fontWeight: 600 }}>⏱ CH Ajuste (ej: 0:30:00)</label>
                        <input value={sec.ajusteRotaCh} onChange={e => updateSecField(si, 'ajusteRotaCh', e.target.value)} placeholder="0:30:00" style={{ width: '100%', padding: '10px 14px', fontSize: '13px', border: '1px solid #cbd5e1', borderRadius: '6px', outline: 'none', background: '#fff', color: '#0B0033' }} />
                      </div>
                    </div>
                    <div style={{ marginTop: '16px', fontSize: '11px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 500 }}>
                      💡 La fila "Ajuste de Rota" solo aparece si completas al menos un campo (descripción, URL KON o URL AeC).
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
