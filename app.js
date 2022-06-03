const express = require("express");
const app = express();
const path = require("path");
const publicPath = path.join(__dirname,"/public");
const homePath = path.join(__dirname, "./views/home.html")

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Servidor corriendo puerto ${port}`);
})
app.use(express.static(publicPath));
app.get("/", (req,res)=>{
    res.sendFile(homePath);
})