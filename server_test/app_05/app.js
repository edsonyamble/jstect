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
        res.end();
        break;
      case "/about":
        console.log("about page");
        let data = fs.readFileSync("./public/about.html", {
          encoding: "utf-8",
          flag: "r",
        });
        res.write(data);
        res.end();
        break;
      default:
        if (url.includes("images")) {
          console.log("images+++");
          fs.readFile("./public" + url, {}, function (error, data) {
            if (error) {
            }
            console.log("get image");
            res.setHeader("Content-type", "image/png");
            res.write(data);
            res.end();
          });
        } else {
          console.log("404");
          res.write("<h1>404 page gggg</h1>");
          res.end();
        }
      // console.log("404");
      // res.write("<h1>404 page</h1>");
      // res.end();
    }
  })
  .listen(PORT); //create server port 3500
