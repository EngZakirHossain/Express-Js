const express = require("express");
const app = express();
const userRouter = require('./routes/users.route');
const adminRouter = require('./routes/admin.route');

//Home Route
app.get('/',(req, res)=>{
    res.send("I am a Get request at home Route");
});
//user route
app.use("/api/user",userRouter);
//admin Route
app.use("/api/admin",adminRouter);

app.use((req, res) => {
    res.send('<h1>404 Not a Valid URL</h1>');
})

module.exports = app;