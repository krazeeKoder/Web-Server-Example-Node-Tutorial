var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('Private route hit!')
		next();
	},
	logger: function(req, res, next) {
		var date = new Date().toString()
		console.log (date + ' Request: ' + req.method + ' ' + req.originalUrl);
		next();
	}
};
app.use(middleware.logger);
//app.use(middleware.requireAuthentication);

app.get('/about',function(req, res){
	res.send('This is a story all about me!')
})

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function (){
	console.log ('express server started! on port: ' + PORT)
});