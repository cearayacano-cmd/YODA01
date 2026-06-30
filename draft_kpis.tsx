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

const generateKPIsForUser = (userId: string | null, allLogs: any[], trackingData: any[], config: any) => {
    if (!userId) return null;

    // 1. Get logs and partidas
    const userLogs = allLogs.filter((l: any) => l.user === userId);
    let partidasInfo = getPartidasInfo(userLogs, config);
    
    // Merge Ruta Lider missions
    const missions = trackingData.filter((m: any) => m.email === userId);
    const groupedMissions: Record<string, any[]> = {};
    missions.forEach((m: any) => {
        const pName = m.planetas || m.missao || 'Desconocido';
        if (pName.toUpperCase().includes('ONBOARDING')) return;
        if (!groupedMissions[pName]) groupedMissions[pName] = [];
        groupedMissions[pName].push(m);
    });
    // ... we don't necessarily need to perfectly rebuild userPartidasData here 
    // if we just need high level KPIs, but let's do it simply.

    // 2. Tool Usage Adoption
    const operaciones = userLogs.filter((l: any) => l.action === 'NAVIGATE' && l.details === 'Navegación a: operaciones').length;
    const suministros = userLogs.filter((l: any) => l.action === 'NAVIGATE' && l.details === 'Navegación a: suministros').length;
    const laboratorio = userLogs.filter((l: any) => l.action === 'NAVIGATE' && l.details === 'Navegación a: laboratorio').length;
    const ingenieria = userLogs.filter((l: any) => l.action === 'NAVIGATE' && l.details === 'Navegación a: ingenieria').length;

    const totalUsage = operaciones + suministros + laboratorio + ingenieria;
    const usageData = [
        { name: 'Portal Instr.', value: operaciones, fill: '#EAB308' },
        { name: 'Formularios', value: suministros, fill: '#06B6D4' },
        { name: 'Portal Lider', value: laboratorio, fill: '#84CC16' },
        { name: 'Workshops', value: ingenieria, fill: '#A855F7' }
    ];

    // 3. Time Accuracy & Ranks
    let totalMinutes = 0;
    let timeAccuracy = { fast: 0, onTime: 0, slow: 0 };
    let missionRanks = { S: 0, A: 0, B: 0, C: 0, D: 0 };
    
    // Calculate total hours accurately based on finished items
    missions.filter(m => !!m.marcarComoFinalizado).forEach(m => {
        const finishRaw = m.marcarComoFinalizadoRaw || 0;
        const startRaw = m.tiempoAperturaRaw || finishRaw;
        const diffMs = finishRaw - startRaw;
        const diffMins = Math.max(0, Math.floor(diffMs / 60000));
        const estMins = parseTimeStr(m.tiempoEstimado);
        
        totalMinutes += Math.min(diffMins, estMins);
        
        if (estMins > 0) {
            const ratio = diffMins / estMins;
            // < 50% time = fast, > 150% time = slow
            if (ratio < 0.5) timeAccuracy.fast++;
            else if (ratio > 1.5) timeAccuracy.slow++;
            else timeAccuracy.onTime++;
        }
    });

    const totalHoras = Math.floor(totalMinutes / 60);
    
    // Group by 'codigo' to get unique course lengths for S/A/B/C/D
    const uniqueCourses: Record<string, number> = {};
    missions.filter(m => !!m.marcarComoFinalizado).forEach(m => {
        if (!uniqueCourses[m.codigo]) uniqueCourses[m.codigo] = 0;
        uniqueCourses[m.codigo] += parseTimeStr(m.tiempoEstimado);
    });

    Object.values(uniqueCourses).forEach(pMins => {
        const hrs = pMins / 60;
        if (hrs < 1) missionRanks.D++;
        else if (hrs < 3) missionRanks.C++;
        else if (hrs < 8) missionRanks.B++;
        else if (hrs < 20) missionRanks.A++;
        else missionRanks.S++;
    });

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
        { name: 'Excede (Lento)', value: Math.round((timeAccuracy.slow / totalTimeAccuracyCount) * 100), fill: '#EF4444' },
        { name: 'A Tiempo', value: Math.round((timeAccuracy.onTime / totalTimeAccuracyCount) * 100), fill: '#10B981' },
        { name: 'Muy Rápido', value: Math.round((timeAccuracy.fast / totalTimeAccuracyCount) * 100), fill: '#F59E0B' }
    ];

    const accuracyRaw = {
        slow: timeAccuracy.slow,
        onTime: timeAccuracy.onTime,
        fast: timeAccuracy.fast
    };

    return { 
        userId,
        usageData, 
        accuracyData,
        accuracyRaw,
        totalHoras, 
        level, 
        progress: Math.min(100, Math.max(0, progress)),
        missionRanks,
        totalUsage,
        operaciones, suministros, laboratorio, ingenieria,
        uniqueCoursesCount: Object.keys(uniqueCourses).length
    };
};
