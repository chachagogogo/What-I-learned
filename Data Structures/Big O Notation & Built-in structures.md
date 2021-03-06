# Reference

[JavaScript Algorithms Crash Course - Learn Algorithms & "Big O" from the Ground Up!
](https://www.youtube.com/watch?v=JgWm6sQwS_I&list=WL&index=1)  
[JavaScript Data Structures: Getting Started](https://www.youtube.com/watch?v=41GSinwoMYA&list=WL&index=2)

---

# Definition

> In computer science, a data structure is a data organization, management, and storage format that enables efficient access and modification. More precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data. (Wikipedia - [Data Structure](https://en.wikipedia.org/wiki/Data_structure))

# Big O Notation

> Big O notation is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. Big O is a member of a family of notations invented by Paul Bachmann, Edmund Landau, and others, collectively called Bachmann–Landau notation or asymptotic notation.
>
> In computer science, big O notation is used to classify algorithms according to how their run time or space requirements grow as the input size grows. In analytic number theory, big O notation is often used to express a bound on the difference between an arithmetical function and a better understood approximation; a famous example of such a difference is the remainder term in the prime number theorem.  
> (Wikipedia - [Big O Notation](https://en.wikipedia.org/wiki/Big_O_notation))

The notation is not for measuring the exact time, just an estimate.

- O(1): constant time
- O(n): linear time
- O(n^2): quadratic time
- O(n^3): cubic time

You can derive it by counting the number of expression executions.  
For example, if you use the iteration loop for adding up the numbers 1, 2, 3, 4, ... , n, its notation will be O(n). but if you use the formula (n / 2) \* (n + 1), it will be O(1).

# Built-in structures

## Different Tasks require Different Data Structures

| if you need these features...                  | use this! |
| ---------------------------------------------- | --------- |
| ordered list of data, duplications allowed     | array     |
| unordered list of data, no duplications wanted | set       |
| key-value pairs of unordered data              | object    |
| key-value pairs of ordered, iterable data      | map       |

## array

- insertion order is kept
- element access via index
- iterable(=you can use the 'for ... of' loop)
- size(length) adjusts dynamically -> the feature of JS(not every programming lauguages)
- duplicate values are allowed
- deletion and finding can require "extra work" (computer needs to do those things from zero)

## set

- insertion order is not stored / memorized
- element access and extraction via method
- iterable(=you can use the 'for ... of' loop) -> but the order is not guaranteed
- size(length) adjusts dynamically
- duplicate values are not allowed(i.e. unique values only)
- deletion and finding elements is trivial and fast(because the order isn't relevant)

=> good for storing IDs

## object

- unordered key-value pairs of data
- element access via key(property name)
- not iterable(only with the 'for ... in' loop)
- keys are unique, values are not (if the key is duplicated, the value of it will be overwritten)
- keys have to be string, numbers, or symbols
- can store data & 'functionality'(methods) ->

Objects can have methods attached to them!  
They can have functionality!  
(you need to study 'prototype' to understand this)

```js
const obj = {
  name: "Haeseung",
  randomNumber: 1234,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

console.log(obj.greet()); // 'HI, I am Haeseung'
```

## map

- ordered key-value pairs of data
- element access via key
- iterable(=you can use the 'for ... of' loop)
- keys are unique, values are not
- keys can be anything (including reference values like arrays)
- pure data storage, optimized for data access(keys and values are not for functionality)

```js
const example = new Map();

example.set("a", 0);
example.set("b", 1);

const korea = { name: "korea", population: 51 };

example.set(korea, 2);
```

=> you can't use the dot notation or the bracket notation to get the value.  
you use the 'get' method to do that.

=> if you want to do something with the key that is an object, you should use the variable name('korea' for example above). not the object itself({ name: "korea", population: 51 } for example above) because objects are reference values.
