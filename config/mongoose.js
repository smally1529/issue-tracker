const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/db');

const db = mongoose.connection;

//If any Error then Getting this Line
db.on('error', console.error.bind(console, "Error in connecting to the Db"));  


db.once('open',()=>{
    console.log("Connected to Database :: MongoDB ")
});

module.exports=db;  //Exports db