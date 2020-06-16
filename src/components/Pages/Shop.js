import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import s from './Shop.module.scss';

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      'https://fortnite-api.p.rapidapi.com/upcoming-items/ru',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'fortnite-api.p.rapidapi.com',
          'x-rapidapi-key':
            'ecc6e4ee54msh751a7265224f376p13f3b5jsnb14d42639e2f',
        },
      }
    );
    const items = await data.json();
    console.log('#### data:', items.items);
    setItems(items.items);
  };

  return (
    <div>
      {items.map((item) => (
        <h1 key={item.id}>
          <Link to={`/shop/${item.id}`}> {item.name} </Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;
