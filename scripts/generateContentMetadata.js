/*eslint @typescript-eslint/no-var-requires: 0*/
const fs = require('fs');
const path = require('path');
const slugify = require('slugify');
const grayMatter = require('gray-matter');
const { marked } = require('marked');
const syncResources = require('./syncResourcesFolder');

function listFilesRecursively(baseRelativePath, fileRelativePath) {
    const fullPath = path.normalize(path.join(process.cwd(), fileRelativePath));
    const files = fs.readdirSync(fullPath);
    let fileList = [];

    files.forEach(file => {
        const filePath = path.join(fullPath, file);
        const newRelativePath = path.join(fileRelativePath, file);
        const stats = fs.statSync(filePath);
        const pathForSlug = fileRelativePath.slice(baseRelativePath.length);
        if (stats.isFile()) {
            const ext = path.extname(filePath);
            if (ext === '.md' || ext === '.mdx') {
                const fileContent = fs.readFileSync(filePath, 'utf-8');
                const { data } = grayMatter(fileContent);
                const slug = slugify(pathForSlug + file);
                const fileData = {
                    ...data,
                    path: newRelativePath,
                    fileName: file,
                    slug
                };
                fileList.push(fileData);
            }
        } else if (stats.isDirectory()) {
            fileList = fileList.concat(listFilesRecursively(baseRelativePath, newRelativePath));
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
    const fullPath = path.normalize(path.join(process.cwd(), filePath, fileName));
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
        const fullPath = path.normalize(path.join(process.cwd(), file.path));
        const fileContent = fs.readFileSync(fullPath, 'utf-8');
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

const blogsBaseRelativePath = '/_content/blog/';
const blogsResourcesDestinationRelativePath = '/public/assets/blog';
const fileListBlogs = listFilesRecursively(blogsBaseRelativePath, blogsBaseRelativePath);
saveToFile(blogsBaseRelativePath, fileListBlogs);
syncResources(blogsBaseRelativePath, blogsResourcesDestinationRelativePath);

const coordinatorsBaseRelativePath = '/_content/coordinators/';
const fileListCoordinators = listFilesRecursively(coordinatorsBaseRelativePath, coordinatorsBaseRelativePath);
saveToFile(coordinatorsBaseRelativePath, fileListCoordinators);

const faqBaseRelativePath = '/_content/faq/';
const fileListFaq = listFilesRecursively(faqBaseRelativePath, faqBaseRelativePath);
generateFaq(fileListFaq);
saveToFile(faqBaseRelativePath, fileListFaq);
