getter와 setter는 accessor라고 불린다.  
객체 외부에서 객체 내부에 접근할 수 있게 해주기 때문이다.  
둘 다 함수인데 마치 obj[property]처럼 사용할 수 있다.

get은 외부에서 내부의 정보를 가져올 때 사용한다.  
set은 외부에서 내부의 정보를 설정해줄 때 사용한다.

```js
const scoreSheet = {
  name: '김학생',
  scores: [70, 90, 80, 85],

  get latest() {
    return this.scores.slice(-1).pop();
  },

  set latest(score) {
    this.scores.push(score);
  },
};

console.log(scoreSheet.latest); // 85

scoreSheet.latest = 100;
// 이렇게 set을 해주면 scores는 [70, 90, 80, 85, 100]으로 변한다.
console.log(scoreSheet.scores); // 100
```
