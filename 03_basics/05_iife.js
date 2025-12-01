//Immediately Invoked Function Expressions

function chai(){
  console.log(`DB connected one`);
}
// chai()
// chai();

/*
The above function *runs immediately*, but it is NOT an IIFE.
It is just a normal function that we are calling manually.

An IIFE (Immediately Invoked Function Expression) is used when we 
want a function to execute immediately *without polluting the global scope*.

By wrapping the function inside parentheses and invoking it, we 
create a private scope that keeps variables safe from the global environment.



A normal function only runs when you call it.
An IIFE runs automatically and keeps its variables private.

We use IIFEs to avoid global scope pollution, to protect variables, and to initialize code immediately.
*/


(function chai(){
  console.log(`DB connected two`);
})();

( () => {
  console.log(`DB connected three`);
})();


( (name) => {
  console.log(`Hello ${name} with IIFE `);
})('parth');


/* if you write a multiple invoked function in same file then you might face error.
 because when iife inovke thay gayu but they don't know were to stop. so you've to end.

 how can we solve this ??
 using semicolon(;)  after paranthesis.

*/


/*
Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined. 
They are typically used to create a local scope for variables to prevent them from polluting the global scope.


Why do we use IIFE ??   - IIFE solves two major problems in JavaScript:

✅ 1. To create a private scope (avoid polluting global scope)
Before ES6 let & const, we only had var which leaked into global scope.
IIFE helps create a private block so variables don’t leak out.

  (function () {
    var secret = "hidden";
    console.log(secret);
  })();
    
  console.log(secret); // ❌ ERROR (not accessible)
  ➡ Keeps variables private
  ➡ Prevents name collisions


✅ 2. To execute code immediately

Sometimes you want logic to run as soon as the file loads:
  Configuration setup
  Initialization
  One-time code
  Environment checks

  (function init() {
    console.log("App initialized");
  })();



Types of IIFE

  1. Normal IIFE
    (function(){})();

  2. Arrow function IIFE
    (() => {
      console.log("Arrow IIFE");
    })();

  3. IIFE with parameters
    (function(name){
      console.log("Hello " + name);
    })("Parth");



⭐ How JS knows it's an expression?

Because we wrap it in parentheses:
(function(){})()
//    ↑ Makes it an expression

Functions in JS must be expressions to be executed immediately.



IIFE (Immediately Invoked Function Expression) is a function that runs immediately after it is created.
Syntax: (function(){ ... })();

Why used?
1. To create private scope and avoid global variables
2. To execute initialization code immediately
3. To avoid variable collisions in large codebases
4. Before ES6 modules, IIFEs were used to create module-like structures

Example:
(function(){
   const secret = 123;
   console.log("IIFE executed");
})();


*/


