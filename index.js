//class.. позваляет создавать протототип для обекты
class Comment {
	contructor(text) {
		this.text = text
		this.voteQty = 0
	}
	upvote() {
		this.voteQty += 1
	}
}
const firstComment = new Comment('first comment') //create new exempliar class
console.log(firstComment)
console.log(firstComment instanceof Object)//affillation 