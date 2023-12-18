/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
//const { lstatSync, readdirSync, existsSync } = require('fs');
const path = require('path');

const pathToExternalRepos = path.normalize(path.join(__dirname, '/../../'));

// npm run docs 2.13.0
const version = process.argv.slice(2)[0];

if (!version) {
  throw new Error('\'npm run docs {version}\' - version is required');
}

// Init folder for version
const pathToVersionRoot = path.normalize(path.join(__dirname, '/../_content/docs/', version));
fs.mkdirSync(pathToVersionRoot, { recursive: true });
console.log(`Created folder for version ${version} in ${pathToVersionRoot}`);

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
const pathToNewFiles = path.join(pathToVersionRoot, '/5 Changelog');
// Init folder and heading file
fs.mkdirSync(pathToNewFiles, {recursive: true});
fs.writeFileSync(path.join(pathToNewFiles, "5 Changelog.md"), "# 5 Changelog\n");

// Create a summary section highlighting the changes in new version from these files
const filesToHandle = {
  "5.1 Frontend release notes": path.join(pathToFrontendRepository, 'ReleaseNotes.md'),
  "5.2 Frontend changelog": path.join(pathToFrontendRepository, 'api/CHANGELOG.md'),
  "5.3 Server release notes": path.join(pathToServerRepository, 'ReleaseNotes.md'),
  "5.4 Migration guide": path.join(pathToServerRepository, 'MigrationGuide.md')
}

// Go through the files one by one
for (const [sectionTitle, frontendPath] of Object.entries(filesToHandle)) {
  const sectionFile = path.join(pathToNewFiles, `${sectionTitle}.md`);
  // Read the file, take the content corresponding to version
  fileContent = fs.readFileSync(frontendPath, 'utf-8');
  const start = fileContent.indexOf(version);
  if (start < 0) {
    console.log(`No mention of version ${version} in ${frontendPath}`);
  } else {
    // Find end of section, otherwise take the rest of the file
    const end = fileContent.indexOf('\n## ', start + version.length) || content.length - 1;
    const section = fileContent.slice(start + version.length, end).trim();
    // Write each section to the log file
    fs.writeFileSync(`${sectionFile}`, `# ${sectionTitle}\n\n${section}`);
  }
}

/*
* Used for generating a file with listings of bundles, requests, events
* TODO: add links from requests and events to bundle which includes said request/event, currently includes the old links to oskari.org
* TODO: images need to be included
* filter: used for filtering the list of dirent objects
* filename: the filename to be generated
* fileHeading: the section number of the file, i.e. 2.3, 2.4 etc.
*/
const generateFlattenedFile = (filter, filename, fileHeading) => {
  // Get wanted filenames by reading all files in frontend/api and applying filter to result
  const files = fs.readdirSync(
    path.join(pathToFrontendRepository, "api/"),
    { withFileTypes: true,
    recursive: true }
  )
    .filter(filter);

  // Construct filename and create the file
  const flattenedFileName = path.join(pathToBundlesDocumentation, `${fileHeading} ${filename}.md`);
  fs.writeFileSync(flattenedFileName, `# ${fileHeading} ${filename}\n\n`, {recursive: true});
  
  // Copy each files' content to flattenedFilename and append subheading number
  let sectionHeadingNumber = 1;
  files.forEach(
    dirent => {
      const fileContent = fs.readFileSync(
        path.join(
          dirent.path,
          dirent.name
        ),
        'utf-8'
      );
      
      const headingEnd = fileContent.indexOf('\n');
      // Write bundle heading
      fs.appendFileSync(
        flattenedFileName,
        `# ${fileHeading}.${sectionHeadingNumber}${fileContent.slice(1, headingEnd)}\n`
      );
      
      const descriptionStart = fileContent.indexOf("## Description");
      const descriptionEnd = fileContent.indexOf("## ", descriptionStart + 1);
      // Write bundle description
      fs.appendFileSync(
        flattenedFileName,
        `\n${fileContent.slice(descriptionStart, descriptionEnd - 1)}`
      );
      sectionHeadingNumber++;
    }
  );
}

generateFlattenedFile(dirent => dirent.name === "bundle.md", "Bundles", "2.3");
generateFlattenedFile(dirent => dirent.name.toLowerCase().includes("request.md"), "Bundle requests", "2.4");
generateFlattenedFile(dirent => dirent.name.toLowerCase().includes("event.md"), "Bundle events", "2.5");