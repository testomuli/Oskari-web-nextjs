const UNRELEASED_VERSION = 'unreleased';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { execSync } = require('child_process');

const requestedVersion = process.argv.slice(2)[0] || UNRELEASED_VERSION

// always regenerate 'latest'
execSync('node scripts/generateDocs.js latest');
execSync('node scripts/generateDocs.js ' + requestedVersion);
execSync('node scripts/generateContentMetadata.js');
execSync('node scripts/generateDocumentationMetadata.js');

// always regenerate 'latest'
execSync('node scripts/generateApidocs.js latest');
execSync('node scripts/generateApidocs.js ' + requestedVersion);
