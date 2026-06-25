const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, 'src', 'lib', 'appConfig.json');
let config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

function migrateRutaLider(arr) {
  if (!arr || !Array.isArray(arr) || arr.length === 0) return [];
  if (arr[0].label) return arr; // Already migrated
  
  const poderes = [...new Set(arr.map(d => d.poder))];
  const migrated = poderes.map(pName => {
    const nodes = arr.filter(n => n.poder === pName);
    return {
      label: pName,
      tipo: 'mision1',
      rows: nodes.map(n => ({
        macroTema: n.tema || 'Nuevo Macrotema',
        dia: "1",
        tema: n.tema,
        detalhe: n.desc,
        tiempo: n.tiempo,
        herramientas: [{ tipo: '🔗 Link', url: n.adjunto || '' }],
        iaPic: [],
        consejo: n.consejo
      }))
    };
  });
  return migrated;
}

if (config.br && config.br.rutaLider) {
  config.br.rutaLider = migrateRutaLider(config.br.rutaLider);
}
if (config.ssc && config.ssc.rutaLider) {
  config.ssc.rutaLider = migrateRutaLider(config.ssc.rutaLider);
}

fs.writeFileSync(configPath, JSON.stringify(config, null, 2), 'utf8');
console.log('Migration successful!');
