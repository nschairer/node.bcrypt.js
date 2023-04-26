const bcrypt = require('./');

console.log(bcrypt.hashSync('test', 11));
