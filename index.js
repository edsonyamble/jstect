//условия инструкция terms and condition in function
//if in function
const sumPositiveNumbers = (a, b) => {
	if (typeof a !== 'number' || typeof b !== 'number') {
		return 'One of argument is not a  number'
	}//проверка цифри
		if (a <= 0 || typeof b <=0 ) {
			return 'numbers are note positive '
		}
		return a + b 
}
console.log(sumPositiveNumbers(-12,10))
