const fs = require("fs");

fs.readFile("./test.txt", "utf-8", (error, data) => {
  //   fs.mkdirSync("./files", () => {}); //create folder

  fs.writeFileSync(
    "./files/test2.txt",
    `${data}New texteeeeyyyy!`,
    { flag: "w" },
    (error) => {
      error ? console.log(error) : null;
    }
  ); //copy file and add donne
});

// setTimeout(() => {
//   if (fs.existsSync("./files/test2.txt")) {
//     fs.unlink("./files/test2.txt", () => {});//delete file
//   }
// }, 4000);
// setTimeout(() => {
//   if (fs.existsSync("./files")) {
//     fs.rmdir("./files", () => {});//delle folder
//   }
// }, 6000);

//console.log("Just test!");
