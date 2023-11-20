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
const pathToServerRepository = path.join(pathToExternalRepos, 'oskari-server/');
const pathToBundlesDocumentation = path.join(pathToVersionRoot, '2 Application functionality/');

//const filesToCopy = ['ReleaseNotes.md', 'api/CHANGELOG.md'];

const filesToHandle = [
  path.join(pathToFrontendRepository, 'ReleaseNotes.md'),
  path.join(pathToFrontendRepository, 'api/CHANGELOG.md'),
  path.join(pathToServerRepository, 'ReleaseNotes.md'),
  path.join(pathToServerRepository, 'MigrationGuide.md')
]
const pathToNewFile = path.join(pathToBundlesDocumentation, 'CHANGELOG.md')

// Delete existing log file
if (fs.existsSync(pathToNewFile)) {
  fs.unlink(pathToNewFile, (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('deleted file successfully')
    }
  })
}


// TODO: parse the matching version from files and write a page about only current version?
//  (include link to release notes on GitHub)
//filesToCopy.forEach(file => fs.copyFileSync(path.join(pathToFrontendRepository, file), path.join(pathToBundlesDocumentation, path.basename(file))));
// Go through the files one by one
filesToHandle.forEach(file => {
  // Read the file, take the content corresponding to version
  content = fs.readFileSync(file, 'utf-8')
  const start = content.indexOf(version)
  if (start > -1) {
    const end = content.indexOf('\n## ', start + version.length,) || content.length - 1
    const section = content.slice(start + version.length, end).trim()
    // Write each section to the log file
    fs.appendFileSync(pathToNewFile, `\n## ${path.basename(file)}\n` + section, (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log("Section successfully written to file")
      }
    })
  }
})

// TODO: read bundle docs from pathToFrontendRepository + api/**/bundle.md etc
//  - generate flattened listing of bundles + their requests + events
//  - maybe as a secondary effort try to create links from bundles using the requests/events to ones providing the
// current code in https://github.com/oskariorg/oskari-docs/tree/master/lib (oskariapi related files/code) maybe helpful
