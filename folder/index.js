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
