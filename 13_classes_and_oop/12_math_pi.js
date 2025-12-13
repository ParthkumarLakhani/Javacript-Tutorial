// Q. in js Math.pi has value 3.144545....like i want to change to 3 or 4 can i do that ??   thay to kem thay ??  and no thay to kem no thay ??



// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI);



// we know that Math is an object. we can also check the properties. if you want to know the property of object you can use this method.

const discriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// const discriptor = Object.getOwnPropertyDescriptors(Math)

// console.log(discriptor);
//please check property. then you get your answer.


/*
Math is object ??
Yes ✅ — Math is an object in JavaScript.

Why Math is an object?
  Math is a built-in global object provided by JavaScript
  It contains properties and methods related to mathematical operations
  You access its functionality using dot notation, just like any other object


Important points
❌ Math is not a constructor    new Math()

Math is a built-in JavaScript object that provides static mathematical constants and functions, but it cannot be instantiated.

*/




const chai = {
  chai: "masala chai",
  price: 900,
  isAvailable: true,

  // chai: "masala chai",
}

chai.price = 999

// const chaiDiscriptor = Object.getOwnPropertyDescriptors(chai)
const chaiDiscriptor = Object.getOwnPropertyDescriptor(chai,"price")
console.log(chaiDiscriptor);



// Object.defineProperties(chai,{
//   'price':{
//   writable: false,
//   enumerable: true,
//   configurable: false
// },
//   'isAvailable': {
//   writable: false,
//   enumerable: false,
//   configurable: false
// }}
// )
// const chaiDiscriptorUpdate = Object.getOwnPropertyDescriptors(chai)



Object.defineProperty(chai, "price", {
  writable: false,
  enumerable: false,
  configurable: true
})

// chai.price = 666


// const chaiDiscriptorUpdate = Object.getOwnPropertyDescriptor(chai,"price")
// console.log(chaiDiscriptorUpdate);



// for (let [key, value] of Object.entries(chai)) {
//   console.log(`${key}: ${value}`);
// }

chai.orderChai = function (){
 console.log(` not completre `); 
}


//what if enumration is false

for (let [key, value] of Object.entries(chai)) {
  if(typeof value !== 'function'){
    console.log(`${key}: ${value}`);
  }
}



/*
| Descriptor   | Question it answers          |
| ------------ | ---------------------------- |
| writable     | Can I change the value?      |
| enumerable   | Can I see it in loops?       |
| configurable | Can I delete or redefine it? |



advance In strict mode, if writable: false then you change the value it will throw the error


✔ enumerable: true
  Property shows up in:
    for...in
    Object.keys()
    Object.entries()


❌ enumerable: false
  Property is hidden. Still accessible directly:


configurable: true
  delete the property
  change descriptors later


❌ configurable: false
  You cannot:
    delete the property
    redefine its descriptors  

*/

