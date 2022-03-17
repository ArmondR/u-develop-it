// imports connection.js from db
const db = require('./db/connection');

// imports apiRoutes
const apiRoutes = require('./routes/apiRoutes');

// import express
const { json } = require('body-parser');
const express = require('express');

// add PORT designation and app expression
const PORT = process.env.PORT || 3001;
const app = express();

// import inputCheck function from util directory
const inputCheck = require('./utils/inputCheck');

// add Express.js middleware 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes
app.use('/api', apiRoutes);

// // GET test route to see if connection is working
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// });

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// function that will start the Express.js server on port 3001.
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});