/*
const amount = 12
if(amount < 10){
    console.log('small number');
}else{
    console.log("large number")
}
console.log(`hey it is my first node app`)
console.log(`directory name is ${__dirname}`)
console.log(`filename name is ${__filename}`)

setInterval(() => {
    console.log('hello world!')
}, 2000)
*/


// Modules
const names = require('./4-names')
const sayHi = require('./5-utils')

//console.log(names)
 
const data = require('./6-alternative flavour')
//console.log(data)
//console.log(data.items)
sayHi('Susan')
sayHi(names.bola)
sayHi(names.john)

require('./7-mind-grenade')