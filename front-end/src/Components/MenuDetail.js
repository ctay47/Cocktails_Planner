import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button, Card, Container } from 'react-bootstrap';
import Loading from './Loading';
import { useGlobalContext } from '../context';
const API = process.env.REACT_APP_API_URL;

const MenuDetail = () => {
  const { id } = useParams();
  const { loading } = useGlobalContext;
  const navigate = useNavigate();
  const [menu, setMenu] = useState({});

  useEffect(() => {
    axios
      .get(`${API}/menus/${id}`)
      .then((response) => setMenu(response.data.payload))
      .catch((err) => console.error(err));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`${API}/menus/${id}`)
      .then((response) => navigate(`/menus`))
      .catch((error) => console.log(error));
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="menu">
      <Container>
        <Card className="card" style={{ width: '35rem' }}>
          <Card.Text></Card.Text>
          <Card.Img variant="top" src={menu.image} />
          <Card.Body>
            <Card.Title>
              <h3>{menu.name}</h3>
            </Card.Title>
            <Card.Text>
              <h3>Glass: {menu.glass}</h3>
              <h3>Ingredients: {menu.ingredients}</h3>
              <h3>Favorite: {menu.is_favorite ? <span>❤️</span> : null} </h3>
            </Card.Text>
            <div className="px-2">
              <Link to="/menus">
                <Button variant="dark">Back</Button>
              </Link>
              <Link to={`/menus/${id}/edit`}>
                <Button variant="dark">Edit</Button>
              </Link>
              <Link to="/snacks">
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

export default MenuDetail;
