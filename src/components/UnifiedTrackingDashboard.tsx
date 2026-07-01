import React, { useState } from 'react';
import { AdminTrackingDashboard } from './AdminTrackingDashboard';
import { AdminPortalTrackingDashboard } from './AdminPortalTrackingDashboard';
import { AdminVisualDashboard } from './AdminVisualDashboard';
import { AdminUsersList } from './AdminUsersList';
import { PerformanceDashboard } from './PerformanceDashboard';
import { ArrowLeft, Users, LayoutDashboard, TableProperties, Compass, Star, Trophy } from 'lucide-react';

export const UnifiedTrackingDashboard = ({ view, logs, config, onBack, stationName, initialInstructorId, isEs }: any) => {
  const [activeTab, setActiveTab] = useState<'users' | 'visual' | 'missions' | 'portals' | 'performance'>('users');
  const [selectedInstructor, setSelectedInstructor] = useState<string | undefined>(initialInstructorId);
  const [selectedCode, setSelectedCode] = useState<string | undefined>();

  const handleViewDetails = (instructorId: string, sessionCode?: string) => {
    setSelectedInstructor(instructorId);
    if (sessionCode) setSelectedCode(sessionCode);
    setActiveTab('visual');
  };


  const menuItems = [
    { id: 'users', label: isEs ? 'DIRECTORIO' : 'DIRETÓRIO', icon: <Users size={20} />, color: '#ED1650' },
    { id: 'visual', label: isEs ? 'RESUMEN VISUAL' : 'RESUMO VISUAL', icon: <LayoutDashboard size={20} />, color: '#FFB800' },
    { id: 'missions', label: isEs ? 'MISIONES' : 'MISSÕES', icon: <TableProperties size={20} />, color: '#00D6CC' },
    { id: 'portals', label: isEs ? 'PORTALES' : 'PORTAIS', icon: <Compass size={20} />, color: '#99CC33' },
    { id: 'performance', label: 'PERFORMANCE', icon: <Trophy size={20} />, color: '#FF00FF' }
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#f5f7f9', display: 'flex' }}>
      {/* Sidebar */}
      <div style={{ width: 280, background: '#0F004F', display: 'flex', flexDirection: 'column', padding: '32px 0', boxShadow: '4px 0 20px rgba(0,0,0,0.1)', zIndex: 10 }}>
        
        <div style={{ padding: '0 24px', marginBottom: 40, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src="/logo-blanco-1.png" alt="Capacitacion" style={{ height: 45, objectFit: 'contain', marginBottom: 16 }} />
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: '3px', fontWeight: 900 }}>{isEs ? 'MONITOREO GLOBAL' : 'MONITORAMENTO GLOBAL'}</div>
          {stationName && (
            <div style={{ marginTop: 12, display: 'inline-flex', alignItems: 'center', background: stationName === 'BR' ? '#99CC33' : '#682D88', padding: '4px 10px', borderRadius: 6, boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
              <span style={{ fontSize: 10, fontWeight: 900, color: '#fff', letterSpacing: '1px' }}>{stationName} STATION</span>
            </div>
          )}
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8, paddingRight: 16 }}>
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              style={{
                background: activeTab === item.id ? 'rgba(255,255,255,0.08)' : 'transparent',
                color: activeTab === item.id ? '#fff' : 'rgba(255,255,255,0.5)',
                border: 'none',
                padding: '16px 20px',
                paddingLeft: 32,
                borderRadius: '0 12px 12px 0',
                fontSize: 14,
                fontWeight: 800,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                borderLeft: activeTab === item.id ? `4px solid ${item.color}` : '4px solid transparent'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== item.id) {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  e.currentTarget.style.color = '#fff';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== item.id) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                }
              }}
            >
              <span style={{ color: activeTab === item.id ? item.color : 'inherit' }}>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>

        <div style={{ padding: '24px 16px' }}>
          <button 
            onClick={onBack}
            style={{
              width: '100%',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff',
              padding: '12px 16px',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              cursor: 'pointer',
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: '1px',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
import React, { useState } from 'react';
import { AdminTrackingDashboard } from './AdminTrackingDashboard';
import { AdminPortalTrackingDashboard } from './AdminPortalTrackingDashboard';
import { AdminVisualDashboard } from './AdminVisualDashboard';
import { AdminUsersList } from './AdminUsersList';
import { PerformanceDashboard } from './PerformanceDashboard';
import { ArrowLeft, Users, LayoutDashboard, TableProperties, Compass, Star, Trophy } from 'lucide-react';

export const UnifiedTrackingDashboard = ({ view, logs, config, onBack, stationName, initialInstructorId, isEs }: any) => {
  const [activeTab, setActiveTab] = useState<'users' | 'visual' | 'missions' | 'portals' | 'performance'>('users');
  const [selectedInstructor, setSelectedInstructor] = useState<string | undefined>(initialInstructorId);
  const [selectedCode, setSelectedCode] = useState<string | undefined>();

  const handleViewDetails = (instructorId: string, sessionCode?: string) => {
    setSelectedInstructor(instructorId);
    if (sessionCode) setSelectedCode(sessionCode);
    setActiveTab('visual');
  };


  const menuItems = [
    { id: 'users', label: isEs ? 'DIRECTORIO' : 'DIRETÓRIO', icon: <Users size={20} />, color: '#ED1650' },
    { id: 'visual', label: isEs ? 'RESUMEN VISUAL' : 'RESUMO VISUAL', icon: <LayoutDashboard size={20} />, color: '#FFB800' },
    { id: 'missions', label: isEs ? 'MISIONES' : 'MISSÕES', icon: <TableProperties size={20} />, color: '#00D6CC' },
    { id: 'portals', label: isEs ? 'PORTALES' : 'PORTAIS', icon: <Compass size={20} />, color: '#99CC33' },
    { id: 'performance', label: 'PERFORMANCE', icon: <Trophy size={20} />, color: '#FF00FF' }
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#f5f7f9', display: 'flex' }}>
      {/* Sidebar */}
      <div style={{ width: 280, background: '#0F004F', display: 'flex', flexDirection: 'column', padding: '32px 0', boxShadow: '4px 0 20px rgba(0,0,0,0.1)', zIndex: 10 }}>
        
        <div style={{ padding: '0 24px', marginBottom: 40, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src="/logo-blanco-1.png" alt="Capacitacion" style={{ height: 45, objectFit: 'contain', marginBottom: 16 }} />
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: '3px', fontWeight: 900 }}>{isEs ? 'MONITOREO GLOBAL' : 'MONITORAMENTO GLOBAL'}</div>
          {stationName && (
            <div style={{ marginTop: 12, display: 'inline-flex', alignItems: 'center', background: stationName === 'BR' ? '#99CC33' : '#682D88', padding: '4px 10px', borderRadius: 6, boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
              <span style={{ fontSize: 10, fontWeight: 900, color: '#fff', letterSpacing: '1px' }}>{stationName} STATION</span>
            </div>
          )}
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8, paddingRight: 16 }}>
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              style={{
                background: activeTab === item.id ? 'rgba(255,255,255,0.08)' : 'transparent',
                color: activeTab === item.id ? '#fff' : 'rgba(255,255,255,0.5)',
                border: 'none',
                padding: '16px 20px',
                paddingLeft: 32,
                borderRadius: '0 12px 12px 0',
                fontSize: 14,
                fontWeight: 800,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                borderLeft: activeTab === item.id ? `4px solid ${item.color}` : '4px solid transparent'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== item.id) {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  e.currentTarget.style.color = '#fff';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== item.id) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                }
              }}
            >
              <span style={{ color: activeTab === item.id ? item.color : 'inherit' }}>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>

        <div style={{ padding: '24px 16px' }}>
          <button 
            onClick={onBack}
            style={{
              width: '100%',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff',
              padding: '12px 16px',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              cursor: 'pointer',
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: '1px',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
          >
            <ArrowLeft size={16} /> <span style={{ marginLeft: 32 }}>{isEs ? 'VOLVER AL ADMIN' : 'VOLTAR AO ADMIN'}</span>
          </button>
        </div>
      </div>

      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        {activeTab === 'users' && (
          <div style={{ position: 'absolute', inset: 0, overflow: 'auto' }}>
            <AdminUsersList onViewUser={handleViewDetails} stationName={stationName} isEs={isEs} />
          </div>
        )}

        {activeTab === 'visual' && (
          <div style={{ position: 'absolute', inset: 0, overflow: 'auto' }}>
            <AdminVisualDashboard stationName={stationName} config={config} initialSearchQuery={selectedInstructor} isEs={isEs} onViewDetails={(instructorId: string, sessionCode: string) => {
              setSelectedInstructor(instructorId);
              setSelectedCode(sessionCode);
              setActiveTab('missions');
            }} />
          </div>
        )}
        {activeTab === 'missions' && (
          <div style={{ position: 'absolute', inset: 0, overflow: 'auto' }}>
            <AdminTrackingDashboard stationName={stationName} initialInstructorFilter={selectedInstructor} initialCodeFilter={selectedCode} isEs={isEs} />
          </div>
        )}
        {activeTab === 'portals' && (
          <div style={{ position: 'absolute', inset: 0, overflow: 'auto' }}>
            <AdminPortalTrackingDashboard stationName={stationName} isEs={isEs} />
          </div>
        )}
        {activeTab === 'performance' && (
          <div style={{ position: 'absolute', inset: 0, overflow: 'auto' }}>
            <PerformanceDashboard onBack={() => {}} stationName={stationName} isEs={isEs} />
          </div>
        )}
      </div>
    </div>
  );
};
