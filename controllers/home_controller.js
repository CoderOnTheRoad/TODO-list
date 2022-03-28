
//creating a function named home which can be accessed from outside the file
module.exports.home=function(req, res){
    const Tasks=require("../models/task_schema.js");
    Tasks.find({},function(error,tasks){
        if(error){
            console.log("Error: In fetching data");
        }
        // console.log(tasks);
        return res.render("home",{
            task_list:tasks,
        });
    });
};
