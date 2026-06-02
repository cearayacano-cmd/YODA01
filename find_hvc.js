const fs = require('fs');
const path = './src/lib/appConfig.json';

const data = JSON.parse(fs.readFileSync(path, 'utf8'));

// Find "Suporte HVC"
let found = false;
for (const stationKey of Object.keys(data)) {
  const station = data[stationKey];
  if (station && station.exploracion) {
    for (const sector of ['frontLine', 'soporte', 'fieldSupport']) {
      const planets = station.exploracion[sector] || [];
      const idx = planets.findIndex(p => p.label === 'Suporte HVC');
      if (idx !== -1) {
        console.log(`Found "Suporte HVC" in station "${stationKey}", sector "${sector}" at index ${idx}`);
        
        // Let's also check the corresponding content array
        const contentKey = sector === 'soporte' ? 'soporteContent' : sector === 'frontLine' ? 'frontLineContent' : 'fsc';
        const contentArr = station[contentKey] || [];
        console.log(`Content array ${contentKey} length: ${contentArr.length}`);
        
        found = true;
      }
    }
  }
}

if (!found) {
  console.log('Suporte HVC not found.');
}
