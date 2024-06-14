const fs = require('fs')
const text =
	'je sui passe de rien \n maos jai conqui le benim \nje sui passe de rien \n maos jai conqui le benim  '
//write to file
const pathToFile = './info_1.txt'
fs.writeFileSync(pathToFile, text, { encoding: 'utf-8', flag: 'a' })
//write massiv array
const text2 = [
	'je sui passe de rien maos ',
	'jai conqui le benim ',
	'e sui passe de rien maos jai conqui le benim ',
]
const pathToFileArray = './info_array.txt'
fs.writeFileSync(pathToFileArray, text2.join('\n'), {
	encoding: 'utf-8',
	flag: 'w',
})
//flag w permet d ajouter mais de supprimer si existe deja donc sa ne se repete pas 