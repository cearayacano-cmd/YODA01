import React, { useState } from 'react';
import { BackBtn } from './Shared';
import { motion } from 'framer-motion';
import { Save, CheckCircle2, Plus, Trash2, GraduationCap, Link as LinkIcon, Clock, FileText, Lightbulb, Shield, ArrowLeft, ArrowUpRight } from 'lucide-react';

export const AdminRutaLider = ({ rutaData, setRutaData, onBack, title }: any) => {
  const [saved, setSaved] = useState(false);
  const saveFlash = () => { setSaved(true); setTimeout(()=>setSaved(false), 2000); };
  
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
  
  const updateField = (idx: any, field: any, val: any) => {
    setRutaData((prev: any) => (prev || []).map((row: any, i: any) => i === idx ? { ...row, [field]: val } : row));
  };

  const updateGroupHeader = (oldName: string, field: string, val: string) => {
    setRutaData((prev: any) => (prev || []).map((row: any) => row.poder === oldName ? { ...row, [field]: val } : row));
  };

  const addNodeToGroup = (powerName: string) => {
    const lastInGroupIdx = (rutaData || []).findLastIndex((r: any) => r.poder === powerName);
    const time = (rutaData || []).find((r: any) => r.poder === powerName)?.tiempo || '';
    const newNode = { poder: powerName, tema: 'Nuevo Nodo', tiempo: time, desc: '', consejo: '-', adjunto: '#' };
    const next = [...(rutaData || [])];
    next.splice(lastInGroupIdx + 1, 0, newNode);
    setRutaData(next);
  };

  const removeRow = (idx: any) => setRutaData((prev: any) => (prev || []).filter((_: any, i: any) => i !== idx));
  const addPlanet = () => {
    const pNum = [...new Set((rutaData || []).map((d: any) => d.poder))].length + 1;
    setRutaData([...(rutaData || []), { poder: `Nuevo Poder ${pNum}`, tema: 'Objetivo', tiempo: '1h', desc: 'Descripción inicial', consejo: '-', adjunto: '#' }]);
  };

  const poderes = [...new Set((rutaData || []).map((d: any) => d.poder))];

  return (
    <div style={{ minHeight: '100vh', background: '#F8F7FF', display: 'flex', flexDirection: 'column', fontFamily: '"Inter", sans-serif' }}>
      {/* Corporate Header */}
      <div style={{
        background: '#1B0088', padding: '18px 40px', display: 'flex', alignItems: 'center', gap: 32,
        borderBottom: '4px solid #99CC33', boxShadow: '0 8px 32px rgba(27,0,136,0.15)', zIndex: 100
      }}>
        <button onClick={onBack} style={{
          background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#ffffff', padding: '10px 24px',
          borderRadius: 8, cursor: 'pointer', fontSize: 13, fontWeight: 800, textTransform: 'uppercase',
          display: 'flex', alignItems: 'center', gap: 10, transition: 'all 0.2s'
        }} onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#1B0088' }} onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff' }}>
          <ArrowLeft size={16} /> VOLVER
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <GraduationCap size={22} color="#99CC33" />
          <span style={{ color: '#ffffff', fontSize: 18, fontWeight: 900, letterSpacing: '0.05em' }}>{title || 'EDITOR: RUTA DEL LÍDER'}</span>
        </div>
        <motion.button
          whileHover={{ scale: 1.02, translateY: -1 }}
          whileTap={{ scale: 0.98 }}
          onClick={saveFlash}
          style={{
            marginLeft: 'auto', background: saved ? '#00D6CC' : '#99CC33', color: '#ffffff', border: 'none', padding: '12px 32px',
            cursor: 'pointer', fontSize: 13, fontWeight: 800, borderRadius: 8, display: 'flex', alignItems: 'center', gap: 10,
            boxShadow: `0 10px 20px ${saved ? '#00D6CC' : '#99CC33'}40`, transition: 'all 0.3s ease'
          }}
        >
          {saved ? <><CheckCircle2 size={18} /> GUARDADO PROFESIONAL</> : <><Save size={18} /> GUARDAR ESTRUCTURA</>}
        </motion.button>
      </div>

      <div style={{ padding: '40px 60px', flex: 1, overflowY: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ background: 'rgba(27,0,136,0.05)', color: '#1B0088', padding: '14px', borderRadius: 16 }}>
              <Shield size={24} />
            </div>
            <div>
              <div style={{ fontSize: 20, fontWeight: 900, color: '#1B0088', letterSpacing: '-0.01em' }}>ESTRUCTURA DE FORMACIÓN</div>
              <div style={{ fontSize: 14, color: '#64748b' }}>Gestión de Poderes y Nodos de Entrenamiento. {poderes.length} Mundos activos.</div>
            </div>
          </div>
          <button
            onClick={addPlanet}
            style={{
              background: '#1B0088', color: '#ffffff', border: 'none', padding: '14px 28px', cursor: 'pointer', fontSize: 13, fontWeight: 900,
              borderRadius: 12, display: 'flex', alignItems: 'center', gap: 10, boxShadow: '0 8px 25px rgba(27,0,136,0.2)'
            }}
          >
            <Plus size={20} /> CREAR NUEVO PODER (PLANETA)
          </button>
        </div>

        {poderes.map((pName, pIdx) => {
          const pNodes = (rutaData || []).filter((r: any) => r.poder === pName);
          const pTime = pNodes[0]?.tiempo || '';
          const pColor = ['#99CC33', '#FF00FF', '#00D6CC', '#1B0088', '#ED1650'][pIdx % 5];

          return (
            <div key={`planet-${pIdx}`} style={{ 
              background: '#fff', 
              borderRadius: 24, 
              border: '1px solid rgba(27,0,136,0.08)', 
              marginBottom: 48, 
              overflow: 'hidden', 
              boxShadow: '0 10px 40px rgba(0,0,0,0.04)',
              transition: 'all 0.3s ease'
            }}>
              {/* Premium Group Header */}
              <div style={{ 
                background: '#1B0088', 
                padding: '24px 32px', 
                borderLeft: `8px solid ${pColor}`, 
                display: 'flex', 
                alignItems: 'center', 
                gap: 28 
              }}>
                <div style={{ 
                  width: 50, height: 50, borderRadius: 14, background: pColor, 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', 
                  fontSize: 22, fontWeight: 900, color: '#fff',
                  boxShadow: `0 8px 20px ${pColor}40`
                }}>
                  {pIdx + 1}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 10, color: pColor, fontWeight: 900, letterSpacing: '0.15em', marginBottom: 6 }}>PLANETA / CATEGORÍA {pIdx + 1}</div>
                  <input
                    value={pName}
                    onChange={e => updateGroupHeader(pName, 'poder', e.target.value)}
                    placeholder="Nombre del Poder"
                    style={{ 
                      background: 'transparent', border: 'none', borderBottom: `2px solid rgba(255,255,255,0.1)`, 
                      color: '#fff', fontSize: 24, fontWeight: 900, width: '100%', outline: 'none', paddingBottom: 6,
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={e => e.target.style.borderColor = pColor}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>
                <div style={{ minWidth: 200 }}>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', fontWeight: 900, letterSpacing: '0.1em', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Clock size={12} /> CARGA HORARIA TOTAL
                  </div>
                  <input
                    value={pTime}
                    onChange={e => updateGroupHeader(pName, 'tiempo', e.target.value)}
                    placeholder="Ej: 3 horas"
                    style={{ ...inp({ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: 15, fontWeight: 800, width: '100%' }) }}
                  />
                </div>
                <button
                  onClick={() => addNodeToGroup(pName)}
                  style={{ 
                    background: pColor, color: '#fff', border: 'none', padding: '14px 24px', 
                    borderRadius: 12, fontWeight: 900, fontSize: 12, cursor: 'pointer', 
                    display: 'flex', alignItems: 'center', gap: 10,
                    boxShadow: `0 8px 20px ${pColor}40`, transition: 'all 0.2s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <Plus size={18} /> AGREGAR NODO
                </button>
              </div>

              {/* Advanced Nodes List */}
              <div style={{ padding: 24 }}>
                <div style={{ background: '#F8FAFC', borderRadius: 16, overflow: 'hidden', border: '1px solid #E2E8F0' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ textAlign: 'left', background: '#1B0088' }}>
                        <th style={{ padding: '16px 20px', fontSize: 10, color: '#fff', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase' }}>TEMA / OBJETIVO</th>
                        <th style={{ padding: '16px 20px', fontSize: 10, color: '#fff', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase' }}>DESCRIPCIÓN DEL CONTENIDO</th>
                        <th style={{ padding: '16px 20px', fontSize: 10, color: '#fff', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase' }}>CONSEJO / TIP</th>
                        <th style={{ padding: '16px 20px', fontSize: 10, color: '#fff', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase' }}>ADJUNTO</th>
                        <th style={{ width: 60 }}></th>
                      </tr>
                    </thead>
                    <tbody>
                      {pNodes.map((row: any, rIdx: number) => {
                        const absoluteIdx = (rutaData || []).indexOf(row);
                        return (
                          <tr key={absoluteIdx} style={{ borderBottom: '1px solid #E2E8F0', background: rIdx % 2 === 0 ? 'transparent' : 'rgba(27,0,136,0.02)' }}>
                            <td style={{ padding: 16 }}>
                              <input value={row.tema} onChange={e => updateField(absoluteIdx, 'tema', e.target.value)} style={{ ...inp({ fontWeight: 800 }), width: '100%' }} />
                            </td>
                            <td style={{ padding: 16 }}>
                              <textarea value={row.desc} onChange={e => updateField(absoluteIdx, 'desc', e.target.value)} style={{ ...inp({ fontSize: 12 }), width: '100%', minHeight: 70 }} />
                            </td>
                            <td style={{ padding: 16 }}>
                              <textarea value={row.consejo} onChange={e => updateField(absoluteIdx, 'consejo', e.target.value)} style={{ ...inp({ fontSize: 12 }), width: '100%', minHeight: 70 }} />
                            </td>
                            <td style={{ padding: 16 }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#fff', padding: '10px 14px', borderRadius: 10, border: '1px solid #E2E8F0' }}>
                                <LinkIcon size={14} color="#1B0088" />
                                <input value={row.adjunto} onChange={e => updateField(absoluteIdx, 'adjunto', e.target.value)} style={{ background: 'transparent', border: 'none', fontSize: 12, width: '100%', outline: 'none', color: '#1B0088', fontWeight: 600 }} placeholder="URL" />
                              </div>
                            </td>
                            <td style={{ padding: 16 }}>
                              <button 
                                onClick={() => removeRow(absoluteIdx)} 
                                style={{ 
                                  background:'#fee2e2', border:'none', width: 44, height: 44, 
                                  cursor:'pointer', borderRadius:12, color:'#ef4444', 
                                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                                  transition: 'all 0.2s'
                                }}
                                onMouseEnter={e => e.currentTarget.style.background = '#FCA5A5'}
                                onMouseLeave={e => e.currentTarget.style.background = '#fee2e2'}
                              >
                                <Trash2 size={20} />
                              </button>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          );
        })}
        <div style={{ height: 60 }} />
      </div>
    </div>
  );
};
