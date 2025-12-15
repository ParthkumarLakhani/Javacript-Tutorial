const User = {
  _email: "chai@chaimail.com",
  _password: "445472",

  get email(){
    return this._email.toUpperCase()
  },
  set email(value){
    this._email = value
  }
}

//rare syntax


/*
here _ shows that private property
*/
//we belive that _ is private but if any other object try to access _ they can access no buddy stop him. but we override using getter and setter so no one can access. but no one can stop 

//gettter and setter are special method he jo mein property ke upper rakh raha hu

/*
some time you seen that array.length (property), how the array know how much sized i have ??
obviously calculation thay j che. pan tya behind the scene getter and setter use thay che.
when you call .length BTS getter is called and they loop array and return size like this.. 
*/


/* what is constructor function and factory function ??

*/



