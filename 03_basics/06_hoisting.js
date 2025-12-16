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



/*

| Keyword | Scope    | Hoisted         | TDZ | Reassign |
| ------- | -------- | --------------- | --- | -------- |
| var     | Function | Yes (undefined) | ❌   | ✅      |
| let     | Block    | Yes (no value)  | ✅   | ✅      |
| const   | Block    | Yes (no value)  | ✅   | ❌      |

*/

