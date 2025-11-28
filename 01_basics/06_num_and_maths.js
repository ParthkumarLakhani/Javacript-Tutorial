const score = 900
// console.log('\n score ==', score);

let balance = new Number(1000)
// console.log('\n balance ==', balance);

//--------------------------method---------------------------------

const firstNumber = 9.89
const secondNumber = 4.35

// console.log('\n numbet to string ==', firstNumber.toString(), secondNumber.toString(2));
/* NOTE 
console.log('\n numbet to string ==', firstNumber.toString(), secondNumber.toString(1));
above line when run nin node evn it will throw error  [RangeError: toString() radix argument must be between 2 and 36]// which is nothing but the base binary(2)

but it will run in broweser console.

console.log(firstNumber.toFixed(1)) ===> 9.9
console.log(firstNumber.toFixed(0)) ===> 10

console.log(secondNumber.toFixed(1)) ===> 4.3
console.log(secondNumber.toFixed(0)) ===> 4
*/

/* what is difference console.log('\n numbet to string ==', firstNumber.toString(), (firstNumber).toString(), String(firstNumber), firstNumber.toString(4));
const firstNumber = 255;  // Try with: 255, 10, NaN, null, undefined (some won't work)


console.log('toString() method          :', firstNumber.toString());        // "255"
console.log('(number).toString()        :', (firstNumber).toString());     // "255" (same)
console.log('String(global function)    :', String(firstNumber));           // "255"
console.log('toString(radix)            :', firstNumber.toString(4));       // "3333" (base-4!)


| Method               | Converts Value?       | Safe for null/undefined? | Converts Base?       | Notes                           |
| -------------------- | --------------------- | ------------------------ | -------------------- | ------------------------------- |
| `num.toString()`     | Yes (number → string) | ❌ No                     | ❌ No (base optional) | Method on number object         |
| `(num).toString()`   | Same as above         | ❌ No                     | ❌ No                 | Parentheses avoid syntax errors |
| `String(num)`        | Yes (any → string)    | ✔ Yes                     | ❌ No                 | Safest, global function         |
| `num.toString(base)` | Yes                   | ❌ No                     | ✔ Yes                 | Converts number to given radix  |



String(value) is safer because it works for any value, including null and undefined.
value.toString() is dangerous if the value might be null/undefined.
toString(radix) is the only method that can convert numbers to different bases (binary, hex, etc.)
Using (num).toString() avoids the parser error of writing 100.toString().

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



const accountBalance = 100000
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

// console.log('\n Math with random ==', Math.random());

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
// console.log('\n value between 0 to 9 ==', Math.random() * 10 );
// console.log('\n value between 1 to 9 ==', Math.floor((Math.random() * 10)) +1 );


/*
In real world how useful is this ??
important
*/

const minValue = 10  //1000
const maxValue = 20  //9999

// const randomNumberIs = Math.floor(Math.random() * (maxValue - minValue)) + minValue //by parth
const randomNumberIs = Math.floor(Math.random() * (maxValue - minValue + 1 )) + minValue //by hitesh
console.log('\n randomNumberIs ==', randomNumberIs);

/* What is difference between this two lines ??

let minValue = 1;
let maxValue = 4;

version1[by parth]: buggy, bcz   maxValue - minValue = 3

  Math.random() * 3     → gives values from 0 to 2.999...
  Math.floor(...)       → gives 0, 1, or 2
  Then + minValue (1)   → final result: 1, 2, or 3

  Problem: 4 is never returned!   

version1[by hitesh]: correct  bcz  maxValue - minValue + 1 = 4

  Math.random() * 4     → 0 to 3.999...
  Math.floor(...)       → 0, 1, 2, or 3
  + minValue (1)        → 1, 2, 3, or 4

*/


const randomFourDigit = Math.floor(Math.random()*10000) //here you think that you will always get 4 digit but that not correct.
// console.log('\n randomFourDigit ==', randomFourDigit);

/*
function alphaNumericOTP(length) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let otp = "";
  for (let i = 0; i < length; i++) {
    otp += chars[Math.floor(Math.random() * chars.length)];
  }
  return otp;
}

console.log(alphaNumericOTP(6)); // Example: a7Ds2Q

*/