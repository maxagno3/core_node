//1. this is how most of javascript codes are executed which are present 
// in a file or in entire project.
// console.log('hello World');

//4. Read file(theory.md) here using fs module and console the results of operation.
// let fs = require('fs');

// fs.readFileSync('./theory.md', 'utf8', (error,content) => {
//   console.log(content);
// });

//6. Blocking code
// Run it first and observe the output
//  var file = fs.readFileSync('./theory.md', 'utf8');
//  console.log(file);
//  console.log('run me first');
 
 // change it to run it in non-blocking manner.
 // Observe the difference in blocking and non-blocking code.
// fs.readFile('./theory.md', 'utf8', (err,data) => {
//   console.log(data, "I am first");
// })

// 10. require math.js
  // console const pie and add and multiply function.
// let otherFile = require('./math');

// console.log(otherFile.multiply(3,2));
// console.log(otherFile.add(4,4));
// console.log(otherFile.pie);

// 2.
let requireFile = require('./math');

console.log(requireFile.add(11,3));
console.log(requireFile.multiply(3,6));