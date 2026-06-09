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

  // Muted text replacements (text-[#07152E]/opacity)
  content = content.replace(/text-\[\#07152E\]\/(\d+)/g, 'text-[#7288AE]/$1');
  content = content.replace(/placeholder:text-\[\#07152E\]\/(\d+)/g, 'placeholder:text-[#7288AE]/$1');

  // Muted Text using just color, maybe replace text-[#07152E] with text-[#111844]
  // but wait! The rule is: Primary Text: #111844, Secondary Text: #7288AE
  // I will just let text-[#07152E] become text-[#111844] for primary, and the opacities become 7288AE.
  
  // Specific other colors
  content = content.replace(/#07152E/gi, '#111844');
  content = content.replace(/#FF6B2C/gi, '#4B5694');
  content = content.replace(/#FF8B5C/gi, '#7288AE');
  content = content.replace(/#ff7b42/gi, '#7288AE');
  content = content.replace(/#0A1A3A/gi, '#111844');
  content = content.replace(/#0a1e42/gi, '#111844');
  content = content.replace(/#112a5a/gi, '#111844');
  content = content.replace(/#f8fafc/gi, '#EAE0CF');
  content = content.replace(/#F8F9FA/gi, '#EAE0CF');

  // Any other things? The prompt mentioned buttons and inputs
  // Primary Button: #111844, Text: #FFFFFF, Hover: #4B5694
  // If the button was using bg-[#07152E] text-white hover:bg-[#FF6B2C], this is already caught by the replacements above!
  // bg-[#07152E] -> bg-[#111844]. hover:bg-[#FF6B2C] -> hover:bg-[#4B5694]! This handles it beautifully.

  fs.writeFileSync(file, content, 'utf8');
});

console.log('Update complete.');
