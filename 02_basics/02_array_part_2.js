const fruits = ["graphs","Apple", "Orange","kiwi", "guava","Apple", "Mango","ojk"];
// console.log('\n original array fruits ==', fruits, fruits.length);

// console.log('\n indexOf fruits = ', fruits.indexOf('apple'), fruits.indexOf('Apple'), fruits.indexOf('Apple',2), fruits.indexOf('Apple',-1), fruits.indexOf('Apple',-3));
// console.log('\n lastIndexOf fruits = ', fruits.lastIndexOf('apple'), fruits.lastIndexOf('Apple'), fruits.lastIndexOf('Apple',1), fruits.lastIndexOf('Apple',3), fruits.lastIndexOf('Apple',-1), fruits.lastIndexOf('Apple',-5));   

//* lastIndex

/*
indexOf
  first occurrence of a element, or it returns -1 if not found and second parameter = if index +ve then start searching at beginning if -ve then search start form end.
  it usage forward linear search. complexity O(n)  
LastIndexOf
  last occurrence of a element, or it returns -1 if not found and second parameter = The index at which to searching serch start from backward
  it usage backward linear search. complexity O(n) 

*/
//f t t f t f
// console.log('\n includes = ', fruits.includes('apple'), fruits.includes('Apple'), fruits.includes('Apple',1), fruits.includes('Apple',7), fruits.includes('Apple',-3), fruits.includes('Apple',-1));
//includes return true and false, second param start searching from left to right

/*
in operator - Used to check if a property exists in an object or an index exists in an array.
includes() method - Used to check if a value exists inside an array or string.
*/

// console.log('\n find = ', fruits.find((value, index, array) => {
//   if('Apple' == value){
//     return value
//   }
// }));
// console.log('\n findIndex = ', fruits.findIndex((value, index, array) => {
//   if('Apple' == value){
//     return index
//   }
// }));

/*
The find() method returns the value of the first array element that passes a test function. if no value then returns undefined.
The findIndex() method returns the index of the first array element that passes a test function. if there no index returns -1.
*/

// console.log('\n findLast = ', fruits.findLast( x => x == 'apple'));
// console.log('\n findLastIndex = ', fruits.findLastIndex( x => x == 'apple'));

/*
ES2023 added the findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition. if no value then returns undefined.
The findLastIndex() method finds the index of the last element that satisfies a condition if there no index returns -1.
*/




/*Important Note

All of these use forward or backward linear search:

Forward Search:
  indexOf()
  includes()
  find()
  findIndex()
  some()
  every()
  forEach()
  map()
  filter()
  reduce()


Reverse Search: 
  lastIndexOf()
  findLast()
  findLastIndex()
  reduceRight()


JavaScript arrays do not use:
❌ Binary search
❌ Hash-based search
❌ Tree search
❌ Index structures

Because they are not fixed-size and not sorted.


***************important**************************
If you need fast searching (O(1) or O(log n))


Great — I’ll explain all three in a clean, simple, practical way:

✅ 1. When to use Set (O(1) search)
  ✔ Search very fast (O(1))
  ✔ No duplicates
  ✔ Best for: Checking existence

  Example:
    const set = new Set(["parth", "amit", "parth"]);

    console.log(set.has("parth"));  // true   (O(1))
    console.log(set.has("raj"));    // false

  When to use:
    Want fast searching
    Want no duplicate values
    Need a simple membership test

  Examples:
    Check if user already liked a post
    Check if product already in cart
    Remove duplicates from array


✅ 2. When to use Map (O(1) lookup)
  Map is like an object but faster and allows any key type.

  ✔ Search by key: O(1)
  ✔ Keys can be:
      numbers
      strings
      objects
      arrays
      functions

  Example:

    const map = new Map();
    map.set(1, "one");
    map.set("name", "parth");

  console.log(map.get("name"));  // "parth"

  When to use:
    Key-value pairs
    Fast lookup needed
    Frequent insert/delete operations

  Examples:
    Cache system
    Counting occurrences
    Storing metadata for IDs


✅ 3. Sorted array + Binary Search (O(log n))

  If you need very fast search and want to keep order:
  ✔ Searching → O(log n)
  ✔ Maintaining sorted order → insertion is slow (O(n))

  Binary Search Example:
  function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (arr[mid] === target) return mid;
      else if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    return -1;
  }

  const arr = [1, 3, 5, 7, 9];
  console.log(binarySearch(arr, 7)); // returns index

  When to use:
    Data is sorted
    Searching performance important
    You don’t modify the array very often

  Examples:

    Search in a sorted list of users by ID
    Search in sorted timestamps
    Search in sorted database-like arrays


🧠 Which one should you use?
Use Case	                              Best Choice	                                     Why

Fast search	                             Set / Map	                                     O(1)
No duplicates	                           Set	                                           Automatically unique
Key-value store	                         Map	                                           Efficient
Sorted data + fast reading	             sorted array + binary search	                   O(log n)
You modify data frequently	             Set / Map	                                     Insert/Delete also O(1)



--------Extra: How V8 Stores Arrays (bonus)

  I can explain if you want:

    Fast elements (dense arrays → very fast)
    Holey arrays (arrays with empty indexes → slow)
    Dictionary elements (large / sparse arrays → slowest)
    This helps you write high-performance JS.

*/



//*************************************************** alphabetically sort*****************/

const fruit = ["graphs","Apple", "Orange","kiwi", "apple", "guava","Apple", "Mango","ojk"];
// console.log('\n original fruit = ', fruit);

// const basicSort = fruit.sort()
// console.log('\n basicSort = ', basicSort); //old method - update original ary   // sorts an array alphabetically[uppercase,lowercase]

// const reverseSort = fruit.reverse()
// console.log('\n reverseSort = ', reverseSort); //old method - update original ary  // reverses the elements in an array, not descending order

// const reverseDescOrder = fruit.sort().reverse()
// console.log('\n reverseDescOrder = ', reverseDescOrder); //old method - update original ary  // first sort in ascending order then reverse to get descending order

// const reverseWithOther = fruit.sort( (a,b) => {
//   if(a < b) return 1;
//   if(a > b) return -1;
//   return 0;
// })
// console.log('\n reverseWithOther ===', reverseWithOther);


const fruit1 = ["graphs","Apple", "Orange","kiwi", "apple", "guava","Apple", "Mango","ojk"];
// console.log('\n fruit1 = ', fruit1);

// const toSort = fruit1.toSorted()
// console.log('\n toSort = ', toSort);

// const toReverse = fruit1.toReversed()
// console.log('\n toReverse = ', toReverse);

/*
toSorted() - first method creates a new array, keeping the original array unchanged, while the sort() method alters the original array.
toReversed() - first method creates a new array, keeping the original array unchanged, while the reverse() method alters the original array.
*/

// console.log('\n after op fruit ==', fruit);
// console.log('\n after op fruit1 ==', fruit1);



//******************************************************** Numeric sort*****************/

const num = [10, 110, 25, 15, 50, 10];
// console.log('\n original num = ', num);

// const numSort = num.sort()
// console.log('\n numSort = ', numSort);  // the sort() function sorts values as strings.

/*
because of string, If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1" -  produce incorrect result 
therefore we write a custom sorting ??
*/

// const numSort = num.sort( (a,b) => {
//   if(a > b) return 1
//   if(b > a) return -1
//   return 0
// })

// const numSort = num.sort( (a,b) =>  a - b)
// const numSort = num.sort( (a,b) =>  b - a)

// console.log('\n numSort ==', numSort);

/*
| Version                    | Performance            | Readability  | Usage                                |
| -------------------------- | ---------------------- | ------------ | ------------------------------------ |
| `if (a > b) return 1; ...` | Slower (3 comparisons) | More verbose | When sorting strings or custom logic |
| `a - b`                    | Faster (1 subtraction) | Very clean   | Best for numeric sorting             |


Both comparators sort numbers in ascending order.
  The long version uses conditional checks:
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;

  The short version (a - b) is faster and cleaner because:
  - It performs only one arithmetic operation
  - No branching (if/else)
  - JavaScript's sort() expects a negative, positive, or zero value,
    which subtraction naturally provides.

  Therefore, prefer (a - b) when sorting numbers:
    num.sort((a, b) => a - b);

  Use the longer comparator only when sorting strings or objects with custom logic.
*/

// console.log('\n after op num = ', num);




//------------------------------------------------combine sort----------------------------------

const allItems = [ "graphs","Apple", "8apple", "Orange","kiwi", 110, 25, 15, "guava","Apple", "Mango","ojk", 50, 10];
// console.log('\n original allItems ==', allItems);  

const sortedItems = allItems.sort()

const sortedItemsd = allItems.sort( (a, b) => a - b )

const sortedItem = allItems.sort( (a, b) => {
  if(a > b) return 1
  if(b > a) return -1
  return 0
})
// console.log('\n sortedItems ==', sortedItems);  
// console.log('\n sortedItemsd =s=', sortedItemsd);  
// console.log('\n sortedItem ==', sortedItem);  

/*
JavaScript's sort() behaves differently depending on the comparator:

1) sort()
   - Default behavior
   - Converts ALL items to strings
   - Sorts using lexicographic (dictionary) order
   - Numbers like 10, 110, 25 become "10", "110", "25"
   - Good for strings; NOT reliable for numeric or mixed arrays.

2) sort((a, b) => a - b)
   - Numeric ascending sort
   - Works only when ALL values are numbers
   - If strings exist, subtraction gives NaN → unpredictable order

3) sort((a, b) => a > b ? 1 : -1)    as sortedItem
   - Uses JS comparison operators
      If values are numbers → numeric comparison
      If values are strings → string comparison          
      If values are mixed (number + string):
      → JavaScript converts both to strings
      → compares alphabetically
   - Results in alphabetical sorting, not numeric

In summary:
- default sort(): alphabetical (string-based) sort
- a - b: numeric sort (numbers only)
- custom if/else: still alphabetical when array contains strings

Mixed arrays (strings + numbers) will ALWAYS sort alphabetically
unless a custom comparator is written to explicitly handle both types.
*/



/*
NOTE:
`sort().reverse()` is faster than using a custom compare function
because:

1. `sort()` uses the built-in native (C++) lexicographic comparator.
2. `.reverse()` is extremely fast (simple pointer swap).
3. No JavaScript callback is invoked during sorting.

However, `sort().reverse()` should be used ONLY for string arrays.
JavaScript's default sort converts values to strings, so it gives
incorrect results for numbers or objects.

Use a custom comparator `sort((a, b) => b - a)` when:
- Sorting numbers
- Sorting objects by a property
- Implementing custom sorting rules

Performance Summary:
- `sort().reverse()` → Fastest, but only correct for strings
- `sort((a,b)=>...)` → Slower (JS callback overhead), but necessary for numbers/objects





✅ 1. Does sort() use bubble sort? → NO ❌

  JavaScript engines (V8, SpiderMonkey, Chakra) do NOT use bubble sort.
  Bubble sort is too slow (O(n²)).

  ✔ Modern JavaScript uses Timsort (Hybrid of Merge Sort + Insertion Sort)
  Why Timsort?
    Very fast in real-world data
    O(n log n) worst case
    Extremely optimized
    Used in Python, Java, V8 (Chrome/Node.js), etc.


✅ 2. Does reverse() use sorting? → NO ❌

  reverse() does not sort anything.
  It only swaps elements:

  Internally:
  swap(0, n-1)
  swap(1, n-2)
  swap(2, n-3)
  ...

  So reverse() is:O(n)
  Simple pointer swaps

  Not related to bubble sort or any sort

*/





//----------------------------------------------------------iteration------------------------------------------------

const aryIteration = [ 10, 12, 40, 5, 8, 20, 5 ]
// console.log('\n original aryIteration ==', aryIteration);

// const mapAry = aryIteration.map( (x) => x * 2 )
// console.log('\n mapAry ==', mapAry);

// const mapAry = aryIteration.filter( n => n % 2 == 0 )
// console.log('\n mapAry ==', mapAry);

// const mapAry = aryIteration.reduce( ( acc, x) => acc + x, 0 )
// console.log('\n mapAry ==', mapAry);


// console.log('\n after op aryIteration ==', aryIteration);


/*
  map: creates a new array by applying a function to each element of the original array.
    return new array
    original array not modified
    Used when you want to transform data.

  filter: creates a new array containing only the elements that pass a condition.
    Returns a new array with a smaller or equal length.
    original array not modified
    Used for filtering data.
  
  reduce: reduces the entire array to a single value.
    original array not modified
    Returns one single output (number, object, array — anything)
    Used for: Sum, Average, Counting, Building objects, Flattening arrays



🔧 Internal Working (How JavaScript executes them)
    map():
      Creates a new array.
      Loops over each element.
      Applies callback.
      Pushes returned value to new array.

    filter():
      Creates a new empty array.
      Loops over each element.
      If callback returns true, element is pushed to new array.

    reduce():
      Takes initialValue → stores in accumulator.
      For each element:
      Passes accumulator + currentValue to callback.
      Result becomes new accumulator.

      After loop → returns final accumulator.    
*/





//----------------------------------------------spread and rest-------------------------------------------

const newSpreadArray = [ 15, 10, 80, 50, 10 ]
// console.log('\n original spreadOP ==', newSpreadArray);

const aryOp = [100,...newSpreadArray]
// console.log('\n original aryOp ==', aryOp);


// console.log('\n after spreadOP ==', newSpreadArray);

/*
  original array is not modified
  spread: Expand/unpack values from an array or object.
    Used When:
      Copying arrays
      Merging arrays
      Expanding arrays into function arguments
      Cloning objects
      Merging objects

  const arr = [1,2,3];
  console.log(...arr);

  Rest: Collect / pack remaining values into an array.
    Used When:
      Function parameters
      Destructuring arrays
      Destructuring objects

  const [first, ...rest] = [10,20,30,40];
  console.log(rest); // [20,30,40]

  const { name, ...details } = { name: "Parth", age: 22, city: "Amd" };
  console.log(details); // { age: 22, city: "Amd" }

*/


// also see the typed array
