//REQUIREMENTS
var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');//INSTALLER UN MONGO EN LOCAL !!!!!
var menu = require('./module.js');


//APP CREATION
var app = express();

//APP PARAMETERS
app.set('view engine', 'ejs');  
app.set('views', 'app/views');

app.use(morgan('dev'));
app.use(express.static('public'));




app.get('/',function(req, res){
	res.render('layout.ejs');
});

app.get('/menu', function(req, res){
	menu.get(1, function(error, data){
		res.json(data);
	});
})





//TOUJOURS LE DERNIER APPEL DU POINT D'ENTREE
app.listen(3001, function(){
	console.log('Le serveur écoute sur le port 3001');
});

