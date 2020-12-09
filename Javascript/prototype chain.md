# prototype chain

constructor function으로 Person이라는 객체를 만들어냈다고 치자.

```js
const Person = function (firstName) {
  this.firstName = firstName;
};
const john = new Person(john);
```

우리는 Person이라는 constructor function을 만들면서 firstName이라는 속성을 갖게끔 했다.  
아직 메소드는 만들어서 붙이지 않았다.

```js
john.hasOwnProperty("firstName");
```

하지만 콘솔로그를 찍어보면 만든 적 없는 메소드가 제대로 작동한다.  
바로 prototype chain 때문이다.

간단하게 설명하면 이렇다.  
john이라는 객체에 해당 메소드가 있는지 확인한다.  
-> 없으면 john 객체의 프로토타입에 해당 메소드가 있는지 확인한다.  
-> 없으면 Object.prototype에 해당 메소드가 있는지 확인한다.

이렇게 **prototypal inheritance** 과정을 거쳐서 Object.prototype의 메소드에 접근하게 된다.

Object.prototype에는 이미 수많은 내장 메소드가 있으며 hasOwnProperty라는 메소드도 그 중 하나이다.  
그렇기 때문에 콘솔로그가 정상적으로 작동한 것이다.

---

# constructor function으로 찍어낸 객체의 prototype

constructor function으로 찍어낸 객체(john)의 프로토타입은 Person.prototype이다.

```js
console.log(Person.prototype.isPrototypeOf(john)); //true
```

Person.prototype은 놀랍게도 객체이다.

```js
console.log(typeof Person.prototype); // 'object'
```

# constructor function의 prototype

이 객체(Person.prototype) 또한 프로토타입이 있을까?  
답은 '그렇다'이다. Person.prototype의 프로토타입은 Object.prototype이다.

```js
console.log(Object.prototype.isPrototypeOf(Person.prototype)); //true
```

예상 가능하게도 Object.prototype 또한 객체이다.

```js
console.log(typeof Object.prototype); // 'object'
```

이 객체(Object.prototype) 또한 프로토타입이 있을까?
아니다. null이 나온다.

```js
console.log(john.__proto__); // john의 prototype이 쭉 나온다.
console.log(john.__proto__.__proto__); // john을 찍어낸 constructor function의 prototype(Object.prototype)이 쭉 나온다.
console.log(john.__proto__.__proto__.__proto__); // null
```

# 도식화

Person()이라는 constructor function을 이용해 찍어낸 객체  
---(prototypal inheritance / delegation)--->  
{Person.prototype}  
---(prototypal inheritance / delegation)--->  
{Object.prototype}  
---(prototypal inheritance / delegation)--->  
null
