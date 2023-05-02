const { isUtf8 } = require('buffer');
const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/test.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

writeFileSync(
  './content/result-sync.txt',
  `Here is the result: ${(first, second)}`,
  { flag: 'a' }
);
