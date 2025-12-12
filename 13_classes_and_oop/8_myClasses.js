// ES6


// class User {
  
//   constructor(username, email, password){
//     this.username = username
//     this.email = email
//     this.password = password
//   }

//   encryptPassword(){
//     console.log(`${this.password}hkhk`);
//   }

//   changeUserName(){
//     console.log(`${this.username.toUpperCase()}`);
//   }

// }

// const chai = new User("chai","chai@fb.com","1214")

// console.log(chai);
// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());




//behind the scene

function User(username, email, password) {
  this.username = username
  this.email = email
  this.password = password
}

User.prototype.encryptPassword = function(){
  console.log(`${this.password}hkhk`);
}
User.prototype.changeUserName = function(){
  console.log(`${this.username.toUpperCase()}`);
}

const tea = new User("tea","tea@fb.com","1214")

console.log(tea);
console.log(tea.encryptPassword());
console.log(tea.changeUserName());





