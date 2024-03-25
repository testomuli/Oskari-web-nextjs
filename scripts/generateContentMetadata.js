// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const slugify = require('slugify');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const grayMatter = require('gray-matter');

function listFilesRecursively(directory) {
    const files = fs.readdirSync(directory);
    let fileList = [];

    files.forEach(file => {
        const filePath = path.join(directory, file);
        const stats = fs.statSync(filePath);
        if (stats.isFile()) {
            const ext = path.extname(filePath);
            if (ext === '.md' || ext === '.mdx') {
                const fileContent = fs.readFileSync(filePath, 'utf-8');
                const { data } = grayMatter(fileContent);
                const slug = slugify(file)
                const fileData = {
                    ...data,
                    path: filePath,
                    fileName: file,
                    slug
                };
                fileList.push(fileData);
            }
        } else if (stats.isDirectory()) {
            fileList = fileList.concat(listFilesRecursively(filePath));
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

function saveToFile(normalizedPath, data) {
    const sortedFiles = sortByDateDescending(data);
    const jsonData = JSON.stringify(sortedFiles, null, 2);
    fs.writeFileSync(normalizedPath + 'index.json',  jsonData);
}

const normalizedPath = path.normalize(path.join(__dirname, '../_content/blog/'));
const fileList = listFilesRecursively(normalizedPath);
saveToFile(normalizedPath, fileList);