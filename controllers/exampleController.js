const Example = require('../models/exampleModel');

// Example controller function
exports.getAllItems = async (req, res) => {
  try {
    const items = await Example.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
