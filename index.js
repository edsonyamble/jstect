const objectA = {
	a: 10,
	b: true,
}
const copyOFA = objectA
copyOFA.a = 20
console.table(objectA)
copyOFA.c = 'abc'
console.table(objectA)
delete objectA.c
console.table(copyOFA)