const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const connectDB = require('./config/database');
const authRoutes = require('./routes/auth');

const jwtSecret = "your_jwt_secret_key"

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});