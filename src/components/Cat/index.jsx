import './styles.css';

import { useState } from 'react';

export const Cat = ({ cat }) => {
  const [currentUser, setCurrentUser] = useState({});

  const isLiked = cat.id === currentUser.id;

  const catLikeButtonClassName = `cat__like ${
    isLiked ? 'cat__like_active' : ''
  }`;

  const handleLikeClick = () => {
    isLiked ? setCurrentUser({}) : setCurrentUser(cat);
  };

  return (
    <div className="cat">
      <img className="cat__photo" src={cat.urls.regular} alt={cat.user.name} />
      <button className="cat__delete" type="button"></button>
      <a
        className="cat__user-instagram"
        target="blank"
        href={`https://www.instagram.com/${cat.user.social.instagram_username}/`}
      >
        Instagram: {cat.user.social.instagram_username}
      </a>
      <div className="cat__description">
        <button
          className={catLikeButtonClassName}
          onClick={handleLikeClick}
        ></button>
      </div>
    </div>
  );
};
