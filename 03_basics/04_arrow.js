/*
arrow function = sort verison of function
() => {}
*/



// function chai(){
//   let name = 'hello parth with function keyword'
//   console.log(name);
//   return name
// }
// chai()


// const chai = function (){
//     let name = 'hello parth with function expression'
//   console.log(name);
//   return name
// }
// chai()

/* what happend if you give function name and varibale name same ??
  it will throw the error ??
  SyntaxError: Identifier 'chai' has already been declared
*/


// chaie()

const chaie = () => {
  let name = 'hello parth with arrow function'
  console.log(name);
  return name
}

// chaie()


const checkThis = () => {
  console.log('\n this keyword in arrow ==', this);
}
// checkThis()


/* can i use this keyword inside the arrow function ??
it will refere to empty object {}.
*/



//explicit 
// const addTwo = ( num1, num2 ) => {
//   return num1 + num2
// }

//implicit
// const addTwo = ( num1, num2 ) =>  num1 + num2

// const addTwo = ( num1, num2 ) =>  (num1 + num2)

// const addTwo = ( num1, num2 ) =>  {name: 'parth'}
const addTwo = ( num1, num2 ) =>  ({name: 'parth'}) //using paranthesis you can return object

// console.log('\n addTwo ==', addTwo(5,4));





