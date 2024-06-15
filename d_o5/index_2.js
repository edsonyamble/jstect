const fs = require("fs");
//write json file
const obj = {
  course: "node js 2024",
  name: "Edson",
  old: "31",
};
const test = fs.writeFileSync("./exemple_3.json", JSON.stringify(obj), {
  encoding: "utf-8",
  flag: "w",
});
console.log(typeof test);
