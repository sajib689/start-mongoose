const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const todoHandler = require('./routeHandler/todoHandler')

const app = express();
app.use(express.json());

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
};

    app.use('/todo', todoHandler)

// Error handler middleware
function errorHandler(err, req, res, next) {
    if (res.headersSent) { 
        return next(err);
    }
    res.status(500).json({ error: err.message });
}

// Connect to the database
dbConnection();

// Start the server
app.listen(3000, () => {
    console.log("Listening on port 3000");
});
