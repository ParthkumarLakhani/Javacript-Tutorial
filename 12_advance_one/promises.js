/* A Promise is an object representing the eventual completion or failure of an asynchronous operation.

A Promise is in one of these states:
  pending: initial state, neither fulfilled nor rejected.
  fulfilled: meaning that the operation was completed successfully.
  rejected: meaning that the operation failed.


History of promises ?? before promises what they used for async ??
 what is Q and bluBird


There is two type [not actual] of promises. one who is consumed and other is who creation.

promise will also reduce the callback hell.  how ??


*/


// A Promise is an object...

//1
const promiseOne = new Promise( function(resolve, reject) {
  // do an async work
  // DB calls, cryptography, network

  setTimeout( function() {
    console.log("async task 1");
    resolve()
  },1000)

})

promiseOne.then(function () {
  console.log("promiseOne task completed");
})



//2
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2");
    resolve()
  },1000)
}).then(function () {
  console.log("promise two completed");
})


/* 
in promise, resolve direclty connect with the then and reject connect with catch. and here then and catch both will take a callback.

A Promise in JavaScript represents an asynchronous operation. The function inside the Promise constructor executes immediately and is used to start the async task, such as a database call, network request, or timer. When this task completes successfully, the resolve() function is called, which marks the Promise as fulfilled and automatically triggers the callback provided in .then(). If the task fails, the reject() function is used instead, which triggers the callback provided in .catch(). Both .then() and .catch() accept callback functions and will run only after the Promise is settled. In your code, the setTimeout simulates an async task, and once it finishes, resolve() is executed, causing the .then() callback to run and print “promiseOne task completed.

*/


//3
const promiseThree = new Promise(function (resolve,reject) {
  setTimeout(function () {
    console.log("async task 3");
    resolve({userName: "parth", age: 25})
  },1000)
})

promiseThree.then(function (data) {
  console.log(data);
  console.log("promiseThree  completed");
})



//4
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true
    if(!error){
      resolve({userName: "Monjo Parth", address: "Amd"})
    }else{
      reject("ERROR: Something went Wrong")
    }
  },1000)
})

// const data = promiseFour.then(function (data) {
//   return data.userName
// })
// console.log("\n 4 data", data);

promiseFour
.then(function (data) {
  return data.userName
})
.then(function (data) {
  console.log('\n promise 4 data', data);
})
.catch(function (error) {
  console.log(error);
})
.finally( () => console.log(`The promise is either resolved or rejectt`))

/*
Yes, this code reduces callback hell because Promises allow sequential .then() chaining instead of nested callbacks. This makes the structure flat, readable, and easier to manage, while .catch() handles all errors in one place.
*/




//5
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true
    // let error = false
    if(!error){
      resolve({userName: "javascript", address: "mumbai"})
    }else{
      reject("ERROR: javascript went Wrong")
    }
  },1000)
})


// async function consumePromiseFive() {
//   const data = await promiseFive
//   console.log("data of 5", data);
// }

async function consumePromiseFive() {
  try {
    const data = await promiseFive
    console.log("data of 5", data);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive()

// how handle promise ??  async/await , then catch
