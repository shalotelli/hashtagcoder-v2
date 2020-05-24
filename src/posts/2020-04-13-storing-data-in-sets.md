---
path: '/blog/storing-data-in-sets'
date: '2020-04-13'
title: 'Quick JavaScript Tip: Storing unique data using Sets'
tags: ['javascript', 'code', 'quick tip']
cover: ../images/cover/skye-studios-NDLLFxTELrU-unsplash.jpg
socialCard: ../images/social-cards/storing-data-in-sets.jpg
---

Quick JavaScript Tip: Sets in JavaScript are a great way to store unique values. You can even convert Arrays to Sets to deduplicate them.

```js
const pets = [
	'cat',
	'dog',
	'rabbit',
	'dog',
	'parrot'
]

const uniquePets = new Set(pets) // {'cat', 'dog', 'rabbit', 'parrot'}
```