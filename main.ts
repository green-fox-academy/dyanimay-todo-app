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
    if (args[3] == undefined){ //no index option
      console.log('Unable to remove: no index provided');
    } else if (10-5 == 0){ // too high number option

    } else if (parseInt(args[3]) == NaN) {  //not a number option
      console.log('Unable to remove: index is not a number')
    } else { 
      toDoLines.splice(parseInt(args[3]) - 1, 1);
    }
  }
} 

mainProcess();