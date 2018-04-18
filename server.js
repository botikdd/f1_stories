var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var fs = require('fs');
var log = require('morgan');
var bodyParser = require('body-parser');
var CryptoJS = require("crypto-js");

users = [];

fs.readFile('data/users.json', handleUsers);

function handleUsers(err, data2) {
	if (err){
		console.log(err);
	}
	else {
		users = JSON.parse(data2);
	}
}

app.set('view engine', 'ejs');
app.use(express.static(__dirname));

app.use(log('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/register', function(request, response) {
	response.render('register', {data: options});
});

app.post('/registration', function(request, response) {
	
	numb = 0;
	for (var i of JSON.stringify(users)) {
		if (request.body['username'] === i['username']) {
			response.send(500, 'userNameExists');
			numb ++;
		}	
	}
	if (numb == 0) {
		users.push({'first_name':request.body['f_name'], 'last_name':request.body['l_name'], 'email':request.body['email'], 'password':CryptoJS.MD5(request.body['passwd']), 'username':request.body['username']});
		console.log(users);
		var jsonData = JSON.stringify(users);
		fs.writeFile("data/users.json", jsonData, function(err) {
			if(err) {
				return console.log(err);
			}
		});
		console.log("almalam");
		response.redirect('index.html')
;	}
});

app.post('/sign_up', function(request, response) {
	response.redirect('reg.html');
});

app.post('/sign_in', function(request, response) {
	
	
	
});

server.listen(7777);
console.log('Server started at port 7777');