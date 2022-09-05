// DEPENDENCIES
const express = require('express');
const cors = require('cors');

// CONFIGURATION
const app = express();

//CONTROLLER
const menuController = require('./controllers/menuController');

// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use('/menus', menuController);

// ROUTES
app.get('/', (req, res) => {
  res.send("Welcome to Menu Planner");
});

app.get('*', (req, res) => {
  res.status(404).json({ error: 'not found' });
});

// EXPORT
module.exports = app;
