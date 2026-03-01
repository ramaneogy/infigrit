const fs = require('fs');
const path = require('path');
const dir = 'c:\\Data\\Antigravity\\eclass';

const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
for (let file of files) {
    if (file === 'services.html' || file === 'subjects.html') continue;

    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    content = content.replace(/Ganitha Kulam/g, 'infigrit');

    // remove <a href="services.html"...>Services</a>
    content = content.replace(/<a\s+href="services\.html"[^>]*>Services<\/a>\s*/g, '');
    content = content.replace(/<a\s+href="subjects\.html"[^>]*>Subjects<\/a>\s*/g, '');

    fs.writeFileSync(path.join(dir, file), content);
}
console.log("Nav and Rebranding updated successfully.");
