var fs = require('fs');

// Use fs module for all operatins below.

// 1. Write script to read file theory.md and console the output buffer.

// fs.readFile('./theory.md', (err,data) => {
//   console.log(data);
// })

// 2. Write script to read file theory.md and convert resulted buffer using toString
  // method and console the result.
  // fs.readFile('./theory.md', (err,data) => {
  //   console.log(data.toString());
  // })

// 3. Write script to read file Synchronously and console the output.
// let file = fs.readFileSync('./theory.md','utf8');
// console.log(file);

// 4. Write script to create a file 'write.js' and write content of read.js in there.
// fs.readFile('./read.js', 'utf-8', function (err, data) {
//   if (!err)
//     fs.writeFile('./write.js', data, (err) => {
//       if (err) {
//         throw err;
//       }
//     });
//   else
//     throw err;
// });

// 5. Write script to update content of write.js. Update it with content of theory.md
//   Steps are
//   - open the file(write.js) using fs.open
//   - remove earlier content using fs.ftruncate
//   - add new content using fs.writeFile
//   - close the file at last using fs.close

// fs.open('./write.js', (err,fd) => {
//   fs.ftruncate(fd, (err) => {
//     if(err) return err;
//   })
//   fs.writeFile('./write.js', 'Hello Node', (err) => {
//     if(err) return err;
//   })
//   fs.close(fd, (err) => {
//     if(err) return err;
//   })
// })

// 6. Delete the content of write.js using fs.unlink or unlinkSync method
// fs.unlink('./write.js', (err) => {
//   if(err) return err;
// })