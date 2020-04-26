var http = require('http');

// 1. Write script to create a basic http server using createServer method, write 'Welcome to NodeJS' as response and
// listen for request on port 5555.
// let server = http.createServer(handleRequest);

// function handleRequest (req,res) {
//   res.end('Welcome to NodeJS');
// }

// server.listen(5555, () => {
//   console.log('Server running on 5555');
// })

// 2. Write script to create a server, send in response the request headers 
// and add listener on port 6666.
// let server = http.createServer(handleRequest);

// function handleRequest (req,res) {
//   res.end(JSON.stringify(req.headers));
// }

// server.listen(6666, () => {
//   console.log('Server on 6666');
// });

// 3. create a server and console request methods and url by doing request 
// from postman or web browsers.
// let server = http.createServer(handleRequest);

// function handleRequest (req, res) {
//   res.end(req.method);
// }

// server.listen(5005, () => {
//   console.log('server running on 5000!');
// })

// 4. create a server
  // - set response headers as 'text/html' using res.setHeader property.
  // - write some HTML content in response
  // - listen on port 6000
// let server = http.createServer(handleRequest);

// function handleRequest (req,res) {
//   res.setHeader('content-type','text/html');
//   res.end('<h1>Hello, I am Mayank...</h1>');
// }

// server.listen(6000, () => {
//   console.log('server: 6000');
// })

// 5. create a server
  // - create a seperate file index.html and write some html content
  // - read the html file content and send it in response in createServer method
  // - don't forget to set header before writing to response
// let server = http.createServer(handleRequest);
// let url = require('url');
// let fs = require('fs');

// function handleRequest (req,res) {
//   let parsedURL = url.parse(req.url, true);
//   if (parsedURL.pathname === '/index.html') {
//     res.setHeader('content-type', 'text/html');
//     fs.readFile('./index.html', (err,data) => {
//       if (err) return err;
//       res.end(data);
//     })
//   }
// }

// server.listen(5000, () => {
//   console.log('Server is running on 5000');
// })

// 6. create a server
  // - create 3 diffenrent file ie. indx.html, about.html, contact.html
  // - inside createServer, handle different urls for serving different html file
  // - '/' route for index.html file
  // - "/about" for about.html file
  // - "/contact" for contact.html file
// let server = http.createServer(handleRequest);
// let url = require('url');
// let fs = require('fs');

// function handleRequest(req,res) {
//   let parsedURL = url.parse(req.url,true);
//   if (parsedURL.pathname === '/') {
//     res.writeHead(200, {'content-type' : 'text/html'});
//     fs.createReadStream('./index.html').pipe(res);
//   }
//   if (parsedURL.pathname === '/about') {
//     res.writeHead(200, {'content-type' : 'text/html'});
//     fs.createReadStream('./about.html').pipe(res);
//   }
//   if (parsedURL.pathname === '/contact') {
//     res.writeHead(200, {'content-type' : 'text/html'});
//     fs.createReadStream('./contact.html').pipe(res);
//   }
// }

// server.listen(5000, () => {
//   console.log('Server running');
// })

// 7. create an Server(echoServer)
  // handle post request for incoming data from postman using req as eventEmitter
  // send incoming data back in response
// let server = http.createServer();
// let url = require('url');

// server.on('request', (req,res) => {
//   let store = '';
//   req.on('data', (chunks) => {
//     store += chunks;
//   })
//   req.on('end', () => {
//     res.end(store);
//   })
//   if (req.method === 'POST') {
//     res.end(store);
//   }
// })

// server.listen(5000, () => {
//   console.log('Server running.');
// })

// 8. create a server
  // handle json data from postman
  // parse the json data
  // send json data back in response
// let server = http.createServer();
// let url = require('url');

// server.on('request', (req,res) => {
//   let store = '';
//   req.on('data', (chunks) => {
//     store += chunks;
//     console.log(store);
//   })
//   req.on('end', () => {
//     res.end(store);
//   })
// })

// server.listen(5000, () => {
//   console.log('Server running.');
// })

// 9. create a server
  // handle x-www-urlencoded(form data) coming form postman
  // parse form-data using querystring module
  // send data back in response
// let server = http.createServer();
// let qs = require('querystring');

// server.on('request', (req,res) => {
//   let store = '';
//   req.on('data', (chunks) => {
//     store += chunks;
//   })
//   req.on('end', () => {
//     let query = qs.parse(store);
//     res.end(JSON.stringify(query));
//   })
// })

// server.listen(5000, () => {
//   console.log('Port 5000 running successfully');
// })

// 10. create a server and add listener on port 7000
  // send get request on 'http://localhost:7000/new?username=altcampus' from postman or browser
  // parse the request url using 'url' core node module
  // extract protocol, path and pathname, query from the request
  // send path in response
  // let server = http.createServer();
  // let url = require('url');

  // server.on('request', (req,res) => {
  //   let parsedURL = url.parse(req.url);
  //   if(parsedURL.pathname === '/new') {
  //     console.log(parsedURL.pathname);
  //     res.end(parsedURL.path);
  //     console.log(parsedURL.query);
  //   }
  // })

  // server.listen(5000, () => {
  //   console.log('Server running on port 5000');
  // })

// 11. Write script to create an absolute and relative path of 'theory.md' from the current file.
  // use path module from core node
// let server = http.createServer();
// let path = require('path');
// let filePath = path.join(__dirname, '/theory.md');
// console.log(filePath);
// let relPath = ('./theory.md')
// console.log(relPath);

// server.listen(5000, () => {
//   console.log('Running without error');
// })