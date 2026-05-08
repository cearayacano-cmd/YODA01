
import fs from 'fs';

const path = 'src/lib/data.ts';
let content = fs.readFileSync(path, 'utf8');

const startIdx = content.indexOf('export const VENDAS_WS_12_DATA');
const endIdx = content.indexOf('};', startIdx) + 2;

let planetContent = content.substring(startIdx, endIdx);

// Extract all sections
const sectionsMatch = planetContent.match(/secciones: \[([\s\S]*?)\]/);
if (!sectionsMatch) {
  console.log('Could not find secciones array');
  process.exit(1);
}

const sectionsStr = sectionsMatch[1];
const sections = [];

// Rough extraction of each section object
let currentObject = "";
let braceCount = 0;
let inObject = false;

for (let i = 0; i < sectionsStr.length; i++) {
  const char = sectionsStr[i];
  if (char === '{') {
    if (braceCount === 0) inObject = true;
    braceCount++;
  }
  if (inObject) currentObject += char;
  if (char === '}') {
    braceCount--;
    if (braceCount === 0) {
      sections.push(currentObject);
      currentObject = "";
      inObject = false;
    }
  }
}

// Find sections by label
const findByLabel = (label) => sections.find(s => s.includes(`label: '${label}'`) || s.includes(`label: "${label}"`));

const m1 = findByLabel('Missão 1: Vendas');
const m2 = findByLabel('Missão 2: Casos');
const m3 = findByLabel('Missão 3: - LATAM PASS');
const m4 = findByLabel('Missão 4 - NÃO VOZ');
const landing = findByLabel('LANDING 1');
const ojt = findByLabel('Desafio OJT 1');
const ws = findByLabel('WS Vendas');

const orderedSections = [m1, m2, m3, m4, landing, ojt, ws].filter(Boolean);

const newSectionsStr = `\n    ${orderedSections.join(',\n    ')}\n  `;

planetContent = planetContent.replace(/secciones: \[[\s\S]*?\]/, `secciones: [${newSectionsStr}]`);

const newContent = content.substring(0, startIdx) + planetContent + content.substring(endIdx);

fs.writeFileSync(path, newContent);
console.log('Reordered sections for VENDAS_WS_12_DATA.');
