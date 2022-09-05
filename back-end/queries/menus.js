const db = require('../db/dbConfig.js')

//INDEX
const getAllMenus = async () => {
    try{
        const allMenus = await db.any("SELECT * FROM menus")
        return allMenus;
    }catch(err){
        return err;
    };
}; 

//SHOW
const getMenu = async (id) => {
    try{
        const oneMenu = await db.one("SELECT * FROM menus WHERE id=$1", id);
        return oneMenu;
    }catch(err){
        return err;
    };
};

//NEW
const createMenu = async (menu) => {
    const { name, image, info, glass, instructions, ingredients, is_favorite } = menu;
    try{
        const newMenu = await db.one(
          'INSERT INTO menus (name, image, info, glass, instructions, ingredients,is_favorite) VALUES ($1, $2, $3, $4, $5, $6,$7) RETURNING *',
          [name, image, info, glass, instructions, ingredients, is_favorite]
        );
        return newMenu;
    }catch(err){
        return err;
    };
};

//EDIT
const updateMenu = async (menu, id) => {
    const { name, image, info, glass, instructions, ingredients,is_favorite } = menu;
    try{
        const updatedMenu = await db.one(
          'UPDATE menus SET name=$1, image=$2, info=$3, glass=$4, instructions=$5, ingredients=$6,is_favorite=$7 WHERE id=$8 RETURNING *',
          [name, image, info, glass, instructions, ingredients, is_favorite, id]
        );
        return updatedMenu;
    }catch(err){
        return err;
    };
};

//DELETE
const deleteMenu = async (id) =>{
    try{
        const deletedMenu = await db.one("DELETE FROM menus WHERE id=$1 RETURNING *", id);
        return deletedMenu;
    }catch(err){
        return err;
    };
};

module.exports = {getAllMenus,getMenu,createMenu,updateMenu,deleteMenu}