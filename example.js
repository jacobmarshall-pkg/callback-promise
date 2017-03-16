const fs = require('fs');
const callbackPromise = require('./');

async function test() {
  const file = callbackPromise();
  fs.readFile('./index.js', file);
  console.log(await file);
}

test();
