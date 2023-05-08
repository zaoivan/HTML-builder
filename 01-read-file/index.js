// Connecting standard streams
const { stdout } = process;

// Connecting standard modules
const fs = require('fs');
const path = require('path');

// Creating readable stream
const pathToFile = path.join(__dirname, 'text2.txt');
const readableStream = fs.createReadStream(pathToFile, 'utf-8');

// Declaring Variables
let data = '';

// Event Handling
readableStream.on('data', chunk => data += chunk);
readableStream.on('end', () => stdout.write(`${data}\n`));
readableStream.on('error', error => stdout.write(`Error\n${error.message}\n`));