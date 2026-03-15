import Express = require("express");


const app   =Express();
 app.get("/", (req, res) => {
    res.send("hello from my app nodejs and react u 're welcom (;");
});
    app.listen(5000,()=>{
        console.log("server he is runing on the port 5000");
   
 });