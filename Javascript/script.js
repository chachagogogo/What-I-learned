"use strict";

const Person = function (firstName, birthYear) {
  //인스턴스 속성
  this.firstName = firstName;
  this.birthYear = birthYear;

  //인스턴스 메소드는 절대로 객체 내에 만들지 말 것! 인스턴스는 수가 많기 때문에 엄청 느려짐.
};

const jonas = new Person("Jonas", 1991);
console.log(jonas);
/*
1. 새로운 {}가 생성됨.
2. 함수가 호출된다. this = {}
3. {}가 프로토타입과 연결된다.
4. 함수가 자동적으로 {}를 반환한다.
*/

const haeseung = new Person("haeseung", 1990);
console.log(haeseung);
