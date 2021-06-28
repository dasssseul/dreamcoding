
// [드림코딩 엘리]
// 자바스크립트 13. 비동기의 꽃 JavaScript와 await, 유용한 Promise APIs

// async & await
// promise 체이닝을 계속하면 코드가 난잡해지기 때문에
// promise를 좀 더 간편하고, 간결하고, 동기적으로 실행되는 것처럼 보이게 만들어줌

// 1. async
// 사용자의 데이터를 백엔드에서 받아오는 함수
function fetchUser(){
    return new Promise((resolve, reject)=>{
        // do network request in 10 secs...
        resolve('ellie');
    });
};

// async 사용 시 promise 쓰지 않아도 자동적으로 promise로 변환됨
async function fetchUser2(){
    // do network request in 10 secs...
    return 'ellie';
};

// 호출
const user = fetchUser();
const user2 = fetchUser2();
user.then(console.log);
user2.then(console.log);

// 2. await
// async가 붙은 함수 안에서만 await 사용 가능
function delay(ms){
    // 정해진 ms가 지나면 resolve를 호출하는 Promise 리턴
    return new Promise(resolve => setTimeout(resolve, ms));
};

async function getApple(){
    // await : delay가 끝날 때까지 기다렸다가 사과 리턴
    await delay(1000);
    return '🍎';
};

async function getBanana(){
    // delay가 끝날 때까지 기다렸다가 바나나 리턴
    await delay(2000);
    return '🍌';
};

// 체이닝의 경우 
function getBanana2(){
    return delay(1000)
    .then(()=>'🍌');
};

async function pickFruits(){
    // 사과와 바나나 수행을 병렬적으로 하고 싶다면
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    // 1초만에 리턴 값 출력
    return `${apple} + ${banana}`
}

pickFruits().then(console.log);

// 3. useful Promise APIs
// 위의 코드를 간단하게 만들기_Promise.all
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log)

// 어떤 것이든 상관없이 빨리 가져와지는 첫번째 과일을 반환
// Promise.race
function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);


// Callback Hell example to promise
class UserStorage {
    loginUser(id, password){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ){
                    resolve(id);
                }else{
                    reject(new Error('not found'));
                }
            }, 2000);
            
        });
    }

    getRoles(user){
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                if (user === 'ellie'){
                    resolve({name: 'ellie', role: 'admin'});
                }else{
                    reject(new Error('no access'));
                }
            }, 1000);

        });
    }
}

const userStorage = new UserStorage();
// 사용자에게 데이터 받아오기
const id = prompt('enter your id');
const password = prompt('enter your password');

// 로그인하기
// userStorage.loginUser(id, password)
//     .then(userStorage.getRoles)
//     .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
//     .catch(console.log);

// 로그인하기 to async
async function practiceAsync(){
    const login = await userStorage.loginUser(id, password);
    const roles = await userStorage.getRoles(login);
    return `Hello ${roles.name}, you have a ${roles.role} role`;
};

practiceAsync().then(alert);

