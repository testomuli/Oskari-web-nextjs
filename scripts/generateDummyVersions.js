const fs = require('fs');
const path = require('path');
const { generateDocumentationMetadata } = require('./documentationMetadataHelper');

// So build on GitHub Actions can work without cloning the documentation folders
const generateDummyDocs = (folder) => {
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder, { recursive: true });
    }
    generateDocumentationMetadata(folder);
};

generateDummyDocs('./_content/api/versions/');
generateDummyDocs('./_content/docs/');