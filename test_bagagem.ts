import { dataArray } from './src/lib/data';

const typeColors: any = {
    mision: '#00AEEF',
    missao: '#00AEEF',
    mission: '#00AEEF',
    mision1: '#00AEEF',
    mision2: '#00AEEF',
    mision3: '#00AEEF',
    mision4: '#00AEEF',
    mision5: '#00AEEF',
    mision6: '#00AEEF',
    mision7: '#00AEEF',
    mision8: '#00AEEF',
    mision9: '#00AEEF',
    mision10: '#00AEEF',
    landing: '#FFC800',
    ojt:     '#ED1650',
    imersao: '#D400FF',
    avaliacao: '#00D6CC'
};

const bagagemPlanet = dataArray.find(p => p.label && p.label.toLowerCase().includes('bagagem'));
if (bagagemPlanet) {
    console.log("Found Bagagem planet!");
    const planetColor = bagagemPlanet.color || '#1b0088';
    console.log("Planet Color:", planetColor);
    
    let secciones = [];
    if (bagagemPlanet.secciones) {
        secciones = bagagemPlanet.secciones;
    } else if (Array.isArray(bagagemPlanet)) { 
        secciones = (bagagemPlanet.length > 0 && (bagagemPlanet[0].tipo || bagagemPlanet[0].rows)) ? bagagemPlanet : [{ tipo: 'mision1', nombre: '', rows: bagagemPlanet }];
    } else if (bagagemPlanet.rows) {
        secciones = [{ tipo: bagagemPlanet.tipo || 'mision1', nombre: '', rows: bagagemPlanet.rows }];
    }

    secciones.forEach((sec, i) => {
        const nodeColor = sec.color || typeColors[sec.tipo] || planetColor;
        console.log(`Section ${i}:`);
        console.log(`  tipo:`, sec.tipo);
        console.log(`  color prop:`, sec.color);
        console.log(`  evaluated nodeColor:`, nodeColor);
    });
} else {
    console.log("Bagagem planet not found.");
}
