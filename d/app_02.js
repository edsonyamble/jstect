const fs = require('fs')
const text =
	'je sui passe de rien \n maos jai conqui le benim \nje sui passe de rien \n maos jai conqui le benim  '
//write to file
const pathToFile = './info_1.txt'
fs.writeFileSync(pathToFile, text, { encoding: 'utf-8', flag: 'a' })

// флаги файловый систем нод
// r+ — открыть файл для чтения и для записи.
// w+ — открыть файл для чтения и для записи, установив указатель потока в начало файла. Если файл не существует — он создаётся.
// a — открыть файл для записи, установив указатель потока в конец файла. Если файл не существует — он создаётся.
// a+ — открыть файл для чтения и записи, установив указатель потока в конец файла. Если файл не существует — он создаётся.