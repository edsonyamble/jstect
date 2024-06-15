const http = require("http");
const PORT = 3500;
http
  .createServer((req, res) => {
    const url = req.url;
    switch (url) {
      case "/":
        console.log("main page");
        res.write("<h1>hello</h1>");
        break;
      case "/contact":
        console.log("contact page");
        res.write("<h1>hello contact</h1>");
        break;
      default:
        console.log("404");
        res.write("<h1>404 page</h1>");
    }
    res.end();
  })
  .listen(PORT); //create server port 3500
