const fs = require('fs')

function makeLog(data) {
    fs.appendFile('log.txt', `[${new Date().toLocaleString()}] ${data}\n`, (err) => {});
}

module.exports =  { 
    makeLog };