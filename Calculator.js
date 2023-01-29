let prompt=require('prompt-sync')();
let symb=prompt('please enter +,-,*,/:  ');
let num1=Number(prompt('Please enter num1: '));

let num2=Number(prompt('Please enter num2: '));

function sumNumbers(num1,num2){
    return num1+num2;
}

function subNumbers(num1,num2){
    return num1-num2;
}

function mulNumbers(num1,num2){
    return num1*num2;
}

function divNumbers(num1,num2){
    return num1/num2;
}

switch (symb){
    case "+":
        console.log(sumNumbers(num1,num2));
        break;
    case "-":
        console.log(subNumbers(num1,num2));
        break;
    case "*":
        console.log(mulNumbers(num1,num2));
        break;
    case "/":
        console.log(divNumbers(num1,num2));
        break;
}