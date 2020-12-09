# 작성중! 아직 완료되지 않은 글입니다!

# Reference

[JavaScript Data Structures: Getting Started](https://www.youtube.com/watch?v=41GSinwoMYA&list=WL&index=2)  
[How to Implement a Linked List in JavaScript
](https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/)

---

```js
const list = {
    head: {
        value: 1
        next: {
            value: 2
            next: {
                value: 3
                next: {
                    value: 4
                    next: null
                    }
                }
            }
        }
    }
};
```

[How to Implement a Linked List in JavaScript
](https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/)

```js
class LinkedList {
  constructor() {
    this.head = null; // First element of the list
    this.tail = null; // Last element of the list
  }

  append(value) {
    const newNode = { value: value, next: null };

    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }
}
```
