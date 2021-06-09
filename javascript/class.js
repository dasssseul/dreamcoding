'use strict';
// class: template
// object: instance of a class

// 1. Class declarations
class Person{
    // constructor
    constructor(name, age){
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak(){
        console.log(`${this.name}: hello!`);
    }
};

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();


// 2. Getter and setters
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
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);


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
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Rectangle);
console.log(rectangle instanceof Shape);
console.log(rectangle instanceof Object);