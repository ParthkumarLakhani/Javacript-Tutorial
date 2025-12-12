const user = {
  userName: "parth", 
  age: 25, 
  address: "amd",
  reserve: this,
  
  getUserDetails: function(){
    console.log(`Got user details success`);
  },
    
  getProfile: function(){
    console.log(`Got ${this.userName}`);
  }
}

// console.log(user);
// console.log(user.getUserDetails());

// console.log(this);
// console.log(user.reserve);
// console.log(user.getProfile());


//lets say i want to create another user

// const user2 = {
//   userName: "parth", 
//   age: 25, 
//   address: "amd",
//   reserve: this,
  
//   getUserDetails: function(){
//     console.log(`Got user details success`);
//   },
    
//   getProfile: function(){
//     console.log(`Got ${this.userName}`);
//   }
// }

//if we have more user then this will not be possible. so come up with solution constructor function.

// const promise = new Promise()
// const date = new Date()


function User(user, age, loggedIn) {
  this.userName = user
  this.age = age
  this.loggedIn = loggedIn,
  
  this.greeting = function (){
    console.log(`hello ${this.userName} Welcome to constructor function`);
  }

  // return this
  return this
}

// const userOne = User("parth", 25, true)
// const userTwo = User("patel", 20, false)
// console.log(userOne);

const userOne = new User("parth", 25, true)
const userTwo = new User("patel", 20, false)
console.log(userOne);
console.log(userTwo);

console.log(userOne.greeting());


console.log(userOne.constructor);       //it will give a reference to himself
console.log(userOne instanceof User);   //return boolean



/* what constructor function will do ??
based on the one object literal you will create multiple instance.

constructor function will give new instance  or give a copy  every time. so whatever you do with copy it will not affect to other. 

new Keyword: it will help to create new context. and also we called as constructor function

step, when you write new Keyword
1. first it will create new {}, know as instance
2. becuase of new keyword there is one constructor function called, now what will this do ?? whatever you writtin argument,.. it will wrap up and will give to you
3. all argument and all are inject to this keyword
4. you get output  


it you look at the above function there is also doing absraction, encapsulation,..
user don't know how greeting work internally,  which is absraction
also if you look at the userOne we encapsulate everything to that. 

*/



/* What is the new Keyword in JavaScript ?? - chatGPT

The new keyword in JavaScript is a constructor operator used to create and initialize instances (objects) from a constructor function or a class. It essentially turns a function into a blueprint for creating objects, enabling object-oriented programming patterns like instantiation and inheritance.

How It Works (The 4 Steps)
When you use new with a constructor (e.g., new MyConstructor()), JavaScript performs these steps behind the scenes:

Create a new empty object: {} – This becomes the instance.
Set the prototype: The new object's prototype (__proto__) is linked to the constructor's prototype property, allowing inheritance of methods/properties.
Bind this: Inside the constructor function, this refers to the new object, so you can assign properties (e.g., this.name = 'value').
Return the object: The constructor returns the new object (unless the constructor explicitly returns something else, like another object, which overrides this).

This is all part of JS's prototype-based inheritance system. Note: Classes (from ES6) are syntactic sugar over this mechanism—using new with a class is the same under the hood.



Basic Example with Constructor Function (Pre-ES6 Style)
  
  // Constructor function
  function Person(name, age) {
    this.name = name;  // Assign to 'this' (the new instance)
    this.age = age;
    this.greet = function() {
      console.log(`Hi, I'm ${this.name}, ${this.age} years old.`);
    };
  }

  // Using 'new' to create instances
  const alice = new Person('Alice', 30);
  const bob = new Person('Bob', 25);

  alice.greet();  // Output: Hi, I'm Alice, 30 years old.
  bob.greet();    // Output: Hi, I'm Bob, 25 years old.

  console.log(alice instanceof Person);  // true (checks prototype chain)



Example with ES6 Classes (More Modern)

  class Animal {
    constructor(name) {
      this.name = name;
    }
    
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }

  const dog = new Animal('Rex');
  dog.speak();  // Output: Rex makes a sound.



Common Pitfalls & Tips

  Forgetting new: If you call a constructor without new, this binds to the global object (or undefined in strict mode), leading to bugs. Always use new!
  
  JavaScript// Bad: Without 'new'
  const cat = Person('Cat', 5);  // 'name' and 'age' get added to global scope (oops!)

  // Good: With 'new'
  const cat = new Person('Cat', 5);
  
  Returning from Constructor: If the constructor returns a primitive (e.g., return 42;), it's ignored—new returns the instance. But returning an object overrides it.
  Built-in Use: JS uses it for natives too, like new Date() or new Array(5).
  Alternatives: For functional patterns, consider factories (function createPerson(...) { return { ... }; }), but new is ideal for OOP.

*/


