

let counter = 0
function rene() {
	counter++
	console.log(counter)
}
let call = setInterval(rene, 1000)
// let stoop = clearInterval(call)
function clear() {
	clearInterval(call)
}
setTimeout(clear, 5000)
