const reneMilk = {
	you: 'lait blanc',
	asa: 10,
	aus: true,
}
const dadoMilk = reneMilk
console.table(dadoMilk)
dadoMilk.asa = 1000
console.log(dadoMilk.asa)
reneMilk.asus = 'netbook'
console.table(dadoMilk)
delete dadoMilk.you
console.log(dadoMilk.you)
console.log(dadoMilk)
