const fnWithError = () => {
throw new Error ('Error some')//call error 
}
fnWithError()//Error some
console.log('continue...')