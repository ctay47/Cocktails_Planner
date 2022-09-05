import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button, Form, Container } from 'react-bootstrap';

const API = process.env.REACT_APP_API_URL;

const EditMenu = () => {
  const { id } = useParams();
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

  const handleTextChange = (event) => {
    setMenu({ ...menu, [event.target.id]: event.target.value });
  };
    const handleCheckboxChange = () => {
      setMenu({ ...menu, is_favorite: !menu.is_favorite });
    };

  useEffect(() => {
    axios.get(`${API}/menus/${id}`).then(
      (response) => setMenu(response.data.payload),
      (error) => navigate(`/menus`)
    );
  }, [id, navigate]);

  const updateMenu = () => {
    axios
      .put(`${API}/menus/${id}`, menu)
      .then((response) => {
        setMenu(response.data);
        navigate(`/menus/${id}`);
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateMenu(menu, id);
  };

  return (
    <div className="Edit">
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Image:</Form.Label>
            <Form.Control
              id="image"
              value={menu.image}
              type="text"
              required
              onChange={handleTextChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Name:</Form.Label>
            <Form.Control
              id="name"
              value={menu.name}
              type="text"
              required
              onChange={handleTextChange}
              placeholder="Cocktail Name"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="protein">Info:</Form.Label>
            <Form.Control
              id="info"
              value={menu.info}
              type="text"
              required
              onChange={handleTextChange}
              placeholder="Information"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Ingredients:</Form.Label>
            <Form.Control
              id="ingredients"
              value={menu.ingredients}
              type="number"
              required
              onChange={handleTextChange}
              placeholder="Ingredients"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="is_favorite">Favorite:</Form.Label>
            <Form.Control
              id="favorite"
              value={menu.is_favorite}
              type="favorite"
              required
              onChange={handleCheckboxChange}
              placeholder="Favorite Cocktail"
            />
          </Form.Group>
          <br />
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form>
        <Link to={`/menus/${id}`}>
          <Button variant="dark">Cancel</Button>
        </Link>
      </Container>
    </div>
  );
}

export default EditMenu