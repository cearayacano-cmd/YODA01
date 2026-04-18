import React, { useState } from 'react';
import { BackBtn } from './Shared';
import { motion } from 'framer-motion';
import { Globe, Satellite, Layers, Plus, Trash2, Edit3, Settings, Database, ArrowLeft, CheckCircle2 } from 'lucide-react';

export const AdminExploracion = ({ currentStationConfig, updateStationConfig, onBack, onSatelites, onAdvancedContent }: any) => {
  const [activeSector, setActiveSector] = useState('frontLine');
  const exploracion = currentStationConfig.exploracion || { frontLine:[], soporte:[], fieldSupport:[] };
  const satelites = currentStationConfig.satelites || { conhecendo:[], imersao:[] };
  const galaxyConfig = exploracion[activeSector] || [];
  
  const updateCourseField = (idx: any, field: string, val: any) => {
    const next = {...exploracion};
    next[activeSector] = (Array.isArray(next[activeSector]) ? next[activeSector] : []).map((c: any,i: any)=>i===idx?{...c,[field]:val}:c);
    updateStationConfig('exploracion', next);
  };
  
  const addCourse = () => {
    const next = {...exploracion};
    next[activeSector] = [...(next[activeSector]||[]), {label:'NUEVO PLANETA', color: '#ED1650'}];
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
    padding:'10px 14px', 
    fontFamily:'inherit', 
    fontSize:14, 
    color:'#1B0088', 
    outline:'none', 
    borderRadius:10, 
    transition: 'all 0.2s ease',
    ...extra
  });
  
  const advDataKey = activeSector === 'soporte' ? 'soporteContent' : activeSector === 'frontLine' ? 'frontLineContent' : 'fsc';
  const advData = currentStationConfig[advDataKey] || [];
  
  return (
    <div style={{minHeight:'100vh', background:'#F8F7FF', display:'flex', flexDirection:'column', fontFamily: '"Inter", sans-serif'}}>
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
          <Database size={22} color="#99CC33" />
          <span style={{color:'#ffffff', fontSize:18, fontWeight:900, letterSpacing: '0.05em'}}>EDITOR DE BASE DE DATOS <span style={{ color: 'rgba(255,255,255,0.3)', margin: '0 8px' }}>/</span> EXPLORACIÓN</span>
        </div>
      </div>
      
      <div style={{display:'flex', flex:1, overflow: 'hidden'}}>
        {/* Sidebar Sectors */}
        <div style={{
          width:260, 
          background:'#1B0088', 
          padding: '32px 16px', 
          flexShrink:0,
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          borderRight: '1px solid rgba(255,255,255,0.05)',
          boxShadow: '10px 0 30px rgba(0,0,0,0.05)',
          zIndex: 50
        }}>
          <div style={{fontSize:10, color:'rgba(255,255,255,0.4)', letterSpacing:'0.25em', textTransform:'uppercase', marginBottom:12, fontWeight:900, paddingLeft: 16}}>
            SECTORES DE RED
          </div>
          {['frontLine','soporte','fieldSupport'].map(s => (
            <motion.div 
              key={s} 
              whileHover={{ x: 6, background: 'rgba(255,255,255,0.05)' }}
              onClick={()=>{setActiveSector(s);}}
              style={{
                padding:'14px 20px', 
                cursor:'pointer', 
                borderRadius: 10, 
                fontWeight: activeSector===s ? 800 : 500, 
                background: activeSector===s ? 'rgba(153,204,51,0.15)' : 'transparent', 
                color: activeSector===s ? '#99CC33' : 'rgba(255,255,255,0.6)',
                borderLeft: `4px solid ${activeSector===s ? '#99CC33' : 'transparent'}`,
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <Layers size={20} color={activeSector===s ? '#99CC33' : 'rgba(255,255,255,0.4)'} />
              <span style={{ fontSize: 13, letterSpacing: '0.05em' }}>{s==='frontLine'?'Front Line':s==='soporte'?'Soporte':'Field Support'}</span>
            </motion.div>
          ))}
        </div>
        
        {/* Main Content Area */}
        <div style={{flex:1, padding: '40px 60px', overflowY:'auto', background: '#F8F7FF'}}>
          
          {activeSector==='frontLine' && (
            <div style={{
              background: '#ffffff',
              borderRadius: 24,
              padding: 32,
              marginBottom: 48,
              boxShadow: '0 10px 40px rgba(27,0,136,0.04)',
              border: '1px solid rgba(27,0,136,0.08)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '6px', height: '100%', background: '#1B0088' }} />
              <div style={{display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28}}>
                <Satellite size={20} color="#1B0088" />
                <div style={{fontSize:14, color:'#1B0088', textTransform:'uppercase', letterSpacing:'0.12em', fontWeight:900}}>
                  SATELLITE SYSTEMS · FORMAÇÃO BASE
                </div>
              </div>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:28}}>
                {[{pk:'conhecendo', l:'Conhecendo...'}, {pk:'imersao', l:'Imersão...'}].map(({pk, l}) => (
                  <div key={pk} style={{
                    background: '#F8FAFC',
                    borderRadius: 20,
                    padding: 32,
                    border: '1px solid #E2E8F0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 24,
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#1B0088'; e.currentTarget.style.background = '#ffffff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.background = '#F8FAFC'; }}
                  >
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                      <div style={{fontSize:18, color:'#1B0088', fontWeight:900}}>{l}</div>
                      <div style={{background: 'rgba(153,204,51,0.15)', color: '#99CC33', padding: '6px 14px', borderRadius: 12, fontSize: 12, fontWeight: 900}}>
                        {(satelites[pk]||[]).length} NODOS ACTIVOS
                      </div>
                    </div>
                    <button 
                      onClick={()=>onSatelites(pk)} 
                      style={{
                        background:'#1B0088', color:'#ffffff', border:'none', 
                        padding:'14px 20px', cursor:'pointer', fontSize:13, fontWeight:800, 
                        borderRadius:10, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                        transition: 'all 0.2s ease', width: '100%', boxShadow: '0 4px 12px rgba(27,0,136,0.15)'
                      }}
                    >
                      <Edit3 size={18} /> EDITAR SATÉLITE
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:32}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <Globe size={22} color="#1B0088" />
              <div style={{fontSize:18, fontWeight:900, textTransform:'uppercase', color: '#1B0088', letterSpacing: '-0.02em'}}>
                PLANETAS DEL SECTOR 
                <span style={{ color: '#94a3b8', marginLeft: 12, fontWeight: 500 }}>— {galaxyConfig.length} misiones</span>
              </div>
            </div>
            <button 
              onClick={addCourse} 
              style={{
                background:'#99CC33', color:'#ffffff', border:'none', 
                padding:'14px 32px', cursor:'pointer', fontSize:13, fontWeight:900, 
                borderRadius:10, display: 'flex', alignItems: 'center', gap: 10,
                boxShadow: '0 8px 20px rgba(153,204,51,0.25)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <Plus size={20} /> AGREGAR PLANETA
            </button>
          </div>
          
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(320px, 1fr))', gap:28}}>
            {galaxyConfig.map((course: any, i: number) => {
              const getAdvCount = (d: any) => d?.secciones ? d.secciones.length : (Array.isArray(d) ? d.length : (d?.rows?1:0));
              return (
                <motion.div key={i} layout style={{
                  background: '#ffffff',
                  borderRadius: 24,
                  padding: 32,
                  border: '1px solid rgba(27,0,136,0.08)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 24,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 15px 40px rgba(27,0,136,0.08)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)'; }}
                >
                  <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '60px', height: '4px', background: '#99CC33', borderRadius: '0 0 4px 4px' }} />
                  <div>
                    <div style={{fontSize:10, color:'#64748b', textTransform:'uppercase', marginBottom:10, fontWeight: 800, letterSpacing: '0.1em'}}>NOMBRE DEL PLANETA</div>
                    <input 
                      value={course.label} 
                      onChange={e=>updateCourseField(i,'label',e.target.value)} 
                      style={{...inp({ background: '#F8FAFC', padding: '12px 16px', fontSize: 16, fontWeight: 900, color: '#1B0088' }), width:'100%'}}
                      onFocus={(e) => { e.target.style.borderColor = '#1B0088'; e.target.style.background = '#ffffff'; }}
                      onBlur={(e) => { e.target.style.borderColor = '#E2E8F0'; e.target.style.background = '#F8FAFC'; }}
                    />
                  </div>
                  <div>
                    <div style={{fontSize:10, color:'#64748b', textTransform:'uppercase', marginBottom:12, fontWeight: 800, letterSpacing: '0.1em'}}>COLOR DEL PLANETA</div>
                    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                      {[
                        '#ED1650', '#00D6CC', '#D400FF', '#FFE017', '#99CC33', 
                        '#00A9E0', '#FF8C00', '#FF00FF', '#00FF00', '#FFFFFF'
                      ].map(c => (
                        <motion.div
                          key={c}
                          whileHover={{ scale: 1.2 }}
                          onClick={() => updateCourseField(i, 'color', c)}
                          style={{
                            width: 28, height: 28, borderRadius: '50%', background: c, border: `2px solid ${course.color === c ? '#1B0088' : 'rgba(0,0,0,0.1)'}`,
                            cursor: 'pointer', boxShadow: course.color === c ? `0 0 10px ${c}` : 'none'
                          }}
                        />
                      ))}
                      <input 
                        type="color" 
                        value={course.color || '#ED1650'} 
                        onChange={e => updateCourseField(i, 'color', e.target.value)}
                        style={{ width: 28, height: 28, padding: 0, border: 'none', background: 'transparent', cursor: 'pointer' }}
                      />
                    </div>
                  </div>
                  <div style={{display:'flex', gap:14}}>
                    <button 
                      onClick={()=>onAdvancedContent(activeSector, i)} 
                      style={{
                        flex:1, background:'rgba(27,0,136,0.05)', border:'1.5px solid rgba(27,0,136,0.1)', 
                        padding:'14px 16px', cursor:'pointer', fontSize:12, fontWeight: 900,
                        borderRadius:10, color:'#1B0088', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = '#1B0088'; e.currentTarget.style.color = '#ffffff'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(27,0,136,0.05)'; e.currentTarget.style.color = '#1B0088'; }}
                    >
                      <Edit3 size={16} /> MISIONES ({getAdvCount(advData?.[i])})
                    </button>
                    <button 
                      onClick={()=>removeCourse(i)} 
                      style={{
                        background:'#fee2e2', border:'none', width: 50, height: 50, 
                        cursor:'pointer', borderRadius:10, color:'#ef4444',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = '#fecaca'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = '#fee2e2'; }}
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <div style={{ height: 60 }} />
        </div>
      </div>
    </div>
  );
};
