
const express = require('express');
const router = express.Router();
const { predictSignal } = require('../controllers/ai');

router.get('/predict/:asset', async (req, res) => {
    const prediction = await predictSignal(req.params.asset);
    res.json(prediction);
});

module.exports = router;
