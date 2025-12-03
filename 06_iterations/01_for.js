// for loop

const ary = [ 'parth', 'patel', 22, 'amd' ]

const person = {
  name: "lakhani",
  pincode: 380059,
  address: "thaltej, amd - 380059"
}



// for(let i = 0; i <= 5; i++ ){
//   console.log(i);
// }


// for (let key in obj) {
//   console.log(key, obj[key]);
// }

// for (let value of arr) {
//   console.log(value);
// }

// arr.forEach((item, index) => {
//   console.log(item);
// });



// let i = 1;
// for (; i < 5; i++) {
//   console.log(i);
// }


// for (let i = 0; ; i++) {
//   // if (i > 3) 
//   if (i > 3) break;
//   console.log(i);
// }
//what is dieference between this above line


// for (let i = 0; i < 3; ) {
//   console.log(i);
//   i++;
// }


// for (;;) {
//   console.log("it will throw error");
// }

// for(;1>2;){  // 1 < 2
//   console.log('fall up');
// }
//please check above line and run this


// outerLoop:
// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     if (j === 1) break outerLoop;
//   }
// }


// for (let i = 0, j = 5; i < j; i++, j--) {
//   console.log(i, j);
// }




/*

| Loop Type            | Used For |
|----------------------|----------|
| Classic for          | General looping with counter |
| for…in               | Object keys, array indexes (not recommended on arrays) |
| for…of               | Iterable values (arrays, strings, sets, maps) |
| forEach              | Array iteration with callback |
| No init              | When counter already declared |
| No condition         | Manual breaking inside |
| No increment         | Custom increment inside loop |
| Infinite loop        | Continuous execution |
| Labeled loop         | Breaking nested loops |
| Multi-variable loop  | Multiple counters together |

*/


/*
| Loop Type        | What It Loops Over                     | Best Use Case                                   | Can Break? | Notes |
|------------------|----------------------------------------|-------------------------------------------------|------------|-------|
Classic for        | Numbers / counters                     | When you need full control (start, end, step)   | Yes        | Most flexible; good for index-based loops. |

for...in           | Keys of an object (or array indexes)   | Looping over object properties                  | Yes        | Not recommended for arrays (order not guaranteed). |

for...of           | Values of an iterable (arrays, strings) | Looping cleanly over values                    | Yes        | Cannot loop over plain objects without Object.values(). |

forEach            | Array elements                         | Simple array loops where break/continue not needed  | ❌ No   | Cannot use break/continue; async handling tricky. |

For (no init)      | Depends on outside variable            | When counter is declared outside loop           | Yes        | Rare, but useful if counter is shared. |

For (no condition) | Runs until you break manually          | Manual stopping logic                           | Yes        | Acts like a controlled infinite loop. |

For (no increment) | Loop body controls the counter         | When incrementing depends on logic inside loop  | Yes        | Good for complex update logic. |

Infinite for (;;)  | Infinite loop                          | Event loops, polling, serverside tasks          | Yes (must break) | Dangerous if no break. |

Labeled for        | Tagged loop for breaking outer loops   | Breaking out of nested loops                    | Yes        | Avoid unless nested loops are required. |

Multi-variable for | Multiple counters                      | Two counters changing together                  | Yes        | Cleaner than managing counters separately. |

*/


let counter = 3

// if(1){
//   if(1){
//     if(counter == 3){
//       break
//     }
//   }
// }



// if (1) {
//   for (let i = 1; i <= 5; i++) {
//     if(1){
//       if (i == 3) {
//         console.log(`i is 3`);
//         break
//       }
//       console.log(`i is outside`,i);
//     }
//   }
//   console.log(`i is outside`);
// }


/* Break and Continue

| Feature         | break                                  | continue                                   |
|-----------------|----------------------------------------|--------------------------------------------|
| What it does    | Ends loop immediately                  | Skips current iteration only               |
| Loop ends?      | Yes                                    | No                                         |
| Next iteration? | No                                     | Yes                                        |
| Use case        | Stop searching / exit early            | Skip unwanted values but continue loop     |
| Works in        | for, while, do-while, switch           | for, while, do-while                       |
| Not allowed in  | forEach                                | forEach                                    |


A 'break' statement can only be used within an enclosing iteration or switch statement

A 'continue' statement can only be used within an enclosing iteration statement.

*/




