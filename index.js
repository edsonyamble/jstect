const personOne = {
	name: 'edson',
	age: 22,
}
function increasePersonAge(person) {
  const inperF = {...person}
	inperF.age += 1
	return inperF
}
const inperF = increasePersonAge(personOne)
console.log(inperF)
console.log(personOne.age)

