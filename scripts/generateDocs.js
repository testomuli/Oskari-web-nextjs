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

/*
* Generate section 5 of documentation
*/

const pathToNewFiles = path.join(pathToVersionRoot, '/5 Changelog')
// Init folder and heading file
fs.mkdirSync(pathToNewFiles, {recursive: true})
fs.writeFileSync(path.join(pathToNewFiles, "5 Changelog.md"), "# 5 Changelog\n")

// Create a summary section highlighting the changes in new version from these files
const filesToHandle = {
  "5.1 Frontend release notes": path.join(pathToFrontendRepository, 'ReleaseNotes.md'),
  "5.2 Frontend changelog": path.join(pathToFrontendRepository, 'api/CHANGELOG.md'),
  "5.3 Server release notes": path.join(pathToServerRepository, 'ReleaseNotes.md'),
  "5.4 Migration guide": path.join(pathToServerRepository, 'MigrationGuide.md')
}

// Go through the files one by one
for (const [sectionTitle, frontendPath] of Object.entries(filesToHandle)) {
  const sectionFile = path.join(pathToNewFiles, `${sectionTitle}.md`)
  // Read the file, take the content corresponding to version
  fileContent = fs.readFileSync(frontendPath, 'utf-8')
  const start = fileContent.indexOf(version)
  if (start < 0) {
    console.log(`No mention of version ${version} in ${pathToFile}`)
  } else {
    // Find end of section, otherwise take the rest of the file
    const end = fileContent.indexOf('\n## ', start + version.length) || content.length - 1
    const section = fileContent.slice(start + version.length, end).trim()
    // Write each section to the log file
    fs.writeFileSync(`${sectionFile}`, `# ${sectionTitle}\n\n${section}`)
  }
}
// TODO: read bundle docs from pathToFrontendRepository + api/**/**/bundle.md etc
//  - generate flattened listing of bundles + their requests + events
//  - maybe as a secondary effort try to create links from bundles using the requests/events to ones providing the
// current code in https://github.com/oskariorg/oskari-docs/tree/master/lib (oskariapi related files/code) maybe helpful

const bundleFiles = fs.readdirSync(
  path.join(pathToFrontendRepository, "api/"),
  { withFileTypes: true,
  recursive: true }
)
  .filter(dirent => dirent.name === "bundle.md")
  //.map(dirent => path.join(dirent.path, dirent.name))

const bundleFileName = path.join(pathToBundlesDocumentation, 'bundles.md')
bundleFiles.forEach(
  dirent => {
    const bundleName = path.basename(dirent.path)
    const fileContent = fs.readFileSync(
      path.join(
        dirent.path,
        dirent.name
      ),
      'utf-8'
    )
    const start = fileContent.indexOf("## Requests")
    if (start != -1) {
      const end  = fileContent.indexOf("## Dependencies") || fileContent.length - 1
      fs.appendFileSync(
        bundleFileName,
        `# ${bundleName}\n\n` + fileContent.slice(start, end)
      )
    }
  }
)