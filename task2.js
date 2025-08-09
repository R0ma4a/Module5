const prompt = require('prompt-sync')();

let num = prompt("Please enter a number: ");

if(num>0){
    console.log("The entered number, " + num + ", is positive");
  } else if(num<0){
    console.log("The entered number, " + num + ", is negative");
  } else if (num==0) {
    console.log("The entered number, " + num + ", is zero");
  } else {
    console.log("The input, " + num + ", seems to be invalid, please try again");
  }