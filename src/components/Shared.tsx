import React from 'react';

export const Btn = ({ onClick, children, style={} }) => (
  <button onClick={onClick} style={{
    background:'#ffffff', border:'2px solid #111111', padding:'8px 18px',
    cursor:'pointer', fontSize:13, fontWeight:700, color:'#111111',
    fontFamily:'Trebuchet MS,Trebuchet,Arial,sans-serif',
    borderRadius:4, ...style
  }}>{children}</button>
);

export const BackBtn = ({ onClick, label='VOLVER' }) => (
  <Btn onClick={onClick} style={{display:'flex',alignItems:'center',gap:6}}>
    ← {label}
  </Btn>
);
