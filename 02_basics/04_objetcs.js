// const tinderUser = new Object() 

const tinderUser = {}

tinderUser.id = "12147542"
tinderUser.email = "parth@google.com"
tinderUser.name = 'parth' 
tinderUser.isLoggedIn = false

// console.log('\n tinderUser ==',tinderUser);

const regularUser = {
  id: 4554224, 
  name: 'patel',
  fullName: {
    userName:{
      firstName: 'parthji',
      lastName: 'kumar'
    }
  },
  isLoggedIn: true
}

Object.freeze(regularUser) 
/*
No new properties can be added. Existing properties cannot be removed. Existing properties cannot be modified
it can't throw error
*/ 
regularUser.name = 'path11'
// console.log('ddddd',regularUser); 

// console.log(regularUser);
// console.log(regularUser.fullName.userName?.firstName); //this is called optional chainning


const obj1 = { 1: 'a', 2: 'b'}
const obj2 = { 3: 'c', 4: 'b'}
const obj4 = { 5: 'c', 4: 's'}

//how to combine

// const obj3 = { obj1, obj2 } // here problem is it's look like { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'b' } }
// const obj3 = Object.assign(obj1,obj2) 
// const obj3 = Object.assign(obj1,obj2,obj4) 
// const obj3 = Object.assign({}, obj1,obj2,obj4, regularUser) 
// const obj3 = { ...obj1,...obj2, ...obj4, ...regularUser }

/* 
if you looke at this Object.assign(obj1,obj2), here assing method merge object to target obj. so of target object is obj1 then all other obj is merge with obj1.
it's means original object[target object] is modifie.

so, if you want to avoid this then you can also use like this Object.assign({}, obj1,obj2,obj4)
but almost 90% we used spread op

What is difference between this two Object.assign() and spread op  to merge object ??
    
  Both merge objects, and both create a new object. But there are important differences in behavior and usage.

✅ 1. Object.assign({}, ...objects)
    ✔ Creates a new object
    ✔ Copies properties from right → left
    ✔ Only copies enumerable own properties
    ✔ Does NOT copy inherited properties
    ❌ Does NOT copy symbols unless explicitly enumerable
    ❌ Mutates the first argument if it's not {}
    ❌ Deeper objects are NOT cloned (shallow copy)


✅ 2. Spread Operator: { ...obj1, ...obj2 }
    ✔ Also creates a new object
    ✔ Also copies properties from right → left
    ✔ Shorter syntax
    ✔ Also shallow copies
    ❌ Does NOT copy inherited properties (same as assign)
    ❌ Does NOT copy non-enumerable properties
    ❌ Symbol properties are copied (better than assign)



⭐ Key Differences (Important)
  Difference 1 → Symbol properties

  ✔ Spread copies symbol keys
  ❌ assign() copies symbols only if enumerable

  Example:
  const sym = Symbol("id");
  const o1 = { [sym]: 123, name: "parth" };

  const a = Object.assign({}, o1);
  const b = { ...o1 };

  console.log(a); // { name: 'parth' }
  console.log(b); // { name: 'parth', [Symbol(id)]: 123 }


Difference 2 → Mutability

  If you write:
  Object.assign(obj1, obj2);
  👉 It modifies obj1 (dangerous)

  Spread never mutates:
  { ...obj1, ...obj2 }


Difference 3 → Handling getters/setters

  Object.assign calls the getter immediately
  Spread operator copies the value after the getter resolves

  Example:

  const o = {
    get value() {
      console.log("getter called");
      return 10;
    }
  };

  Object.assign({}, o);   // calls getter immediately
  { ...o };               // also calls getter but slightly differently
  


🎯 Final Interview-Safe Note (Copy/Paste)

Spread { ...obj } and Object.assign() both perform shallow copies of enumerable own properties.

Key differences:
    Spread copies symbol properties, while Object.assign() copies symbols only if enumerable.
    assign() can mutate the target object, spread always returns a new object.
    Spread is cleaner, modern syntax and preferred for merging.
    Both do NOT deep clone.
    Both ignore prototype properties.

    Preferred: Spread operator.  

*/

// console.log(obj1);
// console.log(obj3);



// console.log(tinderUser);

const objKeys = Object.keys(tinderUser)
// console.log(objKeys, typeof objKeys);

const objValues = Object.values(tinderUser)
// console.log(objValues, typeof objValues);

const objEntries = Object.entries(tinderUser)
// console.log(objEntries, typeof objEntries);

const checkPropertyExist = tinderUser.hasOwnProperty('isLoggedIn')
const checkPropertyExists = tinderUser.hasOwnProperty('isLogged')
// console.log(checkPropertyExist,checkPropertyExists);


/*Important
Object.keys(): 
  it will return the array of all enumerable property names (keys).
  Keys are always strings (or converted to strings).
  Order follows normal object property order.

Object.values(): 
  it will return the array of all enumerable property values.
  Order matches the order of Object.keys().

Object.entries(): 
  it will return the array of array of key/value pairs.


  
🧠 Interview-Notes / Important Points
⭐ 1. All three only return enumerable & own properties

They do NOT return:
  Symbol keys
  Non-enumerable keys
  Prototype properties
  
    
| Method             | Use-Case                                          |
| ------------------ | ------------------------------------------------- |
| `Object.keys()`    | Loop through keys, validation, dynamic processing |
| `Object.values()`  | Summation, filtering values, transformations      |
| `Object.entries()` | Creating Maps, iterating key/value pairs          |
 
3. Best way to loop an object
for (const [key, value] of Object.entries(user)) {
  console.log(key, value);
}

4. Convert object → Map
const map = new Map(Object.entries(user));

*/


const newPerson = {
  name: 'parth',
  age: 22,
  email: 'parth@xxx.co.in'
}


Object.defineProperty(newPerson, "address", {
  value: 'Ahmedabad',      // ← "value" not "values" !!
  enumerable: false,        // now it will show in console.log / for...in
  writable: true,          // optional: allow changing later
  configurable: true       // optional: allow deleting or redefining
})

newPerson.address = 'amd'

// console.log('\n new property define', newPerson.address);


/* What is enumerable ?? 
A property can be listed / looped / displayed when you iterate over the object
(using for...in, Object.keys(), Object.values(), Object.entries(), etc.)

✅ If a property is enumerable: true

This means:
    It appears in Object.keys()
    It appears in Object.values()
    It appears in Object.entries()
    It appears in for...in loop

Example:
  const obj = {
    name: "Parth"
  };
  console.log(Object.keys(obj));  
  // ["name"]

➡ "name" is enumerable.


❌ If a property is enumerable: false
This means the property exists, but JavaScript will not list it in loops.

const obj = {};

Object.defineProperty(obj, "secret", {
  value: "hidden value",
  enumerable: false
});
console.log(obj.secret);   // "hidden value"  (property exists)
console.log(Object.keys(obj)); // []  (NOT listed)

➡ The property is hidden from enumeration, but still accessible.



enumerable: true 
   → property will show in loops and Object.keys().

enumerable: false 
   → property exists but will NOT show in loops.

Normal object properties are enumerable by default.

We can control enumerability using Object.defineProperty().

*/





const course = {
  courseName: 'javascript-tutorial',
  price: 999,
  courseInstructor: 'parth',
}

/*
de-structuring
*/
// const { courseInstructor } = course
const { courseInstructor: instructor} = course // also you can give a name

// console.log(courseInstructor);
// console.log(instructor);






//JSON and API

/* 
{
  "name": 'parth',
  "coure": 'javascript-tutorial',
  "price": 'free'
}
  
before we get value in xml format(which is very complex) but now days we get value in JSON.
JSON is nothing but the object without named. and keys are usually string.

JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate. It is based on a subset of the JavaScript Programming Language Standard ECMA-262 3rd Edition - December 1999. JSON is a text format that is completely language independent but uses conventions that are familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others. These properties make JSON an ideal data-interchange language.

JSON is built on two structures:
A collection of name/value pairs. In various languages, this is realized as an object, record, struct, dictionary, hash table, keyed list, or associative array.
An ordered list of values. In most languages, this is realized as an array, vector, list, or sequence.
*/









