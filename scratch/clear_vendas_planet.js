
import fs from 'fs';

const path = 'src/lib/data.ts';
let content = fs.readFileSync(path, 'utf8');

const startIdx = content.indexOf('export const VENDAS_WS_12_DATA');
const endIdx = content.indexOf('};', startIdx) + 2;

const emptyPlanet = `export const VENDAS_WS_12_DATA = {
  texture: "CRATERS",
  color: "#1b0088",
  label: 'Vendas + WS 12 dias',
  onboardingIdx: 1,
  secciones: [
    {
      tipo: 'mision1',
      label: 'NUEVA EXPEDICIÓN',
      rows: []
    }
  ],
  materiais: [],
  evalKon: [],
  evalAec: [],
  evalMsg: ''
};`;

const newContent = content.substring(0, startIdx) + emptyPlanet + content.substring(endIdx);

fs.writeFileSync(path, newContent);
console.log('Cleared VENDAS_WS_12_DATA planet data via script');
