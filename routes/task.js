
const express=require("express");
const router = express.Router();
const taskController= require("../controllers/task_controller");
const Tasks=require("../models/task_schema");

router.get("/task-create",taskController.createTask)

module.exports=router;