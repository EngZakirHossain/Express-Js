const express = require('express');
const  app = express();
const PORT = 3000;
const hostName = '127.0.0.1';

app.get("/", (req, res) => {
    // const id = req.query.id;
    // const name = req.query.name;
    const {id,name} = req.query;
    res.send(`Hi My name ${name} and my Id ${id}`);
});
app.get("/header", (req, res) => {
    const id = req.header('id');
    const name = req.header('name');
    res.send(`<h1>Hi I am  ${name} and My Roll No  ${id}</h1>`);
});
app.get("/userId/:id/userName/:name", (req, res) => {
    const id = req.params.id;
    const name = req.params.name;
    res.send(`<h1>Hi I am  ${name} and My Roll No  ${id}</h1>`);
});

app.listen(PORT,hostName,()=>{
    console.log(`server is running at http://${hostName}:${PORT}`);
});