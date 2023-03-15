/*

stuff node has that client side js doesn't have:
1. Access to the File System: Node.js can access the file system, which means it can read and write files on the server. This is not possible with client-side JavaScript because it runs in the browser sandbox, which restricts access to the local file system for security reasons.

2. Access to Low-Level System Resources: Node.js can access low-level system resources, such as network sockets and operating system APIs. This allows Node.js to perform tasks that client-side JavaScript cannot, such as creating a server, interacting with databases, and running system-level scripts.

3. Support for Asynchronous Programming: Node.js supports asynchronous programming, which means it can handle multiple requests simultaneously without blocking the execution of other requests. This is critical for building high-performance web applications that need to handle large volumes of requests efficiently. Client-side JavaScript can also support asynchronous programming, but it is typically used for different purposes, such as making HTTP requests or interacting with the DOM.

stuff client side js has that node js doesn't have

1. Access to the Document Object Model (DOM): Client-side JavaScript can interact with the Document Object Model (DOM), which is the programming interface for web pages. This means it can modify the content and behavior of a web page dynamically, responding to user actions or other events in the browser. Node.js does not have access to the DOM because it runs outside of the browser environment.

2. Access to Browser APIs: Client-side JavaScript has access to a range of browser APIs, such as the Web Audio API, the Canvas API, and the Geolocation API. These APIs allow web developers to create rich and interactive user experiences that are not possible with server-side JavaScript. Node.js does not have access to these browser-specific APIs.

3. Support for User Interface Frameworks: Client-side JavaScript is often used in conjunction with user interface (UI) frameworks such as React, Angular, or Vue.js, which provide tools for building complex user interfaces with reusable components. These frameworks typically run in the browser environment and are not available in Node.js, which is designed to run server-side JavaScript code.


*/
