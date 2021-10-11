import './styles.css';

import { useEffect, useState } from 'react';

import { Header } from '../Header';
import { Cards } from '../Cards';
import { Footer } from '../Footer';

export const App = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('https://api.unsplash.com/search/photos?query=cat', {
      headers: {
        Authorization: 'Client-ID IeCjn9OyTne41SW4UBklyy96cNSkg5L_KCdLi3zsutI',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCards(data.results);
      });
  }, []);

  console.log(cards);

  const handleCardDelete = (card) => {
    setCards((state) => state.filter((c) => c.id !== card.id));
  };

  return (
    <div className="app">
      <Header />
      <Cards cards={cards} handleCardDelete={handleCardDelete} />
      <Footer />
    </div>
  );
};
