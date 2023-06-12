const { log } = require('console')
const os = require('os')

//info abt current user
const user = os.userInfo()
console.log(user)

//return sustem uptime in hours
console.log(`The system uptime is ${os.uptime()/3600}`)

//return current OS details
const currentOS = {
    mane: os.type(),
    release: os.release(),
    totalMem: os.totalmem()/10000000,
    freeMem: os.freemem()/10000000
}
//console.log(currentOS)