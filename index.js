// оператор ...
permmet d utiliser les donner d un objject dans un autre object 
const button = {
	with: 100,
	text: 'buy',
}
const redButton = {
	...button,
	color: 'red',
}
console.table(redButton)
