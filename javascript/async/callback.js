
// [드림코딩 엘리]
// 자바스크립트 11. 비동기 처리의 시작 콜백 이해하기, 콜백 지옥 체험 😱

'use strict';


// 자바스크립트는 동기적이다(synchronous)
// hoisting이 된 이후부터 코드가 하나하나씩 동기적으로 실행
// hoisting: 변수, 함수 선언들이 자동적으로 맨 위에서 실행됨

console.log('1');
// 비동기(asynchronous) 예시
// 콜백 함수는 브라우저에게 1초 뒤에 나의 함수를 불러와줘라고 요청
setTimeout(()=> console.log('2'), 1000);
console.log('3');

// 실행 결과
// 1, 3, 2

// 콜백은 비동기적일 때만 쓰는 것은 아니다
// Synchronous callback
function printImmediately(print){
    print();
};
printImmediately(() => console.log('hello'));

function printImmediately2(message){
    console.log(message);
};
printImmediately2('hello');

// 실행 결과
// 1, 3, hello, 2

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
};
printWithDelay(() => console.log('async callback'), 2000);

// 실행 결과
// 1, 3, hello, 2, async callback


// Callback Hell example
class userStorage {
    loginUser(id, password, onSuccess, onError){
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if (user === 'ellie'){
                onSuccess({name: 'ellie', role: 'admin'});
            }else{
                onError(new Error('no access'));
            }
        }, 1000);

    }
}

const UserStorage = new userStorage();
// 사용자에게 데이터 받아오기
const id = prompt('enter your id');
const password = prompt('enter your password');
// 로그인하기
UserStorage.loginUser(
    id, 
    password, 
    (user) => {
        // 성공 시 데이터 전달
        UserStorage.getRoles(
            user, 
            (userWithRole) => {
                // 성공 시 이름과 역할 출력
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            (error) => {console.log('error')}
        )}, 
    (error) => {console.log('error')
});


