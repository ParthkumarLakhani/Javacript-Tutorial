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


Key equality
Value equality is based on the SameValueZero algorithm. (It used to use SameValue, which treated 0 and -0 as different. Check browser compatibility.) This means NaN is considered the same as NaN (even though NaN !== NaN) and all other values are considered equal according to the semantics of the === operator. Also, for object keys, equality is based on object identity. They are compared by reference, not by value. See Using the Map object for examples.


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

// console.log(wrongMap, typeof wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }

/*
 But that way of setting a property does not interact with the Map data structure. It uses the feature of the generic object. 
 The value of 'bla' is not stored in the Map for queries. Other operations on the data fail:
*/
wrongMap.has("bla"); // false
wrongMap.delete("bla"); // false
// console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }


// The correct usage for storing data in the Map is through the set(key, value) method.

const contacts = new Map();
contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
contacts.has("Jessie"); // true
contacts.get("Hilary"); // undefined
contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });
contacts.get("Jessie"); // {phone: "213-555-1234", address: "123 N 1st Ave"}

// contacts.delete("Raymond"); // false
// contacts.delete("Jessie"); // true

// console.log(contacts);
// console.log(contacts.size, typeof contacts); // 1
















//----------------------------week map----------------------------------------------

const m = new WeakMap();

obj1 = {index: 0} 
m.set(obj1, "Object 1");
obj2 = {}
m.set(obj2, "Object 2");


m.delete(obj2);


// console.log(m, typeof m);


// console.log(m.get(obj1));


// console.log(m.has(obj1));

//The reason you're seeing WeakMap { <items unknown> } is that WeakMap keys are not enumerable. This is by design - JavaScript engines don't expose WeakMap contents through normal inspection methods to allow garbage collection to work properly.


/*
WeakMap is a new Data Structure or Collection introduced in ES6. WeakMaps allows you to store a collection of Key-Value pairs. It adopts the same properties of Map. 

The Major difference is that keys of WeakMap cannot be a primitive data type. The keys must be of type object and values can be of any data type. 

Another major difference is that the key of WeakMap is weakly referenced. It means that whenever an object is used as a key for WeakMap, that object can be garbage collected. It can happen when the reference to that object is lost( i.e. assign that object reference to NULL). And when the object is no longer in use, JavaScript Garbage Collection detects it and frees it from the memory. Therefore keys of WeakMaps are weakly referenced.


Syntax:
  const m = new WeakMap();
Parameters: It is an Iterable object whose Elements are in form of Key-Value Pair.

 
Functions of WeakMap:
  set(key, value): It is used to add an element(Key-Value Pair) to the WeakMap Object.
  get(key): It returns the Value associated with the specified "key".
  has(key): This function is used to check if the "key" specified exists in WeakMap or not. Returns true if it is present and false if it is not present.
  delete(key): Remove an element of specified "key", from the WeakMap Object.

*/









/* what is diffrence between Map and Object ??

Object is similar to Map—both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. For this reason (and because there were no built-in alternatives), Object has been used as Map historically.


Maps offer better performance for frequent additions or deletions. For read heavy operations where strings are keys, Objects provide better performance.

Object allows only Strings and Symbols as keys, but Map maintains key order and allows any data type (including objects) as keys.

JSON directly supports Objects. To create a JSON object from map, we first need to convert the map into an object.

Maps maintain order of insertion of items. Objects are not ordered.

Maps support functions like get(), set(), has() and delete() which are not there in Objects.

Maps also have size property to quickly get the size.

Object have properties inherited from Prototype Chain and we need to be careful to make sure that the key names that we use do not clash with existing properties. For 

example toString(). Please see the below code. Maps do not require such caution and simpler to use.




| Feature      | Object                               | Map                                           |
| ------------ | ---------------------------------    | --------------------------------------------- |
| Key types    | `string` / `symbol` only             | **Any type** (object, function, number, etc.) |
| Order        | ❌ Not guaranteed (older JS)         | ✅ **Insertion order preserved**              |
| Size         | ❌ Manual (`Object.keys().length`)   | ✅ `map.size`                                 |
| Iteration    | `for...in`, `Object.keys()`          | `map.forEach()`, `for...of`                   |
| Performance  | Slower for frequent ops              | **Faster** for add/remove                     |
| Default keys | Has prototype keys                   | **No default keys**                           |
| JSON support | ✅ Supported                         | ❌ Not directly                               |





🔟 When to Use What?

  Use Object when:

    Working with JSON
    Data structure is fixed
    Keys are strings
    Modeling entities (user, product)


  Use Map when:

    Keys are dynamic or non-string
    Frequent add/remove
    Need ordered data
    Need better performance




Object is a general-purpose structure with string keys, while Map is an optimized key–value collection that supports any key type and preserves insertion order.



mdn

Accidental Keys
  A Map does not contain any keys by default. It only contains what is explicitly put into it.
  An Object has a prototype, so it contains default keys that could collide with your own keys if you're not careful.


Security
  A Map is safe to use with user-provided keys and values.
  Setting user-provided key-value pairs on an Object may allow an attacker to override the object's prototype, which can lead to object injection attacks  or prototype pollution attacks. Like the accidental keys issue, this can also be mitigated by using a null-prototype object.


Key Types
  A Map's keys can be any value (including functions, objects, or any primitive).
  The keys of an Object must be either a String or a Symbol.


Key Order
  

Size
  The number of items in a Map is easily retrieved from its size property.
  Determining the number of items in an Object is more roundabout and less efficient. A common way to do it is through the length of the array returned from Object.keys().


Iteration
  A Map is an iterable, so it can be directly iterated.
  Object does not implement an iteration protocol, and so objects are not directly iterable using the JavaScript for...of statement (by default).


Performance
  Performs better in scenarios involving frequent additions and removals of key-value pairs.
  Not optimized for frequent additions and removals of key-value pairs.


*/

