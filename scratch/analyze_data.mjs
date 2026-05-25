import fs from 'fs';
import path from 'path';

// Read data.ts
const content = fs.readFileSync('src/lib/data.ts', 'utf8');

// We want to parse the exported data objects. But since data.ts is written in ES module format (export const ...),
// and contains many objects, we can run a simple node process to import it or we can parse it dynamically.
// To import it directly in ESM, since it has .ts extension, we can write a quick transpiler or just regular expressions.
// Let's create a temporary JS file by replacing the imports/exports and then dynamic import it.

let jsContent = content
  .replace(/export const /g, 'export const ')
  .replace(/:\s*any/g, ''); // strip any type annotations if there are any

// Let's write it to a temp file scratch/temp_data.js
fs.mkdirSync('scratch', { recursive: true });
fs.writeFileSync('scratch/temp_data.js', jsContent, 'utf8');

console.log("Analyzing scratch/temp_data.js...");

// Now import it dynamically
import('./temp_data.js').then((module) => {
  const exports = Object.keys(module);
  console.log("Exported variables:", exports);
  
  for (const expName of exports) {
    const data = module[expName];
    if (!data) continue;
    
    // Check if it has sections (secciones) or is an array of sections/rows
    if (data.secciones && Array.isArray(data.secciones)) {
      console.log(`\n=== Object: ${expName} (label: "${data.label || ''}") ===`);
      data.secciones.forEach((sec, sIdx) => {
        console.log(`  Section ${sIdx + 1}: label="${sec.label || sec.nombre || ''}" tipo="${sec.tipo || ''}"`);
        if (sec.rows && Array.isArray(sec.rows)) {
          // Group by macroTema to see them
          const macrotemas = {};
          sec.rows.forEach((row, rIdx) => {
            const mt = row.macroTema || '(no macroTema)';
            if (!macrotemas[mt]) {
              macrotemas[mt] = { count: 0, days: new Set() };
            }
            macrotemas[mt].count++;
            if (row.dia !== undefined) {
              macrotemas[mt].days.add(row.dia);
            }
          });
          Object.keys(macrotemas).forEach(mt => {
            console.log(`    Macrotema: "${mt}" (${macrotemas[mt].count} rows) -> current days: ${JSON.stringify(Array.from(macrotemas[mt].days))}`);
          });
        }
      });
    } else if (Array.isArray(data)) {
      console.log(`\n=== Array: ${expName} ===`);
      // check if it is a list of sections or rows
      if (data.length > 0) {
        if (data[0].rows && Array.isArray(data[0].rows)) {
          // array of sections
          data.forEach((sec, sIdx) => {
            console.log(`  Section ${sIdx + 1}: label="${sec.label || sec.nombre || ''}" tipo="${sec.tipo || ''}"`);
            const macrotemas = {};
            sec.rows.forEach((row, rIdx) => {
              const mt = row.macroTema || '(no macroTema)';
              if (!macrotemas[mt]) {
                macrotemas[mt] = { count: 0, days: new Set() };
              }
              macrotemas[mt].count++;
              if (row.dia !== undefined) {
                macrotemas[mt].days.add(row.dia);
              }
            });
            Object.keys(macrotemas).forEach(mt => {
              console.log(`      Macrotema: "${mt}" (${macrotemas[mt].count} rows) -> current days: ${JSON.stringify(Array.from(macrotemas[mt].days))}`);
            });
          });
        } else {
          // array of rows
          const macrotemas = {};
          data.forEach((row, rIdx) => {
            const mt = row.macroTema || '(no macroTema)';
            if (!macrotemas[mt]) {
              macrotemas[mt] = { count: 0, days: new Set() };
            }
            macrotemas[mt].count++;
            if (row.dia !== undefined) {
              macrotemas[mt].days.add(row.dia);
            }
          });
          Object.keys(macrotemas).forEach(mt => {
            console.log(`    Macrotema: "${mt}" (${macrotemas[mt].count} rows) -> current days: ${JSON.stringify(Array.from(macrotemas[mt].days))}`);
          });
        }
      }
    }
  }
}).catch(err => {
  console.error("Error importing module:", err);
});
