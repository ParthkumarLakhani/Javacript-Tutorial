//here i want actual length of string

let myName = "Parth    "  
let chai = "    chai"

// console.log(myName.trim().length);
// console.log(chai.trim().length);
//not like this


let myHero = [ "thor", "spiderman", "ironman" ]
let myHeros = [ "thor", "spiderman", "ironman" ]


const heroPower = {
  spiderman: 'spidy',
  thor: 'sling',

  getSpiderPower: function(){
    console.log(`Spiderman power is ${this.spiderman}`);
  }

}

// console.log((heroPower.getSpiderPower()))

// can i add another method ??

// heroPower.prototype.getNewHero = function(){
//   console.log(` Here are all heros ${this.thor, this.spiderman}`);
// } // problem

heroPower.getNewHero = function(){
  console.log(` Here are all heros ${this.thor} ${this.spiderman}`);
} 

// console.log((heroPower.getNewHero()))

//Q can other object use this method getNewHero() ??

const heroPower2 = {
  spiderman: 'spy',
  thor: 'hammer',
}

// console.log(heroPower2.getNewHero()); 

//not possible, what i want is when any object is declared based on you properies add.  



Object.prototype.parth = function(){
  console.log(`Now parth is present in every object.!!`);
}
// console.log(heroPower.parth());
// console.log(heroPower2.parth());


// can this present in array, string too ??

// console.log(myName.parth());
// console.log(myHero.parth());




// what if i give to array can object or string  see this ??


// myHero.prototype.heyParth = function(){
//   console.log(`Hey parth fun added to array`);
// }

// myHero.heyParth = function(){
//   console.log(`Hey parth fun added to array`);
// }
Array.prototype.heyParth = function(){
  console.log(`Hey parth fun added to array`);
}

// console.log(`fun `, myHero.heyParth());
// console.log(`fun `, myHeros.heyParth());
// console.log(heroPower.heyParth()); //not possible





// inheritance

const user = {
  name: "chai",
  email: "chai@google.com" 
}

const Teacher = {
  makeVideo: true
}

const TeachingSupport = {
  isAvailable: true
}

const TASupport = {
  makeAssingment: 'js assignment',
  fullTime: true,
  __proto__: TeachingSupport
}
// as we know every object is different instance.

Teacher.__proto__ = user


//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)


// this is nothing but the prototypal in heritance.  in classes some keyword are different but behind the scene prototype hi chal raha he. 






let strOne = " Hello with parth     "

String.prototype.trueLength = function(){
  console.log(`${this}`);
  console.log(`The true length is ${this.trim().length}`);
}

strOne.trueLength()
"hello ji  ".trueLength()
"  sss".trueLength()



