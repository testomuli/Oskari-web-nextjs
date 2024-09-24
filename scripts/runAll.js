const UNRELEASED_VERSION = 'unreleased';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { execSync } = require('child_process');

// if not provided build "nightly build"
const requestedVersion = process.argv.slice(2)[0] || UNRELEASED_VERSION
const isLatest = process.argv.slice(2)[1] || 'false'

execSync('node scripts/generateDocs.js ' + requestedVersion + ' ' + isLatest);
execSync('node scripts/generateContentMetadata.js');
execSync('node scripts/generateDocumentationMetadata.js');

execSync('node scripts/generateApidocs.js ' + requestedVersion + ' ' + isLatest);

//run db generation script
// generated database description is disabled for now, but hopefully we can use it later
// see utils/constants.ts for enabling the route to the page
// execSync('npm run db');

