import React, { useState, useEffect } from 'react';

function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);

  console.log('#### match:', match);

  // const [item, setItem] = useState({});
  const [itemName, setItemName] = useState();
  const [itemIcon, setitemIcon] = useState();

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-api.p.rapidapi.com/item-details/${match.params.id}/ru`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'fortnite-api.p.rapidapi.com',
          'x-rapidapi-key':
            'ecc6e4ee54msh751a7265224f376p13f3b5jsnb14d42639e2f',
        },
      }
    );

    const item = await fetchItem.json();
    // setItem(item);
    setItemName(item.item.name);
    setitemIcon(item.item.images.icon);

    console.log('#### icon:', item.item.images.icon);
  };

  return (
    <div>
      <h1>{itemName}</h1>
      <img src={itemIcon} />
    </div>
  );
}

export default ItemDetail;
