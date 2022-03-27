const mongoose= require("mongoose");
//search mongoose in google for the configuration
mongoose.connect("mongodb://localhost:27017/todo-list");//created a database named todo-list and mongobd seever always runs on port 27017
const db=mongoose.connection; //by this db variable we can access the database
db.on("error",console.log("error in starting the database")); 
db.once("open",console.log("successfully connected to the database"));