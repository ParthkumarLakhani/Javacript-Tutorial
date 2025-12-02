// javascript execution context   =>  it nothing but the whatever file you've created how js will execute(run) that. 

/*For the run it will divided into two phase:

### Step-by-Step Explanation of Execution Context in JavaScript

I'll break this down into a comprehensive, step-by-step guide. We'll start from the absolute basics and build up to advanced details, including how it all works under the hood, with examples, diagrams (described in text), and common gotchas. This is based on the ECMAScript specification (ES6+), but I'll note any pre-ES6 differences where relevant. By the end, you'll understand exactly how JavaScript "thinks" when running your code.


#### Step 1: Understanding the Big Picture – What *Is* Execution Context?

**Definition** : An execution context is an **internal data structure** (like a "sandbox" or "environment") that JavaScript creates to track and manage the execution of a  specific unit of code. 
It holds:  
  - Variables and their values.
  - Functions and their definitions.
  - References to outer scopes (for closures).
  - The value of `this`.

**Why does it exist?** JavaScript is a single-threaded language (one main thread for execution), but it needs to handle nested code (e.g., functions calling functions) without losing track of where variables belong. Execution contexts ensure **isolation** (local vars don't pollute globals) and **inheritance** (inner code can access outer vars).

**Key Analogy**: Think of it like a stack of "to-do lists" on your desk. Each list (context) has its own items (variables), but you can reference previous lists if needed. The top list is always the one you're working on.

**When is it created?** Every time code *starts* running: once for the global script, and once per function call.

**Lifecycle**: Created → Used → Destroyed (popped from the stack when done).


#### Step 2: Types of Execution Contexts
There are three types, but we'll focus on the main two:

1. **Global Execution Context (GEC)**:
   - **What it is**: The "root" context for your entire script. It's created automatically when your JS file or `<script>` tag loads.
   - **Details**:
     - Only **one** GEC per JavaScript environment (e.g., per browser tab or Node.js process).
     - In browsers, it's bound to the `window` object (non-strict mode) or `undefined` (strict mode for modules).
     - In Node.js, it's the `global` object.
   - **Creation Trigger**: When the JS engine (e.g., V8 in Chrome) first parses the script.

2. **Function Execution Context (FEC)**:
   - **What it is**: Created every time a function is *invoked* (called), not just declared.
   - **Details**:
     - Can be **nested deeply** (e.g., func1 calls func2 calls func3 → 3 FECs stacked).
     - Arrow functions inherit `this` from the parent context (no new FEC for `this` binding).
     - Each FEC is unique to that function call, even if the same function is called multiple times (e.g., `myFunc()` twice → two separate FECs).
   - **Creation Trigger**: `functionName(arguments)` or `() => {}` invocation.

3. **Eval Execution Context** (Bonus – Rarely Used):
   - Created inside `eval()` or `new Function()`.
   - **Details**: Has its own scope, but it's dangerous (security risks, performance hit). Avoid it; use it only for dynamic code in trusted environments.
   - **Example**: `eval('var x = 10; console.log(x);')` creates a mini-context.


#### Step 3: The Two Phases of Every Execution Context

Each context (GEC or FEC) has **two distinct phases**. The JS engine processes them *before* and *during* code execution. This is why things like hoisting happen "magically."

1. **Creation Phase (Also Called "Hoisting Phase")**:
   - **What Happens**: The engine scans the entire code block *once* to set up the environment. No code runs yet – it's all about memory allocation.
   - **Sub-Steps** (in exact order):
     a. **Initialize the Variable Object (VO)**:
        - VO is an internal object (not directly accessible) that acts like a "dictionary" for identifiers.
        - **Hoist Function Declarations**: All `function foo() {}` are copied to the VO *immediately*, with their full definition. They get "hoisted" to the top.
          - Example: `console.log(foo()); function foo() { return 'Hi'; }` → Works because `foo` exists in creation phase.
        - **Hoist Variable Declarations**: All `var` declarations are added to VO with value `undefined`. No assignment yet.
          - `let` and `const` are also "hoisted" but placed in a **Lexical Environment** (separate from VO) and marked as uninitialized (Temporal Dead Zone – TDZ).
        - **Arguments Object**: For FECs, an `arguments` object is created, mapping parameter names to passed values (e.g., `function(x) {}` → `arguments[0] = x`).
     b. **Set Up the Scope Chain**:
        - A linked list of scopes: Current VO → Parent VO → ... → Global VO.
        - Used for **lexical scoping**: When resolving a var (e.g., `console.log(y)` inside a function), JS walks the chain upward.
        - **Details**: Each scope is a "LexicalEnvironment" record in ES spec terms. For blocks `{ let z; }`, block-scoped vars go in a new inner LexicalEnvironment.
     c. **Determine `this` Binding**:
        - **How it's set**: Depends on *how* the function is called.
          | Call Type | `this` Value (Non-Strict) | `this` Value (Strict) | Example |
          |-----------|---------------------------|-----------------------|---------|
          | Global Code | `window` (browser) or `global` (Node) | `undefined` | Top-level script. |
          | Function Call | `window`/`global` | `undefined` | `myFunc()` |
          | Method Call | Object owning the method | Object | `obj.method()` → `this = obj` |
          | Constructor | New instance | New instance | `new MyClass()` → `this = new obj` |
          | Explicit | Specified value | Specified value | `myFunc.call(obj)` → `this = obj` |
        - Arrow functions: `this` is **lexically bound** – inherits from enclosing context (no new binding).
        - Strict mode (`"use strict";`): Prevents accidental global `this`.
   - **Duration**: Happens in milliseconds, before any line executes.
   - **Gotcha**: This phase explains **hoisting**. `var x = 5;` becomes `var x; x = 5;` internally (for `var`).

2. **Execution Phase (Code Evaluation Phase)**:
   - **What Happens**: Line-by-line execution. The engine runs your code, assigning values and calling functions.
   - **Sub-Steps**:
     a. **Assign Values**: As lines run, update VO/LexicalEnvironment (e.g., `x = 5;` sets the value).
     b. **Function Calls**: Each call creates/pushes a *new* FEC (recursion possible).
     c. **Return/Finish**: When `return` or end-of-function hits, the context is **popped** from the call stack. Local vars are garbage-collected (unless referenced in closures).
     d. **Error Handling**: `try/catch` creates temporary contexts but doesn't push to stack.
   - **Duration**: As long as the code takes to run.
   - **Gotcha**: `let`/`const` in TDZ throw `ReferenceError` if accessed before declaration (e.g., `{ let x; console.log(x); }` → Error).


#### Step 4: The Call Stack – How Contexts Are Managed

- **What it is**: A data structure (LIFO stack) that holds *all active* execution contexts. JS is synchronous, so it processes one at a time from the top.
- **How it Works**:
  1. Engine starts: Push GEC to stack. Stack: `[GEC]`.
  2. Function call: Create new FEC → Push to top. Stack: `[GEC, FEC1]`.
  3. Nested call: Push FEC2. Stack: `[GEC, FEC1, FEC2]`.
  4. Return: Pop top context. Repeat until stack empty.
- **Text Diagram** (Stack Evolution for `foo(3)` where `foo` calls `bar()`):
  ```
  Before foo():    During foo() creation:    During bar() call:    After bar() returns:    After foo() returns:
  [ GEC ]          [ GEC, foo-FEC ]         [ GEC, foo-FEC, bar-FEC ]  [ GEC, foo-FEC ]        [ GEC ]
  ```
- **Tools to Inspect**: Browser DevTools (Chrome: Sources > Call Stack) or `console.trace()`.
- **Gotcha**: Stack overflow from deep recursion (e.g., 10k+ nested calls) → `Maximum call stack size exceeded`.


#### Step 5: Detailed Example – Walking Through Code

Let's dissect this code step-by-step:

```javascript
console.log('Global start');  // Line 1

var globalVar = 'I am global';  // Line 2

function outer(z) {  // Line 3
  console.log('Outer: ' + z);  // Line 4
  var outerVar = 'Outer local';  // Line 5
  
  function inner() {  // Line 6
    console.log(outerVar + ' seen in inner');  // Line 7 (closure!)
    console.log(globalVar);  // Line 8 (scope chain)
  }
  
  inner();  // Line 9
}

outer('Hello');  // Line 10
console.log('Global end');  // Line 11
```


**Step-by-Step Execution**:

1. **GEC Creation Phase**:
   - VO: `globalVar = undefined`, `outer = [function definition]`.
   - Scope Chain: Just GEC.
   - `this`: `window` (non-strict).

2. **GEC Execution Phase Starts**:
   - Line 1: Logs 'Global start'.
   - Line 2: Assigns `globalVar = 'I am global'`.

3. **outer() Call (Line 10)**:
   - **outer FEC Creation**:
     - VO: `z = 'Hello'`, `arguments = {0: 'Hello'}`, `outerVar = undefined`, `inner = [function definition]`.
     - Scope Chain: outer VO → GEC VO.
     - `this`: `window` (plain call).
   - Push outer FEC to stack: `[GEC, outer-FEC]`.

4. **outer FEC Execution**:
   - Line 4: Logs 'Outer: Hello'.
   - Line 5: Assigns `outerVar = 'Outer local'`.

5. **inner() Call (Line 9)**:
   - **inner FEC Creation**:
     - VO: No params, no locals (empty except hoisted).
     - Scope Chain: inner VO → outer VO → GEC VO.
     - `this`: `window`.
   - Push inner FEC: `[GEC, outer-FEC, inner-FEC]`.

6. **inner FEC Execution**:
   - Line 7: Resolves `outerVar` via scope chain (finds in outer) → Logs 'Outer local seen in inner'.
   - Line 8: Resolves `globalVar` via chain → Logs 'I am global'.

7. **inner Returns**: Pop inner-FEC. Stack: `[GEC, outer-FEC]`.

8. **outer Returns**: Pop outer-FEC. Stack: `[GEC]`.

9. **GEC Continues**:
   - Line 11: Logs 'Global end'.

**Output**:
```
Global start
Outer: Hello
Outer local seen in inner
I am global
Global end
```

- **Key Insight**: Closure in Line 7 – `inner` "remembers" outer's scope even after outer pops.

#### Step 6: Advanced Details and Edge Cases
- **Block Scopes (`let`/`const`)**: Since ES6, `{ let x = 1; }` creates a new LexicalEnvironment inside the current context. No hoisting to VO – TDZ applies.
  - Example: `console.log(x); let x = 5;` → `ReferenceError: Cannot access 'x' before initialization`.
- **Modules**: ES6 modules have their own GEC per module, with strict mode by default. Imports/exports affect scope chain.
- **Async Code**: Doesn't change contexts – `setTimeout(fn, 0)` pushes FEC later (microtask queue). Promises use job queues.
- **Event Loop Integration**: Contexts are pushed/popped synchronously; async callbacks create new contexts when their turn comes.
- **Differences Pre-ES6**: No `let`/`const` – all `var` hoisted fully. No block scopes.
- **Performance Tip**: Minimize deep nesting to avoid stack pressure.

#### Step 7: Common Pitfalls and Debugging
1. **Hoisting Confusion**: Always declare vars/functions at top.
2. **this Binding Issues**: Use arrow funcs for lexically correct `this`.
3. **TDZ Errors**: Declare `let`/`const` before use.
4. **Closure Leaks**: Retained contexts can cause memory leaks (e.g., event listeners holding large objects).
5. **Debug**: Use `debugger;` or DevTools to pause and inspect stack/scopes.


*/















/* Visualizing the Call Stack: Functions Entering and Exiting


Absolutely! Since we're building on the JavaScript execution context example from before (the one with `global` code, `outer(z)`, and `inner()`), I'll create a **text-based visualization** of the call stack. This simulates how execution contexts (GEC and FECs) are **pushed** (added) and **popped** (removed) as functions are called and return. It's like a vertical stack of plates—new ones go on top, and you remove from the top.

I'll use:
- **ASCII art** for the stack (boxes represent contexts).
- **Step numbers** tied to the code lines.
- **Arrows** to show movement (→ push, ↑ pop).
- **Colors via emojis** for clarity: 🟢 GEC (always at bottom), 🔵 FEC (functions).

This is "animated" in steps—read sequentially. If you'd prefer an actual image/diagram (e.g., generated via a tool like Mermaid or Draw.io), let me know for confirmation!

#### Quick Recap of the Code for Reference
```javascript
console.log('Global start');  // Line 1 (GEC)

var globalVar = 'I am global';  // Line 2 (GEC)

function outer(z) {  // Line 3 (declared in GEC)
  console.log('Outer: ' + z);  // Line 4 (outer FEC)
  var outerVar = 'Outer local';  // Line 5 (outer FEC)
  
  function inner() {  // Line 6 (declared in outer FEC)
    console.log(outerVar + ' seen in inner');  // Line 7 (inner FEC)
    console.log(globalVar);  // Line 8 (inner FEC)
  }
  
  inner();  // Line 9 (calls inner → new FEC)
}

outer('Hello');  // Line 10 (calls outer → new FEC)
console.log('Global end');  // Line 11 (GEC)
```

#### Step-by-Step Call Stack Visualization

**Initial State: Script Loads**
- Engine creates GEC (Global Execution Context).
- Stack starts empty → Push GEC.
- **What’s in GEC?** Hoisted: `globalVar = undefined`, `outer = [full function]`. Scope: Just itself. `this`: window.

```
Call Stack (Bottom to Top):
┌─────────────────┐  ← Top (current execution)
│   🟢 GEC        │
│ - globalVar: und│
│ - outer: [func] │
└─────────────────┘  ← Bottom
```

**Step 1: GEC Execution Begins (Lines 1-2)**
- Run top-level code. No functions called yet—stack unchanged.
- Assign `globalVar = 'I am global'`.
- Reach `outer('Hello');` (Line 10) → Time to call a function!

```
Call Stack:
┌─────────────────┐
│   🟢 GEC        │  ← Running Lines 1-2
│ - globalVar: 'I am global' │
└─────────────────┘
Output so far: "Global start"
```

**Step 2: Call outer('Hello') → Push outer FEC**
- **outer Creation Phase**: New FEC created. VO: `z = 'Hello'`, `outerVar = undefined`, `inner = [full function]`. Scope: outer → GEC. `this`: window.
- **Push to Stack**: Now top is outer FEC. GEC pauses.
- Stack grows: ↓ (new on top).

```
Call Stack:
┌─────────────────┐  ← Top (now outer executing)
│   🔵 outer FEC  │  → Just created/pushed
│ - z: 'Hello'    │
│ - outerVar: und │
│ - inner: [func] │
├─────────────────┤
│   🟢 GEC        │  → Paused
└─────────────────┘
```

**Step 3: outer Execution (Lines 4-5)**
- Run `console.log('Outer: Hello')` → Output.
- Assign `outerVar = 'Outer local'`.
- Reach `inner();` (Line 9) → Another call!

```
Call Stack:
┌─────────────────┐
│   🔵 outer FEC  │  ← Running Lines 4-5
│ - z: 'Hello'    │
│ - outerVar: 'Outer local' │
└─────────────────┘  (inner not called yet)
├─────────────────┤
│   🟢 GEC        │
└─────────────────┘
Output so far: "Global start" + "Outer: Hello"
```

**Step 4: Call inner() → Push inner FEC**
- **inner Creation Phase**: New FEC. VO: Empty (no params/locals). Scope: inner → outer → GEC. `this`: window.
- **Push to Stack**: Deepens the stack. outer pauses.
- Notice: inner can access `outerVar` (closure via scope chain) and `globalVar`.

```
Call Stack:
┌─────────────────┐  ← Top (inner executing)
│   🔵 inner FEC  │  → Just pushed
│ - No locals     │
│ - Scope: inner→outer→GEC │
├─────────────────┤
│   🔵 outer FEC  │  → Paused
│ - outerVar: 'Outer local' │
├─────────────────┤
│   🟢 GEC        │
└─────────────────┘
```

**Step 5: inner Execution (Lines 7-8)**
- Resolve `outerVar` (looks up scope chain → finds in outer).
- Logs: "Outer local seen in inner" + "I am global".
- inner finishes → **Pop inner FEC** (↑ remove top).

```
Call Stack (During inner run):
┌─────────────────┐
│   🔵 inner FEC  │  ← Running Lines 7-8
└─────────────────┘
├─────────────────┤
│   🔵 outer FEC  │
└─────────────────┘  (etc.)

After Pop (inner done):
┌─────────────────┐  ← Back to outer
│   🔵 outer FEC  │  → Resumed
└─────────────────┘
├─────────────────┤
│   🟢 GEC        │
└─────────────────┘
Output so far: + "Outer local seen in inner" + "I am global"
```

**Step 6: outer Finishes → Pop outer FEC**
- outer has no more code → Returns (implicitly).
- **Pop outer**: Stack shrinks. Resume GEC at Line 11.

```
Call Stack (After outer pop):
┌─────────────────┐  ← Top: GEC resumes
│   🟢 GEC        │  → Running Line 11
└─────────────────┘
Output final: + "Global end"
```

**Final State: Script Ends**
- GEC finishes → Entire stack empties (browser/Node keeps GEC alive for event loop, but locals are done).
- Total pushes: 2 FECs. Pops: 2. GEC stays until page unload.

```
Call Stack: [Empty]  (but GEC lingers in memory for globals)
```

#### Key Visual Insights
- **Growth/Shrink**: Stack only grows downward (new contexts on top) and shrinks from top. LIFO!
- **Depth**: Max depth here = 3 (GEC + outer + inner). Too deep? → Stack overflow error.
- **What Happens During Pauses?** Lower contexts "freeze"—their vars stay intact (e.g., `outerVar` accessible to inner).
- **Async Twist (Bonus)**: If `setTimeout(inner, 0)` instead of direct call, inner FEC pushes *later* (after current stack clears), via event loop. Stack would pop outer first, then push inner on next tick.

*/

