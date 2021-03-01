```js
// app.js
const express = require('express');
const expressHbs = require('express-handlebars');

const app = express();

app.engine(
	'hbs',
	expressHbs({
		layoutsDir: 'views/layouts/',
		defaultLayout: 'main-layout',
		extname: 'hbs',
	})
);
app.set('view engine', 'hbs');
app.set('views', 'views');

const shopRoutes = require('./routes/shop');

app.use(shopRoutes);
```

핸들바 템플릿 엔전은 이렇게 해주면 된다.  
layoutsDir, defaultLayout: 레이아웃의 경로를 써준다.  
extname: 특이하게도 확장자명을 직접 설정해줘야 한다.

```js
// shop.js
const express = require('express');

const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
	const products = adminData.products;
	res.render('shop', {
		prods: products,
		pageTitle: 'Shop',
		path: '/',
		hasProducts: products.length > 0,
		activeShop: true,
		productCSS: true,
	});
});

module.exports = router;
```

res.render의 첫번째 인자는 경로이다. (확장자는 적지 않는다.)  
두번째 인자로는 객체가 들어가며 키-밸류를 통해 hbs 파일을 다이내믹하게 만들 수 있다.

```js
// shop.hbs
<main>
	{{#if hasProducts}}
		<div class="grid">
			{{#each prods}}
				<article class="card product-item">
					<header class="card__header">
						<h1 class="product__title">{{this.title}}</h1>
					</header>
					<div class="card__image">
						<img src="https://cdn.pixabay.com/photo/2016/03/31/20/51/book-1296045_960_720.png" alt="A Book">
					</div>
				</article>
			{{/each}}
		</div>
	{{else}}
		<h1>No Products Found!</h1>
	{{/if}}
</main>
```

hbs 파일에서는 {{}}을 이용한다.  
{{#if}} {{else}} {{/if}}, {{#each}} {{/each}}를 기억하자.

# 더 알아보기

[Handlebars 공식 홈페이지](https://handlebarsjs.com/)  
[Handlebars 깃헙](https://github.com/handlebars-lang/handlebars.js)
