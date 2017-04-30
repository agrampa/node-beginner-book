'use strict';

var http = require('http');
let url = require('url')

//from page 15 and 17, then expanded throughout
function start(route, handle) {
function onRequest(request, response) {
    let pathname = url.parse(request.url).pathname;
    console.log('Request for ' + pathname + 'received.');
    
    route(handle, pathname);
    
    response.writeHead(200, {'Content-Type': 'text/plain'});
    let content = route(handle, pathname);
    response.write(content);
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log('Server has started');
}

exports.start = start;




//from page 10
// http.createServer(function(request, response) {
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.write('Hello World');
//   response.end();
// }).listen(8888);