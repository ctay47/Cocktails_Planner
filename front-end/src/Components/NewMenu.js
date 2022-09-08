import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Col, Row, Container } from 'react-bootstrap';
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

  const addMenu = (menu) => {
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
    <section className="Add">
      <Container className="square border">
        <h1>Add Drink to Menu</h1>
        <Row>
          <Form className="new" onSubmit={handleSubmit}>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalImage"
            >
              <Form.Label htmlFor="image">Image</Form.Label>
              <Col>
                <Form.Control
                  id="image"
                  name="image"
                  type="text"
                  value={menu.image}
                  onChange={handleTextChange}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalName"
            >
              <Form.Label htmlFor="name">Name</Form.Label>
              <Col>
                <Form.Control
                  id="name"
                  name="name"
                  type="text"
                  value={menu.name}
                  placeholder="Name of cocktail"
                  onChange={handleTextChange}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalGlass"
            >
              <Form.Label htmlFor="glass">Glass</Form.Label>
              <Col>
                <Form.Control
                  name="glass"
                  id="glass"
                  type="text"
                  value={menu.glass}
                  placeholder="Cocktail information"
                  onChange={handleTextChange}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalIngredients"
            >
              <Form.Label htmlFor="from">Ingredients</Form.Label>
              <Col>
                <Form.Control
                  id="ingredients"
                  name="ingredients"
                  type="text"
                  value={menu.ingredients}
                  placeholder="Ingredients"
                  onChange={handleTextChange}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalFavorite"
            >
              <Form.Label htmlFor="is_favorite">Favorite</Form.Label>
              <Col>
                <Form.Check
                  id="is_favorite"
                  type="checkbox"
                  onChange={handleCheckboxChange}
                  checked={menu.is_favorite}
                />
              </Col>
            </Form.Group>
            <input className="btn btn-primary" type="submit" />
          </Form>
        </Row>
      </Container>
    </section>
  );
};

export default NewMenu;
