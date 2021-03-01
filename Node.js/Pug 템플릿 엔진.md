html 파일을 동적으로 렌더링을 하고자 한다면 Pug이라는 템플릿 엔진을 사용하면 된다.
(express를 사용한다면 pug는 따로 require를 할 필요가 없다. npm i pug 하고 바로 사용하면 된다.)

```js
// app.js
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
// shop.js
const express = require('express');

const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
	const products = adminData.products;
	res.render('shop', { prods: products, pageTitle: 'Shop', path: '/' });
});

module.exports = router;
```

res.render의 첫번째 인자로는 경로가 들어가며 확장자는 적지 않는다.  
두번째 인자로는 객체가 들어가며 키-밸류를 통해 pug 파일을 다이내믹하게 만들 수 있다.

```js
// shop.pug


extends layouts/main-layout.pug

block styles
    link(rel="stylesheet", href="/css/product.css")

block content
    main
        if prods.length > 0
            .grid
                each product in prods
                    article.card.product-item
                        header.card__header
                            h1.product__title #{product.title}
                        div.card__image
                            img(src="http://asdf.com/asdf.jpg", alt="A Book")
                        div.card__content
                            h2.product__price $19.99
                            p.product__description A very interesting book about so many even more interesting things!
                        .card__actions
                            button.btn Add to Cart
        else
            h1 No Products

```

들여쓰기에 주의해야 한다!  
pug 파일은 #{}을 이용한다.  
div는 생략 가능하며, class는 .으로 표기한다. attributes 사이에는 ,를 적어줘야 하며 ()로 감싸줘야 한다.

# 더 알아보기

[Pug 공식 홈헤이지](https://pugjs.org/)  
[Pug 깃헙](https://github.com/pugjs/pug)
