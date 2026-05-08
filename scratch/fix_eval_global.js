
import fs from 'fs';

const path = 'src/lib/data.ts';
let content = fs.readFileSync(path, 'utf8');

const startIdx = content.indexOf('export const VENDAS_WS_12_DATA');
const endIdx = content.indexOf('};', startIdx) + 2;

let planetContent = content.substring(startIdx, endIdx);

// Remove the evaluacion section if it exists
planetContent = planetContent.replace(/\{\s*tipo: 'evaluacion'[\s\S]*?\},/g, '');

// Update evalMsg and evalAec
planetContent = planetContent.replace(/evalMsg: '.*'/g, `evalMsg: 'Os alunos que não atingirem a média final de 80% devem realizar o "Ajuste de Rota" - Avaliação de recuperação e somente após a aprovação realizar os testes de acessos.\\nDuração: 30 min'`);
planetContent = planetContent.replace(/evalAec: \[\]/g, `evalAec: [{ label: "Forms AEC", url: "https://forms.gle/CkUwWV9wv41TpWfr9" }]`);

const newContent = content.substring(0, startIdx) + planetContent + content.substring(endIdx);

fs.writeFileSync(path, newContent);
console.log('Moved Avaliação de Recuperação to Global Resources.');
