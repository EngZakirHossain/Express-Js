const express = require('express');
const userRouter = require("./routes/users.route");
const  app = express();
const PORT = 3000;
const hostName = '127.0.0.1';

app.use(express.urlencoded({extended:true}));
//import and access Users Route
app.use(userRouter);

app.use((req, res, next) =>{
    res.status(404).json({
        message: "Resource not Found",
    })
})


app.listen(PORT,hostName,()=>{
    console.log(`server is running at http://${hostName}:${PORT}`);
});