// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

function getSubdirectories(rootDir) {
    return fs.readdirSync(rootDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
}

function listContentsRecursively(directory, results = []) {
    const filesAndDirectories = fs.readdirSync(directory, { withFileTypes: true });

    filesAndDirectories.forEach(item => {
        const itemPath = path.join(directory, item.name);
        if (item.isDirectory()) {
            const children = listContentsRecursively(itemPath, []);
            results.push({
                slug: item.name,
                children: children
            });
        } else {
            results.push({ fileName: item.name });
        }
    });

    return results;
}

// Write metadata for each version
function processVersions(rootDir) {
    const subdirectories = getSubdirectories(rootDir);

    for (const version of subdirectories) {
        const versionPath = path.join(rootDir, version);
        const versionContent = listContentsRecursively(versionPath);
        fs.writeFileSync(path.join(versionPath, 'index.js'), `const allDocs = ${JSON.stringify(versionContent, null, 2)};\n\nexport default allDocs;`);
        console.log('Wrote file ' + path.join(versionPath, 'index.js'));
    }
}

function generateDocumentationMetadata(dirPath) {
    const subdirectories = getSubdirectories(dirPath);
    const sortedVersions = subdirectories.sort((a, b) => parseFloat(a) - parseFloat(b));
    const indexContent = `const availableVersions = ${JSON.stringify(sortedVersions)};\n\nexport default availableVersions;`;
    fs.writeFileSync(path.join(dirPath, 'index.js'), indexContent);
    processVersions(dirPath);
}

const baseDirectoryDocs = path.normalize(path.join(__dirname, '../_content/docs/'));
console.log('Generating documentation metadata for folder ', baseDirectoryDocs);
generateDocumentationMetadata(baseDirectoryDocs);
