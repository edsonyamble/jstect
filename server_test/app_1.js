const http = require("http");
//localhost:3500
//request req запросы  response res(что выходет в браузер)
http
  .createServer(function (req, res) {
    //console.log(req); alll запрсы
    console.log(req.url); //url
    console.log(req.method); //method
    console.log("sers is working Edson");
    res.setHeader("Content-type", "text/html;charset=utf-8;"); //переда
    // ифо что будет хтмл
    res.write("<h2>Hello world</h2>");//get browsers
    res.end();
  })
  .listen(3500); //create server port 3500
