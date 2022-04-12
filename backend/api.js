var path = require("path");
modules.export(app);
    app.get("/tables", function(req,res){
        res.sendFile(path.join(__dirname, "../public/tables.html"));
    });

app.get("/reserve", function(req,res){
    res.sendFile(path.join(__dirname, "../public/reserve.html"));
});

app.get("/home", function(req,res){
    res.sendFile(path.join(__dirname, "../public/home.html"));
});
