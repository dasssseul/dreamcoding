
// [드림코딩 엘리]
// 자바스크립트 12.프로미스 개념부터 활용까지 JavaScript Promise

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
userStorage.loginUser(id, password)
    .then(userStorage.getRoles)
    .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log);

