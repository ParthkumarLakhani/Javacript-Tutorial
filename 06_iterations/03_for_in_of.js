// for of

const arr = [1,2,3,4,5]


/* Iterable, Iteration, and Iterator

Iteration = Repeating a process step-by-step.
  In JavaScript, iteration means:
  👉 Going through each item of a collection one by one
  like an array, string, map, set, etc.

Iterator = an object that gives values one-by-one when asked.
  It has a special method called next().

Iterable = An object that can be looped with for...of because it provides an iterator.
  👉 In other words:
  If an object has a method [Symbol.iterator], it is an Iterable.




🟦 1. What is for, while, do-while...[any loop] ?
These are LOOP STATEMENTS.

👉 They are tools used to perform iteration.

Meaning:
  for repeats something
  while repeats something
  do-while repeats something



🟦 2. What are array, string, map, set ?
These are data collections.

  They hold multiple values.

  ✅ Arrays/Strings/Maps/Sets are DATA STRUCTURES. They contain values.



🟦 Now the main thing you asked:
🟩 3. What is Iteration?

Iteration = The action of looping through values.
  You are doing iteration.
  ➡️ Iteration = process.  


🟩 4. What is an Iterable ?
Iterable = A data structure that supports iteration.

  Means:
  If you can use for...of on it — it is iterable.

  Examples of iterables:
  ✔️ Array
  ✔️ String
  ✔️ Map
  ✔️ Set

  Not iterable:
  ❌ Plain object {}

  Rule:

  obj[Symbol.iterator]     // if exists → iterable

  ➡️ Iterable = thing we can iterate.


🟩 5. What is an Iterator?
Iterator = An object that gives values one-by-one when you call .next().

*/


const str = 'Hello Parth!!'

const person = {
  name: "parth",
  address: "amd",
  id: 235
}

// for (const item of arr) {
//   console.log(item);
// }

// for (const i of str) {
//   console.log(i);
// }


const map = new Map()
map.set("IN","india")
map.set("USA","United States Of America")
map.set("FS","France")
// map.set("IN","India")

// console.log(map);


// for (const key of map) {
//   console.log('\n my map =', key);    
// }
// for (const [key, value] of map) {      // from destructuring
//   console.log(`${key} for ${value}`);
// }



//for of with object
// for (const [key, value] of person) {  
//   console.log(item);
// }

/* why normal object not iterate over the for of loop ??
Because:
  👉 for...of works ONLY on iterables. And normal objects {} are NOT iterable.


  ❓ What makes something iterable?

A data structure is iterable only if it has this method: [Symbol.iterator]

Example (Array):

  const arr = [1, 2, 3];
  console.log(arr[Symbol.iterator]);  // function → iterable ✔️


Example (Map):

  const m = new Map();
  console.log(m[Symbol.iterator]);  // function → iterable ✔️


Example (Object {}):

  const obj = { a: 1 };
  console.log(obj[Symbol.iterator]); // undefined ❌

👉 Because it does not have [Symbol.iterator],  the for...of loop cannot work.



🚫 Using normal object with for...of gives error:
const obj = { a: 10, b: 20 };
for (let x of obj) {} 

  Error:
  TypeError: obj is not iterable




✔️ But WHY did JavaScript decide this?
Reason 1:

  Objects are key-value stores, not ordered sequences.

  { a: 1, b: 2 }


  But iteration (like arrays) is about ordered items:

  0 → 1
  1 → 2

  Objects do NOT represent items in order. 
  
  

Reason 2:

  Objects can have complex keys like strings, symbols, nested objects etc.  So JavaScript kept them simple.  

  Objects already have their own iteration methods:

  Object.keys(obj)
  Object.values(obj)
  Object.entries(obj)

  Example:

  const obj = { a: 1, b: 2 };
  for (let [key, value] of Object.entries(obj)) {
    console.log(key, value);
  }
    
  



🟢 Final Simple Explanation

Normal object is NOT iterable because JavaScript did not give it [Symbol.iterator].
Map, Array, String HAVE this method, so for...of works on them.  

*/












//  for in


for (const key in person) {
  // console.log(`${key} is ${person[key]}`);  
}

/* since object is not iterables right then how can for in loop works ??
✅ Objects are NOT iterable → TRUE
  That means: ❌ You cannot use for...of on objects. Because for...of only works on iterables (things with [Symbol.iterator]).


✅ But objects ARE enumerable → TRUE

This is why for...in works.
for...in does NOT require iterables. Instead, it works on enumerable properties, not iterables.



🟦 BIG KEY POINT:

👉 Iteration and Enumeration are DIFFERENT concepts.

✔️ ITERATION → used by for...of
Works only on iterables ( Arrays, Strings, Maps, Sets )
Requires: [Symbol.iterator]


✔️ ENUMERATION → used by for...in
Works on objects and arrays, even if not iterable.

Enumerates: keys, properties
Example:

  const obj = { a: 1, b: 2, c: 3 };
  for (let key in obj) {
    console.log(key);
  }

  Output:

  a
  b
  c

This is enumeration, NOT iteration.


🔍 Why for...in works on objects?
  
Because all object properties are "enumerable" by default.
Try:
        console.log(Object.keys({ a: 1, b: 2 }));
Output:
        ["a", "b"]

Same as for...in.

So:
  👉 for...in = loops over object keys, not values
  👉 It does NOT use [Symbol.iterator]




🟢 Final Answer (Very Short)
  Object is NOT iterable → cannot use for...of
  Object IS enumerable → can use for...in
  for...in loops through keys, not values
  for...of loops through values of iterables only

*/


const programming = [ "js", "java", "swift", "python", "c++"] 

// for (const key in programming) {
//   console.log(`${programming[key]} at ${key}`);
// }

/* my question is that since array is iterable then how can for in used ??
Great question — and this confusion is 100% logical.

Let’s clear it in the simplest possible way.


# 🟦 **Important Truth**

➡️ **Arrays are iterable**
➡️ **Arrays are also enumerable**

These are TWO different abilities. And **each loop uses a different ability**.


# 🟥 **`for...in` does NOT care about iterables**

`for...in` works on **enumerable properties**, NOT iterables.

  ➡️ It reads **keys (indexes) from an object**.
  ➡️ Array is ALSO an object.

  So:

  const arr = [10,20,30];

  Internally this is just an object like:

  {
    "0": 10,
    "1": 20,
    "2": 30,
    "length": 3
  }
  These keys (`0`, `1`, `2`) are **enumerable properties**.
  So `for...in` loops them.

Example:

for (let key in arr) {
  console.log(key); // 0,1,2
}

👉 This has NOTHING to do with being iterable.



---
# 🟩 **`for...of` works on iterables**

`for...of` reads **values** using **iterator**.

Arrays have `[Symbol.iterator]`, so:

for (let value of arr) {
  console.log(value);
}


Output:

10
20
30


---

# 🟦 **So your answer is:**
# 👉 Array can be used with `for...in` because array is ALSO an object with enumerable properties.
# 👉 Array can be used with `for...of` because array is ALSO iterable.

---

# 🟧 Visual Comparison

## Array abilities:

| Ability        | Why?                                                       |
| -------------- | ---------------------------------------------------------- |
| **Enumerable** | Because array is an object → has keys `"0", "1", "2", ...` |
| **Iterable**   | Because array has `[Symbol.iterator]`                      |

## Loop usage:

| Loop       | Uses                | Works on Array? |
| ---------- | ------------------- | --------------- |
| `for...in` | enumerable **keys** | ✔️ yes          |
| `for...of` | iterable **values** | ✔️ yes          |

---

# 🟦 **Final Explanation (1 Line)**

**Arrays work in `for...in` because they are objects with enumerable keys.
Arrays work in `for...of` because they are iterables with `[Symbol.iterator]`.**

So both loops work, but for different reasons.

*/


const countryCode = new Map()
map.set("IN","india")
map.set("USA","United States Of America")
map.set("FS","France")
// map.set("IN","India")

for (const key in countryCode) {
  console.log(key);
}

/* why map is not working in fo in loop ??
Because:
      👉 for...in works only on enumerable properties of an object.
      👉 Map does NOT store data as enumerable properties.


So when you write:

const map = new Map();
map.set("a", 1);
map.set("b", 2);

for (let key in map) {
  console.log(key);
}


You get:   (nothing)


Why ??


🟦 1. Map is NOT a normal object

  A normal object stores data as key-value properties:
  const obj = { a: 1, b: 2 };

  So for...in works:

  for (let key in obj) {
    console.log(key);  // a, b
  }

  Because the keys a, b are enumerable properties of the object.



  🟥 2. Map stores data INTERNALLY, not as object properties

  This is the most important part.

  When you do:

    const map = new Map();
    map.set("a", 1);

  JavaScript does NOT store "a" as a property on the map object.

  Meaning:
    console.log(map.a); // undefined
    
    Map elements go into a special internal storage, NOT into object keys.

  So:
  for (let key in map)
  → loops over map’s object properties, not stored entries.

  But a Map’s object properties are things like:
    size
    internal methods
    prototype
    And ALL of them are NOT enumerable.

  So for...in finds zero keys.




🟦 3. Map is Iterable → works with for...of

  Map implements:
  map[Symbol.iterator]


  This allows:
  for (let entry of map) {
    console.log(entry);
  }

  Output:

  ["a", 1]
  ["b", 2]


  So Map works with:

  ✔️ for...of
  ✔️ map.forEach()
  ✔️ spread operator [...]
  ✔️ destructuring

  BUT NOT:  ❌ for...in  



  


🟧 Visual Comparison
Object

  Internally:

  {
    a: 1,
    b: 2
  }
  → keys are enumerable → for...in works.
  → NOT iterable → for...of fails. 
  
  
Map

Internally:

(NOT stored as object keys)

→ NOT enumerable → for...in fails.
→ iterable → for...of works.





| Structure   | Enumerable? (for...in) | Iterable? (for...of) |
| ----------- | ---------------------- | -------------------- |
| Object `{}` | ✔️ Yes                 | ❌ No                |
| Array `[]`  | ✔️ Yes                 | ✔️ Yes               |
| Map         | ❌ No                  | ✔️ Yes               |
| Set         | ❌ No                  | ✔️ Yes               |


✅ Simple One Line Answer

Map does not work in for...in because maps do NOT store keys as object properties,
and for...in loops only over enumerable object properties.


*/




/* what is difference between for of and for in ??

🔵 **1. for…in**

👉 Iterates over keys / property names
👉 Works on objects, arrays, maps (the object wrapper) — but not useful for Map

**for…in is for *enumerating property names***.

### **Works for:**

Objects
Arrays (but not recommended)
Map object instance? → No (explained later)


Example:
  const obj = { a: 10, b: 20 };

  for (const key in obj) {
    console.log(key);  // a, b
  }


For arrays:
  const arr = ["a", "b", "c"];

  for (const key in arr) {
    console.log(key);  // 0, 1, 2   (indexes)
  }




🔴 **2. for…of**

👉 **Iterates over values of an iterable**
👉 Works only on **iterables**

What are iterables?

* Array
* String
* Map
* Set
* TypedArray
* NodeList
  ❌ Object is NOT iterable (no Symbol.iterator)

Example:

const arr = ["a", "b", "c"];

for (const value of arr) {
  console.log(value); // a, b, c
}


For Map:

const map = new Map([
  ["name", "parth"],
  ["age", 25],
]);

for (const value of map) {
  console.log(value);   // ['name','parth'], ['age',25]
}



# ❓ **Your Confusions Solved One-by-One**

❗1. **If object is NOT iterable, how does for…in work on it?**

Because **for…in does NOT need iterables**.

❌ for…in does NOT use `Symbol.iterator`
✔ for…in works on **object's property keys**, NOT values

That means:

for...in  → reads keys from object using internal property list
for...of  → reads values using iterator (Symbol.iterator)


❗2. **If array is iterable, why can for…in still work on array?**

Because:
        `for…in` iterates **keys** (array indexes)
        `for…of` iterates **values**

Example:
    const arr = ["x", "y"];

    for (const x in arr) {
      console.log(x);   // "0", "1"
    }
    for (const x of arr) {
      console.log(x);   // "x", "y"
    }


✔ So arrays work in both
❌ But **for…in is NOT recommended**, because:

* It iterates inherited properties also
* It gives string keys, not numbers
* Order is not guaranteed



❗3. **Why Map does NOT work in for…in?**

Because **Map does not expose its keys as normal enumerable properties**.

Look:
    const m = new Map();
    m.set("name", "parth");

console.log(Object.keys(m)); // []

Map stores keys internally, not as object properties.

So:

for (const key in map) { }  // ❌ Nothing happens

But Map IS iterable, so:

for (const value of map) { }  // ✔ Works


---

# 🔥 FINAL CLEAR DIFFERENCE (IMPORTANT)

| Feature                    | **for…in**      | **for…of**              |
| -------------------------- | --------------- | ----------------------- |
| Iterates                   | Keys            | Values                  |
| Works on Objects           | ✔ Yes           | ❌ No                    |
| Works on Arrays            | ✔ Yes (indexes) | ✔ Yes (values)          |
| Should be used for Arrays? | ❌ No            | ✔ Yes                   |
| Works on Map               | ❌ No            | ✔ Yes                   |
| Requires iterable?         | ❌ No            | ✔ Yes (Symbol.iterator) |

---


# ✔ Best Practice Summary

### Use **for…in**:

* When iterating over object keys.

### Use **for…of**:

* When iterating over array values.
* When iterating over string characters.
* When iterating over Map & Set.

---

# If you want, I can also give:

✔ Memory-level difference
✔ Why Symbol.iterator exists
✔ How iterators work internally
✔ When to use each loop in real projects

Just tell me 🙂

*/


