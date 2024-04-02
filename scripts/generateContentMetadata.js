// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const slugify = require('slugify');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const grayMatter = require('gray-matter');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { marked } = require('marked');

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

function generateFaq(fileList) {
    fileList.forEach(file => {
        const fileContent = fs.readFileSync(file.path, 'utf-8');
        const { content } = grayMatter(fileContent);
        const htmlContent = marked(content); // Parsitaan markdown HTML:ksi

        const questionsAndAnswers = [];

        // find all h1 - level headings and content that follows them
        const h1Regex = /<h1>(.*?)<\/h1>(.*?)?(?=<h1>|$)/gs;
        let match;
        while ((match = h1Regex.exec(htmlContent)) !== null) {
            const question = match[1].trim(); //
            const answer = match[2] ? match[2] : '';
            questionsAndAnswers.push({ question, answer });
        }

        file.questionsAndAnswers = questionsAndAnswers;
    });
}

const baseDirectoryBlogs = path.normalize(path.join(__dirname, '../_content/blog/'));
const fileListBlogs = listFilesRecursively(baseDirectoryBlogs, baseDirectoryBlogs);
saveToFile(baseDirectoryBlogs, fileListBlogs);

const baseDirectoryCoordinators = path.normalize(path.join(__dirname, '../_content/coordinators/'));
const fileListCoordinators = listFilesRecursively(baseDirectoryCoordinators, baseDirectoryCoordinators);
saveToFile(baseDirectoryCoordinators, fileListCoordinators);

const baseDirectoryFaq = path.normalize(path.join(__dirname, '../_content/faq/'));
const fileListFaq = listFilesRecursively(baseDirectoryFaq, baseDirectoryFaq);
generateFaq(fileListFaq);
saveToFile(baseDirectoryFaq, fileListFaq);
