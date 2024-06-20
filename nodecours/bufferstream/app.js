//buffer stream буфер и потоки
//например когда речь идет о преданны болши файл с сервер у ползователя напри музыка филм это много времени пока ждет ползователь поэтому лучше резать файл по чуть  это потоки
//буфер это времени хранилше
//потоки writable readable  duplex transform
const fs = require('fs')
//read stream поток
// const readStream = fs.createReadStream('./docs/text.txt')
// readStream.on('data', chunk => {
// 	console.log('---------')
// 	console.log(chunk.toString())
// })
//copy and write potok
const readStream = fs.createReadStream('./docs/text.txt')
const writeStream = fs.createWriteStream('./docs/new-text.txt')
//convert to zip
const zlib = require('zlib')
const compress = zlib.createGzip()
// readStream.on('data', chunk => {
// 	writeStream.write('\n___checkn___\n')
// 	writeStream.write(chunk)
// 	writeStream.write('\n___checkn___\n')
// })
//another variant whith pipe
// readStream.pipe(writeStream)
//custom avec error si il a un probleme pendant la lecture du fichier
// const handleRRor = () => {
// 	console.log('Error')
// 	readStream.destroy()
// 	writeStream.end('finished with error')
// }
// readStream.on('error', handleRRor).pipe(writeStream).on('error', handleRRor)
//convert to zip
// const zlib = require('zlib')
// const compress = zlib.createGzip()

const handleRRor = () => {
	console.log('Error')
	readStream.destroy()
	writeStream.end('finished with error')
}
readStream
	.on('error', handleRRor)
	.pipe(compress)
	.pipe(writeStream)
	.on('error', handleRRor)
