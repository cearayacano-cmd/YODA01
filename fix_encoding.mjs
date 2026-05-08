import fs from 'fs';

const filePath = 'src/lib/data.ts';
const buffer = fs.readFileSync(filePath);

// Check if it's likely UTF-16 (null bytes every other byte)
let isUtf16 = false;
if (buffer.length > 2) {
    let nullCount = 0;
    for (let i = 0; i < Math.min(buffer.length, 100); i++) {
        if (buffer[i] === 0) nullCount++;
    }
    if (nullCount > 20) isUtf16 = true;
}

let content;
if (isUtf16) {
    console.log('Detected UTF-16, converting to UTF-8...');
    content = buffer.toString('utf16le');
} else {
    console.log('Detected likely UTF-8 or ASCII...');
    content = buffer.toString('utf8');
}

// Remove any remaining null bytes just in case
content = content.replace(/\0/g, '');

fs.writeFileSync(filePath, content, 'utf8');
console.log('File cleaned and saved as UTF-8.');
