import React, { useState } from 'react';
import { BackBtn } from './Shared';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, Save, CheckCircle2, Plus, Trash2, Database, Layers, Satellite, 
  Edit3, Briefcase, Rocket, Target, Anchor, ChevronUp, ChevronDown, Monitor, FileText, Link as LinkIcon, AlertTriangle
} from 'lucide-react';

const FSC_TIPOS = [
  { key:'mision1', label:'Missão 1',   emoji:<Rocket size={20} />, iconName: 'Rocket' },
  { key:'landing', label:'LANDING',    emoji:<Anchor size={20} />, iconName: 'Anchor' },
  { key:'ojt',     label:'Desafio OJT', emoji:<Target size={20} />, iconName: 'Target' },
];

const FSC_FERR_TIPOS = ['PPT', 'Video', 'Link', 'Doc', 'Operação', 'Simulador', 'N/A'];

const FSC_EMPTY_ROW: any = {
  mision1: { macroTema:'', dia:1, tema:'', detalhe:'', ferramentas:{tipo:'PPT',url:''}, iaPic:'', tiempo:'' },
  landing: { macroTema:'', dia:1, tema:'', detalhe:'', ferramentas:{tipo:'PPT',url:''}, iaPic:'', ch:'' },
  ojt:     { macroTema:'', dia:1, tema:'', herramientas:{tipo:'PPT',url:''}, ch:'' },
};

const TIPO_COLORS: any = { mision1:'#1B0088', landing:'#99CC33', ojt:'#00D6CC' };

export const AdminAdvancedContent = ({ dataArray, setDataArray, planets, onBack, initialPlanet, titlePrefix="SECTOR" }: any) => {
  const [saved, setSaved] = useState(false);
  const [activePlanet, setActivePlanet] = useState(initialPlanet||0);
  const [activeSeccion, setActiveSeccion] = useState<number | null>(null);
  
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

  const ensureData = (d: any, count: number) => {
    const arr = Array.isArray(d) ? [...d] : [];
    while(arr.length < count) arr.push({ secciones:[] });
    return arr.map(p => {
      if(p && p.secciones) return p;
      if(p && p.rows) return { secciones:[{ tipo:p.tipo||'mision1', nombre:'', rows:p.rows }] };
      if(Array.isArray(p)) return { secciones:[{ tipo:'mision1', nombre:'', rows:p }] };
      return { secciones:[] };
    });
  };
  
  const data = ensureData(dataArray, planets.length);
  const planetData = data[activePlanet] || { secciones:[] };
  const secciones = planetData.secciones || [];

  const updatePlanet = (newSecciones: any) => {
    const next = (Array.isArray(data) ? data : []).map((p,pi) => pi===activePlanet ? {...p, secciones:newSecciones} : p);
    setDataArray(next);
  };

  const addSeccion = (tipo: string) => {
    const nueva = { tipo, nombre:'', rows:[] };
    updatePlanet([...secciones, nueva]);
    setActiveSeccion(secciones.length); 
  };
  const removeSeccion = (si: number) => {
    const next = secciones.filter((_,i)=>i!==si);
    updatePlanet(next);
    if(activeSeccion===si) setActiveSeccion(null);
  };
  const moveSeccion = (si: number, dir: number) => {
    const arr = [...secciones];
    const to = si+dir;
    if(to<0||to>=arr.length) return;
    [arr[si],arr[to]]=[arr[to],arr[si]];
    updatePlanet(arr);
  };
  const updateSeccionField = (si: number, field: string, val: any) => {
    updatePlanet(secciones.map((s,i)=>i===si?{...s,[field]:val}:s));
  };

  const sec = activeSeccion!==null ? secciones[activeSeccion] : null;
  const tipo = sec?.tipo || 'mision1';
  const currentRows = sec?.rows || [];

  const COLS: any = {
    mision1: [
      { key:'macroTema', label:'MACRO TEMA',  w:'140px' },
      { key:'dia',       label:'DÍA',         w:'60px', type:'number' },
      { key:'tema',      label:'TEMA',         w:'180px' },
      { key:'detalhe',   label:'DETALLE P/ INSTRUCTOR', w:'1fr', type:'textarea' },
      { key:'ferramentas',label:'HERRAMIENTAS', w:'140px', type:'ferr' },
      { key:'iaPic',     label:'IA-PIC (URL)', w:'120px' },
      { key:'tiempo',    label:'TIEMPO',       w:'100px' },
    ],
    landing: [
      { key:'macroTema', label:'MACRO TEMA',  w:'140px' },
      { key:'dia',       label:'DÍA',         w:'60px', type:'number' },
      { key:'tema',      label:'TEMA',         w:'180px' },
      { key:'detalhe',   label:'DETALLE P/ INSTRUCTOR', w:'1fr', type:'textarea' },
      { key:'ferramentas',label:'HERRAMIENTAS', w:'140px', type:'ferr' },
      { key:'iaPic',     label:'IA-PIC (URL)', w:'120px' },
      { key:'ch',        label:'CH',           w:'100px' },
    ],
    ojt: [
      { key:'macroTema', label:'MACRO TEMA',  w:'140px' },
      { key:'dia',       label:'DÍA',         w:'60px', type:'number' },
      { key:'tema',      label:'TEMA',         w:'1fr',  type:'textarea' },
      { key:'ferramentas',label:'HERRAMIENTAS', w:'140px', type:'ferr' },
      { key:'ch',        label:'CH',           w:'100px' },
    ],
  };
  const cols = COLS[tipo] || COLS.mision1;
  const gridCols = [...cols.map((c: any)=>c.w), '70px'].join(' ');

  const updateRow = (ri: number, field: string, val: any) => {
    const rows = currentRows.map((r,i)=>i===ri?{...r,[field]:val}:r);
    updatePlanet(secciones.map((s,i)=>i===activeSeccion?{...s,rows}:s));
  };
  const addRow = () => {
    const rows = [...currentRows, {...FSC_EMPTY_ROW[tipo]}];
    updatePlanet(secciones.map((s,i)=>i===activeSeccion?{...s,rows}:s));
  };
  const removeRow = (ri: number) => {
    const rows = currentRows.filter((_,i)=>i!==ri);
    updatePlanet(secciones.map((s,i)=>i===activeSeccion?{...s,rows}:s));
  };
  const moveRow = (ri: number, dir: number) => {
    const rows = [...currentRows];
    const to = ri+dir;
    if(to<0||to>=rows.length) return;
    [rows[ri],rows[to]]=[rows[to],rows[ri]];
    updatePlanet(secciones.map((s,i)=>i===activeSeccion?{...s,rows}:s));
  };

  return (
    <div style={{minHeight:'100vh', background:'#F8F7FF', display: 'flex', flexDirection: 'column', fontFamily: '"Inter", sans-serif'}}>
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
        {activeSeccion!==null
          ? <button onClick={()=>setActiveSeccion(null)} style={{ 
              background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#ffffff', padding: '10px 24px', 
              borderRadius: 8, cursor: 'pointer', fontSize: 13, fontWeight: 800, textTransform: 'uppercase',
              display: 'flex', alignItems: 'center', gap: 10, transition: 'all 0.2s'
            }} onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#1B0088' }} onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff' }}>
              <ArrowLeft size={16} /> SECCIONES
            </button>
          : <button onClick={onBack} style={{ 
              background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#ffffff', padding: '10px 24px', 
              borderRadius: 8, cursor: 'pointer', fontSize: 13, fontWeight: 800, textTransform: 'uppercase',
              display: 'flex', alignItems: 'center', gap: 10, transition: 'all 0.2s'
            }} onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#1B0088' }} onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff' }}>
              <ArrowLeft size={16} /> VOLVER
            </button>
        }
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Briefcase size={22} color="#99CC33" />
          <span style={{color:'#ffffff', fontSize:18, fontWeight:900, letterSpacing: '0.05em'}}>
            {titlePrefix} 
            {activeSeccion!==null && (
              <>
                <span style={{ color: 'rgba(255,255,255,0.3)', margin: '0 8px' }}>/</span> 
                <span style={{ color: '#99CC33' }}>{sec?.nombre || "CONSTRUCTOR"}</span>
              </>
            )}
          </span>
        </div>
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={saveFlash} 
          style={{
            marginLeft:'auto', background:saved?'#00D6CC':'#99CC33', color:'#ffffff', border:'none', padding:'12px 32px', 
            cursor:'pointer', fontSize:13, fontWeight:900, borderRadius:8, display:'flex', alignItems:'center', gap:10,
            boxShadow: `0 8px 20px ${saved?'#00D6CC':'#99CC33'}40`, transition: 'all 0.3s ease'
          }}>
          {saved ? <><CheckCircle2 size={18} /> GUARDADO</> : <><Save size={18} /> GUARDAR CAMBIOS</>}
        </motion.button>
      </div>

      <div style={{display:'flex', flex:1, overflow:'hidden'}}>
        {/* Sidebar Planetas */}
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
          zIndex: 50,
          overflowY: 'auto'
        }}>
          <div style={{fontSize:10, color:'rgba(255,255,255,0.4)', letterSpacing:'0.25em', textTransform:'uppercase', marginBottom:12, fontWeight:900, paddingLeft: 16}}>
            EXPLORACIÓN
          </div>
          {planets.length===0 && <div style={{padding:16, fontSize:12, color:'rgba(255,255,255,0.3)'}}>Sin planetas registrados</div>}
          {planets.map((p: any, i: number) => {
            const pd = data[i] || {};
            const nsec = (pd.secciones||[]).length;
            const isAct = activePlanet===i;
            return (
              <motion.div 
                key={i} 
                whileHover={{ x: 6, background: 'rgba(255,255,255,0.05)' }}
                onClick={()=>{setActivePlanet(i);setActiveSeccion(null);}}
                style={{
                  padding:'14px 20px', 
                  cursor:'pointer', 
                  borderRadius: 12, 
                  background: isAct ? 'rgba(153,204,51,0.15)' : 'transparent', 
                  color: isAct ? '#99CC33' : 'rgba(255,255,255,0.6)',
                  borderLeft: `4px solid ${isAct ? '#99CC33' : 'transparent'}`,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <div style={{fontSize:9, color: isAct ? '#99CC33' : 'rgba(255,255,255,0.3)', fontWeight: 900, marginBottom:4}}>PLANETA {String(i+1).padStart(2,'0')}</div>
                <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.02em' }}>{p.label||'Sin nombre'}</div>
                <div style={{fontSize:10, color: isAct ? 'rgba(153,204,51,0.6)' : 'rgba(255,255,255,0.2)', marginTop:6, fontWeight: 700}}>{nsec} sección{nsec!==1?'es':''}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Main Content Area */}
        <div style={{flex:1, overflowY:'auto', background: '#F8F7FF'}}>
          {planets.length===0 ? (
            <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 60 }}>
              <div style={{textAlign:'center', color:'#1B0088', background: '#fff', padding: 60, borderRadius: 32, boxShadow: '0 20px 60px rgba(0,0,0,0.05)'}}>
                <Satellite size={64} style={{ marginBottom: 24, opacity: 0.1 }} />
                <div style={{ fontSize: 18, fontWeight: 900 }}>No hay planetas en {titlePrefix}</div>
                <div style={{ fontSize: 14, color: '#64748b', marginTop: 8 }}>Vuelve al editor principal para agregar misiones.</div>
              </div>
            </div>
          ) : activeSeccion===null ? (
            /* ── VISTA LISTA DE SECCIONES ── */
            <div style={{padding:'48px 64px'}}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:40}}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                  <div style={{ width: 64, height: 64, background: '#1B0088', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 10px 30px rgba(27,0,136,0.2)' }}>
                    <Satellite size={32} />
                  </div>
                  <div>
                    <div style={{fontSize:24, fontWeight:900, color:'#1B0088', letterSpacing: '-0.02em'}}>{planets[activePlanet]?.label}</div>
                    <div style={{fontSize:14, color:'#64748b', fontWeight: 500}}>Gestión de Secciones y Contenido de Misión</div>
                  </div>
                </div>
              </div>

              {/* Botones agregar sección */}
              <div style={{
                background: '#fff', 
                padding: 32, 
                borderRadius: 24, 
                border: '1px solid rgba(27,0,136,0.08)', 
                marginBottom: 48,
                boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
              }}>
                <div style={{fontSize:10, color:'#64748b', textTransform:'uppercase', fontWeight:900, letterSpacing:'0.15em', marginBottom:20}}>+ AUMENTAR CAPACIDAD OPERATIVA</div>
                <div style={{display:'flex', gap:16, flexWrap:'wrap'}}>
                  {FSC_TIPOS.map(t=>(
                    <motion.button 
                      key={t.key} 
                      whileHover={{ scale: 1.05, translateY: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={()=>addSeccion(t.key)}
                      style={{
                        padding:'16px 32px', fontSize:14, fontWeight:900, cursor:'pointer', 
                        border:'none', background: TIPO_COLORS[t.key], color:'#fff', 
                        borderRadius:14, display:'flex', alignItems:'center', gap:12,
                        boxShadow: `0 8px 25px ${TIPO_COLORS[t.key]}30`,
                        transition: 'all 0.2s'
                      }}>
                      {t.emoji} {t.label}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Lista de secciones */}
              <AnimatePresence>
                {secciones.length===0 ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{padding:80,textAlign:'center',color:'#64748b',background: 'rgba(27,0,136,0.02)', border: '2px dashed rgba(27,0,136,0.1)', borderRadius:32}}>
                    <div style={{ fontSize: 16, fontWeight: 700 }}>Sin secciones configuradas</div>
                    <div style={{ fontSize: 13, marginTop: 8 }}>Agrega una sección arriba para comenzar a construir la misión.</div>
                  </motion.div>
                ) : (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 20 }}>
                    {secciones.map((sec: any, si: number) => {
                      const ti = FSC_TIPOS.find(t=>t.key===sec.tipo)||FSC_TIPOS[0];
                      const accent = TIPO_COLORS[sec.tipo]||'#1B0088';
                      return (
                        <motion.div 
                          key={si}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: si * 0.05 }}
                          style={{
                            background: '#fff',
                            borderRadius: 24,
                            border: '1px solid rgba(27,0,136,0.08)',
                            overflow: 'hidden',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.04)',
                            display: 'flex',
                            flexDirection: 'column'
                          }}
                        >
                          <div style={{background: '#1B0088', padding:'20px 32px', display:'flex', alignItems:'center', gap:20, borderLeft: `8px solid ${accent}`}}>
                            <div style={{ width: 44, height: 44, borderRadius: 12, background: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: `0 8px 15px ${accent}40` }}>
                              {ti.emoji}
                            </div>
                            <div style={{flex:1}}>
                              <div style={{color: accent, fontWeight:900, fontSize:10, textTransform:'uppercase', letterSpacing:'0.15em', marginBottom: 4}}>{ti.label}</div>
                              <input
                                value={sec.nombre||''}
                                onChange={e=>updateSeccionField(si,'nombre',e.target.value)}
                                placeholder={`Identificador de la sección (ej: "${ti.label} - Ventas")`}
                                style={{background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', color:'#fff', padding:'8px 16px', borderRadius:10, fontSize:15, width:'100%', fontWeight: 700, outline:'none'}}
                                onFocus={e => e.target.style.borderColor = accent}
                                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                              />
                            </div>
                            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: 10, color: 'rgba(255,255,255,0.6)', fontSize: 12, fontWeight: 800 }}>
                              {(sec.rows||[]).length} NODOS
                            </div>
                            <div style={{ display: 'flex', gap: 8 }}>
                              <button onClick={()=>moveSeccion(si,-1)} disabled={si===0} style={{background:'rgba(255,255,255,0.1)', border:'none', color:'#fff', width:36, height:36, cursor:'pointer', borderRadius:10, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: si===0?0.2:1}}><ChevronUp size={18}/></button>
                              <button onClick={()=>moveSeccion(si,1)} disabled={si===secciones.length-1} style={{background:'rgba(255,255,255,0.1)', border:'none', color:'#fff', width:36, height:36, cursor:'pointer', borderRadius:10, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: si===secciones.length-1?0.2:1}}><ChevronDown size={18}/></button>
                            </div>
                            <button 
                              onClick={()=>setActiveSeccion(si)} 
                              style={{
                                background: accent, color: '#fff', border: 'none', padding: '12px 24px', 
                                cursor: 'pointer', borderRadius: 12, fontSize: 12, fontWeight: 900, 
                                display: 'flex', alignItems: 'center', gap: 8, boxShadow: `0 8px 15px ${accent}40`
                              }}
                            >
                              <Edit3 size={16} /> EDITAR CONTENIDO
                            </button>
                            <button onClick={()=>removeSeccion(si)} style={{background:'#fee2e2', border:'none', color:'#ef4444', width:44, height:44, cursor:'pointer', borderRadius:12, display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Trash2 size={20}/></button>
                          </div>
                          {/* Minimal preview */}
                          {(sec.rows||[]).length > 0 && (
                            <div style={{padding:'16px 32px', background: '#F8FAFC', display: 'flex', gap: 24, overflowX: 'auto'}}>
                              {(sec.rows||[]).slice(0, 4).map((r: any, ri: number) => (
                                <div key={ri} style={{ 
                                  background: '#fff', padding: '12px 18px', borderRadius: 12, border: '1px solid #E2E8F0', 
                                  minWidth: 160, boxShadow: '0 4px 10px rgba(0,0,0,0.02)' 
                                }}>
                                  <div style={{ fontSize: 9, color: '#94a3b8', fontWeight: 900, textTransform: 'uppercase', marginBottom: 4 }}>DÍA {r.dia}</div>
                                  <div style={{ fontSize: 13, fontWeight: 800, color: '#1B0088', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.macroTema || r.tema || "Sin título"}</div>
                                </div>
                              ))}
                              {(sec.rows||[]).length > 4 && (
                                <div style={{ display: 'flex', alignItems: 'center', color: '#94a3b8', fontSize: 12, fontWeight: 800 }}>
                                  +{(sec.rows||[]).length - 4} MÁS
                                </div>
                              )}
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            /* ── EDITOR DE FILAS DE SECCIÓN ACTIVA ── */
            <div style={{padding:'48px 64px'}}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:32}}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 56, height: 56, borderRadius: 16, background: TIPO_COLORS[tipo], display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                    {ti.emoji}
                  </div>
                  <div>
                    <div style={{fontSize:10, fontWeight:900, textTransform:'uppercase', color:TIPO_COLORS[tipo], letterSpacing: '0.1em', marginBottom: 4}}>
                      EDITOR DE CONTENIDO · {ti.label}
                    </div>
                    <div style={{fontSize:22, fontWeight: 900, color: '#1B0088'}}>{sec?.nombre || "NUEVA MISIÓN"}</div>
                  </div>
                </div>
                <button 
                  onClick={addRow} 
                  style={{
                    background:'#1B0088', color:'#ffffff', border:'none', padding:'14px 28px', 
                    cursor:'pointer', fontSize:13, fontWeight:900, borderRadius:12, 
                    display: 'flex', alignItems: 'center', gap: 10, boxShadow: '0 10px 30px rgba(27,0,136,0.2)'
                  }}
                >
                  <Plus size={20} /> AGREGAR NUEVA FILA
                </button>
              </div>

              <div style={{
                background: '#fff', 
                borderRadius: 24, 
                border: '1px solid rgba(27,0,136,0.08)', 
                overflow: 'hidden', 
                boxShadow: '0 20px 60px rgba(0,0,0,0.05)'
              }}>
                <div style={{background:'#1B0088', overflowX:'auto'}}>
                  <div style={{
                    display:'grid', gridTemplateColumns:gridCols, gap:16, padding:'20px 24px', 
                    minWidth: 1000, borderBottom: `4px solid ${TIPO_COLORS[tipo]}`
                  }}>
                    {[...cols.map((c: any)=>c.label),''].map((h,i)=>(
                      <div key={i} style={{fontSize:10, color:'#ffffff', textTransform:'uppercase', fontWeight:900, letterSpacing:'0.1em'}}>{h}</div>
                    ))}
                  </div>
                </div>
                <div style={{maxHeight:'60vh', overflowY:'auto'}}>
                  {currentRows.map((row: any, ri: number) => (
                    <div key={ri} style={{
                      display:'grid', gridTemplateColumns:gridCols, gap:16, alignItems:'center', 
                      padding:'16px 24px', borderBottom:'1px solid #E2E8F0', 
                      background:ri%2===0?'#ffffff':'rgba(27,0,136,0.01)',
                      minWidth: 1000, transition: 'all 0.2s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(27,0,136,0.04)'}
                    onMouseLeave={e => e.currentTarget.style.background = ri%2===0?'#ffffff':'rgba(27,0,136,0.01)'}
                    >
                      {cols.map((col: any)=>{
                        if(col.type==='ferr') {
                          const ferr = (row[col.key] && typeof row[col.key]==='object') ? row[col.key] : {tipo:row[col.key]||'PPT',url:''};
                          const FERR_ICONS: any = {PPT:<Monitor size={14}/>, Video:<Satellite size={14}/>, Link:<LinkIcon size={14}/>, Doc:<FileText size={14}/>, 'Operação':<Briefcase size={14}/>, Simulador:<Monitor size={14}/>, N:<Monitor size={14}/>};
                          return (
                            <div key={col.key} style={{display:'flex',flexDirection:'column',gap:6}}>
                              <select value={ferr.tipo||'PPT'} onChange={e=>updateRow(ri,col.key,{...ferr,tipo:e.target.value})}
                                style={{ ...inp({ padding: '6px 10px', fontSize: 11, cursor: 'pointer', background: '#F8FAFC' }), width: '100%' }}>
                                {FSC_FERR_TIPOS.map(t=><option key={t} value={t}>{t}</option>)}
                              </select>
                              <input value={ferr.url||''} onChange={e=>updateRow(ri,col.key,{...ferr,url:e.target.value})}
                                placeholder="URL del Recurso" style={{ ...inp({ padding: '6px 10px', fontSize: 10, color: '#1a56db', background: '#F8FAFC' }), width: '100%' }}/>
                            </div>
                          );
                        }
                        if(col.type==='textarea') return <textarea key={col.key} value={row[col.key]||''} onChange={e=>updateRow(ri,col.key,e.target.value)} rows={2} style={{ ...inp({ minHeight: 44, fontSize: 12, lineHeight: 1.4 }), width: '100%', resize: 'vertical' }}/>;
                        if(col.type==='number') return <input key={col.key} type="number" value={row[col.key]||''} onChange={e=>updateRow(ri,col.key,parseInt(e.target.value)||1)} style={{ ...inp({ textAlign: 'center' }), width:'100%' }}/>;
                        return <input key={col.key} value={row[col.key]||''} onChange={e=>updateRow(ri,col.key,e.target.value)} style={{ ...inp({ fontWeight: col.key==='macroTema'||col.key==='tema' ? 800 : 400 }), width: '100%' }}/>;
                      })}
                      <div style={{display:'flex', gap:6, justifyContent: 'center'}}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap:4 }}>
                          <button onClick={()=>moveRow(ri,-1)} disabled={ri===0} style={{background: '#F1F5F9', border: 'none', width: 28, height: 28, cursor: 'pointer', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: ri===0 ? 0.3 : 1}}><ChevronUp size={14}/></button>
                          <button onClick={()=>moveRow(ri,1)} disabled={ri===currentRows.length-1} style={{background: '#F1F5F9', border: 'none', width: 28, height: 28, cursor: 'pointer', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: ri===currentRows.length-1 ? 0.3 : 1}}><ChevronDown size={14}/></button>
                        </div>
                        <button onClick={()=>removeRow(ri)} style={{background:'#fee2e2', border:'none', width:36, height:36, cursor:'pointer', borderRadius:10, color:'#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Trash2 size={18}/></button>
                      </div>
                    </div>
                  ))}
                </div>
                {currentRows.length===0 && (
                  <div style={{padding:60,textAlign:'center',color:'#94a3b8', background: '#F8FAFC'}}>
                    <div style={{ fontSize: 14, fontWeight: 700 }}>Sin filas en este nodo.</div>
                    <div style={{ fontSize: 13, marginTop: 4 }}>Haz clic en "Agregar Nueva Fila" para comenzar.</div>
                  </div>
                )}
              </div>

              {tipo==='ojt' && (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{marginTop:48, background:'#fff', borderRadius:24, border:'1px solid rgba(27,0,136,0.08)', overflow:'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.05)'}}
                >
                  <div style={{background:'#1B0088', padding:'20px 32px', display:'flex', alignItems:'center', gap:16, borderBottom: '4px solid #00D6CC'}}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: '#00D6CC', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 8px 15px rgba(0,214,204,0.3)' }}>
                      <AlertTriangle size={24} />
                    </div>
                    <div>
                      <div style={{color:'#fff', fontWeight:900, fontSize:14, textTransform:'uppercase', letterSpacing:'0.1em'}}>PARÁMETROS OPERATIVOS OJT</div>
                      <div style={{color:'rgba(255,255,255,0.6)', fontSize:11, fontWeight: 700}}>Configuración de Diario de Bordo y Ajuste de Ruta</div>
                    </div>
                  </div>
                  <div style={{padding:32, display:'grid', gridTemplateColumns:'1fr 1fr', gap:32, background:'#fff'}}>
                    <div style={{ background: '#F8FAFC', padding: 24, borderRadius: 20, border: '1px solid #E2E8F0' }}>
                      <div style={{fontSize:11,color:'#1B0088',textTransform:'uppercase',fontWeight:900,letterSpacing:'0.1em',marginBottom:16, display: 'flex', alignItems: 'center', gap: 8}}>
                        <Monitor size={14}/> DIARIO DE BORDO OJT
                      </div>
                      <div style={{display:'flex',flexDirection:'column',gap:20}}>
                        <div>
                          <div style={{fontSize:10,color:'#64748b',marginBottom:8, fontWeight: 800}}>ETIQUETA DEL BOTÓN</div>
                          <input value={sec?.dbOjtLabel||''} onChange={e=>updateSeccionField(activeSeccion!,'dbOjtLabel',e.target.value)}
                            placeholder="ej: Diário de Bordo OJT · Grupo 01"
                            style={{...inp({fontWeight:800}),width:'100%'}}/>
                        </div>
                        <div>
                          <div style={{fontSize:10,color:'#64748b',marginBottom:8, fontWeight: 800}}>ENLACE OPERATIVO (URL)</div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#fff', border: '1px solid #E2E8F0', borderRadius: 10, padding: '0 12px' }}>
                            <LinkIcon size={14} color="#1B0088" />
                            <input value={sec?.dbOjtUrl||''} onChange={e=>updateSeccionField(activeSeccion!,'dbOjtUrl',e.target.value)}
                              placeholder="https://docs.google.com/..."
                              style={{ border: 'none', background: 'transparent', padding: '12px 0', outline: 'none', color: '#1a56db', fontSize: 13, width: '100%', fontWeight: 600 }}/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={{ background: '#F8FAFC', padding: 24, borderRadius: 20, border: '1px solid #E2E8F0' }}>
                      <div style={{fontSize:11,color:'#1B0088',textTransform:'uppercase',fontWeight:900,letterSpacing:'0.1em',marginBottom:16, display: 'flex', alignItems: 'center', gap: 8}}>
                        <Clock size={14}/> CARGA HORARIA TOTAL
                      </div>
                      <input value={sec?.totalCh||''} onChange={e=>updateSeccionField(activeSeccion!,'totalCh',e.target.value)}
                        placeholder="ej: 05:40:00" style={{...inp({ fontSize: 24, fontWeight: 900, textAlign: 'center', color: '#1B0088' }),width:'100%'}}/>
                      <div style={{ fontSize: 12, color: '#64748b', marginTop: 16, textAlign: 'center' }}>Formato requerido: HH:MM:SS</div>
                    </div>
                    <div style={{gridColumn:'1/-1', background: 'rgba(0,214,204,0.03)', padding: 32, borderRadius: 24, border: '2px dashed rgba(0,214,204,0.2)'}}>
                      <div style={{fontSize:12,color:'#009D95',textTransform:'uppercase',fontWeight:900,letterSpacing:'0.1em',marginBottom:20, display: 'flex', alignItems: 'center', gap: 10}}>
                        <Rocket size={18}/> AJUSTE DE RUTA (PROTOCOLOS DE REFUERZO)
                      </div>
                      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:20}}>
                        <div style={{gridColumn:'1/-1'}}>
                          <div style={{fontSize:10,color:'#64748b',marginBottom:8, fontWeight: 800}}>MENSAJE PARA ESTUDIANTES (APOYO)</div>
                          <textarea value={sec?.ajusteRota||''} onChange={e=>updateSeccionField(activeSeccion!,'ajusteRota',e.target.value)}
                            rows={3} placeholder="Os alunos que não atingirem a média final de 80%..."
                            style={{...inp({lineHeight:1.6}),width:'100%',resize:'vertical'}}/>
                        </div>
                        <div>
                          <div style={{fontSize:10,color:'#64748b',marginBottom:8, fontWeight: 800}}>URL FORMS KON</div>
                          <input value={sec?.ajusteRotaUrlKon||''} onChange={e=>updateSeccionField(activeSeccion!,'ajusteRotaUrlKon',e.target.value)}
                            placeholder="https://forms..." style={{...inp({fontSize:12}),width:'100%',color:'#1a56db'}}/>
                        </div>
                        <div>
                          <div style={{fontSize:10,color:'#64748b',marginBottom:8, fontWeight: 800}}>URL FORMS AEC</div>
                          <input value={sec?.ajusteRotaUrlAec||''} onChange={e=>updateSeccionField(activeSeccion!,'ajusteRotaUrlAec',e.target.value)}
                            placeholder="https://forms..." style={{...inp({fontSize:12}),width:'100%',color:'#1a56db'}}/>
                        </div>
                        <div>
                          <div style={{fontSize:10,color:'#64748b',marginBottom:8, fontWeight: 800}}>CH AJUSTE</div>
                          <input value={sec?.ajusteRotaCh||''} onChange={e=>updateSeccionField(activeSeccion!,'ajusteRotaCh',e.target.value)}
                            placeholder="0:30:00" style={{...inp({fontWeight:900, textAlign: 'center'}),width:'100%'}}/>
                        </div>
                      </div>
                      <div style={{marginTop:20, background: '#fff', padding: '12px 20px', borderRadius: 12, border: '1px solid rgba(0,214,204,0.2)', display: 'flex', alignItems: 'center', gap: 12}}>
                        <div style={{ background: 'rgba(0,214,204,0.1)', color: '#009D95', padding: 6, borderRadius: 8 }}><Monitor size={14}/></div>
                        <div style={{fontSize:12, color:'#64748b'}}>
                          La sección "REFUERZO" se activará automáticamente si se completa cualquiera de los campos anteriores.
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div style={{ height: 100 }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
