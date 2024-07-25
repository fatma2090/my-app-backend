const express = require('express');
const router = express.Router();
const exampleController = require('../controllers/exampleController');

// Example route to get all items
router.get('/', exampleController.getAllItems);

module.exports = router;
