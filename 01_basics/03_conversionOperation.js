let score = ''

let valueInNumber = Number(score)
/*
'99' =>   99 == typeof number
'99abc' => NaN == typeof number
'' => 0 == typeof number
' ' => 0 == typeof number
true => 1, and false => 0  typeof number
{ firstName: 'parth' } => NaN == typeof number
null => 0 == typeof number
undefined => NaN == typeof number
BigInt(12121212121) => 12121212121 == typeof number

Symbol('12121212121') can't convert to number      //note that


**special case
Number([])         // 0
Number([1])        // 1
Number([1,2])      // NaN
Number({})         // NaN


*/

// console.log(`\n typeof score = ${typeof score}, and valueInNumber = ${valueInNumber} and typeof valueInNumber = ${typeof valueInNumber}`);



let number = ' '

let str = String(number)
/*
99 =>   '99' == typeof string
0 => '0' == typeof string
'' => '' == typeof string
' ' => ' ' == typeof string
true => true  == typeof string
false => false  == typeof string
{ firstName: 'parth' } => [object Object] == typeof string
null => 'null' == typeof string
undefined => 'undefined' == typeof string
BigInt(12121212121) => '12121212121' == typeof string
Symbol('12121212121') => 'Symbol(12121212121)' == typeof string
*/
// console.log(`\n typeof number = ${typeof number}, and str = ${str} and typeof str = ${typeof str}`);


let isLoggedIn = { firstName: 'parth' }

let checkLoggegIn = Boolean(isLoggedIn)
/*
99 =>  true == typeof boolean
0 => false == typeof boolean
1 => true == typeof boolean
'parth' => true == typeof boolean
'' => false == typeof boolean
' ' => true == typeof boolean
{ firstName: 'parth' } => true == typeof boolean
null => fasle == typeof boolean
undefined => false == typeof boolean
BigInt(12121212121) => true == typeof boolean
Symbol('12121212121') => true == typeof boolean
*/

// console.log(`\n typeof isLoggedIn = ${typeof isLoggedIn}, and checkLoggegIn = ${checkLoggegIn} and typeof checkLoggegIn = ${typeof checkLoggegIn}`);



let person = Symbol('12121212121')

let personObj = Object(person) 
/*
99 => 99 == typeof object
0 => 0 == typeof object
1 => 1 == typeof object
'parth' => parth == typeof object
'' => '' == typeof object
' ' => ' ' == typeof object
{ firstName: 'parth' } => {"firstName":"parth"} == typeof object
null => {} == typeof object
undefined => {} == typeof object
BigInt(12121212121) => 12121212121 == typeof object                      //without JSON.stringify it's works
Symbol('12121212121') => {} == typeof object                             //with JSON.stringify it's works
*/
// console.log(`\n typeof person = ${typeof person}, and personObj = ${personObj} and typeof personObj = ${typeof personObj}`);



let cost = ''

let costPay = BigInt(cost) 
/*
99 => 99 == typeof bigint
0 => 0 == typeof bigint
1 => 1 == typeof bigint
'parth' => 0 == typeof bigint
'' => 0 == typeof bigint
' ' => 0 == typeof bigint
{ firstName: 'parth' } =>          Cannot convert 
null =>                        ReferenceError: nu is not defined
undefined =>                       Cannot convert undefined 
Symbol('12121212121') =>           Cannot convert 
*/
// console.log(`\n typeof cost = ${typeof cost}, and costPay = ${costPay} and typeof costPay = ${typeof costPay}`);


let justShow = 99

// let seenNow = null(justShow)                       // null is not a function / Null is not defined
// let seenNow = undefined(justShow)                  // undefined is not a function / Undefined is not defined

// because null and undefined are values, not functions. You cannot call values using () unless they are functions.

// console.log(`\n typeof justShow = ${typeof justShow}, and seenNow = ${seenNow} and typeof seenNow = ${typeof seenNow}`);


let checkSys = ''

let showSysmbol = Symbol(checkSys)

/*
when you using template string then you got like this...
99 =>  undefined == typeof symbol
0 => undefined == typeof symbol
1 => undefined == typeof symbol
'parth' => undefined == typeof symbol         
'' => undefined == typeof symbol              
' ' => undefined == typeof symbol             
{ firstName: 'parth' } => undefined == typeof symbol
null => undefined == typeof symbol
undefined => undefined == typeof symbol
BigInt(12121212121) => undefined == typeof symbol
Symbol('12121212121') =>                                        // Cannot convert,            Cannot convert a Symbol value to a string
*/

/*
only with JSON.stringify it's works, Whenever you use template string ${...}, JavaScript does this internally: ToPrimitive(value, hint = "string") then ToString(result)
Symbols cannot be converted to string automatically.

Then why is JSON.stringify(showSysmbol) working?
Because JSON.stringify() does NOT convert Symbol to string. It treats Symbols as undefined.
*/
// console.log(`\n typeof checkSys = ${typeof checkSys}, and showSysmbol = ${JSON.stringify(showSysmbol)} and typeof showSysmbol = ${typeof showSysmbol}`);


/*
99 =>  Symbol(99) == typeof symbol
0 => Symbol(0) == typeof symbol
1 => Symbol(1) == typeof symbol
'parth' => Symbol(parth) == typeof symbol         
'' => Symbol() == typeof symbol              
' ' => Symbol( ) == typeof symbol             
{ firstName: 'parth' } => Symbol([object Object]) == typeof symbol
null => Symbol(null) == typeof symbol
undefined => Symbol() == typeof symbol
BigInt(12121212121) => Symbol(12121212121) == typeof symbol
Symbol('12121212121') =>                                        // Cannot convert,            Cannot convert a Symbol value to a string
*/

// console.log("\n showSysmbol = ${JSON.stringify(showSysmbol)} and typeof showSysmbol = ${typeof showSysmbol}", showSysmbol, typeof showSysmbol);


/*
Number(value)
   ↓
Is value primitive?
   ├── YES → ToNumber(value)
   └── NO  → ToPrimitive(value, hint = number)
               ↓
             ToNumber(primitive)



String(value) 
   ↓
Is it a primitive?
   ├── YES → directly apply ToString()
   └── NO  → apply ToPrimitive(hint: string)
                ↓
             then apply ToString()


for all datatype, similar type of checked 


✅ Which data types follow which path?
🟢 Primitive Types

These DO NOT use ToPrimitive (already primitive):


| Type        | Example     | What happens                 |
| ----------- | ----------- | ---------------------------- |
| `number`    | `45`        | Direct `ToNumber(45)`        |
| `string`    | `"45"`      | Direct `ToNumber("45")`      |
| `boolean`   | `true`      | Direct `ToNumber(true)`      |
| `null`      | `null`      | Direct `ToNumber(null)`      |
| `undefined` | `undefined` | Direct `ToNumber(undefined)` |
| `symbol`    | `Symbol()`  | ❌ TypeError                  |
| `bigint`    | `10n`       | ❌ TypeError                  |

No ToPrimitive here




🔴 Non-Primitive (Objects)
These MUST go through ToPrimitive first:

| Type     | Example        | Steps                                     |
| -------- | -------------- | ----------------------------------------- |
| Object   | `{}`           | `valueOf()` → `toString()` → `ToNumber()` |
| Array    | `[]`           | `valueOf()` → `toString()` → `ToNumber()` |
| Function | `function(){}` | `valueOf()` → `toString()` → `ToNumber()` |
| Date     | `new Date()`   | `valueOf()` (timestamp) → `ToNumber()`    |

ToPrimitive → ToNumber



Why null and undefined are special

  Because they are:
  Already primitives
  Have no methods
  Do not need coercion to primitive


  
String conversion = ToPrimitive(hint: "string") → ToString()
Number conversion = ToPrimitive(hint: "number") → ToNumber()

*/


/*
what is difference between parseInt() and Number()
*/




//-----------------------------operation---------------

let str1 = 'parth'
let str2 = ' patel'

let strr = str1 + str2
// let strr = str1 - str2
console.log('\n string ==',strr);


/*
prefix = when it's readed at that time value is increased.
postfix = after use of one time then value is increased.
*/

// let a = 5
// let b = a++
// console.log(`\n a = ${a} and b = ${b}`);

// let x = 5
// let y = ++x

// console.log(`\n x = ${x} and y = ${y}`);


let a = 5;
let b = (a++ + a-- + ++a + --a) - (a++ * ++a);
console.log(a, b);



const inc = 50

// console.log(++(++inc)); //not allowed



// console.log(2-2);
// console.log(2*2);
// console.log(2+2);


// console.log("5" + 2); 
// console.log("5" + true);

// console.log("5" - 2); 
// console.log("5" * 2); 
// console.log("10" / "2");

// console.log(null + 1);
// console.log(" " + 0);


// console.log( null + undefined );

// console.log( [] + [] );            //*
// console.log( [1] + [2] );
// console.log( [1] + [2,3] );
// console.log( [1,2] + [2,3] );

// console.log( {} + {} );   //*
// console.log( {name: "parth"} + {name: "patel"} );
// console.log( {name: "parth", fname: "kumar"} + {name: "patel"} );

// console.log( [] + {} );  //*
// console.log( {} + [] );  //*

// console.log( [] - [] );   //*
// console.log( {} - {} );   
// console.log( [] - {} );   
// console.log( {} - [] );   

/* for *

First rule to remember (VERY important)
+ operator in JS
+ has two meanings:
  Number addition
  String concatenation

If either operand becomes a string, JS switches to string concatenation.



Second rule: How objects convert to primitives
  When JS sees object + object, it must convert them to primitive values.

  Internal process (simplified):
  ToPrimitive(value)
    → valueOf()
    → if not primitive → toString()


Conversion results you must memorize
| Value | toString() result   |
| ----- | ------------------- |
| `[]`  | `""` (empty string) |
| `{}`  | `"[object Object]"` |

Why?
  [].toString() → ""
  {}.toString() → "[object Object]"



Now let’s go line by line 🔍
console.log([] + [])

  + sees objects
  Convert both to primitives
  [] → ""
  "" + ""
  String concatenation  

Result: ""  //chatgpt
Result: ""  


console.log({} + {})
  
  JS interprets the first {} as an empty block, not an object.
  So it becomes: +{}
  Now evaluate:
    {} → "[object Object]"
    Unary + tries to convert it to a number
    Number("[object Object]") → NaN

Result: NaN //chatgpt
Result: [object Object][object Object]



console.log([] + {})

  [] → ""
  {} → "[object Object]"
  "" + "[object Object]"

Result: "[object Object]" //chatgpt
Result: "[object Object]"




console.log({} + [])

  {} + []
  Interpreted as: + []

  Now evaluate:
    [] → ""
    Number("") → 0

Result: 0 //chatgpt
Result: [object Object]


Why YOUR output is different ??
  They differ because JavaScript parsing rules change depending on where and how the code is executed.
  This is one of the most confusing (and interview-famous) JS behaviors.

  The real reason: {} can mean TWO things
  {}   // can be:
    1️⃣ an empty BLOCK statement
    2️⃣ an object literal

  JS decides based on position (parsing phase) — before any execution or coercion happens.



  Why YOUR output is different

  You most likely ran this inside:
    console.log( {} + {} );
  or in Node REPL / browser console, where expressions are expected.
  
  In that context:  {} is treated as an object literal, NOT a block.
  
  The output differs because {} can be parsed as a block or an object.
  In expression contexts (like console.log), it’s an object;
  in statement position, it’s a block.
  

/ please explain me when valueOf() and toString() used ?? both at a time used or only one used at a time ??

valueOf() and toString() are NOT used together. JS calls one at a time, in a fixed order, and stops as soon as it gets a primitive value.

  When a non-primitive comes in, JS first runs ToPrimitive.
  Then it calls valueOf() or toString() based on the hint.
  If it gets a primitive, it stops immediately.
  If not, it tries the fallback method.


How does JavaScript decide the hint  ?

  The hint is NOT random. It is decided by the operator or context that is using the value.
  JS already knows what it wants (number or string), so it passes that intent as the hint to ToPrimitive.

  The 3 possible hints
    "number"
    "string"
    "default"


  1️⃣ Hint = "number"
    Used when JS needs a numeric value

    Operators / contexts:
      Unary plus: +obj
      Math ops: - * / % **
      Comparisons: < > <= >=
      Bitwise ops: | & ^
      Number(obj)

      Example:  +obj
      Internal: ToPrimitive(obj, "number")

  
      
  2️⃣ Hint = "string"

    Used when JS needs text

    Contexts:
      String(obj)
      Template literals: ${obj}
      alert(obj)
      DOM text
      obj + ""

      Example:  `${obj}`
      Internal: ToPrimitive(obj, "string")   


  3️⃣ Hint = "default"
    Used when JS is unsure (ambiguous)

    Contexts: 
      Binary + (before it knows number vs string)
      Loose equality: obj == primitive


    Example:  obj + 1
    Internal: ToPrimitive(obj, "default")

    After primitive conversion, JS decides:
      string concat OR
      numeric addition



Full hint decision table
| Code           | Hint        |
| -------------- | ----------- |
| `+obj`         | `"number"`  |
| `obj - 1`      | `"number"`  |
| `obj * 2`      | `"number"`  |
| `obj < 10`     | `"number"`  |
| `String(obj)`  | `"string"`  |
| `` `${obj}` `` | `"string"`  |
| `obj + ""`     | `"string"`  |
| `obj + obj`    | `"default"` |
| `obj == 10`    | `"default"` |

/



The core rule (memorize this)
  Except +, all mathematical operators in JavaScript force numeric conversion.

Operators that ALWAYS convert to number
  Arithmetic
    -
    *
    /
    %
    **

  Unary
    +value (explicit number conversion)
    -value

  Comparison (numeric)
    <
    >
    <=
    >=

  Bitwise
    | & ^ << >> >>>




  Why + is special 😈
  + has two jobs:
    Number addition
    String concatenation

  So JS must:
    Convert both operands to primitive (ToPrimitive)
    Check:
      If either is string → concatenate
      Else → numeric addition

  That’s why + uses "default" hint first.    

  Except +, all mathematical operators in JS perform numeric conversion.



*/


const x = 1;
const y = -1;

// console.log(+x);

// console.log(+y);

// console.log(+"");

// console.log(+true);

// console.log(+false);

// console.log(+"hello");



/*  what is unary operator ??

JavaScript Unary Operators work on a single operand and perform various operations, like incrementing/decrementing, evaluating data type, negation of a value, etc.

The unary plus (+) operator precedes its operand and evaluates to its operand but attempts to convert it into a number, if it isn't already.

Although unary negation (-) also can convert non-numbers, unary plus is the fastest and preferred way of converting something into a number, because it does not perform any other operations on the number.

Unary plus does the exact same steps as normal number coercion used by most built-in methods expecting numbers. It can convert string representations of integers and floats, as well as the non-string values true, false, and null. Integers in both decimal and hexadecimal (0x-prefixed) formats are supported. Negative numbers are supported (though not for hex). If it cannot parse a particular value, it will evaluate to NaN. Unlike other arithmetic operators, which work with both numbers and BigInts, using the + operator on BigInt values throws a TypeError.




+ (Unary Plus): Attempts to convert its operand into a number. This is often used for type conversion, for example, +"42" results in the number 42, and +true results in 1.

- (Unary Negation): Converts its operand to a number (if it isn't one already) and then negates it (changes its sign). For example, -"5" results in the number -5, and -true results in -1.

++ (Increment): Adds one to its operand. It can be used as a prefix (++x) to increment the value before the expression is evaluated, or postfix (x++) to use the current value and then increment it.

-- (Decrement): Subtracts one from its operand, also available in prefix (--x) and postfix (x--) forms, with similar timing differences to the increment operator.




usage with non-number

+"10"        // 10
+"10.5"      // 10.5
+true        // 1
+false       // 0
+null        // 0
+undefined   // NaN
+""          // 0
+"abc"       // NaN

+[]          // 0
+[1]         // 1
+[1,2]       // NaN
+{}          // NaN

+function (val) { return val; } // NaN
+1n    // throws TypeError: Cannot convert BigInt value to number

*/


/* for BigInt operand 
when you perform 
Addition, subtraction, division, reminder, multiplication, exponentition

both side should be BigInt operatorand. otherwise it will throw it error.

*/


/* Boolean conversion rule?
  Falsy → false
  rest → true

*/


/* Why empty array truthy ? like Boolean([]), Boolean({}) ??
  Because all objects in JavaScript are truthy, regardless of their contents.


🔹 The real reason (Internal mechanics)
  JavaScript has an internal operation called ToBoolean.

  ToBoolean rules (VERY IMPORTANT)
    Only these values are falsy:  false, 0, -0, 0n, "", null, undefined, NaN
  🚫 Nothing else is falsy
  
  

  What are [] and {} ??
    typeof []   // "object"
    typeof {}   // "object"
  They are objects, not values.

  Objects represent references in memory
  A reference always exists → therefore truthy



🔹 How Boolean() works internally
  Boolean(value)

  Internally:
    Boolean(value) → ToBoolean(value)

  Objects path
    If Type(value) is Object → return true

  
    
Visual analogy
| Value       | Meaning                            |
| ----------- | ---------------------------------- |
| `null`      | nothing exists                     |
| `undefined` | not assigned                       |
| `[]`        | a container exists (even if empty) |
| `{}`        | an object exists                   |

Existence = truthy




🔹 Why JS does NOT check emptiness ?
  Because it would be:
    Expensive (deep inspection)
    Ambiguous (what is “empty”?)
    Inconsistent across objects

  Boolean(new Map())  
  Boolean(new Set())  
  Boolean(new Date())

  JS only checks type, not structure



🔹 Common beginner trap
    if ([]) {
    console.log("runs");
  }



🔹 Why empty string is falsy but empty array is truthy?

| Value | Type      | Boolean |
| ----- | --------- | ------- |
| `""`  | primitive | false   |
| `[]`  | object    | true    |

Primitives use value-based truthiness
Objects use existence-based truthiness




🔹 Weird comparison example (interview gold)
    [] == false 

  Why?
    [] → ToPrimitive → ""
    "" → ToNumber → 0
    false → 0
    0 == 0 → true
    
  But:  
    Boolean([])


Empty arrays and objects are truthy because JavaScript treats all objects as truthy values; truthiness depends on the type, not on whether the object is empty.

*/


/* Difference between + and Number() ??

| Feature          | `+value`          | `Number(value)`   |
| ---------------- | ----------------- | ----------------- |
| Type             | Operator          | Function          |
| Readability      | ❌ Less            | ✅ More            |
| Speed            | ⚡ Slightly faster | Slightly slower   |
| Intent clarity   | ❌ Implicit        | ✅ Explicit        |
| Conversion logic | Same (`ToNumber`) | Same (`ToNumber`) |





6️⃣ Which one should YOU use?
    Best practice
    // Business logic / backend (NestJS, APIs)
    Number(value)

    // Short conversions / calculations
    +value


There is no difference in conversion logic between +value and Number(value); both use ToNumber(). The difference is readability and intent—Number() is explicit, + is concise.

*/


/* What is ToPrimitive in JavaScript?

ToPrimitive is an internal JavaScript abstract operation that converts a non-primitive value (object) into a primitive value
(string, number, bigint, boolean, symbol, or null).

You cannot call it directly — the JS engine uses it automatically.


🔹 When does JavaScript use ToPrimitive?

Whenever an object is used where a primitive is expected, JS calls ToPrimitive.
  Common places:
    obj + 1
    obj == 1
    String(obj)
    Number(obj)
    `${obj}`





Why ToPrimitive exists?
  Objects cannot be:

    added
    compared
    concatenated
    converted

  👉 JS must first convert them into a primitive
  👉 That conversion logic is ToPrimitive





How ToPrimitive works (step-by-step) 
Syntax (internal)
  ToPrimitive(input, hint)


| Hint        | Meaning              |
| ----------- | -------------------- |
| `"number"`  | Prefer numeric value |
| `"string"`  | Prefer string value  |
| `"default"` | JS decides           |



How we decide the hint ??

    You do NOT choose the hint.
    The operation you write decides it.
  The ECMAScript spec defines the hint per operator / abstract operation.


✅ Rule 1: Explicit conversion decides the hint

| Code                | Hint used                  |
| ------------------- | -------------------------- |
| `Number(x)`         | `"number"`                 |
| `+x`                | `"number"`                 |
| `-x`, `*`, `/`, `%` | `"number"`                 |
| `String(x)`         | `"string"`                 |
| `x + ""`            | `"string"`                 |
| `` `${x}` ``        | `"string"`                 |
| `Boolean(x)`        | ❌ (no hint, special rules) |




✅ Rule 2: Operators decide the hint
  ➕ + operator (special case): a + b

  Algorithm:
    Convert both operands to primitive (hint = "default")
    If either is string → string concatenation
    Else → numeric addition

  "default" behaves like:
    "number" for most objects
    "string" for Date

  [] + {}  // "[object Object]"
  {} + []  // 0  (JS parser quirk)



✅ Rule 3: Comparison operators

| Operator             | Hint        |
| -------------------- | ----------- |
| `==`                 | `"default"` |
| `<`, `>`, `<=`, `>=` | `"number"`  |


  [10] < [20]   // true
  // both → ToPrimitive(hint: number)



✅ Rule 4: Date objects are SPECIAL  

  new Date() + ""

  Uses:
    hint = "string"
    +new Date()

  Uses:
  hint = "number"

Only Date overrides "default" behavior.



🧩 Complete Hint Decision Table (Memorize)

| Context           | Hint        |
| ----------------- | ----------- |
| `Number(x)`       | `"number"`  |
| Math ops          | `"number"`  |
| `String(x)`       | `"string"`  |
| Template literals | `"string"`  |
| `+` operator      | `"default"` |
| `==`              | `"default"` |
| `< > <= >=`       | `"number"`  |
| `Date` with `+`   | `"string"`  |
| Boolean context   | ❌ no hint  |




example :::::
  [] == [] 

  Step-by-step
  == compares references when both sides are objects

  NO type conversion happens

  Each [] creates a new array in memory

  []  →  memory address A
  []  →  memory address B

  A !== B

  Result
  false

  Key rule
  Objects are compared by reference, not by value




  [] + []

  This is where coercion + hint = "default" happens.

  Full Algorithm
  Step 1: + operator
      Uses ToPrimitive(hint = "default") on both sides


    Left side []
      ToPrimitive([], "default")
      → valueOf() → []        ❌ (still object)
      → toString() → ""       ✅ (primitive)
    

    Right side []
      Same steps → ""

  Step 2: Check operands
      Now expression becomes:
        "" + ""
      Since at least one operand is a string, String concatenation
      
      result: "" 





  [] + {}

  Step-by-step
    Step 1: + operator
      Uses ToPrimitive(hint = "default") on both operands

    Left side: []
      [].valueOf() → []     
      [].toString() → ""  

    Result: ""

    Right side: {}
      {}.valueOf() → {}                
      {}.toString() → "[object Object]"

    
    Step 2: Apply +
      Expression becomes
        "" + "[object Object]"

    Since one operand is a string → string concatenation  

  Result: "[object Object]"





  {} + []  

  This one is NOT symmetric
  This happens because of how JS parses {}.

  🧠 What JS THINKS this is
    At start of a statement, {} is parsed as:
      {}   // empty block
      NOT an object literal.

    So JS sees:
      {} + []

    as:
      ;    // empty block
      +[]  // unary plus


  Evaluate +[]
    +[]
    [] → ToPrimitive(hint: number)
    → "" → ToNumber("") → 0

  
  result: 0
 

🧪 Proof (Force object literal)
  Wrap {} in parentheses:
  ({} + [])

  Now real evaluation happens:
  "[object Object]"





Important Comparison
| Expression | Result  | Reason                  |
| ---------- | ------- | ----------------------- |
| `[] == []` | `false` | Reference comparison    |
| `[] == ""` | `true`  | Coercion happens        |
| `[] + []`  | `""`    | String concatenation    |
| `+[]`      | `0`     | Unary `+` forces number |







🔹 Conversion order (VERY IMPORTANT)

1️⃣ If Symbol.toPrimitive exists → use it

  const obj = {
    [Symbol.toPrimitive](hint) {
      return hint === "number" ? 10 : "hello";
    }
  };

  +obj        // 10
  String(obj) // "hello"



2️⃣ Otherwise → call valueOf() and toString()

  If hint = "number"   valueOf() → toString()
  If hint = "string"   toString() → valueOf()




Examples
  Number context

    const obj = {
    valueOf() {
      return 5;
    },
    toString() {
      return "10";
    }
  };

  +obj        // 5
  Number(obj) // 5


  String context

    String(obj) // "10"
    `${obj}`    // "10"


  Default hint (⚠ tricky)
    
    Operators like + use "default" hint :    obj + obj

    For most objects → "number"
    For Date objects → "string"
    
    const d = new Date();
    d + 1
    // "Wed Dec 18 2025...1"




🔹 Real interview trap 😈 
  {} + {}

  What happens?
    {} is parsed as a block
    +{} → NaN

    ({} + {}) // "[object Object][object Object]"



  
Why this matters in real code (Node.js bugs)

  const id = { valueOf: () => 100 };
  const map = new Map();

  map.set(id, "user");
  map.get(100); 

  Object ≠ primitive
  ToPrimitive not applied for Map keys





ToPrimitive vs ToNumber vs ToString

| Operation   | Purpose            |
| ----------- | ------------------ |
| ToPrimitive | Object → primitive |
| ToNumber    | Any → number       |
| ToString    | Any → string       |






🔹 Key Takeaways 🧠

✔ ToPrimitive converts objects → primitive
✔ Used automatically by JS
✔ Symbol.toPrimitive has highest priority
✔ Order depends on hint
✔ Date behaves differently
✔ Source of many tricky bugs & interview questions





ToPrimitive is an internal JavaScript operation that converts objects into primitive values when a primitive is required, using Symbol.toPrimitive, valueOf(), and toString() based on context.



*/


/* What is valueOf() and toString() in JavaScript ??

Both valueOf() and toString() are built-in methods used by JavaScript during type coercion, especially inside the ToPrimitive operation.
They help JS convert objects → primitive values.



1️⃣ valueOf()

What it is
  valueOf() returns the primitive value representation of an object (usually a number).


🔹 Default behavior

| Object             | `valueOf()` result |
| ------------------ | ------------------ |
| `{}`               | object itself      |
| `[]`               | array itself       |
| `new Number(5)`    | `5`                |
| `new String("hi")` | `"hi"`             |
| `new Date()`       | timestamp (number) |


(123).valueOf()        // 123
new Number(10).valueOf() // 10
new Date().valueOf()   // 1734528000000 (ms)



When JS uses valueOf()

  Used first when:
    hint is "number"
    hint is "default" (except Date)

      +obj
      obj - 1
      Number(obj)
      obj > 1






2️⃣ toString()
🔹 What it is
  toString() returns a string representation of an object.
  object.toString()


🔹 Default behavior
| Object          | `toString()`        |
| --------------- | ------------------- |
| `{}`            | "[object Object]"   |
| `[]`            | ""                  |
| `[1,2]`         | "1,2"               |
| `function() {}` | source code         |
| `new Date()`    | human-readable date |


({}).toString()     // "[object Object]"
[1,2].toString()   // "1,2"




🔹 When JS uses toString()
  Used first when:

    hint is "string"
    string contexts

    String(obj)
    `${obj}`
    alert(obj)





3️⃣ valueOf() vs toString()
| Feature          | `valueOf()`         | `toString()`      |
| ---------------- | ------------------- | ----------------- |
| Returns          | number / primitive  | string            |
| Purpose          | numeric conversion  | string conversion |
| Used first when  | number/default hint | string hint       |
| Default for `{}` | object itself       | "[object Object]" |




4️⃣ How JS decides which one to call
🔹 ToPrimitive order
  1. Symbol.toPrimitive (highest priority)
  2. valueOf()
  3. toString()

  | Hint     | Call order         |
  | -------- | ------------------ |
  | "number" | valueOf → toString |
  | "string" | toString → valueOf |





5️⃣ Tricky Examples (Interview Gold 😈)
  Example 1: [] + 1
   
  Steps:
  [] → toString() → ""
  "" + 1 → "1"

  Output: "1"


  Example 2: {} + 1

  Steps:
  {}   
  +1 
  
  Output: 1


  Example 3: new Date() + 1
  Date uses string hint:

  "Wed Dec 18 2025..." + 1

  Output: "Wed Dec 18 2025...1"





7️⃣ Best Practices ✅

✔ Don’t rely on implicit coercion
✔ Use explicit Number() / String()
✔ Override valueOf() carefully
✔ Prefer Symbol.toPrimitive for full control


valueOf() returns an object’s primitive numeric representation, while toString() returns its string representation; both are used internally by JavaScript during object-to-primitive conversion.

*/


// const obj = {};
// "Hello " + obj

/* 1️⃣ What happens when an object is added to a string ??

🔹 Internal steps
    + operator sees string involved
    JS decides → string concatenation
    JS calls ToPrimitive(obj, "default")
    For normal objects, "default" behaves like "number"
    Conversion order:
      obj.valueOf() → returns object 
      obj.toString() → "[object Object]"
    Final operation:
      "Hello " + "[object Object]"


  If one operand is a string, + becomes string concatenation    

*/

// const obj = {};
// obj + 10

/* 2️⃣ What happens when an object is added to a number ??

  Internal steps
  No string present → JS attempts numeric addition
  Calls ToPrimitive(obj, "default")
  Conversion:
    valueOf() → object
    toString() → "[object Object]"
  Then ToNumber("[object Object]") → NaN

  Final operation:
    NaN + 10


  Result
    NaN
    
  If no string is involved, JS tries numeric addition
  
  


⚠ Special case: Array
  5 + []  

  [] → ""  
  5 + "" → "5"

  "5"


*/


/* What is Symbol.toPrimitive ??

Symbol.toPrimitive is a well-known symbol that lets you fully control how an object converts to a primitive.
obj[Symbol.toPrimitive](hint)

  Hints:
    "number"
    "string"
    "default"

🔹 It runs before valueOf() and toString()


const user = {
  [Symbol.toPrimitive](hint) {
    if (hint === "string") return "Parth";
    if (hint === "number") return 100;
    return "default";
  }
};

String(user)  // "Parth"
+user         // 100
user + ""     // "default"




Priority order

1. Symbol.toPrimitive
2. valueOf()
3. toString()


*/


/* Why was Symbol.toPrimitive introduced ??

  Problems before ES6
  Before Symbol.toPrimitive, developers could only override:
    valueOf()
    toString()

  Issues:
    No control over conversion context
    Same value used for string & number
    Bugs in arithmetic & concatenation

  const price = {
    valueOf() { return "100"; }
  };

  price + 20  // "10020"



✅ What Symbol.toPrimitive fixed

  Explicit control using hint
  Clear separation of string vs number behavior
  Prevents silent coercion bugs
  Better spec-level design
 
 
  const price = {
  [Symbol.toPrimitive](hint) {
    return hint === "number" ? 100 : "100";
    }
  };

  price + 20   // 120 
  price + ""   // "100"


*/


/*  5️⃣ Can you customize object conversion?
YES — 3 levels of control


🟢 Level 1: toString()
  const obj = {
    toString() {
      return "Hello";
    }
  };

  String(obj); // "Hello"


🟡 Level 2: valueOf()
  const obj = {
    valueOf() {
      return 10;
    }
  };

  obj + 5; // 15



🔵 Level 3 (BEST): Symbol.toPrimitive

  const obj = {
    [Symbol.toPrimitive](hint) {
      if (hint === "number") return 10;
      return "Ten";
    }
  };

  obj + 5    // 15
  obj + ""   // "Ten"



*/


/* Summary
| Scenario           | What happens                 |
| ------------------ | ---------------------------- |
| object + string    | string concatenation         |
| object + number    | numeric addition (often NaN) |
| Conversion control | `Symbol.toPrimitive`         |
| Why introduced     | avoid coercion bugs          |
| Best customization | `Symbol.toPrimitive`         |

*/


/*
7️⃣ One-Line Interview Answers 🎯

Q: What happens when object is added to string?
Object is converted to primitive, then concatenated as a string.

Q: What happens when object is added to number?
Object converts to number; if conversion fails → NaN.

Q: What is Symbol.toPrimitive?
A method that controls how objects convert to primitive values.

Q: Why was it introduced?
To give explicit, context-aware control over type coercion.

Q: Can object conversion be customized?
Yes, using Symbol.toPrimitive, valueOf, or toString.
*/


/*
96. Why conversion causes bugs?
  Implicit coercion is unpredictable.

97. Avoid implicit conversion?
  Use === and explicit casting.

98. When explicit conversion?
  When handling user input / APIs.

99. Best practices?
  Use ===
  Use Number(), Boolean()
  Avoid ==

100. How JS handles conversion internally?
  Via:
  ToPrimitive → ToNumber / ToString / ToBoolean
*/


