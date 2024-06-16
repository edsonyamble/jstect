const http = require("http");
const fs = require("fs");
const PORT = 3500;
http
  .createServer((req, res) => {
    const url = req.url;
    res.setHeader("Content-type", "text/html;charset=utf-8;"); //кодировка
    switch (url) {
      case "/":
        console.log("main page");
        res.write("<h1>hello</h1>");
        break;
      case "/about":
        console.log("about page");
        let data = fs.readFileSync("./public/about.html", {
          encoding: "utf-8",
          flag: "r",
        });
        res.write(data);
        break;
      default:
        if (url.includes("images")) {
          console.log("images+++");
          let data = fs.readFileSync("./public" + url);
          res.setHeader("Content-type", "image/png");
          res.write(data);
        } else {
          console.log("404");
          res.write("<h1>404 page</h1>");
        }
        console.log("404");
        res.write("<h1>404 page</h1>");
    }
    res.end();
  })
  .listen(PORT); //create server port 3500
