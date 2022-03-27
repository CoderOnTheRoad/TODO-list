
module.exports.createTask=function(req,res){
    Tasks.create({
        task:req.body.description,
        category:req.body.csategory,
        date:req.body.date,
    })
}