// variable

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
*/