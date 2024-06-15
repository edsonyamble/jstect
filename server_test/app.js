const http = require("http");
//localhost:3500
//request req запросы  response res(что выходет в браузер)
http
  .createServer(function (request, response) {
    console.log("sers is working Edson");
    response.end("1");
  })
  .listen(3500); //create server port 3500
