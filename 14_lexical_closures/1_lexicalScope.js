//lexical-scope


// function init() {
//   let name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   displayName();
// }
// init();



// function outer() {
//   let userName = "Parth Kumar"

//   // console.log("outer secret ", secret);

//   function inner() {
//     let secret = "inner secret"
//     console.log("inner secret ", secret);
//     // console.log("innerTwo secretTwo ", secretTwo);
//     console.log("userName", userName);
//   }
//   function innerTwo() {
//     let secretTwo = "innerTwo secret"
//     // console.log("inner secret ", secret);
//     console.log("innerTwo secretTwo ", secretTwo);
//     console.log("userName", userName);
//   }
//   inner()
//   innerTwo()

// }
// outer()


//lexical means who can access the variable. like child can use scope of parent. child - child can't use. paret can't use variable of child. and outer of the scope you can't use it.




//closures

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();


//please also check with let var and const with closure/lexical

/*
here if you look at this above code, when you makeFunc() call this function (execute) it menas that that function scoped are gone.   and function ka scope hi gayab ho gaya he to ab kese chalegi lexical scopping ?? kyuki jab outer function tha tab tak hi inner function ko sab mil raha tha.   here since outer function itself gone then how can work this ??

so, here interesting concept he closure.
  Although you have remove execution context but now here memory came. 

in above code what happend ??

  when makeFunc() execute and return displayName, to only displayName nahi jayega, jo uska outer function agar exist karata he to uska bhi pura scope jayega because of  lexical scop.
  so here puri memory share hoti he not only executional context


in sort , when you return function, so not only function will return usaka pura lexical scope return pan thay    

*/



/* what is closure ?? and why use ??
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.

A closure is created when a function remembers and can access variables from its outer (lexical) scope, even after the outer function has finished executing.

Simple definition (interview-friendly):
A closure is a function bundled together with references to its surrounding state (lexical environment).

function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2

Why this works:
  outer() runs and returns inner
  Normally count should be destroyed
  But inner closes over count
  So count stays alive in memory

  ➡ That’s a closure




🎯 Why do we use Closures?

1️⃣ Data Encapsulation (Private Variables)

function createUser() {
  let password = "secret";

  return {
    getPassword() {
      return password;
    }
  };
}

const user = createUser();
console.log(user.password);      // undefined
console.log(user.getPassword()); // "secret"

✔ Protects data
✔ No global pollution




2️⃣ State Preservation

function counter() {
  let count = 0;
  return () => ++count;
}

const c = counter();
c(); // 1
c(); // 2

Used in:
  Counters
  Caching
  Session state



3️⃣ Callbacks & Async Code

function fetchData(id) {
  setTimeout(() => {
    console.log(id);
  }, 1000);
}

fetchData(10);

id is remembered by the callback → closure




4️⃣ Function Factories

function multiplyBy(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiplyBy(2);
double(5); // 10


5️⃣ Used Everywhere in JS

Closures power:
  setTimeout
  Event handlers
  Promises
  React hooks (useState)
  Redux
  Middleware



❌ Common Misconception

❌ Closure is NOT a copy of variable
✅ It’s a live reference


🧠 Memory Note

Closures keep variables in memory
➡ Be careful of memory leaks if holding large data



🧪 Interview One-Liners

What is closure?
  A closure is a function that retains access to its lexical scope even after the outer function has returned.

Why use closures?
  To preserve state, create private variables, and manage async behavior.

*/
