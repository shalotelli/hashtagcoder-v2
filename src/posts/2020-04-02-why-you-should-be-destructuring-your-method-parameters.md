---
path: '/blog/destructuring-method-parameters-in-es6'
date: '2020-04-02'
title: 'Why you should be destructuring your method parameters in ES6'
tags: ['javascript', 'code', 'quick tip']
cover: ../images/cover/artem-sapegin-ZMraoOybTLQ-unsplash.jpg
---

A lot of times when we're defining methods and creating classes, we use "config objects" to group parameters in a neat way so that we don't have long, hard to maintain method calls. Config objects are also an awesome way to create optional parameters or set default values. 

Pre ES6, we would do this all manually like this:

```js
function newPet(config) {
  var type = config.type || 'cat'
  var name = config.name || 'Snoopy'
  var color = config.color || 'black'

  // ...
}

newPet({type: 'dog', name: 'Dexter', color: 'brown'})
```

Aside from the benefits, what this pattern doesn't give us is an idea of what parameters an object expects at a quick glance. Also it doesn't play nice with VSCode autocomplete because there's no definition. ES6 gives us the ability to neatly define these parameters in a cleaner way, set default values and even make the whole object optional.

ES6 destructuring:

```js
function newPet({type: 'cat', name: 'Snoopy', color: 'black'}) {
  // ...
}
```

Optional config:

```js
function newPet({type: 'cat', name: 'Snoopy', color: 'black'} = {}) {
  // ..
}
```