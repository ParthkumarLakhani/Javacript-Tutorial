
class User {
  constructor(username){
    this.username = username
  }
  
  logMe(){
    console.log(`USERNAME: ${this.username}`);
  }

}

class Teacher extends User {
  constructor(username, email, password){
    // this.username = username   // ??
    // .call(this , )

    super(username)     // behind the scene it take this and it set username and you get directly access
    
    this.email = email
    this.password = password
  }

  addCourse(){
    console.log(`teacher add new course by ${this.username}`);
  }

}  

const chai = new Teacher("chai", "chai@amazon.com", "1212")

// console.log(chai);
// console.log(chai.addCourse());
// console.log(chai.logMe());


const masalaChai = new User("masalaChai")

// console.log(masalaChai);
// console.log(masalaChai.addCourse());

// console.log(chai === masalaChai);
// console.log(chai instanceof masalaChai);
// console.log(chai instanceof Teacher);


