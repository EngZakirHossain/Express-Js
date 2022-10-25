const express = require('express');
const app = express();

const PORT = 3000;

const myMiddleWare =  (req,res,next)=>{
   req.currentTime = new Date(Date.now());
   next();
};
app.use(myMiddleWare);

app.get('/',myMiddleWare,(req, res)=>{
   res.send("App Running Now"+ req.currentTime);
});
app.get('/about',(req, res)=>{
   res.send("App Running About Now"+ req.currentTime);
});

app.listen(PORT,()=>{
   console.log(`server is running at http://localhost:${PORT}`);
});