const express = require('express');
const  app = express();
const PORT = 3000;
const hostName = '127.0.0.1';

app.get("/products/:id([0-9]{3})",(req, res)=>{
    res.send(`<h1>ID = ${ req.params.id}</h1>`);
});
app.get("/products/:title([a-zA-Z0-9]+)",(req, res)=>{
    res.send(`<h1>Title = ${ req.params.title}</h1>`);
});

app.use("*",(req, res)=>{
    res.status(404).send({
        message:"Not a Valid Url",
    });
});

app.listen(PORT,hostName,()=>{
    console.log(`server is running at http://${hostName}:${PORT}`);
});