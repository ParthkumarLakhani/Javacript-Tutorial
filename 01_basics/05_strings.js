const string1 = "Hello Parth!!"
console.log('\n string1 ==', string1, typeof string1);

const stringNew1 = new String("kem che bhai ??")
console.log('\n stringNew1 ==', stringNew1, typeof stringNew1);

/*
Code                           Value Type, typeof Result,    Real Type Under the Hood,    Can you add properties?
"Hello Parth!!",               Primitive,    "string",        Primitive string,              No
new String(""kem che...""),    Object,       "object",        String object (wrapper),       Yes


Case 1: const str1 = "Hello Parth!!"

This is a primitive string
Fast, lightweight, immutable
typeof str1 → "string" (correct!)

Case 2: const strNew1 = new String("kem che bhai ??")

This creates a String object (wrapper object)
It's an actual object that wraps the primitive string
typeof strNew1 → "object" (not "string"!)
Slower and rarely needed


NOTE: here why Case1(primitive string) is Fast, lightweight, immutable and Case2(String object (wrapper object)) is Slower and rarely needed ??

CASE 1:

✔ Why it’s fast:
The JS engine stores the value directly (no object wrapper).
Accessing it is a constant-time operation.
No extra memory allocation is required.
No prototype chain to check (until needed).

✔ Why it’s lightweight:
It only stores the actual characters.
No extra properties.
No methods attached directly to the value.
Very “thin” memory footprint.

✔ Why it’s immutable:
JavaScript stores strings in memory in a readonly form.
Changing a string means JS creates a new string, not modifying the old one.

Primitive strings are heavily optimized by JavaScript engines (V8, SpiderMonkey, etc.).


****So why can you call methods on primitive strings ?? 
"hello".toUpperCase(); 
Even though "hello" is primitive, JS temporarily wraps it in a String object so you can call methods.

This is called autoboxing:
"hello".toUpperCase()

// JS temporarily does:
new String("hello").toUpperCase()
// returns "HELLO"
// and then discards the object

This automatic wrapper is fast because it is temporary and optimized.




CASE 2: 

❌ Why new String() is slower & heavy ??
It's a real object

It allocates:
Object memory space
Internal properties
Prototype chain
Reference pointer
Hidden class (under the hood)
Methods and attributes

This requires more memory, and interacting with objects takes more processing.


It's persistent
An object stays in memory until garbage-collected.
A primitive wrapper (autobox) is created + destroyed instantly and efficiently.


also check for array ??

*/



// console.time("primitive");
// for (let i = 0; i < 1000000; i++) {
//     let s = "hello parth";
//     s += "!!";
// }
// console.timeEnd("primitive");
// // → primitive: ~25ms  (super fast)

// console.time("object");
// for (let i = 0; i < 1000000; i++) {
//     let s = new String("hello parth");
//     s += "!!";
// }
// console.timeEnd("object");
// // → object: ~400ms+  (10–20x slower!)








//-----------------------------------------------------method------------------------------------------------------
//String

const str = '     Hello parth     '
const str1 = 'hey parth'
const str2 = 'Buddy parth'
// console.log('\n str ============== ', str);
// console.log('\n str length============== ', str.length);
// console.log('\n str1 ============== ', str1, str1.length);
// console.log('\n str2 ============== ', str2, str2.length);

const strNew1 = 'Hello'
const strNew2 = 'Hello'

const strNew11 = new String('Hello')
const strNew22 = new String('Hello')
// console.log('\n compare ====', strNew1 == strNew2,  strNew1 === strNew2,   strNew11 == strNew22,   strNew11 === strNew22,   strNew1 == strNew11 );

//4 methods for extracting string characters:
// console.log('\n at ============== ', str.at(4),str.at(-5),str.at(-15), typeof str.at(-15)); //-+ ve both index allow    //if no value found then it will return 'undefined'
// console.log('\n charAt ============== ', str.charAt(12)); //-ve index not allow    //if no value found or -ve index then it will return empty
// console.log('\n charCodeAt =========== ', str.charCodeAt(6)); // give UTF-16 code //if -ve index then it will return NaN
// console.log('\n Access using [ ] ============= ', str[0], str[15], str[14]); //-ve index not allow //if no value found then it will return empty

//extracted part string.

// console.log('\n slice=========', str.slice(2), str.slice(7,9), str.slice(-2), str.slice(-8));
// //substring() is similar to slice()
// console.log('\n substring=========', str.substring(2), str.substring(2,4), str.substring(-2) ); //start & end value is less than 0 are treated as 0

// //substr() is similar to slice().  
// //substr() method is removed (deprecated) in the latest JavaScript standard.  
// //***USE substring() or slice() instead.
// console.log('\n substr=========', str.substr(2), str.substr(2,4), str.substr(-2)); //second parameter specifie the length[not actual length but the index] of the staring you want to extract. 

// console.log('\n concat================', str.concat(str1),str.concat(' ',str1), str.concat(' ',str1,' ',str2));

/*Can i merge multiple string using spread ??

yes, 

const a = "Parth";
const b = "Kumar";
const c = "Patel";

const ans = [...a, " ", ...b, " ", ...c].join("");
console.log(ans);  // Parth Kumar Patel

const vv = a.concat(' ',b,' ',c)
console.log(vv);  // Parth Kumar Patel


//IMPORTANT -- String only
But we use concat for string [ Which one is faster? Spread (...) or concat() for strings ? ]

concat() is faster.
✅ Why concat() is faster?
✔ Because strings are immutable in JavaScript.

Whenever you use spread:
[...a, ...b, ...c]
  It breaks each string into characters → creates arrays → then join("") again creates a new string.

  ➡ More steps
  ➡ More memory
  ➡ More CPU work

🧠 What spread does behind the scenes:
    Convert each string into individual characters.
    Create an array for all characters.
    Allocate memory for the array.
    Copy characters one-by-one.
    Finally join array elements back into a string.
    
  👉 Very expensive for large strings.


🏎️ What concat() does:
  a.concat(" ", b, " ", c);

  It simply creates one new string, directly combining the inputs.
    ➡ No array
    ➡ No iteration
    ➡ No character copying until final combine
    ➡ Much fewer operations



| Method            | Speed    | Memory Use | Internal Process     |
| ----------------- | -------- | ---------- | -------------------- |
| **concat()**      | **Fast** | Low        | Simple string merge  |
| **Spread + join** | **Slow** | High       | Split → array → join |

*/


// console.log('\n trim, trimStart, trimEnd====', str.trim(), str.trimStart(), str.trimEnd());

//**ECMAScript 2017 added two new string methods to JavaScript: padStart() and padEnd()
// console.log('\n padstart=========', str1.padStart(11,"0"), str1.padEnd(11,"0"));

// console.log('\n repeat=========', str1.repeat(2), str1.repeat(4));


const strReplace = 'Hello Hola km 6 hola parth hola, HolA'

// console.log('\n Replace==========', strReplace.replace('hola','Namste!')); //by default case-sensitive and replace only first occurence
// console.log('\n replace==========', strReplace.replace(/hola/gi,'Namste!')); //here i used 'i' n 'g' for insensitive and global occurence

// console.log('\n replaceAll=========', strReplace.replaceAll('hola','namo'));//by default case-sensitive and replace all occurence
// console.log('\n replaceAll=========', strReplace.replaceAll(/hola/gi,'namo'));


// console.log('\n split============', strReplace.split(), strReplace.split().length);
// console.log('\n split============', strReplace.split(' '),strReplace.split(' ').length);


//Every JavaScript object has a toString() method
//All string methods return a new string. They don't modify the original string.
//Strings are immutable: Strings cannot be changed, only replaced.




//String Search Method

const strSearchMethod = 'Hello parth Hello Namste hELlo'
console.log('\n strSearchMethod======', strSearchMethod, strSearchMethod.length);

// console.log('\n indexOf===========', strSearchMethod.indexOf('Hello') ); //first occurrence of a string, or it returns -1 if the string is not found
// console.log('\n indexOf===========', strSearchMethod.indexOf('Hello',6), strSearchMethod.indexOf('Hello', -12) ); //here seconnd parameter dosen't affect, The index at which to begin searching the String object
// console.log('\n lastIndexOf=======', strSearchMethod.lastIndexOf('h') ); //last occurrence of a string, or it returns -1 if the string is not found
// console.log('\n lastIndexOf=======', strSearchMethod.lastIndexOf('e',15) ); // lastIndexOf() methods searches backwards (from the end to the beginning

// console.log('\n search=============', strSearchMethod.search('h'));//only one parameter
// console.log('\n search=============', strSearchMethod.search(/p/)); //powerful search values (regular expressions).

// console.log('\n indexOf===========', strSearchMethod.indexOf(/p/)); //cannot take powerful search values (regular expressions).

/*
 indexOf and lastIndexOf can't take -ve value if you pass it will return 0.

what is difference between search() and indexOf() ??

1. indexOf()
 Works with simple substring search
 Does NOT support regex
 Returns the index of the first match
 Returns -1 if not found

2. search()
 Works with regular expressions (regex)
 Can use patterns (/abc|xyz/, /\d+/, etc.)=
 Also returns index of the first match
 Returns -1 if not found
 Does NOT support searching from a specific position

*/

// console.log('\n match===================', strSearchMethod.match('el'));
// console.log('\n match===================', strSearchMethod.match(/el/gi));

// console.log('\n matchAll===================', ...strSearchMethod.matchAll(/e/gi));

// console.log('\n includes===================', strSearchMethod.includes("hELlo"));


// console.log('\n startsWith===================', strSearchMethod.startsWith("hELlo"), strSearchMethod.startsWith("Hello"));
// console.log('\n startsWith===================', strSearchMethod.startsWith("hELlo",25), strSearchMethod.startsWith("Hello",-20)); //second parameter A start position for the search can be specified

// console.log('\n endsWith===================', strSearchMethod.endsWith("hELlo"), strSearchMethod.endsWith("Hello"));
// console.log('\n startsWith===================', strSearchMethod.endsWith("hELlo",25), strSearchMethod.endsWith("Hello",5)); //Check if the 25 first characters of a string ends










