(이 글을 읽기 전에 먼저 [pseudoclassical한 방식으로 inheritance 구현하기](pseudoclassical한%20방식으로%20inheritance%20구현하기.md)를 읽으세요~)

# Class의 3가지 특징

중요하니깐 가장 위에 서술하고 설명은 나중에 하겠다.

1. Class는 hoist되지 않는다. (function declaration으로 해도 그렇다.)
2. Class는 first-class citizen이다. (class는 function의 한 형태이기 때문이다.)
3. Class는 strict mode로 작동한다.

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
  // 부모 class의 property를 동일하게 물려받는다면 아래의 constructor(name) 블록은 생략 가능
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

# polymorphism

내친 김에 polymorphism도 조금 보자.  
polymorphism이란 상속받은 메소드를 자식 class가 덮어쓰는 것을 말한다.  
([객체 지향 프로그래밍](객체%20지향%20프로그래밍.md) 글을 참고하세요~)
super 키워드를 이용하면 된다.  
(super: 부모 객체 함수에 접근하거나 호출할 때 사용하는 키워드)

```js
class Human {
  constructor(name) {
    this.name = name;
  }
  sleep() {
    console.log(`사람이 잠을 자야지`);
  }
}

class Coder extends Human {
  sleep() {
    super.sleep();
    console.log("맨날 피곤해...");
  }
  code() {
    console.log(`코딩 재밌쪙~`);
  }
}
```

확인해보자.

```js
const me = new Coder("해승");

console.log(me.sleep());
//사람이 잠을 자야지
//맨날 피곤해...
```
