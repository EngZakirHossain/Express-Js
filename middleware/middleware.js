//Application level middleware
//third party middleware  (body-parser,cookie-parser)
//Error Handling  middleware
//Router Handling  middleware
//Build-in  middleware(express.json, express.urlencoded)

const express = require('express');
const app = express();

const PORT = 3000;

const myMiddleWare =  (req,res,next)=>{
    req.currentTime = new Date(Date.now());
    next();
};
app.use(myMiddleWare);
app.use((req, res, next) =>{
    res.send('404 Bad url request');
});

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!');
});

app.get('/',myMiddleWare,(req, res)=>{
    res.send("App Running Now"+ req.currentTime);
});
app.get('/about',(req, res)=>{
    res.send("App Running About Now"+ req.currentTime);
});

app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});