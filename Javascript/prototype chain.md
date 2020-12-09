constructor function으로 Person이라는 객체를 만들어냈다고 치자.

```js
const Person = function () {};
const john = new Person(john);
```

이렇게 만들어낸 객체(john)의 프로토타입은 Person.prototype이다.

```js
console.log(Person.prototype.isPrototypeOf(john)); //true
```

Person.prototype은 놀랍게도 객체이다.

```js
console.log(typeof Person.prototype); // 'object'
```

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

---

간단하게 도식화하면 이렇다.

Person()이라는 constructor function을 이용해 찍어낸 객체  
---(prototypal inheritance / delegation)--->  
{Person.prototype}  
---(prototypal inheritance / delegation)--->  
{Object.prototype}  
---(prototypal inheritance / delegation)--->  
null

이를 prototype chain이라고 부른다.
