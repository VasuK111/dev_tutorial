const fs = require('fs')

fs.readFile('./content/1.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    const first = result;
    fs.readFile('./content/2.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err)
            return;
        }
    })
        const second = result;
        fs.writeFile('./content/result_async.txt',
        "This is the result" + (first +' '+ second),
        (err,result) => {
            if(err){
                console.log(err)
                return;
            }
            console.log(result)
            
        }
        )
        }   
    )  
