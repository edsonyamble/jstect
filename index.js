let a
let b
function myFn() {
  let b  //тут например обявили новый перем у которого значение работает только внутри функциии а в шдобалноый премем не меняться так правилно 
	a = true
	b = 10
	console.log(b)
}

myFn()
console.log(b) //chang value global variable wthith function a = true но лучше так не делать менять значениие через функции не рекомендуеться 
console.log(a)
