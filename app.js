// Requires
var express = require('express')
var app = express()
var mod = require('./modules/modules.js'); 
var bodyParser = require('body-parser');
var path = require('path');

// Connecting to MYSQL Data Base

// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   port     :  '8889',
//   database : 'projectdb',
//   user     : 'root',
//   password : 'root',
// });

// connection.connect();

//app use
app.use(bodyParser.urlencoded({extended: false}));

// Retrieve
var mongoose = require('mongoose');

// connect to database
mongoose.connect('mongodb://localhost/test');

//modal for database
var Cat = mongoose.model('Cat', { name: String });

// insert into data base 
var kitty = new Cat({ name: 'Jon' });
kitty.save(function (err) {
  if (err) // ...
  console.log('meow');
});


//Routes
app.get('/', function(req, res) {

var a = 2;
var b =3;

var add = mod.add(a,b);
console.log(add);

	res.sendfile(path.join(__dirname + '/views/index.html'));

});
app.post('/upload',function(req, res){


  // Grabbing form info

// var name = req.body.username;
// var password = req.body.password;
// console.log(name);
// console.log(password);

// Query statement to insert into database

// connection.query('insert into users(username,password)values(?,?)',[name,password],function(err, rows) {
// 	console.log("hello"); 
// 	console.log(rows);
// });




});


app.listen(8080)
console.log('listening to port 3000'); 
console.log("hello"); // See in Termial