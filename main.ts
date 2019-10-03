'use strict';

import { parse } from "path";

const fs = require ('fs');
const args: string[] = process.argv;
const usageInfo: string = fs.readFileSync('usageInfo.txt', 'utf-8');

let toDo: string = fs.readFileSync('todo_list.txt', 'utf-8');
let toDoLines: string[] = toDo.split('\n'); //split the text message by new lines

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
    if (process.argv[3] == undefined){
      console.log('Unable to add. No task was provided!');
    } else {
      fs.appendFileSync('todo_list.txt', '\n' + args[3] ,'utf-8');
      toDo = fs.readFileSync('todo_list.txt', 'utf-8');
      console.log(toDo);
    }
  } else if (args[2] == '-r') {
    if (process.argv[3] == undefined){ //no index option - it works
      console.log('Unable to remove: no index provided');
    } else if (parseInt(process.argv[3]) > toDoLines.length){ // too high number option - it works
      console.log('Unable to remove: index is out of bound');
    } else if (isNaN(parseInt(process.argv[3]))) {  //not a number option - it works
      console.log('Unable to remove: index is not a number')
    } else { 
      toDoLines.splice(parseInt(process.argv[3]) - 1, 1);
      fs.writeFileSync('todo_list.txt', toDoLines.join('\n'), 'utf-8'); //it works now
    }
  } else if (args[3] != '-l' || args[3] != '-r' || args[3] != '-c' || args[3] != '-a') {
    console.log(usageInfo);
  }
} 

mainProcess();