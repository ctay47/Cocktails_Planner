import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button, Card, Container} from 'react-bootstrap';

const API = process.env.REACT_APP_API_URL;

const CocktailDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cocktail, setCocktail] = useState({});

  useEffect(() => {
    axios
      .get(`${API}/cocktails/${id}`)
      .then((response) => setCocktail(response.data.payload))
      .catch((err) => console.error(err));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`${API}/cocktails/${id}`)
      .then((response) => navigate(`/cocktails`))
      .catch((error) => console.log(error));
  };

  return (
    <div className="Cocktail">
      <Container>
       <Card className="card" style={{ width: '35rem' }}>
          <Card.Text></Card.Text>
          <Card.Img variant="top" src={cocktail.image} />
          <Card.Body>
            <Card.Title>
              <h3>{cocktail.name}</h3>
            </Card.Title>
            <Card.Text>
              <h3>Info: {cocktail.info}</h3>
              <h3>Glass: {cocktail.glass}</h3>
             <h3>Instructions: {cocktail.instructions}</h3>
             <h3>Ingredients: {cocktail.ingredients}</h3>
                          
            </Card.Text>
            <div className="px-2">
              <Link to="/cocktails">
                <Button variant="dark">Back</Button>
              </Link>
              <Link to={`/cocktails/${id}/edit`}>
                <Button variant="dark">Edit</Button>
              </Link>
              <Link to="/cocktails">
                <Button variant="dark" onClick={handleDelete}>
                  Delete
                </Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default CocktailDetails;
