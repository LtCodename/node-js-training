let express = require('express');
let bodyParser = require('body-parser');
let app = express();

// create application/x-www-form-urlencoded parser
let urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));//css

app.get('/', function (req, res) {
    //res.sendFile(__dirname + '/index.html');
    res.render('index');
});

app.get('/contact', function (req, res) {
    //res.sendFile(__dirname + '/contact.html');
    res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodedParser,  function (req, res) {
    console.log(req.body);

    res.render('contact-success', {data: req.body});
});

app.get('/profile/:name', function (req, res) {
    const data = {
        age: 40,
        job: 'Racing Driver',
        hobbies: ['beer', 'children', 'finding gloves']
    };
    res.render('profile', {person: req.params.name, data});
});

app.listen(3000);