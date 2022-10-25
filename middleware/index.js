
//Build-in  middleware(express.static,)

const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.static("public"));



app.get('/',(req, res)=>{
   res.sendFile(__dirname + "/public/views/index.html");
});

app.listen(PORT,()=>{
   console.log(`server is running at http://localhost:${PORT}`);
});