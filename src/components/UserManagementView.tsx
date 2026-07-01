import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, UserPlus, Mail, Trash2, ChevronRight, CheckCircle2, X, Edit3, Award } from 'lucide-react';

export const UserManagementView = ({ onBack, embedded }: any) => {
  const [showForm, setShowForm] = useState(false);
  const [showRankConfig, setShowRankConfig] = useState(false);
  const [rankConfig, setRankConfig] = useState({
    explorador: 400,
    guardian: 1500,
    maestro: 3000,
    lider: 5000
  });
  const [editingUserId, setEditingUserId] = useState<string | null>(null);
  const [users, setUsers] = useState<any[]>([]);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [fabrica, setFabrica] = useState('Latam');
  const [rango, setRango] = useState('Aprendiz');
  const [acceso, setAcceso] = useState('BR Station');

  useEffect(() => {
    const saved = localStorage.getItem('yoda_users_v4');
    if (saved) {
      const parsedUsers = JSON.parse(saved);
      if (parsedUsers.length > 0) {
        setUsers(parsedUsers);
        return;
      }
    }
    
    // Seed default users if empty
    const defaultUsers = [
      { id: '1', nombre: 'Carlos Araya', correo: 'carlose.araya@latam.com', fabrica: 'Latam - Maestro', acceso: 'Administrador' },
      { id: '2', nombre: 'Obi Wan Kenobi', correo: 'obiwan.kenobi@almaexperien.com', fabrica: 'Alma Experience - Aprendiz', acceso: 'Explorador' },
      { id: '3', nombre: 'Luke Skywalker', correo: 'luke.skywalker@konectaperu.com', fabrica: 'Konecta Perú - Aprendiz', acceso: 'Explorador' },
      { id: '4', nombre: 'Leia Skywalker', correo: 'leia.skywalker@konectabrasil.com', fabrica: 'Konecta Brasil - Aprendiz', acceso: 'Explorador' },
      { id: '5', nombre: 'Ben Solo', correo: 'ben.solo@aec.com', fabrica: 'AeC - Aprendiz', acceso: 'Explorador' }
    ];
    setUsers(defaultUsers);
    localStorage.setItem('yoda_users_v4', JSON.stringify(defaultUsers));
    
    const savedConfig = localStorage.getItem('yoda_rank_config');
    if (savedConfig) {
      setRankConfig(JSON.parse(savedConfig));
    }
  }, []);

  const handleSaveUser = () => {
    if (!nombre || !correo) {
      alert('Por favor completa los datos obligatorios: Nombre y Correo.');
      return;
    }

    const updatedUser = {
      id: editingUserId || Date.now().toString(),
      nombre,
      correo,
      fabrica: `${fabrica} - ${rango}`,
      acceso
    };

    let updated = [];
    if (editingUserId) {
      updated = users.map(u => u.id === editingUserId ? updatedUser : u);
    } else {
      updated = [...users, updatedUser];
    }
    
    setUsers(updated);
    localStorage.setItem('yoda_users_v4', JSON.stringify(updated));

    // Reset form
    setEditingUserId(null);
    setNombre('');
    setCorreo('');
    setFabrica('Latam');
    setRango('Aprendiz');
    setAcceso('BR Station');
    setShowForm(false);
  };

  const handleEditClick = (u: any) => {
    setEditingUserId(u.id);
    setNombre(u.nombre);
    setCorreo(u.correo);
    const [f = 'Latam', r = 'Aprendiz'] = u.fabrica.includes(' - ') ? u.fabrica.split(' - ') : [u.fabrica];
    setFabrica(f);
    setRango(r);
    setAcceso(u.acceso || 'BR Station');
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setEditingUserId(null);
    setNombre('');
    setCorreo('');
    setFabrica('Latam');
    setRango('Aprendiz');
    setAcceso('BR Station');
    setShowForm(false);
  };

  const handleAccessChange = (id: string, newAccess: string) => {
    const updated = users.map(u => u.id === id ? { ...u, acceso: newAccess } : u);
    setUsers(updated);
    localStorage.setItem('yoda_users_v4', JSON.stringify(updated));
  };

  const handleDelete = (id: string) => {
    if (window.confirm('¿Seguro que deseas eliminar este usuario?')) {
      const updated = users.filter(u => u.id !== id);
      setUsers(updated);
      localStorage.setItem('yoda_users_v4', JSON.stringify(updated));
    }
  };

  return (
    <div style={{ padding: embedded ? '40px 60px' : '40px 60px', background: embedded ? 'transparent' : '#F8F7FF', minHeight: embedded ? 'auto' : '100vh', overflowY: 'auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 40 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
           {onBack && !embedded && (
             <button onClick={onBack} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 8, cursor: 'pointer', fontWeight: 700, color: '#0F004F' }}>
               <ChevronRight style={{transform: 'rotate(180deg)'}} size={16} /> VOLVER AL ADMIN
             </button>
           )}
           <div>
               <h1 style={{ fontSize: 28, fontWeight: 900, color: '#0F004F', letterSpacing: '-0.02em', margin: 0 }}>Gestión de Usuarios</h1>
               <p style={{ fontSize: 14, color: '#64748B', margin: 0 }}>Administra los instructores, sus rangos y sus accesos a las estaciones base.</p>
               <div style={{ marginTop: 8, fontSize: 12, color: '#475569', background: '#F1F5F9', padding: '8px 12px', borderRadius: 6, display: 'inline-block' }}>
                 <strong>Tipos de Acceso:</strong> <b>Administrador</b> (Acceso total), <b>BR / SSC Station</b> (Acceso exclusivo a su estación), <b>Explorador</b> (Visitante).
               </div>
           </div>
        </div>
         <div style={{ display: 'flex', gap: 12 }}>
           <button 
              onClick={() => setShowRankConfig(true)}
              style={{ padding: '12px 24px', background: '#fff', color: '#0F004F', border: '1px solid #CBD5E1', borderRadius: 12, fontWeight: 800, fontSize: 14, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, transition: 'all 0.2s' }}
           >
              <Award size={18} /> RANGOS
           </button>
           <button 
              onClick={() => setShowForm(true)}
              style={{ padding: '12px 24px', background: '#0F004F', color: '#fff', border: 'none', borderRadius: 12, fontWeight: 800, fontSize: 14, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, boxShadow: '0 8px 16px rgba(15,0,79,0.2)', transition: 'all 0.2s' }}
           >
              <UserPlus size={18} /> AGREGAR USUARIO
           </button>
         </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        
        {/* RANK CONFIG MODAL */}
        <AnimatePresence>
          {showRankConfig && (
            <div style={{ position: 'fixed', inset: 0, background: 'rgba(15,0,79,0.4)', backdropFilter: 'blur(4px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95, y: 20 }}
                 animate={{ opacity: 1, scale: 1, y: 0 }}
                 exit={{ opacity: 0, scale: 0.95, y: 20 }}
                 style={{ background: '#fff', padding: 40, borderRadius: 24, width: '100%', maxWidth: 450, position: 'relative', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
               >
                 <button onClick={() => setShowRankConfig(false)} style={{ position: 'absolute', top: 20, right: 20, background: 'transparent', border: 'none', cursor: 'pointer', color: '#94A3B8' }}>
                    <X size={24} />
                 </button>
                 
                 <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
                   <div style={{ background: 'rgba(153, 204, 51, 0.1)', padding: 12, borderRadius: 12 }}>
                     <Award size={20} color="#99CC33" />
                   </div>
                   <div style={{ fontSize: 18, fontWeight: 900, color: '#0F004F' }}>Configurar Rangos</div>
                 </div>

                 <p style={{ fontSize: 13, color: '#64748B', marginBottom: 24, lineHeight: '1.5' }}>Define las horas requeridas para alcanzar cada rango. El rango "Aprendiz" es el nivel base por defecto (0h).</p>

                 <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                   <div>
                     <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, fontWeight: 800, color: '#64748B', marginBottom: 8, textTransform: 'uppercase' }}>
                       <span>Explorador</span>
                       <span>Horas requeridas</span>
                     </label>
                     <input value={rankConfig.explorador} onChange={e => setRankConfig({...rankConfig, explorador: Number(e.target.value)})} type="number" style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: '1px solid #CBD5E1', outline: 'none', fontSize: 14, background: '#F8FAFC', color: '#0F004F', fontWeight: 600 }} />
                   </div>
                   <div>
                     <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, fontWeight: 800, color: '#64748B', marginBottom: 8, textTransform: 'uppercase' }}>
                       <span>Guardián</span>
                       <span>Horas requeridas</span>
                     </label>
                     <input value={rankConfig.guardian} onChange={e => setRankConfig({...rankConfig, guardian: Number(e.target.value)})} type="number" style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: '1px solid #CBD5E1', outline: 'none', fontSize: 14, background: '#F8FAFC', color: '#0F004F', fontWeight: 600 }} />
                   </div>
                   <div>
                     <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, fontWeight: 800, color: '#64748B', marginBottom: 8, textTransform: 'uppercase' }}>
                       <span>Maestro</span>
                       <span>Horas requeridas</span>
                     </label>
                     <input value={rankConfig.maestro} onChange={e => setRankConfig({...rankConfig, maestro: Number(e.target.value)})} type="number" style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: '1px solid #CBD5E1', outline: 'none', fontSize: 14, background: '#F8FAFC', color: '#0F004F', fontWeight: 600 }} />
                   </div>
                   <div>
                     <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, fontWeight: 800, color: '#64748B', marginBottom: 8, textTransform: 'uppercase' }}>
                       <span>Líder</span>
                       <span>Horas requeridas</span>
                     </label>
                     <input value={rankConfig.lider} onChange={e => setRankConfig({...rankConfig, lider: Number(e.target.value)})} type="number" style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: '1px solid #CBD5E1', outline: 'none', fontSize: 14, background: '#F8FAFC', color: '#0F004F', fontWeight: 600 }} />
                   </div>

                   <button 
                     onClick={() => {
                       localStorage.setItem('yoda_rank_config', JSON.stringify(rankConfig));
                       setShowRankConfig(false);
                     }}
                     style={{ width: '100%', padding: '14px', background: '#0F004F', color: '#fff', border: 'none', borderRadius: 12, fontWeight: 800, fontSize: 13, cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, marginTop: 16 }}
                   >
                     <CheckCircle2 size={18} /> GUARDAR RANGOS
                   </button>
                 </div>
               </motion.div>
            </div>
          )}
        </AnimatePresence>
        
        {/* ADD USER MODAL */}
        <AnimatePresence>
          {showForm && (
            <div style={{ position: 'fixed', inset: 0, background: 'rgba(15,0,79,0.4)', backdropFilter: 'blur(4px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95, y: 20 }}
                 animate={{ opacity: 1, scale: 1, y: 0 }}
                 exit={{ opacity: 0, scale: 0.95, y: 20 }}
                 style={{ background: '#fff', padding: 40, borderRadius: 24, width: '100%', maxWidth: 500, position: 'relative', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
               >
                 <button onClick={handleCloseForm} style={{ position: 'absolute', top: 20, right: 20, background: 'transparent', border: 'none', cursor: 'pointer', color: '#94A3B8' }}>
                    <X size={24} />
                 </button>
                 
                 <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
                   <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: 12, borderRadius: 12 }}>
                     <UserPlus size={20} color="#3B82F6" />
                   </div>
                   <div style={{ fontSize: 18, fontWeight: 900, color: '#0F004F' }}>{editingUserId ? 'Editar Usuario' : 'Nuevo Usuario'}</div>
                 </div>

           <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
             <div>
               <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', marginBottom: 8, textTransform: 'uppercase' }}>Nombre Completo</label>
               <input value={nombre} onChange={e => setNombre(e.target.value)} type="text" placeholder="Ej. Carlos Araya" style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: '1px solid #CBD5E1', outline: 'none', fontSize: 14, background: '#F8FAFC', color: '#0F004F', fontWeight: 600 }} />
             </div>
             <div>
               <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', marginBottom: 8, textTransform: 'uppercase' }}>Correo Electrónico</label>
               <input value={correo} onChange={e => setCorreo(e.target.value)} type="email" placeholder="Ej. carlos.araya@latam.com" style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: '1px solid #CBD5E1', outline: 'none', fontSize: 14, background: '#F8FAFC', color: '#0F004F', fontWeight: 600 }} />
             </div>
             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
               <div>
                 <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', marginBottom: 8, textTransform: 'uppercase' }}>Fábrica</label>
                 <select value={fabrica} onChange={e => setFabrica(e.target.value)} style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: '1px solid #CBD5E1', outline: 'none', fontSize: 14, background: '#F8FAFC', color: '#0F004F', fontWeight: 600 }}>
                   <option value="Latam">Latam</option>
                   <option value="Konecta Perú">Konecta Perú</option>
                   <option value="Alma Experience">Alma Experience</option>
                   <option value="Konecta Brasil">Konecta Brasil</option>
                   <option value="AeC">AeC</option>
                 </select>
               </div>
               <div>
                 <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', marginBottom: 8, textTransform: 'uppercase' }}>Rango (Automático)</label>
                 <div style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: '1px solid #E2E8F0', fontSize: 14, background: '#F1F5F9', color: '#94A3B8', fontWeight: 600 }}>
                   {rango}
                 </div>
               </div>
             </div>

             <div style={{ marginTop: 8 }}>
               <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', marginBottom: 12, textTransform: 'uppercase' }}>Nivel de Acceso</label>
               <select value={acceso} onChange={e => setAcceso(e.target.value)} style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: '1px solid #CBD5E1', outline: 'none', fontSize: 14, background: '#F8FAFC', color: '#0F004F', fontWeight: 600 }}>
                 <option value="Administrador">Administrador</option>
                 <option value="Explorador">Explorador</option>
                 <option value="BR Station">BR Station</option>
                 <option value="SSC Station">SSC Station</option>
               </select>
             </div>

             <button 
               onClick={handleSaveUser}
               style={{ width: '100%', padding: '14px', background: '#0F004F', color: '#fff', border: 'none', borderRadius: 12, fontWeight: 800, fontSize: 13, cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, marginTop: 16 }}
             >
               <CheckCircle2 size={18} /> GUARDAR USUARIO
             </button>
           </div>
         </motion.div>
        </div>
      )}
      </AnimatePresence>

      {/* USERS LIST */}
      <div style={{ background: '#fff', borderRadius: 24, border: '1px solid #E2E8F0', boxShadow: '0 10px 40px rgba(0,0,0,0.02)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ background: '#0F004F', color: '#fff', fontSize: 12, textTransform: 'uppercase', letterSpacing: '1px' }}>
              <th style={{ padding: '20px 24px', fontWeight: 800 }}>Usuario</th>
              <th style={{ padding: '20px 24px', fontWeight: 800 }}>Fábrica</th>
              <th style={{ padding: '20px 24px', fontWeight: 800 }}>Rango</th>
              <th style={{ padding: '20px 24px', fontWeight: 800 }}>Accesos</th>
              <th style={{ padding: '20px 24px', fontWeight: 800, textAlign: 'right' }}>Acción</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan={5} style={{ padding: 60, textAlign: 'center', color: '#94A3B8' }}>
                   <Users size={48} style={{ opacity: 0.2, marginBottom: 16 }} />
                   <div style={{ fontWeight: 700 }}>No hay usuarios registrados</div>
                   <div style={{ fontSize: 13, marginTop: 4 }}>Registra tu primer usuario utilizando el botón superior.</div>
                </td>
              </tr>
            ) : (
              users.map((u, idx) => {
                const [fab = u.fabrica, ran = ''] = u.fabrica.includes(' - ') ? u.fabrica.split(' - ') : [u.fabrica];
                
                const fLower = fab.toLowerCase();
                let fColor = '#64748B'; // slate
                if (fLower.includes('latam')) fColor = '#ED1650'; // red
                else if (fLower.includes('alma')) fColor = '#00D6CC'; // teal
                else if (fLower.includes('perú') || fLower.includes('peru')) fColor = '#99CC33'; // lime
                else if (fLower.includes('brasil')) fColor = '#3B82F6'; // blue
                else if (fLower.includes('aec')) fColor = '#8B5CF6'; // purple
                
                return (
                  <motion.tr 
                    key={u.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    style={{ borderBottom: '1px solid #E2E8F0', transition: 'background 0.2s' }}
                    whileHover={{ backgroundColor: '#F8FAFC' }}
                  >
                    <td style={{ padding: '16px 24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <div style={{ width: 40, height: 40, borderRadius: '50%', background: ran.toLowerCase().includes('lider') || ran.toLowerCase().includes('admin') ? '#ED1650' : '#0F004F', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: 16 }}>
                          {u.nombre.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <div style={{ fontWeight: 800, color: '#0F004F', fontSize: 15 }}>{u.nombre}</div>
                          <div style={{ color: '#64748B', fontSize: 12 }}>{u.correo}</div>
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
                        {fab}
                      </span>
                    </td>
                    <td style={{ padding: '16px 24px', fontWeight: 600, color: '#334155' }}>
                      {ran}
                    </td>
                    <td style={{ padding: '16px 24px' }}>
                      <select 
                        value={u.acceso || 'BR Station'} 
                        onChange={(e) => handleAccessChange(u.id, e.target.value)}
                        style={{ padding: '6px 12px', borderRadius: 8, border: '1px solid #E2E8F0', outline: 'none', fontSize: 12, fontWeight: 700, color: '#0F004F', cursor: 'pointer', background: '#F8FAFC' }}
                      >
                        <option value="Administrador">Administrador</option>
                        <option value="Explorador">Explorador</option>
                        <option value="BR Station">BR Station</option>
                        <option value="SSC Station">SSC Station</option>
                      </select>
                    </td>
                    <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 8 }}>
                        <button onClick={() => handleEditClick(u)} style={{ background: 'transparent', border: 'none', color: '#3B82F6', cursor: 'pointer', padding: 8, display: 'inline-flex' }}>
                           <Edit3 size={18} />
                        </button>
                        <button onClick={() => handleDelete(u.id)} style={{ background: 'transparent', border: 'none', color: '#EF4444', cursor: 'pointer', padding: 8, display: 'inline-flex' }}>
                           <Trash2 size={18} />
                        </button>
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
    </div>
  );
};
