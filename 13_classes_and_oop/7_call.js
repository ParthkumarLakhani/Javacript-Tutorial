// call, bind and apply please know the history


// function getUserName(user){
//   return user.username + user.lastname
// }

// function setUserName(user) {
//   return getUserName(user)
// }

// const user = setUserName({username: "parth", lastname: "patel"})
// console.log(user);



//but in constructor function 


function SetUserName(username) {
  //complex db call
  this.username = username
  console.log("set user name here");
}

function createUser(username, email, password){

  // SetUserName(username)    // call to thay che pan, execute thay ne remove thay jay che. we have to hold that reference. how can we hold ?? let's take hold
  // SetUserName.call(username)  //why this will not work. beacuse they take reference from own this this is why it not work.  so how can we handle now, we call with our reference/this keyword

  SetUserName.call(this, username)

  this.email = email
  this.password = password
}

const user1 = new createUser("chai","chai@google.com","12345")
console.log(user1);




