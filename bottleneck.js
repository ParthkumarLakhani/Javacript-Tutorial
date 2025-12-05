//problems

/*
In JavaScript, creating objects or strings (e.g., { name: "parth" } or "hello") is blazing fast—typically nanoseconds per operation, thanks to V8's optimizations like inline allocation and garbage collection. 
It's not worth optimizing unless you're doing millions in a hot path (rare outside games/ML).

Real Bottlenecks to Target:
  Loops: Unoptimized iterations (e.g., for over large arrays with heavy ops like regex) can spike CPU. Fix: Use map/filter/reduce, avoid while, or Web Workers.

  DOM Access: Querying/updating elements (e.g., document.getElementById in loops) triggers reflows/repaints, costing ms. Fix: Batch changes (e.g., via DocumentFragment), use virtual DOM (React/Vue), or CSS for animations.

  Network I/O: Async fetches (e.g., fetch()) add latency (100ms+ roundtrips). Fix: Cache results, use CDNs, or optimistic UI updates.

TL;DR: Profile with Chrome DevTools (Performance tab) to spot these—80% of slowdowns are here, not creation. Focus there for 10x gains! 
*/



// 🧠 Where performance problems really come from?

/*
✔ 1. Loops with heavy logic
    Anything that runs thousands or millions of times becomes slow.

    Example:
        for (let i = 0; i < 1_000_000; i++) {
          // heavy computation here
        }
  Loops amplify cost.


  
✔ 2. DOM access / DOM manipulation (Browser)

    DOM operations are always slower than JS operations.

    Example:

      document.getElementById("name")
      element.appendChild(node)
      element.style.color = "red"

  DOM is external to JS engine → communication is slow.



✔ 3. Network I/O

    Examples: 

      API requests (fetch, Axios)
      Database calls
      File reads

    These are orders of magnitude slower than any JS code.

    JS: nanoseconds – microseconds
    Network I/O: milliseconds – seconds  



✔ 4. Unnecessary re-renders or layout thrashing

  React re-renders, CSS layout recalculations, large list rendering — all slower than normal JS.



  ✔ 5. Large data processing

    Examples:

      Big arrays (10k+ items)
      JSON parsing/stringifying large objects
      Sorting large data sets




🎯 So what does the tip really mean?
💡 Don’t waste time optimizing small things like:

    {} vs new Object()
    "abc" vs new String("abc")
    variable declaration style
    minor micro-optimizations

These won’t improve real-world performance.

Instead, focus on:

  ✔ Optimizing loops
  ✔ Reducing DOM operations
  ✔ Caching results
  ✔ Avoiding repeated network calls
  ✔ Using efficient algorithms
  ✔ Pagination / Lazy loading large data
  ✔ Avoiding unnecessary computation inside loops or renders
  
  

🧩 One-line summary

JavaScript is extremely fast at creating objects and values. The real performance problems come from repeated work (loops), expensive operations (DOM, network), and large data processing — not from small one-time creations.

*/





//How can we improve them ?? -- also check the pdf

/*
✅ 1. Improve Loop Performance

    ❌ Bad
    for (let i = 0; i < arr.length; i++) {
      process(arr[i]); 
    }

    ✔ Good — Cache .length
    for (let i = 0, len = arr.length; i < len; i++) {
      process(arr[i]);
    }

  ✔ Better — Use efficient looping methods
    Use for-of for readability
    Use for for max speed
    Avoid .map(), .filter(), .reduce() for heavy loops — they create new arrays every time.

  ✔ Best — Break early
    If possible, use:
      break;
      continue;
      return;

    to exit loop early → saves huge time.



✅ 2. Reduce DOM Access (Browser)

    DOM is slow because it is outside JS engine.

    ❌ Bad
    document.getElementById("name").innerText = "Parth";
    document.getElementById("name").style.color = "red";

    ✔ Good — Cache the element
    const el = document.getElementById("name");
    el.innerText = "Parth";
    el.style.color = "red";


  ✔ Batch DOM updates

    Use DocumentFragment, not multiple appends.

    const frag = document.createDocumentFragment();
    for (let i = 0; i < 1000; i++) {
      const li = document.createElement("li");
      li.textContent = i;
      frag.appendChild(li);
    }
    ul.appendChild(frag);

  ✔ Avoid forced reflows

  Do not read then write then read CSS repeatedly.
  
  

✅ 3. Reduce Network I/O
    ✔ Cache API results
    let cache = {};

    async function getUser(id) {
      if (cache[id]) return cache[id];

      const res = await fetch(`/api/users/${id}`);
      const data = await res.json();
      cache[id] = data;
      return data;
    }

    ✔ Debounce API calls

    Example: search input

    let timer;
    function debounce(fn, delay = 300) {
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
      };
    }

    ✔ Batch API calls

  Avoid calling API 50 times — batch in single request if possible.
  
  

✅ 4. Optimizing Large Data / Arrays
    ✔ Avoid unnecessary copying

    Bad:    const newArr = arr.map(x => x)
    Good:   Use original array if possible.

    ✔ Use efficient algorithms

    Sorting large arrays? Use .sort() but compare function optimized
    Searching large data? Prefer sets/maps

    const set = new Set(arr);
    set.has(value); // O(1)

    ✔ Lazy load heavy data

  Don’t load 10k items at once — load 20 at a time (pagination or infinite scroll).




✅ 5. Memory Optimization
    ✔ Reuse objects instead of creating new ones
    const temp = {};
    for (...) {
      temp.value = compute();
    }

    ✔ Use arrays of fixed size inside loops

  Dynamic arrays trigger reallocation.



✅ 6. Debounce & Throttle in UI

    Heavy event handlers kill performance.

    Use debounce or throttle for:
      scroll
      resize
      mouse move
      keyup  



✅ 7. Web Rendering Optimization
    ✔ Avoid unnecessary UI updates

    Use frameworks’ optimization tools:
      React → useMemo, memo, useCallback
      Vue → computed properties
      Svelte → stores

    ✔ Virtualize long lists

    Example: show only 20 items in screen instead of 10k.
      Libraries:
      react-window
      react-virtualized



✅ 8. Use Web Workers for CPU-heavy work

    Long loops block UI:
      // Do image processing / big loops in worker thread
      
      





| Area           | Improvement                                 |
| -------------- | ------------------------------------------- |
| **Loops**      | Cache length, avoid new arrays, break early |
| **DOM**        | Cache nodes, batch updates, avoid reflow    |
| **Network**    | Cache, debounce, batch                      |
| **Large Data** | Use Set/Map, avoid copying, use pagination  |
| **Rendering**  | Memoize, virtualize, avoid re-renders       |
| **Memory**     | Reuse objects, avoid large arrays           |
| **Threading**  | Use web workers for heavy tasks             |


*/




