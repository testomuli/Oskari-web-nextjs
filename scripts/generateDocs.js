/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
//const { lstatSync, readdirSync, existsSync } = require('fs');
const path = require('path');

const pathToExternalRepos = path.normalize(path.join(__dirname, '/../../'));

// npm run docs 2.13.0

const version = process.argv.slice(2)[0]

if (!version) {
  throw new Error('\'npm run docs {version}\' - version is required');
}

// Init folder for version
const pathToVersionRoot = path.normalize(path.join(__dirname, '/../_content/docs/', version));
if (!fs.existsSync(pathToVersionRoot)) {
  fs.mkdirSync(pathToVersionRoot, { recursive: true });
  console.log(`Created folder for version ${version} in ${pathToVersionRoot}`);
}

// Shovel in the documentation from the other repo (https://github.com/oskariorg/oskari-documentation)
const pathToDocumentationRepository = path.join(pathToExternalRepos, 'oskari-documentation/');
fs.cpSync(pathToDocumentationRepository, pathToVersionRoot, {
  preserveTimestamps: true,
  recursive: true,
  // Filter out git metadata so we don't get accidental git submodules
  filter: (src) => !path.basename(src).startsWith('.git')
});
console.log('Initialized docs for version ' + version);


// https://github.com/oskariorg/oskari-frontend
const pathToFrontendRepository = path.join(pathToExternalRepos, 'oskari-frontend/');
const pathToServerRepository = path.join(pathToExternalRepos, 'oskari-server/');
const pathToBundlesDocumentation = path.join(pathToVersionRoot, '2 Application functionality/');

// Create a summary file highlighting the changes in new version from these files
const filesToHandle = {
  "Frontend release notes": path.join(pathToFrontendRepository, 'ReleaseNotes.md'),
  "Frontend changelog": path.join(pathToFrontendRepository, 'api/CHANGELOG.md'),
  "Server release notes": path.join(pathToServerRepository, 'ReleaseNotes.md'),
  "Migration guide": path.join(pathToServerRepository, 'MigrationGuide.md')
}
const pathToNewFile = path.join(pathToBundlesDocumentation, 'CHANGELOG.md')

if (!fs.existsSync(pathToNewFile)) {
  // Go through the files one by one
  for (const [sectionTitle, pathToFile] of Object.entries(filesToHandle)) {
  // Read the file, take the content corresponding to version
    fileContent = fs.readFileSync(pathToFile, 'utf-8')
    const start = fileContent.indexOf(version)
    if (start < 0) {
      console.log(`No mention of version ${version} in ${pathToFile}`)
    } else {
      // Find end of section, otherwise take the rest of the file
      const end = fileContent.indexOf('\n## ', start + version.length) || content.length - 1
      const section = fileContent.slice(start + version.length, end).trim()
      // Write each section to the log file
      fs.appendFileSync(pathToNewFile, `\n## ${sectionTitle}\n\n` + section)
    }
  }
}

// TODO: read bundle docs from pathToFrontendRepository + api/**/bundle.md etc
//  - generate flattened listing of bundles + their requests + events
//  - maybe as a secondary effort try to create links from bundles using the requests/events to ones providing the
// current code in https://github.com/oskariorg/oskari-docs/tree/master/lib (oskariapi related files/code) maybe helpful
