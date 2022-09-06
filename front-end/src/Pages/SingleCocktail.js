import React from 'react';
import Loading from '../Components/Loading';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NewMenu from '../Components/NewMenu';
import { Card, Container } from 'react-bootstrap';


const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
  }, [id]);

  
  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  } else {
    const { name, image, category, info, glass, instructions, ingredients } =
      cocktail;
    return (
      <section>
        <Container>
          <Card className="card" style={{ width: '35rem' }}>
            <Card.Title className="section-title">
              <h2>{name}</h2>{' '}
            </Card.Title>

            <Card.Img variant="top" src={image} alt={name} />
            <Card.Body>
              <Card.Text>
                <p>
                  <span className="drink-data">name :</span> {name}
                </p>
                <p>
                  <span className="drink-data">category :</span> {category}
                </p>
                <p>
                  <span className="drink-data">info :</span> {info}
                </p>
                <p>
                  <span className="drink-data">glass :</span> {glass}
                </p>
                <p>
                  <span className="drink-data">instructons :</span>{' '}
                  {instructions}
                </p>
              </Card.Text>
              <p>
                <span className="drink-data">ingredients :</span>
                {ingredients.map((item, index) => {
                  return item ? <span key={index}> {item}</span> : null;
                })}
              </p>
              <Link to="/search" className="btn btn-primary">
                back home
              </Link>{' '}
              <Link to="/menupage" className="btn btn-primary">
                Menu
              </Link>
              <NewMenu />
            </Card.Body>
          </Card>
        </Container>
      </section>
    );
  }
}
export default SingleCocktail;