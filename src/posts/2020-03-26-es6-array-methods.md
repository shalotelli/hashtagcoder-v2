---
path: '/blog/es6-array-methods'
date: '2020-03-26'
title: 'Every ES6 Array method you must know to be a JavaScript Expert'
---

Arrays are ordered list-like objects with basic methods that allow us to perform traversals and mutations. Before ES6, libraries like jQuery, MooTools and Underscore were created to extend and add additional methods that allowed us to clone arrays, search and find elements within arrays etc. With the ES6+ releases, a lot of this functionality has been added natively. 

Below is a categorized list of these methods along with descriptions, use cases and example code.

### Creating & Merging

Methods that allow us to create and merge arrays provide some of the fundamental functionality we need to be able to manipualte our data both mutably and immutably.

#### concat()

The `concat` methods allows us to merge two or more arrays, and returns a new array. The example below shows how to merge 2 different arrays, regardless of the element types.

```js
const animals = [
  {
    type: 'Dog',
    sound: 'woof'
  },

  {
    type: 'Cat',
    sound: 'meow'
  }
]

const names = ['Dexter', 'Snoopy']

const pets = animals.concat(names)

// pets = [{type: 'Dog', sound: 'woof'}, {type: 'Cat',sound: 'meow' }, 'Dexter', 'Snoopy']
```

In JavaScript, arrays are usually passed by reference. This means if you assign an existing array to a new variable `js›const pets = names` you're actually just telling `pets` where the `names` array is in memory, rather than telling passing the data. If you add data to `names`, it also adds it to `pets`. With modern frameworks like React and Angular that rely on immutability for change detection, you're not going to be able to make use of a lot of the data binding advantages.

One cool feature of `concat` that can help us overcome this is using it to create clones of our arrays. In the example below, we use concat and pass it a new empty array which clones the `names` array instead of passing it by reference.

```js
const animals = [
  {
    type: 'Dog',
    sound: 'woof'
  },

  {
    type: 'Cat',
    sound: 'meow'
  }
]

const names = ['Dexter', 'Snoopy']

const pets = names.concat([])

pets.push('Rocky')

// names = ['Dexter', 'Snoopy']
// pets = ['Dexter', 'Snoopy', 'Rocky']
```

&nbsp;

#### fill()
The `fill` method allows us to fill the elements in an array with a static value. In the example below, we create a `dog` object with a type and a sound, and then create an array names `pets` that is prefilled with 2 dogs. We could then add a name to each dog.

```js
const dog = {
  type: 'dog',
  sound: 'woof'
}

const pets = new Array(2).fill(dog)

// pets = [{type: 'Dog', sound: 'woof'}, {type: 'Dog', sound: 'woof'}]
```

&nbsp;

#### from()
The `from` method creates an array from any object or iterable value. For example if we want to split a string into an array with each letter as a separate element  we could do the following.

```js
const sound = Arra.from('woof')

// sound = ['w', 'o', 'o', 'f']
```

&nbsp;

### Foreach vs Map

ES6 brings us a couple of different methods that allow us to iterate over elements in an array, each with their own purpose. One common gotcha is the difference between `forEach` and `map`. Both methods do the same thing but the output is slightly different.

#### forEach()

The `forEach` method calls a given function once for each array element. In the example below, we run a function that assigns a name to each of our animals.

```js
const animals = [
  {
    type: 'Dog',
    sound: 'woof'
  },

  {
    type: 'Cat',
    sound: 'meow'
  }
]

const names = ['Dexter', 'Snoopy']

animals.forEach((animal, index) => {
  animal.name = names[index]
})

// animals = [{type: 'Dog', sound: 'woof', name: 'Dexter'}, {type: 'Cat',sound: 'meow', name: 'Snoopy' }]
```

&nbsp;

#### map()
The `map` method works in a similar way to `forEach`, but instead of modifying the original array, it creates a new array with the results of calling a function for each array element.

```js
const animals = [
  {
    type: 'Dog',
    sound: 'woof'
  },

  {
    type: 'Cat',
    sound: 'meow'
  }
]

const names = ['Dexter', 'Snoopy']

const pets = animals.map((animal, index) => {
  animal.name = names[index]
  return animal
})

// pets = [{type: 'Dog', sound: 'woof', name: 'Dexter'}, {type: 'Cat',sound: 'meow', name: 'Snoopy' }]
```

&nbsp;

### Testing & Filtering

Some of the coolest new methods that ES6 gives us natively are the ones that let us easily filter array elements to return just the ones that we want, and test arrays to check presence of values. What makes them so powerful is the ability to filter arrays of objects by looking for specific values within the objects like we do in the some of the examples below.

#### filter()

The `filter` method creates a new array with all elements that pass the test in a testing function. In the example below, we use the `filter` method to find the "cat" object.

```js
const animals = [
  {
    type: 'Dog',
    sound: 'woof'
  },

  {
    type: 'Cat',
    sound: 'meow'
  }
]

const names = ['Dexter', 'Snoopy']

const cat = animals.filter(x => x.type === 'Cat')

// cat = [{type: 'Cat',sound: 'meow' }]
```

&nbsp;

#### every()

This method checks to see if every element in an array passes a test in a given testing function. For example, let's check to see whether every animal in our `animals` array is a cat.

```js
const animals = [
  {
    type: 'Dog',
    sound: 'woof'
  },

  {
    type: 'Cat',
    sound: 'meow'
  }
]

const areAllCats = animals.every(x => x.type === 'Cat')

// areAllCats = false
```

&nbsp;

#### isArray()

The `isArray` method is a helper method that determines whether the passed value is an array or not.

```js
const thisIsAnArray = [1, 2, 3]
const thisIsNotAnArray = 'not an array'

Array.isArray(thisIsAnArray) // true
Array.isArray(thisIsNotAnArray) // false
```

&nbsp;

#### some()

The `some` method checks if **any** of the elements in an array passes the test in a testing function.

```js
const animals = [
  {
    type: 'Dog',
    sound: 'woof'
  },

  {
    type: 'Cat',
    sound: 'meow'
  } 
]

const areSomeCats = animals.some(x => x.type === 'Cat')

// areSomeCats = false
```

&nbsp;

### Reducers

Reduce methods allow us to **reduce** the values of an array into a single value. An example of this is calculating the sum of an array of numbers. The methods take two parameters, an accumulator function and a default value. The accumulator function also takes two parameters, the previous (or accumulated) value, and the current value being iterated over.

#### reduce()

The `reduce` method reduces the values of an array to a single value from _left to right_.

```js
const sum = [1, 2, 3].reduce((previousValue, currentValue) => previousValue + currentValue, 0)
/// sum = 6
```

&nbsp;

#### reduceRight()

The `reduceRight` method reduces the values of an array to a single value from _right to left_.

```js
const sum = [1, 2, 3].reduceRight((previousValue, currentValue) => previousValue + currentValue, 0)
/// sum = 6
```

&nbsp;

### Search & Find

Like filtering, native search methods give us great and efficient ways to find elements within arrays.

#### find()

The `find` method returns the value of the first element in an array that passes a test in a given testing function. In the example below, we look for an animal whose type is at least 3 characters long.

```js
const animals = [
  {
    type: 'Dog',
    sound: 'woof'
  },

  {
    type: 'Cat',
    sound: 'meow'
  } 
]

const firstThreeCharAnimal = animals.find(x => x.type.length >= 3)

// firstThreeCharAnimal = {type: 'Dog', sound: 'woof'}
```

&nbsp;

#### findIndex()
 
This method is similar to the `find` method, except it returns the **index** of the first element in an array that pass the test in a given testing function.

```js
const animals = [
  {
    type: 'Dog',
    sound: 'woof'
  },

  {
    type: 'Cat',
    sound: 'meow'
  } 
]

const firstThreeCharAnimal = animals.findIndex(x => x.type.length >= 3)

// firstThreeCharAnimal = 0
```

&nbsp;

#### includes()

This method is similar to the `find` and `findIndex` methods in that it determines whether an array includes a certain element, however instead of returning an index or an element, it returns a boolean.

```js
const names = ['Dexter', 'Snoopy']

const hasSnoopy = names.includes('Snoopy')

// hasSnoopy = true
```

&nbsp;

#### indexOf()
The `indexOf` methods searches an array for an element and returns its **first** index. If an element is not found, the method returns -1.

```js
const names = ['Dexter', 'Snoopy']

const snoopyIndex = names.indexOf('Snoopy')

// snoopyIndex = 1
```

&nbsp;

#### lastIndexOf()

This method is similar to the `indexof` method where it searches an array for an element, however it starts at the end, and returns its last index.

```js
const names = ['Dexter', 'Snoopy', 'Dexter']

const firstDexter = names.indexOf('Dexter')
const lastDexter = names.lastIndexOf('Dexter')

// firstDexter = 0
// lastDexter = 2
```

&nbsp;

### Pushing & Popping

The `push`, `pop`, `shift` and `unshift` methods are all methods that allow us to add and remove elements from an array.

#### pop()

The `pop` method removes the last element from an array, and returns that element. It "pops" it off the stack.

```js
const names = ['Dexter', 'Snoopy']
const lastElement = names.pop()

// names = ['Dexter']
// lastElement = 'Snoopy'
```

&nbsp;

#### push()

The `push` method is complementary to the `pop` method. It adds one or more elements to the end of an array, and returns the array's new length. It "pushes" it to the stack.

```js
const names = ['Dexter', 'Snoopy']
const newArrayLength = names.push('Rocky')

// names = ['Dexter', 'Snoopy', 'Rocky']
// newArrayLength = 3
```

&nbsp;

#### shift()

The `shift` method works the same as the `pop` method, but it removes the **first** element from an array, and returns that element.

```js
const names = ['Dexter', 'Snoopy']
const firstElement = names.shift()

// names = ['Snoopy']
// firstElement = 'Dexter'
```

&nbsp;

#### unshift()

The `unshift` method is complementary to the `shift` method and works the same way as `push`, however it add new elements to the **beginning** of an array, and returns the array's new length.

```js
const names = ['Dexter', 'Snoopy']
const newArrayLength = names.unshift('Rocky')

// names = ['Rocky', 'Dexter', 'Snoopy']
// newArrayLength = 3
```

&nbsp;

### Slice vs Splice

The `slice` and `splice` methods always get confused. They're used in similar ways, their names are similar but there are subtle differences.

#### slice()

The `slice` method selects a part of an array, and returns it as a new array. This doesn't modify the original array. The method takes two parameters, a start index and a length. In the example below, we wremove the first element and return it in a new array.

```js
const names = ['Dexter', 'Snoopy']
const nameSlice = names.slice(0, 1)

// names = ['Dexter', 'Snoopy']
// nameSlice = ['Dexter']
```

&nbsp;

#### splice()

The `splice` method can be used to add and remove elements from an array. This modifies the original array. The method then returns the removed elements. What makes this method interesting is that instead of just taking the start index and length parameters, it can also take an unlimited number of additional parameters. These additional elements are added to the original array at the start index. We're essentially replacing elements with others. In the example below, we're removing the first name "Dexter" and replacing it with the name "Rocky".

```js
const names = ['Dexter', 'Snoopy']
const nameSplice = names.splice(0, 1, 'Rocky')

// names = ['Rocky', 'Snoopy']
// nameSplice = ['Dexter']
```

&nbsp;

### Sorting

Arrays are ordered objects. This means we're able to sort them. JavaScript gives us a default `sort` method, but by passing a function, we can actually custom sort the data within our array.

#### sort()

The `sort` method sorts the elements of an array. The default functionality is to try and sort our data into ascending order. In the first example below, we can see we're able to sort arrays consisting of numbers and words.

```js
const randomNumbers = [6, 3, 5, 8, 2]
const randomWords = ['World', 'Hello', 'Hashtag Coder']

const sortedRandomNumers = randomNumbers.sort()
const sortedRandomWords = randomWords.sort()

// sortedRandomNumers = [2, 3, 5, 6, 8]
// sortedRandomWords = ['Hashtag Coder', 'Hello', 'World']
```

The `sort` method takes an optional compare function. The compare function takes two parameters, the value being sorted and the value being compared against. This allows us to specify how we want our data sorted. In the example below, we're able to write compare functions that sort our data in both ascending and descending order.

```js
const ages = [4, 7, 3]

const ascSort = ages.sort((a, b) => a - b)
const descSort = ages.sort((a, b) => b - a)

// ascSort = [3, 4, 7]
// descSort = [7, 4, 3]
```

This is a lot to take in so to break this out further, the long version of sorting our data in ascending order looks like this.

```js
const ages = [4, 7, 3]

ages.sort((a, b) => {
  if (a > b) {
    return 1
  } else if (a < b) {
    return -1
  }

  return 0
})
```

The long form version of descending sort would look like this.

```js
const ages = [4, 7, 3]

ages.sort((a, b) => {
  if (a > b) {
    return -1
  } else if (a < b) {
    return 1
  }

  return 0
})
```

We can also sort arrays of object by the objects properties. In the example below, we're sorting our pets by their ages, from oldest to youngest.

```js
const pets = [
  {
    type: 'Dog',
    name: 'Dexter',
    age: 3
  },

  {
    type: 'Cat',
    name: 'Snoopy',
    age: 5
  }
]

const sortedPets = pets.sort((a, b) => b.age - a.age)

// sortedPets = [{ type: 'Cat', name: 'Snoopy', age: 5 }, { type: 'Dog', name: 'Dexter', age: 3 }]
```

&nbsp;

#### reverse()

The `reverse` method literally reverses the order of the elements in an array.

```js
const names = ['Dexter', 'Snoopy']
const reversedName = names.reverse()

// names = ['Dexter', 'Snoopy']
// reversedNames = ['Snoopy', 'Dexter']
```

&nbsp;

### Display

Display methods are helper methods that allow us to convert the data in our array into something more readable.

#### join()
The `join` method joins all elements of an array into a string. It takes a separator parameter to split the elements. In the example below, given an array of words we can use the `join` method to separate them with a space.

```js
const wordsToSentence = ['Hello', 'World'].join(' ')

// wordsToSentence = 'Hello World'
```

&nbsp;

#### toString()

The `toString` method works in a similar way to `join` in that it converts an array to a string, and returns the result.

```js
const wordsToSentence = ['Hello', 'World'].toString()

// wordsToSentence = 'Hello World'
```

&nbsp;

### Iterators

An iterator is an object that keeps track of its current position while accessing items in a collection, one at a time. It iterator returns an object with two properties, `done` and `value`. It also provides us with a `next` method which returns the next item in the sequence. When the sequence completes, `value` equals `js›undefined` and `done` equals `js›true`.

ES6 arrays expose three iterator methods, `entries`, `keys` and `values`.

#### entries()

The `entries` method returns a key/value pair Array Iteration Object.

```js
const words = ['Hello', 'World']

const entries = words.entries() // { [Iterator] }

let next = entries.next() // { value: [0, 'Hello'], done: false }
next = entries.next() // { value: [1, 'World'], done: false }
next = entries.next() // { value: undefined done: true }
```

&nbsp;

#### keys()

This method returns an Array Iteration Object, containing the keys of the original array.

```js
const words = ['Hello', 'World']

const entries = words.keys() // { [Iterator] }

let next = entries.next() // { value: 0, done: false }
next = entries.next() // { value: 1, done: false }
next = entries.next() // { value: undefined done: true }
```

&nbsp;

#### values()

The `values`method returns an Array Iteration Object, containing the values of the original array.

```js
const words = ['Hello', 'World']

const entries = words.values() // { [Iterator] }

let next = entries.next() // { value: 'Hello', done: false }
next = entries.next() // { value: 'World', done: false }
next = entries.next() // { value: undefined done: true }
```