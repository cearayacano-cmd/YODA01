import React, { useState } from 'react';
import { BackBtn } from './Shared';

export const AdminSatelites = (props) => {
  const { initialPortal, satelitesData, setSatelitesData, onBack, pk: oldPk, satelites: oldSatelites, setSatelites: oldSetSatelites } = props;
  const pk = initialPortal || oldPk || 'conhecendo';
  const satelites = satelitesData || oldSatelites || { conhecendo:[], imersao:[] };
  const data = Array.isArray(satelites[pk]) ? satelites[pk] : [];
  const inp = (extra={}) => ({background:'#ffffff', border:'1px solid #ED1650', padding:'6px 10px', fontFamily:'inherit', fontSize:12, color:'#0F004F', outline:'none', borderRadius:3, ...extra});
  
  const updateField = (idx, field, val) => {
    const next = {...satelites};
    next[pk] = (next[pk]||[]).map((row,i)=>i===idx?{...row,[field]:val}:row);
    if (setSatelitesData) setSatelitesData(next);
    else if (oldSetSatelites) oldSetSatelites(next);
  };
  const addRow = () => {
    const next = {...satelites};
    next[pk] = [...(next[pk]||[]), {macroTema:'Nuevo', dia:1, tema:'Nuevo', detalhe:'', herramientas:'PPT', tiempo:''}];
    if (setSatelitesData) setSatelitesData(next);
    else if (oldSetSatelites) oldSetSatelites(next);
  };
  const removeRow = (idx) => {
    const next = {...satelites};
    next[pk] = (next[pk]||[]).filter((_,i)=>i!==idx);
    if (setSatelitesData) setSatelitesData(next);
    else if (oldSetSatelites) oldSetSatelites(next);
  };
  return (
    <div style={{minHeight:'100vh', background:'#F4F5F9', fontFamily: '"Inter", sans-serif'}}>
      <div style={{
        background:'#0B0033', 
        padding:'16px 32px', 
        display:'flex', 
        alignItems:'center', 
        gap:24,
        borderBottom: '4px solid #B20F3B',
        boxShadow: '0 4px 20px rgba(178,15,59,0.15)'
      }}>
        <button onClick={onBack} style={{ 
          background: '#ffffff', border: 'none', color: '#0B0033', padding: '8px 20px', 
          borderRadius: 4, cursor: 'pointer', fontSize: 13, fontWeight: 800, textTransform: 'uppercase',
          display: 'flex', alignItems: 'center', gap: 8
        }}>
          ← VOLVER
        </button>
        <span style={{color:'#ffffff', fontSize:16, fontWeight:800, letterSpacing: '0.05em'}}>EDITOR: SATÉLITE <span style={{ color: '#B20F3B' }}>{pk.toUpperCase()}</span></span>
      </div>
      <div style={{padding:'32px 48px'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:24}}>
          <div style={{fontSize:14, fontWeight:600, color:'#64748b'}}>{data.length} nodos</div>
          <button onClick={addRow} style={{
            background:'#B20F3B', color:'#ffffff', border:'none', padding:'10px 20px', 
            cursor:'pointer', fontSize:12, fontWeight:800, borderRadius:6, letterSpacing:'0.05em',
            boxShadow: '0 4px 15px rgba(178,15,59,0.2)', transition: 'all 0.2s ease'
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >+ AGREGAR NODO</button>
        </div>
        <div style={{
          border:'1px solid #e2e8f0', 
          borderRadius:12, 
          overflow:'hidden', 
          background:'#ffffff',
          boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
        }}>
          <div style={{display:'grid', gridTemplateColumns:'120px 60px 150px 1fr 100px 80px 40px', gap:12, padding:'12px 16px', borderBottom:'2px solid #B20F3B', background:'#f8fafc'}}>
            {['MACRO TEMA','DÍA','TEMA','DETALLE','HERRAM.','TIEMPO',''].map((h,i)=>(<div key={i} style={{fontSize:10, color:'#64748b', textTransform:'uppercase', fontWeight:800, letterSpacing:'0.05em'}}>{h}</div>))}
          </div>
          {data.map((row, idx) => (
            <div key={idx} style={{
              display:'grid', gridTemplateColumns:'120px 60px 150px 1fr 100px 80px 40px', gap:12, alignItems:'center', 
              padding:'12px 16px', borderBottom:'1px solid #e2e8f0', background:idx%2===0?'#ffffff':'#f8fafc',
              transition: 'background 0.2s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#f1f5f9'}
            onMouseLeave={e => e.currentTarget.style.background = idx%2===0?'#ffffff':'#f8fafc'}
            >
              <input value={row.macroTema} onChange={e=>updateField(idx,'macroTema',e.target.value)} style={{...inp({border: '1px solid #cbd5e1', borderRadius: 6, padding: '8px 12px'}),width:'100%',fontSize:12}}/>
              <input value={row.dia} onChange={e=>updateField(idx,'dia',e.target.value)} style={{...inp({border: '1px solid #cbd5e1', borderRadius: 6, padding: '8px 12px'}),width:'100%',fontSize:12}}/>
              <input value={row.tema} onChange={e=>updateField(idx,'tema',e.target.value)} style={{...inp({border: '1px solid #cbd5e1', borderRadius: 6, padding: '8px 12px'}),width:'100%',fontSize:12}}/>
              <textarea value={row.detalhe} onChange={e=>updateField(idx,'detalhe',e.target.value)} style={{...inp({border: '1px solid #cbd5e1', borderRadius: 6, padding: '8px 12px'}),width:'100%',fontSize:12,height:36,resize:'none'}}/>
              <input value={row.herramientas} onChange={e=>updateField(idx,'herramientas',e.target.value)} style={{...inp({border: '1px solid #cbd5e1', borderRadius: 6, padding: '8px 12px'}),width:'100%',fontSize:12}}/>
              <input value={row.tiempo} onChange={e=>updateField(idx,'tiempo',e.target.value)} style={{...inp({border: '1px solid #cbd5e1', borderRadius: 6, padding: '8px 12px'}),width:'100%',fontSize:12}}/>
              <button onClick={()=>removeRow(idx)} style={{
                background:'#fee2e2', border:'none', width:36, height:36, cursor:'pointer', borderRadius:6, color:'#ef4444',
                display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#fca5a5'}
              onMouseLeave={e => e.currentTarget.style.background = '#fee2e2'}
              >🗑</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const AdminAdvancedContent = ({ sectorId, courseIdx, config, updateConfig, onBack }) => {
  const sk = sectorId==='fieldSupport'?'fsc':(sectorId==='soporte'?'soporteContent':'frontLineContent');
  const rawData = config?.[sk]?.[courseIdx];
  const data = Array.isArray(rawData) ? rawData : [];
  const inp = (extra={}) => ({background:'#ffffff', border:'1px solid #ED1650', padding:'6px 10px', fontFamily:'inherit', fontSize:12, color:'#0F004F', outline:'none', borderRadius:3, ...extra});
  
  const updateF = (val) => {
    const next = [...config[sk]];
    next[courseIdx] = val;
    updateConfig(sk, next);
  };

  if(sectorId==='fieldSupport') {
    // FSC Editor
    const addSection = () => updateF([...data, {label:'Nueva Misión', rows:[]}]);
    const removeSection = (si) => updateF(data.filter((_,i)=>i!==si));
    const addRow = (si) => {
      const next = [...data];
      next[si].rows = [...next[si].rows, {tema:'Nuevo', detalhe:'-', ch:'0:00:00'}];
      updateF(next);
    };
    const updateRow = (si, ri, f, v) => {
      const next = [...data];
      next[si].rows[ri] = {...next[si].rows[ri], [f]:v};
      updateF(next);
    };
    return (
      <div style={{minHeight:'100vh', background:'#F4F5F9', fontFamily: '"Inter", sans-serif'}}>
        <div style={{
          background:'#0B0033', 
          padding:'16px 32px', 
          display:'flex', 
          alignItems:'center', 
          gap:24,
          borderBottom: '4px solid #B20F3B',
          boxShadow: '0 4px 20px rgba(178,15,59,0.15)'
        }}>
          <button onClick={onBack} style={{ 
            background: '#ffffff', border: 'none', color: '#0B0033', padding: '8px 20px', 
            borderRadius: 4, cursor: 'pointer', fontSize: 13, fontWeight: 800, textTransform: 'uppercase',
            display: 'flex', alignItems: 'center', gap: 8
          }}>
            ← VOLVER
          </button>
          <span style={{color:'#ffffff', fontSize:16, fontWeight:800, letterSpacing: '0.05em'}}>EDITOR FSC: <span style={{ color: '#B20F3B' }}>{courseIdx}</span></span>
          <button onClick={addSection} style={{
            marginLeft:'auto', background:'#B20F3B', color:'#ffffff', border:'none', padding:'10px 20px', 
            cursor:'pointer', fontSize:12, fontWeight:800, borderRadius:6, letterSpacing:'0.05em',
            boxShadow: '0 4px 15px rgba(178,15,59,0.2)', transition: 'all 0.2s ease'
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >+ AGREGAR MISIÓN</button>
        </div>
        <div style={{padding:'32px 48px'}}>
          {data.map((sec, si) => (
            <div key={si} style={{
              border:'1px solid #e2e8f0', 
              marginBottom:32, 
              borderRadius:12, 
              overflow:'hidden', 
              background:'#ffffff',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
            }}>
              <div style={{
                background:'#0B0033', 
                padding:'16px 24px', 
                display:'flex', 
                justifyContent:'space-between', 
                alignItems:'center',
                borderBottom: '4px solid #B20F3B'
              }}>
                <input value={sec.label} onChange={e=>{const n=[...data];n[si].label=e.target.value;updateF(n);}} style={{background:'transparent', border:'none', color:'#ffffff', fontSize:16, fontWeight:800, outline:'none', width:'50%', letterSpacing: '0.05em'}}/>
                <button onClick={()=>removeSection(si)} style={{
                  background:'#fee2e2', color:'#ef4444', border:'none', padding:'8px 16px', 
                  cursor:'pointer', fontSize:11, fontWeight:800, borderRadius:6, letterSpacing: '0.05em',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#fca5a5'}
                onMouseLeave={e => e.currentTarget.style.background = '#fee2e2'}
                >ELIMINAR SECCIÓN</button>
              </div>
              <div style={{padding:24}}>
                <table style={{width:'100%', borderCollapse:'collapse'}}>
                  <thead><tr style={{background:'#f8fafc'}}>{['TEMA','DETALLE','TIEMPO',''].map(h=><th key={h} style={{padding:'12px 16px',fontSize:10,textAlign:'left',borderBottom:'2px solid #B20F3B', color:'#64748b', textTransform:'uppercase', fontWeight:800, letterSpacing:'0.05em'}}>{h}</th>)}</tr></thead>
                  <tbody>
                    {(Array.isArray(sec.rows) ? sec.rows : []).map((r,ri)=>(
                      <tr key={ri} style={{ transition: 'background 0.2s ease' }} onMouseEnter={e => e.currentTarget.style.background = '#f1f5f9'} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                        <td style={{padding:'12px 16px',borderBottom:'1px solid #e2e8f0'}}><input value={r.tema} onChange={e=>updateRow(si,ri,'tema',e.target.value)} style={{...inp({border: '1px solid #cbd5e1', borderRadius: 6, padding: '8px 12px'}),width:'100%',fontSize:12}}/></td>
                        <td style={{padding:'12px 16px',borderBottom:'1px solid #e2e8f0'}}><input value={r.detalhe} onChange={e=>updateRow(si,ri,'detalhe',e.target.value)} style={{...inp({border: '1px solid #cbd5e1', borderRadius: 6, padding: '8px 12px'}),width:'100%',fontSize:12}}/></td>
                        <td style={{padding:'12px 16px',borderBottom:'1px solid #e2e8f0'}}><input value={r.ch} onChange={e=>updateRow(si,ri,'ch',e.target.value)} style={{...inp({border: '1px solid #cbd5e1', borderRadius: 6, padding: '8px 12px'}),width:'100%',fontSize:12}}/></td>
                        <td style={{padding:'12px 16px',borderBottom:'1px solid #e2e8f0'}}><button onClick={()=>{const n=[...data];n[si].rows=n[si].rows.filter((_,i)=>i!==ri);updateF(n);}} style={{
                          background:'#fee2e2', border:'none', width:36, height:36, cursor:'pointer', borderRadius:6, color:'#ef4444',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = '#fca5a5'}
                        onMouseLeave={e => e.currentTarget.style.background = '#fee2e2'}
                        >🗑</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button onClick={()=>addRow(si)} style={{
                  marginTop:20, background:'#ffffff', border:'1px solid #B20F3B', padding:'10px 20px', 
                  cursor:'pointer', fontSize:12, fontWeight:800, borderRadius:6, color:'#B20F3B',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#B20F3B'; e.currentTarget.style.color = '#ffffff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.color = '#B20F3B'; }}
                >+ AGREGAR FILA</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{minHeight:'100vh', background:'#F4F5F9', fontFamily: '"Inter", sans-serif'}}>
      <div style={{
        background:'#0B0033', 
        padding:'16px 32px', 
        display:'flex', 
        alignItems:'center', 
        gap:24,
        borderBottom: '4px solid #B20F3B',
        boxShadow: '0 4px 20px rgba(178,15,59,0.15)'
      }}>
        <button onClick={onBack} style={{ 
          background: '#ffffff', border: 'none', color: '#0B0033', padding: '8px 20px', 
          borderRadius: 4, cursor: 'pointer', fontSize: 13, fontWeight: 800, textTransform: 'uppercase',
          display: 'flex', alignItems: 'center', gap: 8
        }}>
          ← VOLVER
        </button>
        <span style={{color:'#ffffff', fontSize:16, fontWeight:800, letterSpacing: '0.05em'}}>EDITOR CONTENIDO: <span style={{ color: '#B20F3B' }}>{sectorId} - {courseIdx}</span></span>
      </div>
      <div style={{padding:60, textAlign:'center', color:'#64748b'}}>
        <div style={{fontSize:16, fontWeight: 600}}>Módulo de edición detallada para este sector en desarrollo.</div>
      </div>
    </div>
  );
};
