class DynamicArray {
    constructor() {
        this.data = {};     // Object to hold the elements
        this.length = 0;    // Track the size of the array 
    }
    
    /**
     * The most simplest method in our object.  Since we are storing the array 
     * in a hash table with the index as the key, we will just return the 
     * value set for that index.
     */
    get(index) {
        // get an item at an index
        if (index < 0 || index >= this.length) {
            throw new Error('Index out of bounds');
        }
        return this.data[index];
    }
    
    /**
     * When we `push` an item to our array, we want to add this item after the 
     * last index. Since arrays are 0-based indxing, the current `length` will 
     * also be the new index which we are pushing onto. After adding the item, 
     * we need to increment our new `length`, and the function will return 
     * the new `length` of the array.
     */
    push(item) {
        // add an item to the end of the array
        this.data[this.length] = item;      // Add at the current 'length' index 
        this.length++;      // Increment the length 
        
        return this.length;     // Return the updated length of the array 
    }
    
    /**
     * The `pop` method removes the last item from the array and returns it 
     * from the method. The last item will correspond to `length - 1`, so we 
     * will delete at that index, decrement our `length`, and then return 
     * the item.
     */
    pop() {
        // remove the last item in the array 
        if (this.length === 0) 
            return undefined;       // Handle empty array case 
        const poppedItem = this.data[this.length - 1];      // Access the last element 
        delete this.data[this.length - 1];      // Remove it 
        this.length--;      // Decrement the length 
        
        return poppedItem;      // Return the removed element 
    }
    
    /**
     * When we insert an item at an index, we change the index for all the items 
     * that come after it.  This requires using a loop to update the index 
     * for each item individually which takes linear O(n) time.
     * Notice that we start at the end of the array since this is where the 
     * empty spot is with the length increase. We increment inward until we 
     * have shifted all items from the end to the index. 
     * Now the new item can be added at that index.
     */
    insert(index, item) {
        // add an item at any index
        // Ensure we're inserting inside a valid array length 
        if (index < 0 || index > this.length) {
            throw new Error('Index out of bounds');
        }
        
        // Shift items to the right to make space for the new item.
        for (let i = this.length; i > index; i--) {
            this.data[i] = this.data[i - 1];
        }
        
        this.data[index] = item;        // Insert the new element 
        this.length++;                  // Increment the length 
        
        return this.data;       // Return the array 
    }
    
    /**
     * When we delete an item at an index, we again change the index for all 
     * the items that come after it. This requires using a loop to update the 
     * index for each item individually which takes linear O(n) time.
     * This time we start at the item we're removing and replace the current 
     * value with the one that comes after. Once we reach the end of the array, 
     * we delete the last item since our length has shrunk by 1 and that item 
     * was moved inward.
     */
    remove(index) {
        // remove an item at any index 
        // Ensure we're removing an item inside the array 
        if (index < 0 || index >= this.length) {
            throw new Error('Index out of bounds');
        }
        
        const itemToBeRemoved = this.data[index];       // Store the item to return 
        
        // Shift element to the left to fill the gap 
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        
        delete this.data[this.length - 1];      // Remove the last item 
        this.length--;      // Decrement the length 
        
        return itemToBeRemoved;     // Return the removed item 
    }
}


/** 
 * USAGE EXAMPLE
 */
const arr = new DynamicArray();

// Adding elements
arr.push(10);
arr.push(20);
arr.push(30);
console.log(arr);

// Retrieving elements
console.log(arr.get(1));

// Inserting elements 
arr.insert(1, 15);
console.log(arr);

// Removing the last element 
console.log(arr.pop());
console.log(arr);

// Removing an element at a specific index 
console.log(arr.remove(1));
console.log(arr);
