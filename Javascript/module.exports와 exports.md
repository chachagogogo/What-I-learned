module.exports는 객체이다.  
exports는 module.exports를 가리키는 참조값이다.  
module.exports.x = 30이라는 라인을 쓰면, {x: 30}이라는 module.exports 객체가 생기는 것이다.

### 답은 글 하단에 적어뒀다.

# 1.

Assume you have the following in **subject.js**:

```js
let x = 10;
let mod = require('./lib/my-module.js');
let result = mod.x;
```

...and the following in **lib/my-module.js**

```js
let x = 20;
exports.x = 30;
```

After **subject.js** runs, what will be the value of result?

{x:30}이라는 객체에서 x의 value를 물어보는 문제이다.  
따라서 답은 30이다.

# 2.

Assume you have the following in **subject.js:**

```js
let mod = require('./lib/my-module.js');
let result = mod.x;
```

...and the following in **lib/my-module.js:**

```js
let x = 10;
exports.x = 20;
module.exports.x = 30;
```

After s**ubject.js** runs, what will be the value of result?

{x: 20}이었지만 {x: 30}으로 값이 바뀌었다. (object는 reference type이므로)  
따라서 x는 30이다.

# 3.

Assume you have the following in **subject.js:**

```js
let mod1 = require('./lib/my-module.js');
let mod2 = require('./lib/my-module.js');

mod1.increment();
let result = mod2.increment();
```

...and the following in **lib/my-module.js:**

```js
let counter = 0;
exports.increment = function () {
	counter += 1;
	return counter;
};
```

After **subject.js** runs, what will be the value of result?

객체는 {increment: function()}처럼 생겼다. 따라서 한번 increment를 호출할 때마다 function()이 작동하면서 counter++ 된다.  
따라서 답은 2

# 4.

Assume you have the following in **subject.js**:

```js
let mod1 = require('./lib/my-module.js');
let mod2 = require('./lib/my-module.js');
```

...and the following in **lib/my-module.js**:

```js
console.log('Loading module!');
```

After **subject.js** runs, how many logs in the console will you see?

동일한 모듈이라면 아무리 여러 번을 require해도 오직 한 번만 호출된다.  
따라서 답은 1.
