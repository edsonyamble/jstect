//промисс позволяет обрабатывать отложение во время
//события
//промис это обещание предоставить результат позже
//промисс может вернут ошибку если резултать не возможно
//состояне промисс ожидание исполен отклонен
const getData = url =>
	new Promise((resolve, reject) =>
		fetch(url)
			.then(response => response.json())
			.then(json => resolve(json))
			.catch(error => reject(error))
	)
getData('https://jsonplaceholder.typicode.com/todos')
	.then(data => console.log(data))
	.catch(error => console.error(error))
