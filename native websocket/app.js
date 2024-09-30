const express=require('express');

const app=express();
const port=3000;
const {WebSocketServer}=require('ws')
app.use(express.urlencoded({extended:true}))
app.use(express.json())

const server=app.listen(port,()=>{
console.log(`starting the server successfully on port`)
})
const wss = new WebSocketServer({server:server})
//console.log(wss)
// wss.on('headers', (headers,req)=>{
//    console.log(headers)
  
// })
wss.on("connection",(ws,req)=>{
 //console.log(req)
ws.send('this is from server')
ws.onmessage=(e)=>{
  console.log("onmessage event",e.data)
}

})



