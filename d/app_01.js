const fs = require('fs')
//read file
const pathToFile = './info.txt'
const data = fs.readFileSync(pathToFile, { encoding: 'utf8', flag: 'r' })
console.log(data)
//fs.readFileSync(путь, параметры)
//split the file line by line
let dataArr = data.split('\n') //permet de metre a la ligne
dataArr = dataArr.filter(line => line.trim() !== '')
//permet d enlever les parenthese vide du au ligne vide
console.log(dataArr)
