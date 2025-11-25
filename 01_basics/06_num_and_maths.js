const score = 900
// console.log('\n score ==', score);

let balance = new Number(1000)
// console.log('\n balance ==', balance);

//--------------------------method---------------------------------

const firstNumber = 9.89
const secondNumber = 4.35

/* NOTE 
console.log('\n numbet to string ==', firstNumber.toString(1), secondNumber.toString(1));
above line when run nin node evn it will throw error  [RangeError: toString() radix argument must be between 2 and 36]

but it will run in broweser console.

console.log(firstNumber.toFixed(1)) ===> 9.9
console.log(firstNumber.toFixed(0)) ===> 10

console.log(secondNumber.toFixed(1)) ===> 4.3
console.log(secondNumber.toFixed(0)) ===> 4

*/

// console.log('\n numbet to string ==', balance.toString());
// console.log('\n number with fixed ==', balance.toFixed(), balance.toFixed(2), balance.toFixed(4)); //return string with fixed decimal points  very useful in financial applications


//important
let thirdNumber = 123.28954
let otherNumber = 45.78545
// console.log('\n otherNumber thirdNumber ==', otherNumber, thirdNumber)

// console.log('\n number with precision ==', otherNumber.toPrecision(), otherNumber.toPrecision(1), otherNumber.toPrecision(2), otherNumber.toPrecision(3), otherNumber.toPrecision(4)); //return string with exponential or fixed-point notation with a specified number of digits.
// console.log('\n thirdNumber ==', thirdNumber.toPrecision(), thirdNumber.toPrecision(1), thirdNumber.toPrecision(2), thirdNumber.toPrecision(3), thirdNumber.toPrecision(4));
/*
Simple way to understand toPrecision()
Rounds the entire number, not just decimals
Always keeps exactly N total digits
Chooses exponential form automatically if number is big/small
Returns a string
*/



const accountBalance = 1000000
// console.log('\n accountbalance =', accountBalance);
// console.log('\n accountbalance =', accountBalance.toLocaleString('en-US')); //default is 'en-US'
// console.log('\n accountbalance =', accountBalance.toLocaleString('en-IN')); //'en-IN' for Indian format






//---------------------------------------------Math---------------------
// console.log('\n Math =', Math);
const ary = [4,5,6,8]

// console.log('\n Math PI =', Math.PI);
// console.log('\n Math absolute =', Math.abs(-99)); // absolute value eg: -99 => 99, 99 => 99
// console.log('\n Math round =', Math.round(4.7), Math.round(4.5), Math.round(4.4));
// console.log('\n Math ceil =', Math.ceil(4.7), Math.ceil(4.5), Math.ceil(4.4));
// console.log('\n Math floor =', Math.floor(4.7), Math.floor(4.5), Math.floor(4.4));
// console.log('\n Math min value =', Math.min(4,5,6,8));
// console.log('\n Math max value =', Math.max(4,5,6,8));
// console.log('\n Math min =', Math.min(...ary));
// console.log('\n Math max =', Math.max(...ary));


//---------math with random----------

console.log('\n Math with random ==', Math.random());

/*
random() returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you can then scale to your desired range.

It always gives a floating-point number (decimal).
It is not truly random, it’s pseudo-random (good enough for normal use).
Browser and Node.js both use the same logic.


Why use Math.random()?
  To generate:
    random numbers
    OTPs
    random array index
    random colors
    lottery systems
    AI or game decisions


*/

//if you want value between 0 to 9
console.log('\n value between 0 to 9 ==', Math.random() * 10 );
console.log('\n value between 1 to 9 ==', Math.floor((Math.random() * 10)) +1 );


/*
In real world how useful is this ??
important
*/

const minValue = 10  //1000
const maxValue = 20  //9999

// const randomNumberIs = Math.floor(Math.random() * (maxValue - minValue)) + minValue //by parth
const randomNumberIs = Math.floor(Math.random() * (maxValue - minValue + 1 )) + minValue //by hitesh
console.log('\n randomNumberIs ==', randomNumberIs);


const randomFourDigit = Math.floor(Math.random()*10000) //here you think that you will always get 4 digit but that not correct.
console.log('\n randomFourDigit ==', randomFourDigit);