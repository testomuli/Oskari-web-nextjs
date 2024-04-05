// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const grayMatter = require('gray-matter');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const slugify = require('slugify');

function getSubdirectories(rootDir) {
    return fs.readdirSync(rootDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
}

function addFrontmatter(filePath, ordinal) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const frontmatter = `---\nordinal: ${ordinal}\n---\n\n`;
    fs.writeFileSync(filePath, frontmatter + fileContent);
    return grayMatter(frontmatter);
}

function sortByParagraphNumber(a, b) {
    // directories first
    if (a.isDirectory() && !b.isDirectory()) {
        return -1;
    }
    if (!a.isDirectory() && b.isDirectory()) {
        return 1;
    }

    const aParts = a.name.split('.').map(part => parseInt(part));
    const bParts = b.name.split('.').map(part => parseInt(part));

    for (let i = 0; i < Math.min(aParts.length, bParts.length); i++) {
        if (aParts[i] !== bParts[i]) {
            return aParts[i] - bParts[i];
        }
    }

    return aParts.length - bParts.length;
}

function listContentsRecursively(directory, results = []) {
    const filesAndDirectories = fs.readdirSync(directory, { withFileTypes: true });
    filesAndDirectories.sort(sortByParagraphNumber);
    let ordinal = 0;
    filesAndDirectories.forEach(item => {
        const itemPath = path.join(directory, item.name);
        if (item.isDirectory()) {
            const sectionNumber = path.basename(itemPath).split(' ')[0];
            const children = listContentsRecursively(itemPath);
            results.push({
                slug: slugify(item.name),
                title: item.name,
                ordinal: sectionNumber,
                children: children
            });
        } else {
            if (path.extname(itemPath).toLowerCase() === '.md') {
                const { data } = addFrontmatter(itemPath, ++ordinal);
                results.push({ fileName: item.name, ...data });
            }
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
