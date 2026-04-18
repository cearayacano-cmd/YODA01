import React, { useState } from 'react';
import { BackBtn } from './Shared';
import { motion } from 'framer-motion';
import { ArrowLeft, Save, CheckCircle2, Plus, Trash2, Database, Layers, Satellite, Edit3, Briefcase } from 'lucide-react';

export const AdminSatelites = (props) => {
  const { initialPortal, satelitesData, setSatelitesData, onBack, pk: oldPk, satelites: oldSatelites, setSatelites: oldSetSatelites } = props;
  const pk = initialPortal || oldPk || 'conhecendo';
  const satelites = satelitesData || oldSatelites || { conhecendo:[], imersao:[] };
  const data = Array.isArray(satelites[pk]) ? satelites[pk] : [];
  
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
    <div style={{minHeight:'100vh', background:'#F8F7FF', fontFamily: '"Inter", sans-serif'}}>
      {/* Corporate Header */}
      <div style={{
        background:'#1B0088', 
        padding:'18px 40px', 
        display:'flex', 
        alignItems:'center', 
        gap:32,
        borderBottom: '4px solid #99CC33',
        boxShadow: '0 8px 32px rgba(27,0,136,0.15)',
        zIndex: 100
      }}>
        <button onClick={onBack} style={{ 
          background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#ffffff', padding: '10px 24px', 
          borderRadius: 8, cursor: 'pointer', fontSize: 13, fontWeight: 800, textTransform: 'uppercase',
          display: 'flex', alignItems: 'center', gap: 10, transition: 'all 0.2s'
        }} onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#1B0088' }} onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff' }}>
          <ArrowLeft size={16} /> VOLVER
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Satellite size={22} color="#99CC33" />
          <span style={{color:'#ffffff', fontSize:18, fontWeight:900, letterSpacing: '0.05em'}}>EDITOR SATÉLITE <span style={{ color: 'rgba(255,255,255,0.3)', margin: '0 8px' }}>/</span> <span style={{ color: '#99CC33' }}>{pk.toUpperCase()}</span></span>
        </div>
      </div>

      <div style={{padding:'40px 60px'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:32}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <div style={{ background: 'rgba(27,0,136,0.05)', color: '#1B0088', padding: '12px', borderRadius: 12 }}>
              <Layers size={20} />
            </div>
            <div>
              <div style={{fontSize:16, fontWeight:900, color:'#1B0088'}}>NODOS DEL SATÉLITE</div>
              <div style={{fontSize:12, color:'#64748b'}}>{data.length} elementos configurados</div>
            </div>
          </div>
          <button onClick={addRow} style={{
            background:'#1B0088', color:'#ffffff', border:'none', padding:'14px 28px', 
            cursor:'pointer', fontSize:13, fontWeight:900, borderRadius:12, letterSpacing:'0.02em',
            boxShadow: '0 8px 25px rgba(27,0,136,0.2)', transition: 'all 0.2s ease',
            display: 'flex', alignItems: 'center', gap: 10
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <Plus size={18} /> AGREGAR NUEVO NODO
          </button>
        </div>

        <div style={{
          border:'1px solid rgba(27,0,136,0.08)', 
          borderRadius:20, 
          overflow:'hidden', 
          background:'#ffffff',
          boxShadow: '0 10px 40px rgba(0,0,0,0.04)'
        }}>
          <div style={{display:'grid', gridTemplateColumns:'140px 80px 180px 1fr 140px 100px 60px', gap:16, padding:'16px 24px', background:'#1B0088'}}>
            {['MACRO TEMA','DÍA','TEMA','DETALLES DEL CURSO','HERRAMIENTAS','TIEMPO',''].map((h,i)=>(
              <div key={i} style={{fontSize:10, color:'#ffffff', textTransform:'uppercase', fontWeight:900, letterSpacing:'0.1em'}}>{h}</div>
            ))}
          </div>
          {data.map((row, idx) => (
            <div key={idx} style={{
              display:'grid', gridTemplateColumns:'140px 80px 180px 1fr 140px 100px 60px', gap:16, alignItems:'center', 
              padding:'16px 24px', borderBottom:'1px solid #E2E8F0', background:idx%2===0?'#ffffff':'rgba(27,0,136,0.01)',
              transition: 'background 0.2s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(27,0,136,0.03)'}
            onMouseLeave={e => e.currentTarget.style.background = idx%2===0?'#ffffff':'rgba(27,0,136,0.01)'}
            >
              <input value={row.macroTema} onChange={e=>updateField(idx,'macroTema',e.target.value)} style={{...inp({ fontWeight: 700 }),width:'100%'}}/>
              <input value={row.dia} onChange={e=>updateField(idx,'dia',e.target.value)} style={{...inp({ textAlign: 'center' }),width:'100%'}}/>
              <input value={row.tema} onChange={e=>updateField(idx,'tema',e.target.value)} style={{...inp({ fontWeight: 800 }),width:'100%'}}/>
              <textarea value={row.detalhe} onChange={e=>updateField(idx,'detalhe',e.target.value)} style={{...inp({ minHeight:44, lineHeight: '1.4' }),width:'100%', resize:'vertical'}}/>
              <input value={row.herramientas} onChange={e=>updateField(idx,'herramientas',e.target.value)} style={{...inp(),width:'100%'}}/>
              <input value={row.tiempo} onChange={e=>updateField(idx,'tiempo',e.target.value)} style={{...inp({ fontWeight: 700, textAlign: 'center' }),width:'100%'}}/>
              <button onClick={()=>removeRow(idx)} style={{
                background:'#fee2e2', border:'none', width:44, height:44, cursor:'pointer', borderRadius:12, color:'#ef4444',
                display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#FCA5A5'}
              onMouseLeave={e => e.currentTarget.style.background = '#fee2e2'}
              >
                <Trash2 size={20} />
              </button>
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
      <div style={{minHeight:'100vh', background:'#F8F7FF', fontFamily: '"Inter", sans-serif'}}>
        {/* Corporate Header */}
        <div style={{
          background:'#1B0088', 
          padding:'18px 40px', 
          display:'flex', 
          alignItems:'center', 
          gap:32,
          borderBottom: '4px solid #99CC33',
          boxShadow: '0 8px 32px rgba(27,0,136,0.15)',
          zIndex: 100
        }}>
          <button onClick={onBack} style={{ 
            background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#ffffff', padding: '10px 24px', 
            borderRadius: 8, cursor: 'pointer', fontSize: 13, fontWeight: 800, textTransform: 'uppercase',
            display: 'flex', alignItems: 'center', gap: 10, transition: 'all 0.2s'
          }} onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#1B0088' }} onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff' }}>
            <ArrowLeft size={16} /> VOLVER
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Briefcase size={22} color="#99CC33" />
            <span style={{color:'#ffffff', fontSize:18, fontWeight:900, letterSpacing: '0.05em'}}>EDITOR CONTENIDO FSC <span style={{ color: 'rgba(255,255,255,0.3)', margin: '0 8px' }}>/</span> <span style={{ color: '#99CC33' }}>PLANETA {courseIdx}</span></span>
          </div>
          <button onClick={addSection} style={{
            marginLeft:'auto', background:'#99CC33', color:'#ffffff', border:'none', padding:'14px 28px', 
            cursor:'pointer', fontSize:13, fontWeight:900, borderRadius:10, letterSpacing:'0.02em',
            boxShadow: '0 8px 20px rgba(153,204,51,0.2)', transition: 'all 0.2s ease',
            display: 'flex', alignItems: 'center', gap: 10
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <Plus size={18} /> AGREGAR NUEVA MISIÓN
          </button>
        </div>

        <div style={{padding:'40px 60px'}}>
          {data.map((sec, si) => (
            <div key={si} style={{
              border:'1px solid rgba(27,0,136,0.1)', 
              marginBottom:48, 
              borderRadius:24, 
              overflow:'hidden', 
              background:'#ffffff',
              boxShadow: '0 10px 40px rgba(0,0,0,0.04)'
            }}>
              <div style={{
                background:'#1B0088', 
                padding:'20px 32px', 
                display:'flex', 
                justifyContent:'space-between', 
                alignItems:'center',
                borderBottom: '4px solid #99CC33'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, flex: 1 }}>
                  <div style={{ background: 'rgba(255,255,255,0.1)', padding: 10, borderRadius: 10 }}>
                    <Edit3 size={18} color="#99CC33" />
                  </div>
                  <input 
                    value={sec.label} 
                    onChange={e=>{const n=[...data];n[si].label=e.target.value;updateF(n);}} 
                    style={{background:'transparent', border:'none', color:'#ffffff', fontSize:18, fontWeight:900, outline:'none', width:'60%', letterSpacing: '0.02em'}}
                    placeholder="Nombre de la Misión"
                  />
                </div>
                <button onClick={()=>removeSection(si)} style={{
                  background:'rgba(255,255,255,0.1)', color:'#FCA5A5', border:'1px solid rgba(255,255,255,0.2)', padding:'10px 20px', 
                  cursor:'pointer', fontSize:12, fontWeight:800, borderRadius:8, letterSpacing: '0.05em',
                  transition: 'all 0.2s ease', display: 'flex', alignItems: 'center', gap: 8
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#EF4444E0', e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)', e.currentTarget.style.color = '#FCA5A5'}
                >
                  <Trash2 size={14} /> ELIMINAR MISIÓN
                </button>
              </div>
              <div style={{padding:32}}>
                <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid #E2E8F0', background: '#F8FAFC' }}>
                  <table style={{width:'100%', borderCollapse:'collapse'}}>
                    <thead>
                      <tr style={{background:'#1B0088'}}>
                        {['TEMA / ACTIVIDAD','DETALLES DEL PROCESO','TIEMPO CH',''].map(h=>(
                          <th key={h} style={{padding:'16px 20px',fontSize:10,textAlign:'left', color:'#ffffff', textTransform:'uppercase', fontWeight:900, letterSpacing:'0.1em'}}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {(Array.isArray(sec.rows) ? sec.rows : []).map((r,ri)=>(
                        <tr key={ri} style={{ transition: 'background 0.2s ease', borderBottom: '1px solid #E2E8F0' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(27,0,136,0.03)'} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                          <td style={{padding:'16px 20px'}}><input value={r.tema} onChange={e=>updateRow(si,ri,'tema',e.target.value)} style={{...inp({fontWeight: 800}),width:'100%'}}/></td>
                          <td style={{padding:'16px 20px'}}><textarea value={r.detalhe} onChange={e=>updateRow(si,ri,'detalhe',e.target.value)} style={{...inp({ minHeight: 44 }),width:'100%', resize: 'vertical'}}/></td>
                          <td style={{padding:'16px 20px'}}><input value={r.ch} onChange={e=>updateRow(si,ri,'ch',e.target.value)} style={{...inp({ fontWeight: 900, textAlign: 'center' }),width:'100%'}}/></td>
                          <td style={{padding:'16px 20px', textAlign: 'center'}}>
                            <button onClick={()=>{const n=[...data];n[si].rows=n[si].rows.filter((_,i)=>i!==ri);updateF(n);}} style={{
                              background:'#fee2e2', border:'none', width:40, height:40, cursor:'pointer', borderRadius:10, color:'#ef4444',
                              display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s ease'
                            }}
                            onMouseEnter={e => e.currentTarget.style.background = '#fca5a5'}
                            onMouseLeave={e => e.currentTarget.style.background = '#fee2e2'}
                            >
                              <Trash2 size={18} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <button onClick={()=>addRow(si)} style={{
                  marginTop:24, background:'#ffffff', border:'2px solid #1B0088', padding:'14px 28px', 
                  cursor:'pointer', fontSize:13, fontWeight:900, borderRadius:12, color:'#1B0088',
                  transition: 'all 0.2s ease', display: 'flex', alignItems: 'center', gap: 10
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#1B0088'; e.currentTarget.style.color = '#ffffff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.color = '#1B0088'; }}
                >
                  <Plus size={18} /> AGREGAR NUEVA FILA
                </button>
              </div>
            </div>
          ))}
          <div style={{ height: 60 }} />
        </div>
      </div>
    );
  }

  return (
    <div style={{minHeight:'100vh', background:'#F8F7FF', fontFamily: '"Inter", sans-serif'}}>
      {/* Corporate Header */}
      <div style={{
        background:'#1B0088', 
        padding:'18px 40px', 
        display:'flex', 
        alignItems:'center', 
        gap:32,
        borderBottom: '4px solid #99CC33',
        boxShadow: '0 8px 32px rgba(27,0,136,0.15)',
        zIndex: 100
      }}>
        <button onClick={onBack} style={{ 
          background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#ffffff', padding: '10px 24px', 
          borderRadius: 8, cursor: 'pointer', fontSize: 13, fontWeight: 800, textTransform: 'uppercase',
          display: 'flex', alignItems: 'center', gap: 10, transition: 'all 0.2s'
        }} onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#1B0088' }} onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff' }}>
          <ArrowLeft size={16} /> VOLVER
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Edit3 size={22} color="#99CC33" />
          <span style={{color:'#ffffff', fontSize:18, fontWeight:900, letterSpacing: '0.05em'}}>EDITOR CONTENIDO: <span style={{ color: 'rgba(255,255,255,0.3)', margin: '0 8px' }}>/</span> <span style={{ color: '#99CC33' }}>{sectorId} - {courseIdx}</span></span>
        </div>
      </div>
      <div style={{padding:80, textAlign:'center', color:'#1B0088', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24}}>
        <div style={{ background: 'rgba(27,0,136,0.05)', padding: 32, borderRadius: '50%' }}>
          <Settings size={64} className="animate-spin-slow" />
        </div>
        <div style={{fontSize:20, fontWeight: 900}}>Módulo de edición detallada para este sector en desarrollo.</div>
        <div style={{fontSize:15, color: '#64748b', maxWidth: 500}}>Esta vista está siendo actualizada para cumplir con el estándar corporativo de alta fidelidad.</div>
        <button onClick={onBack} style={{ marginTop: 20, background: '#1B0088', color: '#fff', border: 'none', padding: '14px 40px', borderRadius: 12, fontWeight: 900, cursor: 'pointer' }}>VOLVER AL EDITOR DE BASE DE DATOS</button>
      </div>
    </div>
  );
};
