const UNRELEASED_VERSION = 'unreleased';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { execSync } = require('child_process');

// if not provided build "nightly build"
const requestedVersion = process.argv.slice(2)[0] || UNRELEASED_VERSION

execSync('node scripts/generateDocs.js ' + requestedVersion);
execSync('node scripts/generateContentMetadata.js');
execSync('node scripts/generateDocumentationMetadata.js');

execSync('node scripts/generateApidocs.js ' + requestedVersion);

//run db generation script
execSync('npm run db');

