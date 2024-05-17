//cycle foreach for object

const myObject = {
	x: 2,
	y: true,
	z: 'Edson',
}
Object.keys(myObject).forEach(key => {
	console.log(key, myObject[key])
})
