import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Users, Search, ChevronRight, UserCircle2 } from 'lucide-react';
import { getMissionTracking, MissionProgress } from '../lib/tracking';

export const AdminUsersList = ({ onViewUser, stationName }: { onViewUser: (instructorId: string) => void, stationName?: string }) => {
  const [data, setData] = useState<MissionProgress[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setData(getMissionTracking());
  }, []);

  const users = useMemo(() => {
    const saved = localStorage.getItem('yoda_users_v4');
    const realUsers = saved ? JSON.parse(saved) : [];
    
    return realUsers.map((u: any) => {
      const [fabricaLabel = 'Desconocida', rankLabel = 'Aprendiz'] = u.fabrica.includes(' - ') ? u.fabrica.split(' - ') : [u.fabrica];
      
      return {
        instructorId: u.correo,
        email: u.correo,
        nombreFicticio: u.nombre,
        fabrica: fabricaLabel,
        rango: rankLabel,
        sessionCode: 'N/A'
      };
    });
  }, []);

  const [filterFabrica, setFilterFabrica] = useState('ALL');
  const [filterRango, setFilterRango] = useState('ALL');

  const baseUsers = useMemo(() => {
    if (!stationName) return users;
    if (stationName === 'BR') {
      return users.filter(u => {
        const f = (u.fabrica || '').toLowerCase();
        return f.includes('brasil') || f.includes('aec');
      });
    }
    if (stationName === 'SSC') {
      return users.filter(u => {
        const f = (u.fabrica || '').toLowerCase();
        return f.includes('perú') || f.includes('peru') || f.includes('alma');
      });
    }
    // If no stationName (e.g. global view), you might still want to exclude LATAM if it's strictly for instructors, but for now we follow the user's "en ambos". Actually let's exclude LATAM everywhere in the directory if it's just the admin.
    // Wait, the user specifically said "en ambos no debe salir el latam". I will exclude it from BR and SSC.
    // I will also exclude it from the baseUsers entirely if they only want instructors.
    return users.filter(u => !(u.fabrica || '').toLowerCase().includes('latam'));
  }, [users, stationName]);

  const filteredUsers = useMemo(() => {
    let result = baseUsers;
    
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(u => 
        u.nombreFicticio.toLowerCase().includes(q) || 
        u.email.toLowerCase().includes(q)
      );
    }
    
    if (filterFabrica !== 'ALL') {
      result = result.filter(u => u.fabrica === filterFabrica);
    }
    
    if (filterRango !== 'ALL') {
      result = result.filter(u => u.rango === filterRango);
    }
    
    return result;
  }, [baseUsers, searchQuery, filterFabrica, filterRango]);

  const uniqueFabricas = useMemo(() => Array.from(new Set(baseUsers.map(u => u.fabrica))).sort(), [baseUsers]);
  const uniqueRangos = useMemo(() => Array.from(new Set(baseUsers.map(u => u.rango))).sort(), [baseUsers]);

  return (
    <div style={{ padding: '40px', background: '#F5F7F9', minHeight: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 }}>
        <div>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: '#0F004F', margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: 12 }}>
            <Users size={32} color="#ED1650" />
            DIRECTORIO DE USUARIOS
          </h1>
          <p style={{ margin: 0, color: '#666', fontSize: 14 }}>Listado maestro de instructores registrados en el sistema.</p>
        </div>
      </div>

      <div style={{ background: '#fff', padding: 20, borderRadius: 16, marginBottom: 24, display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: '1 1 250px', background: '#F5F7F9', padding: '12px 20px', borderRadius: 8 }}>
          <Search size={20} color="#888" />
          <input 
            type="text" 
            placeholder="Filtro mágico (Nombre o Correo)..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: 14, color: '#333', fontWeight: 600 }}
          />
        </div>

        <select 
          value={filterFabrica} 
          onChange={(e) => setFilterFabrica(e.target.value)}
          style={{ padding: '12px 20px', borderRadius: 8, border: '1px solid #E2E8F0', outline: 'none', fontSize: 13, fontWeight: 700, color: '#0F004F', cursor: 'pointer', background: '#fff' }}
        >
          <option value="ALL">TODAS LAS FÁBRICAS</option>
          {uniqueFabricas.map(f => <option key={f} value={f}>{f}</option>)}
        </select>

        <select 
          value={filterRango} 
          onChange={(e) => setFilterRango(e.target.value)}
          style={{ padding: '12px 20px', borderRadius: 8, border: '1px solid #E2E8F0', outline: 'none', fontSize: 13, fontWeight: 700, color: '#0F004F', cursor: 'pointer', background: '#fff' }}
        >
          <option value="ALL">TODOS LOS RANGOS</option>
          {uniqueRangos.map(r => <option key={r} value={r}>{r}</option>)}
        </select>
      </div>

      <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 4px 15px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ background: '#0F004F', color: '#fff', fontSize: 12, textTransform: 'uppercase', letterSpacing: '1px' }}>
              <th style={{ padding: '16px 24px', fontWeight: 800 }}>Usuario</th>
              <th style={{ padding: '16px 24px', fontWeight: 800 }}>Fábrica</th>
              <th style={{ padding: '16px 24px', fontWeight: 800 }}>Rango</th>
              <th style={{ padding: '16px 24px', fontWeight: 800, textAlign: 'right' }}>Acción</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length === 0 ? (
              <tr>
                <td colSpan={4} style={{ padding: 40, textAlign: 'center', color: '#666', fontWeight: 600 }}>
                  No se encontraron usuarios.
                </td>
              </tr>
            ) : (
              filteredUsers.map((user, idx) => {
                const f = user.fabrica.toLowerCase();
                let fColor = '#64748B'; // slate
                if (f.includes('latam')) fColor = '#ED1650'; // red
                else if (f.includes('alma')) fColor = '#00D6CC'; // teal
                else if (f.includes('perú') || f.includes('peru')) fColor = '#99CC33'; // lime
                else if (f.includes('brasil')) fColor = '#3B82F6'; // blue
                else if (f.includes('aec')) fColor = '#8B5CF6'; // purple

                return (
                <motion.tr 
                  key={user.email}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  style={{ borderBottom: '1px solid #eee', cursor: 'pointer', transition: 'background 0.2s' }}
                  whileHover={{ backgroundColor: '#F8FAFC' }}
                  onClick={() => onViewUser(user.instructorId)}
                >
                  <td style={{ padding: '16px 24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ width: 40, height: 40, borderRadius: '50%', background: user.rango === 'Administrador' ? '#ED1650' : '#0F004F', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                        <UserCircle2 size={24} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 800, color: '#0F004F', fontSize: 15 }}>{user.nombreFicticio}</div>
                        <div style={{ color: '#666', fontSize: 12 }}>{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    <span style={{ 
                      padding: '4px 12px', 
                      borderRadius: 12, 
                      fontSize: 12, 
                      fontWeight: 800,
                      background: `${fColor}20`,
                      color: fColor
                    }}>
                      {user.fabrica}
                    </span>
                  </td>
                  <td style={{ padding: '16px 24px', fontWeight: 600, color: '#333' }}>
                    {user.rango}
                  </td>
                  <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                    <div 
                      onClick={(e) => {
                        e.stopPropagation();
                        onViewUser(user.email);
                      }}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#00D6CC', fontWeight: 800, fontSize: 12, cursor: 'pointer' }}
                    >
                      VER DESEMPEÑO <ChevronRight size={16} />
                    </div>
                  </td>
                </motion.tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
