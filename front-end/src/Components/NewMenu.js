import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

const NewMenu = () => {
 const navigate = useNavigate();
 const [menu, setMenu] = useState({
     name: '',
     image: '',
   info: '',
   glass: '',
     instructions: '',
     ingredients: '',
     is_favorite: false,
   
 });
const addMenu = () => {
  axios
    .post(`${API}/menus`, menu)
    .then((response) => navigate(`/menus`))
    .catch((error) => console.log(error));
};

const handleTextChange = (event) => {
  setMenu({ ...menu, [event.target.id]: event.target.value });
};
    
 const handleCheckboxChange = () => {
   setMenu({ ...menu, is_favorite: !menu.is_favorite });
 };   

const handleSubmit = (event) => {
  event.preventDefault();
  addMenu();
};


  return (
    <div>
      {' '}
      <form className="new" onSubmit={handleSubmit}>
        <label htmlFor="date">Image:</label>
        <input
          id="image"
          name="image"
          type="text"
          value={menu.image}
          onChange={handleTextChange}
        />
        <input
          id="name"
          name="name"
          type="text"
          value={menu.name}
          placeholder="Name of cocktail"
          onChange={handleTextChange}
        />
        <label htmlFor="info">Info:</label>
        <input
          name="info"
          id="info"
          type="text"
          value={menu.info}
          placeholder="Cocktail information"
          onChange={handleTextChange}
        />
        <label htmlFor="from">Ingredients:</label>
        <input
          id="ingredients"
          name="ingredients"
          type="text"
          value={menu.ingredients}
          placeholder="Ingredients"
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={menu.is_favorite}
        />
        <input className="btn" type="submit" />
      </form>
    </div>
  );
}

export default NewMenu