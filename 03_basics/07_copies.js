// shallow copy and deep copy


const original = {
  name: "Parth",
  address: { city: "Delhi" }
};

// const shallow = { ...original };

// shallow.address.city = "Mumbai";
// shallow.name= "parth patel";

// console.log(original.address.city);
// console.log(original);
// console.log(shallow);

/* shallow
A shallow copy copies the top-level values only.
If the object contains nested objects/arrays, the copy will still reference the same nested memory.


Ways to create shallow copy
  Spread operator: { ...obj }, [...arr]
  Object.assign()
  Array.prototype.slice()

  Key point
➡️ Nested objects are shared

*/



// const deep = JSON.parse(JSON.stringify(original));

// deep.address.city = "Mumbai";
// deep.name= "parth patel";

// console.log(original.address.city);
// console.log(original);
// console.log(deep);


/* deep
A deep copy copies everything, including nested objects, into new memory.

Ways to create deep copy
  JSON.parse(JSON.stringify(obj)) (simple cases)
  structuredClone(obj) ✅ (modern & best)
  Libraries like lodash.cloneDeep()

  Key point
  ➡️ Nested objects are not shared



| Feature               | Shallow Copy | Deep Copy |
| --------------------- | ------------ | --------- |
| Copies nested objects | ❌ No        | ✅ Yes   |
| Memory reference      | Shared       | Separate  |
| Performance           | Faster       | Slower    |
| Safe for mutations    | ❌ No        | ✅ Yes   |

*/


//deep dive

/*
1️⃣ First understand ONE core rule
  Objects & arrays are stored in HEAP memory
  Variables store only references (addresses), not the actual object


  const user = { name: "Parth" };

  Stack                Heap
  user ─────────────▶  { name: "Parth" }



2️⃣ What happens when you assign an object?
  const a = { x: 1 };
  const b = a;

Step-by-step
  Object { x: 1 } is created in heap
  a stores its reference
  b = a copies the reference, not the object

Stack                Heap
a ─┐
   ├──────────────▶ { x: 1 }
b ─┘

❌ This is NOT a copy
✅ This is reference sharing




3️⃣ Shallow Copy (Step-by-step)
A shallow copy creates a new outer object, but nested objects still share references.


const original = {
  name: "Parth",
  skills: ["JS", "Node"],
  address: { city: "Delhi" }
};

const shallow = { ...original };

Memory after shallow copy

Stack                          Heap
original ───────────────▶  {
                              name: "Parth",
                              skills ───▶ [ "JS", "Node" ]
                              address ──▶ { city: "Delhi" }
                           }

shallow  ───────────────▶  {
                              name: "Parth",
                              skills ───▶ SAME ARRAY
                              address ──▶ SAME OBJECT
                           }



Edge Case 1: Modify primitive
  shallow.name = "Rahul";
  console.log(original.name); // Parth ✅

  ✔️ Primitives are copied by value


Edge Case 2: Modify nested object ❌
  shallow.address.city = "Mumbai";
  console.log(original.address.city); // Mumbai ❌

  ❗ Problem: Nested reference is shared


Edge Case 3: Modify nested array ❌
  shallow.skills.push("React");
  console.log(original.skills); // ["JS", "Node", "React"] ❌



Common Shallow Copy Methods
{ ...obj }
[ ...arr ]
Object.assign({}, obj)
arr.slice()  





4️⃣ Deep Copy (Step-by-step)
A deep copy creates a completely independent copy, including all nested objects & arrays.


Method 1: JSON.parse(JSON.stringify())
  const deep = JSON.parse(JSON.stringify(original));

Memory

Stack                          Heap
original ───────────────▶  original heap tree

deep     ───────────────▶  completely NEW heap tree

No shared reference



But 🚨 JSON Edge Cases (Very Important)

❌ Loses functions

  const obj = {
    sayHi() { console.log("hi"); }
  };

  JSON.parse(JSON.stringify(obj));
  // sayHi LOST


❌ Loses undefined
  { a: undefined } → {}  


❌ Loses Symbol
  Symbol() → removed


❌ Date becomes string
  new Date() → "2025-01-01T..."


❌ Fails with circular reference
  const obj = {};
  obj.self = obj;

  JSON.stringify(obj); 
  // ❌ TypeError




5️⃣ Best Modern Solution: structuredClone()
const deep = structuredClone(original);

Supports
✔️ Objects
✔️ Arrays
✔️ Date
✔️ Map / Set
✔️ Circular references


Edge Case:

❌ Does NOT clone functions

structuredClone({
  fn() {}
}); 
// ❌ Error





6️⃣ Manual Deep Copy (Recursive) – Interview Level
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;

  const copy = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    copy[key] = deepClone(obj[key]);
  }

  return copy;
}

✔️ Handles nested objects
✔️ Interview-safe
❌ Does not handle Map, Set, Date unless extended







7️⃣ Real Interview Traps ⚠️

Trap 1
  const a = { x: { y: 1 } };
  const b = { ...a };

  b.x.y = 2;
  console.log(a.x.y); 
  // 2


Trap 2
  const arr = [{ id: 1 }];
  const copy = [...arr];

  copy[0].id = 99;
  console.log(arr[0].id); 
  // 99 


Trap 3 (Nested spread is NOT deep)
  const deepFake = {
    ...obj,
    address: { ...obj.address }
  };

  Only 1-level deep




8️⃣ When to use what?

| Situation             | Use          |
| --------------------- | ------------ |
| Flat object           | Shallow copy |
| Nested data           | Deep copy    |
| Redux / immutability  | Deep copy    |
| Performance critical  | Shallow      |
| API response mutation | Deep         |


*/



/* REAL NODE.JS BUG CAUSED BY SHALLOW COP

Scenario: Shared Request Data in Express
Buggy Code

// middleware.js
const defaultOptions = {
  isAdmin: false,
  permissions: {
    read: true,
    write: false
  }
};

app.use((req, res, next) => {
  req.options = { ...defaultOptions }; // ❌ shallow copy
  next();
});


Somewhere in controller
app.post("/make-admin", (req, res) => {
  req.options.permissions.write = true;
  res.send("Admin created");
});


🚨 What goes wrong?
  defaultOptions.permissions is shared
  One request modifies it
  ALL future requests are affected

💥 Production Impact
User A → becomes admin
User B → unexpectedly has write permission ❌


🧠 Why this happens (Memory)
req.options.permissions ─────┐
defaultOptions.permissions ──┘ (same reference)



✅ FIX (Deep Copy)
  req.options = structuredClone(defaultOptions);

  OR

  req.options = JSON.parse(JSON.stringify(defaultOptions));








REAL BUG #2: Caching + Shallow Copy
Buggy Cache Code  

const cache = {
  user: {
    id: 1,
    settings: { theme: "dark" }
  }
};

function getUser() {
  return { ...cache.user }; // ❌ shallow
}


Mutation
  const user = getUser();
  user.settings.theme = "light";


Cache Corruption
console.log(cache.user.settings.theme); // "light" ❌
✅ Fix
return structuredClone(cache.user);


*/


/* Interview Questions

1️⃣ What is the difference between shallow copy and deep copy?
Answer:
Shallow copy duplicates only the top-level object and shares references for nested objects, whereas deep copy duplicates the entire object graph, including nested objects.


2️⃣ Is spread operator a deep copy?
Answer: No. Spread operator creates a shallow copy.


3️⃣ Why is shallow copy dangerous in Node.js?
Answer: Because Node.js handles multiple concurrent requests, shared references can cause data leakage between users.


4️⃣ How would you fix shallow copy bugs in Express middleware?
Answer: By using structuredClone() or a proper deep cloning strategy before attaching objects to req.


5️⃣ What happens if two variables reference the same object?
Answer: Any mutation via one variable affects the other because both point to the same heap memory.


6️⃣ Can JSON.parse(JSON.stringify()) always be used for deep copy?
Answer: No. It fails for functions, undefined, Symbol, Date, Map, Set, and circular references.


7️⃣ Best way to deep clone in modern Node.js?
Answer: structuredClone() — supports most data types and circular references.


8️⃣ How do you detect a shallow copy bug?
Answer: When modifying one object unexpectedly changes another object that should be independent.


9️⃣ Does Object.assign() create deep copy?
Answer: No. It creates a shallow copy.


🔟 Why is immutability important in backend systems?
Answer: It prevents side effects, data corruption, and race conditions between concurrent operations.


Shallow copy shares nested references, deep copy creates independent memory
*/




