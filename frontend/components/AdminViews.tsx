import React, { useState } from 'react';
import { BackBtn } from './Shared';
import { motion } from 'motion/react';
import { Save, Rocket, Settings, Database, Edit3, Trash2, Plus, Link as LinkIcon, CheckCircle2, Activity, LayoutGrid, GraduationCap, ArrowUpRight, Globe } from 'lucide-react';

export const AdminCenter = ({ config, setConfig, onBack, onExploracion, onRutaLider }: any) => {
  const [activeStation, setActiveStation] = useState('BR');
  const [saved, setSaved] = useState(false);
  const handleSave = () => { setSaved(true); setTimeout(()=>setSaved(false),2200); };
  const sk = activeStation.toLowerCase();
  const updateF = (field: any, val: any) => setConfig((prev: any)=>({...prev,[sk]:{...prev[sk],[field]:val}}));
  const tempConfig = config;
  const addItem = (field: any) => updateF(field,[...tempConfig[sk][field],{label:'NUEVO_LINK',url:'https://'}]);
  const removeItem = (field: any, idx: any) => updateF(field,tempConfig[sk][field].filter((_: any,i: any)=>i!==idx));
  const updateLink = (f: any, i: any, sub: any, v: any) => {
    const next=[...tempConfig[sk][f]]; next[i]={...next[i],[sub]:v}; updateF(f,next);
  };
  const MODULE_FIELDS = [
    { field:'laboratorio', key:'lab',  defaultTitle:'Lab. de Estrategia',   defaultSub:'Portal de Líderes', color: '#99CC33' },
    { field:'ingenieria',  key:'eng',  defaultTitle:'Taller de Ingeniería',   defaultSub:'Talleres', color: '#B200FF' },
    { field:'suministros', key:'sup',  defaultTitle:'Módulo de Suministros',  defaultSub:'Formularios', color: '#00D6CC' },
    { field:'operaciones', key:'ops',  defaultTitle:'Centro de Operaciones',  defaultSub:'Portal Instructor', color: '#FFE017' },
  ];
  const getModuleMeta = (key: any) => tempConfig[sk]?.moduleMeta?.[key] || {};
  const updateModuleMeta = (key: any, field: any, val: any) => {
    const prev = tempConfig[sk]?.moduleMeta || {};
    updateF('moduleMeta', {...prev, [key]: {...(prev[key]||{}), [field]: val}});
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
          ← CERRAR
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Settings size={20} color="#B20F3B" />
          <span style={{color:'#ffffff', fontSize:16, fontWeight:800, letterSpacing: '0.05em'}}>ADMIN CENTER <span style={{ color: '#B20F3B' }}>//</span> CONFIG {activeStation} STATION</span>
        </div>
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSave} 
          style={{
            marginLeft:'auto', 
            background: saved ? '#00D6CC' : '#B20F3B', 
            color: '#ffffff', 
            border: 'none', 
            padding: '10px 24px', 
            cursor: 'pointer', 
            fontSize: 12, 
            fontWeight: 800, 
            borderRadius: 4,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            boxShadow: `0 0 15px ${saved ? '#00D6CC' : '#B20F3B'}60`,
            transition: 'all 0.3s ease'
          }}
        >
          {saved ? <><CheckCircle2 size={16}/> GUARDADO</> : <><Save size={16}/> GUARDAR CAMBIOS</>}
        </motion.button>
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
            ESTACIONES
          </div>
          {['BR','SSC'].map(st=>(
            <motion.div 
              key={st} 
              whileHover={{ x: 4 }}
              onClick={()=>setActiveStation(st)} 
              style={{
                padding:'12px 16px', 
                cursor:'pointer', 
                borderRadius: 6, 
                fontWeight: activeStation===st ? 800 : 500, 
                background: activeStation===st ? 'rgba(178,15,59,0.1)' : 'transparent', 
                color: activeStation===st ? '#B20F3B' : '#a0aabf',
                borderLeft: `3px solid ${activeStation===st ? '#B20F3B' : 'transparent'}`,
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                transition: 'all 0.2s ease'
              }}
            >
              <Rocket size={18} color={activeStation===st ? '#B20F3B' : '#a0aabf'} />
              {st} STATION
            </motion.div>
          ))}
        </div>
        
        {/* Main Content */}
        <div style={{flex:1, padding: '32px 48px', overflowY:'auto'}}>
          
          {/* Telemetry Section */}
          <div style={{
            background: '#ffffff',
            borderRadius: 12,
            padding: 24,
            marginBottom: 32,
            boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
            border: '1px solid #e2e8f0'
          }}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16}}>
              <Activity size={18} color="#B20F3B" />
              <div style={{fontSize:13, color:'#0B0033', textTransform:'uppercase', letterSpacing:'0.1em', fontWeight:800}}>
                Live Telemetry · Monitoring URL
              </div>
            </div>
            <input 
              value={tempConfig[sk].monitoringUrl||''} 
              onChange={e=>updateF('monitoringUrl',e.target.value)}
              style={{...inp(), width:'100%', fontSize:13}} 
              placeholder="https://lookerstudio.google.com/..."
            />
          </div>

          <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20}}>
            <LayoutGrid size={18} color="#B20F3B" />
            <div style={{fontSize:13, color:'#0B0033', textTransform:'uppercase', letterSpacing:'0.1em', fontWeight:800}}>
              Módulos de la Estación - Títulos & Links
            </div>
          </div>
          
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:24, marginBottom:40}}>
            {MODULE_FIELDS.map(({field,key,defaultTitle,defaultSub, color})=>{
              const meta = getModuleMeta(key);
              const items = tempConfig[sk][field]||[];
              return (
                <div key={field} style={{
                  background:'#ffffff',
                  borderRadius: 12, 
                  overflow:'hidden', 
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <div style={{
                    background:'#0B0033', 
                    padding:'16px 20px',
                    borderBottom: `3px solid ${color}`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12
                  }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: color, boxShadow: `0 0 8px ${color}` }} />
                    <div style={{fontSize:13, color:'#ffffff', fontWeight:800, textTransform:'uppercase', letterSpacing: '0.05em'}}>
                      {field.toUpperCase()}
                    </div>
                  </div>
                  
                  <div style={{padding:20, flex: 1, display: 'flex', flexDirection: 'column'}}>
                    <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:20}}>
                      <div>
                        <div style={{fontSize:10, color:'#64748b', textTransform:'uppercase', marginBottom:6, fontWeight: 700}}>TÍTULO</div>
                        <input 
                          value={meta.title||defaultTitle} 
                          onChange={e=>updateModuleMeta(key,'title',e.target.value)} 
                          style={{...inp(),width:'100%', fontWeight:700}}
                        />
                      </div>
                      <div>
                        <div style={{fontSize:10, color:'#64748b', textTransform:'uppercase', marginBottom:6, fontWeight: 700}}>SUBTÍTULO</div>
                        <input 
                          value={meta.subtitle||defaultSub} 
                          onChange={e=>updateModuleMeta(key,'subtitle',e.target.value)} 
                          style={{...inp(),width:'100%'}}
                        />
                      </div>
                    </div>
                    
                    <div style={{fontSize:10, color:'#64748b', textTransform:'uppercase', marginBottom:10, fontWeight: 700}}>ENLACES DEL MÓDULO</div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
                      {items.map((item: any,i: number)=>(
                        <div key={i} style={{display:'flex', gap:8, alignItems:'center', background: '#f8fafc', padding: 8, borderRadius: 8, border: '1px solid #f1f5f9'}}>
                          <LinkIcon size={14} color="#94a3b8" />
                          <input 
                            value={item.label} 
                            onChange={e=>updateLink(field,i,'label',e.target.value)} 
                            style={{...inp({ padding: '6px 10px', fontSize: 12 }), flex:1}}
                            placeholder="Nombre del enlace"
                          />
                          <input 
                            value={item.url} 
                            onChange={e=>updateLink(field,i,'url',e.target.value)} 
                            style={{...inp({ padding: '6px 10px', fontSize: 11, color: '#64748b' }), flex:2}}
                            placeholder="https://"
                          />
                          <button 
                            onClick={()=>removeItem(field,i)} 
                            style={{
                              background:'#fee2e2', border:'none', padding:'6px', 
                              cursor:'pointer', borderRadius:6, color:'#ef4444',
                              display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}
                            title="Eliminar enlace"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      ))}
                    </div>
                    
                    <button 
                      onClick={()=>addItem(field)} 
                      style={{
                        background:'#f1f5f9', color:'#0B0033', border:'1px dashed #cbd5e1', 
                        padding:'10px', cursor:'pointer', fontSize:11, fontWeight:700, 
                        borderRadius:6, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                        transition: 'all 0.2s ease',
                        marginTop: 'auto'
                      }}
                    >
                      <Plus size={14} /> AGREGAR NUEVO ENLACE
                    </button>
                    
                    {field==='laboratorio' && (
                      <div style={{marginTop:20, paddingTop:20, borderTop:'1px solid #e2e8f0', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
                          <div style={{ background: '#f0fdf4', padding: 6, borderRadius: 6 }}>
                            <GraduationCap size={16} color="#22c55e" />
                          </div>
                          <div style={{fontSize:12, color:'#0B0033', fontWeight: 700}}>Ruta del Líder Guardián</div>
                        </div>
                        <button 
                          onClick={()=>onRutaLider(activeStation)} 
                          style={{
                            background:'#0B0033', color:'#ffffff', border:'none', 
                            padding:'8px 16px', cursor:'pointer', fontSize:11, fontWeight:700, 
                            borderRadius:4, display: 'flex', alignItems: 'center', gap: 6
                          }}
                        >
                          ABRIR EDITOR <ArrowUpRight size={14} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          
          <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16}}>
            <Database size={18} color="#B20F3B" />
            <div style={{fontSize:13, color:'#0B0033', textTransform:'uppercase', letterSpacing:'0.1em', fontWeight:800}}>
              Database: Exploración - Planetas & Misiones
            </div>
          </div>
          
          <div style={{
            background:'#ffffff', 
            border:'1px solid #e2e8f0', 
            padding:24, 
            borderRadius:12, 
            display:'flex', 
            justifyContent:'space-between', 
            alignItems:'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ background: 'rgba(178,15,59,0.1)', padding: 12, borderRadius: 8 }}>
                <Globe size={24} color="#B20F3B" />
              </div>
              <div>
                <div style={{fontSize:15, fontWeight:800, color: '#0B0033', marginBottom:4}}>Rutas, Planetas y Misiones</div>
                <div style={{fontSize:12, color: '#64748b'}}>Gestiona el contenido de las rutas de exploración y misiones.</div>
              </div>
            </div>
            <button 
              onClick={()=>onExploracion(activeStation)} 
              style={{
                background:'#B20F3B', color:'#ffffff', border:'none', 
                padding:'12px 24px', cursor:'pointer', fontSize:12, fontWeight:800, 
                borderRadius:6, display: 'flex', alignItems: 'center', gap: 8,
                boxShadow: '0 4px 12px rgba(178,15,59,0.3)', transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <Edit3 size={16} /> ABRIR EDITOR DE BASE DE DATOS
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};
