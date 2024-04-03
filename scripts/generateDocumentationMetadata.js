// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

function getSubdirectories(rootDir) {
    return fs.readdirSync(rootDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
}

function sortVersions(versions) {
    return versions.sort((a, b) => {
        const numA = parseFloat(a);
        const numB = parseFloat(b);
        return numA - numB;
    });
}

function listVersionsAndExport(dirPath) {
    const subdirectories = getSubdirectories(dirPath);
    const sortedVersions = sortVersions(subdirectories);
    const indexContent = `const availableVersions = ${JSON.stringify(sortedVersions)};\n\nexport default availableVersions;`;

    // Kirjoita tiedosto
    fs.writeFileSync(path.join(dirPath, 'index.js'), indexContent);
    console.log('Wrote available versions to ' + path.join(dirPath, 'index.js'));
}


console.log('Creating documentation metadata....')
const baseDirectoryDocs = path.normalize(path.join(__dirname, '../_content/docs/'));
listVersionsAndExport(baseDirectoryDocs);
