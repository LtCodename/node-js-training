/* REQUIRING MODULES */

/*const events = require('events');

let myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function (mssg) {
   console.log(mssg);
});

myEmitter.emit('someEvent', 'the event was emitted');*/

/* EMITTING CUSTOM EVENTS */

/*const events = require('events');

class Person extends events.EventEmitter {
    constructor(name) {
        super();
        this.name = name;
    }
}

let james = new Person('james');
let mary = new Person('mary');
let ryu = new Person('ryu');

let people = [james, mary, ryu];

people.forEach(function (person) {
    person.on('speak', function (mssg) {
        console.log(person.name + ' said: ' + mssg);
    });
});

mary.emit('speak', 'hey dudes');*/

/* READING AND WRITING FILES */
/* SYNC VARIANT */
/*const fs = require('fs');

let readMe = fs.readFileSync('readMe.txt', 'utf8');

fs.writeFileSync('writeMe.txt', readMe);*/
/* ASYNC VARIANT */
/*const fs = require('fs');

fs.readFile('readMe.txt', 'utf8', function (err, data) {
    fs.writeFile('writeMe.txt', data,  function (err, data) {
        //
    });
});*/

/* DELETING FILE */
/*const fs = require('fs');
fs.unlink('writeMe.txt', function (err, data) {
    
});*/

/* CREATING AND REMOVING DIRECTORIES */
/* SYNC VARIANT */
/*const fs = require('fs');
fs.mkdirSync('stuff');
fs.rmdirSync('stuff');*/
/* ASYNC VARIANT */
/*const fs = require('fs');
fs.mkdir('stuff', function (err, data) {
    fs.readFile('readMe.txt', 'utf8', function (err, data) {
        fs.writeFile('./stuff/writeMe.txt', data, function (err, data) { });
    })
});

fs.unlink('./stuff/writeMe.txt', function (err, data) {
    fs.rmdir('stuff', function (err, data) { });
});*/
