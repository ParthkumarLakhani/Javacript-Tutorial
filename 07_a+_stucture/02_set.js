// set


let s1 = new Set([10, 30, 30, 40, 40]);
// console.log(s1, typeof s1);

let s2 = new Set(["gfg", "gfg", "geeks"]);
// console.log(s2);


let s3 = new Set("fooooooood");
// console.log(s3);


let s4 = new Set();
// console.log(s4);


let s5 = new Set([ 10, 30, 30, 40, 40, "parth", "parth", {name: "parth"}, {name: "parth"}, {name: "patel"}, "patel" ]); //limitation
// console.log(s5);

// s5.add([10])
// s5.add(20)
// console.log(s5);

// s5.delete({name: "parth"}) //limitation
// s5.delete("parth")
// s5.delete(40)
// console.log(s5);

// s5.clear()
// console.log(s5);

// console.log(s5.entries());

// console.log(s5.has(40));
// console.log(s5.has({name: "parth"}))  //limitation

// console.log(s5.values())
// console.log(s5.keys())



//run in browser
// const odds = new Set([1, 3, 5, 7, 9]);
// const squares = new Set([1, 4, 9]);
// console.log(...odds.difference(squares));

// const a = new Set([1, 2, 3]);
// const b = new Map([
//   [1, "one"],
//   [2, "two"],
//   [4, "four"],
// ]);
// console.log(a.union(b)); 



/*
A Set in JavaScript is used to store a unique collection of items, meaning no duplicates are allowed.

Sets internally use a hash table which makes search, insert and delete operations faster than arrays. Please note that a hash table data structure allows these operations to be performed on average in constant time.

Set maintains the insertion of items. When we access items, we get them in the same order as inserted.

Only unique values are allowed. If you try to add a duplicate value, it will be ignored.

A set can be created either empty or by providing an iterable like array or string.

Value equality
Value equality is based on the SameValueZero algorithm. (It used to use SameValue, which treated 0 and -0 as different. Check browser compatibility.) This means NaN is considered the same as NaN (even though NaN !== NaN) and all other values are considered equal according to the semantics of the === operator. Also, for object keys, equality is based on object identity. They are compared by reference, not by value. See Using the Set object for examples.


Key Characteristics of Sets
  Unique Values:      Sets only contain unique elements, automatically removing duplicates.
  Ordered:            Sets maintain the order of elements as they are inserted.
  Iterable:           You can iterate through Sets using loops like for...of or forEach.
  No Indexing:        Sets don’t support indexing; you must iterate to access elements.



Methods of Set in JavaScript
  Set.add():      Adds the new element with a specified value at the end of the Set object.
  Set.delete():   deletes an element with the specified value from the Set object. 
  Set.clear():    The Set clear() method in JavaScript is used for the removal of all the elements from a set and making it empty.
  Set.entries():  Returns an iterator object which contains an array having the entries of the set, in the insertion order. 
  Set.has():      Returns true if the specified value is present in the Set object. 
  Set.values():   Returns all the values from the Set in the same insertion order.
  Set.keys():     Also returns all the values from the Set in the insertion order. 
  Set.forEach():  executes the given function once for every element in the Set, in the insertion order.


*/










//------------------------------------------------------------weak set--------------------------------------------------



let weakSet = new WeakSet();


let obj1 = { name: "Pranjal" };
let obj2 = { name: "Pranav" };
weakSet.add(obj1);
weakSet.add(obj2);

// console.log(weakSet, typeof weakSet)

// console.log(weakSet.has(obj1))

weakSet.delete(obj1)

obj2=null

// console.log(weakSet.has(obj1))

// console.log(weakSet.has(obj2))





/*

A WeakSet in JavaScript is a collection of unique objects where the values are weakly referenced. It works similarly to a Set, but the objects stored in a WeakSet can be garbage-collected when no longer in use.

A WeakSet can only store objects, not primitive values like strings or numbers.
Objects in a WeakSet can be automatically removed when they are no longer referenced elsewhere, helping to manage memory efficiently.

Syntax
  const weakSet=new WeakSet()

  The syntax const weakSet = new WeakSet(); initializes a new empty WeakSet in JavaScript. It creates a collection that can only store objects and automatically removes objects when they are no longer in use.


How a Weak Set Works
  A WeakSet can only store objects as its values. Primitive values like numbers, strings, or booleans cannot be added.
  The objects stored in a WeakSet are weakly referenced, meaning that they can be garbage-collected if there are no other references to them.
  Unlike a regular Set, you cannot iterate over the values of a WeakSet (e.g., using forEach()), as it doesn't provide methods for iteration due to weak references.
  When an object in a WeakSet is no longer referenced elsewhere, it will be automatically removed from the WeakSet, helping to avoid memory leaks.
  A WeakSet only allows unique objects, meaning the same object cannot be added multiple times. However, it doesn't allow checking the size or accessing individual elements directly.

Components of a Weak Set
  Objects as data:    A WeakSet can only store objects, not primitive values like numbers or strings.
  Weak References:    The objects in a WeakSet are weakly referenced, which means they can be garbage-collected when no longer in use.
  Uniqueness:         Each object in a WeakSet must be unique; duplicate objects are not allowed.
  No Iteration:       You cannot loop through or access the items in a WeakSet.
  No Size Property:   Unlike other collections, a WeakSet does not provide a way to check how many items it contains.



Advantages of Weak Set
  Memory Management:    Objects in a WeakSet can be garbage collected when no longer in use, preventing memory leaks.
  No Duplicates:        A WeakSet only stores unique objects, preventing duplicate entries and ensuring efficient data storage.
  Fast Lookups:         Checking if an object is in a WeakSet is efficient, with constant time complexity (O(1)).
  Automatic Cleanup:    When an object is no longer referenced elsewhere, it is automatically removed from the WeakSet, reducing the need for manual cleanup.
  Private Data:         WeakSet is useful for storing private data, especially for associating metadata with objects without exposing it publicly.


Conclusion
  In conclusion, a WeakSet in JavaScript is a powerful tool for managing collections of unique objects with automatic memory management. By allowing objects to be garbage collected when no longer referenced, it helps prevent memory leaks and ensures efficient resource usage. Though limited in features like iteration, its unique properties make it ideal for specific use cases such as storing private data and improving memory efficiency.

*/




/* difference between set and object 


Data Structure
  Collection of unique values
  Collection of key-value pairs


Uniqueness
  Values must be unique; duplicates are ignored	
  Keys must be unique; multiple properties can share the same value


Key Types	
  No keys (values are the elements)	
  Keys must be strings or Symbols


Accessing Data	
  Cannot access by index or key; use has() to check for existence or iterate over values	
  Access values using their corresponding string/Symbol key (e.g., obj.key or obj['key'])


Size
  Use the .size property	
  No direct size property; calculate length using Object.keys(obj).length (an O(n) operation)


Iteration Order	
  Elements are iterated in insertion order	
  Properties are iterated in insertion order (guaranteed in modern JS versions)


Performance
  add(), delete(), and has() operations are generally faster (O(1) on average) for large datasets	
  Operations like delete can be slower or require workarounds (e.g., spread operator); checking for existence (hasOwnProperty) is fast


Use Case	
  Useful for membership testing and removing duplicates from a collection	
  Standard use for structured data where names are meaningful (e.g., user profiles with name, email, address)










| Feature          | Object                      | Set                       |
| ---------------- | --------------------------- | ------------------------- |
| Data structure   | Key → Value                 | **Values only**           |
| Duplicate values | Allowed                     | ❌ **Not allowed**        |
| Key concept      | Required                    | ❌ No keys                |
| Order            | Not guaranteed              | ✅ **Insertion order**    |
| Size             | `Object.keys().length`      | `set.size`                |
| Performance      | Slower for lookups          | **Fast existence checks** |
| Iteration        | `for...in`, `Object.keys()` | `for...of`, `forEach()`   |
| JSON support     | ✅ Supported                | ❌ Not supported          |






8️⃣ Real-World Use Cases
  
  Use Object when:

    You need structured data
    Keys matter (user.name, product.price)
    Working with JSON
    Representing entities

  
  Use Set when:

    You need unique values
    Removing duplicates from arrays
    Fast membership checks
    Tracking visited items (graphs, caching)




Object stores data as key–value pairs, while Set stores only unique values without keys.

the primary differences are that a Set stores a collection of unique values with no associated keys, while a plain Object stores a collection of unique keys (strings or Symbols) each associated with a value. A Set instance is a specific type of object with methods tailored for managing unique values. 






*/





/* difference between set and array ??

Set and Array are common data structures used to store collections of data. These data structures are different because of their unique features. Let us look at the implementation of both of these data structures.


Set
Sets are used to store collections of unique value without allowing duplication. The set is similar to the array and supports both insertion and deletion methods of the array. Sets are faster than arrays in terms of searching as they use a hash table internally for storing data and can be used to replace duplicates from other data types.


Array
The array is a data structure that is used to store data in a sequential manner of the same type. Arrays allow duplication of data and data is indexed which means that the data can be accessed according to its unique index.




Duplicates
  Allows duplicate values.	
  Stores only unique values; duplicates are automatically ignored.


Ordering
  Maintains the order of elements based on their indices.	
  Elements are not indexed and their specific order is not guaranteed in all implementations, though insertion order is generally preserved.


Accessing Elements	
  Elements are accessed using their numeric index (e.g., array[0]).	
  No direct index-based access. Elements are accessed via iteration or by checking for existence of a specific value.


Size Property	
  Uses the length property to count elements.	
  Uses the size property to count elements.


Membership Testing	
  Uses methods like indexOf() or includes() (linear time complexity O(n)) which can be slow for large arrays.	
  Uses the has() method (generally constant time complexity O(1)) which is very efficient, even for large sets.


Built-in Methods	
  Has a wide range of methods for sorting, mapping, filtering, and reducing (sort(), map(), filter(), reduce(), etc.).	
  Has methods for add(), delete(), clear(), and the forEach() iteration method. It does not have map(), filter(), etc..











| Feature          | Array                  | Set                    |
| ---------------- | ---------------------- | ---------------------- |
| Data storage     | Indexed list           | **Unique values only** |
| Duplicates       | ✅ Allowed              | ❌ Not allowed          |
| Order            | Preserved              | Preserved              |
| Access           | By index (`arr[0]`)    | No index access        |
| Size             | `arr.length`           | `set.size`             |
| Search           | O(n)                   | **O(1)** (avg)         |
| Built-in methods | Rich (`map`, `filter`) | Limited                |
| JSON support     | ✅ Supported            | ❌ Not supported        |







When to use which:

Use an Array when you need:
  To store elements in a specific, reliable order.
  To allow duplicate values.
  Fast random access to elements by their index.
  To perform complex data transformations using methods like map(), filter(), or reduce().

Use a Set when you need:
  To ensure all elements in a collection are unique.
  To perform fast membership testing (checking if an element exists using has()).
  To easily remove duplicates from an existing array.
  To perform mathematical set operations like union or intersection efficiently. 




🔟 When to Use What?
  Use Array when:

    Order and index matter
    You need array methods (map, reduce)
    Duplicates are meaningful
    Working with JSON



  Use Set when:

    You need unique values
    Fast lookups (has)
    Removing duplicates
    Tracking visited items


Array is an ordered, index-based collection that allows duplicates, while Set is an ordered collection of unique values optimized for fast lookups.
Set uses SameValueZero comparison
(NaN equals NaN, objects compared by reference)



*/





/*  What is difference between map and set ??

Set and Map are two types of objects that are used for storing data in an ordered manner. Both these data structures are used to store distinct types of data inside the same object. In Maps, the data is stored as a key-value pair whereas in Set data is a single collection of values that are unique.

Map
Maps are used to store data in key-value pairs where keys are used to uniquely identify an element and values contain the data associated with it.

SET
It is a collection of values that can be accessed without a specific key. The elements are unique and the addition of duplicates is not allowed. Sets are mostly used to remove duplicates from any other data structure



Data Structure	
  Stores key-value pairs (like an object)	
  Stores a collection of unique values


Access
  Values are retrieved using their associated keys	
  Values are checked for existence, not retrieved by a key


Key Types	
  Keys can be any data type (string, number, object, etc.)	
  Not applicable


Uniqueness
  Keys must be unique	
  Values must be unique


Order
  Elements maintain their insertion order	
  Elements maintain their insertion order





| Feature            | Map             | Set              |
| ------------------ | --------------- | ---------------- |
| Structure          | **Key → Value** | **Values only**  |
| Keys               | Required        | ❌ No keys       |
| Duplicate handling | Keys unique     | Values unique    |
| Value access       | `map.get(key)`  | No direct access |
| Size               | `map.size`      | `set.size`       |
| Order              | Insertion order | Insertion order  |




9️⃣ When to Use What?
  Use Map when:

    You need key-value relationships
    Keys are not strings
    Frequent add/update/delete operations
    Need metadata mapping (cache, lookup tables)


  Use Set when:

    You need unique values
    Remove duplicates from arrays
    Track visited items (DFS, BFS)
    Fast membership checks



🔥 Interview One-Liner

Map stores data as key-value pairs, while Set stores only unique values.


⚠️ Extra Interview Points

  Both introduced in ES6
  Both preserve insertion order
  Both use SameValueZero for comparison
  (NaN equals NaN, objects compared by reference)


*/

