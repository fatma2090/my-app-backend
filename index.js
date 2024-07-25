const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
  console.log('Connected to MongoDB');
});

// Routes
const exampleRoutes = require('./routes/exampleRoutes');
app.use('/api/example', exampleRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
