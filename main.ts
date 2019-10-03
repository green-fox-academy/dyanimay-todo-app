'use strict';

const fs = require ('fs');
const args: string[] = process.argv;

let mainProcess = () => {
  if (args.length == 2) {
    console.log('this is without arguments, help me');
  } else if (args[2] == '-l') {
    console.log('I am listing all the todos.');
  } else {
    console.log('this is the error handling');
  }
}

mainProcess();
console.log('hi');