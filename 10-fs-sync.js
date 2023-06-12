
const {readFileSync, writeFileSync} = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

const result = writeFileSync('./content/result.txt', `Here is the result: ${first}, ${second}`)
//to just append to the existing text file without over-writing to it
writeFileSync(
    './content/result.txt', 
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'}
)

// console.log(first, second)
// console.log(result)

console.log('done with this task')
console.log('starting with the next task')