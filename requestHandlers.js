'use strict';

function start() {
  console.log('Request handler "start" was called');
  
  function sleep(milliSeconds) {
    let startTime = new Date().getTime();
    while (new Date().getTime() < start Time + milliSeconds);
  }
  
  sleep 10000;
  return 'Hello Start';
  
}

function upload() {
  console.log('Requeset handler "upload" was called.');
  return 'Hello Upload';
}

exports.start = start;
exports.updload = upload;