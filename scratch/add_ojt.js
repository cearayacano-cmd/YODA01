
import fs from 'fs';

const desafioRows = [
  {
    macroTema: "Desafio OJT 1",
    tema: "Desafio OJT 1",
    detalhe: "Instrutor entra no Genesys e faz escuta de 1 chamada com a turma dentro da sala. \nApós finalizada a chamada, comenta sobre os pontos positivos / negativos da chamada e principais indicadores.",
    tiempo: "1:45:00",
    herramientas: [{ tipo: "🎯 Operação", url: "" }],
    iaPic: []
  },
  {
    macroTema: "Desafio OJT 1",
    tema: "Desafio OJT 1",
    detalhe: "Instrutor leva agentes até a operação para atendimento de chamadas.",
    tiempo: "5:00:00",
    herramientas: [{ tipo: "🎯 Operação", url: "" }],
    iaPic: []
  },
  {
    macroTema: "Desafio OJT 1",
    tema: "Desafio OJT 1",
    detalhe: "Instrutor  tira dúvidas referentes ao atendimento do dia.",
    tiempo: "0:40:00",
    herramientas: [{ tipo: "🎯 Operação", url: "" }],
    iaPic: []
  }
];

const path = 'src/lib/data.ts';
let content = fs.readFileSync(path, 'utf8');

const startIdx = content.indexOf('export const VENDAS_WS_12_DATA');
const sectionsStartIdx = content.indexOf('secciones: [', startIdx) + 'secciones: ['.length;

const newSection = `
    {
      tipo: 'desafio',
      label: 'Desafio OJT 1',
      rows: ${JSON.stringify(desafioRows, null, 2)}
    },`;

const newContent = content.substring(0, sectionsStartIdx) + newSection + content.substring(sectionsStartIdx);

fs.writeFileSync(path, newContent);
console.log('Added DESAFIO OJT section to VENDAS_WS_12_DATA.');
