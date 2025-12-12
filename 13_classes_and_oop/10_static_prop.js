
class User {
  constructor(usename){
    this.usename = usename
  }

  logMe(){
    console.log(`Username: ${this.usename}`);
  }

  static creatId(){
    return `445454`
  }
  //so many time so many situation occur that time isss method ka access har uss object ko nahi dena chahte jo iss class se instantiate hua he. static will stop to access

}

const parth = new User("parth")
// console.log(parth);
// console.log(parth.creatId());


class Teacher extends User {
  constructor(usename, email){
    super(usename)
    this.email= email
  }
}

const tea = new Teacher("tae", "tae@google.com")

// console.log(tea);
// console.log(tea.creatId());

