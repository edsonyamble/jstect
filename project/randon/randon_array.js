const rand = require('./randon_int')
module.exports = function (len = 10) {
	let temp = []
	for (let i = 0; i < len; i++) temp.push(rand())
	return temp
}
