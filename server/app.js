const express = require("express");
const app = express();
app.get('/',(req, res)=>{
    res.send("I am a get request ar home Route");
});
app.post('/',(req, res)=>{
    res.send("I am a post request ar home Route");
});
app.put('/',(req, res)=>{
    res.send("I am a put request ar home Route");
});
app.delete('/',(req, res)=>{
    res.send("I am a delete request ar home Route");
    res.end();
});

module.exports = app;