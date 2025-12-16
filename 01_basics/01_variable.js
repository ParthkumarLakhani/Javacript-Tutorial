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