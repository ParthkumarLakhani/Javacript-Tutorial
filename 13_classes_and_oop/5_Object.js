//Javascript behaviour - which is prototypal behaviour

/* Prototypal Javascript Default behavior
  please check in the browaser console

  like it will never loose hope, means if you find something wo nahi mil rahi, it always look upper layer. parent to grandparent, grandparent to great grandparent, untill they found null.   this is default behaviour.
based on this behaviour actually our this keyword work. some people say in arrow function dosen't have this keyword - because of this proptotype

prototype hi he jise hame new keyword ki working mili he, classes iske through mili he and this keyword he isike throug kaam kar raha he, and jo prototypal inheritance/ inheritance he javascript ke andar aa raha he wo bhi isike through aa raha he.

It is because of prototypes that we have the behavior of the new keyword, classes, and the way the this keyword works in JavaScript. Prototypes are also the reason prototypal inheritance (or inheritance) exists in JavaScript

Almost every thing in js is Object, and the parent of Object is indeed null. Everything ultimately inherits from Object.prototype.
*/



function multiplyBy5(num) {
  return num * 5
}
// console.log(multiplyBy5(5));

multiplyBy5.power = 2
console.log(multiplyBy5.power);

console.log(multiplyBy5.prototype); //{} means there is some by-default context are set. means this {} uss method ka this he.
// in sort here aur bhi jo prototype ki properties he + this ka context he wo available hota he.




function createUser(username, score){
  this.username = username
  this.score = score
}

// createUser.prototype.increment = function (){
//   score++
// }

createUser.prototype.increment = function (){
  this.score++
}

createUser.prototype.printMe = function (){
  console.log(`price is ${this.score}`);
}

// const chai = createUser("chai", 10)
// const tea = createUser("tea", 5 )

// chai.printMe()  // ??

/*
let say when we declared the array, now i want to use map so, we write like this  ary.map ().   we don't write like ary.prototype.map()
why ??
because javascript are finding itself. you don't have to write multiple time.

What is problem here ?? chai.printMe()  // ??
okay, but when we call function  const chai = createUser("chai", 10) and that value store in varible that time you didn't tell the i've additional properties. how can we tell them or who can tell them ??
 by new Keyword

*/

/* Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/


const chai = new createUser("chai", 10)
const tea = new createUser("tea", 5 )

chai.printMe() 




