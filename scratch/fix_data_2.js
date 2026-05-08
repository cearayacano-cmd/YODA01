
import fs from 'fs';

const path = 'src/lib/data.ts';
let content = fs.readFileSync(path, 'utf8');

const startOfTrouble = content.indexOf('export const IMERSAO_DATA = [');
const endOfTrouble = content.indexOf('macroTema: "Apresentação PIC"') - 20;

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
      rows: [
        {
          macroTema: "Introdução",
          tema: "Video 1 [Vendas] Boas Vindas",
          detalhe: "- Instrutor dá as boas vindas: \\"A partir de agora, o nosso treinamento muda de nome: Sejam bem-vindos à Expedição Vendas pelo Universo LATAM!\\"\\n- Instrutor passa o vídeo de introdução.",
          tiempo: "0:05:00",
          herramientas: [{ tipo: "🖼️  Slide", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?usp=sharing" }],
          iaPic: []
        },
`;

const newContent = content.substring(0, startOfTrouble) + correctBlock + content.substring(endOfTrouble);

fs.writeFileSync(path, newContent);
console.log('Fixed corrupted data.ts again');
