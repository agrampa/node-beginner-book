'use strict';

let exec = require('child_process').exec;

function start(response) {
  console.log('Request handler "start" was called');
  
  let body = '<html>' + '<head>' + '<meta http-equiv="Content-Type" content="text/html; ' + 'charset=UTF-8" />' + '</head>' + '<body>' + '<form action="/upload" method="post">' + '<textarea name="text" rows="20" cols="60"></textarea>' + '<input type="submit" value="Submit text" />' + '</form>' + '</body>' + '</html>';
  
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write(body);
  response.end();
}

function upload(response) {
  console.log('Request handler "upload" was called.');
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello Upload');
  response.end();
}

exports.start = start;
exports.updload = upload;


// function sleep(milliSeconds) {
//   let startTime = new Date().getTime();
//   while (new Date().getTime() < start Time + milliSeconds);
// }
// 
// sleep 10000;
// return 'Hello Start';