const express = require('express');
const router = express.Router();

router.get('/login',(req, res) => {
    res.send('<h1>This is admin login Page</h1>');
});

module.exports = router;
