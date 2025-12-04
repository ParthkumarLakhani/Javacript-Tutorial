const programming = [ "js", "java", "c++", "ruby" ] 

/* What is Higher order function ??

A Higher-Order Function is a function that does ANY of these:

✅ 1. Takes another function as an argument
✅ 2. Returns a function
✅ 3. Or both

In simple words:   A function that works with another function is a Higher-Order Function.



🔵 Why do we need Higher-Order Functions?
Because JavaScript treats functions as first-class citizens. This means functions can be stored in variables, returned, passed around, etc.

HOF gives:
          Reusability
          Cleaner code
          Functional programming
          Abstracting logic


🔥 Examples of Higher-Order Functions

1. Function taking another function → HOF
  function greet(name, callback) {
    callback(name);
  }

  greet("Parth", function(n) {
    console.log("Hello " + n);
  });


  Here:
        greet → higher-order function
        callback function → taken as argument



2. Function returning another function → HOF
  function multiply(x) {
    return function(y) {
      return x * y;
    };
  }

  const double = multiply(2);
  console.log(double(5)); // 10

  multiply returns a function → so it is HOF.




🚀 Common JavaScript HOFs
These are built-in Higher-Order Functions:

Array HOF Methods
  map()
  filter()
  reduce()
  forEach()
  sort()
  find()
  some()
  every()

All of them take a callback → so they are HOFs. 


📌 Why are they called “Higher Order”?

Because they operate on functions, not just values.
Functions treating functions like data = HOF.


🧠 Simple Example to Remember

Imagine a HOF as:  A function that controls another function.




Higher Order Function (HOF)
------------------------------
A Higher Order Function is a function that:
1. Takes another function as an argument, or
2. Returns another function, or
3. Does both.

JavaScript functions are first-class citizens, so HOFs are possible.

Examples of HOF:
- function greet(callback) { callback(); }
- function outer() { return function inner() {} }

Common array HOFs:
map, filter, reduce, forEach, sort, find.


*/


// programming.forEach( function (item){
//   console.log(item);
// } )

// programming.forEach( function (item, value, arr){
//   console.log(item, value, arr);
// } )

// programming.forEach( (item) => {
//   console.log(item);
// } )

// programming.forEach( (item, value, arr) => {
//   console.log(item, value,arr);
// } )


function printMe(item){
  console.log(item);
}

// programming.forEach(printMe())
// programming.forEach(printMe)


const myLang = [
  {
    languageName: "javascript",
    languageFileName: "js"
  },
  {
    languageName: "java",
    languageFileName: "java"
  },
  {
    languageName: "pyton",
    languageFileName: "py"
  }
]

// myLang.forEach( (item) => {
//   console.log(`${item.languageFileName} for ${item.languageName}`);
// })

// const lang = myLang.forEach( (item) => 
//   console.log(`${item.languageFileName} for ${item.languageName}`)
// )

// const lang = myLang.forEach( (item) => {
//   console.log('\n item ==', item.languageFileName);
//   return item.languageFileName
// })

const lang = myLang.forEach( (item) => {
  if(item.languageFileName === 'java'){
    item.languageFileName = '.java'
  }
  return item.languageFileName
})

console.log(lang);



console.log('\n myLang ==',myLang);

/*
foreach will not return anything, it's return undefined if you hold the variable
it will modifie original array
*/

