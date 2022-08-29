import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const API = process.env.REACT_APP_API_URL;

const NewCocktail = () => {
  const navigate = useNavigate();

  const [newCocktail, setNewCocktail] = useState({
    name: '',
    image: '',
    info: '',
    glass: '',
    instructions: '',
    ingredients: '',
    is_favorite: false,
  });

  const handleTextChange = (e) => {
    setNewCocktail({ ...newCocktail, [e.target.id]: e.target.value });
  };

  const addCocktail = () => {
    axios
      .post(`${API}/cocktails`, newCocktail)
      .then((res) => navigate(`/cocktails`))
      .catch((err) => console.log(err));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    addCocktail(newCocktail);
  };

  return (
    <div className="New">
      <h1>Add New Cocktail </h1>
    
      
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
              id="name"
              value={newCocktail.name}
              onChange={handleTextChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image:</Form.Label>
            <Form.Control
              type="text"
              placeholder="https://..."
              id="image"
              value={newCocktail.image}
              onChange={handleTextChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Info:</Form.Label>
            <Form.Control
              type="text"
              id="info"
              value={newCocktail.info}
              onChange={handleTextChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Glass:</Form.Label>
            <Form.Control
              type="text"
              id="glass"
              value={newCocktail.glass}
              onChange={handleTextChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Instructions:</Form.Label>
            <Form.Control
              type="text"
              id="instructions"
              value={newCocktail.instructions}
              onChange={handleTextChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Ingredients:</Form.Label>
            <Form.Control
              type="text"
              id="ingredients"
              value={newCocktail.ingredients}
              onChange={handleTextChange}
            />
          </Form.Group>

          <Button variant="dark" type="submit">
            Submit
          </Button>
          <Link to="/cocktails">
            <Button variant="dark" type="submit">
              Go Back
            </Button>
          </Link>
        </Form>
      </Container>
    </div>
  );
};

export default NewCocktail;
