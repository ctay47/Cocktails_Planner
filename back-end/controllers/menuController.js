const express = require('express');
const menus = express.Router();

const { getAllMenus, getMenu, createMenu, updateMenu, deleteMenu } = require('../queries/menus');

menus.get('/', async (req, res) => {
    const allMenus = await getAllMenus();
    if (allMenus[0]) {
        res.status(200).json({payload: allMenus, success: true})
    } else {
        res.status(500).json({error: 'server error'})
    }
})

menus.get('/:id', async (req, res) => {
  const { id } = req.params;
  const menu = await getMenu(id);
  if (menu.id) {
    res.json({ payload: menu, success: true });
  } else {
    res.status(404).json({ payload: 'not found', success: false });
  }
});

menus.post('/', async (req, res) => {
   try {
    const createdMenu = await createMenu(req.body);
    if (createdMenu.id) {
      res.status(200).json({
        success: true,
        payload: createdMenu,
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

menus.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updatedMenu = await updateMenu(req.body, id);
  if (updatedMenu.id) {
    res.status(200).json(updatedMenu);
  } else {
    res.status(404).json({ error: 'menu not found' });
  }
});

menus.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deletedMenu = await deleteMenu(id);
  if (deletedMenu.id) {
    res.status(200).json({ payload: deletedMenu, success: true });
  } else {
    res.status(404).json({ payload: 'not found', success: false });
  }
});




module.exports = menus;