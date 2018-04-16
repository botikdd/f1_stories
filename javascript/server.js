var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var fs = require('fs');
var log = require('morgan');
var bodyParser = require('body-parser');

users = [];

fs.readFile('data/users.json', handleUsers);

function handleUsers(err, data2) {
	if (err){
		console.log(err);
	}
	else {
		users = JSON.parse(data2);
		console.log(users);
		console.log('Server started at port 7777');
	}
}

app.set('view engine', 'ejs');
app.use(express.static(__dirname));

app.use(log('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/register', function(request, response) {
	response.render('register', {data: options});
});

app.post('/register', function(request, response) {
	users.push({'username':request.body['username'], 'name':request.body['name'],'password':request.body['password'],'favorites':request.body['favorites']});
	console.log(data);
	var jsonData = JSON.stringify(data);
		fs.writeFile("users.json", jsonData, function(err) {
			if(err) {
				return console.log(err);
			}
		});
});

server.listen(7777);