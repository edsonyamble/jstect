const userName = "Edson";
const lastName = "Yamble";
const all = `Hello,my nameis ${userName}`;
const sayHi = `Hello, my name is ${userName} and ${lastName}`;
const customName = (userName, lastName) => {
  console.log(`Hello, my name is ${userName} and ${lastName}`);
};
console.log(all);
console.log(sayHi);
customName("Kcenia", lastName);
