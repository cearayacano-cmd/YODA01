const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, './src/lib/appConfig.json');
const configData = JSON.parse(fs.readFileSync(configPath, 'utf8'));

let totalMinutes = 0;

function parseTime(timeStr) {
  if (!timeStr) return 0;
  if (typeof timeStr === 'number') return timeStr || 0;
  
  if (typeof timeStr !== 'string') timeStr = String(timeStr);
  
  if (timeStr.includes(':')) {
    const parts = timeStr.split(':').map(Number);
    if (parts.length === 3) {
      return (parts[0] || 0) * 60 + (parts[1] || 0);
    } else if (parts.length === 2) {
      return (parts[0] || 0) * 60 + (parts[1] || 0);
    }
  }
  
  const matches = timeStr.match(/(\d+)\s*(h|m|min)/i);
  if (matches) {
    const val = parseInt(matches[1], 10);
    if (!isNaN(val)) {
        if (matches[2].toLowerCase().startsWith('h')) return val * 60;
        return val;
    }
  }
  
  const num = parseInt(timeStr, 10);
  return isNaN(num) ? 0 : num;
}

function traverse(obj) {
  if (!obj) return;
  if (Array.isArray(obj)) {
    obj.forEach(traverse);
  } else if (typeof obj === 'object') {
    if (obj.tiempo) { const t = parseTime(obj.tiempo); if (!isNaN(t)) totalMinutes += t; }
    else if (obj.ch) { const t = parseTime(obj.ch); if (!isNaN(t)) totalMinutes += t; }
    else if (obj.tiempoEstimado) { const t = parseTime(obj.tiempoEstimado); if (!isNaN(t)) totalMinutes += t; }
    
    // traverse children
    Object.values(obj).forEach(traverse);
  }
}

const frontLinePlanets = configData.br.frontLineContent || [];
console.log(`Found ${frontLinePlanets.length} front line planets`);
frontLinePlanets.forEach(p => traverse(p));

console.log(`Total minutos Front Line: ${totalMinutes}`);
console.log(`Total horas Front Line: ${(totalMinutes / 60).toFixed(2)} horas`);
