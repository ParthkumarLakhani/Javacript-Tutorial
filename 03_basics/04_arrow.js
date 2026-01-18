/*
arrow function = sort verison of function
() => {}
*/



// function chai(){
//   let name = 'hello parth with function keyword'
//   console.log(name);
//   return name
// }
// chai()


// const chai = function (){
//     let name = 'hello parth with function expression'
//   console.log(name);
//   return name
// }
// chai()

/* what happend if you give function name and varibale name same ??
  it will throw the error ??
  SyntaxError: Identifier 'chai' has already been declared
*/


// chaie()

const chaie = () => {
  let name = 'hello parth with arrow function'
  console.log(name);
  return name
}

// chaie()


const checkThis = () => {
  console.log('\n this keyword in arrow ==', this);
}
// checkThis()


/* can i use this keyword inside the arrow function ??
it will refere to empty object {}.
*/

/*
can arrow function have the access of this keyword ??
why normal function have this and arrow function don;t ??
please explain properly.


Short Answer (Interview-ready)
  Normal functions have their own this because they are designed to be dynamically bound at call-time.
  Arrow functions don’t have this because they are designed to capture this lexically (from where they are written), not from how they are called.

Normal functions have this because JavaScript needs dynamic context binding for objects and constructors. Arrow functions don’t have this by design to avoid rebinding issues and to lexically capture this for predictable behavior in callbacks.


1. What is this and Why Does It Matter?

this is a special keyword that dynamically changes based on how a function is called.
It's useful in object-oriented programming, event handlers, callbacks, and more, because it allows functions to access properties of the object they're associated with.
The key confusion often comes from JavaScript's dynamic scoping for this in regular functions, which can lead to unexpected behavior (e.g., losing context in callbacks). Arrow functions were introduced in ES6 to address this by making this more predictable.


2. How this Works in Regular Functions

Regular functions (also called "normal" or "traditional" functions) have their own this binding.
The value of this is determined at runtime, based on how the function is invoked:
Global invocation: If called standalone (not as a method), this points to the global object (window in browsers, global in Node.js). In strict mode, it's undefined.
Method invocation: If called as an object method (e.g., obj.method()), this points to the object (obj).
Constructor invocation: With new, this points to the newly created instance.
Explicit binding: Using call(), apply(), or bind(), you can manually set this.

This dynamic nature can be powerful but error-prone, especially in nested functions or callbacks where this might unexpectedly change.


3. How this Works in Arrow Functions

Arrow functions do NOT have their own this binding. Instead, they inherit this from the enclosing lexical scope (the surrounding code where the arrow function is defined).
This means this in an arrow function is lexically bound—it's resolved at the time the function is defined, not when it's called. It "captures" the this from the outer context and doesn't change, no matter how the arrow function is invoked.
Yes, arrow functions can access this, but it's not their own—it's borrowed from the parent scope. This makes them ideal for scenarios where you want this to remain consistent (e.g., in callbacks or class methods).
Arrow functions ignore call(), apply(), and bind() for setting this—they always use the lexical this.



4. Why Do Regular Functions Have Their Own this, But Arrow Functions Don't?

Design Philosophy:
Regular functions are older (pre-ES6) and follow JavaScript's original dynamic binding rules, inspired by languages like Java or C++. This flexibility allows functions to be reused in different contexts but can lead to bugs (e.g., this becoming window in a callback).
Arrow functions were added in ES6 specifically to solve common pain points, like maintaining this in callbacks (e.g., in setTimeout, array methods like map(), or event listeners). They promote a more functional programming style where context is predictable and doesn't shift unexpectedly.

Lexical vs. Dynamic Binding:
Regular: Dynamic (this decided by caller) → More flexible, but requires workarounds like var self = this; or .bind(this).
Arrow: Lexical (this decided by definition scope) → Simpler for nested functions, no need for binding.

Trade-offs:
Use regular functions when you need dynamic this (e.g., constructors, methods that might be rebound).
Use arrow functions for concise lambdas where you want to preserve outer this (e.g., in React components, promises, or async code).
Note: Arrow functions also can't be used as constructors (no new) and don't have arguments or super.


Why This Difference?
  1. Normal Functions: Have this Binding
    Each normal function creates its own this context
    this value is determined at call time
    Can be controlled with call(), apply(), bind()

  2. Arrow Functions: No this Binding
    Arrow functions were designed to NOT have their own this
    They inherit this from the parent scope at definition time
    Cannot be changed with call(), apply(), bind()


 
5. Common Use Cases and Pitfalls

Callbacks: Arrow functions shine here.

// Regular function loses 'this'
setTimeout(function() {
  console.log(this);  // 'this' is window (or timeout object)
}, 1000);

// Arrow preserves outer 'this'
setTimeout(() => {
  console.log(this);  // Whatever outer 'this' is
}, 1000);


Class Methods: In classes, prefer arrow for methods that use this in callbacks.

class Person {
  constructor(name) {
    this.name = name;
  }
  greet = () => {  // Arrow auto-binds 'this'
    console.log(`Hello, ${this.name}`);
  }
}
const p = new Person('Dave');
const extracted = p.greet;
extracted();  // Still "Hello, Dave"

Pitfall: Don't use arrows as object methods if you need dynamic this rebinding.

*/





//explicit 
// const addTwo = ( num1, num2 ) => {
//   return num1 + num2
// }

//implicit
// const addTwo = ( num1, num2 ) =>  num1 + num2

// const addTwo = ( num1, num2 ) =>  (num1 + num2)

// const addTwo = ( num1, num2 ) =>  {name: 'parth'}
const addTwo = ( num1, num2 ) =>  ({name: 'parth'}) //using paranthesis you can return object

// console.log('\n addTwo ==', addTwo(5,4));





