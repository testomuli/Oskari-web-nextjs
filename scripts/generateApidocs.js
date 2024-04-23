/*eslint @typescript-eslint/no-var-requires: 0*/
const fs = require('fs');
const path = require('path');

function copyContent(source, destination) {
  if (!fs.existsSync(source)) {
    console.log("Source folder not found.");
    return;
  }

  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination);
  }

  const files = fs.readdirSync(source);
  files.forEach(file => {
    const sourcePath = path.join(source, file);
    const destPath = path.join(destination, file);

    if (fs.lstatSync(sourcePath).isDirectory()) {
        copyContent(sourcePath, destPath);
    } else {
        fs.copyFileSync(sourcePath, destPath);
    }
  });
}

function readMdDesc(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  // reads text after the first heading in md file and stops at either line change or EOF
  const match = fileContent.match(/#\s+(.*)\r?\n\r?\n([^]*?)(?=\r?\n\r?\n|$)/);
  if (match && match.length > 1) {
    return match[2];
  }

  return '';
}

function getSubdirectories(rootDir) {
  return fs.readdirSync(rootDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
}

function generateBundlesList(fullPath, moduleName) {

  const bundles = [];
  const modulePath = path.join(fullPath, moduleName);
  const bundleNames = getSubdirectories(modulePath);
  bundleNames.forEach((bundle) => {
    bundles.push({
      name: bundle,
      desc: readMdDesc(path.join(modulePath, bundle, 'bundle.md')),
      path: moduleName + '/' + bundle
    })
  })

  return bundles;

}

function generateBundlesJson(fullPath) {

  const modules = getSubdirectories(fullPath);
  const bundlesJSON = [];
  modules.forEach(module => bundlesJSON.push({
    name: module,
    bundles: generateBundlesList(fullPath, module)
  }));
  console.log(modules);
  return bundlesJSON;
}


// npm run apidocs 2.13.0
const version = process.argv.slice(2)[0] || 'latest';

const sourceDirectoryRelative = '../../oskari/oskari-frontend/api';
const destinationDirectoryRelative = '/_content/api/versions/'+version+'/';

const sourcePath = path.join(process.cwd(), sourceDirectoryRelative);
const destinationPath = path.join(process.cwd(), destinationDirectoryRelative);
copyContent(sourcePath, destinationPath);

const bundlesJson = generateBundlesJson(destinationPath);
fs.writeFileSync(path.join(destinationPath, 'bundles.json'), JSON.stringify(bundlesJson, null, 2));
