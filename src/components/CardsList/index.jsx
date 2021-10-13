import './styles.css';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchCards } from '../../actions/cardsActions';

import { CardItem } from '../CardItem';

export const CardsList = () => {
  const dispatch = useDispatch();

  const cardsList = useSelector((cardsList) => cardsList.cards.cardsList);
  const likes = useSelector((cardsList) => cardsList.cards.likesList);
  const status = useSelector((cardsList) => cardsList.cards.isFilter);

  useEffect(() => {
    dispatch(fetchCards());
  }, []);

  return (
    <main className="cards-list">
      {cardsList.map((cardItem) => {
        const cardLiked = likes.filter(
          (cardLikedId) => cardLikedId === cardItem.id
        )[0];

        if (status && cardLiked) {
          return (
            <CardItem key={cardItem.id} cardItem={cardItem} like={cardLiked} />
          );
        } else if (status === false) {
          return (
            <CardItem key={cardItem.id} cardItem={cardItem} like={cardLiked} />
          );
        }
      })}
    </main>
  );
};
