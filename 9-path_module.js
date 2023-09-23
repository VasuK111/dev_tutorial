const path = require("path");


console.log(path.sep)
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)
const base = path.basename(filePath)
console.log(base)
// very useful method is resolve which gives the absolute path of a module...
// very useful as our app will be run in different environments so the
// path to a variable might be different on different machines
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)
