const fs = require('fs');
const path = require('path');

function removeI18nFromFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Remove i18n imports
  content = content.replace(/import.*(?:i18n|useTranslation|next-i18next).*;\n/g, '');
  content = content.replace(/import.*languageDetector.*;\n/g, '');

  // Remove useTranslation hook usage
  content = content.replace(/const\s*{\s*t\s*}\s*=\s*useTranslation\(\s*(?:'[^']*'|"[^"]*")?\s*\);?\n?/g, '');

  // Replace t() function calls with their first argument
  content = content.replace(/t\(['"]([^'"]+)['"]\)/g, "'$1'");
  content = content.replace(/t\(`([^`]+)`\)/g, "'$1'");

  fs.writeFileSync(filePath, content);
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
      removeI18nFromFile(filePath);
    }
  });
}

// Process components and pages directories
['components', 'pages'].forEach(dir => {
  if (fs.existsSync(dir)) {
    processDirectory(dir);
  }
});
