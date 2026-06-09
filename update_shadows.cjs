const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else if (dirFile.endsWith('.tsx') || dirFile.endsWith('.ts') || dirFile.endsWith('.css')) {
      filelist.push(dirFile);
    }
  }
  return filelist;
};

const srcFiles = walkSync('./src');

srcFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Replace rgba(7,21,46 with rgba(17,24,68
  content = content.replace(/rgba\(7,\s*21,\s*46/gi, 'rgba(17,24,68');

  fs.writeFileSync(file, content, 'utf8');
});

console.log('Update shadows complete.');
