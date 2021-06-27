
// [드림코딩 엘리]
// 자바스크립트 11. 비동기 처리의 시작 콜백 이해하기, 콜백 지옥 체험 😱

'use strict';


// 자바스크립트는 동기적이다(synchronous)
// hoisting이 된 이후부터 코드가 하나하나씩 동기적으로 실행
// hoisting: 변수, 함수 선언들이 자동적으로 맨 위에서 실행됨

// 1. synchronous vs asynchronous

console.log('1');
// 비동기(asynchronous) 예시
// setTimeout() : 일정 시간 후에 특정 코드, 함수를 실행시키고 싶을 때 사용
// 콜백 함수는 브라우저에게 1초 뒤에 '2'를 불러와줘라고 요청
setTimeout(()=> console.log('2'), 1000);
console.log('3');

// 실행 결과
// 1, 3, 2

// 콜백은 비동기적일 때만 쓰는 것은 아니다
// Synchronous callback (동기적 콜백)
function printImmediately(print){
    print();
};
printImmediately(() => console.log('hello'));

// 실행 결과
// 1, 3, hello, 2

// Asynchronous callback (비동기적 콜백)
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
};
printWithDelay(() => console.log('async callback'), 2000);

// 실행 결과
// 1, 3, hello, 2, async callback


// 콜백 지옥
// 콜백 함수를 익명 함수로 전달하는 과정이 반복되어 
// 코드의 들여쓰기 수준이 감당하기 힘들 정도로 깊어지는 현상 

// 2. Callback Hell example (콜백 지옥 예시)

// 클래스 구현
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



