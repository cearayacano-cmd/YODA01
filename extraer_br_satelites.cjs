const fs = require('fs');

const configPath = './src/lib/appConfig.json';
const data = JSON.parse(fs.readFileSync(configPath, 'utf8'));

const satelites = data.br?.satelites;
if (!satelites) {
    console.error("No se encontró 'br.satelites' en appConfig.json");
    process.exit(1);
}

const stringsToTranslate = new Set();
const urlsToReplace = new Set();

function traverse(obj) {
    if (typeof obj === 'string') {
        const val = obj.trim();
        if (val.startsWith('http://') || val.startsWith('https://')) {
            urlsToReplace.add(val);
        } else if (val.length > 2 && !val.match(/^#[0-9a-fA-F]{3,6}$/) && !val.match(/^[0-9:]+$/)) {
            stringsToTranslate.add(val);
        }
    } else if (Array.isArray(obj)) {
        obj.forEach(traverse);
    } else if (typeof obj === 'object' && obj !== null) {
        for (const key in obj) {
            traverse(obj[key]);
        }
    }
}

traverse(satelites);

const result = {
    texts: Array.from(stringsToTranslate).sort(),
    urls: Array.from(urlsToReplace).sort()
};

fs.writeFileSync('./br_satelites_extracted.json', JSON.stringify(result, null, 2), 'utf8');
console.log(`Extracción completa br.satelites. Textos: ${result.texts.length}, URLs: ${result.urls.length}`);
