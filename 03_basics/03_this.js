const user = {
  id: 12124,
  name: 'parth',
  address: 'amd',
  welcomeMessage: function(){
    // console.log(`${name}, welcome to js-tutorial`);
    // console.log('this ==',this);
    console.log(`${this.name}, welcome to js-tutorial`);
  },
  // officeAddress : this
  // officeAddress : this.address
}

// user.welcomeMessage()
user.name = 'kumar'
// user.welcomeMessage()

// console.log(user);
// console.log('\ in officeAddress this ==', user.officeAddress);



// console.log('\n this ==', this);    //please also check in console(browser)


function addOne(num1){
  // console.log('\n function inside this keyword ==', this);
  let name = 'parth'
  // console.log('\n can i use this like this ==', this.name);
  return num1 + 1
}
addOne(5)




/* IMPORTANT -- This keyword  -- node enviroment
This keyword is refer to current context.

if you use This keyword inside the object inside the method then it will refer to current object.

if you write This keyword inside the object as key/value like (officeAddress : this) it will return empty object {}

if you write This keyword standalone, it will return empty object {}

if you use This keyword inside the function then it will refer to global object.

see addOne, it read undefined. 

can i used this keyword in arrow function ?? please check. 

*/

