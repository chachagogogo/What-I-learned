html 파일을 동적으로 렌더링을 하고자 한다면 Pug이라는 템플릿 엔진을 사용하면 된다.
(express를 사용한다면 pug는 따로 require를 할 필요가 없다. npm i pug 하고 바로 사용하면 된다.)

```js
app.set('view engine', 'pug');
app.set('views', 'views');

app.use((req, res, next) => {
	res.status(404).render('404', { pageTitle: 'Page Not Found' });
});
```

res.sendFile 대신 res.render를 하면 되는데  
첫번째 인자로는 pug파일명을 써주면 된다.(확장자는 생략)  
두번째 인자로는 객체를 만들어서 value를 넘겨줄 수 있다.  
받을 때에는 #{키값}으로 받으면 된다.

자주 쓰는 레이아웃을 저장한 뒤에 바꾸고 싶은 내용만 block 키워드를 통해 고칠 수 있다.  
받아올 때에는 extends 키워드와 경로를 설정해주면 된다.

```js
// layouts/main-layout.pug

doctype html
html(lang="en")
    head
        meta(charset="UTF-8")
        meta(http-equiv="X-UA-Compatible", content="IE=edge")
        meta(name="viewport", content="width=device-width, initial-scale=1.0")
        title #{pageTitle}
        link(rel="stylesheet", href="/css/main.css")
    body
        block content
```

div는 생략 가능하며, class는 .으로 표기한다. attributes 사이에는 ,를 적어줘야 하며 ()로 감싸줘야 한다. 특별히 들여쓰기에 주의하자.

```js
// 404.pug
extends layouts/main-layout.pug

block content
    h1 Page Not Found!

```
