const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(dir).filter(f => f.startsWith('Admin') && f.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  if (content.includes('153,204,51')) {
    content = content.replace(/rgba\(153,204,51/g, 'rgba(237,22,80');
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Updated ' + file);
  }
});
