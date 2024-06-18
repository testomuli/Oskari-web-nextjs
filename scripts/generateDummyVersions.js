const fs = require('fs');
const path = require('path');
const { generateDocumentationMetadata } = require('./documentationMetadataHelper');

// So build on GitHub Actions can work without cloning the documentation folders
const generateDummyDocs = (folder, addIndex = true) => {
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder, { recursive: true });
    }
    
    addIndex && generateDocumentationMetadata(folder);
    
};

generateDummyDocs('./_content/api/versions/');
generateDummyDocs('./_content/docs/latest', false);
generateDummyDocs('./_content/docs/');
const indexContent = `
const allDocs = ['latest'];
export default allDocs;
`;
fs.writeFileSync(path.join('./_content/docs/latest/', 'index.js'), indexContent);
