import React, { useState } from 'react';
import { BackBtn } from './Shared';
import { motion } from 'motion/react';
import { Save, CheckCircle2, Plus, Trash2, GraduationCap, Link as LinkIcon, Clock, FileText, Lightbulb, Shield } from 'lucide-react';

export const AdminRutaLider = ({ rutaData, setRutaData, onBack, title }: any) => {
  const [saved, setSaved] = useState(false);
  const saveFlash = () => { setSaved(true); setTimeout(()=>setSaved(false), 2000); };
  
  const inp = (extra={}) => ({
    background:'#ffffff', 
    border:'1px solid #e2e8f0', 
    padding:'8px 12px', 
    fontFamily:'inherit', 
    fontSize:12, 
    color:'#0B0033', 
    outline:'none', 
    borderRadius:6, 
    transition: 'all 0.2s ease',
    boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.05)',
    ...extra
  });
  
  const updateField = (idx: any, field: any, val: any) => {
    setRutaData((rutaData||[]).map((row: any,i: any)=>i===idx?{...row,[field]:val}:row));
  };
  
  const addRow = () => setRutaData([...(rutaData||[]), {poder:'Poder 1', tema:'Nuevo', tiempo:'', desc:'Descripción', consejo:'-', adjunto:'#'}]);
  const removeRow = (idx: any) => setRutaData((rutaData||[]).filter((_: any,i: any)=>i!==idx));
  
  return (
    <div style={{minHeight:'100vh', background:'#F4F5F9', display:'flex', flexDirection:'column', fontFamily: '"Inter", sans-serif'}}>
      {/* Header */}
      <div style={{
        background:'#0B0033', 
        padding:'16px 32px', 
        display:'flex', 
        alignItems:'center', 
        gap:24,
        borderBottom: '4px solid #22c55e',
        boxShadow: '0 4px 20px rgba(34,197,94,0.15)'
      }}>
        <button onClick={onBack} style={{ 
          background: '#ffffff', border: 'none', color: '#0B0033', padding: '8px 20px', 
          borderRadius: 4, cursor: 'pointer', fontSize: 13, fontWeight: 800, textTransform: 'uppercase',
          display: 'flex', alignItems: 'center', gap: 8
        }}>
          ← VOLVER
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <GraduationCap size={20} color="#22c55e" />
          <span style={{color:'#ffffff', fontSize:16, fontWeight:800, letterSpacing: '0.05em'}}>{title||'EDITOR: RUTA DEL LÍDER'}</span>
        </div>
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={saveFlash} 
          style={{
            marginLeft:'auto', 
            background: saved ? '#00D6CC' : '#22c55e', 
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
            boxShadow: `0 0 15px ${saved ? '#00D6CC' : '#22c55e'}60`,
            transition: 'all 0.3s ease'
          }}
        >
          {saved ? <><CheckCircle2 size={16}/> GUARDADO</> : <><Save size={16}/> GUARDAR CAMBIOS</>}
        </motion.button>
      </div>
      
      <div style={{padding: '32px 48px', flex: 1, overflowY: 'auto'}}>
        
        <div style={{
          background: '#ffffff',
          borderRadius: 12,
          padding: 24,
          boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
          border: '1px solid #e2e8f0',
          display: 'flex',
          flexDirection: 'column',
          gap: 20
        }}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <div style={{ background: '#f0fdf4', padding: 8, borderRadius: 8 }}>
                <Shield size={20} color="#22c55e" />
              </div>
              <div>
                <div style={{fontSize:16, fontWeight:800, color: '#0B0033'}}>Nodos de la Ruta</div>
                <div style={{fontSize:12, color: '#64748b'}}>{(rutaData||[]).length} nodos configurados</div>
              </div>
            </div>
            <button 
              onClick={addRow} 
              style={{
                background:'#22c55e', color:'#ffffff', border:'none', 
                padding:'10px 20px', cursor:'pointer', fontSize:12, fontWeight:800, 
                borderRadius:6, display: 'flex', alignItems: 'center', gap: 8,
                boxShadow: '0 4px 12px rgba(34,197,94,0.3)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <Plus size={16} /> AGREGAR NODO
            </button>
          </div>
          
          <div style={{border:'1px solid #e2e8f0', borderRadius:8, overflow:'hidden', background:'#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.02)'}}>
            <div style={{
              display:'grid', 
              gridTemplateColumns:'120px 140px 100px 1fr 1fr 120px 48px', 
              gap:12, 
              padding:'12px 16px', 
              borderBottom:'2px solid #e2e8f0', 
              background:'#f8fafc'
            }}>
              {[
                { label: 'PODER', icon: <Shield size={12} /> },
                { label: 'TEMA', icon: <FileText size={12} /> },
                { label: 'TIEMPO', icon: <Clock size={12} /> },
                { label: 'DESCRIPCIÓN', icon: <FileText size={12} /> },
                { label: 'CONSEJO', icon: <Lightbulb size={12} /> },
                { label: 'ADJUNTO', icon: <LinkIcon size={12} /> },
                { label: '', icon: null }
              ].map((h,i)=>(
                <div key={i} style={{fontSize:10, color:'#64748b', textTransform:'uppercase', fontWeight:800, display: 'flex', alignItems: 'center', gap: 4}}>
                  {h.icon} {h.label}
                </div>
              ))}
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {(rutaData||[]).map((row: any, idx: number) => (
                <div key={idx} style={{
                  display:'grid', 
                  gridTemplateColumns:'120px 140px 100px 1fr 1fr 120px 48px', 
                  gap:12, 
                  alignItems:'start', 
                  padding:'12px 16px', 
                  borderBottom: idx === (rutaData||[]).length - 1 ? 'none' : '1px solid #e2e8f0', 
                  background: idx%2===0 ? '#ffffff' : '#f8fafc',
                  transition: 'background 0.2s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#f1f5f9'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = idx%2===0 ? '#ffffff' : '#f8fafc'; }}
                >
                  <input 
                    value={row.poder} 
                    onChange={e=>updateField(idx,'poder',e.target.value)} 
                    style={{...inp(),width:'100%',fontSize:11, fontWeight: 700}}
                    onFocus={(e) => e.target.style.borderColor = '#22c55e'}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  />
                  <input 
                    value={row.tema} 
                    onChange={e=>updateField(idx,'tema',e.target.value)} 
                    style={{...inp(),width:'100%',fontSize:11}}
                    onFocus={(e) => e.target.style.borderColor = '#22c55e'}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  />
                  <input 
                    value={row.tiempo} 
                    onChange={e=>updateField(idx,'tiempo',e.target.value)} 
                    style={{...inp(),width:'100%',fontSize:11}}
                    onFocus={(e) => e.target.style.borderColor = '#22c55e'}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                    placeholder="Ej: 15 min"
                  />
                  <textarea 
                    value={row.desc} 
                    onChange={e=>updateField(idx,'desc',e.target.value)} 
                    style={{...inp(),width:'100%',fontSize:11, minHeight: 60, resize: 'vertical'}}
                    onFocus={(e) => e.target.style.borderColor = '#22c55e'}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  />
                  <textarea 
                    value={row.consejo} 
                    onChange={e=>updateField(idx,'consejo',e.target.value)} 
                    style={{...inp(),width:'100%',fontSize:11, minHeight: 60, resize: 'vertical'}}
                    onFocus={(e) => e.target.style.borderColor = '#22c55e'}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  />
                  <input 
                    value={row.adjunto} 
                    onChange={e=>updateField(idx,'adjunto',e.target.value)} 
                    style={{...inp(),width:'100%',fontSize:10, color: '#64748b'}}
                    onFocus={(e) => e.target.style.borderColor = '#22c55e'}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                    placeholder="URL"
                  />
                  <button 
                    onClick={()=>removeRow(idx)} 
                    style={{
                      background:'#fee2e2', border:'none', width:'100%', height: 36, 
                      cursor:'pointer', borderRadius:6, color:'#ef4444',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.2s ease'
                    }}
                    title="Eliminar nodo"
                    onMouseEnter={(e) => { e.currentTarget.style.background = '#fecaca'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = '#fee2e2'; }}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
