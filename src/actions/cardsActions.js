import {
  FETCH_CARDS,
  DELETE_CARD,
  LIKE_CARD,
  FILTRED_CARDS,
} from '../types/cardsTypes';

export const fetchCards = () => {
  return async (dispatch) => {
    const response = await fetch(
      'https://api.unsplash.com/search/photos?query=cat',
      {
        headers: {
          Authorization:
            'Client-ID IeCjn9OyTne41SW4UBklyy96cNSkg5L_KCdLi3zsutI',
        },
      }
    );
    const json = await response.json();
    dispatch({ type: FETCH_CARDS, payload: json.results });
  };
};

export const deleteCard = (cardItem) => {
  return {
    type: DELETE_CARD,
    payload: cardItem,
  };
};

export const likeCard = (cardItem) => {
  return {
    type: LIKE_CARD,
    payload: cardItem,
  };
};

export const filterCards = (filterStatus) => {
  return {
    type: FILTRED_CARDS,
    payload: filterStatus,
  };
};
