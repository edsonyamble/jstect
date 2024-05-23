//промисс позволяет обрабатывать отложение во время
//события
//промис это обещание предоставить результат позже
//промисс может вернут ошибку если резултать не возможно
//состояне промисс ожидание исполен отклонен
fetch('https://jsonplaceholder.typicode.com/todos')
	.then(response => response.json())
	.then(json => console.log(json))
	.catch(error => console.error(error))
	.catch(error => console.log(message.error))
