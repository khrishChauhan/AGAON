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

  // Remove serif and italic
  // Let's replace 'font-serif italic' and 'italic font-serif' with 'font-extrabold'
  // and general 'italic' or 'font-serif' where they appear.
  content = content.replace(/font-serif italic/g, 'font-extrabold');
  content = content.replace(/italic font-serif/g, 'font-extrabold');
  content = content.replace(/\bfont-serif\b/g, '');
  content = content.replace(/\bitalic\b/g, '');
  
  // Clean up any double spaces left behind by removals
  content = content.replace(/\s{2,}/g, ' ');
  content = content.replace(/ \}/g, '}');
  content = content.replace(/" /g, '"');
  content = content.replace(/ "/g, '"');

  // Typography hierarchy improvements
  // "Navigation: 14-15px". Navigation currently uses text-[10px] uppercase.
  // "Small Labels: 13-14px". Currently uses text-[10px] mostly, or text-xs (12px).
  // "Body: 16-18px". Currently uses text-xs or text-sm for body text in some places.
  
  // Upgrade tiny texts
  content = content.replace(/text-\[10px\]/g, 'text-sm');
  content = content.replace(/text-\[9px\]/g, 'text-xs');
  content = content.replace(/text-xs/g, 'text-sm');
  
  // Improve tracking on uppercase text (tracking-[0.2em] or tracking-[0.25em] -> tracking-wider or tracking-widest)
  content = content.replace(/tracking-\[0\.2em\]/g, 'tracking-widest');
  content = content.replace(/tracking-\[0\.25em\]/g, 'tracking-widest');
  content = content.replace(/tracking-\[0\.15em\]/g, 'tracking-wider');
  
  // Heading weight tuning. Hero, Section, Card.
  // Looking for text-5xl, text-6xl, text-7xl font-bold -> font-extrabold
  content = content.replace(/(text-5xl|text-6xl|text-7xl|text-\[5rem\]) [^"']*\bfont-bold\b/g, (match) => {
    return match.replace('font-bold', 'font-extrabold');
  });

  // Make sure to write file back
  fs.writeFileSync(file, content, 'utf8');
});

console.log('Typography script applied.');
