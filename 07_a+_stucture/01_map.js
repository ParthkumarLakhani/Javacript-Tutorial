// map 

// Map() constructor allows two ways to create a Map in JavaScript.
// Passing an Array to   new Map()
// Create a Map and use  Map.set()

// const map = new Map();
// const map = Map.set();

/*
The Map object holds key-value pairs and remembers the original insertion order of the keys. 
Any value (both objects and primitive values) may be used as either a key or a value.

Internally use Hashing that makes time complexities of operations like search, insert and delete constant or O(1) on average.

Only Unique Keys are allowed, if we insert the same key with a different value, it overwrites the previous one.

It is always recommended to use Maps over Objects when we have frequent insert and delete operations.


Properties of JavaScript Map
  set(key, val) :    Adds or updates an element with a specified key and value.
  get(key) :         Returns the value associated with the specified key.
  has(key) :         Returns a boolean indicating whether an element with the specified key exists.
  delete(key) :      Removes the element with the specified key.
  clear():           Removes all elements from the Map.
  size:              Returns the number of key-value pairs in the Map.



Advantages of Using Maps:
  Key order:        Maps remember the insertion order of the keys.
  Performance:      Inserting and retrieving elements from a Map are generally faster than objects, especially when the number of elements is large.
  Any type of key:  Unlike objects, Map keys can be of any data type, including functions, objects, and primitive types.

*/


const wrongMap = new Map();
wrongMap["bla"] = "blaa";
wrongMap["bla2"] = "blaaa2";

console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }

/*
 But that way of setting a property does not interact with the Map data structure. It uses the feature of the generic object. 
 The value of 'bla' is not stored in the Map for queries. Other operations on the data fail:
*/
wrongMap.has("bla"); // false
wrongMap.delete("bla"); // false
console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }


// The correct usage for storing data in the Map is through the set(key, value) method.

const contacts = new Map();
contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
contacts.has("Jessie"); // true
contacts.get("Hilary"); // undefined
contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });
contacts.get("Jessie"); // {phone: "213-555-1234", address: "123 N 1st Ave"}

// contacts.delete("Raymond"); // false
// contacts.delete("Jessie"); // true

console.log(contacts);
console.log(contacts.size); // 1


/* what is diffrence between Map and Object ??

*/