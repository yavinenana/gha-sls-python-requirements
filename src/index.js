// import os from 'os';

console.log('gha sls python requirements')
// const { nodeVersion } = require('node:process');
// console.log(`node Version: ${nodeVersion}`)

// const { version } = require('node:process');
// console.log(`Version: ${version}`);

const os = require('os');
// const sys = require('sys');


console.log(`Node.js Version: ${process.version}`);
console.log(`OS Platform: ${os.platform()}`);
console.log(`OS Release: ${os.release()}`);
console.log(`CPU Architecture: ${os.arch()}`);

const { exec } = require('child_process');

exec('python --version', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Error: ${stderr.trim()}`);
        return;
    }
    console.log(`Python Version: ${stdout.trim()}`);
});