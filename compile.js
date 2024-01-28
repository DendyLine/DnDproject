const fs = require('fs');
const path = require('path');
const remark = require('remark');
const html = require('remark-html');

const mdFilePath = path.resolve(__dirname, 'src/assets/markdown/races/aarakocra.mdx');
const outputHtmlPath = path.resolve(__dirname, 'output.html');

const mdContent = fs.readFileSync(mdFilePath, 'utf8');

remark()
    .use(html)
    .process(mdContent, (err, file) => {
        if (err) throw err;

        fs.writeFileSync(outputHtmlPath, file.contents);
        console.log('Markdown converted to HTML successfully!');
    });