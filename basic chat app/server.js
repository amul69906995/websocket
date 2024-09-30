const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);
app.use(express.static(__dirname+'/public'));
io.on("connection", (socket) => {
 console.log(socket.id)
// socket.emit("serverMessage", "this is from server");
   io.emit('newConnection',socket.id);
 socket.on('clientMessage',(data)=>{
    //emitting to all socket to are connected to io server
    io.emit('serverMessage',data)
 })
});

httpServer.listen(3000,()=>{
   console.log("server is running on port 3000");
});


