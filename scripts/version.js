const exec = require('child_process').execSync
const applicationVersion = require('../package.json').version
const command = `echo "{ \\"version\\": \\"${applicationVersion}\\"}" > dist/src/config/version.json`

try {
  exec(command);
  console.log(`version file created successfully with ${applicationVersion}`);
} catch(error) {
  console.log('version file creation failed');
  console.log(error);
  process.exit(0)
}
