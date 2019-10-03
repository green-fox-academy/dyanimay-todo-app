'use strict';

const fs = require ('fs');
const args: string[] = process.argv;
const usageInfo: string = fs.readFileSync('usageInfo.txt', 'utf-8');

const toDo: string = fs.readFileSync('todo_list.txt', 'utf-8');
const toDoLines: string[] = toDo.split('\n'); //split the text message by new lines

let mainProcess = () => {
  if (args.length == 2) {
    console.log(usageInfo);
  } else if (args[2] == '-l') {
    if (toDo == '') {
      console.log('No todos for today! :)');
    } else {
    for (let i: number = 0; i < toDoLines.length; i++){
      console.log((i+1) + ' - ' + toDoLines[i]);
      }
    }
  } else if (args[2] == '-a') {
    if (process.argv[3] == ''){
      console.log('Unable to add. No task was provided!');
    } else {
      fs.appendFileSync('todo_list.txt', '\n' + process.argv[3] ,'utf-8');
      console.log(toDo);
    }
  }
} 

mainProcess();