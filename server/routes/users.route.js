const express = require("express");
const router = express.Router();

//http://localhost:3000/api/user/login

router.get('/login',(req, res)=>{
    res.send("<h1>I am a post request at login Route</h1>");
});
router.get('/register',(req, res)=>{
    res.send("<h1>I am a post request at Register Route</h1>");
});

module.exports = router;