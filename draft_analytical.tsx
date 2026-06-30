const parseTimeStr = (tStr: string) => {
    if (!tStr) return 0;
    const t = tStr.toLowerCase();
    if (t.includes('h')) {
    const h = parseFloat(t.replace('h', ''));
    return isNaN(h) ? 0 : h * 60;
    }
    if (t.includes('m')) {
    const m = parseFloat(t.replace('m', ''));
    return isNaN(m) ? 0 : m;
    }
    if (t.includes(':')) {
    const parts = t.split(':');
    return (parseInt(parts[0]) || 0) * 60 + (parseInt(parts[1]) || 0);
    }
    return 0;
};

// We will extract the KPI logic into a function to reuse it for selectedUser and compareUser
const calculateKPIs = (targetUser: string | null, allLogs: any[], trackingConfig: any) => {
    if (!targetUser) return null;

    const userLogs = allLogs.filter((l: any) => l.user === targetUser);
    const partidasData = getPartidasInfo(userLogs, trackingConfig);
    const missionsData = getMissionTracking().filter((m: any) => m.email === targetUser);
    
    // Usage counts
    const operaciones = userLogs.filter((l: any) => l.action === 'NAVIGATE' && l.details === 'Navegación a: operaciones').length;
    const suministros = userLogs.filter((l: any) => l.action === 'NAVIGATE' && l.details === 'Navegación a: suministros').length;
    const laboratorio = userLogs.filter((l: any) => l.action === 'NAVIGATE' && l.details === 'Navegación a: laboratorio').length;
    const ingenieria = userLogs.filter((l: any) => l.action === 'NAVIGATE' && l.details === 'Navegación a: ingenieria').length;
    const totalVisits = Math.max(1, operaciones + suministros + laboratorio + ingenieria);

    const usageData = [
        { name: 'Portal Instr.', value: operaciones, fill: '#EAB308' },
        { name: 'Formularios', value: suministros, fill: '#06B6D4' },
        { name: 'Portal Lider', value: laboratorio, fill: '#84CC16' },
        { name: 'Workshops', value: ingenieria, fill: '#A855F7' }
    ];

    // Time Accuracy & Ranks
    let totalMinutes = 0;
    let timeAccuracy = { fast: 0, onTime: 0, slow: 0 };
    
    missionsData.filter((m:any) => !!m.marcarComoFinalizado).forEach((m:any) => {
        const finishRaw = m.marcarComoFinalizadoRaw || 0;
        const startRaw = m.tiempoAperturaRaw || finishRaw;
        const diffMs = finishRaw - startRaw;
        const diffMins = Math.max(0, Math.floor(diffMs / 60000));
        const estMins = parseTimeStr(m.tiempoEstimado);
        
        totalMinutes += Math.min(diffMins, estMins);
        
        if (estMins > 0) {
            const ratio = diffMins / estMins;
            if (ratio < 0.5) timeAccuracy.fast++;
            else if (ratio > 1.5) timeAccuracy.slow++;
            else timeAccuracy.onTime++;
        }
    });

    const totalHoras = Math.floor(totalMinutes / 60);
    
    let level = "Instructor ⭐";
    let nextLevelHours = 50;
    let progress = (totalHoras / 50) * 100;
    
    if (totalHoras >= 100) {
      level = "Instructor ⭐⭐⭐";
      nextLevelHours = totalHoras;
      progress = 100;
    } else if (totalHoras >= 50) {
      level = "Instructor ⭐⭐";
      nextLevelHours = 100;
      progress = ((totalHoras - 50) / (100 - 50)) * 100;
    }

    const totalTimeAccuracyCount = Math.max(1, timeAccuracy.fast + timeAccuracy.onTime + timeAccuracy.slow);
    const accuracyData = [
        { name: 'Muy Rápido', value: Math.round((timeAccuracy.fast / totalTimeAccuracyCount) * 100), fill: '#F59E0B' },
        { name: 'A Tiempo', value: Math.round((timeAccuracy.onTime / totalTimeAccuracyCount) * 100), fill: '#10B981' },
        { name: 'Excedido', value: Math.round((timeAccuracy.slow / totalTimeAccuracyCount) * 100), fill: '#EF4444' }
    ];

    return { 
        usageData, 
        accuracyData,
        totalHoras, 
        level, 
        progress: Math.min(100, Math.max(0, progress)),
        partidasData,
        operaciones, suministros, laboratorio, ingenieria
    };
};
