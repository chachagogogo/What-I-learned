> 용어 정리  
> 
> - falsy: 거짓 같은 값  
> - truthy: 참 같은 값
---
false면 false지 falsy는 무엇인가?  
true면 true지 truthy는 무엇인가?  

이 질문의 답을 알기 위해 type-coercion에 대해 알아보자.  
(type-coersion이 무엇인지는 아래 글에 설명해놨습니다.  
[자료형과 관련된 자바스크립트의 특성](https://github.com/chachagogogo/What-I-learned/blob/main/Javascript/%EC%9E%90%EB%A3%8C%ED%98%95%EA%B3%BC%20%EA%B4%80%EB%A0%A8%EB%90%9C%20%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98%20%ED%8A%B9%EC%84%B1.md))


# 조건문
if...else statement에서 중괄호{} 내부의 값은 언제 실행되는가?  
소괄호() 안에 들어가는 내용, 즉 '조건이 참(true)일 때'라고 대답하기 쉽지만 엄밀히는 틀린 대답이다.  
정확한 답은 '조건이 **참 같은 값(truthy)**일 때'이다. 

Number(), String(), Boolean()을 통해 이해하면 훨씬 쉽다.

```js
console.log(typeof Number('3')) // 'number'
console.log(typeof String(5)) //'string'
```
Number()와 String()은 값의 자료형을 각각 string과 number로 바꿔준다.


# falsy
Boolean()은 값의 자료형을 boolean으로 바꿔준다.  
boolean 유형이 아닌 값을 억지로 boolean으로 바꿀 때 false로 나오는 것을 falsy, falsy가 아닌 나머지를 truthy라고 부른다.

falsy는 총 7가지가 있다.
```js
0
-0
0n
""
null
undefined
NaN
```
이외에는 모두 truthy이다.  

# 주의할 점
1. falsy를 어떻게 정의하냐에 따라 false의 포함 여부가 달라진다. (중요하진 않다.)  
   나는 falsy를 "boolean이 아닌 값을 억지로 boolean으로 만들었을 때 false를 내뱉는 값"라고 정의했기 때문에 false를 제외했다. false는 이미 boolean이기 때문이다.
2. 빈 문자열만 falsy이다. 빈 배열, 빈 객체는 falsy가 아니다.  
   
# && 연산자와 만났을 때
&& 논리 연산자는 '모든 값이 참일 때'에만 참이다.  
값 하나라도 거짓이면 바로 거짓이다.  
따라서 다음과 같이 && 연산자로 묶여있는 경우 falsy인 값이 있다면 처음으로 위치한 falsy값을 내뱉는다.
```js
false && "dog" // false

0 && "dog" // 0
```