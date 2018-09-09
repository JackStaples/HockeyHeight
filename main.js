var app = require('./app/server');

// let heroku set the port
var port = process.env.PORT || 8080;

app.listen(port, function(){
  console.log('server is running on port 8080');
})