//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var app = express();
var path = require('path');
const route = require('./routes/route');


//connecting to mongodb
mongoose.connect('mongodb://localhost:27017');
//on connection
mongoose.connection.on('connected',function(){
    console.log('Connected to MongoDb database at port number 27017');
});

mongoose.connection.on('error',function(err){
    if(err){
        console.log("Error is - "+ err);
    }
});

//port no
const port = 3000;

//adding middleware -cors
app.use(cors());
//body-parser
app.use(bodyparser.json());

//static file
app.use(express.static(path.join(__dirname,'public')));


//routes
app.use('/api',route);


//home page router
app.get("/",function(req,res){
    res.send("Home Page");
});

//binding the port to server
app.listen(port,()=>{
    console.log("Server running on - " + port);
});