/*eslint @typescript-eslint/no-var-requires: 0*/
const fs = require('fs');
const path = require('path');
const { copyFileSync, mkdirSync, existsSync } = fs;

function syncResources(sourcePath, destinationPath) {
    console.log('Copying resources for ' + sourcePath);
    const fullSourcePath = path.join(process.cwd(), sourcePath, 'resources');
    const fullDestinationPath = path.join(process.cwd(), destinationPath, 'resources');

    if (!existsSync(fullSourcePath)) {
        console.error('Could not find source path: ' + fullSourcePath);
        return;
    }

    if (!existsSync(fullDestinationPath)) {
        mkdirSync(fullDestinationPath, { recursive: true });
    }

    copyResources(fullSourcePath, fullDestinationPath);
}

function copyResources(source, destination) {
    const files = fs.readdirSync(source);

    files.forEach(file => {
        const sourceFilePath = path.join(source, file);
        const destinationFilePath = path.join(destination, file);

        const stats = fs.statSync(sourceFilePath);
        if (stats.isFile()) {
            copyFileSync(sourceFilePath, destinationFilePath);
            console.log(`Copied file: ${sourceFilePath} to ${destinationFilePath}`);
        } else if (stats.isDirectory()) {
            if (!existsSync(destinationFilePath)) {
                mkdirSync(destinationFilePath);
            }
            copyResources(sourceFilePath, destinationFilePath);
        }
    });
}

module.exports = syncResources;
