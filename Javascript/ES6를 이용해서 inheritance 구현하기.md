(이 글을 읽기 전에 먼저 [pseudoclassical한 방식으로 inheritance 구현하기](pseudoclassical한%20방식으로%20inheritance%20구현하기.md)를 읽으세요~)

ES6를 이용해서 inheritance를 구현하는 일은 정말 쉽다.  
아래와 같이 작성하면 끝이다.

```js
class Human {
  constructor(name) {
    this.name = name;
  }
  // method는 언제나 constructor function 밖에서!
  sleep() {
    console.log(`사람이 잠을 자야지`);
  }
}

class Coder extends Human {
  constructor(name) {
    super(name); //this의 포인터를 맞춰주기 위해 super(parameter)를 쓴다.
  }
  // method는 언제나 constructor function 밖에서!
  code() {
    console.log(`코딩 재밌쪙~`);
  }
}
```

제대로 작동하는지 확인해보자

```js
const me = new Coder('해승')
const mom = new Human('조여사')

console.log(me instanceof Human) // true
console.log(me instanceof Coder) // true

console.log(mom instanceof Human) // true
console.log(mom instanceof Coder) // false

console.log(me, mom)의 결과는 아래와 같다.


Coder {name: "해승"}
    name: "해승"
    __proto__: Human
        code: ƒ ()
        constructor: ƒ (name)
        __proto__: Object
            sleep: ƒ ()
            constructor: ƒ (name)
            __proto__: Object


Human {name: "조여사"}
    name: "조여사"
    __proto__:
        sleep: ƒ ()
        constructor: ƒ (name)
        __proto__: Object

```
