
// [드림코딩 엘리]
// 자바스크립트 8. 배열 제대로 알고 쓰자. 자바스크립트 배열 개념과 APIs 총정리


'use strict';

// Array 🎉

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌']; 
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits){
    console.log(fruit);
};

// c. forEach
// 배열 안에 들어있는 value들마다 내가 전달한 함수 출력
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('🥝','🍉');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('🍇');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
console.log(fruits);

// note!! shift와 unshift는 push와 pop보다 매우 느림!!
// 가능하면 push와 pop을 사용할 것

// splice: remove an item by index position
fruits.push('🍍','🥥','🍒');
console.log(fruits)
// 몇 개를 지울건지 정하지 않으면 지정한 인덱스부터 끝까지 지움
fruits.splice(1, 1);
console.log(fruits);
// 인덱스 1의 값을 지우고 '🥭'와 '🍏'를 삽입
fruits.splice(1, 1, '🥭','🍏');
console.log(fruits);

// combine two arrays
const vegitables = ['🥕', '🥦'];
const newfruitvegi = fruits.concat(vegitables);
console.log(newfruitvegi);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎')); // 0
console.log(fruits.indexOf('🍒')); // 5
console.log(fruits.indexOf('🍉')); // 없을 경우 -1

// includes
console.log(fruits.includes('🥥')); // true
console.log(fruits.includes('🍉')); // false

// lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎')); // 0
console.log(fruits.lastIndexOf('🍎')); // 6



