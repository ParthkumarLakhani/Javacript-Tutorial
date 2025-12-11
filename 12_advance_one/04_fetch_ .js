

/*
The fetch() method of the Window interface starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available.
The promise resolves to the Response object representing the response to your request.

fetch(resource)
fetch(resource, options)


Important: 
A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. 
A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.

question from above line ??
Q  when you request from fetch and you get code 404 so they got in resolve or reject ??
A  you always get in as response. that's not error.
   error when occure while they can't request then you get error.


*/





/* How fetch() works — step by step chatgpt

1. You call fetch() and it immediately returns a Promise.

const p = fetch(url, options);

The call is synchronous: fetch() returns a Promise right away. The actual network work happens in the browser environment (not on the JS main thread).


2.Browser prepares the request.
  The Fetch API builds the HTTP request from the URL and options (method, headers, body, mode, credentials, cache, redirect, etc.). If you provide an AbortSignal, it’s attached now.


3.The request is handed off to the networking layer (Web/OS).
  The browser performs DNS lookup, opens TCP/TLS, sends request bytes. This happens asynchronously outside the JS main thread (using browser networking threads/APIs).


4.Meanwhile your JS keeps running.
  Because fetch() returned a Promise immediately, the rest of your script runs — await only pauses inside an async function, it doesn’t block the main thread.


5.The server responds and the browser receives response headers.
  Once response headers arrive, the browser constructs a Response object (status, headers, and a body stream). At this point the fetch Promise resolves with that Response object — even if the response body isn’t fully downloaded yet.
  
  Important: fetch() resolves for HTTP responses (200, 404, 500, etc.). It rejects only on network-level failures (DNS, CORS block, connection lost, TLS error) or when the request is explicitly aborted.


6.You access the body (consuming it).
  Methods like response.json(), response.text(), response.blob(), or response.arrayBuffer() read/parse the body and return Promises. These Promises resolve when the body data has been fully read/parsed (or reject on parse errors).

  Example:

  fetch(url)
    .then(response => response.json())   // returns a Promise that reads & parses body
    .then(data => console.log(data))
    .catch(err => console.error(err));


7.Streaming option (if used)
  response.body is a ReadableStream. You can read chunks as they arrive (useful for large downloads, progress UI, streaming parsers). Consuming the stream is asynchronous.


8.Microtasks & callbacks
  Promise resolution handlers (.then / catch) run as microtasks. They queue to run as soon as the current stack finishes and before the next macrotask (e.g., setTimeout). That’s why .then() handlers run quickly after resolution.


9.Error and status handling nuance

  fetch() Promise does not reject on HTTP error statuses. You must check response.ok or response.status manually to treat non-2xx as errors:

  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();


  fetch() rejects on network errors and on CORS failures where the browser blocks the request.


10.Abort / timeout
  Use AbortController to cancel a fetch:

  const ctrl = new AbortController();
  fetch(url, { signal: ctrl.signal });
  // later:
  ctrl.abort(); // fetch rejects with an AbortError


11.CORS, credentials, and security
  The mode and credentials options control CORS and cookies. A cross-origin fetch may succeed or be blocked depending on server CORS headers. Browser enforces these before exposing response body to your JS.


12.Service Workers, cache, and more
  Service Workers can intercept fetch requests and respond from cache, modify requests, or forward them to network. cache option affects how the browser uses HTTP cache.



Practical timeline (simple)

  fetch() called → returns Promise (p) immediately.
  Browser sends request asynchronously.
  JS continues executing other code.
  Server responds → browser constructs Response → p resolves with Response.
  You call response.json() → returns Promise that resolves when body fully read and parsed.
  .then() handlers (microtasks) run.



*/