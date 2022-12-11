const fs = require("fs");
const http = require("http");

fs.writeFile("index.html","<h1>Hello World </h1> <p>This is Prasad...</p>",(err)=> {
    console.log(err);
})
const server = http.createServer((req,res) => {
    fs.readFile("index.html",{encoding:"utf-8"},(err,data)=> {
        res.writeHead(200,{"Content-type": "text/html" })
      res.write(data);
    res.end();
    })
})
server.listen(5000,() => console.log("server is up on 5000 port"));

// http.createServer(function (req, res) {
//     fs.readFile('index.html', function(err, data) {
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//     res.end();
//     });
//   }).listen(5000);

// ---------------------------using pipe (streaming)------------------
// http.createServer(function(request, response) {
//   response.writeHead(200, {'Content-Type': 'text/html'});
//   var file = fs.createReadStream('index.html');
//   file.pipe(response);
// }).listen(5000);
// console.log('listening on port 5000...');
    