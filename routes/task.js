const express=require("express");
const router = express.Router();
const taskController= require("../controllers/task_controller");
const Tasks=require("../models/task_schema");

router.get("/create",taskController.createTask)