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
