import React, { useState } from 'react';
import { BackBtn } from './Shared';
import { motion } from 'motion/react';
import { Globe, Satellite, Layers, Plus, Trash2, Edit3, Settings, Database } from 'lucide-react';

export const AdminExploracion = ({ currentStationConfig, updateStationConfig, onBack, onSatelites, onAdvancedContent }: any) => {
  const [activeSector, setActiveSector] = useState('frontLine');
  const exploracion = currentStationConfig.exploracion || { frontLine:[], soporte:[], fieldSupport:[] };
  const satelites = currentStationConfig.satelites || { conhecendo:[], imersao:[] };
  const galaxyConfig = exploracion[activeSector] || [];
  
  const updateCourseLabel = (idx: any, val: any) => {
    const next = {...exploracion};
    next[activeSector] = (Array.isArray(next[activeSector]) ? next[activeSector] : []).map((c: any,i: any)=>i===idx?{...c,label:val}:c);
    updateStationConfig('exploracion', next);
  };
  
  const addCourse = () => {
    const next = {...exploracion};
    next[activeSector] = [...(next[activeSector]||[]), {label:'NUEVO PLANETA'}];
    updateStationConfig('exploracion', next);
    const advDataKey = activeSector === 'soporte' ? 'soporteContent' : activeSector === 'frontLine' ? 'frontLineContent' : 'fsc';
    const advData = Array.isArray(currentStationConfig[advDataKey]) ? [...currentStationConfig[advDataKey]] : [];
    advData.push([]);
    updateStationConfig(advDataKey, advData);
  };
  
  const removeCourse = (idx: any) => {
    const next = {...exploracion};
    next[activeSector] = next[activeSector].filter((_: any,i: any)=>i!==idx);
    updateStationConfig('exploracion', next);
    const advDataKey = activeSector === 'soporte' ? 'soporteContent' : activeSector === 'frontLine' ? 'frontLineContent' : 'fsc';
    const advData = Array.isArray(currentStationConfig[advDataKey]) ? currentStationConfig[advDataKey].filter((_: any,i: any)=>i!==idx) : [];
    updateStationConfig(advDataKey, advData);
  };
  
  const inp = (extra={}) => ({
    background:'#ffffff', 
    border:'1px solid #e2e8f0', 
    padding:'8px 12px', 
    fontFamily:'inherit', 
    fontSize:13, 
    color:'#0B0033', 
    outline:'none', 
    borderRadius:6, 
    transition: 'all 0.2s ease',
    boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.05)',
    ...extra
  });
  
  const advDataKey = activeSector === 'soporte' ? 'soporteContent' : activeSector === 'frontLine' ? 'frontLineContent' : 'fsc';
  const advData = currentStationConfig[advDataKey] || [];
  
  return (
    <div style={{minHeight:'100vh', background:'#F4F5F9', display:'flex', flexDirection:'column', fontFamily: '"Inter", sans-serif'}}>
      {/* Header */}
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
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Database size={20} color="#B20F3B" />
          <span style={{color:'#ffffff', fontSize:16, fontWeight:800, letterSpacing: '0.05em'}}>EDITOR DE BASE DE DATOS <span style={{ color: '#B20F3B' }}>//</span> EXPLORACIÓN</span>
        </div>
      </div>
      
      <div style={{display:'flex', flex:1, overflow: 'hidden'}}>
        {/* Sidebar */}
        <div style={{
          width:240, 
          background:'#0B0033', 
          padding: '24px 16px', 
          flexShrink:0,
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          borderRight: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{fontSize:11, color:'#B20F3B', letterSpacing:'0.2em', textTransform:'uppercase', marginBottom:16, fontWeight:800, paddingLeft: 12}}>
            SECTORES
          </div>
          {['frontLine','soporte','fieldSupport'].map(s => (
            <motion.div 
              key={s} 
              whileHover={{ x: 4 }}
              onClick={()=>{setActiveSector(s);}}
              style={{
                padding:'12px 16px', 
                cursor:'pointer', 
                borderRadius: 6, 
                fontWeight: activeSector===s ? 800 : 500, 
                background: activeSector===s ? 'rgba(178,15,59,0.1)' : 'transparent', 
                color: activeSector===s ? '#B20F3B' : '#a0aabf',
                borderLeft: `3px solid ${activeSector===s ? '#B20F3B' : 'transparent'}`,
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                transition: 'all 0.2s ease'
              }}
            >
              <Layers size={18} color={activeSector===s ? '#B20F3B' : '#a0aabf'} />
              {s==='frontLine'?'Front Line':s==='soporte'?'Soporte':'Field Support'}
            </motion.div>
          ))}
        </div>
        
        {/* Main Content */}
        <div style={{flex:1, padding: '32px 48px', overflowY:'auto'}}>
          
          {activeSector==='frontLine' && (
            <div style={{
              background: '#ffffff',
              borderRadius: 12,
              padding: 24,
              marginBottom: 32,
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20}}>
                <Satellite size={18} color="#B20F3B" />
                <div style={{fontSize:13, color:'#0B0033', textTransform:'uppercase', letterSpacing:'0.1em', fontWeight:800}}>
                  SATÉLITES AUXILIARES · FORMAÇÃO BASE
                </div>
              </div>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:20}}>
                {[{pk:'conhecendo', l:'Conhecendo...'}, {pk:'imersao', l:'Imersão...'}].map(({pk, l}) => (
                  <div key={pk} style={{
                    background: '#ffffff',
                    borderRadius: 16,
                    padding: 24,
                    border: '1px solid #e2e8f0',
                    borderTop: '4px solid #0B0033',
                    boxShadow: '0 10px 30px rgba(11,0,51,0.03)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 15px 35px rgba(11,0,51,0.06)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(11,0,51,0.03)'; }}
                  >
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                      <div style={{fontSize:16, color:'#0B0033', fontWeight:900}}>{l}</div>
                      <div style={{background: 'rgba(178,15,59,0.1)', color: '#B20F3B', padding: '4px 10px', borderRadius: 20, fontSize: 11, fontWeight: 800}}>
                        {(satelites[pk]||[]).length} NODOS
                      </div>
                    </div>
                    <button 
                      onClick={()=>onSatelites(pk)} 
                      style={{
                        background:'rgba(11,0,51,0.05)', color:'#0B0033', border:'none', 
                        padding:'12px 16px', cursor:'pointer', fontSize:12, fontWeight:800, 
                        borderRadius:8, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                        transition: 'all 0.2s ease', width: '100%'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = '#0B0033'; e.currentTarget.style.color = '#ffffff'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(11,0,51,0.05)'; e.currentTarget.style.color = '#0B0033'; }}
                    >
                      <Edit3 size={16} /> EDITAR CONTENIDO
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:24}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Globe size={20} color="#B20F3B" />
              <div style={{fontSize:16, fontWeight:800, textTransform:'uppercase', color: '#0B0033'}}>
                {activeSector==='frontLine'?'Front Line':activeSector==='soporte'?'Soporte':'Field Support'} 
                <span style={{ color: '#94a3b8', marginLeft: 8 }}>— {galaxyConfig.length} planetas</span>
              </div>
            </div>
            <button 
              onClick={addCourse} 
              style={{
                background:'#B20F3B', color:'#ffffff', border:'none', 
                padding:'10px 20px', cursor:'pointer', fontSize:12, fontWeight:800, 
                borderRadius:6, display: 'flex', alignItems: 'center', gap: 8,
                boxShadow: '0 4px 12px rgba(178,15,59,0.3)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <Plus size={16} /> AGREGAR PLANETA
            </button>
          </div>
          
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))', gap:20}}>
            {galaxyConfig.map((course: any, i: number) => {
              const getAdvCount = (d: any) => d?.secciones ? d.secciones.length : (Array.isArray(d) ? d.length : (d?.rows?1:0));
              return (
                <div key={i} style={{
                  background: '#ffffff',
                  borderRadius: 16,
                  padding: 24,
                  border: '1px solid #e2e8f0',
                  borderTop: '4px solid #B20F3B',
                  boxShadow: '0 10px 30px rgba(11,0,51,0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 20,
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 15px 35px rgba(11,0,51,0.06)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(11,0,51,0.03)'; }}
                >
                  <div>
                    <div style={{fontSize:10, color:'#64748b', textTransform:'uppercase', marginBottom:6, fontWeight: 700}}>NOMBRE DEL PLANETA</div>
                    <input 
                      value={course.label} 
                      onChange={e=>updateCourseLabel(i,e.target.value)} 
                      style={{...inp(), width:'100%', fontSize:16, fontWeight:900, color: '#0B0033', padding: '10px 12px', borderRadius: 8, border: '1px solid #e2e8f0', background: '#f8fafc'}}
                      onFocus={(e) => { e.target.style.borderColor = '#B20F3B'; e.target.style.background = '#ffffff'; }}
                      onBlur={(e) => { e.target.style.borderColor = '#e2e8f0'; e.target.style.background = '#f8fafc'; }}
                    />
                  </div>
                  <div style={{display:'flex', gap:12}}>
                    <button 
                      onClick={()=>onAdvancedContent(activeSector, i)} 
                      style={{
                        flex:1, background:'rgba(178,15,59,0.05)', border:'1px solid rgba(178,15,59,0.1)', 
                        padding:'10px 12px', cursor:'pointer', fontSize:12, fontWeight: 800,
                        borderRadius:8, color:'#B20F3B', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(178,15,59,0.1)'; e.currentTarget.style.borderColor = 'rgba(178,15,59,0.2)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(178,15,59,0.05)'; e.currentTarget.style.borderColor = 'rgba(178,15,59,0.1)'; }}
                    >
                      <Edit3 size={14} /> Contenido ({getAdvCount(advData?.[i])})
                    </button>
                    <button 
                      onClick={()=>removeCourse(i)} 
                      style={{
                        background:'#fee2e2', border:'none', padding:'10px 14px', 
                        cursor:'pointer', borderRadius:8, color:'#ef4444',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'all 0.2s ease'
                      }}
                      title="Eliminar planeta"
                      onMouseEnter={(e) => { e.currentTarget.style.background = '#fecaca'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = '#fee2e2'; }}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </div>
  );
};
