const http = require('http')
const fs = require('fs')
const path = require('path')
const PORT = 3500
const mimeTypes = {
	'.html': 'text/html',
	'.css': 'text/css',
	'.js': 'text/javascript',
	'.json': 'application/json',
	'.png': 'image/png',
	'.jpg': 'image/jpg',
	'.JPEG': 'image/jpeg',
	'.ico': 'image/ico',
	'.gif': 'image/gif',
	'.svg': 'image/svg',
	'.wav': 'audio/wav',
	'.mp3': 'audio/mp3',
	'.mp4': 'video/mp4',
	'.woff': 'application/font-woff',
	'.ttf': 'application/font-ttf',
	'.eot': 'application/vnd.ms-fontobject',
	'.otf': 'application/otf',
	'.wasm': 'application/wasm',
}
function staticFile(res, filePath, ext) {
	res.setHeader('content-type', mimeTypes[ext])
	fs.readFile(
		'./public' + filePath,
		// { encoding: 'utf-8', flag: 'r' },
		(error, data) => {
			if (error) {
				res.statusCode = 404
				res.end()
			}
			res.end(data)
		}
	)
}
http
	.createServer(function (req, res) {
		const url = req.url
		console.log(url)
		switch (url) {
			case '/':
				console.log('main')
				res.write('main page')
				res.end()
				break
			case '/about':
				console.log('about page')
				staticFile(res, '/pages/about.html', '.html')
				break
			default:
				//ext and extname extention file
				const extname = String(path.extname(url)).toLocaleLowerCase() //convert url and extension to lowercase
				if (extname in mimeTypes) {
					staticFile(res, url, extname)
				} else {
					res.statusCode = 404
					res.end()
				} //permet de gerer les autres extensions dans le mimeTypes
		}
	})
	.listen(PORT)
