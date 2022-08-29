// DEPENDENCIES
const express = require('express');
const cors = require('cors');

// CONFIGURATION
const app = express();

//CONTROLLER
const coctailController = require('./controllers/cocktailController');

// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use('/cocktails', coctailController);

// ROUTES
app.get('/', (req, res) => {
  res.send("Welcome to Cocktail Planner");
});

app.get('*', (req, res) => {
  res.status(404).json({ error: 'not found' });
});

// EXPORT
module.exports = app;
