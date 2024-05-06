// eslint-disable-next-line @typescript-eslint/no-var-requires
const { execSync } = require('child_process');

// always regenerate 'latest'
execSync('node scripts/generateDocs.js latest');
execSync('node scripts/generateDocs.js ' + process.argv.slice(2)[0]);
execSync('node scripts/generateContentMetadata.js');
execSync('node scripts/generateDocumentationMetadata.js');

// always regenerate 'latest'
execSync('node scripts/generateApidocs.js latest');
execSync('node scripts/generateApidocs.js ' + process.argv.slice(2)[0]);
