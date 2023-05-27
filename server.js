const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/rooms', require('./routes/roomRoutes'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
