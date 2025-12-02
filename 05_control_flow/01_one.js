
const balance = 50000
// const balance = "5000"

// console.time('if-else')
if(balance > 10000){
  console.log('\n balance is greater than 10000');
} else if ( balance > 6000) {
  console.log('\n balance is greater than 6000');
} else {
  console.log('\n balance is less than 5000');
}
// console.timeEnd('if-else')


// console.time('switch-compare')
switch (balance > 0) {
  case balance > 10000:
    console.log('\n balance is greater than 10000');
    break;

  case balance > 6000:
    console.log('\n balance is greater than 6000');
    break;

  case balance == 5000:
    console.log('\n balance is 5000');
    break;

  default:
    console.log('\n balance is less than 5000');
    break;
}
// console.timeEnd('switch-compare')








// console.time('switch')
switch (balance) {
  case 10000:
    console.log('\n balance is greater than 10000');
    break;

  case 6000:
    console.log('\n balance is greater than 6000');
    break;

  case 5000:
    console.log('\n balance is 5000');
    break;

  default:
    console.log('\n balance is less than 5000');
    break;
}
// console.timeEnd('switch')


/*
Switch/Match:       Best for exact matches on discrete values (e.g., enums, strings, integers). Cleaner for 3+ cases.
If-Else:            Ideal for complex logic (ranges, booleans, multiple vars). More flexible but can get nested/messy.
*/







// ------------------falsy-----truthy-------------value--------------------------------

/*
Truthy and falsy values: 
  Most programming languages have a concept of truthy and falsy values, which are values that are treated as true or false in a boolean context.


  falsy value:   false, 0, -0, Bigint 0n, "", null, undefined, NaN
 all other are truthy values

  truthy value: true, "0", " ", "false", [], {}, function(){}, ...

*/


/* comparision

    false == 0     => true
    false == ''    => true
    0 == ''        => true

*/


// Nullish Coalesing Operator (??) :

let val
// val = 5
// val = null ?? 10
// val = undefined ?? 15
// val = undefined ?? 25 ??35

// console.log(val);


/*
The nullish coalescing operator (??) returns the right-hand value only if the left-hand value is null or undefined.

Works ONLY on   null or undefined

If the left side is nullish, the right side is used.


Why developers prefer ??
    Prevents overwriting valid values like 0 or false
    Safer defaulting
    Cleaner code
*/


// Ternary operator:    condition ? if condition true : on condition fail





