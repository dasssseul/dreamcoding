
// [드림코딩 엘리]
// 자바스크립트 5. Arrow Function은 무엇인가? 함수의 선언과 표현


// 1. Function declaration
// 하나의 함수는 한 가지의 일만 하도록 작성
// 자바스크립트에서 function은 object이다

'use strict';

function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}

log('Hello'); // Hello
log(1234); // 1234


// 2. Parameters
function changeName(obj){
    obj.name = 'coder';
}
const ellie = { name: 'ellie'};
changeName(ellie);
console.log(ellie); // { name: 'coder'}


// 3. Default parameters
// 디폴트 값 작성
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!'); // Hi! by unknown


// 4. Rest parameters
// i개의 값이 담겨있는 배열
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
    let message = 'hello'; 
    console.log(message); // 지역 변수, 안에서만 접근 가능
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
// 조건이 맞지 않을 때는 빨리 return을 해서 함수 종료
// 조건이 맞을 때 함수 실행
function upgradeUser(user){
    if(user.point<=10){
        return;
    }
    // long upgrade logic...
}


// 1. Function expression
// 함수가 선언함과 동시에 호출
// 함수가 선언되기 이전에 호출 가능(hoisting)
const print = function(){ // anonymous function(이름없는 함수)
    console.log('print');
}
print();
const printAgain = print;
printAgain();


// 2. Callback function using function expression
// 조건에 맞으면 printYes 호출, 맞지않으면 printNo 호출
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
// 이름이 있는 함수 -> 디버깅시 좋음
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

// 함수를 간결하게 만들어주는 =>
const simplePrint2 = () => console.log('simplePrint!');
const add = (a, b) => a+b;


// IIFE: Immediately Invoked Function Expression
// 함수를 선언함과 동시에 바로 호출하고 싶을 때
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
    }else if(command === 'multiply'){
        return a*b;
    }else if(command === 'remainder'){
        return a%b;
    }
    else{
        return undefined;
    }
};

console.log(calculate('add', 1, 3));


