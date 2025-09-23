const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req,res)=>{
    res.render("index", {title: "Home"});
})

app.listen(3000);