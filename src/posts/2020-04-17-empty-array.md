---
path: '/blog/empty-array'
date: '2020-04-17'
title: 'Quick JavaScript Tip: Emptying an array without losing reference'
tags: ['javascript', 'code', 'quick tip']
---

Quick JavaScript Tip: Overwriting an array's length property gives us an easy way to truncate and clear its content.

```js
const arr = [11, 22, 33, 44, 55, 66]

// truncate array
arr.length = 3 // [11, 22, 33]

// clear array without losing reference
arr.length = 0 // []
```