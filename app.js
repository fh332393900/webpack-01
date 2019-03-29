// const http =  require('http');
//  http.createServer(function (request,response) {
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//      response.end('Hello Node\n');
//  }).listen(8888);
//  console.log('Server running at http://127.0.0.1:8888/');

var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(80);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.on('connection', function (socket) {
  socket.emit('news', { 
      name:"nodeJS",
      hello: 'world',
      dataList:[
          {
              text:111111111
          },
          {
            text:2222222
          },
          {
            text:333333
          }
      ]
    });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});