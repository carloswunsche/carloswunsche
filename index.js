const fs = require('fs');
const Mustache = require('mustache');
// const stripHtmlComments = require('strip-html-comments');

let data = {
  date: new Date(),
  ipaName: `/ˈkɑrloʊs ˈvʏnʃə/`,
  job: `I'm open to work opportunities.`,
};
data.dateString = data.date.toLocaleDateString('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  // hour: 'numeric',
  // minute: 'numeric',
  // timeZoneName: 'short',
  // timeZone: 'America/New_York',
});
data.year = data.date.getFullYear();

function generateReadmeFile() {
  fs.readFile('./template.mustache', (err, content) => {
    if (err) throw err;
    // Render template
    let output = Mustache.render(content.toString(), data);
    // Remove HTML comments (not used)
    // output = stripHtmlComments(output);
    // Write to file
    fs.writeFileSync('README.md', output);
  });
}

generateReadmeFile();
