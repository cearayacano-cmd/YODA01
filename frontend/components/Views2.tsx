import React, { useState } from 'react';
import { BackBtn } from './Shared';

export const GalaxySelection = ({ onNavigate, onBack }) => {
  const sectors = [
    { id:'frontLine', label:'FRONT LINE', desc:'Sector de atención directa al cliente' },
    { id:'soporte',   label:'SOPORTE',    desc:'Back Office y Frequent Flyer' },
    { id:'fieldSupport', label:'FIELD SUPPORT', desc:'Soporte en campo' },
  ];
  return (
    <div style={{minHeight:'100vh', background:'#F8F7FF', color: '#0B0033', display:'flex', flexDirection:'column'}}>
      <div style={{background:'#111111', padding:'10px 24px', display:'flex', alignItems:'center', gap:20, borderBottom: '1px solid rgba(0,0,0,0.1)'}}>
        <BackBtn onClick={onBack} label="VOLVER"/>
        <span style={{color:'#ffffff', fontSize:15, fontWeight:900, letterSpacing:'0.1em'}}>EXPLORACIÓN DE SECTORES</span>
      </div>
      <div style={{flex:1, padding:40}}>
        <div style={{fontSize:11, color:'rgba(11,0,51,0.5)', letterSpacing:'0.5em', textTransform:'uppercase', marginBottom:8, textAlign:'center'}}>SELECCIONA UN SECTOR</div>
        <div style={{display:'flex', gap:20, justifyContent:'center', flexWrap:'wrap', marginTop:24}}>
          {sectors.map(s => (
            <div key={s.id} onClick={()=>onNavigate('planets', s.id)} style={{border:'2px solid rgba(11,0,51,0.2)', padding:'28px 36px', cursor:'pointer', textAlign:'center', borderRadius:6, minWidth:200, background: 'rgba(255,255,255,0.8)', transition: 'all 0.3s ease'}}
              onMouseEnter={e=>{e.currentTarget.style.background='#ffffff'; e.currentTarget.style.borderColor='#111111'}}
              onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,0.8)'; e.currentTarget.style.borderColor='rgba(11,0,51,0.2)'}}>
              <div style={{fontSize:20, fontWeight:900, color:'#111111', marginBottom:8}}>{s.label}</div>
              <div style={{fontSize:12, color:'rgba(11,0,51,0.6)', marginBottom:16}}>{s.desc}</div>
              <div style={{fontSize:11, fontWeight:700, letterSpacing:'0.15em', color: '#B20F3B'}}>INGRESAR →</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const thS = () => ({padding:'12px 10px', fontSize:10, color:'rgba(11,0,51,0.5)', textTransform:'uppercase', fontWeight:700, letterSpacing:'0.05em', textAlign:'left', borderBottom:'1px solid rgba(11,0,51,0.1)'});
const tdS = () => ({padding:'12px 10px', fontSize:12, borderBottom:'1px solid rgba(11,0,51,0.05)', color: '#0B0033'});

export const MacroTemaTable = ({ mt, rows }: any) => {
  const tiempo = rows[0] ? rows[0].tiempo||'' : '';
  return (
    <div style={{marginBottom:48}}>
      <div style={{display:'flex', alignItems:'center', gap:12, marginBottom:16, borderBottom:'2px solid rgba(11,0,51,0.2)', paddingBottom:12}}>
        <div style={{fontSize:16, fontWeight:900, color:'#0B0033', textTransform:'uppercase', letterSpacing:'0.05em'}}>{mt}</div>
        {tiempo&&<div style={{fontSize:11, color:'#B20F3B', background:'rgba(178,15,59,0.05)', border:'1px solid rgba(178,15,59,0.2)', padding:'2px 12px', borderRadius:12}}>⏱ {tiempo}</div>}
      </div>
      <table style={{width:'100%', borderCollapse:'collapse', background: '#ffffff', borderRadius: 8, overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.05)'}}>
        <thead>
          <tr style={{background:'#F4F5F9'}}>
            <th style={{...thS(), width:40}}>DÍA</th>
            <th style={{...thS(), width:160}}>TEMA</th>
            <th style={{...thS()}}>DETALHE PARA O INSTRUTOR</th>
            <th style={{...thS(), width:160}}>FERRAMENTAS</th>
            <th style={{...thS(), width:90}}>TIEMPO</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row,i)=>(
            <tr key={i} style={{background:i%2===0?'#fafafa':'#ffffff', verticalAlign:'top'}}>
              <td style={{...tdS(), textAlign:'center', fontWeight:700, width:40, color: '#B20F3B'}}>{row.dia}</td>
              <td style={{...tdS(), width:160}}>
                <div style={{fontSize:12, fontWeight:600, lineHeight:1.5, color: '#0B0033'}}>{row.tema}</div>
              </td>
              <td style={{...tdS()}}>
                <div style={{fontSize:12, lineHeight:1.6, whiteSpace:'pre-line', color: 'rgba(11,0,51,0.8)'}}>{row.detalhe||row.tema}</div>
                {row.detalheUrl && (
                  <a href={row.detalheUrl} target="_blank" rel="noopener noreferrer"
                    style={{display:'inline-flex', alignItems:'center', gap:4, marginTop:8, fontSize:11, color:'#B20F3B', fontWeight:600, textDecoration:'none', border:'1px solid rgba(178,15,59,0.2)', background:'rgba(178,15,59,0.05)', padding:'4px 12px', borderRadius:4, transition: 'all 0.2s ease'}}
                    onMouseEnter={e=>e.currentTarget.style.background='rgba(178,15,59,0.1)'}
                    onMouseLeave={e=>e.currentTarget.style.background='rgba(178,15,59,0.05)'}>
                    🔗 Ver recurso
                  </a>
                )}
              </td>
              <td style={{...tdS(), width:160}}>
                <span style={{fontSize:12, color:'rgba(11,0,51,0.7)'}}>{row.ferramentas||''}</span>
              </td>
              <td style={{...tdS(), width:90, textAlign:'center', fontWeight:700, fontSize:12, color: '#B20F3B'}}>{i===0?tiempo:''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
