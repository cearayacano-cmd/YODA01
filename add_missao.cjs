const fs = require('fs');
const path = 'C:\\Users\\3875129\\.gemini\\antigravity\\scratch\\Yoda01\\src\\lib\\data.ts';
let c = fs.readFileSync(path, 'utf8');

// Add 'MISSÃO ' before any label that starts with a digit followed by ':'
// but only if it doesn't already have 'MISSÃO' before it
c = c.replace(/"label": "([0-9]+:)/g, function(match, num) {
  return '"label": "MISSÃO ' + num;
});

fs.writeFileSync(path, c, 'utf8');
console.log('Done! All numeric labels now prefixed with MISSÃO');
