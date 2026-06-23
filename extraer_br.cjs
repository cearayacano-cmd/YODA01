const fs = require('fs');

const configPath = './src/lib/appConfig.json';
const data = JSON.parse(fs.readFileSync(configPath, 'utf8'));

const br = data.br;
if (!br) {
    console.error("No se encontró 'br' en appConfig.json");
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
            // Probably text (ignore colors and time strings like "1:00:00")
            stringsToTranslate.add(val);
        }
    } else if (Array.isArray(obj)) {
        obj.forEach(traverse);
    } else if (typeof obj === 'object' && obj !== null) {
        for (const key in obj) {
            // Optionally we can also translate some keys if needed, but usually keys are technical
            // We'll just translate the values
            traverse(obj[key]);
        }
    }
}

// We will traverse the whole `br` object to be safe, or just `br.satelites`?
// The user asked for "Satelite BR", but this could mean the whole module or just the key.
// Let's extract from all of `br` and the user can review.
traverse(br);

const result = {
    texts: Array.from(stringsToTranslate).sort(),
    urls: Array.from(urlsToReplace).sort()
};

fs.writeFileSync('./br_extracted.json', JSON.stringify(result, null, 2), 'utf8');
console.log(`Extracción completa. Textos: ${result.texts.length}, URLs: ${result.urls.length}`);
