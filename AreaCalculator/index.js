const express = require('express');
const app = express();
const PORT = 3000;
const hostName = '127.0.0.1';

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/",(req, res)=>{
   res.sendFile(__dirname + '/index.html');
});
app.get("/circleCalculation",(req, res)=>{
   res.sendFile(__dirname + '/circle.html');
});
app.post("/circleCalculation",(req, res)=>{
    const radius = req.body.radius;
    const radiusArea = Math.PI * radius * radius;
    res.send(`<h1>Total Circle Area ${radiusArea}</h1>`);
});
app.get("/triangleCalculation",(req, res)=>{
   res.sendFile(__dirname + '/triangle.html');
});
app.post("/triangleCalculation",(req, res)=>{
    const height = req.body.height;
    const base = req.body.base;
    const area =0.5 * height * base;
    res.send(`<h1>Total Triangle Area ${area}</h1>`);
});


app.listen(PORT,hostName,()=>{
    console.log(`server is running at http://${hostName}:${PORT}`);
})