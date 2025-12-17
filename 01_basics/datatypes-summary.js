/*
Base on how data store on the memory and how can we access them they divided into two category. like [call by value, call by reference]

1. primitive [ call by value - copy of value]
String
Number
Boolean
null
undefined
Symbol
BigInt

2. non-primitive [ call by reference - it will give memory address ]
Array
Objects
Functions
*/


const str = "parth"
const mobileNumber = 1234567890
const isLoggedIn = true
const address = null
let email;
const acId =  7878787n
const person = { firstName: 'parth', lastName: 'patel' }
const fullName = Symbol(person)


// console.log(`\n typeof ${str} = ${typeof str}    typeof(typeof str) = ${typeof(typeof str)}`);
// console.log(`\n typeof ${mobileNumber} = ${typeof mobileNumber}    typeof(typeof mobileNumber) = ${typeof(typeof mobileNumber)}`);
// console.log(`\n typeof ${isLoggedIn} = ${typeof isLoggedIn}    typeof(typeof isLoggedIn) = ${typeof(typeof isLoggedIn)}`);
// console.log(`\n typeof ${acId} = ${typeof acId}    typeof(typeof acId) = ${typeof(typeof acId)}`);
// console.log(`\n typeof ${address} = ${typeof address}    typeof(typeof address) = ${typeof(typeof address)}`);
// console.log(`\n typeof ${email} = ${typeof email}    typeof(typeof email) = ${typeof(typeof email)}`);
// console.log(`\n typeof fullName = ${typeof fullName}    typeof(typeof fullName) = ${typeof(typeof fullName)}`);
// console.log(`\n typeof ${JSON.stringify(person)} = ${typeof person}    typeof(typeof person) = ${typeof(typeof person)}`);

// console.log(`\n typeof NaN = ${typeof NaN}`);

/*
In JavaScript, typeof null returning 'object' is one of the oldest and most famous bugs (or historical mistakes) in the language that was never fixed for backward compatibility reasons.
Why it happens (historical reason)
JavaScript was created in 1995 in just 10 days.In the very first version of JavaScript:

All values were stored in memory with a small "type tag" in the lower bits.
The tag 000 meant "object".
null was represented internally as a null pointer: 0x00000000 (all zeros).
Because the lower 3 bits were 000, the type detection code mistakenly thought it was an object.

So from day one:
JavaScripttypeof null === 'object'  // true  (but it's a bug!)
Brendan Eich (creator of JavaScript) has confirmed many times that this was a mistake.


Why does typeof NaN return "number" ??

typeof NaN returns "number" because NaN is a special numeric value defined by the JavaScript specification, not because it behaves like a normal number.

*/

const ary = ["parth","patel","carry"]
const myObj = {
  firstName: 'parth',
  lastName: 'patel',
  age: 22,
  mobileNumber: 1234567890,
}

const myFun = function(){
  console.log('\n Hello parth this your function');
}

// console.log("\n typeof ary =",ary, typeof ary);
// console.log("\n typeof myObj =",myObj, typeof myObj);
// console.log("\n typeof myFun =",myFun, typeof myFun);
myFun.addTemp = "I'm testing property adding on function object"

// console.log("\n typeof myFunnnnn =",myFun(), typeof myFun());
// console.log("\n typeof myFunnnnn =",myFun.addTemp, typeof myFun());


/*
Since here myFun it will return type function but it's actually function object

Because in JavaScript functions are a special type of object. Functions in JS are objects, but callable objects.
So technically:
A function is an object But it is callable (can be executed)

To distinguish callable objects from regular objects, JavaScript gives them a separate category:
typeof {}        // "object"
typeof function() {} // "function"
This makes it easy to detect functions.


3️⃣ Historical reason (important)
  JavaScript was created in 1995, and backward compatibility is sacred.
  typeof existed from the beginning
  "function" was introduced intentionally
  Changing it now would break millions of existing programs
So this behavior is by design and permanent.

4️⃣ Spec-level explanation (ECMAScript)

  According to the ECMAScript specification:
  typeof returns "function" only if
    The value is an object and
      It has a [[Call]] internal method
      Regular objects ❌ don’t have [[Call]]
  Functions ✅ do

That’s the real technical reason.

5️⃣ Proof: Arrow functions & classes

  typeof (() => {})   // "function"
  typeof class A {}   // "function"

  Why?

  Both are callable
  Both have [[Call]]


*/


console.log('\n typeof == ',
  typeof function () { },
  typeof (() => { }),
  typeof Array,
  typeof Date,
  typeof RegExp,
  typeof new Function(),

  typeof {},             
  typeof [],             
  typeof null,           
  typeof undefined,      
  typeof "hello",       
  typeof 42,             
  typeof true,          
  typeof Symbol(),       
  typeof BigInt(1)
);


/*
Why do all these return "function"?

Because in JavaScript:
  Everything that can be called/constructed is a function. 
  JavaScript classes, constructors, built-in types like Array, Date, RegExp, and even arrow functions — are ALL functions internally.  Every function in JS is actually an object (you can add properties to it).

1. typeof function(){} // "function"
This is a normal function.Obvious.

2. typeof (() => {}) // "function"
Arrow functions are still functions.
They are just a different syntax, but internally they are callable objects:
() => {}  // this is a function object

3. typeof Array // "function"
Here is the surprise:
Array is a constructor function
Meaning:
Array === function Array() { [native code] }  // true

So:
typeof Array  // "function"

4. typeof Date // "function"
Same logic:
Date is ALSO a constructor function.

Internally:
function Date() { [native code] }

So:
typeof Date === "function"

5. typeof RegExp // "function"
Again a constructor function:
function RegExp() { [native code] }

So typeof returns "function".

6. typeof new Function() // "function"
⚠️ This is the most surprising.
new Function() creates a function dynamically:

const fn = new Function("a", "b", "return a + b");

So fn is literally a function object.

So:
typeof fn === "function"
🧠 But why do "classes" in JS return function?

Because JavaScript classes are just syntactic sugar for constructor functions.

Example:
class Person {}

Internally becomes:
function Person() {}

So:
typeof Person  // "function"

🎯 KEY IDEA
👉 "function" is not a primitive type
👉 It's a special typeof result
👉 Anything callable returns "function"

JavaScript treats all callable objects as function.

*/


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
Stack (primitive)
Heap (non-primitive)



What is stack memory?
Stack memory is a region of memory used to store:

  Function calls
  Local variables (primitive values)
  Function execution context

🔹 Key Characteristics
  Works in LIFO (Last In, First Out)
  Memory is allocated & deallocated automatically
  Very fast
  Limited size

🔹 What is stored in Stack?
  Primitive values
  number, string, boolean, null, undefined, symbol
  Function call information (call stack)


🔹 Example
  function add(a, b) {
    let result = a + b;
    return result;
  }

  add(2, 3);


  Stack flow:

  | add()|
  |  a=2 |
  |  b=3 |
  |result|

  When add() finishes → stack frame is removed




What is heap memory?

Heap memory is a large, unstructured region used to store:
  Objects
  Arrays
  Functions
  Reference types

🔹 Key Characteristics
  Memory allocated dynamically
  Slower than stack
  Large size
  Managed by Garbage Collector (GC)

🔹 What is stored in Heap?
  Objects { }
  Arrays [ ]
  Functions
  Closures


🔹 Example
  let user = {
    name: "Parth",
    age: 25
  };

  Stack:
  user → reference (address)

  Heap:
  { name: "Parth", age: 25 }





Difference between stack and heap?

| Feature      | Stack Memory       | Heap Memory               |
| ------------ | ------------------ | ------------------------- |
| Storage Type | Primitive values   | Objects & reference types |
| Structure    | Ordered (LIFO)     | Unordered                 |
| Speed        | Very fast ⚡        | Slower                    |
| Size         | Small              | Large                     |
| Allocation   | Automatic          | Dynamic                   |
| Deallocation | Automatic          | Garbage Collection        |
| Lifetime     | Function execution | Until no reference exists |
| Example      | `let x = 10`       | `let obj = {}`            |


*/



/* Why is JavaScript considered loosely typed ??

JavaScript is considered loosely typed (dynamically typed) because types are not enforced at compile time and can change at runtime, and the language performs implicit type conversions for you.


1️⃣ Types are attached to values, not variables

  In JavaScript, a variable does not have a fixed type.

  let x = 10;      // x holds a number
  x = "hello";    // now x holds a string
  x = true;       // now a boolean

  No error.
  This is a core reason JS is called loosely typed.

  👉 In strongly typed languages (Java, C++), this is illegal.



2️⃣ Type checking happens at runtime, not compile time

  JavaScript decides types while the code is running.

  function add(a, b) {
    return a + b;
  }

  add(2, 3);       // 5
  add("2", "3");   // "23"
  add(2, "3");     // "23"


  Same function, different behavior → no compiler error.



3️⃣ Implicit type coercion (the BIG reason)

  JavaScript automatically converts types when needed.

  Examples
  "5" + 1     // "51"
  "5" - 1     // 4
  true + 1    // 2
  false == 0  // true
  null == undefined // true


  These silent conversions are the hallmark of a loosely typed language.  



4️⃣ Equality allows cross-type comparison
  5 == "5"    // true  (type coercion)
  5 === "5"   // false (strict, no coercion)

  The existence of == itself is a sign of loose typing.



5️⃣ Functions don’t enforce parameter types
  function greet(name) {
    return "Hello " + name;
  }

  greet("Parth");     // OK
  greet(123);         // "Hello 123"
  greet(null);        // "Hello null"


  No type errors.


6️⃣ Objects can change shape dynamically
  const user = {};
  user.name = "Parth";
  user.age = 25;
  user.isAdmin = true;


  Properties and types can be added/changed anytime.




7️⃣ Compare with strongly typed languages
  Java (strongly typed)
  int x = 10;
  x = "hello"; // ❌ compile-time error

  JavaScript
  let x = 10;
  x = "hello"; // ✅ allowed




8️⃣ Why JavaScript was designed this way

  📌 Historical reason

    Created in 1995 for browsers
    Designed for beginners & quick scripting
    Needed flexibility, not strict rules

  📌 Practical reason

    Faster prototyping
    Less boilerplate
    Dynamic web behavior




9️⃣ Real Node.js bug caused by loose typing
  function calculateTotal(price, tax) {
    return price + tax;
  }

  calculateTotal(100, "18"); // "10018" ❌


  Expected: 118
  Got: string concatenation

  This happens because JS did not enforce number types.



🔟 Is JavaScript weakly typed or loosely typed?

  ✔ Common term: Loosely typed
  ✔ More accurate term: Dynamically + weakly typed

  Dynamic → types checked at runtime

  Weak → implicit conversions allowed



1️⃣1️⃣ How developers deal with this
  
  Use strict equality
    === !==

  Explicit type conversion

    Number("18")
    String(123)
    Boolean(1)

  TypeScript (very important)

    function add(a: number, b: number): number {
      return a + b;
    }



*/



/* Why using typeof is not enough?
  typeof is not enough because it cannot reliably distinguish between different kinds of objects (like arrays, null, dates, regex), and it provides overly broad or incorrect results in several cases.


1️⃣ typeof only has a few return values
  typeof can return only these strings:

  "undefined"
  "boolean"
  "number"
  "string"
  "bigint"
  "symbol"
  "function"
  "object"

  ⚠️ Notice the problem:
  Everything complex collapses into "object".  




3️⃣ Arrays vs Objects (very common mistake)
  typeof []      // "object"
  typeof {}      // "object"


  But they behave very differently.

  ❌ Wrong:

  if (typeof data === "object") {
    data.push(1); // 💥 crash if data is {}
  }


  ✅ Correct:

  Array.isArray(data);




4️⃣ typeof can’t detect specific object types

  typeof new Date();   // "object"
  typeof /abc/;        // "object"
  typeof new Map();    // "object"
  typeof new Set();    // "object"
  typeof Promise.resolve(); // "object"


  You lose all useful information.



5️⃣ typeof lies for NaN
  typeof NaN; // "number"


  But:
  NaN !== NaN // true


  So this fails:

  if (typeof x === "number") {
    // x might be NaN 
  }


  Correct:

  Number.isNaN(x);



6️⃣ Functions are the only special case
  typeof function() {} // "function"

  This is the only object type that typeof identifies correctly.

  Everything else? "object".



7️⃣ Real Node.js production bug
  function processInput(input) {
    if (typeof input === "object") {
      input.id = 1;
    }
  }

  processInput(null); // 💥 TypeError


  Because:
  typeof null === "object"





8️⃣ Better alternatives (what to use instead)

  Arrays
  Array.isArray(value)

  Null
  value === null

  Plain objects
  Object.prototype.toString.call(value) === "[object Object]"

  Dates
  value instanceof Date

  NaN
  Number.isNaN(value)

  Promises
  value instanceof Promise

  Strong generic check (advanced & reliable)
  Object.prototype.toString.call(value)


  Examples:

  Object.prototype.toString.call([]);        // "[object Array]"
  Object.prototype.toString.call(null);      // "[object Null]"
  Object.prototype.toString.call(new Date()); // "[object Date]"




9️⃣ When typeof IS enough

  ✔ Checking primitives:

  typeof x === "string"
  typeof x === "number"
  typeof x === "boolean"
  typeof x === "undefined"


  ✔ Checking functions:

  typeof fn === "function"




| Check                     | typeof enough? |
| ------------------------- | -------------- |
| string / number / boolean | ✅ Yes          |
| function                  | ✅ Yes          |
| array                     | ❌ No           |
| null                      | ❌ No           |
| date / map / set          | ❌ No           |
| NaN                       | ❌ No           |



Final takeaway

typeof is useful but incomplete.
It works well for primitives and functions, but it fails for arrays, null, and most objects — so relying on it alone leads to bugs.


*/



/* How to safely detect data types ??

1️⃣ Golden rule (remember this)

  No single method can correctly detect all JavaScript types.

  You must combine:

    typeof
    Array.isArray
    Object.prototype.toString
    instanceof
    strict equality




2️⃣ Best method per data type (cheat sheet)

  Primitives
  typeof value === "string"
  typeof value === "number" && !Number.isNaN(value)
  typeof value === "boolean"
  typeof value === "undefined"
  typeof value === "bigint"
  typeof value === "symbol"

  ⚠️ Always exclude NaN for numbers.


  Null (special case)
  value === null

  Never use typeof for null.



  Function
  typeof value === "function"

  This is safe.



  Array (most common mistake)
  Array.isArray(value)

  ❌ Wrong:
  typeof value === "object"



  Plain Object {}
  Object.prototype.toString.call(value) === "[object Object]"

  Or (common in Node.js):

  value?.constructor === Object



  Date
  value instanceof Date && !isNaN(value)


  RegExp
  value instanceof RegExp


  Map / Set
  value instanceof Map
  value instanceof Set


  Promise
  value instanceof Promise

  Safer (library-style):
  typeof value?.then === "function"



  NaN
  Number.isNaN(value)    



3️⃣ The most reliable universal detector
  function getType(value) {
    return Object.prototype.toString.call(value);
  }

  Examples
  getType([]);        // "[object Array]"
  getType(null);      // "[object Null]"
  getType({});        // "[object Object]"
  getType(new Date()); // "[object Date]"

  💡 This is how lodash, moment, and many Node.js libraries work internally.




5️⃣ Why instanceof is not always safe
  arr instanceof Array // ❌ fails across iframes / realms

  Better:

  Array.isArray(arr) // ✅ realm-safe



6️⃣ Common production bug (Node.js)
  if (typeof payload === "object") {
    payload.items.map(...) // 💥 crash if payload is null
  }

  ✅ Correct:

  if (payload && Array.isArray(payload.items)) {
    payload.items.map(...)
  }



7️⃣ Interview-ready summary table
| Type     | Safe check                                  |
| -------- | ------------------------------------------- |
| string   | `typeof v === "string"`                     |
| number   | `typeof v === "number" && !Number.isNaN(v)` |
| null     | `v === null`                                |
| array    | `Array.isArray(v)`                          |
| function | `typeof v === "function"`                   |
| date     | `v instanceof Date`                         |
| object   | `Object.prototype.toString.call(v)`         |
| promise  | `typeof v?.then === "function"`             |



Final takeaway

Safe type detection in JavaScript requires choosing the correct check per type, not relying on typeof alone.


*/







