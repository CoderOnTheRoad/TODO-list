
//creating a function named home which can be accessed from outside the file
module.exports.home=function(req, res){
    return res.end("<h1>Express home controller has been accessed</h1>");
}