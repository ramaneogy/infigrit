const fs = require('fs');
const path = require('path');
const dir = 'c:\\Data\\Antigravity\\eclass';

const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const oldLogoHTML = '<div class="logo">🌺</div>';
const newLogoHTML = '<img src="logo.png" alt="Infigrit Logo" style="height: 40px; width: auto; max-width: 150px; object-fit: contain;">';

for (let file of files) {
    let filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace Logo
    content = content.replace(oldLogoHTML, newLogoHTML);

    // Remove Demo link
    content = content.replace(/<a\s+href="demo\.html"[^>]*>Demo<\/a>\s*/g, '');

    fs.writeFileSync(filePath, content);
}
console.log("Logo updated and Demo link removed globally.");
