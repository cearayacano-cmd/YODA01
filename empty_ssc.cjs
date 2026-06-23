const fs = require('fs');

const configPath = './src/lib/appConfig.json';
const data = JSON.parse(fs.readFileSync(configPath, 'utf8'));

if (!data.ssc) {
    data.ssc = JSON.parse(JSON.stringify(data.br));
}

// Function to empty arrays in the object recursively
function emptyArrays(obj) {
    if (Array.isArray(obj)) {
        return [];
    } else if (typeof obj === 'object' && obj !== null) {
        const newObj = {};
        for (const key in obj) {
            newObj[key] = emptyArrays(obj[key]);
        }
        return newObj;
    }
    return obj;
}

// We want to keep string fields like "monitoringUrl" empty or as is?
// The user said "SSC STATION debe estar vacio".
data.ssc.monitoringUrl = "";
data.ssc.iaraLink = "";
data.ssc.preparacaoLink = "";
data.ssc.lastUpdate = "";

// Empty all arrays (suministros, ingenieria, operaciones, rutaLider, onboarding, fsc)
data.ssc.suministros = [];
data.ssc.ingenieria = [];
data.ssc.laboratorio = [];
data.ssc.operaciones = [];
data.ssc.rutaLider = [];
data.ssc.onboarding = [];
data.ssc.fsc = [];
data.ssc.satelites = { conhecendo: [], imersao: [] };
data.ssc.exploracion = { frontLine: [], soporte: [], fieldSupport: [] };

// Also clear out any advanced content arrays like frontLineContent, soporteContent, fscContent etc.
// In br, these might exist at the root or inside the objects.
// Let's just find any key ending with "Content" and empty it.
for (const key in data.ssc) {
    if (Array.isArray(data.ssc[key])) {
        data.ssc[key] = [];
    }
}

fs.writeFileSync(configPath, JSON.stringify(data, null, 2), 'utf8');
console.log("Se ha vaciado la configuración de SSC manteniendo la estructura de BR.");
