var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

// Logging middleware
// var logger = function(req,res,next){
//   console.log('Logging...');
//   next();
// }
//
// app.use(logger);

// View Engine
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

// Set Static path
app.use(express.static(path.join(__dirname, 'public')))

app.get('/',function(req,res){
  var title = 'Customers';
  res.render('index',{
    title:'Customers'
  })
});

app.listen(3000, function(){
  console.log('Server running on port 3000');
})
