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
    const uniqueUsers = new Map<string, any>();
    
    data.forEach(log => {
      if (log.email && !uniqueUsers.has(log.email)) {
        
        let nombreFicticio = '';
        let fabrica = '';
        let rango = '';

        const prefix = log.email.split('@')[0];
        
        if (log.email.toLowerCase().includes('carlose.araya')) {
          nombreFicticio = 'Carlos Araya';
          fabrica = 'LATAM';
          rango = 'Administrador';
        } else {
          nombreFicticio = prefix.split('.').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
          rango = 'Instructor';
          
          if (log.email.toLowerCase().includes('konectabr.com')) {
            fabrica = 'Konecta Brasil';
          } else if (log.email.toLowerCase().includes('aec.com')) {
            fabrica = 'AeC';
          } else if (log.email.toLowerCase().includes('konectaperu.com')) {
            fabrica = 'Konecta Perú';
          } else if (log.email.toLowerCase().includes('almacontact.com')) {
            fabrica = 'Alma Contact';
          } else {
            const charCodeSum = log.email.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
            fabrica = charCodeSum % 2 === 0 ? 'Konecta Brasil' : 'AeC';
          }
        }

        uniqueUsers.set(log.email, {
          instructorId: log.instructor,
          email: log.email,
          nombreFicticio,
          fabrica,
          rango,
          sessionCode: log.codigo
        });
      }
    });

    // Añadir usuarios predefinidos si no existen en los logs
    const predefinedUsers = [
      { email: 'carlose.araya@latam.com', nombre: 'Carlos Araya', fabrica: 'LATAM', rango: 'Administrador' },
      { email: 'instructor@konectabr.com', nombre: 'Instructor Konecta BR', fabrica: 'Konecta Brasil', rango: 'Instructor' },
      { email: 'instructor@aec.com', nombre: 'Instructor AeC', fabrica: 'AeC', rango: 'Instructor' },
      { email: 'instructor@konectaperu.com', nombre: 'Instructor Konecta PE', fabrica: 'Konecta Perú', rango: 'Instructor' },
      { email: 'instructor@almacontact.com', nombre: 'Instructor Alma', fabrica: 'Alma Contact', rango: 'Instructor' }
    ];

    predefinedUsers.forEach(u => {
      // Usamos el email como instructorId si no tienen registros aún
      if (!uniqueUsers.has(u.email)) {
        uniqueUsers.set(u.email, {
          instructorId: u.email,
          email: u.email,
          nombreFicticio: u.nombre,
          fabrica: u.fabrica,
          rango: u.rango,
          sessionCode: 'N/A' // No session code yet
        });
      }
    });

    return Array.from(uniqueUsers.values());
  }, [data]);

  const [filterFabrica, setFilterFabrica] = useState('ALL');
  const [filterRango, setFilterRango] = useState('ALL');

  const baseUsers = useMemo(() => {
    if (!stationName) return users;
    if (stationName === 'BR') {
      return users.filter(u => ['LATAM', 'Konecta Brasil', 'AeC'].includes(u.fabrica));
    }
    if (stationName === 'SSC') {
      return users.filter(u => ['LATAM', 'Konecta Perú', 'Alma Contact'].includes(u.fabrica));
    }
    return users;
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
              filteredUsers.map((user, idx) => (
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
                      background: user.fabrica === 'LATAM' ? '#ED165020' : (user.fabrica === 'AeC' || user.fabrica === 'Alma Contact') ? '#00D6CC20' : '#99CC3320',
                      color: user.fabrica === 'LATAM' ? '#ED1650' : (user.fabrica === 'AeC' || user.fabrica === 'Alma Contact') ? '#00D6CC' : '#6b8f23'
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
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
