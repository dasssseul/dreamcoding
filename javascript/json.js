
// [드림코딩 엘리]
// 자바스크립트 10. JSON 개념 정리와 활용 방법 및 유용한 사이트 공유 JavaScript JSON


// HTTP 
// 클라이언트가 서버와 어떻게 통신할 수 있는지를 규약한 프로토콜 중 하나
// 클라이언트가 서버에게 데이터를 request, 서버는 클라이언트에게 데이터를 response

// AJAX (에이작스)
// 웹페이지에서 동적으로 서버에게 데이터를 주고받을 수 있는 기술
// 대표적으로는 브라우저 APIS에서 제공하는 오브젝트 중 하나인 XHR(XMLHttpRequest) 

// JSON(JavaScript Object Notation)
// 브라우저뿐만 아니라 모바일에서 서버와 데이터를 주고받을 때, 오브젝트를 파일 시스템에 저장할 때도 사용
// 데이터를 주고 받을 때 쓸 수 있는 가장 간단한 파일 포맷
// key와 value로 구성
// 프로그래밍 언어나 플랫폼에 상관없이 사용 가능!

// JSON 공부 방법
// 1. object를 어떻게 직렬화해서 json으로 변환할지
// 2. 직렬화된 json 데이터를 어떻게 object로 변환할지

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

// 배열 변환
json = JSON.stringify(['apple', 'banana']);
console.log(json); // ["apple", "banana"];

// 오브젝트 변환
const rabbit = {
    name: 'tori',
    size: null,
    birthDate: new Date(),
    // 자바스크립트에만 있는 특별한 데이터도 JSON에 포함되지 않음
    // symbol: Symbol("id"),
    // 함수는 오브젝트에 있는 데이터가 아니기때문에 제외됨
    jump: () => {
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);
// {"name":"tori","size":null,"birthDate":"2021-06-18T02:51:01.916Z"}

// name만 JSON으로 변환하고 싶다면
json = JSON.stringify(rabbit, ['name']);
console.log(json); // {"name":"tori"}

// callback 함수 이용_세밀한 설정 가능
json = JSON.stringify(rabbit, (key, value)=>{
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
})
console.log(json);


// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json);
console.log(obj); // {name: "tori", size: null, birthDate: "2021-06-18T03:01:02.410Z"}
rabbit.jump(); // can jump!
// rabbit을 json으로 변환할 때 함수는 제외되었기 때문에
// json을 다시 obj로 변환할 때 함수는 포함 X
// obj.jump(); 오류 발생

console.log(rabbit.birthDate.getDate()); // 18
// string으로 변환되어 받아졌기 때문에 오류 발생
// console.log(obj.birthDate.getDate());

// reviver이라는 callback 함수 이용
const obj2 = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
})

console.log(obj2);
console.log(obj2.birthDate.getDate()); // 18


