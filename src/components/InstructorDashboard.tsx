import React, { useState } from 'react';
import { ChevronLeft, Users, Navigation, CheckCircle, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export const InstructorDashboard = ({ logs, onBack }: any) => {
  const [activeTab, setActiveTab] = useState('navigation');
  const [searchTerm, setSearchTerm] = useState('');

  const navigationLogs = logs.filter((l: any) => l.action === 'NAVIGATE' && l.user !== 'carlose.araya@latam.com');
  const completionLogs = logs.filter((l: any) => l.action === 'COMPLETION' && l.user !== 'carlose.araya@latam.com');

  const filteredNavLogs = navigationLogs.filter((l: any) => l.user.toLowerCase().includes(searchTerm.toLowerCase()) || l.details.toLowerCase().includes(searchTerm.toLowerCase()));
  const filteredCompLogs = completionLogs.filter((l: any) => l.user.toLowerCase().includes(searchTerm.toLowerCase()) || l.details.toLowerCase().includes(searchTerm.toLowerCase()));

  // Light theme brand colors
  const primaryBrand = '#4F46E5'; // Indigo
  const secondaryBrand = '#16A34A'; // Green

  return (
    <div style={{ minHeight: '100vh', background: '#F8F7FF', display: 'flex', flexDirection: 'column', color: '#111827', fontFamily: '"Inter", Trebuchet MS, Arial, sans-serif' }}>
      
      {/* Header */}
      <div style={{ background: '#FFFFFF', padding: '24px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.1)', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
        <button 
          onClick={onBack} 
          style={{ background: 'transparent', border: '1px solid rgba(0,0,0,0.2)', color: '#111827', padding: '8px 20px', borderRadius: '30px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, fontSize: '12px', fontWeight: 700, transition: 'all 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.05)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
        >
          <ChevronLeft size={16} /> VOLVER
        </button>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Users size={24} color={primaryBrand} />
          <div style={{ fontSize: '20px', fontWeight: 900, letterSpacing: '0.1em' }}>MONITOREO DE INSTRUCTORES</div>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '48px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
          <div>
            <div style={{ fontSize: '12px', color: primaryBrand, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 700 }}>Panel de Control</div>
            <div style={{ fontSize: '28px', fontWeight: 900, marginBottom: '8px' }}>Rendimiento y Avance</div>
            <div style={{ color: 'rgba(0,0,0,0.6)', fontSize: '14px' }}>
              Seguimiento de actividad y marcas de instructores en la plataforma.
            </div>
          </div>
          
          <input 
            type="text" 
            placeholder="Buscar instructor o detalle..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              background: '#FFFFFF',
              border: '1px solid rgba(0,0,0,0.2)',
              padding: '12px 20px',
              borderRadius: '8px',
              color: '#111827',
              outline: 'none',
              width: '300px',
              fontSize: '14px',
              boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
            }}
          />
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
          <button 
            onClick={() => setActiveTab('navigation')}
            style={{
              padding: '12px 24px',
              background: activeTab === 'navigation' ? primaryBrand : '#FFFFFF',
              color: activeTab === 'navigation' ? '#fff' : '#6B7280',
              border: activeTab === 'navigation' ? '1px solid transparent' : '1px solid rgba(0,0,0,0.1)',
              borderRadius: '8px',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s ease',
              boxShadow: activeTab === 'navigation' ? '0 4px 6px -1px rgba(79, 70, 229, 0.2)' : '0 1px 2px rgba(0,0,0,0.05)'
            }}
          >
            <Navigation size={18} /> Galaxias y Clases
          </button>
          <button 
            onClick={() => setActiveTab('completion')}
            style={{
              padding: '12px 24px',
              background: activeTab === 'completion' ? secondaryBrand : '#FFFFFF',
              color: activeTab === 'completion' ? '#fff' : '#6B7280',
              border: activeTab === 'completion' ? '1px solid transparent' : '1px solid rgba(0,0,0,0.1)',
              borderRadius: '8px',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s ease',
              boxShadow: activeTab === 'completion' ? '0 4px 6px -1px rgba(22, 163, 74, 0.2)' : '0 1px 2px rgba(0,0,0,0.05)'
            }}
          >
            <CheckCircle size={18} /> Lo que Marcan
          </button>
        </div>

        {/* Data Table */}
        <div style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.1)', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#F9FAFB', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '12px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.1em', width: '200px', fontWeight: 700 }}>Fecha / Hora</th>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '12px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.1em', width: '250px', fontWeight: 700 }}>Instructor</th>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '12px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>Detalle de Actividad</th>
              </tr>
            </thead>
            <tbody>
              {activeTab === 'navigation' && filteredNavLogs.length === 0 && (
                <tr>
                  <td colSpan={3} style={{ padding: '40px', textAlign: 'center', color: '#6B7280' }}>
                    No hay registros de navegación de instructores.
                  </td>
                </tr>
              )}
              {activeTab === 'completion' && filteredCompLogs.length === 0 && (
                <tr>
                  <td colSpan={3} style={{ padding: '40px', textAlign: 'center', color: '#6B7280' }}>
                    No hay registros de marcas o completaciones de instructores.
                  </td>
                </tr>
              )}

              {(activeTab === 'navigation' ? filteredNavLogs : filteredCompLogs).map((log: any, i: number) => {
                const date = new Date(log.time);
                return (
                  <motion.tr 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    key={i} 
                    style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}
                  >
                    <td style={{ padding: '16px', color: '#4B5563', fontSize: '13px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Clock size={14} color={activeTab === 'navigation' ? primaryBrand : secondaryBrand} />
                        {date.toLocaleDateString()} {date.toLocaleTimeString()}
                      </div>
                    </td>
                    <td style={{ padding: '16px', fontWeight: 600, fontSize: '13px', color: '#111827' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Users size={14} color="#9CA3AF" />
                        {log.user}
                      </div>
                    </td>
                    <td style={{ padding: '16px', color: '#111827', fontSize: '14px', fontWeight: 500 }}>
                      <span style={{ 
                        background: activeTab === 'navigation' ? 'rgba(79, 70, 229, 0.1)' : 'rgba(22, 163, 74, 0.1)', 
                        color: activeTab === 'navigation' ? primaryBrand : secondaryBrand, 
                        padding: '4px 10px', 
                        borderRadius: '12px', 
                        fontSize: '11px', 
                        fontWeight: 900, 
                        letterSpacing: '0.05em',
                        marginRight: '12px'
                      }}>
                        {activeTab === 'navigation' ? 'INGRESO A' : 'MARCÓ LISTO'}
                      </span>
                      {log.details}
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
