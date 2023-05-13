const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jyotiyadav:12345@cluster0.dx0emas.mongodb.net/);
const db = mongoose.connection;

//If any Error then Getting this Line
db.on('error', console.error.bind(console, "Error in connecting to the Db"));  


db.once('open',()=>{
    console.log("Connected to Database :: MongoDB ")
});

module.exports=db;  //Exports db
