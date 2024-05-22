//class.. позваляет создавать протототип для обекты
class Comment {
	constructor(text) {
		this.text = text
		this.voteQty = 0
	}
	upvote() {
		this.voteQty += 1
	}
}
const firstComment = new Comment('first') //create new exempliar class
firstComment.upvote()
console.log(firstComment.voteQty)
firstComment.upvote()
console.log(firstComment.voteQty)
