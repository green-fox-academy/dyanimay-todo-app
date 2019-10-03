'use strict';

const fs = require ('fs');
const args: string[] = process.argv;
const usageInfo: string = fs.readFileSync('usageInfo.txt', 'utf-8');

let mainProcess = () => {
  if (args.length == 2) {
    console.log(usageInfo);
  } else if (args[2] == '-l') {
    console.log('I am listing all the todos.');
  } else {
    console.log('this is the error handling');
  }
}

mainProcess();