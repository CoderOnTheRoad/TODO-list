const express=require("express");//adding express library 
const app=express(); //fire up exress
const port=8000; // port on which our website will run

//****USE EXPRESS ROUTER********//
app.use("/",require("./routes"));
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
