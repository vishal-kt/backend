var figlet = require("figlet");
figlet("VISHAl", function (err,data) {
    if(err){
        console.log("Something Went Wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
})