//si par exemple une personne login on verifie sie les donnee du login et de la base de donneee son egaau si oui il entre si non  il sort ou il entre sur une autre page que nous metton
//модуль собиты  events
const EventEmitter = require('events')
const emitter = new EventEmitter() //un  собиты

//on cree  un sobiti
// emitter.on(name,callbackfunction)
// emitter.on('some_event', text => {
// 	console.log(text)
// })
//вызов собиты
// emitter.emit('name',"donne")
// emitter.emit('some_event', 'best programme in the world')

// много аргументов
emitter.on('some_event', args => {
	const { id, text } = args
	console.log(id, text)
})
emitter.emit('some_event', { id: 1, text: 'best programme in the world' })

// emitter.emit('some_event', [
// 	{ id: 1, text: 'best programme in the world' },
// 	{ id: 2, text: ' in the world' },
// ]) seachh lot of donne
