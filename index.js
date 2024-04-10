// JSON.parse() //это чтобы конвертивировать строка джейсон в обект джаваскрипт
// JSON.stringify()//это чтобы конвертивировать обект джавасерипт  на строка джейсон
const posts = {
	title: 'Edson',
	likeQty: 5,
}
JSON.stringify(posts) //получение формат строка джейсон
const stringgo = JSON.stringify(posts)
JSON.parse(stringgo)//получение формат обект джаваскрипт 



//эти методы работает на сервере или прям в консоле браузере 
