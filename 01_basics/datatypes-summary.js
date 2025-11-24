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

To make our lives easier, JavaScript added a special rule:
typeof functionName   --> "function"
Even though internally, functions are objects.

if you look the output of myFun [typeof myFun = function() { ... } function], because myFun → refers to a function object typeof myFun → "function" (special case in JS)

Internally
Functions are actually objects with extra properties, like:
[[Call]] → allows calling the function
name → function name
length → number of parameters
prototype → if used for constructors
So JavaScript treats them specially.

🧐 Then why not return "object"?
Because if functions returned "object", programmers would need to write:

if (typeof x === "object" && typeof x.call === "function") { ... }

That would be annoying.
So they created a special typeof result:

"function"
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
*/


