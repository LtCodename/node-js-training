let express = require('express');
let bodyParser = require('body-parser');

//Создание переменной для експресса
let app = express();
//Говорим что будем использовать движок темплейтов
app.set('view engine', 'ejs');
//Говорим чтоб работали гет запросы на любые статические файлы, путь которых начинается с '/assets'
app.use('/assets', express.static('assets'));

// create application/x-www-form-urlencoded parser
let urlencodedParser = bodyParser.urlencoded({ extended: false });

//Гет запросы (варианты с возвратом обычной html странички и с вьюшкой темплейта
app.get('/', function (req, res) {
    //res.sendFile(__dirname + '/index.html');
    res.render('index');
});

app.get('/contact', function (req, res) {
    //res.sendFile(__dirname + '/contact.html');
    res.render('contact', {qs: req.query});
});

app.get('/profile/:name', function (req, res) {
    const data = {
        age: 40,
        job: 'Racing Driver',
        hobbies: ['beer', 'children', 'finding gloves']
    };

    res.render('profile', {person: req.params.name, data});
});

//Пост запрос
app.post('/contact', urlencodedParser,  function (req, res) {
    console.log(req.body);
    res.render('contact-success', {data: req.body});
});

//Слушаем сервер
app.listen(3000);
console.log("listening to port 3000");