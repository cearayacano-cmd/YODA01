
import fs from 'fs';

const path = 'src/lib/data.ts';
let content = fs.readFileSync(path, 'utf8');

// I will completely rewrite the VENDAS_WS_12_DATA object with the correct structure and order to be safe.
const startIdx = content.indexOf('export const VENDAS_WS_12_DATA');
const endIdx = content.indexOf('};', startIdx) + 2;

// The current state is broken, I'll extract the data from the broken parts if possible, 
// but it's easier to just reconstruct the whole object since I have the parts in my history.

// Actually, I'll just use a safer regex-based replacement or a full write.
// Since I have the data for all missions in my previous turns, I can rebuild it.

// Rebuilding parts... (shortened for the script)
// Missão 1: Vendas, Missão 2: Casos, Missão 3: LATAM PASS, Missão 4: NÃO VOZ, LANDING 1, Desafio OJT 1, WS Vendas.

// I'll perform a clean rebuild of the VENDAS_WS_12_DATA object.
// I will use the data I just saw in the view_file (it's mostly there but messy).

// Wait, the view_file shows that WS Vendas starts at line 933 (Abertura).
// I will use a script to re-structure the entire planet object correctly.

const fixScript = `
import fs from 'fs';

const path = 'src/lib/data.ts';
let content = fs.readFileSync(path, 'utf8');

const startIdx = content.indexOf('export const VENDAS_WS_12_DATA');
const endIdx = content.indexOf('};', startIdx) + 2;

// I'll define the final structure manually to ensure NO errors.
// I have the row data in my memory from previous turn scripts.

// (Data blocks omitted here for brevity in the "fix" script, 
// I'll actually embed them in the script I write to the file)
`;

// I'll just use the previous consolidated data.
