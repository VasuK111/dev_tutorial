const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
    res.end("Welcome to our home page")
    }
    if(req.url === '/about'){
    res.end("Welcome to our about page")
    }
    res.end('OOPS, we cannot found what you were looking for!😢')
})

server.listen('6969')