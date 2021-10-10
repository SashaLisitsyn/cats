import './styles.css';

export const Cat = ({ cat }) => {
  const handleCatLike = () => {};

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
        <button className="cat__like" onClick={handleCatLike}></button>
      </div>
    </div>
  );
};
