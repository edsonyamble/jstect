// npm i follow-redirects package por travailler avec api
const https = require('follow-redirects').https
function ex_01() {
	const options = {
		method: 'GET',
		hostname: 'https://jsonplaceholder.typicode.com',
		path: 'https://jsonplaceholder.typicode.com/todos',
		headers: { apikey: '' },
		maxRedirects: 20,
	}
	const req = https.request(options, function (res) {
		let chunks = []
		res.on('data', function (chunk) {
			chunks.push(chunk)
		})
		res.on('error', function (error) {
			console.log(error)
		})
		res.on('end', function () {
			let body = Buffer.concat(chunks) //add all chunck
			console.log(body)
		})
	})
	req.end()
	ex_01()
}
