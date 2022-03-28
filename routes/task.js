
const express=require("express");
const router = express.Router();
const taskController= require("../controllers/task_controller.js");
console.log("router loaded");
router.post("/create",taskController.create);
router.get("/delete",taskController.delete);
module.exports=router;