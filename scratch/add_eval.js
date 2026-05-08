
import fs from 'fs';

const evalRows = [
  {
    macroTema: "Avaliação de Recuperação",
    tema: "Ajuste de Rota para Reprovados",
    detalhe: "Os alunos que não atingirem a média final de 80% devem realizar o \"Ajuste de Rota\" - Avaliação de recuperação e somente após a aprovação realizar os testes de acessos.\nDuração: 30 min",
    tiempo: "0:30:00",
    herramientas: [{ tipo: "📋 Forms AEC", url: "https://forms.gle/CkUwWV9wv41TpWfr9" }],
    iaPic: []
  }
];

const path = 'src/lib/data.ts';
let content = fs.readFileSync(path, 'utf8');

const startIdx = content.indexOf('export const VENDAS_WS_12_DATA');
const sectionsStartIdx = content.indexOf('secciones: [', startIdx) + 'secciones: ['.length;

const newSection = `
    {
      tipo: 'evaluacion',
      label: 'Avaliação de Recuperação',
      rows: ${JSON.stringify(evalRows, null, 2)}
    },`;

const newContent = content.substring(0, sectionsStartIdx) + newSection + content.substring(sectionsStartIdx);

fs.writeFileSync(path, newContent);
console.log('Added Avaliação de Recuperação section to VENDAS_WS_12_DATA.');
