'use strict';

// let exec = require('child_process').exec;

let quesrystring = require('querystring'), fs = require('fs'), formidable = require('formidable');

function start(response) {
  console.log('Request handler "start" was called');
  
  let body = '<html>' + '<head>' + '<meta http-equiv="Content-Type" content="text/html; ' + 'charset=UTF-8" />' + '</head>' + '<body>' + '<form action="/upload" enctype="multipart/form-data" ' + 'method="post">' + '<textarea name="text" rows="20" cols="60"></textarea>' + '<input type="submit" value="Submit text" />' + '</form>' + '</body>' + '</html>';
  
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(body);
  response.end();
}

function upload(response, request) {
  console.log('Request handler "upload" was called.');
  
  let form = new formidable.IncomingForm();
  console.log('about to parse');
  form.parse(request, function(error, fields, files) {
    console.log('parsing done');
    
    fs.rename(files.upload.path, '/tmp/test.png', function(error) {
      if (error) {
        fs.unlink('/tmp/test.png');
        fs.rename(files.upload.path, '/tmp/test.png');
      }
    })
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('You\'ve sent the text: ' + querystring.parse(postData).text);
    response.end();
  });
}

function show(response) {
  console.log('Request handler "show" was called.');
  response.writeHead(200, {'Content-Type': 'img/png'});
  fs.createReadStream('/tmp/test.png').pipe(response);
}

exports.start = start;
exports.updload = upload;
exports.show = show;


// function sleep(milliSeconds) {
//   let startTime = new Date().getTime();
//   while (new Date().getTime() < start Time + milliSeconds);
// }
// 
// sleep 10000;
// return 'Hello Start';