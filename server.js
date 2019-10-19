/* CREATING A SERVER */

/*let http = require('http');

let server = http.createServer(function (req, res) {
    console.log('request was made: ' + req.url);
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Hey ninjas');
});

server.listen(3000, '127.0.0.1');
console.log('yo dawgs, now listening to port 3000');*/

/* CREATING A STREAM AND TRANSFERRING DATA */

/*let http = require('http');
let fs = require('fs');

let myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
let myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

myReadStream.on('data', function (chunk) {
    console.log('new chunk received:');
    myWriteStream.write(chunk);
});*/

/* PIPES */

/*let http = require('http');
let fs = require('fs');

let myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
let myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

myReadStream.pipe(myWriteStream);*/

/* PIPES WITH SERVER */

/*let http = require('http');
let fs = require('fs');

let server = http.createServer(function (req, res) {
    console.log('request was made: ' + req.url);
    res.writeHead(404, {'Content-Type': 'text/plain'});

    let myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
    myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('yo dawgs, now listening to port 3000');*/

/* SERVING HTML TO SERVER */

/*let http = require('http');
let fs = require('fs');

let server = http.createServer(function (req, res) {
    console.log('request was made: ' + req.url);
    res.writeHead(404, {'Content-Type': 'text/html'});

    let myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('yo dawgs, now listening to port 3000');*/

/* SERVING JSON TO SERVER */

/*let http = require('http');
let fs = require('fs');

let server = http.createServer(function (req, res) {
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'application/json'});
    let myObj = {
        name: 'Kimi',
        job: 'Racing driver',
        age: '40'
    };
    res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('yo dawgs, now listening to port 3000');*/

/* ROUTING */

let http = require('http');
let fs = require('fs');

let server = http.createServer(function (req, res) {
    console.log('request was made: ' + req.url);
    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }else if (req.url === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }else if (req.url === '/api/drivers') {
        let alphaRomeoDrivers = [
            {
                name: 'Kimi',
                job: 'Racing driver',
                age: '40'
            },
            {
                name: 'Antonio',
                job: 'Racing driver',
                age: '25'
            }
        ];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(alphaRomeoDrivers));
    }else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});

server.listen(3000, '127.0.0.1');
console.log('yo dawgs, now listening to port 3000');