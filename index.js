//class.. extension расширение  она автомтические досуная в екземпляр класс 

class NumberArray extends Array{
  sum() {
    return this.reduce ((el,acc) => acc += el, 0 )//с метод reduce можно сумировать свойства в массив 0 это начало значение 
  }
}
const myArray = new NumberArray(2,5,7)
console.log(myArray)
console.table(myArray.sum())
