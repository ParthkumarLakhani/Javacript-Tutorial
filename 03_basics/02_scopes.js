//block scope and global scope


function addOne(num1){   //normal function
  return num1 + 1
}
// console.log('\n addOne ==',addOne(5));


// console.log('\n addTwo ==',addTwo(5));
const addTwo = function(num1){     //function expression
  return num1 + 2
}
// console.log('\n addTwo ==',addTwo(5));



/*
What is global scope in window ??
What is global scope in node ??

window and node both have different global scope.             important

| Concept               | Browser                 | Node.js                     |
| --------------------- | ----------------------- | --------------------------- |
| Global object         | `window`                | `global`                    |
| `var` global variable | becomes window property | stays in module, not global |
| `let`, `const` global | not on window           | not on global               |
| Scope type            | Script scope            | Module scope                |
| DOM APIs              | Available               | Not available               |

In browsers, the global scope is window, and var variables attach to it.
In Node.js, each file is a module, so variables don’t leak globally, and the global object is global, not window.
*/