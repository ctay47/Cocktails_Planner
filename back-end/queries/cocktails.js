const db = require('../db/dbConfig.js')

//INDEX
const getAllCocktails = async () => {
    try{
        const allCocktails = await db.any("SELECT * FROM cocktails")
        return allCocktails;
    }catch(err){
        return err;
    };
}; 

//SHOW
const getCocktail = async (id) => {
    try{
        const oneCocktail = await db.one("SELECT * FROM cocktails WHERE id=$1", id);
        return oneCocktail;
    }catch(err){
        return err;
    };
};

//NEW
const createCocktail = async (cocktail) => {
    const { name, image, info, glass, instructions, ingredients, is_favorite } = cocktail;
    try{
        const newCocktail = await db.one(
          'INSERT INTO cocktails (name, image, info, glass, instructions, ingredients,is_favorite) VALUES ($1, $2, $3, $4, $5, $6,$7) RETURNING *',
          [name, image, info, glass, instructions, ingredients, is_favorite]
        );
        return newCocktail;
    }catch(err){
        return err;
    };
};

//EDIT
const updateCocktail = async (cocktail, id) => {
    const { name, image, info, glass, instructions, ingredients,is_favorite } = cocktail;
    try{
        const updatedCocktail = await db.one(
          'UPDATE cocktails SET name=$1, image=$2, info=$3, glass=$4, instructions=$5, ingredients=$6,is_favorite=$7 WHERE id=$8 RETURNING *',
          [name, image, info, glass, instructions, ingredients, is_favorite, id]
        );
        return updatedCocktail;
    }catch(err){
        return err;
    };
};

//DELETE
const deleteCocktail = async (id) =>{
    try{
        const deletedCocktail = await db.one("DELETE FROM cocktails WHERE id=$1 RETURNING *", id);
        return deletedCocktail;
    }catch(err){
        return err;
    };
};

module.exports = {getAllCocktails,getCocktail,createCocktail,updateCocktail,deleteCocktail}