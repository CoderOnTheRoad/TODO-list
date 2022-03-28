const Tasks=require("../models/task_schema.js");

module.exports.create=function(req,res){
    // console.log(req.body);
    Tasks.create({
        task:req.body.description,
        category:req.body.category,
        date:req.body.date,
    },function(err,newTask){
        if(err){
            console.log("cant entry this item");
            return;
        }
    }
    );
    return res.redirect("/");
};

module.exports.delete=function(req,res){
    // const Tasks=require("../models/task_schema.js");
    var idArr=req.query._id;
    console.log(idArr);
    for(let i of idArr){
        Tasks.findByIdAndDelete(i,function(err){
            if(err){
                console.log("cant delete this item due to error");
                return;
            }
        });
    }
    return res.redirect("/");

}
