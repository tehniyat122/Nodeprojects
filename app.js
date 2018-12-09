var express = require('express')
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/', function(req,res){
  res.sendFile(__dirname + '/index.html');
  console.log("fvsdfv");

	
}); 
 

 io.on('connection', function(socket){
  console.log('User connected');
  
  socket.on('chat message', function(msg){
    io.emit('chat message',msg);
  });
 });




 server.listen(3000,function(){
 console.log('listening on 3000');
 
 });

