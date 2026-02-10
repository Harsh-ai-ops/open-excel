const fs = require('fs');
const content = fs.readFileSync('src/lib/openrouter-models.ts', 'utf8');
const updated = content.replace(
    /id: "(.*?)"/g,
    (match) => `${match},\n    baseUrl: "https://openrouter.ai/api/v1"`
);
fs.writeFileSync('src/lib/openrouter-models.ts', updated);
console.log('Updated openrouter-models.ts with baseUrl (unquoted keys)');
