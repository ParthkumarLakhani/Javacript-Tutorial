// where var, let cand const store ??

/*
1️⃣ Memory Creation Phase (Before code runs)
  When JS starts executing, it creates:

  Execution Context
    It has two main memory parts:
      1.  Variable Environment
      2.  Lexical Environment


2️⃣ var — Where is it stored?
  🔹 Global var
    var a = 10;

  Stored in:
    Global Variable Environment
    Also attached to Global Object

  In browser: window.a // 10
  In Node.js: global.a // 10

  Hoisted and initialized with undefined



  🔹 Function var
  function test() {
    var x = 20;
  }

  Stored in:
    Function’s Variable Environment
      NOT global






3️⃣ let and const — Where are they stored?

  Example:
    let b = 20;
    const c = 30;

  Stored in:
    Lexical Environment
    NOT attached to global object

  window.b 
  window.c 


  But:
    b // 20
    c // 30  


  Why?
    Because they are block-scoped, not object properties.




4️⃣ Temporal Dead Zone (TDZ)
  console.log(b); // ❌ ReferenceError
  let b = 10;

  Why?
    Memory is allocated ✔️
    But not initialized
    Access before declaration = TDZ
    Same for const




5️⃣ Block Scope Example
  {
    let x = 10;
    const y = 20;
    var z = 30;
  }


  | Variable | Accessible outside block? |
  | -------- | ------------------------- |
  | `x`      | ❌ No                     |
  | `y`      | ❌ No                     |
  | `z`      | ✅ Yes                    |

  Why?
    let & const → block Lexical Environment
    var → function/global scope



6️⃣ Visual Memory Representation
  🌍 Global Execution Context

    Global Execution Context
    │
    ├─ Variable Environment
    │   ├─ var a → undefined
    │   ├─ var z → undefined
    │
    ├─ Lexical Environment
    │   ├─ let b → <uninitialized> (TDZ)
    │   ├─ const c → <uninitialized> (TDZ)
    │
    └─ Global Object
        ├─ a
        ├─ z




7️⃣ Why let & const are NOT on Global Object?
  Design Reasons:
    Avoid accidental global pollution
    Better memory safety
    Prevent bugs caused by overwriting globals






8️⃣ One-Line Summary (🔥 interview gold)

  var is function-scoped and becomes a property of the global object, while let and const are block-scoped, stored in the lexical environment, and never attached to the global object.



  
| Keyword | Where it is stored                        | Attached to Global Object?  | TDZ    |
| ------- | ----------------------------------------- | --------------------------  | -----  |
| `var`   | Variable Environment (global or function) | ✅ Yes (in global scope)    | ❌ No  |
| `let`   | Lexical Environment (block scope)         | ❌ No                       | ✅ Yes |
| `const` | Lexical Environment (block scope)         | ❌ No                       | ✅ Yes |



*/




// How does JS engine optimize primitive vs reference types?
// This is a core JavaScript engine + performance question (V8 / Node.js level). I’ll explain it step-by-step, from memory model → engine optimizations → real performance implications.


/*
1️⃣ Primitive vs Reference (quick recap)
  Primitives
    number, string, boolean, null, undefined, symbol, bigint

    Immutable
    Value-based
    No identity (copied by value)


  Reference types
    object, array, function, map, set, date, etc.

    Mutable
    Identity-based
    Stored and passed by reference




2️⃣ Memory layout (what really happens)
  🔹 Primitives

    Stored directly where possible
    Often inlined
    No extra allocation

    let a = 10;
    let b = a;


    Memory:

      a → 10
      b → 10   (copied)



  🔹 Reference types

    Stored in heap
    Variable holds a pointer
    Multiple variables can point to same object

    let obj1 = { x: 1 };
    let obj2 = obj1;


    Memory:

      obj1 → 📍 heap { x: 1 }
      obj2 → 📍 same heap address





3️⃣ How JS engines optimize primitives

  Immediate representation (V8: SMIs)

    Small integers are stored directly in registers:

    let x = 42;


  No heap allocation
  Tagged pointer (SMI = Small Integer)
  Extremely fast arithmetic
  
  ⚡ This is why numbers are fast.



  ✅ String interning & deduplication
    let a = "hello";
    let b = "hello";


    Engines store one copy:

    a ─┐
      ├─ "hello"
    b ─┘

  Saves memory & improves comparison speed.



  ✅ Copy-on-write (strings)
  let s1 = "hello";
  let s2 = s1;

  No copy created
  New string only created on mutation



  ✅ Inline caching (ICs)
    x + y

    If x and y are always numbers:
      Engine emits specialized machine code
      Skips type checks





4️⃣ How JS engines optimize reference types
  ✅ Hidden Classes (Shapes)

  Objects are not hash maps internally.
    const user = { name: "Parth", age: 25 };


  Engine creates a hidden class:

  Shape #1:
    name → offset 0
    age  → offset 1


  Access becomes:
  user.name  // direct offset lookup

  ⚡ As fast as struct access in C++.


  De-optimization trigger
    user.city = "Delhi";

  New hidden class created
  Old optimized code invalidated
  💥 This slows things down.



  ✅ Arrays: packed vs holey
    Packed array (fast)
    [1, 2, 3]

    Holey array (slow)
    const a = [];
    a[100] = 1;


    Why?

    Holey arrays behave like objects
    Lose dense memory layout



  ✅ Escape analysis
    function create() {
      return { x: 1 };
    }


    If object doesn’t escape:
      Engine may allocate it on stack
      Or eliminate it entirely




5️⃣ Function optimization (important)

  Functions are objects, but engines optimize them heavily:

  function add(a, b) {
    return a + b;
  }


  JIT compiles based on argument types
  Monomorphic calls → fastest
  Polymorphic calls → slower



6️⃣ Why primitives are faster than objects

| Reason         | Primitive | Object  |
| -------------- | --------- | ------- |
| Allocation     | No heap   | Heap    |
| Copy cost      | Cheap     | Pointer |
| Mutability     | Immutable | Mutable |
| GC pressure    | Low       | High    |
| Cache-friendly | Yes       | Less    |



7️⃣ Real Node.js performance bug
  const sum = (a, b) => a + b;

  sum(1, 2);
  sum("1", "2"); // 💥 de-optimizes


  Engine:
    Assumed numbers
    Suddenly sees strings
    Throws away optimized code




8️⃣ Best practices (engine-friendly)
  
  Use consistent types
  function add(a, b) {
    return a + b; // always numbers
  }

  Create objects with same shape
  function User(name, age) {
    this.name = name;
    this.age = age;
  }

  Avoid random property addition
  obj.a = 1;
  obj.b = 2;
  // later
  obj.c = 3; // shape change

  Avoid sparse arrays
  arr.push(x)
  arr[100] = x 



9️⃣ Interview-ready summary

JavaScript engines optimize primitives by storing them directly, inlining values, and using specialized machine code. Reference types are optimized using hidden classes, inline caching, and escape analysis, but excessive mutation or inconsistent shapes cause de-optimization. Primitives are faster because they avoid heap allocation and reduce garbage collection overhead.


*/




/* Does JS use pass-by-reference ?

JavaScript uses pass by value for primitive types and pass by reference for objects — but that's a common oversimplification. Let's clarify:

Primitive Types → Pass by Value
When passing primitives (Number, String, Boolean, null, undefined, Symbol, BigInt), a copy of the actual value is passed:
  
  let a = 10;
  let b = a;  // Copy of value (10)
  b = 20;
  console.log(a);  // 10 (unchanged)
  console.log(b);  // 20

  function change(val) {
    val = 100;  // Changes local copy only
  }
  change(a);
  console.log(a);  // 10 (unchanged)



Objects → Pass by Reference Value (Shared Reference)
Technically, JavaScript always passes by value, but for objects, the value is a reference (memory address). This is often called "pass by sharing" or "pass by reference value":


  let obj1 = { name: 'Alice' };
  let obj2 = obj1;  // Copy of reference (both point to same object)
  obj2.name = 'Bob';
  console.log(obj1.name);  // 'Bob' (changed!)

  function changeName(obj) {
    obj.name = 'Charlie';  // Modifies the shared object
  }
  changeName(obj1);
  console.log(obj1.name);  // 'Charlie'

  // BUT reassigning the parameter doesn't affect original reference
  function reassign(obj) {
    obj = { name: 'David' };  // Only local reference changes
  }
  reassign(obj1);
  console.log(obj1.name);  // 'Charlie' (unchanged)


Key Points:
  Primitives: Passed by value (direct copies)
  Objects: Passed by reference value (copies of references)

Reassignment vs Mutation:
  Mutating object properties affects the shared object
  Reassigning a parameter creates a new local reference 


So technically: JavaScript is always pass-by-value, but for objects, that value is a reference.  

*/




