// 1. Function declaration
'use strict';

function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log('Hello');
log(1234);


// 2. Parameters
function changeName(obj){
    obj.name = 'coder';
}
const ellie = { name: 'ellie'};
changeName(ellie);
console.log(ellie);


// 3. Default parameters
// 디폴트 값 작성
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');


// 4. Rest parameters
function printAll(...args){
    for(let i = 0; i < args.length; i++){
        console,log(args[i]);
    }

    for(const arg of args){
        console.log(arg);
    }
}
printAll('dream', 'coding', 'ellie');


// 5. Local scope
let globalMessage = 'global'; // 전역 변수
function printMessage(){
    let message = 'hello'; // 지역 변수
    console.log(message);
    console.log(globalMessage);
}
printMessage();


// 6. Return a value
// return이 정의되어있지 않은 함수들은 
// return undefined가 들어가있는 것과 같다
function sum(a,b){
    return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1,2)}`);


// 7. Early return, early exit

//bad
function upgradeUser(user){
    if(user.point > 10){
        //long upgrade logic...
    }
}

//good
function upgradeUser(user){
    if(user.point<=10){
        return;
    }
    // long upgrade logic...
}


// 1. Function expression
// 함수가 선언되기 이전에 호출해도 가능 
const print = function(){
    console.log('print');
}
print();
const printAgain = print;
printAgain();


// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if (answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
};

// anonymous function
// 이름이 없는 함수
const printYes = function(){
    console.log('Yes!');
};

// named function
const printNo = function print(){
    console.log('No!');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


// Arrow function
// always anonymous
const simplePrint = function(){
    console.log('simplePrint!');
};

const simplePrint2 = () => console.log('simplePrint!');
const add = (a, b) => a+b;


// IIFE: Immediately Invoked Function Expression
// 함수 선언 후 바로 호출하고 싶을 때
(function hello(){
    console.log('IIFE');
})();



// Quiz
function calculate(command, a, b){
    if (command === 'add'){
        return a+b;
    }else if(command === 'substract'){
        return a-b;
    }else if(command === 'divide'){
        return a/b;
    }else if(command === 'multiple'){
        return a*b;
    }else{
        return undefined;
    }
};

console.log(calculate('add', 1, 3));