import React from 'react';
import CocktailSearch from './CocktailSearch';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const CocktailList = () => {
  const { cocktailsList, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (cocktailsList.length < 1) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria{' '}
      </h2>
    );
  }
  return (
    <section className="section">
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-center">
        {cocktailsList.map((item) => {
          return <CocktailSearch key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
