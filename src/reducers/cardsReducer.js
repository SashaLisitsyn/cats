import {
  FETCH_CARDS,
  LIKE_CARD,
  DELETE_CARD,
  FILTRED_CARDS,
} from '../types/cardsTypes';

const initialState = {
  cardsList: [],
  likesList: [],
  isFilter: false,
};

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARDS:
      return { ...state, cardsList: action.payload };

    case DELETE_CARD:
      const cardItemId = action.payload;
      return {
        ...state,
        cardsList: state.cardsList.filter(
          (cardItem) => cardItem.id !== cardItemId
        ),
      };

    case LIKE_CARD:
      let editedLikes = [];
      const cardItem = action.payload;
      const notExists = !state.likesList.some(
        (cardItemId) => cardItemId === cardItem.id
      );
      if (notExists) {
        editedLikes = [...state.likesList, cardItem.id];
      } else {
        editedLikes = state.likesList.filter(
          (cardItemId) => cardItemId !== cardItem.id
        );
      }
      return {
        ...state,
        likesList: editedLikes,
      };

    case FILTRED_CARDS:
      const status = action.payload;
      return {
        ...state,
        isFilter: status,
      };

    default:
      return state;
  }
};
