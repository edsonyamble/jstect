//мутация в джаваскрипт  мутация это изминение
//например
const a = 10
let b = a //copy by value
b = 20
console.log(a, b)

// const posts = {
// 	title: 'Edson',
// 	components: true,
// }
// const pos = posts //copy by reference
// pos.title='aspha'
// console.log(posts.title)
//мутация это изминение и все меняеть

//чтобы избежать мутации

// const posts = {
//   title : "Edson",
//   components: true
// }
const posts = {
	title: 'Edson',
	components: true,
}
const pos = { ...posts } //copy by reference
pos.title = 'aspha'
console.log(posts.title, pos.title)
