//dexturization  fuction
const userProfile = {
	name: 'Edson',
	commentQty: 23,
	haSigned: true,
}
const userInfo = ({ name, commentQty }) => {
	if (!commentQty) {
		return `User ${name} has comment`
	} else return `User ${name} has ${commentQty} comment`
}
console.log(userInfo(userProfile))
