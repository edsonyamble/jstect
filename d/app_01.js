const fs = require('fs')
//read file
const pathToFile = './info.txt'
const data = fs.readFileSync(pathToFile, { encoding: 'utf8', flag: 'r' })
console.log(data)
//fs.readFileSync(путь, параметры)