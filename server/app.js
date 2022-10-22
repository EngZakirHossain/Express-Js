const express = require("express");
const app = express();
const userRouter = require('./routes/users.route');
const adminRouter = require('./routes/admin.route');

//Home Route
app.use('/',(req, res)=>{
    // res.cookie("name","zakir hossain");
    res.clearCookie("name");
    res.append("id","13000");
    res.end();
    // res.send("I am a Get request at home Route");
});
//json Data send and
app.use('/register',(req, res)=>{
    // res.status(200).json({
    //     name : 'Zakir Hossain',
    //     message: 'This is register Page',
    //     statusCode : 200,
    // });
    res.statusCode(200);
    res.sendFile(__dirname+"/views/index.html");

    // res.redirect('/login');
});
//Redirect url to login
app.use('/login',(req, res)=>{
    // res.cookie("name","zakir hossain");
    // res.clearCookie("name");
    // res.append("id","13000");
    // res.end();
    res.statusCode(200);
    res.sendFile(__dirname+"/views/index.html");
});
//user route
app.use("/api/user",userRouter);
//admin Route
app.use("/api/admin",adminRouter);

app.use((req, res) => {
    res.send('<h1>404 Not a Valid URL</h1>');
})

module.exports = app;