# XSS

cross-site scripting의 약자이다.  
단어 그대로 스크립팅을 이용한 공격 방법인데 이렇게 이루어진다.

1. 공격자가 서버에 악성 스크립트를 심는다
2. 서버는 다른 사용자의 요청에 응답한다. 이때 악성 스크립트가 함께 전송된다.
3. 사용자의 클라이언트에서 악성 스크립트가 실행되고, 공격자는 이를 이용한다. (인증수단 등 민감정보 탈취)

즉, 클라이언트가 서버를 신뢰해서 생기는 이슈라고도 볼 수 있다.

# CSRF

cross-site request forgery의 약자이다.  
forgery는 위조, 도용이라는 뜻이다. 공격자가 마치 인증받은 사용자인 것처럼 위장해서 공격하는 방법이다.

서버가 클라이언트를 신뢰해서 생기는 이슈라고도 볼 수 있다.

# CORS

cross-origin resourse sharing의 약자이다.

## 개요

대개 하나의 웹사이트에는 글, 사진, 동영상 등 다양한 구성요소로 가득하다.  
이 많은 데이터의 출처가 모두 동일한 경우는 드물다.  
이는 보안상 위험요소이다. 다른 출처를 어떻게 믿고 데이터를 가져오겠는가?  
클라이언트가 다른 출처의 데이터를 서버에 요청할 때 어디까지 허용하고, 어디까지 막을지 결정하는 것이 바로 CORS이다.  
CORS의 주체는 브라우저이다. 따라서 브라우저마다 CORS 정책이 상이하다.

우선 데이터의 출처(origin)가 같은지 다른지를 판별해야 한다.
출처에 관해 알아보자.

## origin

URL은 다양한 구성요소로 되어 있다.

| 요소명           | 예시                                       |
| ---------------- | ------------------------------------------ |
| scheme(protocol) | http, https, ssh, git                      |
| host             | google.com, localhost,192.168.0.1          |
| subdomain        | www, mail, blog                            |
| path             | search, about.html, blog/entries/2/big-day |
| query string     | q=puppies&ref=mobile&page=4                |
| hash fragment    | p2, FAQ, /profile/edit                     |

---

동일 출처인지 아닌지는 protocol, host, port의 일치 여부로 결정된다.  
셋 모두가 일치해야 동일 출처이다. (port는 일반적으로 생략되며 생략된 경우 80이다.)  
(Internet Explorer는 protocol과 host만 동일하면 동일 출처라고 간주한다. CORS는 브라우저마다 다르다는 사실을 잊지 말자!)

http://www.google.com/search?q=puppies#p2 이 URL에서 origin은?  
=> http(protocol), google.com(host), 80(port) 이다.

이제 3가지 요청방식을 알아보자.

## preflighted request

클라이언트가 서버에 데이터를 달라고 요청을 하면 곧장 GET을 하는 게 아니라, 동일 출처인지를 확인하기 위해 브라우저가 서버에 예비 요청을 보낸다. 이것이 preflighted request다.  
예비 요청은 OPTIONS 메소드를 통해 이루어진다.  
브라우저는 요청의 origin과 응답의 access-control-allow-origin이 일치하는지로 동일출처를 판단한다.  
출처가 같으면 본 요청과 본 응답이 오고 간다.

## simple request

예비 요청 없이 바로 본 요청, 본 응답이 오고 가는 방법이다.  
그렇기 때문에 당연히도 제약사항이 많다.

## request with credentials

클라이언트가 서버에 요청을 보낼 때 쿠키(클라이언트쪽 인증 수단)를 함께 보내는 방식이다.  
서버가 응답시 보내는 헤더에 "access-control-allow-credentials:true"가 반드시 있어야 한다.

# 더 알아보기

[MDN - Cross-site scripting](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting)  
[MDN - CSRF](https://developer.mozilla.org/en-us/docs/Glossary/CSRF)  
[MDN - Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)  
[MDN - Origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin)  
[Youtube - [10분 테코톡] 🤠럿고의 CORS](https://www.youtube.com/watch?v=7iGIfcEsc2g&ab_channel=%EC%9A%B0%EC%95%84%ED%95%9CTech)
