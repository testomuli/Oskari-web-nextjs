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

function getMdDesc(fileContent) {
  // reads text after the first heading in md file and stops at either line change or EOF
  const match = fileContent.match(/#\s+(.*)\r?\n\r?\n([^]*?)(?=\r?\n\r?\n|$)/);
  if (match && match.length > 1) {
    return match[2];
  }

  return '';
}

function hasTag(fileContent, tag) {
  // Find the first heading and see if it contains the tag
  const match = fileContent.match(/#\s+(.*)/);
  if (match && match[1].includes(tag)) {
      return true;
  } else {
      return false;
  }
}

function getSubdirectories(rootDir) {
  return fs.readdirSync(rootDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
}


function generateRequestsOrEvents(fullPath, moduleName, bundleName, type) {
  // type = request | event
  const itemTypePath = path.join(fullPath, moduleName, bundleName, type);
  if (!fs.existsSync(itemTypePath)) {
    return;
  }

  const files = fs.readdirSync(itemTypePath);
  const results = [];
  files.forEach(file => {

    const mdPath = path.join(itemTypePath, file);
    const fileContent = fs.readFileSync(mdPath, 'utf8');
    const fileNameWithoutExtension = path.parse(file).name;
    const item = {
      name: fileNameWithoutExtension,
      desc: getMdDesc(fileContent),
      path: path.normalize(path.join(moduleName, bundleName, type, file)),
      rpc: hasTag(fileContent, '[rpc]'),
      bundle: bundleName,
      ns: moduleName
    };
    results.push(item);
  })

  return results;
}

function generateBundlesList(fullPath, moduleName) {

  const bundles = [];
  const modulePath = path.join(fullPath, moduleName);
  const bundleNames = getSubdirectories(modulePath);

  bundleNames.forEach((bundleName) => {
    bundles.push({
      name: bundleName,
      desc: getMdDesc(path.join(modulePath, bundleName, 'bundle.md')),
      path: moduleName + '/' + bundleName,
      requests: generateRequestsOrEvents(fullPath, moduleName, bundleName, 'request'),
      events: generateRequestsOrEvents(fullPath, moduleName, bundleName, 'event')
    })
  })

  return bundles;

}

function generateApiJson(fullPath) {

  const modules = getSubdirectories(fullPath);
  const bundlesJSON = [];
  modules.forEach(module => bundlesJSON.push({
    name: module,
    bundles: generateBundlesList(fullPath, module)
  }));
  return bundlesJSON;
}


// npm run apidocs 2.13.0
const version = process.argv.slice(2)[0] || 'latest';

const sourceDirectoryRelative = '../../oskari/oskari-frontend/api';
const destinationDirectoryRelative = '/_content/api/versions/'+version+'/';

const sourcePath = path.join(process.cwd(), sourceDirectoryRelative);
const destinationPath = path.join(process.cwd(), destinationDirectoryRelative);
copyContent(sourcePath, destinationPath);

// write the full api object with requests and events. Not sure we need this for anything...?
const apiJSON = generateApiJson(destinationPath);
fs.writeFileSync(path.join(destinationPath, 'api.json'), JSON.stringify(apiJSON, null, 2));

let requests = [];
let events = [];
apiJSON.forEach(module => {
  module.bundles.forEach(bundle => {
    if (bundle?.requests) {
      requests = requests.concat(bundle.requests)
    }

    if (bundle?.events) {
      events = events.concat(bundle.events);
    }
    delete bundle.events;
    delete bundle.requests;
  });
})

fs.writeFileSync(path.join(destinationPath, 'bundles.json'), JSON.stringify(apiJSON, null, 2))
fs.writeFileSync(path.join(destinationPath, 'events.json'), JSON.stringify(events, null, 2))
fs.writeFileSync(path.join(destinationPath, 'requests.json'), JSON.stringify(requests, null, 2))
