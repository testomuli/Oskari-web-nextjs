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
  const sortedVersions = subdirectories
      .sort((a, b) => parseFloat(a) - parseFloat(b));

  const indexContent = `
  const availableVersions: string[] = ${JSON.stringify(sortedVersions)};
  export default availableVersions;
  `;
  fs.writeFileSync(path.join(fullPath, 'index.ts'), indexContent);
}

exports.getSubdirectories = getSubdirectories;
exports.generateDocumentationMetadata = generateDocumentationMetadata;