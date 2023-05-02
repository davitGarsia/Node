const names = require('./names');
const sayHi = require('./utils');
require('./mind-bend');

sayHi('Phoebe');
sayHi(names.david);
sayHi(names.emily);

//
const os = require('os');

// info about user
const user = os.userInfo();
console.log(user);

// method returns system uptime in seconds
console.log(`The system uptime is ${os.uptime() / 60} minutes`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
