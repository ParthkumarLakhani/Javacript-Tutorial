/* What is Function in js ?? and Types of Functions ??

Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.

if you write a function then you have to return function otherwise javascript automatically return undefined. it will throw error.


✅ Why do we use functions?

Functions help to:
  code reusability 
  avoid code repetition
  break big logic into smaller chunks
  improve readability
  maintainability


  function jsFunction(p1){
  
  }
  This is called function defination /statement/declaration.


  jsFunction()   this is called function calling or invoking [call or invoke]



Types of Functions


*/


function helloMyFirstFunction(){
  console.log("hello parth");
}

// const myF1 = helloMyFirstFunction       //this is called reference
// const myF1 = helloMyFirstFunction()     //this is called calling or invoking
// console.log(myF1);



function addTwoNumber(num1, num2){       //parameters
  return num1 + num2
}
const sumOfNumber = addTwoNumber(5,5)    //arguments
// console.log(sumOfNumber);

/* argument and parameters
A parameter is a variable defined in the declaration or signature of a function. It acts as a placeholder for the values that will be passed into the function when it is called.

An argument is the actual value or expression that is passed to a function when it is called.
*/



function subTwoNumber( num1, num2 = 10 ){       
  return num1 - num2
}
const subOfNumber = subTwoNumber(5) 
// console.log(subOfNumber);  





/* shopping cart -situation
when user trying to add add,....item that time you have to calculte price ,... so you create function right ?? but problem is how many parameter you write ??
*/

function shoppingCart(...items){           //rest op
  // console.log(items);
  const sum = items.reduce( (acc, i) => ( acc + i) , 0)
  return sum
}

const cartPrice = shoppingCart(100,200,300,400)
// console.log(cartPrice);


function cartTotal(i1,i2,...items){
  // console.log(i1,i2,...i);
  const sum = items.reduce( (acc, i) => ( acc + i) , 0)
  return i1 + i2 + sum
}

const cartSum = cartTotal(100,200,300,100)
// console.log(cartSum);


/*IMPORTANT
here also you can pass object or array. so if you written a function and perfoming a task please note that which type of data are you taking.?? 
*/

