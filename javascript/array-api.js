
// [드림코딩 엘리]
// 자바스크립트 9. 유용한 10가지 배열 함수들. Array APIs 총정리


// Q1. make a string out of an array => join
{
    const fruits = ['apple', 'banana', 'orange'];
    // join : array를 string으로 바꿔주는 함수, separator을 통해 구분도 가능(optional)
    const result = fruits.join(','); 
    console.log(result); // apple, banana, orange
}

// Q2. make an array out of a string => split
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    // split : string을 array로 바꿔주는 함수, separator 삽입 필수
    // limit 추가할 경우 앞에 2개의 인자만 전달(optional)
    const result = fruits.split(',', 2); 
    console.log(result); // ["🍎", " 🥝"]
}
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1] => reverse
  {
    const array = [1, 2, 3, 4, 5];
    // reverse : 배열의 원소 순서를 반대로 정렬하여 반환, 원본 자체가 바뀜
    const result = array.reverse(); 
    console.log(result); // [5, 4, 3, 2, 1]
    console.log(array); // [5, 4, 3, 2, 1]
  }
  
  // Q4. make new array without the first two elements => slice
  {
    const array = [1, 2, 3, 4, 5];
    // splice(0, 2) : 인덱스 0부터 2개를 삭제, 배열의 원본 자체를 바꿈
    // const result = array.splice(0, 2);
    // slice(2, 5) : 인덱스 2부터 4까지 받아옴
    const result = array.slice(2, 5);
    console.log(result); // [3, 4, 5]

  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90 => find
  {
        // find : 배열의 첫번째 요소부터 하나씩 호출이 되면서 true가 return되는 요소의 값을 받아온다
        const result = students.find((student) => student.score === 90);
        console.log(result); // {name: "C", age: 30, enrolled: true, score: 90}
  }
  
  // Q6. make an array of enrolled students => filter
  {
      // filter : 조건에 맞는 값만 가져오는 함수
      const result = students.filter((student) => student.enrolled);
      console.log(result); 
      // {name: "A", age: 29, enrolled: true, score: 45}
      // {name: "C", age: 30, enrolled: true, score: 90}
      // {name: "E", age: 18, enrolled: true, score: 88}
  }
  
  // Q7. make an array containing only the students' scores => map
  // result should be: [45, 80, 90, 66, 88]
  {
      // map : 배열 안에 들어있는 모든 요소들을 callback 함수에서 가공되어진 값으로 return해주는 함수
      const result = students.map((student) => student.score);
      console.log(result); // [45, 80, 90, 66, 88]
  }
  
  // Q8. check if there is a student with the score lower than 50 => some, every
  {
      // some :  배열에 있는 요소가 하나라도 조건을 만족하면 true 반환
      const result = students.some((student) => student.score < 50);
      console.log(result); // true

      // every :  배열에 있는 요소가 모두 조건을 만족해야만 true 반환
      const result2 = students.every((student) => student.score < 50);
      console.log(result2); // false
  }
  
  // Q9. compute students' average score => reduce
  {
      // reduce : 배열의 원소마다 누적 계산값과 함께 함수를 적용해 하나의 값으로 반환
      const result = students.reduce((prev, curr) => prev + curr.score, 0);
      console.log(result / students.length);
  }
  
  // Q10. make a string containing all the scores => map, join
  // result should be: '45, 80, 90, 66, 88'
  {
      const result = students
        .map((student) => student.score) // map을 이용해 점수만 가져온 후 
        .join(); // join을 이용해 하나의 string으로 변환
      console.log(result);
  }
  
  // Bonus! do Q10 sorted in ascending order => map, sort, join
  // result should be: '45, 66, 80, 88, 90'
  {
      const result = students
        .map((student) => student.score) // map을 이용해 점수만 가져온 후
        .sort((a, b) => a - b) // sort를 이용해 오름차순 정렬, 내림차순의 경우 b-a
        .join(); // join을 이용해 하나의 string으로 변환
      console.log(result);
  }

  
  