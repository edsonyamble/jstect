const newPost = (post, addDate = Date()) => ({
	...post,
	addDate,
})
const firstPost = {
	id: 1,
  author:'Edson'
}
const secondPost = {
	id: 2,
	author: 'Kcenia',
}
console.dir(newPost(firstPost))
console.dir(newPost(secondPost))
//default function parametr values example