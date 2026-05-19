import React, { useState } from 'react';
import { BackBtn } from './Shared';
import { motion } from 'framer-motion';
import { Save, Rocket, Settings, Database, Edit3, Trash2, Plus, Link as LinkIcon, CheckCircle2, Activity, LayoutGrid, GraduationCap, ArrowUpRight, Globe, ArrowLeft } from 'lucide-react';

export const AdminCenter = ({ config, setConfig, onBack, onExploracion, onRutaLider, onViewStation }: any) => {
  const [activeStation, setActiveStation] = useState('BR');
  const [saved, setSaved] = useState(false);
  const handleSave = () => { setSaved(true); setTimeout(()=>setSaved(false),2200); };
  const sk = activeStation.toLowerCase();
  const updateF = (field: any, val: any) => {
    const now = new Date();
    const dd = String(now.getDate()).padStart(2, '0');
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const yyyy = now.getFullYear();
    const dateStr = `${dd}/${mm}/${yyyy}`;
    setConfig((prev: any)=>({...prev,[sk]:{...prev[sk],[field]:val, lastUpdate: dateStr}}));
  };
  const tempConfig = config;
  const addItem = (field: any) => updateF(field,[...tempConfig[sk][field],{label:'NUEVO_LINK',url:'https://'}]);
  const removeItem = (field: any, idx: any) => updateF(field,tempConfig[sk][field].filter((_: any,i: any)=>i!==idx));
  const updateLink = (f: any, i: any, sub: any, v: any) => {
    const next=[...tempConfig[sk][f]]; next[i]={...next[i],[sub]:v}; updateF(f,next);
  };
  const MODULE_FIELDS = [
    { field:'laboratorio', key:'lab',  defaultTitle:'Portal de Lideres',   defaultSub:'Portal de Lideres', color: '#99CC33' },
    { field:'ingenieria',  key:'eng',  defaultTitle:'Workshops',   defaultSub:'Talleres', color: '#B200FF' },
    { field:'suministros', key:'sup',  defaultTitle:'Formulários',  defaultSub:'Formulários', color: '#00D6CC' },
    { field:'operaciones', key:'ops',  defaultTitle:'Portal Instrutor',  defaultSub:'Portal Instrutor', color: '#FFE017' },
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
    <div style={{minHeight:'100vh', background:'#F8F7FF', display:'flex', flexDirection:'column', fontFamily: '"Inter", sans-serif'}}>
      {/* Premium Corporate Header */}
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
        <BackBtn onClick={onBack} label="CERRAR PORTAL" />
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Settings size={22} color="#99CC33" />
          <span style={{color:'#ffffff', fontSize:18, fontWeight:900, letterSpacing: '0.05em'}}>ADMIN CENTER <span style={{ color: 'rgba(255,255,255,0.3)', margin: '0 8px' }}>/</span> {activeStation} STATION</span>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 12 }}>
          <motion.button 
            whileHover={{ scale: 1.02, translateY: -1 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onViewStation(activeStation)} 
            style={{
              background: 'rgba(255,255,255,0.1)', 
              color: '#ffffff', 
              border: '1px solid rgba(255,255,255,0.3)', 
              padding: '12px 24px', 
              cursor: 'pointer', 
              fontSize: 13, 
              fontWeight: 800, 
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              transition: 'all 0.3s ease'
            }}
          >
            <Globe size={18} color="#99CC33" /> VER ESTACIÓN
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.02, translateY: -1 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSave} 
            style={{
              background: saved ? '#00D6CC' : '#99CC33', 
              color: '#ffffff', 
              border: 'none', 
              padding: '12px 32px', 
              cursor: 'pointer', 
              fontSize: 13, 
              fontWeight: 800, 
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              boxShadow: `0 10px 20px ${saved ? '#00D6CC' : '#99CC33'}40`,
              transition: 'all 0.3s ease'
            }}
          >
            {saved ? <><CheckCircle2 size={18}/> GUARDADO PROFESIONAL</> : <><Save size={18}/> GUARDAR CONFIGURACIÓN</>}
          </motion.button>
        </div>
      </div>
      
      <div style={{display:'flex', flex:1, overflow: 'hidden'}}>
        {/* Professional Deep Blue Sidebar */}
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
            ESTACIONES BASE
          </div>
          {['BR','SSC'].map(st=>(
            <motion.div 
              key={st} 
              whileHover={{ x: 6, background: 'rgba(255,255,255,0.05)' }}
              onClick={()=>setActiveStation(st)} 
              style={{
                padding:'14px 20px', 
                cursor:'pointer', 
                borderRadius: 10, 
                fontWeight: activeStation===st ? 800 : 500, 
                background: activeStation===st ? 'rgba(153,204,51,0.15)' : 'transparent', 
                color: activeStation===st ? '#99CC33' : 'rgba(255,255,255,0.6)',
                borderLeft: `4px solid ${activeStation===st ? '#99CC33' : 'transparent'}`,
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <Rocket size={20} color={activeStation===st ? '#99CC33' : 'rgba(255,255,255,0.4)'} />
              <span style={{ fontSize: 13, letterSpacing: '0.05em' }}>{st} STATION</span>
            </motion.div>
          ))}
          
          <div style={{ marginTop: 'auto', padding: '0 8px' }}>
            <motion.button 
              whileHover={{ scale: 1.02, background: 'rgba(239,68,68,0.1)' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                if (window.confirm("¿BORRAR TODO EL PROGRESO? Esta acción limpiará todas las marcas de planetas y missões completadas.")) {
                  Object.keys(localStorage).forEach(key => {
                    if (key.startsWith('resolved_') || key.startsWith('congrats_shown_')) {
                      localStorage.removeItem(key);
                    }
                  });
                  window.location.reload();
                }
              }}
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'transparent',
                border: '1px solid rgba(239,68,68,0.3)',
                borderRadius: 8,
                color: '#ef4444',
                fontSize: 11,
                fontWeight: 900,
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                cursor: 'pointer',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}
            >
              <Trash2 size={16} /> RESET MASTER PROGRESO
            </motion.button>
          </div>
        </div>
        
        {/* Main Content Area */}
        <div style={{flex:1, padding: '40px 60px', overflowY:'auto', background: '#F8F7FF'}}>
          
          <div style={{display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24}}>
            <Database size={22} color="#1B0088" />
            <div style={{fontSize:15, color:'#1B0088', textTransform:'uppercase', letterSpacing:'0.12em', fontWeight:900}}>
              DATABASE: ENTRENAMIENTO
            </div>
          </div>
          
          <div style={{
            background:'#ffffff', 
            border:'1px solid rgba(27,0,136,0.08)', 
            padding:32, 
            borderRadius:24, 
            display:'flex', 
            justifyContent:'space-between', 
            alignItems:'center',
            boxShadow: '0 10px 40px rgba(27,0,136,0.05)',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: 48
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: '#99CC33' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              <div style={{ background: 'rgba(27,0,136,0.05)', padding: 16, borderRadius: 16 }}>
                <Globe size={32} color="#1B0088" />
              </div>
              <div>
                <div style={{fontSize:18, fontWeight:900, color: '#1B0088', marginBottom:6, letterSpacing: '-0.01em'}}>Rutas, Planetas y Desafíos</div>
                 <div style={{fontSize:14, color: '#64748b', maxWidth: 400}}>Módulo avanzado para gestionar la topología de la red, missões por niveles y contenido multimedia.</div>
              </div>
            </div>
            <button 
              onClick={()=>onExploracion(activeStation)} 
              style={{
                background:'#1B0088', color:'#ffffff', border:'none', 
                padding:'16px 36px', cursor:'pointer', fontSize:13, fontWeight:900, 
                borderRadius:12, display: 'flex', alignItems: 'center', gap: 12,
                boxShadow: '0 8px 25px rgba(27,0,136,0.25)', transition: 'all 0.3s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <Edit3 size={20} /> INICIAR EDITOR DE BASE DE DATOS
            </button>
          </div>
          
          {/* Telemetry Card */}
          <div style={{
            background: '#ffffff',
            borderRadius: 20,
            padding: 28,
            marginBottom: 40,
            boxShadow: '0 8px 30px rgba(27,0,136,0.04)',
            border: '1px solid rgba(27,0,136,0.08)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: '#99CC33' }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
              <div>
                <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20}}>
                  <Activity size={20} color="#1B0088" />
                  <div style={{fontSize:14, color:'#1B0088', textTransform:'uppercase', letterSpacing:'0.12em', fontWeight:900}}>
                    LIVE TELEMETRY · MONITORING URL
                  </div>
                </div>
                <input 
                  value={tempConfig[sk].monitoringUrl||''} 
                  onChange={e=>updateF('monitoringUrl',e.target.value)}
                  style={{...inp({ padding: '14px 20px', border: '1px solid #E2E8F0', fontSize: 14, background: '#F8FAFC' }), width:'100%'}} 
                  placeholder="https://lookerstudio.google.com/..."
                  onFocus={e => { e.currentTarget.style.borderColor = '#1B0088'; e.currentTarget.style.background = '#fff'; }}
                  onBlur={e => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.background = '#F8FAFC'; }}
                />
              </div>

              <div>
                <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20}}>
                  <Globe size={20} color="#1B0088" />
                  <div style={{fontSize:14, color:'#1B0088', textTransform:'uppercase', letterSpacing:'0.12em', fontWeight:900}}>
                    IARA LINK · ASISTENTE
                  </div>
                </div>
                <input 
                  value={tempConfig[sk].iaraLink !== undefined ? tempConfig[sk].iaraLink : 'https://amelia.appslatam.com/#/assistants/chat/aa857c06-5a06-4450-8518-8568cdd28dfd'} 
                  onChange={e=>updateF('iaraLink',e.target.value)}
                  style={{...inp({ padding: '14px 20px', border: '1px solid #E2E8F0', fontSize: 14, background: '#F8FAFC' }), width:'100%'}} 
                  placeholder="https://amelia.appslatam.com/..."
                  onFocus={e => { e.currentTarget.style.borderColor = '#1B0088'; e.currentTarget.style.background = '#fff'; }}
                  onBlur={e => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.background = '#F8FAFC'; }}
                />
              </div>
            </div>

            {/* Third row: Preparação full width */}
            <div style={{ marginTop: 24 }}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12}}>
                <Database size={20} color="#00D6CC" />
                <div style={{fontSize:14, color:'#1B0088', textTransform:'uppercase', letterSpacing:'0.12em', fontWeight:900}}>
                  MIGRAÇÃO · REQUISITOS
                </div>
                <span style={{ fontSize:11, color:'#00D6CC', fontWeight:700, background:'rgba(0,214,204,0.08)', border:'1px solid rgba(0,214,204,0.3)', borderRadius:6, padding:'2px 10px' }}>Matriz Migrações</span>
              </div>
              <input 
                value={tempConfig[sk].preparacaoLink || ''} 
                onChange={e=>updateF('preparacaoLink',e.target.value)}
                style={{...inp({ padding: '14px 20px', border: '1px solid #E2E8F0', fontSize: 14, background: '#F8FAFC' }), width:'100%'}} 
                placeholder="https://docs.google.com/spreadsheets/..."
                onFocus={e => { e.currentTarget.style.borderColor = '#00D6CC'; e.currentTarget.style.background = '#fff'; }}
                onBlur={e => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.background = '#F8FAFC'; }}
              />
            </div>
          </div>

          <div style={{display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28}}>
            <LayoutGrid size={22} color="#1B0088" />
            <div style={{fontSize:15, color:'#1B0088', textTransform:'uppercase', letterSpacing:'0.12em', fontWeight:900}}>
              MÓDULOS ACTIVOS DE LA ESTACIÓN
            </div>
          </div>
          
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:32, marginBottom:48}}>
            {MODULE_FIELDS.map(({field,key,defaultTitle,defaultSub, color})=>{
              const meta = getModuleMeta(key);
              const items = tempConfig[sk][field]||[];
              return (
                <div key={field} style={{
                  background:'#ffffff',
                  borderRadius: 20, 
                  overflow:'hidden', 
                  boxShadow: '0 8px 40px rgba(0,0,0,0.04)',
                  border: '1px solid rgba(27,0,136,0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                    <div style={{
                      background:'#1B0088', 
                      padding:'20px 24px',
                      borderBottom: `4px solid ${color}`,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 16
                    }}>
                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: color, boxShadow: `0 0 12px ${color}` }} />
                      <div style={{fontSize:14, color:'#ffffff', fontWeight:900, textTransform:'none', letterSpacing: '0.1em'}}>
                        {field === 'laboratorio' ? 'Portal de Lideres' : field === 'ingenieria' ? 'Workshops' : field === 'suministros' ? 'Formulários' : 'Portal Instrutor'}
                      </div>
                    </div>
                  
                  <div style={{padding:28, flex: 1, display: 'flex', flexDirection: 'column', gap: 24}}>
                    <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:20}}>
                      <div>
                        <div style={{fontSize:10, color:'#64748b', textTransform:'uppercase', marginBottom:8, fontWeight: 800, letterSpacing: '0.05em'}}>TÍTULO VISIBLE</div>
                        <input 
                          value={meta.title||defaultTitle} 
                          onChange={e=>updateModuleMeta(key,'title',e.target.value)} 
                          style={{...inp({ background: '#F8FAFC', padding: '12px 16px' }),width:'100%', fontWeight:800, color: '#1B0088'}}
                        />
                      </div>
                      <div>
                        <div style={{fontSize:10, color:'#64748b', textTransform:'uppercase', marginBottom:8, fontWeight: 800, letterSpacing: '0.05em'}}>SUBTÍTULO</div>
                        <input 
                          value={meta.subtitle||defaultSub} 
                          onChange={e=>updateModuleMeta(key,'subtitle',e.target.value)} 
                          style={{...inp({ background: '#F8FAFC', padding: '12px 16px' }),width:'100%'}}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <div style={{fontSize:11, color:'#1B0088', textTransform:'uppercase', marginBottom:14, fontWeight: 900, letterSpacing: '0.08em', display: 'flex', alignItems: 'center', gap: 8}}>
                        <LinkIcon size={14} /> ENLACES DINÁMICOS
                      </div>
                      
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
                        {items.map((item: any,i: number)=>(
                          <motion.div key={i} layout style={{display:'flex', flexDirection:'column', gap:10, background: '#F8FAFC', padding: '16px', borderRadius: 12, border: '1px solid #E2E8F0'}}>
                            <div style={{display:'flex', gap:10, alignItems:'center'}}>
                              <input 
                                value={item.label} 
                                onChange={e=>updateLink(field,i,'label',e.target.value)} 
                                style={{...inp({ padding: '8px 12px', fontSize: 13, background: '#fff' }), flex:1, fontWeight: 700}}
                                placeholder="Nombre"
                              />
                              <input 
                                value={item.url} 
                                onChange={e=>updateLink(field,i,'url',e.target.value)} 
                                style={{...inp({ padding: '8px 12px', fontSize: 12, color: '#1B0088', background: '#fff' }), flex:2}}
                                placeholder="https://..."
                              />
                              <button 
                                onClick={()=>removeItem(field,i)} 
                                style={{
                                  background:'#fee2e2', border:'none', width: 36, height: 36,
                                  cursor:'pointer', borderRadius:10, color:'#ef4444',
                                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                                  transition: 'all 0.2s'
                                }}
                                onMouseEnter={e => (e.currentTarget.style.background = '#FCA5A5', e.currentTarget.style.transform = 'scale(1.05)')}
                                onMouseLeave={e => (e.currentTarget.style.background = '#fee2e2', e.currentTarget.style.transform = 'scale(1)')}
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      
                      <button 
                        onClick={()=>addItem(field)} 
                        style={{
                          width: '100%', background:'#f8fafc', color:'#1B0088', border:'2px dashed rgba(27,0,136,0.1)', 
                          padding:'14px', cursor:'pointer', fontSize:12, fontWeight:800, 
                          borderRadius:12, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = '#1B0088'; e.currentTarget.style.color = '#fff' }}
                        onMouseLeave={e => { e.currentTarget.style.background = '#f8fafc'; e.currentTarget.style.color = '#1B0088' }}
                      >
                        <Plus size={18} /> AÑADIR NUEVO RECURSO
                      </button>
                    </div>
                    
                    {field==='laboratorio' && (
                      <div style={{marginTop:'auto', paddingTop:24, borderTop:'1px solid #E2E8F0', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                          <div style={{ background: 'rgba(153,204,51,0.1)', padding: 10, borderRadius: 10 }}>
                            <GraduationCap size={20} color="#99CC33" />
                          </div>
                          <div>
                            <div style={{fontSize:13, color:'#1B0088', fontWeight: 900}}>Rota do Lider Guardião</div>
                            <div style={{fontSize:11, color:'#64748b'}}>Gestão de aprendizagem</div>
                          </div>
                        </div>
                        <button 
                          onClick={()=>onRutaLider(activeStation)} 
                          style={{
                            background:'#1B0088', color:'#ffffff', border:'none', 
                            padding:'10px 20px', cursor:'pointer', fontSize:12, fontWeight:800, 
                            borderRadius:8, display: 'flex', alignItems: 'center', gap: 8,
                            boxShadow: '0 4px 12px rgba(27,0,136,0.2)'
                          }}
                        >
                          ABRIR CONFIG <ArrowUpRight size={16} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          
          
          <div style={{ height: 60 }} />
        </div>
      </div>
    </div>
  );
};
