
import fs from 'fs';

const path = 'src/lib/data.ts';
let content = fs.readFileSync(path, 'utf8');

// Update VENDAS_WS_12_DATA evaluation block
const evalAecTarget = "https://docs.google.com/forms/d/e/1FAIpQLSexgezH2lsexp3YzT2LdxJnPLqmaDA7849G2FVIrgQK78C1EA/viewform";
const evalAecReplacement = "https://forms.gle/CkUwWV9wv41TpWfr9";

// We want to update only the one in VENDAS_WS_12_DATA
// VENDAS_WS_12_DATA starts around line 922 and ends around 1804
const vendasStartIdx = content.indexOf('export const VENDAS_WS_12_DATA');
const vendasEndIdx = content.indexOf('};', vendasStartIdx) + 2;

let vendasDataText = content.substring(vendasStartIdx, vendasEndIdx);

vendasDataText = vendasDataText.replace(evalAecTarget, evalAecReplacement);

const newContent = content.substring(0, vendasStartIdx) + vendasDataText + content.substring(vendasEndIdx);

fs.writeFileSync(path, newContent);
console.log('Updated Vendas evaluation link via script');
