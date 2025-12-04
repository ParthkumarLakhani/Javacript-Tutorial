const aryOfNum = [ 1,2,3,4,5,6,7,8,9 ]

// const newNum = aryOfNum.filter( (num) => {
//   return num > 4
// })

// const newNum = aryOfNum.filter( (num) => num > 4 )

// const newNum = aryOfNum.filter( (num) => num + 4 )

// console.log('\n newNum ==', newNum);


// const newNumWithForEach = []
// aryOfNum.forEach( (num) => {
//   if(num > 4){
//     return newNumWithForEach.push(num)
//   }
// })
// console.log('\n newNumWithForEach =', newNumWithForEach);

// console.log('\n aryOfNum ==', aryOfNum);



const users = [
  { id: 1, name: "Parth", age: 25, city: "Ahmedabad", salary: 3500000 },
  { id: 2, name: "Kumar", age: 30, city: "Surat", salary: 4200000 },
  { id: 3, name: "Rahul", age: 22, city: "Vadodara", salary: 2800000 },
  { id: 4, name: "Aman", age: 28, city: "Rajkot", salary: 5000000 },
  { id: 5, name: "Priya", age: 26, city: "Ahmedabad", salary: 3800000 },
];

// const newUser = users.filter( (user) => user.salary >= 3500000 && user.city === 'Ahmedabad' )
// const newUser = users.filter( (user) => {
//   return user.salary >= 3500000 && user.city === 'Ahmedabad'
// } )

// console.log('\n new user =', newUser);


// console.log('\n users ==', users);

















// const newNum = aryOfNum.map( (num) => num + 10)
// const newNum = aryOfNum.map( (num) => { num + 10})
// const newNum = aryOfNum.map( (num) => { return num + 10 })

// const newNum = aryOfNum.map( (num) => { return num > 4 })

// console.log('\n newNum ==', newNum, newNum.length);



// console.log('\n aryOfNum ==', aryOfNum);



// const chaining = aryOfNum
//                           .map( (num) => num * 10 )
//                           .map( (num) => num + 10 )
//                           .filter( (num) => num > 50 )

// console.log('\n chaining ==', chaining);









let acc = 0

// const grandTotal = aryOfNum.reduce( function (acc, currVal) {
//   return acc + currVal
// }, acc)

// const grandTotal = aryOfNum.reduce( (acc, currVal) =>  {
//   return acc + currVal
// }, acc)

// const grandTotal = aryOfNum.reduce( (acc, currVal) =>  acc + currVal , acc)


// console.log('\n reduce ==', grandTotal);






/*
in Filter if you not return it shows empty array (length = 0) if you hold the value
in map if you not return it shows whole item undefined array (length is equal to array) if you hold the value

in map if you written the condition  num > 4 then it will check evenry element it is true or false and return ary of bolean (true/false)

map, reduce, and filter both will return new array they can't modifie source array



forEach: 
- Only loops.
- Returns undefined.
- Best for side effects (logging, updating UI).
----------------------------------------------

map:
- Transforms each element (1-to-1).
- Returns a new array (same length).
- Best for modifying values.
----------------------------------------------

filter:
- Keeps elements that pass a condition.
- Returns a new array (smaller or equal length).
- Best for searching or removing items.
----------------------------------------------

reduce:
- Reduces array to a single value.
- Can return number, string, array, object.
- Best for sums, averages, grouping, counting, complex operations.


*/

