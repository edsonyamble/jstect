const http = require('http')
const fs = require('fs')
const PORT = process.env.PORT
const HOSTNAME = process.env.HOSTNAME

http
	.createServer(function (req, res) {
		const url = req.url
		console.log(url)
		switch (url) {
			case '/':
				console.log('main')
				res.write('<h1>main page</h1>')
				break
			case '/contact':
				console.log('about page')
				let data = fs.readFileSync('./contact.html', {
					encoding: 'utf-8',
					flag: 'r',
				})
				res.write(data)
				break
			default:
				res.statusCode = 404
				console.log(404)
		}
		res.end()
	})
	.listen(PORT, HOSTNAME)
