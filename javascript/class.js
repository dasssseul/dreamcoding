
// [드림코딩 엘리]
// 자바스크립트 6. 클래스와 오브젝트의 차이점(class vs object), 객체지향 언어 클래스 정리


'use strict';
// class: template
// object: instance of a class


// 1. Class declarations
class Person{
    // constructor (생성자)
    constructor(name, age){
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak(){
        // this는 생성된 오브젝트
        console.log(`${this.name}: hello!`);
    }
};

// 새로운 오브젝트 생성
const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();


// 2. Getter and setters
// 커피 자판기 예시
// class - 커피 자판기
// property - 커피의 수 : 음수는 불가능
// 사용자가 -1으로 설정해도(getter: -1) 0으로 변경(setter: 0)해줘야 함
// 개수 수정은 불가능해야하기 때문에 private로 지정 -> encapsulation
// method - 동전 넣기, 커피 만들기


class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(value){
        // if (value < 0){
        //     throw Error(`age can not be negative`);
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);


// 3. Fields (public, private)
class Experiment{
    // 외부에서 접근 가능
    publicField = 2;
    // 클래스 내부에서만 보여지고, 변경 가능
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined


// 4. Static properties and methods
// static : 오브젝트에 상관없이 클래스가 가지고있는 고유의 값, method 지정
class Article{
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
// console.log(article1.publisher()); 오류 발생
console.log(Article.publisher); // Dream Coding
Article.printPublisher(); // Dream Coding


// 5. Inheritance
// 상속
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color!`);
    }

    getArea(){
        return this.width * this.height;
    }
};

class Rectangle extends Shape{};
// 메소드를 오버라이딩해서 호출 가능
class Triangle extends Shape{
    getArea(){
        return (this.width * this.height) / 2 ;
    }

    draw(){
        // super를 이용해서 부모의 메소드도 호출 가능
        super.draw();
        console.log('*');
    }
};

const rectangle = new Rectangle(20, 20, 'blue');
const triangle = new Triangle(20, 20, 'pink');
rectangle.draw();
triangle.draw();
console.log(rectangle.getArea());
console.log(triangle.getArea());


// 6. Class checking: instance of
console.log(triangle instanceof Triangle); // True
console.log(triangle instanceof Rectangle); // False
console.log(rectangle instanceof Shape); // True
console.log(rectangle instanceof Object); // True


