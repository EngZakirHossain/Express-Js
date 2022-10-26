const express =  require('express')
const router = express.Router();
const {getUsers, saveUsers} = require("../controllers/users.controller");

router.get("/users", getUsers);

router.post("/users", saveUsers );

module.exports = router ;