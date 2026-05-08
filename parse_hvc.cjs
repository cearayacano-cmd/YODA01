
const fs = require('fs');

function parseCurriculum(text) {
    const lines = text.trim().split('\n');
    const sections = [];
    let currentSection = null;

    lines.forEach(line => {
        const parts = line.split('\t');
        if (parts.length < 5) return;

        let missionLabel = parts[0].trim();
        const destino = parts[1] ? parts[1].trim().replace(/^"|"$/g, '').trim() : '';
        const tiempo = parts[2] ? parts[2].trim() : '0:00:00';
        const tema = parts[3] ? parts[3].trim().replace(/^"|"$/g, '').trim() : '';
        const desc = parts[4] ? parts[4].trim().replace(/^"|"$/g, '').trim() : '';
        const herramientasText = parts[5] ? parts[5].trim() : '';
        const link = parts[7] ? parts[7].trim() : '';
        const picLabel = parts[8] ? parts[8].trim() : '';
        const picLink = parts[9] ? parts[9].trim() : '';

        // Normalize mission label for grouping
        let sectionType = 'mision1';
        let norm = missionLabel.toLowerCase();
        if (norm.includes('missão 1')) sectionType = 'mision1';
        else if (norm.includes('missão 2')) sectionType = 'mision2';
        else if (norm.includes('missão 3')) sectionType = 'mision3';
        else if (norm.includes('missão 4')) sectionType = 'mision4';
        else if (norm.includes('missão 5')) sectionType = 'mision5';
        else if (norm.includes('missão 6')) sectionType = 'mision6';
        else if (norm.includes('missão 7')) sectionType = 'mision7';
        else if (norm.includes('missão 8')) sectionType = 'mision8';
        else if (norm.includes('missão 9')) sectionType = 'mision9';
        else if (norm.includes('missão 10')) sectionType = 'mision10';
        else if (norm.includes('missão 11')) sectionType = 'mision11';
        else if (norm.includes('introdução')) sectionType = 'intro';

        if (!currentSection || currentSection.tipo !== sectionType) {
            currentSection = {
                tipo: sectionType,
                label: missionLabel.toUpperCase() || 'MISSÃO',
                rows: []
            };
            sections.push(currentSection);
        }

        const herramientas = [];
        if (herramientasText && herramientasText !== 'NA' && herramientasText !== 'Sin enlace') {
            herramientas.push({ tipo: herramientasText, url: link || '#' });
        } else if (link && link !== 'NA' && link !== 'Sin enlace') {
            herramientas.push({ tipo: 'Link', url: link });
        }

        const iaPic = [];
        if (picLink && picLink !== 'Sin enlace' && picLink !== 'NA') {
            iaPic.push({ label: picLabel || 'PIC', url: picLink });
        }

        currentSection.rows.push({
            macroTema: destino || tema,
            tema: tema,
            detalhe: desc,
            tiempo: tiempo || '0:00:00',
            herramientas: herramientas,
            iaPic: iaPic,
            consejo: ""
        });
    });

    return sections;
}

const input = fs.readFileSync('hvc_raw.txt', 'utf8');
const hvcSections = parseCurriculum(input);
const hvcData = {
    label: "HVC",
    color: "#ED1650",
    secciones: hvcSections,
    materiais: [],
    evalKon: [],
    evalAec: [],
    evalMsg: ""
};

const outputCode = `\nexport const HVC_DATA = ${JSON.stringify(hvcData, null, 2)};\n`;
fs.appendFileSync('src/lib/data.ts', outputCode);
console.log('Successfully appended HVC_DATA to data.ts');
