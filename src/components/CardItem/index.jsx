import './styles.css';

import { useDispatch } from 'react-redux';

import { deleteCard, likeCard } from '../../actions/cardsActions';

export const CardItem = (props) => {
  const { cardItem, like } = props;

  const dispatch = useDispatch();

  const handleLikeClick = () => {
    dispatch(likeCard(cardItem));
  };

  const handleDeleteClick = () => {
    dispatch(deleteCard(cardItem.id));
  };

  const cardLikeButtonClassName = `card-item__like ${
    like ? 'card-item__like_active' : ''
  }`;

  return (
    <div className="card-item">
      <img
        className="card-item__photo"
        src={cardItem.urls.regular}
        alt={cardItem.user.name}
      />
      <button
        className="card-item__delete"
        type="button"
        onClick={handleDeleteClick}
      ></button>
      <a
        className="card-item__user-instagram"
        target="blank"
        href={`https://www.instagram.com/${cardItem.user.social.instagram_username}/`}
      >
        Instagram: {cardItem.user.social.instagram_username}
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
