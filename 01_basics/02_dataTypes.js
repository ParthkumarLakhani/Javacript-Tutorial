//dataTypes

/*

** primitives:
1. String ==> ""/''
2. Number ==> 1235   something like 2 to the power 53 --- 64-bit Floating Point 
3. Boolean ==> true/false
4. BigInt ==> number is big then you use this       -------- BigInt size is NOT fixed. It uses arbitrary precision, meaning: Memory grows based on the digits you store.More digits → more bytes used.
5. Null ==> represent empty value
6. Undefined ==> value not assign then it's undefined
7. Symbol ==> for the uniqueness and immutable

**non-primitive:
8. Object ==>  collection of key value pair

*/

const str = "parth"
const mobileNumber = 1234567890
const isLoggedIn = true
const address = null
let email;
const person = { firstName: 'parth', lastName: 'patel' }
const fullName = Symbol(person)
const acId = BigInt(22222222222222222458989898989898989898898)


//here inorder to check which type of your variable carry a data to use typeof.

console.table({
  str: typeof str,
  mobileNumber: typeof mobileNumber,
  isLoggedIn: typeof isLoggedIn,
  acId: typeof acId,
  address: typeof address, //please note that object
  email: typeof email,
  fullName: typeof fullName,
  person: typeof person,
});

console.log(`\n typeof str = ${typeof str}    typeof(typeof str) = ${typeof(typeof str)}`);
console.log(`\n typeof mobileNumber = ${typeof mobileNumber}    typeof(typeof mobileNumber) = ${typeof(typeof mobileNumber)}`);
console.log(`\n typeof isLoggedIn = ${typeof isLoggedIn}    typeof(typeof isLoggedIn) = ${typeof(typeof isLoggedIn)}`);
console.log(`\n typeof acId = ${typeof acId}    typeof(typeof acId) = ${typeof(typeof acId)}`);
console.log(`\n typeof address = ${typeof address}    typeof(typeof address) = ${typeof(typeof address)}`);
console.log(`\n typeof email = ${typeof email}    typeof(typeof email) = ${typeof(typeof email)}`);
console.log(`\n typeof fullName = ${typeof fullName}    typeof(typeof fullName) = ${typeof(typeof fullName)}`);
console.log(`\n typeof person = ${typeof person}    typeof(typeof person) = ${typeof(typeof person)}`);