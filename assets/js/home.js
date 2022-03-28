
//CHANGING MONTH FORMAT***********************
var dates= $(".date");
var monthNames=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

for(let i of dates){
    let date= new Date($(i).text());
    console.log(date);
    // console.log(date);
    // console.log(date.getDate());
    if(date!="Invalid Date"){
    $(i).html(monthNames[date.getMonth()]+" "+date.getDate()+","+date.getFullYear());
    }
}

//ADDING COLOURS TO THE CATEGORY******************************
var categories=$(".category-container span");
for(let i of categories){
    let category= $(i);
    if(category.html()=="work"){
        category.css({
            backgroundColor:"violet",

        });
    }else if(category.html()=="personal"){
        category.css({
            backgroundColor:"yellow",

        });
    }else if(category.html()=="school"){
        category.css({
            backgroundColor:"green",

        });
    }else if(category.html()=="other"){
        category.css({
            backgroundColor:"red",

        });
    }
}

//deleting the data updating the deleteurl query******************
var checkedItems=$("#output-list li input");
// console.log(checkedItems);
var linkKey=$("#delete-link");

linkKey.on("click", function () {
    for(let i of checkedItems){
        if(i.checked==true){
            linkKey.attr("href", linkKey.attr("href")+"_id="+i.name+"&");
        }
    }
});



