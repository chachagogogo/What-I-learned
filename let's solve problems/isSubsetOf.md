# 문제 설명

두 배열이 있다. (sample 배열, base 배열)  
sample 배열이 base 배열의 부분집합이면 true, 아니면 false를 반환하라.

# 설명

base가 [1, 2, 3, 4, 5]고, sample이 [1, 3, 5]인 경우를 생각해보자.

각기 0번째 인덱스를 비교한다.(1과 1)  
같으므로 별도의 카운트를 +1하고 두 인덱스도 각각 +1한다.

그럼 이번에는 1번째 인덱스를 비교한다.(2와 3)  
base가 더 작기 때문에 base의 인덱스만 +1하고 비교한다.

이런 식으로 끝까지 비교하면 된다.  
(sample이 더 작은 경우에는 sample의 인덱스만 +1)
(while(indexOfBase < base.length && indexOfSample < sample.length))

나중에 별도의 카운트의 숫자와 sample의 length가 일치하면 true, 아니면 false이다.

```js
const isSubsetOf = function (base, sample) {
	base.sort((a, b) => a - b);
	sample.sort((a, b) => a - b);

	let indexOfBase = 0;
	let indexOfSample = 0;
	let countOfTheSameNumbers = 0;

	let pointerOfBase = base[indexOfBase];
	let pointerOfSample = sample[indexOfSample];

	if (base[base.length - 1] < sample[sample.length - 1]) {
		return false;
	}

	while (indexOfBase < base.length && indexOfSample < sample.length) {
		if (pointerOfBase > pointerOfSample) {
			indexOfSample++;
		} else if (pointerOfBase === pointerOfSample) {
			indexOfBase++;
			indexOfSample++;
			countOfTheSameNumbers++;
		} else if (pointerOfBase < pointerOfSample) {
			indexOfBase++;
		}
	}

	if (countOfTheSameNumbers !== sample.length) {
		return false;
	} else {
		return true;
	}
};
```
