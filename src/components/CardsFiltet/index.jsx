import './styles.css';

export const CardsFilter = ({ handleCardFilter }) => {
  return (
    <div className="cards-filter">
      <button
        className="cards-filter__button"
        onClick={handleCardFilter}
      ></button>
    </div>
  );
};
