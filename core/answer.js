// 1
// Node : Node is an open source cross platform used to develop various applications like realtime chat apps,etc.. It is mainly used to build network programs like web servers. Node is basically using javascript outside the browser. It is based on the v8 engine created and manged by Google Chrome.
// V8 engine : v8 is created and managed by Google. It is basically a engine used to run core javascript codes just like arrays, functions, etc. It is one of the fastest and famous browser engines. It is also used to run node.js outside the browser i.e, node.js is built on top of v8 engine. It is single threaded which means that it executes the code line by line and one task at a time. It also contains call stack which is responsible for execution of javascript.

7. // Write respective headers object below.
// General Headers :
// Request URL: https://altcampus.io/
// Request Method: GET
// Status Code: 200
// Remote Address: 128.199.85.71: 443
// Referrer Policy: no - referrer - when - downgrade

// Response Headers :
// access - control - allow - credentials: true
// access - control - allow - origin: *
// access - control - expose - headers:
// cache - control: max - age=0, private, must - revalidate
// content - encoding: gzip
// content - type: text / html; charset = utf - 8
// date: Fri, 24 Apr 2020 12: 29: 50 GMT
// server: nginx / 1.10.3(Ubuntu)
// status: 200
// x - content - type - options: nosniff
// x - content - type - options: nosniff
// x - download - options: noopen
// x - frame - options: SAMEORIGIN
// x - frame - options: DENY
// x - permitted - cross - domain - policies: none
// x - request - id: 2o4c2idjugs2q2r8gk00g1k1
// x - xss - protection: 1; mode = block

// Request Headers:
// : authority: altcampus.io
// : method: GET
// : path: /
// : scheme: https
// accept: text / html, application / xhtml + xml, application / xml; q = 0.9, image / webp, image / apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
// accept-encoding: gzip, deflate, br
// accept-language: en-GB,en-US;q=0.9,en;q=0.8
// cache-control: max-age=0
// cookie: _ga=GA1.2.1012733720.1583081791; track_uid=743e99bc-eab9-4111-e150-a0f33f9666f5; _altcampus_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYcnJYYlFVY21UcStITS9yenlpTzZaQT09.IBbl74IsUX_VGvygDQII8Y4rBxw2jgFDmaKhn9HVIzg; _gid=GA1.2.1421583708.1587731377; _gat_gtag_UA_121886584_1=1
// sec-fetch-dest: document
// sec-fetch-mode: navigate
// sec-fetch-site: none
// sec-fetch-user: ?1
// upgrade-insecure-requests: 1
// user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36

8. // Write parsed object below of the url ``http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4
let url = require('url');
let parsedURL = url.parse('http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4');
console.log(parsedURL);
// Output:
// Url {
//     protocol: 'http:',
//     slashes: true,
//     auth: null,
//     host: 'localhost:3000',
//     port: '3000',
//     hostname: 'localhost',
//     hash: null,
//     search: '?token=8372fcb8y2874b2t478t6t48cbtbc72t4',
//     query: 'token=8372fcb8y2874b2t478t6t48cbtbc72t4',
//     pathname: '/api/v3',
//     path: '/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4',
//     href: 'http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4'
// }


9. // Write parsed query object
let url = require('url');
let parsedURL = url.parse('http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4', true);
console.log(parsedURL);
// Output:
// Url {
//     protocol: 'http:',
//     slashes: true,
//     auth: null,
//     host: 'localhost:3000',
//     port: '3000',
//     hostname: 'localhost',
//     hash: null,
//     search: '?token=8372fcb8y2874b2t478t6t48cbtbc72t4',
//     query: [Object: null prototype] {
//         token: '8372fcb8y2874b2t478t6t48cbtbc72t4'
//     },
//     pathname: '/api/v3',
//     path: '/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4',
//     href: 'http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4'
// }
