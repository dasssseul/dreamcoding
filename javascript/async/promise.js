
'use strict';

// Promise is a JavaScript object for asynchronous operation.
// 1. state 성공했는지 실패했는지의 상태
// state : pending -> fulfilled or rejected

// 2. 정보 제공자와 정보 소비자
// Producer vs Consumer

// 1. Producer

// 새로운 promise가 만들어진 순간, 그 안에 우리가 전달한 executor라는 콜백 함수가 자동적으로 실행됨
const promise = new Promise((resolve, reject)=>{
    // doing some heavy work(network, read files)
    // promise가 만들어지는 순간 바로 실행
    console.log(`doing domething...`);
    setTimeout(()=>{
        resolve('ellie');
        // Error는 자바스크립트 내에 있는 object
        // reject(new Error('no network'));
    }, 2000);
});

// 2. Consumers: then, catch, finally
// then : promise가 잘 수행이 되어서 resolve 콜백 함수에서 전달된 ellie라는 값이 value로 전달됨
promise
    .then((value)=>{
        console.log(value);
    })
    // catch : 실패한 에러를 받아와서 처리
    .catch(error => {
        console.log(error);
    })
    // finally : 성공 실패에 상관없이 마지막에 출력하고 싶을 때
    .finally(()=>{
        console.log('finally');
    })


// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject)=>{
            setTimeout(() => resolve(num-1),1000);
        });
    })
    .then(num => console.log(num));


// 4. Error Handling
const getHen = () => 
    new Promise((resolve, reject)=>{
        setTimeout(() => resolve('🐓'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject)=>{
        setTimeout(() => reject(new Error(`error! ${hen} => 🐣`), 1000));
    });
const grow = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🐥`), 1000);
    });

getHen()
    .then(getEgg)
    .catch(error => {
        return '🥖'
    })
    .then(grow)
    .then(console.log);