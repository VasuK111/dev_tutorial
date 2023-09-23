const os = require('os')

// info about cuurent user
const user = os.userInfo()
console.log(user)

// info about system uptime
console.log('The ssytem uptime is '+ os.uptime + ' seconds')

// more info
const cuurentOs = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}
console.log(cuurentOs);
