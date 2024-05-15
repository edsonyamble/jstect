//декустуризация обект destruction object
//это когда хочешь взять  свойство из обекть можно
//с точеой запись но с декстуризация можно по друугому
//и декстуризация меняет  свойст на перемен поэтом можно сразу обрашься к ним 
const userProfile = {
	name: 'Edson',
	commentQty: 23,
	hasSignedAgreement: false,
}
// console.log(userProfile.name) //точная запись
// console.log(userProfile.commentQty)//точная запись
const { name, commentQty } = userProfile //декстуризация обект
const { hasSignedAgreement } = userProfile //декстуризация обект
console.log(name)
console.log(commentQty)
console.log(hasSignedAgreement)