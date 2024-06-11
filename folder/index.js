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
