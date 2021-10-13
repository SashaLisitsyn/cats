import './styles.css';

import { useEffect, useState } from 'react';

import { Header } from '../Header';
import { CardsList } from '../CardsList';
import { CardsFilter } from '../CardsFiltet';
import { Footer } from '../Footer';

export const App = () => {
  const [cards, setCards] = useState([]);
  const [likes, setLikes] = useState([]);
  const [isFiltred, setIsFiltred] = useState(false);

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

  const handleCardLike = (card) => {
    const notExists = !likes.some((cardId) => cardId === card.id);
    if (notExists) {
      setLikes((state) => [...state, card.id]);
    } else {
      setLikes((state) => state.filter((cardId) => cardId !== card.id));
    }
  };

  const handleCardDelete = (card) => {
    setCards((state) => state.filter((cardItem) => cardItem.id !== card.id));
  };

  const handleCardFilter = () => {
    setIsFiltred(isFiltred ? false : true);
  };

  return (
    <div className="app">
      <Header />
      <CardsFilter handleCardFilter={handleCardFilter} />
      <CardsList
        cards={cards}
        likes={likes}
        handleCardLike={handleCardLike}
        handleCardDelete={handleCardDelete}
        isFiltred={isFiltred}
      />
      <Footer />
    </div>
  );
};
