import React from 'react';
import { AdminPlanetEditor } from './AdminPlanetEditor';

export const AdminRutaLider = ({ rutaData, setRutaData, onBack, title, onSave }: any) => {
  // Wrap the sections into a fake "planet" for the editor
  // The schema expects { label: string, data: { secciones: any[] } } when isOnboarding is true
  const dataArray = [
    { 
      label: 'Estructura de Ruta del lider', 
      data: { secciones: Array.isArray(rutaData) ? rutaData : [] } 
    }
  ];

  const handleSetDataArray = (newDataArray: any) => {
    if (newDataArray && newDataArray.length > 0) {
       setRutaData(newDataArray[0].data.secciones || []);
    }
  };

  return (
    <AdminPlanetEditor 
      dataArray={dataArray}
      setDataArray={handleSetDataArray}
      planets={dataArray}
      onBack={onBack}
      title={title || 'EDITOR RUTA DEL LÍDER'}
      onSave={onSave}
      initialPlanet={0}
      isOnboarding={true}
      hideSidebar={true}
    />
  );
};
