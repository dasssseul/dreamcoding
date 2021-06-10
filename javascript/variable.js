
// 1. Use strict
// strict 모드로 개발할 경우 
// 상식적인 범위에서 효율적으로 빠르게 자바스크립트 분석 가능

'use strict';


// 2. Variable (read, write)
// let (added in ES6), mutable

// var (don't ever use this!) 절대 사용하지 말 것!
// var은 선언하기 전에 값을 할당해도 에러가 발생하지 않음 
// var hoisting : 어디에서 선언하느냐에 상관없이 파일 제일 위로 선언을 끌어올려줌
// block scope가 없기 때문에 어디에서나 사용 가능 -> 선언하지도 않은 값들이 할당되어 오기 때문에 불편

// block scope
// 블럭을 쓰고 변수를 선언하면 블럭 밖에서는 사용 불가능
// 글로벌 변수는 항상 메모리에 탑재되어있어서 어디서든 사용 가능


let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name); // ellie
    name = 'hello';
    console.log(name); // hello


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
// number 타입을 명확히 명시할 필요없음

const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1 / 0; 
const negativeInfinity = -1 / 0; 
const nAn = 'not a number' / 2; 
console.log(infinity); // infinity
console.log(negativeInfinity); // -infinity
console.log(nAn); //NaN

// string
// 한 개의 글자든 여러개의 글자든 모두 string 타입

const char ='c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;
console.log(`value: ${helloBob}, type: ${typeof helloBab}`);
console.log(`value: `+ helloBob + ` type: ` + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value

const canRead = true;
const test = 3 < 1;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null

let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
// 선언은 되었지만 아무런 값이 할당되지 않은 상태

let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol
// 고유한 식별자가 필요하거나 우선순위를 주고 싶을 때 사용

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2); // true

// symbol 출력 시 string으로 변환해서 출력해야함
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object
const ellie = {name: 'ellie', age: 20};
ellie.age = 21;


// 5. Dynamic typing
// 프로그램이 동작할 때 할당된 값에 따라 타입이 변경될 수 있음

let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`); // string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); // number



