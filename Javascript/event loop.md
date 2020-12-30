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
