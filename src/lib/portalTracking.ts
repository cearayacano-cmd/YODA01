export interface PortalProgress {
  instructor: string;
  email: string;
  portalCategory: string; // e.g. "Portal Instrutor", "Formulários", "Workshops"
  linkName: string;       // e.g. "01. Usuários Treinamento" or "TAB"
  actionType: 'VISIT' | 'CLICK_LINK' | 'CLICK';
  timestamp: string;
}

export const getPortalTracking = (): PortalProgress[] => {
  if (typeof localStorage === 'undefined') return [];
  const data = localStorage.getItem('yoda_portal_tracking');
  return data ? JSON.parse(data) : [];
};

export const updatePortalTracking = (
  email: string,
  portalCategory: string,
  linkName: string,
  actionType: 'VISIT' | 'CLICK_LINK' | 'CLICK'
) => {
  if (typeof localStorage === 'undefined') return;

  const trackingData = getPortalTracking();
  const date = new Date();
  
  const newRecord: PortalProgress = {
    instructor: email.split('@')[0],
    email,
    portalCategory,
    linkName,
    actionType,
    timestamp: date.toLocaleString()
  };
  
  trackingData.push(newRecord);
  localStorage.setItem('yoda_portal_tracking', JSON.stringify(trackingData));
};
