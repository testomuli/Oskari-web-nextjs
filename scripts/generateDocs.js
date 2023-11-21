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

// init folder for version
const pathToVersionRoot = path.normalize(path.join(__dirname, '/../_content/docs/', version));
if (!fs.existsSync(pathToVersionRoot)) {
  fs.mkdirSync(pathToVersionRoot, { recursive: true });
  console.log('Created folder for version ' + version + ' in:' + pathToVersionRoot);
}

// shovel in the documentation from the other repo (https://github.com/oskariorg/oskari-documentation)
const pathToDocumentationRepository = path.join(pathToExternalRepos, 'oskari-documentation/');
fs.cpSync(pathToDocumentationRepository, pathToVersionRoot, {
  preserveTimestamps: true,
  recursive: true,
  // filter out git metadata so we don't get accidental git submodules
  filter: (src) => !path.basename(src).startsWith('.git')
});
console.log('Initialized docs for version ' + version);



// https://github.com/oskariorg/oskari-frontend
const pathToFrontendRepository = path.join(pathToExternalRepos, 'oskari-frontend/');
const pathToBundlesDocumentation = path.join(pathToVersionRoot, '2 Application functionality/');

const filesToCopy = ['ReleaseNotes.md', 'api/CHANGELOG.md'];
// TODO: parse the matching version from files and write a page about only current version?
//  (include link to release notes on GitHub)
filesToCopy.forEach(file => fs.copyFileSync(path.join(pathToFrontendRepository, file), path.join(pathToBundlesDocumentation, path.basename(file))));

// TODO: read bundle docs from pathToFrontendRepository + api/**/bundle.md etc
//  - generate flattened listing of bundles + their requests + events
//  - maybe as a secondary effort try to create links from bundles using the requests/events to ones providing the
// current code in https://github.com/oskariorg/oskari-docs/tree/master/lib (oskariapi related files/code) maybe helpful
