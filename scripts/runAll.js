// eslint-disable-next-line @typescript-eslint/no-var-requires
const { exec } = require('child_process');

exec('node scripts/generateDocs.js ' + process.argv.slice(2)[0]);
exec('node scripts/generateContentMetadata.js');