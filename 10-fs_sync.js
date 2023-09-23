const fs = require('fs')

const first = fs.readFileSync('./content/1.txt','utf-8')
const second = fs.readFileSync('./content/2.txt','utf-8')

console.log(first,second)

console.log(fs.writeFileSync('./content/result_sync.txt',
'This is the result : '+ (first +' '+ second) 
))