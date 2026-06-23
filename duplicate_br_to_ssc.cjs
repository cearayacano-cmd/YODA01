const fs = require('fs');

const configPath = './src/lib/appConfig.json';
const data = JSON.parse(fs.readFileSync(configPath, 'utf8'));

// Duplicate br to ssc
data.ssc = JSON.parse(JSON.stringify(data.br));

// Translate the satelites section specific values
if (data.ssc.satelites) {
    if (data.ssc.satelites.imersao && data.ssc.satelites.imersao[0]) {
        data.ssc.satelites.imersao[0].herramientas = "Operación";
    }
    // Other values "Onboarding", "Visión Global", "PPT", "IOE", "Escucha Activa" are already mostly valid in Spanish or common acronyms.
}

fs.writeFileSync(configPath, JSON.stringify(data, null, 2), 'utf8');
console.log("Se ha duplicado 'br' a 'ssc' en appConfig.json.");
