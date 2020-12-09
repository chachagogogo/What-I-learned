# Reference

[Wikipedia - Binary Tree](https://en.wikipedia.org/wiki/Binary_tree)  
[upGrad Blog - 5 Types of Binary Tree Explained [With Illustrations]](https://www.upgrad.com/blog/5-types-of-binary-tree/)

# 정의

Binary Tree는 트리 구조의 일종이며, 부모 노드 하나당 자식 노드를 최대 2개까지 가질 수 있다.

![예시](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Binary_tree.svg/192px-Binary_tree.svg.png)

# 용어

- node: 각각의 점
- root: 최상위 노드
- parent: 부모 노드
- child: 자식 노드
- siblings: 형제 노드
- leaf: 자식이 없는 노드
- internal node: 자식이 있는 노드
- depth: 노드로부터 루트까지 노드 간 간선의 개수
- height: 루트로부터 가장 먼 노드까지 노드 간 간선의 개수

# 구성요소

![](https://www.upgrad.com/blog/wp-content/uploads/2020/09/introduction-to-binary-trees-1.png)  
노드는 세 가지 구성요소로 이루어져 있다.

- data
- pointer to left child
- pointer to right child

# 종류

## Binary Seach Tree

![](https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/200px-Binary_search_tree.svg.png)

자식노드의 데이터 값이 부모노드보다 작으면 왼쪽으로, 크면 오른쪽으로 가지치기를 한다.

## Full Binary Tree

![](https://www.upgrad.com/blog/wp-content/uploads/2020/09/Picture2-1.jpg)  
자식이 0개 혹은 2개로만 이루어진 트리

## Complete Binary Tree

![](https://www.upgrad.com/blog/wp-content/uploads/2020/09/Picture3.jpg)  
다음 2가지 조건을 모두 충족해야 한다.

1. 뿌리로부터 가장 거리가 먼 노드들을 제외하고는 모두 자식이 2개씩 꽉 차있어야 한다.
2. 뿌리로부터 가장 거리가 먼 노드들은 왼쪽부터 차있어야 한다.

## Perfect Binary Tree

![](https://www.upgrad.com/blog/wp-content/uploads/2020/09/Picture5.jpg)

1. 모두 자식노드를 0개 혹은 2개만 가지고 있고,
2. 모두 같은 깊이를 가지고 있다.
