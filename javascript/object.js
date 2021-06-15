
// [드림코딩 엘리]
// 자바스크립트 7. 오브젝트 넌 뭐니?


// Objects
// 자바스크립트의 데이터 타입 중 하나 
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object
// object = { key : value }; 오브젝트는 키와 변수의 집합체

'use strict';

// 1. Literals and properties
const name = 'ellie';
const age = 4;
print(name, age);
// 조금 더 인자들이 많아지게 되면 추가할 것들이 많아져 관리하기 힘듦
function print(name, age) {
    console.log(name);
    console.log(age);
}

// 오브젝트를 만드는 방법
const obj1 = {}; // object literal
const obj2 = new Object(); // object constructor


// 개선하고자 오브젝트 사용
const ellie = { name: 'ellie', age: 4};

function print2(person){
    console.log(person.name);
    console.log(person.age);
}

print2(ellie);

// with JavaScript magic(dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties
// key는 항상 string 타입으로 지정해서 받아올 것
console.log(ellie.name);
console.log(ellie['name']); // Computed properties
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key){
    console.log(obj[key]);
}
printValue(ellie, 'name');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dave', age: 4};
const person4 = new Person('ellie', 30);

console.log(person4);

// 4. Constructor function
function Person(name, age){
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: property existence check (key in obj)
// 해당하는 키가 오브젝트 안에 있는지 확인
console.log('name' in ellie); // true
console.log('random' in ellie); // false

// 6. for..in vs for..of
// for (key in obj)
for (let key in ellie){
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for(let value of array){
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3 ...])
const user = { name: 'ellie', age: '20'};
const user2 = user;
// 아래의 경우 user의 name도 coder로 변경됨
user2.name = 'coder';
console.log(user); // {name: "coder", age: "20"}

// 복사하는 방법
// old way
const user3 = {};
for (let key in user){
    user3[key] = user[key];
}
console.log(user3);

// Object.assign(dest, [obj1, obj2, obj3 ...])
const user4 = {};
Object.assign(user4, user)
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue
console.log(mixed.size); //big

