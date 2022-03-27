//search in google about express router for better understanding
const express = require("express");
const router = express.Router();
//get the home controller from controller folder
const homeController= require("../controllers/home_controller.js");
//use body perser to read the submitted data
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
// 
//use the home controllers action on the router 
router.get("/",homeController.home);
router.use("/create-task",require("./task"));
module.exports=router;

