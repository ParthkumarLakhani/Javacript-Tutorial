
/* Why does JSON.stringify() remove undefined?

  Example
  const obj = {
    a: 1,
    b: undefined,
    c: null
  };

  JSON.stringify(obj);
  // '{"a":1,"c":null}'



  Reason (core concept)

  JSON is a data format, not JavaScript.
  JSON supports only a small, strict set of data types.
  ❌ undefined does not exist in JSON

  So during serialization:
    Object properties with undefined → removed
    Array elements with undefined → replaced with null

    Proof
    JSON.stringify([1, undefined, 3]);
    // "[1,null,3]"


  📌 This behavior is defined by the JSON specification.


*/


/* Why does JSON.parse(JSON.stringify(obj)) fail for functions?

  Example

  const obj = {
    x: 10,
    fn() {
      return 42;
    }
  };

  const copy = JSON.parse(JSON.stringify(obj));
  console.log(copy.fn); // undefined

  Why?

  Because:
    Functions are executable code, JSON is pure data.
    JSON cannot represent behavior, only data.

  So:
    Functions are silently removed
    Methods disappear
    Prototypes are lost



  Even worse (class example)

  class User {
    constructor(name) {
      this.name = name;
    }
    greet() {
      return "Hi";
    }
  }

  const u = new User("Parth");
  const copy = JSON.parse(JSON.stringify(u));

  copy instanceof User; // false
  copy.greet; // undefined


  📌 JSON deep copy ≠ real deep copy

*/


/* What data types are NOT supported by JSON?

| JSON Type | Example         |
| --------- | --------------- |
| Object    | `{}`            |
| Array     | `[]`            |
| String    | `"hello"`       |
| Number    | `123`, `1.5`    |
| Boolean   | `true`, `false` |
| Null      | `null`          |



  NOT supported (lost or transformed)
  undefined
  { a: undefined } → {}


  Functions
  { fn() {} } → {}


  Symbols
  { [Symbol("id")]: 1 } → {}


  BigInt (throws error)
  JSON.stringify(10n);
  // TypeError: Do not know how to serialize a BigInt


  Date (converted to string)
  JSON.stringify(new Date());
  // "2025-12-17T10:00:00.000Z"

  Loses Date behavior.


  Map / Set
  JSON.stringify(new Map([["a", 1]]));
  // "{}"


  JSON.stringify(new Set([1, 2, 3]));
  // "{}"


  RegExp
  JSON.stringify(/abc/);
  // "{}"


  Infinity / -Infinity / NaN
  JSON.stringify(NaN);       // "null"
  JSON.stringify(Infinity); // "null"


  Class instances & prototypes
  instanceof → ❌ lost
  methods → ❌ removed

*/


/* Why JSON was designed this way

  JSON goals:

    Language-agnostic
    Safe to transmit
    Easy to parse
    No executable code

  So:

    No functions
    No symbols
    No complex runtime types


*/


/* Real Node.js production bug (very common)
 
  const cache = JSON.parse(JSON.stringify(user));
  cache.lastLogin instanceof Date; // false ❌

  This breaks:

    Auth logic
    Expiry checks
    Time comparisons

*/


/* What to use instead of JSON deep copy?

  Structured Clone (modern)
  structuredClone(obj);

    Supports:
      Date
      Map
      Set
      RegExp

      ❌ Still no functions


  Custom deep clone (lodash)
  _.cloneDeep(obj);


  Manual serialization
  JSON.stringify(obj, (key, value) => {
    if (typeof value === "undefined") return null;
    return value;
  });


*/


/*  Interview-ready summary (perfect answer)

JSON.stringify() removes undefined and functions because JSON is a strict data format that supports only basic data types. Functions, undefined, symbols, and other runtime-specific values cannot be represented in JSON, so they are omitted or transformed. As a result, JSON.parse(JSON.stringify(obj)) is not a true deep copy and fails for functions, dates, maps, sets, and class instances.

*/



/* Why is BigInt not supported in JSON?

BigInt is not supported in JSON because JSON numbers are defined as IEEE-754 double-precision numbers, and allowing BigInt would break cross-language compatibility and numeric precision guarantees.



1️⃣ JSON numbers have a fixed definition

  In the JSON spec:
  There is only one numeric type: number
  That number maps to IEEE-754 double-precision float

  Example:

  {
    "id": 9007199254740991
  }
  This is the maximum safe integer (Number.MAX_SAFE_INTEGER).

  Anything beyond this cannot be represented safely.




2️⃣ BigInt breaks JSON’s core promise
  BigInt example
  const id = 9007199254740993n;


  BigInt:
    Can represent arbitrarily large integers
    Has no decimal point
    Is not IEEE-754

  JSON has no syntax for BigInt:
    9007199254740993n ❌ invalid JSON


  If JSON allowed BigInt:
    Other languages (Python, Java, Go, C++) wouldn’t know how to interpret it
    Precision could be lost silently
    Parsing would become inconsistent



3️⃣ Why not auto-convert BigInt to Number?
  Because that would cause silent data corruption.

  const big = 9007199254740993n;
  Number(big); // 9007199254740992 ❌


  JSON explicitly avoids:
    Implicit lossy conversions
  
  Throwing an error is safer than corrupting data.



4️⃣ Proof: JSON.stringify throws
  JSON.stringify(10n);
  // ❌ TypeError: Do not know how to serialize a BigInt

  This is intentional.



5️⃣ Why JSON didn’t evolve to support BigInt
  Historical reason

    JSON was finalized in early 2000s
    BigInt came to JavaScript in ES2020
    JSON must remain stable forever

  Adding BigInt would:

    Break old parsers
    Break APIs
    Break databases
    Break cross-platform communication
    JSON prioritizes backward compatibility.



6️⃣ Why other types are also excluded (same reason)

| Type      | Why excluded                        |
| --------- | ----------------------------------- |
| BigInt    | No universal numeric representation |
| Function  | Executable code ≠ data              |
| Symbol    | Runtime-only                        |
| undefined | JS-specific                         |
| Date      | No standard date type               |
| Map / Set | Language-specific                   |



7️⃣ How to safely send BigInt in JSON
  
  Convert to string
    JSON.stringify({ id: big.toString() });
    
    Then restore:
    BigInt(obj.id);



  Custom replacer
    JSON.stringify(obj, (_, value) =>
      typeof value === "bigint" ? value.toString() : value
    );

  
  Use binary / non-JSON formats (best for big data)
    Protocol Buffers
    MessagePack
    BSON



8️⃣ Real Node.js production example
  // Database ID
  const userId = 123456789123456789n;

  res.json({ userId }); // 💥 crash

  Fix:
  res.json({ userId: userId.toString() });



9️⃣ Interview-quality conclusion

BigInt is not supported in JSON because JSON defines only one numeric type based on IEEE-754 doubles. Supporting BigInt would introduce precision ambiguity, break cross-language compatibility, and violate JSON’s core design principle of safe, predictable data interchange.


*/



/* 1️⃣ What happens when you JSON.stringify() a value?

JSON.stringify() converts a JavaScript value → JSON string
using strict JSON rules (not JavaScript rules).
 
JSON.stringify(value)


| JS Value  | Result       |
| --------- | ------------ |
| Object    | JSON object  |
| Array     | JSON array   |
| String    | JSON string  |
| Number    | JSON number  |
| Boolean   | JSON boolean |
| null      | null         |
| undefined | removed   |
| function  | removed   |
| Symbol    | removed   |
| BigInt    | error     |


Example
  JSON.stringify({
    a: 1,
    b: undefined,
    c: function () {},
    d: "hello"
  });

  Output
  {"a":1,"d":"hello"}


🚫 undefined & functions are silently dropped


*/


/* 2️⃣ How does JSON handle numbers?

  JSON supports only one numeric type → Number

  {
    "age": 25,
    "price": 99.99
  }

  Rules

    Integers
    Floating points
    Negative numbers
    NaN, Infinity, -Infinity

  JSON.stringify(NaN)        // "null"
  JSON.stringify(Infinity)  // "null"


  JSON has no concept of special numeric values


*/


/* 3️⃣ How does JSON handle booleans?

  JSON booleans are:
    true
    false

  Example
    JSON.stringify(true)   // "true"
    JSON.stringify(false)  // "false"

  Same as JS
    No coercion
    No quotes


*/


/* 4️⃣ Why does JSON remove undefined?
  
  Because JSON has no undefined type

  JSON data types are fixed:
    object
    array
    string
    number
    boolean
    null

  Example
    JSON.stringify({ a: undefined, b: 1 })

  In arrays
    JSON.stringify([1, undefined, 3]) // [1,null,3]

  Objects → remove key
  Arrays → replace with null


*/


/* 5️⃣ Why does JSON remove functions ?

  JSON is a data format, not a code format

  Functions:
    Are executable
    Depend on scope & closures
    Are not portable

    JSON.stringify({
      sayHi() { console.log("hi"); }
    })
    // {}


  JSON is meant for data exchange, not behavior  


*/


/* 6️⃣ Why does JSON NOT support BigInt ?

  Because JSON numbers are based on IEEE-754
    JSON numbers map to JS Number
    JS Number cannot safely represent BigInt
    BigInt would break compatibility

    JSON.stringify(10n)
    //TypeError: Do not know how to serialize a BigInt

  Workaround
    JSON.stringify({ id: 10n.toString() })


  JSON prioritizes cross-language compatibility

*/


/* 7️⃣ What happens when parsing invalid JSON ?
  JSON.parse('{"a":1,}')

  Result SyntaxError: Unexpected token }


  Common invalid cases
    Trailing commas
    Single quotes
    Comments
    Undefined
    Functions

    JSON.parse("{ a: 1 }")  // ❌
    JSON.parse("{'a':1}")  // ❌

  JSON is stricter than JavaScript objects

*/


/* 8️⃣ What happens to Dates in JSON ?

  Dates become strings
    const obj = { date: new Date() };
    JSON.stringify(obj);

  Output
  {"date":"2025-12-19T04:30:00.000Z"}


  ✔ ISO string
  ❌ Not a Date anymore

  After parsing
    const parsed = JSON.parse(json);
    typeof parsed.date  // "string"

  Fix
  parsed.date = new Date(parsed.date);

*/


/* Summary

| JS Type   | JSON Result |
| --------- | ----------- |
| Number    | Number      |
| Boolean   | Boolean     |
| String    | String      |
| null      | null        |
| undefined | ❌ removed   |
| Function  | ❌ removed   |
| Symbol    | ❌ removed   |
| BigInt    | ❌ error     |
| Date      | String      |


*/



/*

Q: What happens during JSON.stringify()?
JS values are converted into JSON-safe data, removing unsupported types.

Q: Why does JSON remove undefined and functions?
Because JSON is a pure data format and does not support them.

Q: Why is BigInt not supported?
JSON numbers are limited to IEEE-754 and must remain cross-language compatible.

Q: What happens to dates?
Dates become ISO strings and must be re-parsed manually.

Q: What happens with invalid JSON?
JSON.parse() throws a SyntaxError.

*/

