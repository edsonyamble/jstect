//terms and condition тенарный оператор ternary operator 3 операнд 

//условия ? выражение1 (if ) : выражение 2 (else)
let value = 11 
value === 11 ? console.log('все хорошо') : console.log('Falssse') 
// or 
// value === 11
// ?console.log('все хорошо')
// :console.log('Falssse')
const value1 = 11
const value2 = 23 
try {value1  && value2 ? myFunction(value1,value2) : myFunction()}
catch (error) {
	console.error(error)
	console.log(error.message)
}


let value3 = 11
console.log(value3 >= 0 ? value3 : -value3)
value3 = -5 
console.log(value3 >= 0 ? value3 : -value3)