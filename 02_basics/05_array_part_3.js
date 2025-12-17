// Why arrays are objects?
// Short answer:  Arrays are objects because JavaScript has only one complex data structure: objects. Arrays are just specialized objects optimized for indexed data.


/*
Step-by-step explanation

1️⃣ JavaScript has two main categories of values
🔹 Primitive types
string, number, boolean, null, undefined, symbol, bigint

🔹 Non-primitive type
object

That’s it.
There is no separate “array” type at the language level.


2️⃣ Arrays are a special kind of object

  const arr = [10, 20, 30];

  typeof arr;           // "object"
  arr instanceof Object // true
  arr instanceof Array  // true


  So:
    ✔ Array → Object

    ❌ Object → Array (not always)



3️⃣ Internally, arrays work like objects

  This:

  const arr = [10, 20, 30];

  Is conceptually similar to:

  const arr = {
    0: 10,
    1: 20,
    2: 30,
    length: 3
  };


  Keys are:

  Strings internally ("0", "1", "2")

  Stored like object properties

  That’s why this works:

  arr["0"]; // 10
  arr[0];   // 10



4️⃣ Why not make arrays a separate type?

  💡 Design simplicity & flexibility

  JavaScript was designed to:
    Be simple
    Be fast to implement
    Reuse existing object mechanisms

  So instead of creating:
    a new memory model
    a new property system

  JavaScript made arrays:
    Objects with special behavior



5️⃣ What makes arrays “special” then?

  Arrays have extra internal optimizations:

  ✅ Special behaviors

  Automatic length tracking
  Optimized memory layout (in modern engines)
  Built-in methods (push, pop, map, filter, etc.)
  Numeric index handling

  const a = [];
  a.push(1);
  a.push(2);

  console.log(a.length); // 2

  Objects don’t do this automatically.


6️⃣ Proof that arrays are objects
  You can add custom properties
  const arr = [1, 2, 3];
  arr.name = "myArray";

  console.log(arr.name); // "myArray"

  That’s object behavior.


7️⃣ But arrays are NOT “just objects”
Important differences 👇

| Feature         | Array       | Object        |
| --------------- | ----------- | ------------- |
| Ordered         | ✅ Yes       | ❌ No          |
| length property | ✅ Auto      | ❌ No          |
| Numeric indexes | ✅ Optimized | ❌ Normal keys |
| Array methods   | ✅ Yes       | ❌ No          |

That’s why this check exists:

  Array.isArray(arr); // true

  ⚠️ Never use:

  typeof arr === "array" // ❌ wrong



8️⃣ Real Node.js bug example (very common)
  const users = [];
  users.id = 123;
  JSON.stringify(users);
  // "[]"


  Why?
  Only numeric indexes are serialized
  Object-like properties are ignored
  This happens because arrays are objects with rules.  



9️⃣ Memory & engine optimization (important)

  Modern engines (V8, SpiderMonkey):
    Use dense arrays for:

    [1, 2, 3]


  Fall back to object-like storage for:

    const arr = [];
    arr[1000000] = 1;

  So arrays behave like objects when misused. 
  
  

Arrays are objects in JavaScript because the language has only one non-primitive type: object.
Arrays are specialized objects optimized for ordered, indexed data, with additional internal behavior like length tracking and built-in methods.  

*/




