
import fs from 'fs';

const path = 'src/lib/data.ts';
let content = fs.readFileSync(path, 'utf8');

// The file was corrupted around line 34-72.
// We need to restore IMERSAO_DATA and BASE_PLANET_DATA.

const basePlanetDataStart = content.indexOf('export const BASE_PLANET_DATA');
// We need to find the REAL base planet data start.
// It seems it was duplicated or messed up.

// Let's just fix the whole block from IMERSAO_DATA to the first mission in BASE_PLANET_DATA.

const startOfTrouble = content.indexOf('export const IMERSAO_DATA = [');
const endOfTrouble = content.indexOf('{', content.indexOf('macroTema: "Introdução"')) - 10; // Around the first row

const correctBlock = `export const IMERSAO_DATA = [
  { macroTema: "IOE", dia: 2, tema: "Escucha Activa", herramientas: "Operação", tiempo: "3:30" }
];

export const BASE_PLANET_DATA = {  "texture": "CRATERS",
  "color": "#1b0088",
  label: 'BASE',
  onboardingIdx: 0,
  secciones: [
    {
      tipo: 'mision1',
      label: 'EXPEDIÇÃO VENDAS',
      rows: [`;

const newContent = content.substring(0, startOfTrouble) + correctBlock + content.substring(endOfTrouble);

fs.writeFileSync(path, newContent);
console.log('Fixed corrupted data.ts and added onboardingIdx: 0 to BASE_PLANET_DATA');
