var express = require('express');
var app = express();
var PORT = process.env.port || 3000;

var middleware = require ('./middleware.js');


app.use(middleware.logger);
//app.use(middleware.requireAuthentication);

app.get('/about',function(req, res){
	res.send('This is a story all about me!')
})

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function (){
	console.log ('express server started! on port: ' + PORT)
});