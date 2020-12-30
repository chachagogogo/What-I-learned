자바스크립트는 single-threaded engine임에도 불구하고 마치 여러 일을 동시에 수행하는 것처럼 보인다. 이런 일을 가능하게 하는 것이 event loop이다.

(브라우저의 경우) 자바스크립트 런타임은 크게 engine, web API, callback queue 등으로 구성된다.

![](event%20loop.png)

# Engine

engine은 코드를 실행하는 프로그램이다.  
크게 두 가지 구성요소로 나뉜다.

-   call stack: 코드가 실행되는 곳
-   heap: object, 즉 reference type이 저장되는 곳

# web APIs

web API는 브라우저에서 지원하는 기능이다.  
따라서 node.js에는 없다.

window 객체를 통해 접근 가능하다.

-   DOM
-   Timers
-   Fetch API
-   ...

# callback queue

DOM에서의 콜백 함수 등이 위치하는 곳이다.  
call stack이 비면 queue에서 하나씩 전달되기 때문에 실행이 되는 것이다. 이 과정을 **event loop**이라고 한다. non-blocking concurrency model을 실현 가능하게 하는 중요한 기능이다.

# 문제

## 1.

After all setTimeout callbacks have run,what order of letters will be shown in the console?

```js
console.log('A');

setTimeout(function () {
	console.log('B');
}, 0);

console.log('C');
```

아무리 지연시간을 0ms으로 지정했더라도 setTimeOut은 web API이므로 콜백 큐에 들어가게 된다.  
따라서 답은 A C B

## 2.

Assume **superLongComputation()** is synchronous and takes 5 seconds to run. After all setTimeout callbacks have run, what order of letters will be shown in the console?

```js
console.log('A');

setTimeout(function () {
	console.log('B');
}, 1000);

superLongComputation();

console.log('C');
```

B는 call back queue에 들어간다. superLongComputation() 실행이 아무리 오래 걸려도 call stack이 비어야 event loop이 돌게 된다.  
따라서 답은 A C B

# 3.

Assume superLongComputation() is synchronous and 5 seconds to run. Afterall setTimeout callbacks have run, what order of letters will be shown in the console?

```js
console.log('A');

setTimeout(function () {
	console.log('B');
}, 1000);

superLongComputation();

setTimeout(function () {
	console.log('C');
}, 500);

console.log('D');
```

A가 먼저 찍힌다.
그리고 D가 찍힌다.  
B와 C가 queue에 들어가서 각각 1000ms, 500ms을 대기하는 동안 superLongComputation()이 5초 간 실행된다.
그럼 기다렸던 B와 C가 차례대로 실행된다.

# 4.

After all setTimeout callbacks have run,what order of letters will be shown in the console?

```js
console.log('A');

setTimeout(function () {
	console.log('B');
}, 500);

setTimeout(console.log('C'), 1000);
```

setTimeOut syntax를 제대로 아는지 묻는 문제.
setTimeOut(function(), num)으로 작성되어야 한다.

console.log는 함수가 아니다.

따라서 답은 A C B
