const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else if (dirFile.endsWith('.tsx') || dirFile.endsWith('.ts')) {
      filelist.push(dirFile);
    }
  }
  return filelist;
};

const srcFiles = walkSync('./src');

srcFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Change nav typography from font-bold tracking-widest to font-medium tracking-wider
  if (file.includes('Header.tsx')) {
    content = content.replace(/font-bold tracking-widest uppercase/g, 'font-medium tracking-widest uppercase');
  }

  // Footer: "Footer typography should be elegant and readable. Reduce clutter. Improve hierarchy."
  // Wait, let's just make sure tracking-widest is widely used where tracking-[0.2.em] was
  // If there are other places that also need font fixes:
  
  // Actually, I can format the files using the `prettier` locally
  fs.writeFileSync(file, content, 'utf8');
});

console.log('Typography script 2 applied.');
