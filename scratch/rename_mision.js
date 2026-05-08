
import fs from 'fs';

const path = 'src/lib/data.ts';
let content = fs.readFileSync(path, 'utf8');

const startIdx = content.indexOf('export const VENDAS_WS_12_DATA');
const endIdx = content.indexOf('};', startIdx) + 2;

let planetContent = content.substring(startIdx, endIdx);

// Replace Missão and EXPEDIÇÃO with MISIÓN in the labels
planetContent = planetContent.replace(/label: 'Missão/g, "label: 'MISIÓN");
planetContent = planetContent.replace(/label: "Missão/g, 'label: "MISIÓN');
planetContent = planetContent.replace(/label: 'EXPEDIÇÃO/g, "label: 'MISIÓN");
planetContent = planetContent.replace(/label: "EXPEDIÇÃO/g, 'label: "MISIÓN');

// Handle the WS Vendas case too? User said "solo los titulos"
planetContent = planetContent.replace(/label: 'WS Vendas'/g, "label: 'MISIÓN: WS Vendas'");

const newContent = content.substring(0, startIdx) + planetContent + content.substring(endIdx);

fs.writeFileSync(path, newContent);
console.log('Renamed labels to MISIÓN in VENDAS_WS_12_DATA.');
