
const express = require('express');
const router = express.Router();
router.get('/profile', (req, res) => res.send('User profile'));
module.exports = router;
