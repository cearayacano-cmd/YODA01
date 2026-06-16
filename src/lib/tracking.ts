export interface MissionProgress {
  mesAño: string;
  instructor: string;
  email: string;
  codigo: string;
  expedicion: string;
  planetas: string;
  missao: string;
  macrotema: string;
  tema: string;
  tiempoEstimado: string;
  tiempoApertura: string | null;
  marcarComoVisto: string | null;
  marcarComoFinalizado: string | null;
  tiempoAperturaRaw?: number;
  marcarComoVistoRaw?: number;
}

export type TrackAction = 'APERTURA' | 'VISTO' | 'FINALIZADO';

export const getMissionTracking = (): MissionProgress[] => {
  if (typeof localStorage === 'undefined') return [];
  const data = localStorage.getItem('yoda_mission_tracking');
  return data ? JSON.parse(data) : [];
};

export const updateMissionTracking = (
  email: string,
  expedicion: string,
  planeta: string,
  missao: string,
  macrotema: string,
  tema: string,
  tiempoEstimado: string,
  actionType: TrackAction
) => {
  if (typeof localStorage === 'undefined') return;

  const trackingData = getMissionTracking();
  const date = new Date();
  
  // Format current month and year e.g. "06-2026"
  const mesAño = `${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}`;
  const timestamp = date.toLocaleString(); // e.g., "16/6/2026, 16:21:00"

  // Check if there is an existing entry for this user and mission
  const existingIndex = trackingData.findIndex(
    (t) => t.email === email && t.expedicion === expedicion && t.planetas === planeta && t.missao === missao && t.macrotema === macrotema && t.tema === tema
  );

  if (existingIndex >= 0) {
    // Update existing record
    if (actionType === 'APERTURA' && !trackingData[existingIndex].tiempoApertura) {
      trackingData[existingIndex].tiempoApertura = timestamp;
      trackingData[existingIndex].tiempoAperturaRaw = Date.now();
    } else if (actionType === 'VISTO') {
      trackingData[existingIndex].marcarComoVisto = timestamp;
      trackingData[existingIndex].marcarComoVistoRaw = Date.now();
    } else if (actionType === 'FINALIZADO') {
      trackingData[existingIndex].marcarComoFinalizado = timestamp;
    }
  } else {
      let sessionCode = localStorage.getItem('yoda_session_code_' + email);
      if (!sessionCode) {
        sessionCode = 'YODA-' + Math.floor(1000 + Math.random() * 9000);
        localStorage.setItem('yoda_session_code_' + email, sessionCode);
      }
      
      const newRecord: MissionProgress = {
        mesAño,
        instructor: email.split('@')[0], // Extract a mock name from email
        email,
        codigo: sessionCode,
        expedicion,
        planetas: planeta,
        missao,
        macrotema,
        tema,
        tiempoEstimado,
        tiempoApertura: actionType === 'APERTURA' ? timestamp : null,
        marcarComoVisto: actionType === 'VISTO' ? timestamp : null,
        marcarComoFinalizado: actionType === 'FINALIZADO' ? timestamp : null,
        tiempoAperturaRaw: actionType === 'APERTURA' ? Date.now() : undefined,
        marcarComoVistoRaw: actionType === 'VISTO' ? Date.now() : undefined,
        marcarComoFinalizadoRaw: actionType === 'FINALIZADO' ? Date.now() : undefined,
      };
    trackingData.push(newRecord);
  }

  localStorage.setItem('yoda_mission_tracking', JSON.stringify(trackingData));
};

export const clearMissionTracking = () => {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem('yoda_mission_tracking');
  }
};
