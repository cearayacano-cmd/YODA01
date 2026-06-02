const fs = require('fs');
const path = './src/lib/appConfig.json';

const dataJSON = JSON.parse(fs.readFileSync(path, 'utf8'));

for (const stationKey of Object.keys(dataJSON)) {
  const station = dataJSON[stationKey];
  if (station && station.exploracion) {
    for (const sector of ['frontLine', 'soporte', 'fieldSupport']) {
      const planets = station.exploracion[sector] || [];
      const idx = planets.findIndex(p => p.label === 'Suporte HVC');
      if (idx !== -1) {
        const contentKey = sector === 'soporte' ? 'soporteContent' : sector === 'frontLine' ? 'frontLineContent' : 'fsc';
        if (station[contentKey] && station[contentKey][idx]) {
          const blocks = station[contentKey][idx];
          for (const block of blocks) {
            if (block.label === 'Avaliação') {
              block.tipo = 'avaliacao'; // Se cambia de 'mision1' a 'avaliacao'
            }
          }
        }
      }
    }
  }
}

fs.writeFileSync(path, JSON.stringify(dataJSON, null, 2));
console.log('Successfully fixed Avaliacao type.');
