//array

const defineArray1 = ['parth', 'patel', 22, 'amd']
const defineArray2 = new Array('parth', 'patel', 22, 'amd')

// console.log('\n defineAry1  and defineAry2 ==', defineArray1, defineArray2);

/*
Elements: An array is a list of values, known as elements.
Ordered: Array elements are ordered based on their index.
Zero indexed: The first element is at index 0, the second at index 1, and so on.
Dynamic size: Arrays can grow or shrink as elements are added or removed.
Heterogeneous: Arrays can store elements of different data types (numbers, strings, objects and other arrays).
*/


/*
  1. [] (literals)  vs  2. new Array() constructor method
    Simple
    Fast
    Easiest to read
    No unexpected behavior
    ALWAYS preferred way

  2. new Array() constructor method
    Complex
    Slower
    Harder to read
    Unexpected behavior when single numeric argument is passed
      e.g. new Array(3) creates an array of 3 empty slots
    Avoid using unless necessary
    
why here array literals fast and constructor method is slow ??
  JavaScript engines (V8, SpiderMonkey, etc.) know exactly what you are creating.
  No function call is involved
  No interpretation needed
  JS engine optimizes this pattern heavily

Array constructor (new Array()) is more complex ?
  JavaScript must perform extra steps:

  It sees new Array(...)
  It must check:
  Are you passing one argument or multiple arguments?
  If one argument → is it a number (array length) or a value?
  This creates branching logic inside the engine.

  Example:
  new Array(5)     // creates empty array of length 5
  new Array('5')   // creates array ['5']
  new Array(5,6)   // creates array [5,6]


  Because of this ambiguity, JavaScript must do extra validation → making it slower.

  Constructor creates a new object via a function call
    new Array() internally:

    Allocates memory
    Calls a constructor function
    Sets prototype chain
    Handles special cases

    Function calls are slower than literal creation.

*/




const ary = ['hello','parth', 12, 'patel']
// console.log('\n ary=========',ary,typeof ary); 

const aryToStr = ary.toString()
// console.log('\n ary to str=====', aryToStr, typeof aryToStr);

// console.log('\n at============', ary.at(1), ary.at(-1));   //allow -ve indexing
// console.log('\n using numbered indexed===========', ary[1], ary[-1]); //-ve indexing not allowed

// console.log('\n join ===== ', ary.join(' '), typeof ary.join(' '), ary.join() ); //join - joins all elements of an array into a string, original array is not modified




const pushAndPop = ['kumar','patel',24,'Amd',{fristName: 'prithviraj', lastName: 'chauhan'}, '312', 'push#1','push#2','push#3','push#4','push#5','pop1','pop2','pop3','pop4','pop5']
// console.log('\n A original array pushAndPop ===', pushAndPop, pushAndPop.length);

// console.log('\n pop===', pushAndPop.pop(), typeof pushAndPop.pop() ); //pop - remove last element, return popped out element, original array is modified
// console.log('\n push===', pushAndPop.push('pop4') );  //push - add element at the end, return new length of array, original array is modified
// console.log('\n multiple push = ', pushAndPop.push('pop5','pop6','pop7'), pushAndPop.length,  pushAndPop);

// console.log('\n shift====', pushAndPop.shift()); //shift - remove first element at the beginning, return shifted out element, original array is modified
// console.log('\n unshift====', pushAndPop.unshift('technology')); //unshift - add new element at the beginning and unshifts older elements, return new array length, orignal array is modified
// console.log('\n unshift multiple ====', pushAndPop.unshift('technology','kuem','hung'))

/*
shoft and unshift are slower than pop and push because ??
  When you use shift() or unshift(), all existing elements in the array need to be re-indexed.
  This means that each element's index is updated to reflect its new position in the array.
  This re-indexing process takes time, especially for large arrays, making shift() and unshift() slower.

  In contrast, pop() and push() only affect the end of the array.
*/


// console.log('\n delete======', delete pushAndPop[29]);
/*
Using delete() leaves undefined holes in the array.
Use pop() or shift() instead.
original array is modified but length remains same
*/


// console.log('\n after perform op original array pushAndPop======', pushAndPop, pushAndPop.length);





const city = ['Amd', 'Surat', 'Vadodara']
const state = ['Gujarat', 'maharashtra', 'Sikkim']
const country = ['India', 'Aus', 'canada', 'Luxemburge']

// console.log('\n concat====', city.concat(state), state.concat(city)); //concat does not change the existing arrays. It always returns a new array
// console.log('\n concat multiple====', city.concat(' ', state, country), city.concat('+', state, '+',country));



const multiDimensional = [[1,2],[3,4],[5,6,7]];
// console.log('\n multiDimensional====', multiDimensional);

// console.log('\n flat = ', multiDimensional.flat()); //creates a new array with sub-array elements concatenated to a specified depth. original array is not modified

/*
Flattening an array is the process of reducing the dimensionality of an array. Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.
*/




const flatAry = [1, 2, 3, 4, 5, 6];
// console.log('\n flatAry flat====', flatAry.flat());
// console.log('\n flatMap = ',flatAry.flatMap(x => [x, x * 10])); //first maps all elements of an array and then creates a new array by flattening the array.
// console.log('\n here flatmap is nothing but the combination of map + flat = ', flatAry.map( i => [i, i*10]), flatAry.map( i => [i, i*10]).flat() );

//original array is not modified
// console.log('\n flatAry ==', flatAry);






//slice and splice
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log('\n original fruits = ', fruits);

// console.log('\n fruits splice = ', fruits.splice(2,0,'chiku'));
// console.log('\n fruits splice = ', fruits.splice(-1,0,'jamphal'));
// console.log('\n fruits splice = ', fruits.splice(-1,1,'graps'));
// console.log('\n fruits splice = ', fruits.splice(2,1,'boar'));
// console.log('\n fruits splice = ', fruits.splice(2,2,'kela', 'kiwi'));
// console.log('\n fruits splice = ', fruits.splice(0,2));
// console.log('\n fruits splice = ', fruits.splice(1,2));
// console.log('\n fruits splice = ', fruits.splice(1));
// console.log('\n fruits splice = ', fruits.splice());

// console.log('\n after op fruits = ', fruits);

/*
The first parameter (2) defines the position where new elements should be added (spliced in).
The second parameter (0) defines how many elements should be removed.
The rest of the parameters ("chiku" , "Kiwi") define the new elements to be added.
Original array is modified
splice is used for adding/removing elements in an array at any position.
it will return the removed elements in an array otherwise empty array.
*/



//toSpliced
const months = ["Jan", "Feb", "Mar", "Apr"];
// console.log('\n original months = ', months);

// console.log('\n months toSpliced = ', months.toSpliced(3,0,'may'));
// console.log('\n after op months = ', months);

/*
The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.
*/



const week = ['mon','tue','wen', 'thus', 'fri', 'sat', 'sun']
console.log('\n original week = ', week);

// console.log('\n week slice = ', week.slice(3));
// console.log('\n week slice = ', week.slice(1,3)); //end index is not included
// console.log('\n week slice = ', week.slice(0,3)); 
// console.log('\n week slice = ', week.slice(-2)); 
// console.log('\n week slice = ', week.slice(-3,-1)); 
// console.log('\n week slice = ', week.slice());


console.log('\n after op week = ', week);

/*
The slice() method slices out a piece of an array into a new array:
The slice() method does not remove any elements from the source array.
*/


/* what is difference between them ??
  push pop
  shift unshift
  splice slice
*/