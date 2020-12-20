문제: 자연수로 이루어진 배열을 받아서 홀수 요소로만 이루어진 배열을 반환하라

```js
function collectOddValues(arr) {
	let result = [];

	function helper(helperInput) {
		if (helperInput.length === 0) {
			return;
		}

		if (helperInput[0] % 2 !== 0) {
			result.push(helperInput[0]);
		}
		helper(helperInput.slice(1));
	}

	helper(arr);
	return result;
}
```

이런 식으로 정리할 수 있다.

```js
function outerFunction(input) {
	let result = [];

	function helperFunction(helperInput) {
		// base case
		// recursive case
	}

	helperFunction(input); // 헬퍼 함수의 파라미터로 외부 함수의 파라미터를 넣어주면 된다.
	return result;
}
```
