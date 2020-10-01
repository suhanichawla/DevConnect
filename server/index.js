require("dotenv").config();
var express=require("express")
var app=express()
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
app.use("/api/:circleID",unauthRoutes)


//TODO: SET UP MIDDLEWARE FOR THE SCENARIO: USER SHOULD MAKE POSTS ONLY IN CIRCLE HE/SHE IS PART OF

app.use((req,res,next)=>{
    let err=new Error("NOT FOUND")
    err.status=404
    next(err)
})

app.use(errorHandler)

app.listen(port,()=>{
    console.log(`SERVER STARTED ON ${port}`)
})
