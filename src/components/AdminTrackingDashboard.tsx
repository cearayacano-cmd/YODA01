import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Target, Download, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
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

export const AdminTrackingDashboard = ({ initialInstructorFilter, initialCodeFilter, stationName, isEs }: { initialInstructorFilter?: string, initialCodeFilter?: string, stationName?: string, isEs?: boolean }) => {
  const [data, setData] = useState<MissionProgress[]>([]);
  const [filterCode, setFilterCode] = useState<string>(initialCodeFilter || 'ALL');
  const [filterInstructor, setFilterInstructor] = useState<string>(initialInstructorFilter || 'ALL');
  const [filterPlaneta, setFilterPlaneta] = useState<string>('ALL');
  const [filterStatus, setFilterStatus] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [expandedMissao, setExpandedMissao] = useState<string[]>([]);
  const [expandedMacro, setExpandedMacro] = useState<string[]>([]);

  useEffect(() => {
    let trackingData = getMissionTracking();
    if (stationName) {
      const saved = localStorage.getItem('yoda_users_v4');
      const users = saved ? JSON.parse(saved) : [];
      trackingData = trackingData.filter(d => {
        const u = users.find((user: any) => user.correo === d.email);
        if (!u) return false;
        if (stationName === 'BR') return u.acceso === 'BR Station';
        if (stationName === 'SSC') return u.acceso === 'SSC Station';
        return true;
      });
    }
    setData(trackingData);
  }, [stationName]);

  const uniqueCodes = Array.from(new Set(data.map(d => d.codigo).filter(Boolean)));
  const uniqueInstructors = Array.from(new Set(data.map(d => d.instructor).filter(Boolean)));
  const uniquePlanetas = Array.from(new Set(data.map(d => d.planetas).filter(Boolean)));

  const filteredData = data.filter(d => {
      if (filterCode !== 'ALL' && d.codigo !== filterCode) return false;
      if (filterInstructor !== 'ALL' && d.instructor !== filterInstructor) return false;
      if (filterPlaneta !== 'ALL' && d.planetas !== filterPlaneta) return false;
      
      const isFinished = d.marcarComoVisto || d.marcarComoFinalizado;
      if (filterStatus === 'FINALIZADO' && !isFinished) return false;
      if (filterStatus === 'ACTIVO' && isFinished) return false;

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

  // Reset page when filters change
  useEffect(() => {
      setCurrentPage(1);
  }, [filterCode, filterInstructor, filterPlaneta, filterStatus, searchQuery]);

  const groupedData = useMemo(() => {
    const groups: any = {};
    filteredData.forEach(row => {
        const mKey = `${row.instructor}|${row.planetas}|${row.missao}`;
        const macKey = row.macrotema || 'GENERAL';
        
        if (!groups[mKey]) {
            groups[mKey] = {
                id: mKey,
                missao: row.missao,
                instructor: row.instructor,
                planeta: row.planetas,
                macros: {}
            };
        }
        if (!groups[mKey].macros[macKey]) {
            groups[mKey].macros[macKey] = {
                id: `${mKey}|${macKey}`,
                macrotema: macKey,
                rows: []
            };
        }
        groups[mKey].macros[macKey].rows.push(row);
    });
    return groups;
  }, [filteredData]);

  const groupKeys = Object.keys(groupedData);
  const itemsPerPage = 20;
  const totalPages = Math.ceil(groupKeys.length / itemsPerPage);
  const currentKeys = groupKeys.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const toggleMissao = (id: string) => setExpandedMissao(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id]);
  const toggleMacro = (id: string) => setExpandedMacro(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id]);

  const calculateApproxTime = (row: MissionProgress) => {
    const finishRaw = row.marcarComoVistoRaw || row.marcarComoFinalizadoRaw;
    if (!row.tiempoAperturaRaw || !finishRaw) return { text: '-', isTooFast: false, isCapped: false };
    
    let diffMs = finishRaw - row.tiempoAperturaRaw;
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
      (row.marcarComoVisto || row.marcarComoFinalizado) || '',
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

  return (
    <div style={{ minHeight: '100vh', background: '#f5f7f9', padding: '40px', fontFamily: 'Trebuchet MS, Trebuchet, Arial, sans-serif' }}>
      
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 30 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <div>
              <div style={{ fontSize: 24, fontWeight: 900, color: '#0F004F', letterSpacing: '-0.5px', display: 'flex', alignItems: 'center', gap: 10 }}>
                <Target size={28} color="#00D6CC" />
                {isEs ? 'MONITOREO DE MISIONES' : 'MONITORAMENTO DE MISSÕES'}
              </div>
              <div style={{ fontSize: 12, color: '#666', marginTop: 4 }}>{isEs ? 'Seguimiento detallado de la interacción de los agentes con el contenido' : 'Acompanhamento detalhado da interação dos agentes com o conteúdo'}</div>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
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
                <label style={{ fontSize: 10, fontWeight: 800, color: '#666', textTransform: 'uppercase' }}>{isEs ? 'Instructor' : 'Instrutor'}</label>
                <select value={filterInstructor} onChange={e => setFilterInstructor(e.target.value)} style={selectS}>
                    <option value="ALL">{isEs ? 'TODOS' : 'TODOS'}</option>
                    {uniqueInstructors.map(i => <option key={i} value={i}>{i}</option>)}
                </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5, flex: 1, minWidth: 150 }}>
                <label style={{ fontSize: 10, fontWeight: 800, color: '#666', textTransform: 'uppercase' }}>{isEs ? 'Código de Sesión' : 'Código de Sessão'}</label>
                <select value={filterCode} onChange={e => setFilterCode(e.target.value)} style={selectS}>
                    <option value="ALL">{isEs ? 'TODOS' : 'TODOS'}</option>
                    {uniqueCodes.map(i => <option key={i} value={i}>{i}</option>)}
                </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5, flex: 1, minWidth: 150 }}>
                <label style={{ fontSize: 10, fontWeight: 800, color: '#666', textTransform: 'uppercase' }}>{isEs ? 'Estado' : 'Status'}</label>
                <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} style={selectS}>
                    <option value="ALL">{isEs ? 'TODOS' : 'TODOS'}</option>
                    <option value="ACTIVO">{isEs ? 'ACTIVO' : 'ATIVO'}</option>
                    <option value="FINALIZADO">{isEs ? 'FINALIZADO' : 'CONCLUÍDO'}</option>
                </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5, flex: 1, minWidth: 150 }}>
                <label style={{ fontSize: 10, fontWeight: 800, color: '#666', textTransform: 'uppercase' }}>{isEs ? 'Servicio / Planeta' : 'Serviço / Planeta'}</label>
                <select value={filterPlaneta} onChange={e => setFilterPlaneta(e.target.value)} style={selectS}>
                    <option value="ALL">{isEs ? 'TODOS' : 'TODOS'}</option>
                    {uniquePlanetas.map(i => <option key={i} value={i}>{i}</option>)}
                </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5, flex: 2, minWidth: 250 }}>
                <label style={{ fontSize: 10, fontWeight: 800, color: '#666', textTransform: 'uppercase' }}>{isEs ? 'Búsqueda Inteligente' : 'Busca Inteligente'}</label>
                <input 
                    type="text" 
                    value={searchQuery} 
                    onChange={e => setSearchQuery(e.target.value)} 
                    placeholder={isEs ? "Buscar por tema, misión, email..." : "Buscar por tema, missão, email..."}
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
                  <th style={thS}>{isEs ? 'MES Y AÑO' : 'MÊS E ANO'}</th>
                  <th style={thS}>{isEs ? 'INSTRUCTOR' : 'INSTRUTOR'}</th>
                  <th style={thS}>{isEs ? 'EMAIL' : 'EMAIL'}</th>
                  <th style={thS}>{isEs ? 'CODIGO' : 'CÓDIGO'}</th>
                  <th style={thS}>{isEs ? 'EXPEDICIÓN' : 'EXPEDIÇÃO'}</th>
                  <th style={thS}>{isEs ? 'PLANETAS' : 'PLANETAS'}</th>
                  <th style={thS}>{isEs ? 'MISIÓN' : 'MISSÃO'}</th>
                  <th style={thS}>{isEs ? 'MACROTEMA' : 'MACROTEMA'}</th>
                  <th style={thS}>{isEs ? 'TEMA' : 'TEMA'}</th>
                  <th style={thS}>{isEs ? 'TIEMPO ESTIMADO' : 'TEMPO ESTIMADO'}</th>
                  <th style={thS}>{isEs ? 'TIEMPO APER' : 'TEMPO APER'}</th>
                  <th style={thS}>{isEs ? 'MARCAR COMO VISTO' : 'MARCAR COMO VISTO'}</th>
                  <th style={thS}>{isEs ? 'CÁLCULO APROXIMADO' : 'CÁLCULO APROXIMADO'}</th>
                </tr>
              </thead>
              <tbody>
                {currentKeys.length === 0 ? (
                  <tr>
                    <td colSpan={13} style={{ padding: 40, textAlign: 'center', color: '#888', fontSize: 14 }}>
                      {isEs ? 'No hay datos de misiones registrados aún.' : 'Não há dados de missões registrados ainda.'}
                    </td>
                  </tr>
                ) : (
                  currentKeys.map((mKey) => {
                    const mData = groupedData[mKey];
                    const isMExp = expandedMissao.includes(mKey);
                    
                    return (
                        <React.Fragment key={mKey}>
                            <tr 
                               onClick={() => toggleMissao(mKey)}
                               style={{ background: '#e2e8f0', cursor: 'pointer', borderBottom: '2px solid #fff' }}
                            >
                               <td colSpan={13} style={{ padding: '12px 15px', fontWeight: 900, color: '#0F004F', fontSize: 13 }}>
                                   <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                       {isMExp ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                                       <span style={{ color: '#64748b' }}>{isEs ? 'Instructor:' : 'Instrutor:'}</span> {mData.instructor} 
                                       <span style={{ color: '#64748b', marginLeft: 15 }}>{isEs ? 'Planeta:' : 'Planeta:'}</span> {mData.planeta}
                                       <span style={{ color: '#64748b', marginLeft: 15 }}>{isEs ? 'Misión:' : 'Missão:'}</span> <span style={{ color: '#00D6CC', background: '#0F004F', padding: '2px 8px', borderRadius: 4 }}>{mData.missao}</span>
                                   </div>
                               </td>
                            </tr>
            
                            {isMExp && Object.keys(mData.macros).map(macKey => {
                                const macData = mData.macros[macKey];
                                const isMacExp = expandedMacro.includes(macData.id);
                                
                                return (
                                    <React.Fragment key={macData.id}>
                                        <tr 
                                           onClick={() => toggleMacro(macData.id)}
                                           style={{ background: '#f1f5f9', cursor: 'pointer', borderBottom: '1px solid #fff' }}
                                        >
                                           <td colSpan={13} style={{ padding: '10px 15px 10px 40px', fontWeight: 800, color: '#334155', fontSize: 12 }}>
                                               <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                                   {isMacExp ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                                                   <span style={{ color: '#94a3b8' }}>{isEs ? 'MacroTema:' : 'MacroTema:'}</span> {macData.macrotema}
                                                   <span style={{ fontSize: 10, background: '#cbd5e1', padding: '2px 6px', borderRadius: 10, color: '#475569' }}>{macData.rows.length} {isEs ? 'Temas' : 'Temas'}</span>
                                               </div>
                                           </td>
                                        </tr>
            
                                        {isMacExp && macData.rows.map((row: any, idx: number) => (
                                            <motion.tr 
                                              key={idx}
                                              initial={{ opacity: 0, y: 10 }}
                                              animate={{ opacity: 1, y: 0 }}
                                              transition={{ delay: idx * 0.02 }}
                                              style={{ background: idx % 2 === 0 ? '#fafafa' : '#ffffff' }}
                                              whileHover={{ backgroundColor: '#f0f4f8' }}
                                            >
                                              <td style={{...tdS, paddingLeft: 40}}><strong>{row.mesAño}</strong></td>
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
                                              <td style={{ ...tdS, color: (row.marcarComoVisto || row.marcarComoFinalizado) ? '#007bff' : '#ccc' }}>
                                                {(row.marcarComoVisto || row.marcarComoFinalizado) || '-'}
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
                                        ))}
                                    </React.Fragment>
                                )
                            })}
                        </React.Fragment>
                    )
                  })
                )}
              </tbody>
            </table>
          </div>
          
          {totalPages > 1 && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', borderTop: '1px solid #eee', background: '#fafafa' }}>
              <div style={{ fontSize: 12, color: '#666', fontWeight: 700 }}>
                Mostrando {Math.min(groupKeys.length, (currentPage - 1) * itemsPerPage + 1)} - {Math.min(groupKeys.length, currentPage * itemsPerPage)} de {groupKeys.length} misiones
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <button 
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  style={{ padding: '8px 12px', background: currentPage === 1 ? '#eee' : '#0F004F', color: currentPage === 1 ? '#aaa' : '#fff', border: 'none', borderRadius: 6, cursor: currentPage === 1 ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center' }}
                >
                  <ChevronLeft size={16} />
                </button>
                <div style={{ fontSize: 12, fontWeight: 800, color: '#0F004F', minWidth: 60, textAlign: 'center' }}>
                  {currentPage} / {totalPages}
                </div>
                <button 
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  style={{ padding: '8px 12px', background: currentPage === totalPages ? '#eee' : '#0F004F', color: currentPage === totalPages ? '#aaa' : '#fff', border: 'none', borderRadius: 6, cursor: currentPage === totalPages ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center' }}
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
