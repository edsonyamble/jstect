const EventEmitter = require('events')
// const emitter = new EventEmitter()
//2 констрктор evenemitter в log app_2 не работают вместе поэтому исползуем класс
class Logger extends EventEmitter {
	log = msg => {
		console.log(msg)
		this.emit('some_event', { id: 1, text: 'best programme in the world' })
	}
}

// const log = msg => {
// 	console.log(msg)
// 	emitter.emit('some_event', { id: 1, text: 'best programme in the world' })
// }
//on peut utilser sans le exxtends
// module.exports = Logger

// const EventEmitter = require('events')
// const util = require('util')

// class Logger {
// 	log = msg => {
// 		console.log(msg)
// 		this.emit('some_event', { id: 1, text: 'Event test text!' })
// 	}
// }

// util.inherits(Logger, EventEmitter)

// module.exports = Logger
