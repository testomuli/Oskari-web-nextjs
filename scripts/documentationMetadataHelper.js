/*eslint @typescript-eslint/no-var-requires: 0*/
const fs = require('fs');
const path = require('path');

function getSubdirectories(rootDir) {
  return fs.readdirSync(rootDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
}

function generateDocumentationMetadata(fullPath) {
  const subdirectories = getSubdirectories(fullPath);
  // filter out version 'unreleased' so it will not show up in menus etc. but is still accessible for testing purposes
  const sortedVersions = subdirectories
      .filter((version) => version !== 'unreleased')
      .sort((a, b) => parseFloat(a) - parseFloat(b));

  const indexContent = `const availableVersions = ${JSON.stringify(sortedVersions)};\n\nexport default availableVersions;`;
  fs.writeFileSync(path.join(fullPath, 'index.js'), indexContent);
}

exports.getSubdirectories = getSubdirectories;
exports.generateDocumentationMetadata = generateDocumentationMetadata;