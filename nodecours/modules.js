const { userName, sayHi } = require("./test.js");
console.log(userName);
console.log(sayHi("Edson"));
const os = require("os"); //permet de voir les lien du systeme os
console.groupCollapsed(os.platform(), os.release()); //platform and release
const random = require("ex-module");
console.log(random());
