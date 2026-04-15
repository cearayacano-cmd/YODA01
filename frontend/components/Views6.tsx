import React from 'react';
import { BackBtn } from './Shared';

const FERR_ICONS = {PPT:'📊',Video:'🎬',Link:'🔗',Doc:'📄','Operação':'⚙️',Simulador:'🖥️','N/A':'—'};
const FSC_TIPOS = [
  { key:'mision1', label:'Missão 1',   emoji:'🚀' },
  { key:'landing', label:'LANDING',    emoji:'🛬' },
  { key:'ojt',     label:'Desafio OJT', emoji:'🎯' },
];

export const FscFerrCell = ({ f }: any) => {
  const ferr = (f && typeof f==='object') ? f : {tipo:f||'',url:''};
  const icon = FERR_ICONS[ferr.tipo] || '📎';
  if(!ferr.tipo && !ferr.url) return <span style={{color:'#aaa'}}>—</span>;
  return (
    <div style={{display:'flex',flexDirection:'column',gap:3}}>
      <span style={{fontWeight:600,fontSize:12, color: '#0B0033'}}>{icon} {ferr.tipo}</span>
      {ferr.url && ferr.url!=='#' && (
        <a href={ferr.url} target="_blank" rel="noopener noreferrer"
          style={{display:'inline-flex',alignItems:'center',gap:3,fontSize:10,color:'#B20F3B',fontWeight:600,textDecoration:'none',background:'rgba(178,15,59,0.05)',border:'1px solid rgba(178,15,59,0.2)',padding:'2px 7px',borderRadius:4, transition: 'all 0.2s ease'}}
          onMouseEnter={e=>e.currentTarget.style.background='rgba(178,15,59,0.1)'}
          onMouseLeave={e=>e.currentTarget.style.background='rgba(178,15,59,0.05)'}>
          🔗 Abrir
        </a>
      )}
    </div>
  );
};

export const FscSectionTable = ({ seccion, idx }: any) => {
  const tipo = seccion.tipo || 'mision1';
  const rows = seccion.rows || [];
  const tipoInfo = FSC_TIPOS.find(t=>t.key===tipo) || FSC_TIPOS[0];
  const thS2 = () => ({padding:'12px 10px', fontSize:10, color:'rgba(11,0,51,0.5)', textTransform:'uppercase', fontWeight:700, letterSpacing:'0.05em', textAlign:'left', borderBottom:'1px solid rgba(11,0,51,0.1)'});
  const tdS2 = () => ({padding:'12px 10px', fontSize:12, borderBottom:'1px solid rgba(11,0,51,0.05)', verticalAlign:'top', color: '#0B0033'});
  const headerBg = tipo==='mision1'?'#1a1a2e': tipo==='landing'?'#1a3a1a':'#2e1a1a';
  return (
    <div style={{marginBottom:32}}>
      <div style={{background:headerBg, padding:'10px 16px', display:'flex', alignItems:'center', gap:10, borderRadius:'4px 4px 0 0', border: '1px solid rgba(0,0,0,0.1)', borderBottom: 'none'}}>
        <span style={{fontSize:16}}>{tipoInfo.emoji}</span>
        <span style={{color:'#fff', fontWeight:900, fontSize:13, textTransform:'uppercase', letterSpacing:'0.08em'}}>{tipoInfo.label}</span>
        {seccion.nombre && <span style={{color:'rgba(255,255,255,0.7)', fontSize:12}}>· {seccion.nombre}</span>}
        <span style={{marginLeft:'auto', color:'rgba(255,255,255,0.5)', fontSize:10}}>{rows.length} nodos</span>
      </div>
      <table style={{width:'100%', borderCollapse:'collapse', border:'1px solid rgba(11,0,51,0.1)', borderTop:'none', background: '#ffffff', boxShadow: '0 4px 12px rgba(0,0,0,0.05)'}}>
        <thead>
          <tr style={{background:'#F4F5F9'}}>
            {tipo==='ojt' ? <>
              <th style={thS2()}>MACRO TEMA</th>
              <th style={{...thS2(), width:50}}>DÍA</th>
              <th style={thS2()}>TEMA</th>
              <th style={{...thS2(), width:160}}>FERRAMENTAS</th>
              <th style={{...thS2(), width:90}}>CH</th>
            </> : <>
              <th style={{...thS2(), width:130}}>MACRO TEMA</th>
              <th style={{...thS2(), width:50}}>DÍA</th>
              <th style={{...thS2(), width:180}}>TEMA</th>
              <th style={thS2()}>DETALHE PARA O INSTRUTOR</th>
              <th style={{...thS2(), width:130}}>FERRAMENTAS</th>
              <th style={{...thS2(), width:90}}>IA - PIC</th>
              <th style={{...thS2(), width:90}}>{tipo==='landing'?'CH':'TIEMPO'}</th>
            </>}
          </tr>
        </thead>
        <tbody>
          {rows.map((row,i)=>(
            <tr key={i} style={{background:i%2===0?'#fafafa':'#ffffff'}}>
              {tipo==='ojt' ? <>
                <td style={tdS2()}>{row.macroTema}</td>
                <td style={{...tdS2(),textAlign:'center',fontWeight:700, color: '#B20F3B'}}>{row.dia}</td>
                <td style={tdS2()}><div style={{whiteSpace:'pre-line'}}>{row.tema}</div></td>
                <td style={tdS2()}><FscFerrCell f={row.ferramentas}/></td>
                <td style={{...tdS2(),textAlign:'center',fontWeight:700, color: '#B20F3B'}}>{row.ch}</td>
              </> : <>
                <td style={tdS2()}>{row.macroTema}</td>
                <td style={{...tdS2(),textAlign:'center',fontWeight:700, color: '#B20F3B'}}>{row.dia}</td>
                <td style={{...tdS2(),fontWeight:600}}>{row.tema}</td>
                <td style={tdS2()}><div style={{whiteSpace:'pre-line', color: 'rgba(11,0,51,0.7)'}}>{row.detalhe}</div></td>
                <td style={tdS2()}><FscFerrCell f={row.ferramentas}/></td>
                <td style={tdS2()}>{row.iaPic?<a href={row.iaPic} target="_blank" rel="noopener noreferrer" style={{color:'#B20F3B',fontWeight:600,textDecoration:'none'}}>🔗 Ver</a>:''}</td>
                <td style={{...tdS2(),textAlign:'center',fontWeight:700, color: '#B20F3B'}}>{tipo==='landing'?row.ch:row.tiempo}</td>
              </>}
            </tr>
          ))}
          {tipo==='ojt' && <>
            <tr style={{background:'#111111'}}>
              <td colSpan={3} style={{...tdS2(), color:'#ffffff', fontWeight:700, fontSize:12, borderBottom:'1px solid rgba(255,255,255,0.1)', paddingTop:12, paddingBottom:12}}>
                ⚠️ Atención: Recuerde reservar tiempo para completar el cuaderno de registro de prácticas.
              </td>
              <td style={{...tdS2(), borderBottom:'1px solid rgba(255,255,255,0.1)', textAlign:'center'}}>
                {seccion.dbOjtUrl && seccion.dbOjtUrl !== '#' ? (
                  <a href={seccion.dbOjtUrl} target="_blank" rel="noopener noreferrer"
                    style={{display:'inline-flex',alignItems:'center',gap:4,fontSize:11,color:'#ffffff',fontWeight:700,textDecoration:'none',background:'rgba(255,255,255,0.1)',border:'1px solid rgba(255,255,255,0.3)',padding:'6px 12px',borderRadius:4, transition: 'all 0.2s ease'}}
                    onMouseEnter={e=>e.currentTarget.style.background='rgba(255,255,255,0.2)'}
                    onMouseLeave={e=>e.currentTarget.style.background='rgba(255,255,255,0.1)'}>
                    📋 {seccion.dbOjtLabel || 'DB OJT'}
                  </a>
                ) : (
                  <span style={{fontSize:11,color:'rgba(255,255,255,0.6)',fontWeight:700}}>
                    📋 {seccion.dbOjtLabel || 'DB OJT'}
                  </span>
                )}
              </td>
              <td style={{...tdS2(), color:'#B20F3B', fontWeight:900, textAlign:'center', fontSize:13, borderBottom:'1px solid rgba(255,255,255,0.1)'}}>
                {seccion.totalCh || '5:40:00'}
              </td>
            </tr>
            {(seccion.ajusteRota || seccion.ajusteRotaUrlKon || seccion.ajusteRotaUrlAec) && (
              <tr style={{background:'rgba(11,0,51,0.05)', border:'1px solid rgba(11,0,51,0.2)'}}>
                <td style={{...tdS2(), fontWeight:700, fontSize:12, color:'#0B0033', borderBottom:'1px solid rgba(11,0,51,0.1)'}}>
                  Ajuste de Rota<br/>
                  <span style={{fontSize:10, fontWeight:400, color:'rgba(11,0,51,0.5)'}}>para Reprovados</span>
                </td>
                <td style={{...tdS2(), textAlign:'center', fontWeight:700, color:'#0B0033', borderBottom:'1px solid rgba(11,0,51,0.1)'}}></td>
                <td style={{...tdS2(), fontSize:12, color:'rgba(11,0,51,0.8)', lineHeight:1.6, borderBottom:'1px solid rgba(11,0,51,0.1)'}}>
                  {seccion.ajusteRota || 'Os alumnos que não atingirem a média final de 80% devem realizar o "Ajuste de Rota"...'}
                </td>
                <td style={{...tdS2(), borderBottom:'1px solid rgba(11,0,51,0.1)'}}>
                  <div style={{display:'flex', flexDirection:'column', gap:5}}>
                    {seccion.ajusteRotaUrlKon && seccion.ajusteRotaUrlKon !== '#' && <a href={seccion.ajusteRotaUrlKon} target="_blank" rel="noopener noreferrer" style={{fontSize:11,color:'#B20F3B',fontWeight:700, textDecoration: 'none'}}>🔗 Forms KON</a>}
                    {seccion.ajusteRotaUrlAec && seccion.ajusteRotaUrlAec !== '#' && <a href={seccion.ajusteRotaUrlAec} target="_blank" rel="noopener noreferrer" style={{fontSize:11,color:'#B20F3B',fontWeight:700, textDecoration: 'none'}}>🔗 Forms AeC</a>}
                  </div>
                </td>
                <td style={{...tdS2(), textAlign:'center', fontWeight:900, fontSize:13, color:'#B20F3B', borderBottom:'1px solid rgba(11,0,51,0.1)'}}>
                  {seccion.ajusteRotaCh || '0:30:00'}
                </td>
              </tr>
            )}
          </>}
        </tbody>
      </table>
    </div>
  );
};

export const PlanetContentView = ({ planetIdx, onBack, data, planetLabel, sectorLabel="SECTOR" }: any) => {
  const raw = (Array.isArray(data) && data[planetIdx]) ? data[planetIdx] : null;
  
  let secciones = [];
  if (raw) {
    if (raw.secciones) {
      secciones = raw.secciones;
    } else if (Array.isArray(raw)) {
      // Si es un array, verificamos si el primer elemento parece una sección
      if (raw.length > 0 && (raw[0].tipo || raw[0].rows)) {
        secciones = raw;
      } else {
        // Si no, lo tratamos como un array de filas para una sección por defecto
        secciones = [{ tipo: 'mision1', nombre: '', rows: raw }];
      }
    } else if (raw.rows) {
      secciones = [{ tipo: raw.tipo || 'mision1', nombre: '', rows: raw.rows }];
    }
  }

  return (
    <div style={{minHeight:'100vh', background:'#F8F7FF', color: '#0B0033'}}>
      <div style={{background:'#111111', padding:'10px 24px', display:'flex', alignItems:'center', gap:20, borderBottom: '1px solid rgba(0,0,0,0.1)'}}>
        <BackBtn onClick={onBack} label="VOLVER"/>
        <span style={{color:'#ffffff', fontSize:15, fontWeight:900}}>{sectorLabel} · {planetLabel||'Planeta'}</span>
      </div>
      <div style={{padding:24, maxWidth:1300, margin:'0 auto'}}>
        {secciones.length === 0 ? (
          <div style={{textAlign:'center', padding:60, color:'rgba(11,0,51,0.4)', border:'1px dashed rgba(11,0,51,0.2)', borderRadius:4}}>
            NO HAY CONTENIDO CONFIGURADO PARA ESTE PLANETA
          </div>
        ) : secciones.map((sec: any, i: number) => (
          <FscSectionTable key={i} seccion={sec} idx={i}/>
        ))}
      </div>
    </div>
  );
};
