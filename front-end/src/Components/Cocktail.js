import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Cocktail({ cocktail, image, name, id, info, glass }) {
  return (
    <div className="Cocktail">
      <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src={cocktail.image} alt={cocktail.name} />
        <Card.Body>
          <Card.Title>
            <h4>{cocktail.name}</h4>
          </Card.Title>
          <Link to={`/cocktails/${cocktail.id}`}>
            <Button variant="dark">See Cocktail</Button>
          </Link>
        </Card.Body>
      </Card>
      
    </div>
  );
}

export default Cocktail;
