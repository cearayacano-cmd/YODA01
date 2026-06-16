import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Target, Download } from 'lucide-react';
import { getMissionTracking, MissionProgress } from '../lib/tracking';

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

export const AdminTrackingDashboard = ({ initialInstructorFilter, initialCodeFilter }: { initialInstructorFilter?: string, initialCodeFilter?: string }) => {
  const [data, setData] = useState<MissionProgress[]>([]);
  const [filterCode, setFilterCode] = useState<string>(initialCodeFilter || 'ALL');
  const [filterInstructor, setFilterInstructor] = useState<string>(initialInstructorFilter || 'ALL');
  const [filterPlaneta, setFilterPlaneta] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    setData(getMissionTracking());
  }, []);

  const uniqueCodes = Array.from(new Set(data.map(d => d.codigo).filter(Boolean)));
  const uniqueInstructors = Array.from(new Set(data.map(d => d.instructor).filter(Boolean)));
  const uniquePlanetas = Array.from(new Set(data.map(d => d.planetas).filter(Boolean)));

  const filteredData = data.filter(d => {
      if (filterCode !== 'ALL' && d.codigo !== filterCode) return false;
      if (filterInstructor !== 'ALL' && d.instructor !== filterInstructor) return false;
      if (filterPlaneta !== 'ALL' && d.planetas !== filterPlaneta) return false;
      if (searchQuery) {
          const q = searchQuery.toLowerCase();
          const matchesSearch = 
              (d.instructor || '').toLowerCase().includes(q) ||
              (d.codigo || '').toLowerCase().includes(q) ||
              (d.planetas || '').toLowerCase().includes(q) ||
              (d.missao || '').toLowerCase().includes(q) ||
              (d.macrotema || '').toLowerCase().includes(q) ||
              (d.tema || '').toLowerCase().includes(q) ||
              (d.email || '').toLowerCase().includes(q);
          if (!matchesSearch) return false;
      }
      return true;
  });

  const calculateApproxTime = (row: MissionProgress) => {
    if (!row.tiempoAperturaRaw || !row.marcarComoVistoRaw) return { text: '-', isTooFast: false, isCapped: false };
    
    let diffMs = row.marcarComoVistoRaw - row.tiempoAperturaRaw;
    let diffSecs = Math.max(0, Math.floor(diffMs / 1000));
    
    let isTooFast = false;
    let isCapped = false;

    if (row.tiempoEstimado && row.tiempoEstimado.includes(':')) {
        const parts = row.tiempoEstimado.split(':');
        if (parts.length >= 2) {
            let estMins = parts.length === 3 ? parseInt(parts[0]) * 60 + parseInt(parts[1]) : parseInt(parts[0]);
            const estSecs = estMins * 60;
            
            // Regla 1: Muy rápido (menos del 20% del tiempo estimado)
            if (estSecs > 0 && diffSecs < (estSecs * 0.2)) {
                isTooFast = true;
            }
            // Regla 2: Tope Inteligente (más del triple del tiempo estimado)
            else if (estSecs > 0 && diffSecs > (estSecs * 3)) {
                isCapped = true;
                diffSecs = estSecs; // Se capea al tiempo estimado ideal
            }
        }
    }

    const mins = Math.floor(diffSecs / 60);
    const secs = diffSecs % 60;
    const actualStr = `${mins}m ${secs}s`;
    
    return { text: actualStr, isTooFast, isCapped };
  };

  const exportCSV = () => {
    const headers = [
      'mes y año', 'instructor', 'email', 'codigo', 'EXPEDIÇÃO', 
      'Planetas', 'Missão', 'MacroTema', 'Tema', 'Tiempo Estimado', 'Tiempo aper', 'MARCAR COMO VISTO', 'Cálculo aproximado'
    ];
    
    const rows = filteredData.map(row => [
      row.mesAño || '',
      row.instructor || '',
      row.email || '',
      row.codigo || '',
      row.expedicion || '',
      row.planetas || '',
      row.missao || '',
      row.macrotema || '',
      row.tema || '',
      row.tiempoEstimado || '',
      row.tiempoApertura || '',
      row.marcarComoVisto || '',
      calculateApproxTime(row).text
    ]);

    const csvContent = "data:text/csv;charset=utf-8," 
      + headers.join(",") + "\n" 
      + rows.map(e => e.map(cell => `"${cell}"`).join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "mission_tracking_export.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const clearData = () => {
    if (window.confirm('¿Estás seguro de que deseas eliminar TODOS los registros de monitoreo? Esto no se puede deshacer.')) {
      localStorage.removeItem('yoda_mission_tracking');
      setData([]);
      setFilterCode('ALL');
      setFilterInstructor('ALL');
      setFilterPlaneta('ALL');
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
                <Target size={28} color="#00D6CC" />
                MONITOREO DE MISIONES
              </div>
              <div style={{ fontSize: 12, color: '#666', marginTop: 4 }}>Seguimiento detallado de la interacción de los agentes con el contenido</div>
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
                <label style={{ fontSize: 10, fontWeight: 800, color: '#666', textTransform: 'uppercase' }}>Código de Sesión</label>
                <select value={filterCode} onChange={e => setFilterCode(e.target.value)} style={selectS}>
                    <option value="ALL">TODOS</option>
                    {uniqueCodes.map(i => <option key={i} value={i}>{i}</option>)}
                </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5, flex: 1, minWidth: 150 }}>
                <label style={{ fontSize: 10, fontWeight: 800, color: '#666', textTransform: 'uppercase' }}>Servicio / Planeta</label>
                <select value={filterPlaneta} onChange={e => setFilterPlaneta(e.target.value)} style={selectS}>
                    <option value="ALL">TODOS</option>
                    {uniquePlanetas.map(i => <option key={i} value={i}>{i}</option>)}
                </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5, flex: 2, minWidth: 250 }}>
                <label style={{ fontSize: 10, fontWeight: 800, color: '#666', textTransform: 'uppercase' }}>Búsqueda Inteligente</label>
                <input 
                    type="text" 
                    value={searchQuery} 
                    onChange={e => setSearchQuery(e.target.value)} 
                    placeholder="Buscar por tema, misión, email..."
                    style={{ ...selectS, cursor: 'text' }}
                />
            </div>
        </div>

        {/* Data Table */}
        <div style={{ background: '#ffffff', borderRadius: 12, boxShadow: '0 10px 30px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 1200 }}>
              <thead>
                <tr>
                  <th style={thS}>mes y año</th>
                  <th style={thS}>instructor</th>
                  <th style={thS}>email</th>
                  <th style={thS}>codigo</th>
                  <th style={thS}>EXPEDIÇÃO</th>
                  <th style={thS}>Planetas</th>
                  <th style={thS}>Missão</th>
                  <th style={thS}>MacroTema</th>
                  <th style={thS}>Tema</th>
                  <th style={thS}>Tiempo Estimado</th>
                  <th style={thS}>Tiempo aper</th>
                  <th style={thS}>MARCAR COMO VISTO</th>
                  <th style={thS}>Cálculo aproximado</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length === 0 ? (
                  <tr>
                    <td colSpan={10} style={{ padding: 40, textAlign: 'center', color: '#888', fontSize: 14 }}>
                      No hay datos de misiones registrados aún.
                    </td>
                  </tr>
                ) : (
                  filteredData.map((row, idx) => (
                    <motion.tr 
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      style={{ background: idx % 2 === 0 ? '#fafafa' : '#ffffff' }}
                      whileHover={{ backgroundColor: '#f0f4f8' }}
                    >
                      <td style={tdS}><strong>{row.mesAño}</strong></td>
                      <td style={tdS}>{row.instructor}</td>
                      <td style={{ ...tdS, color: '#0056b3' }}>{row.email}</td>
                      <td style={tdS}>
                        <span style={{ background: '#eee', padding: '2px 6px', borderRadius: 4, fontSize: 10, fontFamily: 'monospace' }}>
                          {row.codigo}
                        </span>
                      </td>
                      <td style={{ ...tdS, fontWeight: 700 }}>{row.expedicion}</td>
                      <td style={tdS}>{row.planetas}</td>
                      <td style={{ ...tdS, width: 180 }}>{row.missao}</td>
                      <td style={{ ...tdS, width: 200, color: '#444' }}>{row.macrotema}</td>
                      <td style={{ ...tdS, width: 250 }}>{row.tema}</td>
                      <td style={{ ...tdS, fontWeight: 700, color: '#1B0088' }}>{row.tiempoEstimado}</td>
                      <td style={{ ...tdS, color: row.tiempoApertura ? '#28a745' : '#ccc' }}>
                        {row.tiempoApertura || '-'}
                      </td>
                      <td style={{ ...tdS, color: row.marcarComoVisto ? '#007bff' : '#ccc' }}>
                        {row.marcarComoVisto || '-'}
                      </td>
                      <td style={{ 
                        ...tdS, 
                        color: calculateApproxTime(row).text !== '-' ? (calculateApproxTime(row).isTooFast ? '#ED1650' : (calculateApproxTime(row).isCapped ? '#FFC800' : '#99CC33')) : '#ccc',
                        fontWeight: 700 
                      }}>
                        {calculateApproxTime(row).text}
                        {calculateApproxTime(row).isTooFast && (
                          <div style={{ fontSize: 9, color: '#ED1650', marginTop: 2, fontWeight: 800 }}>¡MUY RÁPIDO!</div>
                        )}
                        {calculateApproxTime(row).isCapped && (
                          <div style={{ fontSize: 9, color: '#FFC800', marginTop: 2, fontWeight: 800 }}>TIEMPO LIMITADO</div>
                        )}
                      </td>
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
