import './styles.css';

import { useSelector, useDispatch } from 'react-redux';
import { filterCards } from '../../actions/cardsActions';

export const CardsLikedFilter = () => {
  const dispatch = useDispatch();
  const filterStatus = useSelector((cardsList) => cardsList.cards.isFilter);

  const handleCardFilter = () => {
    dispatch(filterCards(!filterStatus));
  };

  return (
    <div className="cards-filter">
      <button
        className="cards-filter__button"
        onClick={handleCardFilter}
      ></button>
    </div>
  );
};
