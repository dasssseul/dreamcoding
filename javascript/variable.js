
// 1. Use strict
// strict 모드로 개발할 경우 
// 상식적인 범위에서 효율적으로 빠르게 자바스크립트 분석 가능
'use strict';


// 2. Variable (read, write)
// let (added in ES6)
// var (don't ever use this!)
// var은 아래에서 선언해도 오류 X, block scope 역시 없음

let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);


}
console.log(name);
console.log(globalName);

// 3. Constant (read only)
// 값을 선언함과 동시에 할당, 값 변경 불가능, immutable
// security, thread safety, reduce human mistakes

const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// number 타입을 이용해서 숫자 선언

const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string
const char ='c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;
console.log(`value: ${helloBob}, type: ${typeof helloBab}`);
console.log(`value: `+ helloBob + ` type: ` + typeof helloBob);

// boolean
const canRead = true;
const test = 3 < 1;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 == symbol2);
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 == gsymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object
const ellie = {name: 'ellie', age: 20};
ellie.age = 21;


// 5. Dynamic typing
// 프로그램이 동작할 때 할당된 값에 따라 타입이 변경될 수 있음

let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);

