1. Explain Node and V8 in your own words ? 
// Answer here...
=> Output : hello World

2. Explain steps in REPL(here) and command to start REPL ?
// Answer here...
=> It is basically a loop that keeps running once it is started and keeps running until it is stopped. REPL means read,evaluate,print,loop. Which means that once the command to run some code is written in the console it first reads the code,evaluates it and processes it and then prints the output of the code into the code and lastly the loop keeps checking if there is more code to run. To run a code in REPL mode use the command node and it'll enter the REPL mode. It works exactly the same way the console works on a browser.

3. Run `index.js` in the same directory as script writer using `node FILE_NAME.js` and output result of console here.
=> Output : hello World;

4. Require fs module and read `theory.md` using fs.readFile method in index.js file.

5. Explain Buffer and different methods to create a buffer ?
=> When the data is processed there is a minimum and a maximum amount of data that can be processed.Sometimes what happens is that the rate at which the data arrives is greater than the rate at which the data is consumed and the excess data needs somewhere to wait for it's turn to be processed and needs to wait for a certain amount of time before being processed. The waiting area where the data waits is what is called as 'Buffer'. It is a small physical location in your computer, usually in the RAM, where data are temporally gathered, wait, and are eventually sent out for processing during streaming.
Different methods to create Buffer are:
Empty Buffer => let buff = new Buffer;
Buffer with content => let buff = Buffer.from(content);
Buffer with a particular size  => Buffer.alloc(size);

6. What is blocking code ? How is it different from non-blocking/async codes ? Correct blocking code in index.js to run asynchronously ?
// Answer here ...
Blocking code are those who disrupt the flow of execution i.e; as we all know javascript is a compiled language which means that it first compiles the code from top to bottom and then starts the execution line by line. As the code is run line by line there are some codes which takes some time to execute and in turn delays the code execution of the whole code while there are some codes which takes time to execute but don't delay the excution of the code and let's other codes execute first and then get's executes as soon as other finish executing. They are known as 'Non-blocking code'.

7. Request from browser `https://altcampus.io` and copy request, response and general headers into answer.js.

8. Parse the URL `http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4` using `url` module's parse method and write output in answer.js

9. parse the query object as well from above url using `url.parse(url, true)` and output result in answer.js

10. create a file `math.js`
  1. Export variables and functions
    - define a const pie = 3.14
    - define functions to add and multiply 2 numbers
    - export it from math.js
    - require in index.js and console the output by executing it there.
```js
// math.js
const pie = 3.14;
function sum() {}
function multiply() {}
// export it from math.js
```

  2. Define above const and functions as properties and methods on module.exports object.
    - require in index.js and execute it.

```js
  module.exports = {
    pie: 3.14,
    add: () => {}
  }
```
  3. Define above using exports 

```js
exports.sum = () => {}
```
