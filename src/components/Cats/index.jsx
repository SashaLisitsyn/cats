import './styles.css';

import { Cat } from '../Cat';

import { useEffect, useState } from 'react';

export const Cats = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetch('https://api.unsplash.com/search/photos?query=cat', {
      headers: {
        Authorization: 'Client-ID IeCjn9OyTne41SW4UBklyy96cNSkg5L_KCdLi3zsutI',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCats(data.results);
      });
  }, []);

  console.log(cats); // потом - удалить

  return (
    <main className="cats">
      {cats.map((cat) => (
        <Cat key={cat.id} cat={cat} />
      ))}
    </main>
  );
};
