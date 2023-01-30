const express = require('express');

const router = express.Router();

router.get('/dashboard', (req, res) => {
    res.json({ 'message': 'Access granted to dashboard!' });
});

module.exports = router;