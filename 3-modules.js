// Nodejs uses Commonjs library bcz of which every file in node is a module
// Modules - Encapsulated Code(Only share minimum)
const names = require('./4-module1')
//console.log('names', names);
const sayHi = require('./5-module2')
const alt = require('./6-alternative_syntax')
require('./7-direct_too')

console.log(alt);

sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)