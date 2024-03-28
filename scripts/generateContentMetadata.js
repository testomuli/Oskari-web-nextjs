// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const slugify = require('slugify');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const grayMatter = require('gray-matter');

function listFilesRecursively(directory, baseDirectory) {
    const files = fs.readdirSync(directory);
    let fileList = [];

    files.forEach(file => {
        const filePath = path.join(directory, file);
        const relativePath = path.relative(baseDirectory, filePath);
        const stats = fs.statSync(filePath);
        if (stats.isFile()) {
            const ext = path.extname(filePath);
            if (ext === '.md' || ext === '.mdx') {
                const fileContent = fs.readFileSync(filePath, 'utf-8');
                const { data } = grayMatter(fileContent);
                const slug = slugify(relativePath);
                const fileData = {
                    ...data,
                    path: filePath,
                    fileName: file,
                    slug
                };
                fileList.push(fileData);
            }
        } else if (stats.isDirectory()) {
            fileList = fileList.concat(listFilesRecursively(filePath, baseDirectory));
        }
    });

    return fileList;
}

function sortByDateDescending(files) {
    return files.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
    });
}

function saveToFile(filePath, data) {
    const sorted = sortByDateDescending(data);
    const fileName = 'index.js';
    const fullPath = filePath + fileName;
    const jsContent = `const allPosts = ${JSON.stringify(sorted, null, 2)};\n\export default allPosts;`;

    fs.writeFile(fullPath, jsContent, (err) => {
      if (err) {
        console.error('Failed to write file ' + fullPath + ', error: ', err);
        return;
      }
      console.log('Saved file:', fullPath);
    });
}

const baseDirectoryBlogs = path.normalize(path.join(__dirname, '../_content/blog/'));
const fileListBlogs = listFilesRecursively(baseDirectoryBlogs, baseDirectoryBlogs);
saveToFile(baseDirectoryBlogs, fileListBlogs);

const baseDirectoryCoordinators = path.normalize(path.join(__dirname, '../_content/coordinators/'));
const fileListCoordinators = listFilesRecursively(baseDirectoryCoordinators, baseDirectoryCoordinators);
saveToFile(baseDirectoryCoordinators, fileListCoordinators);
