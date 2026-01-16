const express = require('express');
const { createServer } = require('node:http');
const {Server}= require('socket.io');
const app = express();
const server = createServer(app);
const io = new Server(server);  //io is the instance of socket.io server 

io.on('connection', (socket)=>{
  // console.log('a new user is connected' + socket.id);
  socket.on('user-message', (msg)=>{
    console.log('message from user :'+ msg);
    io.emit('server-message', msg); //broadcasting the message to all connected clients 
  }) 
});
app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.sendFile('./public/index.html', { root: __dirname });
});

server.listen(3000, () => {
  console.log(`server running at ${process.pid} `);
}); 


// node js stream module --> used to handle streaming data in node js
// process the data by breaking it into smaller chunks --> memory optimization
// types of streams : readable, writable, duplex, transform
// example : reading a large file using stream, zip a file using stream


// node js cluster module --> 