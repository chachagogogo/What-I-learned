# 조회

### GET

-   서버로부터 데이터를 달라고 요청할 때 사용.
-   데이터를 받기만 한다.

### HEAD

-   GET과 동일하지만 response body는 제외한다.

# 추가

### POST

-   서버에 데이터를 추가하는 경우.
-   보통 서버의 state를 변화시키거나 side-effect를 유발한다.

# 갱신

### PUT

-   타겟 리소스를 request payload로 전부 바꾼다.

### PATCH

-   일부만 바꾼다.

# 삭제

### DELETE

-   서버의 데이터를 지운다.

# 그 외

### CONNECT

-   CONNECT 메서드는 목적 리소스로 식별되는 서버로의 터널을 맺습니다.

### OPTIONS

-   OPTIONS 메서드는 목적 리소스의 통신을 설정하는 데 쓰입니다.
-   CORS의 preflighted request에서 사용되는 메소드이다. [CORS 설명](XSS,%20CSRF,%20CORS%20간단하게%20정리.md)

### TRACE

-   TRACE 메서드는 목적 리소스의 경로를 따라 메시지 loop-back 테스트를 합니다.

# 더 알아보기

[MDN - HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
