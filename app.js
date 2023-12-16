// app.js
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const bodyParser = require('body-parser');
const db = require('./config/db');
const path = require('path');  // Add this line to import the 'path' module
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Use body-parser middleware to parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', userRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
