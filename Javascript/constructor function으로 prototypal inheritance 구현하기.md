(아래 방법은 constructor function과 ES6 class를 이용해서 객체를 만들 때에 사용됩니다. object.create를 통한 방법은 다릅니다.)

constructor function으로 객체를 찍어낼 때에는 new라는 operator를 이용한다.  
이때 4가지 과정이 일어난다.

1. 빈 객체 {}가 새롭게 만들어진다.
2. constructor function에 있는 this 키워드가 새 객체로 설정된다.
3. 새 객체가 construction function의 prototype property로 연결된다. (내부적으로는 새 객체에 `__proto__` property가 추가되는 작업을 통해 프로토타입과 연결된다.)
4. constructor 함수를 호출하면 새로운 객체가 반환된다.

# Constructor function으로 객체 찍어내기

```js
const Person = function (firstName, birthYear) {
  // constructor function을 쓸 때에는 camel case가 아니라 pascal case를 사용하는 것이 관례다.(첫 글자부터 대문자)

  // property: this 키워드를 사용해서 만들어낸다.
  this.firstName = firstName;
  this.birthYear = birthYear;

  // method: this 키워드를 사용해서 만들 수는 있다.
  // 하지만 그렇게 해서는 안된다! 인스턴스가 많아질수록 돌아가는 함수가 많아지므로 느려지기 때문이다.
};

const john = new Person("John", 1995);
const beth = new Person("Beth", 2000);
const jack = new Person("Jack", 2005);
const sasha = new Person("Sasha", 1992);

console.log(john); //Person {firstName: "John", birthYear: 1995}
console.log(beth); //Person {firstName: "Beth", birthYear: 2000}
console.log(jack); //Person {firstName: "Jack", birthYear: 2005}
console.log(sasha); //Person {firstName: "Sasha", birthYear: 1992}
```

property는 constructor function 내부에 this 키워드를 통해서 붙이고,  
method는 외부에 prototype을 통해서 붙여야 한다.

# method는 prototype을 이용한다.

```js
Person.prototype.isAdult = function () {
  if (2020 - this.birthYear >= 18) {
    return true;
  } else {
    return false;
  }
};

console.log(john.isAdult()); // true
console.log(beth.isAdult()); // true
console.log(jack.isAdult()); // false
console.log(sasha.isAdult()); //true
```

prototype을 이용하면 위와 같이 메소드를 만들 수 있다.  
prototype에는 각종 메소드가 담겨 있으며, 해당 prototype과 연결된 object는 이에 접근할 수 있다. 이를 prototypal inheritance라고 부른다. ([자바스크립트에서의 OOP](자바스트립트에서의%20OOP.md)를 참고하세요~)

```js
console.log(John)

Person {firstName: "John", birthYear: 1995}
    birthYear: 1995
    firstName: "john"
    __proto__:
        isAdult: ƒ ()
        constructor: ƒ (firstName, birthYear)
        __proto__: Object
```

John 변수를 콘솔로그로 찍어보면 이렇게 나온다.  
`__proto__`를 눈여겨 보자.  
prototype을 통해 만들어진 메소드는 객체의 속성으로 곧장 붙는 게 아니다. `__proto__`라는 속성이 만들어지고 이 아래에 붙게 된다.  
(`__proto__`는 항상 객체의 프로토타입을 가리킨다.)

```js
console.log(john.__proto__);
// {isAdult: ƒ, constructor: ƒ}
```

`__proto__`는 john의 prototype을 알아보는 메소드이다. (언더스코어를 앞뒤로 두 번!)

### 혼동주의

Person.prototype은 Person의 프로토타입이 아니다.  
Person.prototype은 Person으로 찍어낸 객체(john, beth, jack, sasha)의 프로토타입이다

```js
console.log(Person.prototype === john.__proto__); // true

console.log(Person.prototype.isPrototypeOf(john)); // true
console.log(Person.prototype.isPrototypeOf(beth)); // true
console.log(Person.prototype.isPrototypeOf(jack)); // true
console.log(Person.prototype.isPrototypeOf(sasha)); // true

console.log(Person.prototype.isPrototypeOf(Person)); // false
```
