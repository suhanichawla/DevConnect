require("dotenv").config();
var express=require("express")
var app=express()
var http=require("http")
var bot="mybot"
var {joinUser,getCurrentUser,leaveUser,getRoomUsers} = require("./utils/users")
// var bcrypt=require("bcrypt")
var bodyParser=require("body-parser")
var cors=require("cors")
var authRoutes=require("./routes/auth")
var postRoutes=require("./routes/posts")
var circleRoutes=require('./routes/circles')
var unauthRoutes=require("./routes/unauth")
var errorHandler=require("./handlers/error")
var db=require("./models")
const {loginRequired,correctUser}=require("./middleware/auth")
const port=process.env.PORT || 8080;
var {joinUser,getCurrentUser,leaveUser,getRoomUsers} = require("./utils/users")
var socketio=require("socket.io")
const formatMessage = require("./utils/messages")


var server = require('http').Server(app);
var io = require('socket.io')(server, {origins:'localhost:*'});


// io.adapter(redis({ host: 'localhost', port: }));

// server.listen(, '', function(){
// console.log("Server up and running...");
// });
// const io=socketio(server)
// io.origins('*:*') 
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("/api/getCategories",(req,res,next)=>{
    try{
        res.send(["fun","project","resources"])
    }catch(e){
        return next(e)
    }
})
app.use("/api/auth",authRoutes)
app.use("/api/:userID/post",loginRequired,correctUser,postRoutes)
app.use("/api/:userID/circle",loginRequired,correctUser,circleRoutes)
app.use("/api",unauthRoutes)


//TODO: SET UP MIDDLEWARE FOR THE SCENARIO: USER SHOULD MAKE POSTS ONLY IN CIRCLE HE/SHE IS PART OF

app.use((req,res,next)=>{
    let err=new Error("NOT FOUND")
    err.status=404
    next(err)
})


io.on("connection",socket=>{
    console.log("new socket connection")
    socket.on("joinRoom",({username,room})=>{
        const user=joinUser(socket.id,username,room)
        socket.join(user.room)
        console.log("user has joined room")
        socket.emit("message",formatMessage(bot,"welcome to dev connect"))
        
        socket.broadcast.to(user.room).emit("message",formatMessage(bot,   `${user.username} has joined the chat`));

        io.to(user.room).emit('roomUsers',{
            room:user.room,
            users:getRoomUsers(user.room)
        })
    })

    socket.on("chatMessage",(msg)=>{
        console.log(msg)
        const user=getCurrentUser(socket.id)
        io.to(user.room).emit("message",formatMessage(user.username,msg))
    })

    

    //when user disconnects
    socket.on("disconnect",()=>{
        const user=leaveUser(socket.id)
        if(user){
            io.to(user.room).emit("message",formatMessage(bot,`${user.username} has left the chat`))
            io.to(user.room).emit('roomUsers',{
                room:user.room,
                users:getRoomUsers(user.room)
            })
        }
        
    })


})



app.use(errorHandler)

server.listen(port,()=>{
    console.log(`SERVER STARTED ON ${port}`)
})
