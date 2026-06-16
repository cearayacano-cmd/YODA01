const fs = require('fs');
const path = require('path');

const updateFiles = (dir) => {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      updateFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css') || file.endsWith('.html')) {
      let content = fs.readFileSync(filePath, 'utf-8');
      let changed = false;
      
      // Replace main dark blue
      if (content.match(/#1B0088/ig)) {
        content = content.replace(/#1B0088/ig, '#0F004F');
        changed = true;
      }
      
      // Replace accent green with LATAM red
      if (content.match(/#99CC33/ig)) {
        content = content.replace(/#99CC33/ig, '#ED1650');
        changed = true;
      }
      
      // Replace font
      if (content.match(/["']Inter["']/g)) {
        content = content.replace(/["']Inter["']/g, '"Trebuchet MS"');
        changed = true;
      }

      if (changed) {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log('Updated', filePath);
      }
    }
  });
};

updateFiles(path.join(__dirname, 'src'));
updateFiles(__dirname); // to catch index.html if it exists at root
