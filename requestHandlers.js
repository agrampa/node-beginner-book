'use strict';

let exec = require('child_process').exec;

function start(response) {
  console.log('Request handler "start" was called');
  
  exec('ls -lah', function(error, stdout, stderr) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(stdout);
    response.end();
  });
}

function upload(response) {
  console.log('Requeset handler "upload" was called.');
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