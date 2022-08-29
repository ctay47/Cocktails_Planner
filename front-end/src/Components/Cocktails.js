import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Cocktail from './Cocktail';
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';

const API = process.env.REACT_APP_API_URL;

const Cocktails = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/cocktails`)
      .then((res) => setCocktails(res.data.payload))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="Cocktails">
      <Container>
       
            <CardGroup>
              {cocktails.map((cocktail) => (
                <Cocktail key={cocktail.id} cocktail={cocktail} />
              ))}
            </CardGroup>
          
      </Container>
    </div>
  );
};

export default Cocktails;
