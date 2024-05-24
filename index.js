//ASync/await это синтакс дляя упршение работы с промисси
//await in async 
const timerPromise = () =>
new Promise((resolve,reject)=>setTimeout(()=>resolve(),2000))
const asyncFn = async ()=>{
	console.log('time start')
	await timerPromise()
	console.log('timer ending')
}
asyncFn()