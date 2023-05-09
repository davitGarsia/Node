const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to out homepage');
  }
  if (req.url === '/about') {
    res.end('Here is about section');
  }
});

server.listen(5000);

////
const { readFile, writeFile } = require('fs').promises;

// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// getText('./content/test.txt')
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

const start = async () => {
  try {
    const first = await readFile('./content/test.txt', 'utf-8');
    const second = await readFile('./content/second.txt', 'utf-8');
    await writeFile('./content/result.txt', `This is a generated awesome data`);
    console.log(first, second);
  } catch (err) {
    console.log(err);
  }
};

start();

// const getText = path => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf-8', (err, data) => {
//       if (err) {
//         return;
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', () => {
  console.log(`data received `);
});

customEmitter.emit('response');
