const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcme to the home page')
    }else if(req.url === '/about'){
        res.end('This is the about page')
    }
    res.end(`   
        <h1>Oops!</h1>
        <p>We can't seem to find the page. </p>
        <a href="/">Back home</a>
    `)


    // console.log('server is running')
    // console.log(req)
    // res.write('Were good')
    // res.write(req)
    // res.end()
})

server.listen(5000)

const _ = require('lodash')
const items  = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)