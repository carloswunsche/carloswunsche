const fs = require('fs');
const Mustache = require('mustache');
const stripHtmlComments = require('strip-html-comments');

let data = {
  name: 'Carl',
  date: new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
    timeZone: 'America/New_York',
  }),
  ipaName: '/ˈkɑrloʊs ˈvʏnʃə/',
};

function generateReadmeFile() {
  fs.readFile('./template.mustache', (err, content) => {
    if (err) throw err;
    let output;
    // Render template
    output = Mustache.render(content.toString(), data);
    // Remove HTML comments
    output = stripHtmlComments(output);
    // Write to file
    fs.writeFileSync('README.md', output);
  });
}

generateReadmeFile();
