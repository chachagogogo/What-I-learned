문제: 다음 방식으로 배열의 element를 오름차순으로 정리하라.

예) [3, 5, 4, 9, 1, 7]

1. 3과 5를 비교. 더 작은 수가 왼쪽에 있으므로 통과.
2. 5와 4를 비교. 더 작은 수가 오른쪽에 있으므로 4, 5로 변경.
3. 이런 식으로 두 개씩 비교해서 정리. 배열이 오름차순이 될 때까지 반복.

# naive solution

```js
cont bubbleSort  = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
        }
    }
    return arr
}
```

# optimized solution

bubble sort의 특성

1번 돌리면 1번째로 큰 수가 제자리를 찾는다.  
=> 따라서 n-1번만 더 돌리면 된다.  
2번 돌리면 2번째로 큰 수까지 제자리를 찾는다.  
=> 따라서 n-2번째만 더 돌리면 된다.  
...

```js
function bubbleSort(arr) {
	let noSwaps;
	// j를 i - 1까지만 반복문으로 돌리고 싶다. 그렇게 하기 위해서는 i를 점점 키우는 것보다 점점 줄이는 게 낫다고 생각했다.
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
		if (noSwaps) break; // 정렬이 다 됐으면 더 이상 볼 필요 없이 break로 끊고 나오면 된다.
	}
	return arr;
}
```

ES6에서는 destructuring을 통해 배열 내의 element 자리 바꿈을 할 수 있지만,  
swap 함수 민들기 귀찮아서 temp 하나 만드는 방식을 택했다.
