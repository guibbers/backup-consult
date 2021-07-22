const express = require("express");

const app = express();
app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get("/about", (req, res)=>{
    res.sendFile(__dirname + "/about.html");
});

app.get("/products", (req, res)=>{
    res.sendFile(__dirname + "/products.html");
});

app.get("/store", (req, res)=>{
    res.sendFile(__dirname + "/store.html");
});

app.listen(3000, ()=>{
    console.log("Server Running");
});