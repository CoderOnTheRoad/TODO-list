const express = require("express");
const mongoose=require("mongoose");
const task_schema=new mongoose.Schema({
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

const Tasks=mongoose.model("Tasks",task_chema);
module.export=Tasks;

