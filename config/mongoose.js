const mongoose= require("mongoose");
//search mongoose in google for the configuration
mongoose.connect(process.env.MONGODB_URI||"mongodb://localhost/todoList");//created a database named todo-list and mongobd seever always runs on port 27017
const db=mongoose.connection; //by this db variable we can access the database
db.on("error",console.error.bind(console,"error in starting the database")); 
db.once("open",function(){console.log("successfully connected to the database")});
 
module.exports=db;