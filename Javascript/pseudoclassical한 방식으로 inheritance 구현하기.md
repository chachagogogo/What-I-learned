pseudoclassical한 방식이란 constructor function과 new operator를 이용해서 객체를 찍어내는 것이다.  
그리고 찍어낸 객체에 method를 추가하는 방법은 prototype을 이용하는 것이다.  
(이 방법은 [constructor function과 prototype으로 함수 찍어내기](constructor%20function과%20prototype으로%20함수%20찍어내기.md) 글을 참고하세요~)

하나의 class에서 자식 class를 만들어내는 것을 inheritance라고 한다.

pseudoclassical한 방식으로 inheritance를 구현해보자.  
Human과 Coder라는 class를 만든다고 생각해보자.
![](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Venn_A_subset_B.svg/1200px-Venn_A_subset_B.svg.png)

Coder는 당연히 사람이므로 Human의 메소드를 가져야 한다.  
sleep과 code라는 메소드를 예를 들어 살펴보자.

먼저 Human과 Coder라는 constructor function을 만들어준다.

```js
const Human = function (name) {
  this.name = name;
};

const Coder = function (name) {
  this.name = name;
};
```

그리고 큰 집합인 Human의 메소드를 만들어준다.  
사람은 잠을 자니깐 sleep이라는 메소드를 만들겠다.

```js
Human.prototype.sleep = function () {
  console.log(`사람이 잠을 자야지...`);
};
```

Human의 메소드를 다 만들어주고 나면 상속 작업을 해야 한다.  
Coder의 메소드는 상속 이후에 만들어준다.

```js
const Human = function (name) {
  this.name = name;
};

const Coder = function (name) {
  Human.call(this.name); //this의 포인터를 맞춰줘야 한다.
  this.name = name;
};

Human.prototype.sleep = function () {
  console.log(`사람이 잠을 자야지...`);
};

Coder.prototype = Object.create(Human.prototype); // prototype을 맞춰주는 작업
Coder.prototype.constructor = Coder; // constructor를 맞춰주는 작업

Coder.prototype.code = function () {
  console.log(`코딩 재밌쪙~`);
};
```

이제 Coder 객체를 한번 찍어내고 결과를 확인해보자

```js
const me = new Coder('해승')

console.log(me)의 결과는 아래와 같다.

Coder {name: "해승"}
    name: "해승"
    __proto__: Human
        code: ƒ ()
        constructor: ƒ (name)
        __proto__: Object
            sleep: ƒ ()
            constructor: ƒ (name)
            __proto__: Object

console.log(me instanceof Human) // true
console.log(me instanceof Coder) // true
```

비교를 위해 Human 객체를 한번 찍어내보자.

```js
const mom = new Human('조여사')

console.log(mom)의 결과는 아래와 같다.

Human {name: "조여사"}
    name: "조여사"
    __proto__:
        sleep: ƒ ()
        constructor: ƒ (name)
        __proto__: Object

console.log(mom instanceof Human) // true
console.log(mom instanceof Coder) // false
```
