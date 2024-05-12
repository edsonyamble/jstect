const fnError = () => {
	throw new Error('Same error')
}
try {
	fnError()
} catch (error) {
	console.error(error) //error
	console.log(error.message) //message in error
}
console.log('ready...')
// try{выполнение блока кода}
// cath{это блое выолняеться в случае ошибок в блок try}
