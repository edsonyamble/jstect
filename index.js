//ASync/await это синтакс дляя упршение работы с промисси
//await in async 
async function asyncFn() {
return 'success'
}
asyncFn()
.then(value =>console.log(value))
.catch(error=>console.log(error.message))