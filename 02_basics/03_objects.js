/*
object is collection of key value pair.  

Object declare in two ways
1. Object.create()
2. using literals

singleton
  A singleton in JavaScript is an object that is created only once, and everywhere in the program you use the same shared instance.
  A singleton object means:
    Only one instance exists, and every part of your code uses that same single object. There is no second copy, no duplicate.
  
  A Singleton in JavaScript is an object created only once. All parts of the code share the same instance. Useful for shared config, logging, DB connections. Implemented using object literals or an IIFE returning a single instance.


  Example of a Singleton Object
  const config = {
    appName: "MyApp",
    version: "1.0",
    apiUrl: "https://example.com"
  };

  Here,
  config is a singleton because:
  You created it once
  You use the same object everywhere
  If you modify it, changes reflect everywhere because it’s the same object reference


  ✅ Where Singleton is Used
  Singletons are used when the whole app should share only ONE instance of something:

  Examples:
    Config object
    Database connection
    Logger service
    State management
    Cache
    Auth session

  🧠 Why Singleton? (Benefits)
    Only one instance → saves memory
    Global shared access
    Useful for configs, loggers, DB connection

  ⚠️ Downsides
  ❌ Global state → harder to test
  ❌ Can accidentally modify from anywhere
  ❌ Tight coupling



Interview question like ??
  When singleton created ??  

  when we declare object using literals then singleton not cretaed.
*/


// const person = Object.create()  //constructor method
// const person = {}  // literals



const mySym = Symbol('myKeyAddedToObj')


const person = {
  name: 'parth',     // internally system read like "name": "parth". but we are not writing like this.
  "firstName": 'parth', 
  "full name": 'parth patel', 
  age: 22,           
  email: "parth.lakhani@google.com",           
  isLoggedIn: false,           
  lastDaysLogInDay: ['Mon','Tue','Wed'],
  // mySym: 'symbol1'
  [mySym]: 'symbol1'
}

// console.log('\n person name =', person.name);
// console.log('\n person name =', person["name"]);

/*
  This is how[above two line] we can access the object.
  
But why we access like this person[""] ??
 because there are certain keys which we are not able to access them using .(dot) notation
*/

// console.log('\n without using [] access ==', person.firstName);
// console.log('\n using [] access ==', person["full name"]);  //that's how access it

/* Interview Question
Take symbol add to object keys and print them ??
 
  declare symbole using mySym and added to obj like mySym: 'symbol1' but here mySym is not refer to symbol. this is not correct way to add.
  how can you add....  : [mySym]: 'symbol1'.
   now if you want to access using this   person.mySym  or person["mySym"]  it's gives undefined.

  value are not going to change. so where is useful ??

  Symbols are useful for creating hidden, private, or internal object properties, avoiding key collisions, defining custom behavior using well-known symbols, attaching metadata safely, and creating safe enums.

*/

// console.log('\n mysym ==', person.mySym, typeof person.mySym);
// console.log('\n mysym ==', person.mySym, person["mySym"])

// console.log('\n mysym with reference symbol ==', person[mySym]);



/* ***********IMPORTANT
✅ Why Literals Are Faster Than Constructor Methods in JS?

  Literals
    Object and array literals ({}, []) are faster because the JavaScript engine creates them directly, without calling any function.
    JavaScript already knows exactly how to create these.
    They are optimized at the engine level (V8, SpiderMonkey, etc.).
      No extra processing.
      No function calls.
      Just direct allocation.
    

  Constructor methods like new Object() or new Array() require extra steps:
    Lookup the constructor function
    Create a new object
    Set up prototype
    Execute constructor logic
    Return the object



  Literals have no overhead → no function call, no special cases.
  Modern JS engines apply strong optimizations (e.g., inline caching, hidden classes) that work best with literals, making them even faster.

  Constructor versions also have extra checks (especially new Array()), making them slower and less predictable.

  Use literals ([], {}) instead of constructors (new Array(), new Object()) because they are faster, cleaner, and more optimized.

  
  *******
  Now a days, js engine(chrome)/ node so optimised Both literal and constructor appear almost same speed → difference ≈ 0.
  But when you test in loops (1000, 10k, 1M iterations): literal is consistently faster. constructor slower.

General JS Tip: creation is not a bottleneck. Focus on loops, DOM access, or network I/O for real perf gains.
please check bottleneck file
*/

