import './styles.css';

import { CardItem } from '../CardItem';

export const CardsList = (props) => {
  const { cards, likes, handleCardLike, handleCardDelete, isFiltred } = props;

  return (
    <main className="cards-list">
      {cards.map((card) => {
        const cardLiked = likes.filter((cardLiked) => cardLiked === card.id)[0];
        if (isFiltred && cardLiked) {
          return (
            <CardItem
              key={card.id}
              card={card}
              like={cardLiked}
              handleCardLike={handleCardLike}
              handleCardDelete={handleCardDelete}
            />
          );
        } else if (isFiltred === false) {
          return (
            <CardItem
              key={card.id}
              card={card}
              like={cardLiked}
              handleCardLike={handleCardLike}
              handleCardDelete={handleCardDelete}
            />
          );
        }
      })}
    </main>
  );
};
