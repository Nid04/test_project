const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
    const str = [{
        "name": "Nidhi",
        "msg": "Testing"
    }];
    res.end(JSON.stringify(str));
});

module.exports = router;