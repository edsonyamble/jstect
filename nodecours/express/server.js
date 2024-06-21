const express = require('express')
const app = express() //он сам определяет тип файл и т д

const path = require('path')

const PORT = 3000

const createPath = page => path.resolve(__dirname, 'views', `${page}.html`)

app.listen(PORT, 'localhost', error => {
	error ? console.log(error) : console.log(`listening port ${PORT}`)
})

app.get('/', (req, res) => {
	// res.send('Hello')//в expres res.write re.end не нужен
	res.sendFile(createPath('index'))
})
app.get('/contacts', (req, res) => {
	res.sendFile(createPath('contacts'))
})
app.get('/about-us', (req, res) => {
	res.redirect('/contacts')
})
app.use((req, res) => {
	res.status(404).sendFile(createPath('error'))
})
