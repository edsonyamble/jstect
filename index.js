//методы масивы push shift foreach pop unshift map find etc...
const myArray = [1, 2, 3]
// myArray.Metod
myArray.push(4) //add element last in massive
console.log(myArray)
myArray.pop() //delete the las element in massive
console.log(myArray)
console.log(myArray.pop()) //показывает что удалил
console.log(myArray)
myArray.unshift(42) //add element begin in massive
console.log(myArray)
myArray.shift() //delete element begin in massive
console.log(myArray)
myArray.forEach(el => console.log(el * 2)) //цикл который умножить
// все еелемент в масив на 2 и внутри foreach есть функции
//но в console log не возрашает
console.log(myArray) //foreach don t change original massiv
const newArray = console.log( myArray.map(el => el * 2)) //or myArray.map(el => console.log(el * 2)) 
//она как foreach  толко она возрашаеться console log  и создает новый массив

