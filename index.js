//cycle for in 
// for (key = название каждый свойство обект in object ){
	//действие с каждым свойства обект 
	//значение свойства object[key]
// }
const myObject = {
	x:2,
	y:true,
	z:'Edson'
}
for(key in myObject){
	console.log(key,myObject[key])
}
