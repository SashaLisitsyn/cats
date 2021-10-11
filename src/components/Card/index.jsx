import './styles.css';

import { useState } from 'react';

export const Card = ({ card, handleCardDelete }) => {
  const [currentUser, setCurrentUser] = useState({});

  const isLiked = card.id === currentUser.id;

  const cardLikeButtonClassName = `card__like ${
    isLiked ? 'card__like_active' : ''
  }`;

  const handleLikeClick = () => {
    isLiked ? setCurrentUser({}) : setCurrentUser(card);
  };

  const handleDeleteClick = () => {
    handleCardDelete(card);
  };

  return (
    <div className="card">
      <img
        className="card__photo"
        src={card.urls.regular}
        alt={card.user.name}
      />
      <button
        className="card__delete"
        type="button"
        onClick={handleDeleteClick}
      ></button>
      <a
        className="card__user-instagram"
        target="blank"
        href={`https://www.instagram.com/${card.user.social.instagram_username}/`}
      >
        Instagram: {card.user.social.instagram_username}
      </a>
      <div className="card__description">
        <button
          className={cardLikeButtonClassName}
          onClick={handleLikeClick}
        ></button>
      </div>
    </div>
  );
};
