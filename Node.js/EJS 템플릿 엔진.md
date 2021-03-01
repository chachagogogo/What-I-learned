```js
// app.js
const express = require('express');

app.set('view engine', 'ejs');
app.set('views', 'views');

const shopRoutes = require('./routes/shop');
app.use(shopRoutes);
```

EJS는 Pug처럼 따로 require 없이 곧장 쓸 수 있다.

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
```

res.render의 첫번째 인자는 경로이다. (확장자는 적지 않는다.)  
두번째 인자로는 객체가 들어가며 키-밸류를 통해 hbs 파일을 다이내믹하게 만들 수 있다.

```js
// shop.ejs
<%- include('includes/head.ejs') %>

	</head>
	<body>

        <%- include('includes/navigation.ejs')%>

		<main>
			<% if(prods.length > 0) { %>
			<div class="grid">
				<% for(let product of prods) { %>
				<article class="card product-item">
					<header class="card__header">
						<h1 class="product__title"><%= product.title %></h1>
					</header>
					<div class="card__image">
						<img
							src="https://cdn.pixabay.com/photo/2016/03/31/20/51/book-1296045_960_720.png"
							alt="A Book"
						/>
					</div>
					<div class="card__content">
						<h2 class="product__price">$19.99</h2>
						<p class="product__description">
							A very interesting book about so many even more
							interesting things!
						</p>
					</div>
					<div class="card__actions">
						<button class="btn">Add to Cart</button>
					</div>
				</article>
				<% } %>
			</div>
			<% } else { %>
			<h1>No Products found!</h1>
			<% } %>
		</main>
	</body>
</html>
```

EJS에서는 <% %>를 이용한다.  
<% %> 내부에서는 JavaScript 문법을 쓰고, <% { %>와 <% } %> 사이에는 HTML문법을 쓴다.

```js
// includes/head.ejs

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title><%= pageTitle %></title>
		<link rel="stylesheet" href="/css/main.css" />
	</head>
</html>

```

EJS는 레이아웃 기능이 없는 대신 partial 또는 include라고 불리는 기능이 있다.  
<%- include('경로명')%>으로 쓰면 된다.
