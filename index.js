//как отличить выражение от инструкции   
//выражение могут быть исползование как аргументы в вызовах функции
//инструкции не может аргумент для функции
function myFn(a) {
  console.log(a);
}

const b = true ;//инструкци
let c = 10;//инструкции
myFn(2+2)//инструкция-выражение 
myFn(b)//инструкции выражение 
myFn(c = c + 1)//11 
myFn(c = c + 1;)//error инструкции не может быть аргумент для функции
myFn(let b;)//error инструкции не может быть аргумент для функции
