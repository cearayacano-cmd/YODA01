const fs = require('fs');
const path = './src/lib/appConfig.json';
const dataJSON = JSON.parse(fs.readFileSync(path, 'utf8'));

const evalMsg = 'Os alunos que não atingirem a média final de 80% devem realizar o "Ajuste de Rota" - Avaliação de recuperação e somente após a aprovação realizar os testes de acessos.\nDuração: 30 min';

for (const stationKey of Object.keys(dataJSON)) {
  const station = dataJSON[stationKey];
  if (station && station.exploracion) {
    for (const sector of ['frontLine', 'soporte', 'fieldSupport']) {
      const planets = station.exploracion[sector] || [];
      const idx = planets.findIndex(p => p.label === 'Suporte HVC');
      if (idx !== -1) {
        const contentKey = sector === 'soporte' ? 'soporteContent' : sector === 'frontLine' ? 'frontLineContent' : 'fsc';
        if (!station[contentKey]) {
          station[contentKey] = [];
        }
        while (station[contentKey].length <= idx) {
          station[contentKey].push([]);
        }

        let current = station[contentKey][idx];
        if (!current || Array.isArray(current)) {
            current = {
                secciones: current || [],
                materiais: [],
                evalKon: [],
                evalAec: []
            };
        }
        current.evalMsg = evalMsg;
        station[contentKey][idx] = current;
      }
    }
  }
}

fs.writeFileSync(path, JSON.stringify(dataJSON, null, 2));
console.log('Successfully updated appConfig.json with Suporte HVC data.');
