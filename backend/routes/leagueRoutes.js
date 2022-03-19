const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).json({message: 'get ejffl data'})
});

router.post('/', (req, res) => {
    res.status(200).json({message: 'Create league info'})
});

router.put('/:id', (req, res) => {
    res.status(200).json({message: `update league info ${req.params.id}`});
});

router.delete('/:id', (req, res) => {
    res.status(200).json({message: `delete league info ${req.params.id}`});
});

module.exports = router;