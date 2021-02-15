# naive solution(시간 복잡도: O(n))

1. exponent가 0이면 1 반환
2. 아니면 base \* power(base, exponent - 1) 반환

```js
function power(base, exponent) = {
    if(exponent === 0) {
        return 0
    }

    return base * power(base, exponent - 1)
}
```

# optimized solution(시간 복잡도: O(log n))

1. exponent가 0이면 1 반환
2. exponent가 짝수면 power(base, exponent / 2) \* power(base, exponnent / 2) 반환
3. exponent가 홀수면 base \* power(base, exponent - 1) 반환

```js
function power(base, exponent) = {
    if(exponent === 0) {
        return 0
    }

    if(exponent % 2 === 0) {
        let temp = power(base, exponent / 2)
        return temp * temp
    } else {
        return base * power(base, exponent - 1)
    }
}

```

# 참고

[![](http://img.youtube.com/vi/wAyrtLAeWvI/0.jpg)](http://www.youtube.com/watch?v=wAyrtLAeWvI 'Exponentiation - Calculate Pow(x,n) using recursion')
