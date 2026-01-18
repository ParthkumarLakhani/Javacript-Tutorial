
// console.log("02" > 1);
// console.log("2" > 1);

// console.log("5" > "20");

// console.log(2 < "12");
// console.log("2" < "12");
// console.log("2" > "12");
// console.log("2" == "12");


// console.log("2ghg" == 12);
// console.log("2ghg" > 12);

/*
Comparison Operators (> < >= <=)
🔹 Rule:
    If both are numbers → numeric comparison
    If both are strings → lexicographical (dictionary order) -- ASCII
    If mixed types → convert to number (if possible)

When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison. An empty string converts to 0. A non-numeric string converts to NaN which is always false.


==  equality
🔹 Rule:
    tries to convert both values to the same type before comparing
    if Both sides are numbers - Simple numeric comparison
    if Both sides are strings - Character-by-character comparison
    if One side string, other number - String is converted to number

*/



// console.log(Boolean("hello")); 
// console.log(Boolean(0)); 
// console.log(Boolean([]));

// console.log(0 == "0"); 
// console.log(0 == false); 

// console.log("" == 0);
// console.log(" " == 0);
// console.log(" " + 0 == 0);


// console.log(false == 0);
// console.log(false == "");
// console.log([] == "");

// console.log(null == undefined);   //*
// console.log(null === undefined); 


// console.log(NaN == NaN); 
// console.log(isNaN(NaN));

// console.log(null == 0);  //*
// console.log(null > 0);
// console.log(null >= 0);

// console.log(null == false);  //*

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined >= 0);

// console.log(undefined == false);

// console.log( NaN == 0);

// console.log( NaN === NaN);

// console.log( [] == [] );
// console.log( {} == {} );
// console.log( [] == ![] );

// console.log( +[] == 0 );
// console.log( +[] === 0 );

// console.log( +{} == NaN);   //*
// console.log( +{} === NaN );

// console.log( "" - 1 == -1 );
// console.log( "" - 1 === -1 );

// console.log( " " - 1 == -1);
// console.log( " " - 1 === -1);

// console.log( "5" + + "5" == "55");
// console.log( "5" + + "5" === "55");

// console.log( true == "1");

// console.log( false == [] );
// console.log( false == {} );


/* Why does +[] === 0 ?
    Steps
        Unary + → forces ToNumber
        [] is an object → ToPrimitive
            [] → ""
        ToNumber:
            Number("") → 0
        
    Result: 0   
*/


/* Why does +{} === NaN ?
    Steps
        Unary + → forces ToNumber
        {} is an object → ToPrimitive
            {} → "[object Object]"
        ToNumber:
            Number("[object Object]") → NaN
        
    Result: NaN  
*/


/* Why does "" - 1 === -1?
    Steps
        - operator → always numeric
        ToNumber:
            "" → 0
        Calculation:
           0 - 1 = -1      
        
    Result: -1 
*/


/* Why does " " - 1 === -1?
    Steps
        " " (space) is a string
        ToNumber:
            Number(" ") → 0
        Calculation:
           0 - 1 = -1  
        
    Result: -1
    Whitespace is ignored in numeric conversion  
*/


/* Why does "5" + + "5" === "55"?
    Steps
        Unary + "5"
            +"5" → 5
        Now expression becomes:
            "5" + 5
        + with string → string concatenation
            "5" + "5"
        
    Result: "55"  
*/


/* Why does true == "1" return true?
    Steps (loose equality ==)
        Boolean → ToNumber: true → 1
        String → ToNumber:  "1" → 1
        Compare:    1 == 1
        
    Result: true 
*/


/* Why does false == "" return true?
    Steps (loose equality ==)
        Boolean → ToNumber: false → 0
        String → ToNumber:  "" → 0
        Compare:    0 == 0
        
    Result: true
*/


/* Why does false == [] return true?
    Steps
        [] is object → ToPrimitive: [] → ""
        Now:
            false == ""
        Boolean → ToNumber: false → 0
        String → ToNumber:  "" → 0
        Compare:    0 == 0
        
    Result: true
*/


/* Why does false == {} return false?
    Steps
        {} is object → ToPrimitive: {} → "[object Object]"
        Now:
            false == "[object Object]"
        Boolean → ToNumber: false → 0
        String → ToNumber:  Number("[object Object]") → NaN
        Compare:    0 == NaN → false
        
    Result: false
*/


/*
    OBJECT → ToPrimitive
    NUMBER needed → ToNumber
    STRING present with + → concatenation
    == → coercion
    === → no coercion
*/


/*Type coercion
What is type coercion?
Difference between implicit and explicit type conversion?

JavaScript is a loosely typed or dynamic language, which means it automatically converts types when necessary, making it easier for developers to work with different data types in expressions, comparisons, and operations. However, this flexibility can sometimes lead to unexpected results if you're not careful.

Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). Type conversion is similar to type coercion because they both convert values from one data type to another with one key difference — type coercion is implicit whereas type conversion can be either implicit or explicit.

*/




/*
Why null == undefined is true?
Because == (loose equality) performs type coercion using special rules.

The important rule:  When comparing with ==, null and undefined are only equal to each other, and to nothing else.

    null and undefined both mean "no value"
So JS treats them as equal only in loose comparison.


Why null === undefined is false?
    Because === (strict equality) checks two things:  Type and Value


Difference between Object.is() and === ?
Handles NaN and -0 correctly.

*/


/* what is Object.is() ??

JavaScript Object.is() method is used to compare if two values are the same value.
Object.is() returns true if the values are the same, and false otherwise. It differs from the strict equality operator === in the handling of NaN and positive/negative zero.

Syntax: Object.is(value1, value2)


*/



// console.log(Object.is(5, 5));
// console.log(Object.is(5, '5'));

// console.log(Object.is(0, 0));
// console.log(Object.is(+0, -0));
// console.log(Object.is(+0, 0));
// console.log(Object.is(-0, 0));
// console.log(Object.is(0n, -0n));  //*

// console.log( [1,2] == '1,2');
// console.log( [1,2] === '1,2');
// console.log(Object.is( [1,2], '1,2' ));

// console.log(Object.is(NaN, NaN));


/*
SameValueZero: The Hidden Equality Algorithm in JavaScript

What is SameValueZero?
SameValueZero is a comparison algorithm used internally by JavaScript for certain operations. It's NOT directly accessible as an operator (like == or ===), but is used in built-in operations.

Key Characteristics:
  Same as === except it treats NaN === NaN as true
  Same as === except it treats -0 === +0 as true (which === already does)
  No type coercion (unlike ==)
  Same as Object.is() except it treats -0 === +0 as true


Where is SameValueZero Used?
1. Array.prototype.includes()
  const arr = [1, 2, NaN, 4];

  arr.includes(NaN); 
  arr.indexOf(NaN); 

  // More examples:
  arr.includes(2);  
  arr.includes('2');  
  arr.includes(+0);   


2. Set and Map (for keys)
  const set = new Set();
  set.add(NaN);
  set.add(NaN);

  console.log(set.has(NaN));
  console.log(set.size);   

  const map = new Map();
  map.set(NaN, 'value');
  console.log(map.get(NaN));

3. TypedArray.prototype.includes()
  const typedArray = new Int8Array([1, 2, 3]);
  typedArray.includes(2);


4. String.prototype.includes() (for string search)
  'hello'.includes('ell'); // ✅ true

*/


/* How do you compare two objects?

A. Reference Equality (===, ==)

  const obj1 = { name: 'John', age: 30 };
  const obj2 = { name: 'John', age: 30 };
  const obj3 = obj1;

  console.log(obj1 === obj2); 
  console.log(obj1 === obj3); 
  console.log(obj1 == obj2); 


B. Shallow Comparison

function shallowEqual(obj1, obj2) {
    if (obj1 === obj2) return true;
    
    if (typeof obj1 !== 'object' || obj1 === null || 
        typeof obj2 !== 'object' || obj2 === null) {
        return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) return false;
    
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) return false;
    }
    
    return true;
}

// Example:
const user1 = { name: 'John', address: { city: 'NYC' } };
const user2 = { name: 'John', address: { city: 'NYC' } };

shallowEqual(user1, user2);



C. Deep Comparison

  function deepEqual(obj1, obj2) {
      if (obj1 === obj2) return true;
      
      if (typeof obj1 !== 'object' || obj1 === null ||
          typeof obj2 !== 'object' || obj2 === null) {
          return false;
      }

      const keys1 = Object.keys(obj1);
      const keys2 = Object.keys(obj2);
      
      if (keys1.length !== keys2.length) return false;
      
      for (let key of keys1) {
          if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
              return false;
          }
      }
      
      return true;
  }

  // Example:
  const objA = { 
      name: 'John', 
      address: { 
          city: 'NYC',
          zip: 10001 
      },
      hobbies: ['reading', 'coding']
  };

  const objB = { 
      name: 'John', 
      address: { 
          city: 'NYC',
          zip: 10001 
      },
      hobbies: ['reading', 'coding']
  };

  deepEqual(objA, objB); 



D. Using JSON.stringify() (Quick & Dirty)

  function jsonEqual(obj1, obj2) {
      return JSON.stringify(obj1) === JSON.stringify(obj2);
  }

  // Limitations:
  const obj1 = { a: 1, b: 2 };
  const obj2 = { b: 2, a: 1 }; // Different order

  jsonEqual(obj1, obj2);


  // Also fails with:
  // - undefined values (removed in JSON)
  // - Functions (removed in JSON)
  // - Date objects (become strings)
  // - Circular references (error!)



E. Using Lodash's isEqual()

// Install: npm install lodash
import _ from 'lodash';

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };

_.isEqual(obj1, obj2);

// Also handles:
// - Arrays
// - Dates
// - RegExp
// - Maps, Sets
// - Circular references

*/


/* How do you compare two arrays?

A. Reference Equality
  const arr1 = [1, 2, 3];
  const arr2 = [1, 2, 3];
  const arr3 = arr1;

  console.log(arr1 === arr2);
  console.log(arr1 === arr3);



B. Shallow Array Comparison

function arraysShallowEqual(arr1, arr2) {
    if (arr1 === arr2) return true;
    
    if (arr1.length !== arr2.length) return false;
    
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    
    return true;
}

// Example:
const arrA = [1, 2, { name: 'John' }];
const arrB = [1, 2, { name: 'John' }];

arraysShallowEqual(arrA, arrB);




C. Deep Array Comparison

function arraysDeepEqual(arr1, arr2) {
    if (arr1 === arr2) return true;
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;
    if (arr1.length !== arr2.length) return false;
    
    for (let i = 0; i < arr1.length; i++) {
        // Handle nested arrays/objects recursively
        if (typeof arr1[i] === 'object' && typeof arr2[i] === 'object') {
            if (!deepEqual(arr1[i], arr2[i])) return false;
        } else if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    
    return true;
}



D. Using JSON.stringify() for Arrays

function arraysEqualJSON(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}

// Works for simple arrays:
arraysEqualJSON([1, 2, 3], [1, 2, 3]);

// Problems:
arraysEqualJSON([undefined], [null]); // ❌ false (undefined → omitted, null → "null")
arraysEqualJSON([1, 2], [2, 1]);     // ❌ false (order matters)



E. Array Methods Comparison

// Method 1: every() with index
function arraysEqual(arr1, arr2) {
    return arr1.length === arr2.length && 
           arr1.every((val, idx) => val === arr2[idx]);
}

// Method 2: toString() (only for primitive values)
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
arr1.toString() === arr2.toString(); // ✅ true

// Method 3: Using Set (order-independent, unique values)
function arraysEqualUnordered(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    const set1 = new Set(arr1);
    return arr2.every(item => set1.has(item));
}

*/



/* 3. Special Cases & Edge Cases

A. Comparing with Different Property Orders

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 2, c: 3, a: 1 };

// JSON.stringify fails:
JSON.stringify(obj1) === JSON.stringify(obj2); // ❌ false

// Deep equal handles it:
function deepEqualOrderInsensitive(obj1, obj2) {
    if (obj1 === obj2) return true;
    
    if (typeof obj1 !== 'object' || obj1 === null ||
        typeof obj2 !== 'object' || obj2 === null) {
        return false;
    }
    
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) return false;
    
    for (let key of keys1) {
        if (!obj2.hasOwnProperty(key) || 
            !deepEqualOrderInsensitive(obj1[key], obj2[key])) {
            return false;
        }
    }
    
    return true;
}



B. Circular References

const objA = { name: 'John' };
const objB = { name: 'John' };
objA.self = objA; // Circular reference
objB.self = objB;

// JSON.stringify will throw error
// deepEqual needs to handle visited references

function deepEqualWithCircular(obj1, obj2, visited = new WeakMap()) {
    if (obj1 === obj2) return true;
    
    // Check for circular reference
    if (visited.has(obj1) && visited.get(obj1) === obj2) {
        return true;
    }
    visited.set(obj1, obj2);
    
    // Rest of deepEqual logic...
}



C. Comparing Different Types

// What happens with different types?
const compare = {
    'Array vs Object': [] === {}, // ❌ false
    'null vs undefined': null == undefined, // ✅ true (==)
    'null vs undefined': null === undefined, // ❌ false (===)
    '0 vs false': 0 == false, // ✅ true (==)
    '0 vs false': 0 === false, // ❌ false (===)
    'NaN comparisons': NaN === NaN, // ❌ false
};


*/


/* 4. Practical Comparison Functions
Universal Deep Comparison Function

function deepCompare(a, b) {
    // Handle primitives and same references
    if (a === b) return true;
    
    // Handle NaN
    if (Number.isNaN(a) && Number.isNaN(b)) return true;
    
    // Check types
    if (typeof a !== typeof b) return false;
    
    // Handle null/undefined
    if (a == null || b == null) return a === b;
    
    // Handle arrays
    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) return false;
        return a.every((item, idx) => deepCompare(item, b[idx]));
    }
    
    // Handle objects
    if (typeof a === 'object' && typeof b === 'object') {
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);
        
        if (keysA.length !== keysB.length) return false;
        
        return keysA.every(key => 
            keysB.includes(key) && deepCompare(a[key], b[key])
        );
    }
    
    // Handle other cases (dates, regexp, etc.)
    if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime();
    }
    
    if (a instanceof RegExp && b instanceof RegExp) {
        return a.toString() === b.toString();
    }
    
    // Default case
    return false;
}




One-liner for Simple Cases

// For primitives and shallow comparison:
const shallowEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

// For arrays with primitive values:
const arraysEqual = (a, b) => 
    a.length === b.length && a.every((x, i) => x === b[i]);


*/


/*5. Performance Considerations

// Fastest to slowest generally:
1. Reference equality (===)     // Fastest
2. Length check                 // Fast
3. Shallow comparison           // Medium
4. JSON.stringify()             // Slow (serialization)
5. Deep recursion               // Slowest (for large objects)

// Benchmark example:
const largeObj = // ... 1000 properties ... ;

console.time('JSON.stringify');
JSON.stringify(largeObj) === JSON.stringify(otherObj);
console.timeEnd('JSON.stringify');

console.time('Manual comparison');
// Manual comparison code
console.timeEnd('Manual comparison');

*/



/* 6. Real-World Recommendations

When to use what:

For simple equality check: ===
For shallow object comparison: Write custom function or use Object.keys()
For deep comparison: Use lodash.isEqual() or write recursive function
For arrays with primitives: arr1.length === arr2.length && arr1.every((v,i) => v === arr2[i])
For quick debugging: JSON.stringify() (watch for limitations)


Production-ready approach:

import _ from 'lodash';

// Most reliable:
_.isEqual(obj1, obj2);
_.isEqual(arr1, arr2);

// Or if you can't use lodash:
function isDeepEqual(a, b) {
    // Use the deepCompare function above
    // or implement based on your specific needs
}


Key takeaway: Always consider if you need shallow or deep comparison, and watch out for edge cases like NaN, undefined, Date objects, and circular references!


*/



