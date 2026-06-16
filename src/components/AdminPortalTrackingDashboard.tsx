import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Layout, Download } from 'lucide-react';
import { getPortalTracking, PortalProgress } from '../lib/portalTracking';

const thS = {
  padding: '12px 15px', 
  fontSize: 10, 
  color: '#ffffff', 
  textTransform: 'uppercase' as const, 
  fontWeight: 800, 
  letterSpacing: '0.05em', 
  textAlign: 'left' as const, 
  background: '#0F004F',
  borderRight: '1px solid rgba(255,255,255,0.1)'
};

const tdS = {
  padding: '10px 15px', 
  fontSize: 12, 
  borderBottom: '1px solid #eeeeee',
  color: '#333333',
  borderRight: '1px solid #eeeeee'
};

const selectS = {
  padding: '10px 12px', 
  borderRadius: 8, 
  border: '1px solid #ddd',
  fontSize: 12, 
  fontWeight: 700, 
  color: '#333', 
  cursor: 'pointer',
  outline: 'none', 
  background: '#f8f9fa',
  width: '100%'
};

export const AdminPortalTrackingDashboard = () => {
  const [data, setData] = useState<PortalProgress[]>([]);
  const [filterInstructor, setFilterInstructor] = useState<string>('ALL');
  const [filterPortal, setFilterPortal] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    setData(getPortalTracking());
  }, []);

  const uniqueInstructors = Array.from(new Set(data.map(d => d.instructor).filter(Boolean)));
  const uniquePortals = Array.from(new Set(data.map(d => d.portalCategory).filter(Boolean)));

  const filteredData = data.filter(d => {
      if (filterInstructor !== 'ALL' && d.instructor !== filterInstructor) return false;
      if (filterPortal !== 'ALL' && d.portalCategory !== filterPortal) return false;
      if (searchQuery) {
          const q = searchQuery.toLowerCase();
          const matchesSearch = 
              (d.instructor || '').toLowerCase().includes(q) ||
              (d.portalCategory || '').toLowerCase().includes(q) ||
              (d.linkName || '').toLowerCase().includes(q) ||
              (d.email || '').toLowerCase().includes(q);
          if (!matchesSearch) return false;
      }
      if (d.actionType === 'VISIT') return false; // Ignore redundant VISIT logs
      return true;
  });

  const exportCSV = () => {
    const headers = [
      'Instructor', 'Email', 'Portal', 'Elemento o Página Visitada', 'Fecha y Hora'
    ];
    
    const rows = filteredData.map(row => [
      row.instructor || '',
      row.email || '',
      row.portalCategory || '',
      row.linkName || '',
      row.timestamp || ''
    ]);

    const csvContent = "data:text/csv;charset=utf-8," 
      + headers.join(",") + "\n" 
      + rows.map(e => e.map(cell => `"${cell}"`).join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "portal_tracking_export.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const clearData = () => {
    if (window.confirm('¿Estás seguro de que deseas eliminar TODOS los registros de uso de portales? Esto no se puede deshacer.')) {
      localStorage.removeItem('yoda_portal_tracking');
      setData([]);
      setFilterInstructor('ALL');
      setFilterPortal('ALL');
      setSearchQuery('');
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f5f7f9', padding: '40px', fontFamily: 'Trebuchet MS, Trebuchet, Arial, sans-serif' }}>
      
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 30 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <div>
              <div style={{ fontSize: 24, fontWeight: 900, color: '#0F004F', letterSpacing: '-0.5px', display: 'flex', alignItems: 'center', gap: 10 }}>
                <Layout size={28} color="#99CC33" />
                MONITOREO DE PORTALES Y RECURSOS
              </div>
              <div style={{ fontSize: 12, color: '#666', marginTop: 4 }}>Seguimiento de clics en formularios, manuales y portales de guardias</div>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
            <button 
              onClick={clearData}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                background: '#fff', border: '1px solid #ED1650', color: '#ED1650',
                padding: '10px 20px', borderRadius: 8, cursor: 'pointer',
                fontWeight: 800, fontSize: 12, textTransform: 'uppercase',
                boxShadow: '0 4px 10px rgba(237,22,80,0.1)'
              }}
            >
              Limpiar Registros
            </button>

            <button 
              onClick={exportCSV}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                background: '#0F004F', border: 'none', color: '#ffffff',
                padding: '10px 20px', borderRadius: 8, cursor: 'pointer',
                fontWeight: 800, fontSize: 12, textTransform: 'uppercase',
                boxShadow: '0 4px 15px rgba(15,0,79,0.2)'
              }}
            >
              <Download size={16} /> Exportar CSV
            </button>
          </div>
        </div>

        {/* Filters Bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 15, marginBottom: 20, background: '#fff', padding: 20, borderRadius: 12, boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5, flex: 1, minWidth: 150 }}>
                <label style={{ fontSize: 10, fontWeight: 800, color: '#666', textTransform: 'uppercase' }}>Instructor</label>
                <select value={filterInstructor} onChange={e => setFilterInstructor(e.target.value)} style={selectS}>
                    <option value="ALL">TODOS</option>
                    {uniqueInstructors.map(i => <option key={i} value={i}>{i}</option>)}
                </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5, flex: 1, minWidth: 150 }}>
                <label style={{ fontSize: 10, fontWeight: 800, color: '#666', textTransform: 'uppercase' }}>Portal</label>
                <select value={filterPortal} onChange={e => setFilterPortal(e.target.value)} style={selectS}>
                    <option value="ALL">TODOS</option>
                    {uniquePortals.map(i => <option key={i} value={i}>{i}</option>)}
                </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5, flex: 2, minWidth: 250 }}>
                <label style={{ fontSize: 10, fontWeight: 800, color: '#666', textTransform: 'uppercase' }}>Búsqueda Inteligente</label>
                <input 
                    type="text" 
                    value={searchQuery} 
                    onChange={e => setSearchQuery(e.target.value)} 
                    placeholder="Buscar por item, portal, email..."
                    style={{ ...selectS, cursor: 'text' }}
                />
            </div>
        </div>

        {/* Data Table */}
        <div style={{ background: '#ffffff', borderRadius: 12, boxShadow: '0 10px 30px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={thS}>INSTRUCTOR</th>
                  <th style={thS}>EMAIL</th>
                  <th style={thS}>PORTAL</th>
                  <th style={thS}>ELEMENTO / PÁGINA VISITADA</th>
                  <th style={thS}>FECHA Y HORA</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length === 0 ? (
                  <tr>
                    <td colSpan={6} style={{ padding: '40px', textAlign: 'center', color: '#666', fontSize: 14 }}>
                      No hay registros de clics en portales aún.
                    </td>
                  </tr>
                ) : (
                  filteredData.reverse().map((row, i) => (
                    <motion.tr 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      key={i} 
                      style={{ 
                        background: i % 2 === 0 ? '#ffffff' : '#fafafa',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = '#f0f4f8'}
                      onMouseLeave={e => e.currentTarget.style.background = i % 2 === 0 ? '#ffffff' : '#fafafa'}
                    >
                      <td style={{ ...tdS, fontWeight: 700, color: '#0F004F' }}>{row.instructor || '-'}</td>
                      <td style={{ ...tdS, color: '#007bff' }}>{row.email || '-'}</td>
                      <td style={{ ...tdS, fontWeight: 900, color: '#333' }}>{row.portalCategory || '-'}</td>
                      <td style={{ ...tdS, fontWeight: 800 }}>{row.linkName || '-'}</td>
                      <td style={{ ...tdS }}>{row.timestamp || '-'}</td>
                    </motion.tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
        
      </div>
    </div>
  );
};
