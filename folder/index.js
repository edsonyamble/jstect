//подключение модул для работы с папок внутри нод
const fs = require('fs') //folder
const path = require('path') //link
//проверка есои папок сушествует
function f01() {
	const pathdir = './test'
	if (fs.existsSync(pathdir)) {
		console.log(true)
	} else {
		console.log(false)
	}
}
f01()
//проверка если файл сушествует
function f02() {
	const pathdir = './test/info.dat'
	if (fs.existsSync(pathdir)) {
		console.log('yes')
	} else {
		console.log('no')
	}
}
f02()
//размер файл
function f03() {
	const pathdir = './test/info.dat'
	const fileSize = fs.statSync(pathdir)
	console.log(fileSize.size)
}
f03()
//имя и расшерение файл
function f04() {
	const pathdir = './test/info.dat'
	const fileName = path.basename(pathdir)
	const fileNameExt = path.extname(pathdir)
	const fileNameDirectory = path.dirname(pathdir) //pour voir directory du dossier
	const fileNameParse = path.parse(pathdir) //parsing
	console.log(fileName)
	console.log(fileNameDirectory)
	console.log(fileNameParse)
	console.log(fileNameExt)
}
f04()
//получение файли и папки в директори
function f05() {
	const pathdir = './test'
	const allfile = fs.readdirSync(pathdir)
	let out = ''
	allfile.forEach(item => (out += item + '\n'))
	//permet de mettre a laligne avec foreach
	console.log(allfile)
	console.log(out)
}
f05()
//получить абсолюстный пут
const directoryPath = path.join(__dirname, 'test') //join permet de coller  absolute link avec test
console.log(directoryPath)
//get absololute link file or folder + join
console.log(__dirname) //get absolute link
