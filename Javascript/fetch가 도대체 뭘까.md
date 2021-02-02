# 소개

클라이언트는 서버에 request를 보내고, 서버는 이에 따라 클라이언트에 response를 보낸다.

(클라이언트) <----req / res----> (서버)

클라이언트가 서버에 HTTP 요청을 하는 방법은 다양하다.  
XMLHttpRequest도 있고, jQuery AJAX도 있다.  
Fetch API는 이 중 하나이다.

# 사용법

fetch는 일반적으로 이런 형태로 코드를 작성한다.

```js
fetch(URI)
	.then(response => response.json())
	.then(data => 어쩌구저쩌구);
```

## response는 '안 뜯은 택배상자'다.

택배상자를 받으면 원하는 내용물뿐만 아니라 송장, 영수증, 뾱뾱이 등 각종 부속물이 들어있다.  
fetch로 서버에서 받아온 response도 마찬가지이다.  
response에는 headers와 status, type, url 등 각종 정보가 들어 있다. (https://developer.mozilla.org/en-US/docs/Web/API/Response)

## 상자를 뜯자(JSON화)

우리가 필요한 내용물을 쓰기 위해서는 택배 상자를 뜯어야 한다.  
내용물을 얻는 방법은 .json() 메소드를 쓰면 된다.  
.json()을 하면 body text는 JSON 객체로 바뀐다.  
(.json()을 하고나면 보통 그 다음 then에서는 data라고 쓴다.)

이제 이 data를 우리가 원하는 대로 가공하면 된다.
