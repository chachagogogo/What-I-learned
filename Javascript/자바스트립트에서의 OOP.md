# 전통적 OOP와의 차이점

자바스트립트에서 OOP를 구현하는 방법은 전통적인 방법과 다르다.

전통적인 방법에서는 class를 이용해서 instance를 만든다. (instantiation)  
class ---(instantiation)---> instance

자바스크립트에는 prototype이 있고 object가 이에 연결되어 있다.  
prototype에는 각종 메소드가 담겨 있으며, 해당 prototype과 연결된 object는 이에 접근할 수 있다. 이를 prototypal inheritance라고 부른다.  
(object가 자신의 메소드를 prototype에게 위임하는 것과 같다고 해서 delegation이라고도 부름.)  
prototype <---(prototypal inheritance / delegation)--- object

예)
그동안 .map이라는 array 메소드를 아무렇지 않게 사용했는데 MDN에 가보면 array.prototype.map이 있다.  
prototype에 있는 메소드에 접근 가능하기 때문에 아무 array에서나 .map을 사용할 수 있었던 것이다.

### 혼동 주의

inheritance: 부모 class로부터 속성과 메소드를 자식 class가 물려받는 일.  
prototypal inheritance: prototype과 연결된 object는 해당 prototype의 메소드에 접근 가능한 것. (마치 intance가 class로부터 물려받는 것으로 생각하면 됨.)

![](https://miro.medium.com/max/700/1*dianRzNAQevG4-ZXUfxpDg.png)
사진 출처 [YYCJS presents: JavaScript - The weird parts](https://www.youtube.com/watch?v=MihuqHhnFVo&list=PLi1YoijCHs8XjmuVv4Y4kDC2cOUZqjEIL&index=2)

# 자바스크립트에서 Prototypal inheritance를 구현하는 방법

## Constructor function

- 함수로 객체를 만들어내는 기법.
- 배열, 맵, 셋 등 빌트인 객체가 이 방법을 통해 구현됨.
- 가장 오래된 방법.
- Arrow function은 작동하지 않음. (그렇기 때문에 arrow function에서는 this 키워드를 사용하지 못함.)

## ES6 classes

- constructor function의 대체품.
- 하지만 실제로 ES6 classes가 돌아가는 방식은 constructor function이 돌아가는 방식과 거의 동일함.

## Object.creat()

- 쉽지만 위 두 방법에 비해서 잘 쓰이지는 않음.
