# 문제 설명

다음 방식으로 배열의 element를 오름차순으로 정리하라.

예) [3, 5, 4, 9, 1, 7]

1. 3과 5를 비교. 더 작은 수가 왼쪽에 있으므로 통과.
2. 5와 4를 비교. 더 작은 수가 오른쪽에 있으므로 4, 5로 변경.
3. 이런 식으로 두 개씩 비교해서 정리. 배열이 오름차순이 될 때까지 반복.

# naive solution

```js
const bubbleSort = function (arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			let temp = arr[j];
			arr[j] = arr[j + 1];
			arr[j + 1] = temp;
		}
	}
	return arr;
};
```

# optimized solution

## bubble sort의 특성

arr의 크기가 5이면 비교는 4번, 3번, 2번, 1번만 하면 된다.  
arr의 크기가 6이면 비교는 5번, 4번, 3번, 2번, 1번만 하면 된다.

arr의 크기가 4라면 인덱스별 비교는 아래처럼 하면 된다.

비교 3번: (0번째, 1번째) / (1번째, 2번째) / (2번째, 3번째)  
=> 제일 큰 수가 맨 마지막에 위치

비교 2번: (0번째, 1번째) / (1번째, 2번째)  
=> 두 번째로 큰 수가 맨 뒤에서 두 번째에 위치

비교 1번: (0번째, 1번째)  
=> 세 번째로 큰 수가 맨 뒤에서 세 번째에 위치

```js
// i는 5, 4, 3, 2, 1로 줄어든다.
// 따라서 i는 arr.length부터 시작해서 점점 줄어들게 설정한다.

// j는 위에 적어둔 특성처럼 비교하면 된다.
// 따라서 j는 0부터 시작해서 i - 1 미만 범위까지 점점 커지게 설정한다.

const bubbleSort = function (arr) {
	for (let i = arr.length; i > 0; i--) {
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
};
```

여기까지만 해도 웬만큼은 빠른 속도내에 풀 수 있다.  
하지만 더 욕심을 내보자.

arr = [8, 1, 2, 3, 4, 5, 6, 7]

8만 끝으로 보내면 정렬이 끝난다.
하지만 위에 적은 코드대로라면 7번+6번+5번+...+1번, 총 28번이나 연산을 시행하게 된다.  
8을 끝으로 보내는 데에 필요한 시행 수는 7번이므로 21번이나 불필요한 연산을 하게 되는 것이다.  
이를 줄여보자.

```js
// noSwaps라는 변수를 만들고 첫번째 for문 안에 true로 값을 할당한다.
// swap이 일어나게 되면 noSwaps를 false로 바꿔준다.
// noSwaps가 true면 break하고 나오면 된다.

const bubbleSort = function (arr) {
	let noSwaps;
	for (let i = arr.length; i > 0; i--) {
		noSwaps = true;
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;

				noSwaps = false;
			}
		}
		if (noSwaps) break;
	}
	return arr;
};
```
