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

app.listen(PORT,hostName,()=>{
    console.log(`server is running at http://${hostName}:${PORT}`);
});