const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv =  require('dotenv');

// Import routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

dotenv.config();

// Connect to db
mongoose.connect( process.env.DB_CONNECT, { useNewUrlParser: true },
() => {
    console.log("Connected to db!");
});


// Middleware
app.use(express.json());
// Route Middleware
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(3000 , () => {
    console.log('listening on port 3000');
});