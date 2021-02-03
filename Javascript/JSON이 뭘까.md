JSON은 데이터를 깔끔하게 정리한 포맷이다.  
자바스크립트의 객체와 비슷하게 생겼지만 사실 string이다. 그렇기 때문에 웹 서버와 통신할 때 쓰일 수 있다.

클라이언트에서 서버로 데이터를 보낼 때에는 데이터를 JSON 형태로 바꿔줘야 한다. 이때 쓰이는 메소드가 JSON.stringify()다.

거꾸로 서버로부터 JSON 포맷으로 받은 데이터는 자바스크립트 객체로 바꿔줘야 한다. 이때 쓰이는 메소드가 JSON.parse()다

### JSON.parse() Vs. .json()

> Body.json() is asynchronous and returns a Promise object that resolves to a JavaScript object.  
> JSON.parse() is synchronous can parse a string and change the resulting returned JavaScript object.  
> https://stackoverflow.com/a/48295480

# 더 알아보기

[MDN - JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

[MDN - JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
