import React, { useState } from 'react';
import { BackBtn } from './Shared';

const FSC_TIPOS = [
  { key:'mision1', label:'Missão 1',   emoji:'🚀' },
  { key:'landing', label:'LANDING',    emoji:'🛬' },
  { key:'ojt',     label:'Desafio OJT', emoji:'🎯' },
];

const FSC_FERR_TIPOS = ['PPT', 'Video', 'Link', 'Doc', 'Operação', 'Simulador', 'N/A'];

const FSC_EMPTY_ROW: any = {
  mision1: { macroTema:'', dia:1, tema:'', detalhe:'', ferramentas:{tipo:'PPT',url:''}, iaPic:'', tiempo:'' },
  landing: { macroTema:'', dia:1, tema:'', detalhe:'', ferramentas:{tipo:'PPT',url:''}, iaPic:'', ch:'' },
  ojt:     { macroTema:'', dia:1, tema:'', ferramentas:{tipo:'PPT',url:''}, ch:'' },
};

const TIPO_COLORS: any = { mision1:'#1a1a2e', landing:'#1a3a1a', ojt:'#333333' };

/* ── ADMIN ADVANCED CONTENT (Front Line, Soporte, FSC) ───────────────── */
export const AdminAdvancedContent = ({ dataArray, setDataArray, planets, onBack, initialPlanet, titlePrefix="SECTOR" }: any) => {
  const [saved, setSaved] = useState(false);
  const [activePlanet, setActivePlanet] = useState(initialPlanet||0);
  const [activeSeccion, setActiveSeccion] = useState<number | null>(null);
  const saveFlash = () => { setSaved(true); setTimeout(()=>setSaved(false), 2000); };
  const inp = (extra={}) => ({background:'#ffffff', border:'1px solid #cccccc', padding:'5px 8px', fontFamily:'inherit', fontSize:11, color:'#111111', outline:'none', borderRadius:3, ...extra});

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
    if(!window.confirm('¿Eliminar esta sección y todo su contenido?')) return;
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
      { key:'macroTema', label:'MACRO TEMA',  w:'110px' },
      { key:'dia',       label:'DÍA',         w:'44px', type:'number' },
      { key:'tema',      label:'TEMA',         w:'150px' },
      { key:'detalhe',   label:'DETALHE P/ INSTRUTOR', w:'1fr', type:'textarea' },
      { key:'ferramentas',label:'FERRAMENTAS', w:'150px', type:'ferr' },
      { key:'iaPic',     label:'IA-PIC (URL)', w:'100px' },
      { key:'tiempo',    label:'TIEMPO',       w:'75px' },
    ],
    landing: [
      { key:'macroTema', label:'MACRO TEMA',  w:'110px' },
      { key:'dia',       label:'DÍA',         w:'44px', type:'number' },
      { key:'tema',      label:'TEMA',         w:'150px' },
      { key:'detalhe',   label:'DETALHE P/ INSTRUTOR', w:'1fr', type:'textarea' },
      { key:'ferramentas',label:'FERRAMENTAS', w:'150px', type:'ferr' },
      { key:'iaPic',     label:'IA-PIC (URL)', w:'100px' },
      { key:'ch',        label:'CH',           w:'72px' },
    ],
    ojt: [
      { key:'macroTema', label:'MACRO TEMA',  w:'110px' },
      { key:'dia',       label:'DÍA',         w:'44px', type:'number' },
      { key:'tema',      label:'TEMA',         w:'1fr',  type:'textarea' },
      { key:'ferramentas',label:'FERRAMENTAS', w:'150px', type:'ferr' },
      { key:'ch',        label:'CH',           w:'72px' },
    ],
  };
  const cols = COLS[tipo] || COLS.mision1;
  const gridCols = [...cols.map((c: any)=>c.w), '60px'].join(' ');

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
    <div style={{minHeight:'100vh', background:'#ffffff'}}>
      <div style={{background:'#111111', padding:'10px 24px', display:'flex', alignItems:'center', gap:16}}>
        {activeSeccion!==null
          ? <button onClick={()=>setActiveSeccion(null)} style={{background:'#ffffff',border:'none',padding:'6px 12px',cursor:'pointer',fontSize:11,fontWeight:700,borderRadius:3,display:'flex',alignItems:'center',gap:4}}>← SECCIONES</button>
          : <BackBtn onClick={onBack} label="VOLVER"/>
        }
        <span style={{color:'#ffffff', fontSize:14, fontWeight:900}}>
          {titlePrefix} {activeSeccion!==null ? `· ${FSC_TIPOS.find(t=>t.key===tipo)?.emoji} ${sec?.nombre||FSC_TIPOS.find(t=>t.key===tipo)?.label}` : ''}
        </span>
        <button onClick={saveFlash} style={{marginLeft:'auto', background:saved?'#228b22':'#ffffff', color:saved?'#ffffff':'#111111', border:'2px solid #111111', padding:'6px 16px', cursor:'pointer', fontSize:11, fontWeight:700, borderRadius:3}}>
          {saved?'✓ GUARDADO':'💾 GUARDAR'}
        </button>
      </div>

      <div style={{display:'flex', height:'calc(100vh - 50px)'}}>
        {/* Sidebar planetas */}
        <div style={{width:180, borderRight:'2px solid #111111', padding:14, flexShrink:0, overflowY:'auto'}}>
          <div style={{fontSize:9, color:'#555555', letterSpacing:'0.2em', textTransform:'uppercase', marginBottom:10}}>PLANETAS</div>
          {planets.length===0 && <div style={{fontSize:11,color:'#888'}}>Sin planetas</div>}
          {planets.map((p: any, i: number) => {
            const pd = data[i] || {};
            const nsec = (pd.secciones||[]).length;
            return (
              <div key={i} onClick={()=>{setActivePlanet(i);setActiveSeccion(null);}}
                style={{padding:'8px 10px', marginBottom:5, cursor:'pointer', border:'1px solid '+(activePlanet===i?'#111111':'#cccccc'), borderRadius:3, fontWeight:activePlanet===i?700:400, background:activePlanet===i?'#f0f0f0':'#ffffff', fontSize:11}}>
                <div style={{fontSize:9,color:'#777',marginBottom:2}}>PLN-{String(i+1).padStart(3,'0')}</div>
                {p.label||'Sin nombre'}
                <div style={{fontSize:9,color:'#aaa',marginTop:2}}>{nsec} sección{nsec!==1?'es':''}</div>
              </div>
            );
          })}
        </div>

        {/* Main */}
        <div style={{flex:1, overflowY:'auto'}}>
          {planets.length===0 ? (
            <div style={{padding:60,textAlign:'center',color:'#888',border:'1px dashed #ccc',margin:24,borderRadius:4}}>
              No hay planetas en {titlePrefix}.
            </div>
          ) : activeSeccion===null ? (
            /* ── VISTA LISTA DE SECCIONES ── */
            <div style={{padding:24}}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:20}}>
                <div>
                  <div style={{fontSize:14, fontWeight:900, textTransform:'uppercase'}}>🛸 {planets[activePlanet]?.label}</div>
                  <div style={{fontSize:11,color:'#555',marginTop:2}}>{secciones.length} sección(es) configurada(s)</div>
                </div>
              </div>

              {/* Botones agregar sección */}
              <div style={{marginBottom:20}}>
                <div style={{fontSize:10,color:'#555',textTransform:'uppercase',fontWeight:700,letterSpacing:'0.1em',marginBottom:8}}>+ Agregar sección</div>
                <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
                  {FSC_TIPOS.map(t=>(
                    <button key={t.key} onClick={()=>addSeccion(t.key)}
                      style={{padding:'8px 16px', fontSize:12, fontWeight:700, cursor:'pointer', border:'2px solid #111', background:'#111', color:'#fff', borderRadius:4, display:'flex', alignItems:'center', gap:6}}>
                      {t.emoji} {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Lista de secciones */}
              {secciones.length===0 && (
                <div style={{padding:48,textAlign:'center',color:'#aaa',border:'1px dashed #ccc',borderRadius:4,fontSize:13}}>
                  Sin secciones — agrega una arriba 👆
                </div>
              )}
              {secciones.map((sec: any, si: number) => {
                const ti = FSC_TIPOS.find(t=>t.key===sec.tipo)||FSC_TIPOS[0];
                const bg = TIPO_COLORS[sec.tipo]||'#1a1a2e';
                return (
                  <div key={si} style={{border:'1px solid #cccccc', borderRadius:6, marginBottom:10, overflow:'hidden'}}>
                    <div style={{background:bg, padding:'10px 14px', display:'flex', alignItems:'center', gap:10}}>
                      <span style={{fontSize:18}}>{ti.emoji}</span>
                      <div style={{flex:1}}>
                        <div style={{color:'#fff',fontWeight:900,fontSize:12,textTransform:'uppercase',letterSpacing:'0.08em'}}>{ti.label}</div>
                        <input
                          value={sec.nombre||''}
                          onChange={e=>updateSeccionField(si,'nombre',e.target.value)}
                          placeholder={`Nombre de esta sección (ej: "${ti.label} - Ventas")`}
                          onClick={e=>e.stopPropagation()}
                          style={{background:'rgba(255,255,255,0.15)',border:'1px solid rgba(255,255,255,0.3)',color:'#fff',padding:'3px 8px',borderRadius:3,fontSize:11,width:'100%',marginTop:4,outline:'none',fontFamily:'inherit'}}
                        />
                      </div>
                      <div style={{color:'rgba(255,255,255,0.6)',fontSize:11,whiteSpace:'nowrap'}}>{(sec.rows||[]).length} filas</div>
                      {/* reorder */}
                      <button onClick={()=>moveSeccion(si,-1)} disabled={si===0} style={{background:'rgba(255,255,255,0.2)',border:'none',color:'#fff',width:26,height:26,cursor:si===0?'default':'pointer',borderRadius:3,fontSize:12,opacity:si===0?0.3:1}}>▲</button>
                      <button onClick={()=>moveSeccion(si,1)} disabled={si===secciones.length-1} style={{background:'rgba(255,255,255,0.2)',border:'none',color:'#fff',width:26,height:26,cursor:si===secciones.length-1?'default':'pointer',borderRadius:3,fontSize:12,opacity:si===secciones.length-1?0.3:1}}>▼</button>
                      <button onClick={()=>setActiveSeccion(si)} style={{background:'#ffffff',border:'none',color:'#111',padding:'5px 12px',cursor:'pointer',borderRadius:3,fontSize:11,fontWeight:700}}>✏️ Editar</button>
                      <button onClick={()=>removeSeccion(si)} style={{background:'rgba(255,0,0,0.3)',border:'none',color:'#fff',width:26,height:26,cursor:'pointer',borderRadius:3,fontSize:12}}>🗑</button>
                    </div>
                    {/* Preview filas */}
                    {(sec.rows||[]).length>0 && (
                      <div style={{padding:'6px 14px 8px', background:'#fafafa'}}>
                        {(sec.rows||[]).slice(0,2).map((r: any,ri: number)=>(
                          <div key={ri} style={{fontSize:11,color:'#555',padding:'2px 0',borderBottom:'1px solid #eee'}}>
                            <span style={{fontWeight:600,marginRight:6}}>{r.macroTema||'—'}</span>
                            <span style={{color:'#888'}}>{r.tema||''}</span>
                          </div>
                        ))}
                        {(sec.rows||[]).length>2 && <div style={{fontSize:10,color:'#aaa',marginTop:3}}>+{(sec.rows||[]).length-2} más...</div>}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            /* ── EDITOR DE FILAS DE SECCIÓN ACTIVA ── */
            <div style={{padding:24}}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:14}}>
                <div>
                  <div style={{fontSize:12,fontWeight:900,textTransform:'uppercase',color:TIPO_COLORS[tipo]||'#111'}}>
                    {FSC_TIPOS.find(t=>t.key===tipo)?.emoji} {FSC_TIPOS.find(t=>t.key===tipo)?.label}
                    {sec?.nombre && <span style={{fontWeight:400,color:'#555',marginLeft:8}}>· {sec.nombre}</span>}
                  </div>
                  <div style={{fontSize:11,color:'#555',marginTop:2}}>{currentRows.length} filas</div>
                </div>
                <button onClick={addRow} style={{background:'#111111',color:'#ffffff',border:'none',padding:'8px 14px',cursor:'pointer',fontSize:11,fontWeight:700,borderRadius:3}}>+ AGREGAR FILA</button>
              </div>
              <div style={{border:'1px solid #cccccc', borderRadius:4, overflowX:'auto'}}>
                <div style={{display:'grid', gridTemplateColumns:gridCols, gap:6, padding:'6px 10px', borderBottom:'2px solid #111111', background:'#f5f5f5', minWidth:600}}>
                  {[...cols.map((c: any)=>c.label),''].map((h,i)=>(
                    <div key={i} style={{fontSize:9,color:'#555',textTransform:'uppercase',fontWeight:700,letterSpacing:'0.04em'}}>{h}</div>
                  ))}
                </div>
                {currentRows.map((row: any, ri: number) => (
                  <div key={ri} style={{display:'grid', gridTemplateColumns:gridCols, gap:6, alignItems:'flex-start', padding:'5px 10px', borderBottom:'1px solid #eeeeee', background:ri%2===0?'#fafafa':'#ffffff', minWidth:600}}>
                    {cols.map((col: any)=>{
                      if(col.type==='ferr') {
                        const ferr = (row[col.key] && typeof row[col.key]==='object') ? row[col.key] : {tipo:row[col.key]||'PPT',url:''};
                        const FERR_ICONS: any = {PPT:'📊',Video:'🎬',Link:'🔗',Doc:'📄','Operação':'⚙️',Simulador:'🖥',N:'—'};
                        return (
                          <div key={col.key} style={{display:'flex',flexDirection:'column',gap:3}}>
                            <select value={ferr.tipo||'PPT'} onChange={e=>updateRow(ri,col.key,{...ferr,tipo:e.target.value})}
                              style={{...inp(),width:'100%',cursor:'pointer',fontSize:11}}>
                              {FSC_FERR_TIPOS.map(t=><option key={t} value={t}>{FERR_ICONS[t]||'📎'} {t}</option>)}
                            </select>
                            <input value={ferr.url||''} onChange={e=>updateRow(ri,col.key,{...ferr,url:e.target.value})}
                              placeholder="https://..." style={{...inp(),width:'100%',fontSize:10,color:'#1a56db'}}/>
                          </div>
                        );
                      }
                      if(col.type==='textarea') return <textarea key={col.key} value={row[col.key]||''} onChange={e=>updateRow(ri,col.key,e.target.value)} rows={2} style={{...inp(),width:'100%',resize:'vertical',lineHeight:1.4}}/>;
                      if(col.type==='number') return <input key={col.key} type="number" value={row[col.key]||''} onChange={e=>updateRow(ri,col.key,parseInt(e.target.value)||1)} style={{...inp(),width:'100%',textAlign:'center'}}/>;
                      return <input key={col.key} value={row[col.key]||''} onChange={e=>updateRow(ri,col.key,e.target.value)} style={{...inp(),width:'100%'}}/>;
                    })}
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:2,paddingTop:2}}>
                      <button onClick={()=>moveRow(ri,-1)} disabled={ri===0} style={{background:'#fff',border:'1px solid #ccc',width:26,height:22,cursor:ri===0?'default':'pointer',borderRadius:3,fontSize:10,opacity:ri===0?0.3:1}}>▲</button>
                      <button onClick={()=>moveRow(ri,1)} disabled={ri===currentRows.length-1} style={{background:'#fff',border:'1px solid #ccc',width:26,height:22,cursor:ri===currentRows.length-1?'default':'pointer',borderRadius:3,fontSize:10,opacity:ri===currentRows.length-1?0.3:1}}>▼</button>
                      <button onClick={()=>removeRow(ri)} style={{background:'#fff',border:'1px solid #ffcccc',width:26,height:22,cursor:'pointer',borderRadius:3,fontSize:10,color:'#cc3333'}}>🗑</button>
                    </div>
                  </div>
                ))}
                {currentRows.length===0 && (
                  <div style={{padding:40,textAlign:'center',color:'#888'}}>Sin filas — haz clic en + AGREGAR FILA</div>
                )}
              </div>
              {tipo==='ojt' && (
                <div style={{marginTop:24, border:'2px solid #111111', borderRadius:6, overflow:'hidden'}}>
                  <div style={{background:'#111111', padding:'8px 14px', display:'flex', alignItems:'center', gap:8}}>
                    <span style={{fontSize:15}}>⚠️</span>
                    <span style={{color:'#fff', fontWeight:900, fontSize:12, textTransform:'uppercase', letterSpacing:'0.08em'}}>Campos especiales OJT</span>
                    <span style={{color:'rgba(255,255,255,0.7)', fontSize:11}}>· Alerta DB OJT + Ajuste de Rota</span>
                  </div>
                  <div style={{padding:16, display:'grid', gridTemplateColumns:'1fr 1fr', gap:14, background:'#f9f9f9'}}>
                    <div>
                      <div style={{fontSize:10,color:'#555',textTransform:'uppercase',fontWeight:700,letterSpacing:'0.06em',marginBottom:6}}>📋 DB OJT · Texto + Link</div>
                      <div style={{display:'flex',flexDirection:'column',gap:5}}>
                        <div>
                          <div style={{fontSize:9,color:'#888',marginBottom:2}}>✏️ Texto visible del botón</div>
                          <input value={sec?.dbOjtLabel||''} onChange={e=>updateSeccionField(activeSeccion!,'dbOjtLabel',e.target.value)}
                            placeholder="ej: Diário de Bordo OJT · Grupo 01"
                            style={{...inp(),width:'100%',fontWeight:600}}/>
                        </div>
                        <div>
                          <div style={{fontSize:9,color:'#888',marginBottom:2}}>🔗 URL del enlace</div>
                          <input value={sec?.dbOjtUrl||''} onChange={e=>updateSeccionField(activeSeccion!,'dbOjtUrl',e.target.value)}
                            placeholder="https://docs.google.com/spreadsheets/d/..."
                            style={{...inp(),width:'100%',color:'#1a56db'}}/>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div style={{fontSize:10,color:'#555',textTransform:'uppercase',fontWeight:700,letterSpacing:'0.06em',marginBottom:4}}>⏱ Total CH (ej: 5:40:00)</div>
                      <input value={sec?.totalCh||''} onChange={e=>updateSeccionField(activeSeccion!,'totalCh',e.target.value)}
                        placeholder="5:40:00" style={{...inp(),width:'100%'}}/>
                    </div>
                    <div style={{gridColumn:'1/-1', borderTop:'1px solid #dddddd', paddingTop:12, marginTop:4}}>
                      <div style={{fontSize:10,color:'#555',textTransform:'uppercase',fontWeight:700,letterSpacing:'0.06em',marginBottom:8}}>📦 Ajuste de Rota para Reprovados</div>
                      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:10}}>
                        <div style={{gridColumn:'1/-1'}}>
                          <div style={{fontSize:10,color:'#888',marginBottom:3}}>Descripción (vacío = usa texto por defecto)</div>
                          <textarea value={sec?.ajusteRota||''} onChange={e=>updateSeccionField(activeSeccion!,'ajusteRota',e.target.value)}
                            rows={2} placeholder="Os alunos que não atingirem a média final de 80%..."
                            style={{...inp(),width:'100%',resize:'vertical'}}/>
                        </div>
                        <div>
                          <div style={{fontSize:10,color:'#888',marginBottom:3}}>🔗 URL Forms KON</div>
                          <input value={sec?.ajusteRotaUrlKon||''} onChange={e=>updateSeccionField(activeSeccion!,'ajusteRotaUrlKon',e.target.value)}
                            placeholder="https://..." style={{...inp(),width:'100%',color:'#1a56db'}}/>
                        </div>
                        <div>
                          <div style={{fontSize:10,color:'#888',marginBottom:3}}>🔗 URL Forms AeC</div>
                          <input value={sec?.ajusteRotaUrlAec||''} onChange={e=>updateSeccionField(activeSeccion!,'ajusteRotaUrlAec',e.target.value)}
                            placeholder="https://..." style={{...inp(),width:'100%',color:'#1a56db'}}/>
                        </div>
                        <div>
                          <div style={{fontSize:10,color:'#888',marginBottom:3}}>⏱ CH Ajuste (ej: 0:30:00)</div>
                          <input value={sec?.ajusteRotaCh||''} onChange={e=>updateSeccionField(activeSeccion!,'ajusteRotaCh',e.target.value)}
                            placeholder="0:30:00" style={{...inp(),width:'100%'}}/>
                        </div>
                      </div>
                      <div style={{marginTop:8, fontSize:10, color:'#555555'}}>
                        💡 La fila "Ajuste de Rota" solo aparece si completas al menos un campo (descripción, URL KON o URL AeC).
                      </div>
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
