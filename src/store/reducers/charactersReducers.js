import {
  FETCH_CHARACTER,
  PENDING_CHARACTER,
  REJECT_CHARACTER,
} from '../types/characterTypes';

const initialState = {
  characterList: [],
  pending: false,
  error: null,
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTER:
      return {
        ...state,
        characterList: action.payload,
        pending: false,
      };
    case PENDING_CHARACTER:
      return {
        ...state,
        pending: true,
      };
    case REJECT_CHARACTER:
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default characterReducer;
