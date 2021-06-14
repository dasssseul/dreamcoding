
// [드림코딩 엘리]
// 자바스크립트 4. 코딩의 기본, operator, if, for loop


// 1. String concatenation (문자열 연결)
console.log('my' + 'cat');
console.log('1' + 2); // 12
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operator
console.log(1 + 1); // 더하기
console.log(1 - 1); // 빼기
console.log(1 / 1); // 나누기
console.log(1 * 1); // 곱하기
console.log(5 % 2); // 나머지
console.log(2 ** 3); // 지수


// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`)
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`)


// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;


// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);


// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value
// 하나라도 앞에서 true가 나오면 그 자리에서 바로 true를 반환하고 멈춤
console.log(`or: ${value1 || value2 || check()}`); // True

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`); // False


function check(){
    for(let i = 0; i < 10; i++){
        //wasting time
        console.log('check');
    }
    return true;
}

// ! (not)
console.log(!value1); // False


// 7. Equality
// == loose equality, with type
const stringFive = '5';
const numberFive = 5;

console.log(stringFive == numberFive); // True
console.log(stringFive != numberFive); // False

// === strict equality, no type coversion
// 웬만하면 strict equality 사용할 것!
console.log(stringFive === numberFive); // False
console.log(stringFive !== numberFive); // True

// object equality by reference
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
// 각각 다른 레퍼런스가 저장되어 있기 때문에
console.log(ellie1 == ellie2); // False
console.log(ellie1 === ellie2); // False
// ellie1을 ellie3에 할당했기때문에
console.log(ellie1 === ellie3); // True


// equality - puzzler
console.log(0 == false); // True
console.log(0 === false); // False
console.log('' == false); // True
console.log('' === false); // False
console.log(null == undefined); // True
console.log(null === undefined); // False


// 8. Conditional operators: if
// if, else if, else
const name = 'df';
if(name === 'ellie'){
    console.log('Welcome, Ellie!');
}else if (name === 'coder'){
    console.log('You are amazing coder');
}else {
    console.log('unknown');
}


// 9. Ternary operator: ?
// condition ? value1 : value2;
// True면 yes, False면 no 반환
console.log(name === 'ellie' ? 'yes' : 'no');


// 10. Switch statement
const browser = 'IE';
switch (browser){
    case 'IE':
        console.log('go away');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you');
        break;
    default:
        console.log('same all!');
        break;
}


// 11. Loops
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}


// do ~ while : 블럭을 먼저 실행한 다음에 조건 확인
do {
    console.log(`do while: ${i}`);
    i--;
}while(i>0);


// for loop, for(begin; condition; step)
for(let i = 3; i > 0; i = i-2){
    console.log(`inline variable for: ${i}`);
}

// Quiz
for(let i = 0; i < 11; i++){
    if (i%2 !== 0){
        continue;
    }
    console.log(`q1. ${i}`);
}

for(let i = 0; i < 11; i++){
    if (i > 8) {
        break;
    }
    console.log(`q2. ${i}`);
}

