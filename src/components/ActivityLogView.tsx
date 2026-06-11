import React, { useState } from 'react';
import { ChevronLeft, Activity, User, Clock, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

export const ActivityLogView = ({ logs, activeUser, onBack }: any) => {
  const isAdmin = activeUser === 'carlose.araya@latam.com';
  
  // Filter logs: Admin sees all, Instructors see only their own
  const visibleLogs = isAdmin ? logs : logs.filter((log: any) => log.user === activeUser);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredLogs = visibleLogs.filter((log: any) => 
    log.action.toLowerCase().includes(searchTerm.toLowerCase()) || 
    log.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ minHeight: '100vh', background: '#0F004F', display: 'flex', flexDirection: 'column', color: '#fff', fontFamily: 'Trebuchet MS, Arial, sans-serif' }}>
      
      {/* Header */}
      <div style={{ background: 'rgba(255,255,255,0.05)', padding: '24px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <button 
          onClick={onBack} 
          style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', padding: '8px 20px', borderRadius: '30px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, fontSize: '12px', fontWeight: 700, transition: 'all 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
        >
          <ChevronLeft size={16} /> VOLVER
        </button>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Activity size={24} color="#00FFF2" />
          <div style={{ fontSize: '20px', fontWeight: 900, letterSpacing: '0.1em' }}>REGISTRO DE ACTIVIDAD</div>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '48px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
          <div>
            <div style={{ fontSize: '12px', color: '#00FFF2', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 700 }}>Telemetry</div>
            <div style={{ fontSize: '28px', fontWeight: 900, marginBottom: '8px' }}>Seguimiento de Sesión</div>
            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>
              Mostrando registros para: <span style={{ color: '#fff', fontWeight: 700 }}>{isAdmin ? 'Todos los Usuarios (Admin)' : activeUser}</span>
            </div>
          </div>
          
          <input 
            type="text" 
            placeholder="Buscar evento..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              background: 'rgba(0,0,0,0.3)',
              border: '1px solid rgba(255,255,255,0.2)',
              padding: '12px 20px',
              borderRadius: '8px',
              color: '#fff',
              outline: 'none',
              width: '300px',
              fontSize: '14px'
            }}
          />
        </div>

        <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.05)' }}>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '12px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', width: '200px' }}>Fecha / Hora</th>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '12px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', width: '250px' }}>Usuario</th>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '12px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', width: '200px' }}>Acción</th>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '12px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Detalle</th>
              </tr>
            </thead>
            <tbody>
              {filteredLogs.length === 0 ? (
                <tr>
                  <td colSpan={4} style={{ padding: '60px', textAlign: 'center', color: 'rgba(255,255,255,0.4)' }}>
                    <Terminal size={48} style={{ opacity: 0.2, marginBottom: '16px', display: 'block', margin: '0 auto' }} />
                    <div style={{ fontSize: '16px', fontWeight: 700 }}>No hay registros disponibles</div>
                    <div style={{ fontSize: '14px', marginTop: '8px' }}>Las acciones de navegación aparecerán aquí.</div>
                  </td>
                </tr>
              ) : (
                filteredLogs.map((log: any, i: number) => {
                  const date = new Date(log.time);
                  return (
                    <motion.tr 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      key={i} 
                      style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
                    >
                      <td style={{ padding: '16px', color: 'rgba(255,255,255,0.7)', fontSize: '13px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <Clock size={14} color="#00FFF2" />
                          {date.toLocaleDateString()} {date.toLocaleTimeString()}
                        </div>
                      </td>
                      <td style={{ padding: '16px', fontWeight: 600, fontSize: '13px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <User size={14} color="rgba(255,255,255,0.4)" />
                          {log.user}
                        </div>
                      </td>
                      <td style={{ padding: '16px' }}>
                        <span style={{ background: 'rgba(0, 255, 242, 0.1)', color: '#00FFF2', padding: '4px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: 900, letterSpacing: '0.1em' }}>
                          {log.action}
                        </span>
                      </td>
                      <td style={{ padding: '16px', color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>
                        {log.details}
                      </td>
                    </motion.tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
