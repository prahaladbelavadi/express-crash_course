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

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

// Set Static path
app.use(express.static(path.join(__dirname, 'public')))

var people = [
  {
    name: 'jeff',
    age: 30
  },
  {
    name: 'Sara',
    age: 22
  },
  {
    name: 'Bill',
    age: 40
  }
]

app.get('/',function(req,res){
  res.json(people)
});

app.listen(3000, function(){
  console.log('Server running on port 3000');
})
