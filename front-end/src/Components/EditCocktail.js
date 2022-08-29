import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button, Form, Container } from 'react-bootstrap';

const API = process.env.REACT_APP_API_URL;

const EditCocktail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [cocktail, setCocktail] = useState({
      name: "",
    image: "",
    info: "",
    glass: "",
    instructions: "",
    ingredients: "",
    is_favorite: false,
  });

  const handleTextChange = (event) => {
    setCocktail({ ...cocktail, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios.get(`${API}/cocktails/${id}`).then(
      (response) => setCocktail(response.data.payload),
      (error) => navigate(`/cocktails`)
    );
  }, [id, navigate]);

  const updateCocktail = () => {
    axios
      .put(`${API}/cocktails/${id}`, cocktail)
      .then((response) => {
        setCocktail(response.data);
        navigate(`/cocktails/${id}`);
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateCocktail(cocktail, id);
  };

  return (
    <div className="Edit">
      <h1> Edit Cocktail </h1>
      <br />
     
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Name:</Form.Label>
            <Form.Control
              id="name"
              value={cocktail.name}
              type="text"
              required
              onChange={handleTextChange}
             
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="image">Image:</Form.Label>
            <Form.Control
              id="image"
              value={cocktail.image}
              type="text"
              required
              onChange={handleTextChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="info">Info:</Form.Label>
            <Form.Control
              id="info"
              value={cocktail.info}
              type="text"
              required
              onChange={handleTextChange}
             
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="glass">Glass:</Form.Label>
            <Form.Control
              id="glass"
              value={cocktail.glass}
              type="text"
              required
              onChange={handleTextChange}
             
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="instructions">Instructions:</Form.Label>
            <Form.Control
              id="instructiions"
              value={cocktail.instructions}
              type="text"
              required
              onChange={handleTextChange}
           
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="ingredients">Ingredients:</Form.Label>
            <Form.Control
              id="instructiions"
              value={cocktail.ingredients}
              type="text"
              required
              onChange={handleTextChange}
           
            />
          </Form.Group>
          <br />
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form>
        <Link to={`/cocktails/${id}`}>
          <Button variant="dark">Cancel</Button>
        </Link>
      </Container>
    </div>
  );
};

export default EditCocktail;
