Person의 prototype으로 삼을 객체를 직접 만든다.  
그리고 이 객체 안에 프로퍼티와 메소드를 직접 작성해 넣는다.

```js
const PersonProto = {
  calcAge() {
    console.log(2020 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
```

그 이후에 직접 Object.create()을 통해 객체를 만들어낸다.  
new operator도, class도 필요하지 않는다.

```js
const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1979);
sarah.calcAge();

console.log(sarah.__proto__ === PersonProto); //true
```

sarah를 콘솔로그로 찍어보자

```js
console.log(sarah);

{firstName: "Sarah", birthYear: 1979}
    birthYear: 1979
    firstName: "Sarah"
    __proto__:
        calcAge: ƒ calcAge()
        init: ƒ init(firstName, birthYear)
        __proto__: Object
```
