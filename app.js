var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.set('port', process.env.PORT || 3000);

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//ROUTING

app.get('/', function(req, res){    
   // res.type('text/plain');
    //res.send('Mi página principal');
    res.render('home');
});
const knex = require('./db/knex') 

app.get('/user', function(req, res){    
   // res.type('text/plain');
    //res.send('Mi página principal');
   knex('usuarios')
    .select()
    .then( usuarios  =>{
          res.render('usuarios',{objUsers: usuarios});
 
});
});

app.get('/about', function(req, res) {
    //res.type('text/plain');
    //res.send('Acerca de mi página');  
    res.render('about');

});

//#archivos estaticos y vistas 
app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function(){
 console.log('express on localhost:' +app.get('port'));  
});