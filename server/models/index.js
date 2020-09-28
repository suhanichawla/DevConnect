const mongoose=require("mongoose")
mongoose.set("debug",true)
mongoose.Promise=Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/sns",{
    keepAlive:true,
    // useMongoClient:true
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports.User=require("./user")
module.exports.Circle=require("./circle")
module.exports.Post=require("./post")