// hoisting

// x=2
// console.log(x);
// var x 


/*
JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

Hoisting means JavaScript moves variable and function declarations to the top of their scope during compilation. Only declarations are hoisted, not values.

Hoisting refers to the behavior where JavaScript moves the declarations of variables, functions, and classes to the top of their scope during the compilation phase. This can sometimes lead to surprising results, especially when using var, let, const, or function expressions.

Hoisting applies to variable and function declarations.
Initializations are not hoisted; they are only declarations.
'var' variables are hoisted with undefined, while 'let' and 'const' are hoisted but remain in the Temporal Dead Zone until initialized.

Before going to learn more about Hoisting, it's important first to understand the Temporal Dead Zone: 
https://www.geeksforgeeks.org/javascript/what-is-the-temporal-dead-zone-in-es6/

The phase between the starting of the execution of block in which the let or const variable is declared till that variable is being initialized is called Temporal Dead Zone for the variable. And during this zone javascript will always through a reference error if anyone tries to access those variables. 


*/


// hello();
// var hello = function() {
//   console.log("Hi!");
// };

/*TypeError: hello is not a function
The variable hello is hoisted, but it is not initialized until the assignment line is reached since it holds a function expression. Thus, calling hello() before its initialization throws a TypeError.
*/


// console.log(a);
// var a = 5;


// console.log(b);
// let b = 5


// greet();
// function greet() {
//     console.log("Hello, Mahima!");
// }


// hello();
// var hello = function() {
//     console.log("Hi!");
// };


// function test() {
//     console.log(x);
//     let x = 50;
// }
// test();

//The variable x is hoisted inside the function but cannot be accessed until its declaration line due to the TDZ.


// function test() {
//   console.log(x);
// }
// // var x = 50;
// // let x = 50;
// test();
// // var x = 50;
// let x = 50;


// const obj = new MyClass(); // ReferenceError
// class MyClass {
//     constructor() {
//         this.name = "Mahima Bhardwaj";
//     }
// }

//Although the class MyClass is hoisted, it cannot be accessed before its declaration due to the TDZ, which is why the code throws a ReferenceError.


// var a = 10;
// var a = 20;
// console.log(a);


// for (var i = 0; i < 3; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 100);
// }


// for (let i = 0; i < 3; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 100);
// }



// a = 10
// let a
// console.log(a);

// a = 10
// console.log(a);
// let a

/* let and const hoisted mean ??
Why it happens

  Hoisting with let: When you use let to declare a variable, the JavaScript engine hoists the declaration to the top of its scope. However, unlike var, it does not initialize it with undefined.

  Temporal Dead Zone (TDZ): From the start of the block until the line let a is executed, the variable a exists in a "Temporal Dead Zone." During this time, you cannot read from or assign a value to it.

  The Assignment: When the engine tries to execute a = 10, it sees that a local variable a is declared later in the same scope. Because that variable is still in the TDZ, it throws a ReferenceError instead of assigning the value. 



The error in your code occurs because of how the JavaScript engine parses and executes your script. Even though you typed the code in one order, the engine processes it in two distinct phases:

  1. The Creation Phase (Hoisting)
    Before running a single line, the engine scans your code for declarations. When it sees let a, it "hoists" the variable name to the top of the scope. However, for let and const, it marks them as uninitialized.
  2. The Execution Phase (ReferenceError)
    The engine then starts executing the code line-by-line:
    Line 1 (a = 10): The engine sees you are trying to assign a value to a. It knows a exists because of the hoisting phase, but since it hasn't reached the let a line yet, a is in the Temporal Dead Zone (TDZ).
    The Result: Because you cannot access or assign to a let variable while it is in the TDZ, the engine throws a ReferenceError immediately. The rest of the code, including the console.log(a), is never reached.


    

Summary
  The meaning of hoisting with let is that the engine binds the variable name to the current scope immediately, which is why it throws a ReferenceError (it knows a is there but locked) instead of quietly creating a global variable (which would happen without scope awareness/hoisting).


*/



/*

| Keyword | Scope    | Hoisted         | TDZ | Reassign | 	Initial Value       | 	Access before declaration? |
| ------- | -------- | --------------- | --- | -------- | --------------------  | ---------------------------- |
| var     | Function | Yes (undefined) | ❌   | ✅      | undefined             |                        
| let     | Block    | Yes (no value)  | ✅   | ✅      | None (Uninitialized)  |
| const   | Block    | Yes (no value)  | ✅   | ❌      | None (Uninitialized)  |

*/

