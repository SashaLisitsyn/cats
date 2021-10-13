import './styles.css';

export const CardItem = (props) => {
  const { card, like, handleCardLike, handleCardDelete } = props;

  const cardLikeButtonClassName = `card-item__like ${
    like ? 'card-item__like_active' : ''
  }`;

  const handleLikeClick = () => {
    handleCardLike(card);
  };

  const handleDeleteClick = () => {
    handleCardDelete(card);
  };

  return (
    <div className="card-item">
      <img
        className="card-item__photo"
        src={card.urls.regular}
        alt={card.user.name}
      />
      <button
        className="card-item__delete"
        type="button"
        onClick={handleDeleteClick}
      ></button>
      <a
        className="card-item__user-instagram"
        target="blank"
        href={`https://www.instagram.com/${card.user.social.instagram_username}/`}
      >
        Instagram: {card.user.social.instagram_username}
      </a>
      <div className="card-item__description">
        <button
          className={cardLikeButtonClassName}
          onClick={handleLikeClick}
        ></button>
      </div>
    </div>
  );
};
