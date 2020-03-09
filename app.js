const express = require('express'), 
    app = express(),
    http = require('http').createServer(app);
    app.use(express.static(__dirname+'/public'));
    app.set('view engine' , 'ejs');
const io = require('socket.io')(http);

app.get('/' , (req , res)=>{
    res.render('index');
})
io.on('connection' ,(socket)=>{
    console.log('a user connected!');
        socket.on('disconnect' , ()=>{
            console.log('user disconnected');
        })
})
http.listen(3000 , ()=>{
    console.log("server start working");
});