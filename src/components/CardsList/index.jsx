import './styles.css';

import { CardItem } from '../CardItem';

export const CardsList = (props) => {
  const { cards, likes, handleCardLike, handleCardDelete } = props;

  return (
    <main className="cards">
      {cards.map((card) => {
        const cardLiked = likes.filter((cardLiked) => cardLiked === card.id)[0];
        return (
          <CardItem
            key={card.id}
            card={card}
            like={cardLiked}
            handleCardLike={handleCardLike}
            handleCardDelete={handleCardDelete}
          />
        );
      })}
    </main>
  );
};
