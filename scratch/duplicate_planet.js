
import fs from 'fs';

const content = fs.readFileSync('src/lib/data.ts', 'utf8');

// Find BASE_PLANET_DATA
const startMatch = content.match(/export const BASE_PLANET_DATA = {/);
if (!startMatch) {
  console.error('BASE_PLANET_DATA not found');
  process.exit(1);
}

const startIndex = startMatch.index;
let braceCount = 0;
let endIndex = -1;

for (let i = startIndex; i < content.length; i++) {
  if (content[i] === '{') braceCount++;
  if (content[i] === '}') {
    braceCount--;
    if (braceCount === 0) {
      endIndex = i + 1;
      break;
    }
  }
}

if (endIndex === -1) {
  console.error('Closing brace not found');
  process.exit(1);
}

const baseDataText = content.substring(startIndex, endIndex);

// Create the new planet data
let newDataText = baseDataText.replace('export const BASE_PLANET_DATA =', 'export const VENDAS_WS_12_DATA =');
newDataText = newDataText.replace(/label:\s*'BASE'/, "label: 'Vendas + WS 12 dias'");
// Add onboardingIdx
newDataText = newDataText.replace('label: \'Vendas + WS 12 dias\',', "label: 'Vendas + WS 12 dias',\n  onboardingIdx: 1,");

// Append to file (before exports if possible, or just at the end)
// We'll insert it before the ONBOARDING constants we just added
const insertPoint = content.indexOf('export const ONBOARDING_EMPTY');
const newContent = content.substring(0, insertPoint) + newDataText + '\n\n' + content.substring(insertPoint);

fs.writeFileSync('src/lib/data.ts', newContent);
console.log('Duplicated BASE_PLANET_DATA to VENDAS_WS_12_DATA');
