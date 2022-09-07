import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Form, Container,Row,Col } from 'react-bootstrap';

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
    <section className="Edit">
      <Container className="square border">
        <Row>
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label htmlFor="name">Image</Form.Label>
              <Col>
                <Form.Control
                  id="image"
                  value={menu.image}
                  type="text"
                  required
                  onChange={handleTextChange}
                />
              </Col>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="name">Name</Form.Label>

              <Col>
                <Form.Control
                  id="name"
                  value={menu.name}
                  type="text"
                  required
                  onChange={handleTextChange}
                  placeholder="Cocktail Name"
                />
              </Col>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="info">Glass</Form.Label>
              <Col>
                <Form.Control
                  id="glass"
                  value={menu.glass}
                  type="text"
                  onChange={handleTextChange}
                  placeholder="Glass"
                />
              </Col>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="name">Ingredients</Form.Label>
              <Col>
                <Form.Control
                  id="ingredients"
                  value={menu.ingredients}
                  type="text"
                  required
                  onChange={handleTextChange}
                  placeholder="Ingredients"
                />
              </Col>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="is_favorite">Favorite</Form.Label>
              <Col>
                <Form.Check
                  id="is_favorite"
                  value={menu.is_favorite}
                  type="checkbox"
                  required
                  onChange={handleCheckboxChange}
                 
                />
              </Col>
            </Form.Group>

            <button className='btn btn-primary' type="submit">
              Submit
            </button>
            {' '}
            <Link to={`/menus/${id}`}>
              <button className='btn btn-primary'>Cancel</button>
            </Link>
          </Form>
        </Row>
      </Container>
    </section>
  );
}

export default EditMenu