## Implement an Array

We will implement an array using an object, and it will have the methods `get`, `push`, `pop`, `insert`, and `remove`.  We will also need to track the `length` of the array.  Calling `get`, `push`, `pop`, and `length` should all take *O(1)* time, and `insert`/`remove` will take *O(n)* time.

The reason `insert` and `remove` require *O(n)* time is that we need to shift the items to re-index them to their new spot in the array.

Visually, what we're creating is: 

```js
class DynamicArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    // get an item at an index
  }

  push(item) {
    // add an item to the end of the array
  }

  pop() {
    // remove the last item in the array
  }

  insert(index, item) {
    // add an item at any index
  }

  remove(index) {
    // remove an item at any index
  }
}
```

In the constructor, we initialize our `length` to 0 and the array's `data` to an empty hash table.
