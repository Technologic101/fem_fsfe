const http = require('http');

http.createServer(function (req, res) {
res.write("<main><div style='display: flex; width: 100vw; height: 100vh; align-items: center; justify-content: center; font-family: serif;'><h1>Coming soon to Jacksonville!</h1></div></main>");
res.end();


}).listen(3000);

console.log("Server started");
