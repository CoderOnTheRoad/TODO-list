const Tasks=require("../models/task_schema");
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
module.exports.createTask=function(req,res){
    Tasks.create({
        task:req.body.description,
        category:req.body.csategory,
        date:req.body.date,
    },function(err,newTask){
        if(err){
            console.log("cant entry this item");
            return;
        }else{
            console.log(newTask);
        }
    }
    )
}