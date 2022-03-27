const { text } = require("express");
const mongoose=require("mongoose");
const task_Schema=new mongoose.Schema({
    task:{
        type:text,
        required:true,

    },
    category:{
        type:text,
        required:true,

    },
    date:{
        type:date,
        required:true,

    }
});

const Tasks=mongoose.model("Tasks",task_Schema);
module.export=Tasks;

