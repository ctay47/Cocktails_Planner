const express = require('express');
const cocktails = express.Router();

const { getAllCocktails, getCocktail, createCocktail, updateCocktail, deleteCocktail } = require('../queries/cocktails');

cocktails.get('/', async (req, res) => {
    const allCocktails = await getAllCocktails();
    if (allCocktails[0]) {
        res.status(200).json({payload: allCocktails, success: true})
    } else {
        res.status(500).json({error: 'server error'})
    }
})

cocktails.get('/:id', async (req, res) => {
  const { id } = req.params;
  const cocktail = await getCocktail(id);
  if (cocktail.id) {
    res.json({ payload: cocktail, success: true });
  } else {
    res.status(404).json({ payload: 'not found', success: false });
  }
});

cocktails.post('/', async (req, res) => {
   try {
    const createdCocktail = await createCocktail(req.body);
    if (createdCocktail.id) {
      res.status(200).json({
        success: true,
        payload: createdCocktail,
      });
    } else {
      res.status(422).json({
        success: false,
        payload: 'Must include name field',
      });
    }
  } catch (err) {
    console.log(err);
  }
});

cocktails.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updatedCocktail = await updateCocktail(req.body, id);
  if (updatedCocktail.id) {
    res.status(200).json(updatedCocktail);
  } else {
    res.status(404).json({ error: 'cocktail not found' });
  }
});

cocktails.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deletedCocktail = await deleteCocktail(id);
  if (deletedCocktail.id) {
    res.status(200).json({ payload: deletedCocktail, success: true });
  } else {
    res.status(404).json({ payload: 'not found', success: false });
  }
});




module.exports = cocktails;