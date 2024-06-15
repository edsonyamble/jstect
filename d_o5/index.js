const fs = require("fs");
//read json file and  convert object
const data = fs.readFileSync("./exemple_1.json", {
  encoding: "utf-8",
  flag: "r",
});
console.log(typeof data); //string
let dataObj = JSON.parse(data); //convert string to object
console.log(dataObj); //object
