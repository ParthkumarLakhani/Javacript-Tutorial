class User {
  constructor(email, password) {
    this.email = email
    this.password = password
  }


  // get password(){
  //   return this.password.toUpperCase()
  // }

  // set password(value){
  //   this.password = value 
  // }

  get email(){
    return this._email.toUpperCase()
  }

  set email(value){
    this._email = value
  }

  get password() {
    return this._password.toUpperCase()
  }

  set password(value) {
    this._password = value
  }

}

const parth = new User( "parth@gmail.com", "123" )
console.log(parth.password);


/*

let's say if you don't want to access password to other then how can you manage this ??
using getters ansd setter. for getter use get and setter for set

actually whaterever properties you have , there is automatically method created.

Meaning: RangeError: Maximum call stack size exceeded [Stack overflow]
          The function kept calling itself again and again until the call stack overflowed.
          In simple words: infinite loop of function calls.
The “Maximum call stack size exceeded” error occurs here due to infinite recursion caused by accessing the same property inside its own getter and setter.


is this both different variable ??
Use a different internal variable, usually prefixed with _


🔍 What type of properties are these?
1️⃣ password
  Accessor property
  Has get and set
  Does NOT store data itself

2️⃣ _password
  Normal data property
  Actually stores the value
  They are two different properties on the same object.



🧠 Step-by-Step Execution (VERY IMPORTANT)
When this line runs:
const user = new User("a@gmail.com", "123");

1️⃣ Constructor executes
  this.password = password;

  JavaScript sees:
  “password has a SETTER”

  So it calls:
  set password("123")


2️⃣ Setter runs
  this._password = value;

  _password does NOT have a getter/setter
  So JS creates a normal property
  Value "123" is stored safely


3️⃣ Getter usage
console.log(user.password);

JavaScript calls:
get password()

Which returns:
this._password.toUpperCase();

Output:
"123"  


📦 Object Structure (Internal View)
User {
  email: "a@gmail.com",
  _password: "123",
  password: [Getter/Setter]
}


❗ Why this DOES NOT cause infinite loop?
Because:
  this._password !== this.password

  _password → plain storage
  password → accessor
  No recursion occurs.



🚫 What would cause an error?
set password(value) {
  this.password = value; // ❌ infinite recursion
}

In this code, password is an accessor that controls access, while _password is the actual storage variable where the value is safely saved.





*/


// property based.  in old program , still it's modern syntax.

function Person(email, password) {
  this._email = email
  this._password = password

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase()
    },
    set: function (value) {
      this._email = value
    }
  })
  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase()
    },
    set: function (value) {
      this._password = value
    }
  })

}

const p1 = new Person("chai@capgemini.com","1212")
console.log(p1.password);



