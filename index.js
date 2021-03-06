require("dotenv").config();
const express=require("express"); //adding express library 
const app=express(); //fire up exress
const port=process.env.PORT||3000; // port on which our website will run
const db=require("./config/mongoose");
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));

// //****USE EXPRESS ROUTER********//
app.use("/",require("./routes"));

const Tasks=require("./models/task_schema.js");
//adding view engine
app.set("view engine","ejs");
app.set("views","./views");
//setiing folder from which static files are going to be accessed
app.use(express.static("assets"));
// ********run the express server on port**********
app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
        //it is same ads writing console.log("Error in running the server :"+err); the above method is called interpolation
    }else{
        console.log(`server is running on port : ${port}`);
    }
});
//**************************************************
