
//creating a function named home which can be accessed from outside the file
module.exports.home=function(req, res){
    return res.render("home");
}