const express = require('express');
const router = express.Router();

router.get('/about', (req, res) => {
    res.render('./patient/about');
});





module.exports = router;