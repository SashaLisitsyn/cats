import './styles.css';

import { Card } from '../Card';

export const Cards = ({ cards, handleCardDelete }) => {
  return (
    <main className="cards">
      {cards.map((card) => (
        <Card key={card.id} card={card} handleCardDelete={handleCardDelete} />
      ))}
    </main>
  );
};
