const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')
const users = require('./users')
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
		let url = req.url
		console.log(url)
		switch (url) {
			case '/':
				console.log('main page')
				staticFile(res, '/html/main.html', '.html')
				break
			case '/about':
				console.log('about page')
				staticFile(res, '/html/about.html', '.html')
				break
			case '/contact':
				console.log('contact page')
				staticFile(res, '/html/contact.html', '.html')
				break
			case '/admin':
				console.log('admin  page')
				staticFile(res, '/html/not_admin.html', '.html')
				break
			case '/login':
				console.log('login  page')
				staticFile(res, '/html/login.html', '.html')
				break
			default:
				const extname = String(path.extname(url)).toLocaleLowerCase()
				if (extname in mimeTypes) staticFile(res, url, extname)
				else {
					res.statusCode = 404
					res.end()
				}
		}
	})
	.listen(3500)
