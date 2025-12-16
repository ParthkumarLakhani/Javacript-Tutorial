// variable

//A variable is a name that refers to a value stored in memory.,    it store the value and pointing to memory address

// const 1rew = "hi" not allowed
// const @op = "hello" // not allowed


// How to write a variable, function, class, parameter and property name ?? [all are follows same rule (identifier rules)]
/*
A JavaScript identifier usually starts with a letter, underscore (_), or dollar sign ($). Subsequent characters can also be digits (0 – 9). 
Because JavaScript is case sensitive, letters include the characters A through Z (uppercase) as well as a through z (lowercase).

You can use most Unicode letters such as å and ü in identifiers. (For more details, see the lexical grammar reference.) You can also use Unicode escape sequences to represent characters in identifiers.

Avoid reserved keywords 
*/


const mobileNumber = 1234567890
let email = "test@email.com"
var address = "123 Main St"
state = "Gujarat" 


// console.log('\n mobileNumeber = ', mobileNumber);

// it will display the data in tabular format
// console.table([mobileNumber, email, address, state]);
// console.table({mobileNumber: mobileNumber, email: email, address: address, state: state});


// Naming Conventions: 
/*
Camel case and Pascal case are naming conventions that join words into a single string without spaces, but differ in capitalization. 
Camel case starts with a lowercase letter (e.g., myVariable).
Pascal case starts with an uppercase letter (e.g., MyVariable).

By industry standards, camel case is typically used for variable and function names, while Pascal case is used for class names and constructors.

doesn't matter what ever style you use just idea is that it will be consistent and readable.
*/


//4 ways to decalre a variabl in javascript
/*
1. let
2. const
3. var    -- old method and not recommended to use this
4. Automatically (without any keyword)  -- old method and not recommended to use this
*/


// var and auto-declared variables
var oldVarVariable = "I am old variable"
var oldVarVariable = "I'm redecalred"
oldVarVariable = "I'm re-assigned"

if(1){
  oldVarVariable = "I'm re-assigned inside block"
}


autoVariable = "I'm auto variable"
autoVariable = "I'm re-assigned auto variable"

if(1){
  autoVariable = "I'm re-assigned auto variable inside block"
}



/*
In older JavaScript, var had issues. For example, if one programmer declared a variable like oldVarVariable, another programmer could accidentally re-declare the same variable using var, and JavaScript would overwrite the value without any error.

var has global scope/no scope

To solve these problems, ES6 introduced let and const, which prevent re-declaration and are block-scoped.
*/


// const tell;   when you declare at that Time you have to initialize too
const constatnt = "I'm const"

// constatnt = 'can I re-assinged ??' re-assinged/re-initialize it not possible 

// const constatnt  you can't redeclared within same scope
if (1) {
  const constatnt = 456
}


let phone = 'samsung-iphone';
// let phone you can't redeclared within same scope
if (1) {
  let phone = 'samsung-iphone-20';
}


/*
40. Why var attaches to window?
Because it's function/global scoped

45. Memory allocation?
var → global/function env
let/const → block env

*/

/*
why  var in loop?  - Single shared variable

for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i); // What will this print?
    }, 100);
}

Why this happens with var:
  var is function-scoped, not block-scoped
  The variable i is hoisted to the top of the function (or global scope)
  There's only ONE i variable in memory for the entire loop
  All iterations share this same variable
  By the time the setTimeout callbacks execute, the loop has finished and i = 3

// What JavaScript actually does with var:
var i; // Hoisted: single variable created ONCE

for (i = 0; i < 3; i++) {
    // Each iteration modifies the SAME 'i'
    setTimeout(() => {
        console.log(i); // All callbacks reference the SAME 'i'
    }, 100);
}
// Final value of i = 3  


why let in loop?   - New variable per iteration

for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i); // What will this print?
    }, 100);
}
Why this happens with let:
  let is block-scoped
  JavaScript creates a NEW i variable for each iteration
  Each iteration's callback "closes over" (captures) its own separate i
  Even though the variable has the same name (i), they're different in memory


// What JavaScript actually does with let:
for (let i = 0; i < 3; i++) {
    // JavaScript creates a NEW 'i' for each iteration
    // Let's call them i0, i1, i2 in memory
    
    setTimeout(() => {
        // Closure captures iteration's specific 'i'
        console.log(i); // Each callback has its own 'i'
    }, 100);
}
// No single 'i' exists after loop







Step-by-Step Comparison
With var (Shared Variable):

// Step 1: Single 'i' created (hoisted)
var i;

// Step 2: Loop runs
// Iteration 1: i = 0 → timeout scheduled (will log i later)
// Iteration 2: i = 1 → timeout scheduled (will log i later)  
// Iteration 3: i = 2 → timeout scheduled (will log i later)
// Iteration 4: i = 3 → loop stops

// Step 3: 100ms later, all timeouts execute
// ALL see i = 3 (the final value)
console.log(3); // 3 times



With let (Per-Iteration Variables):
// Step 1: Loop starts
// Iteration 1: Creates i₀ = 0 → timeout captures i₀
// Iteration 2: Creates i₁ = 1 → timeout captures i₁
// Iteration 3: Creates i₂ = 2 → timeout captures i₂

// Step 2: 100ms later, each timeout executes with its captured value
// Timeout 1: has i₀ = 0
// Timeout 2: has i₁ = 1
// Timeout 3: has i₂ = 2


*/


/*
Please Understood scope and Hoisting, TDZ and solev the question.

TDZ:  
  A variable declared with let, const, or class is said to be in a "temporal dead zone" (TDZ) from the start of the block until code execution reaches the place where the variable is declared and initialized.


  The Temporal Dead Zone (TDZ) in JavaScript is a period of time during a variable's lifecycle in which it cannot be accessed. This concept applies to variables declared with let and const keywords.


  Explanation
  When JavaScript code runs, the engine scans the code and "hoists" all variable and function declarations to the top of their scope.

  var: Variables declared with var are hoisted and automatically initialized with undefined. They do not have a TDZ.
  let and const: These variables are also hoisted, but they are not initialized. The TDZ is the time from the start of the block scope until the line of code where the variable is declared and a value is assigned (initialized) is executed. 
  Attempting to access a variable while it is in the TDZ will result in a ReferenceError. This strict behavior helps developers write more predictable and less error-prone code by preventing the use of uninitialized variables, which was a common source of bugs with var.
  
  
*/