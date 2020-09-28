require("dotenv").config();
var express=require("express")
var app=express()
// var bcrypt=require("bcrypt")
var bodyParser=require("body-parser")
var cors=require("cors")
var authRoutes=require("./routes/auth")
var errorHandler=require("./handlers/error")
var db=require("./models")
const port=process.env.PORT || 8080;



app.use(cors())
app.use(bodyParser.json())

app.use("/api/auth",authRoutes)



app.use((req,res,next)=>{
    let err=new Error("NOT FOUND")
    err.status=404
    next(err)
})

app.use(errorHandler)

app.listen(port,()=>{
    console.log(`SERVER STARTED ON ${port}`)
})
