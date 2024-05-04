import {
  FETCH_CHARACTER,
  FETCH_SINGLECHARACTER,
  PENDING_CHARACTER,
  PENDING_SINGLECHARACTER,
  REJECT_CHARACTER,
  REJECT_SINGLECHARACTER,
} from '../types/characterTypes';

const initialState = {
  characterList: [],
  pending: false,
  error: null,
  singleCharacter: {}, // gelecek veri obje olduğu için boş obje tanımla
  pendingSingleCharacter: false,
  errorSingleCharacter: null,
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

    case FETCH_SINGLECHARACTER:
      return {
        ...state,
        singleCharacter: action.payload,
        pendingSingleCharacter: false,
      };
    case PENDING_SINGLECHARACTER:
      return {
        ...state,
        pendingSingleCharacter: true,
      };
    case REJECT_SINGLECHARACTER:
      return {
        ...state,
        pendingSingleCharacter: false,
        errorSingleCharacter: action.payload,
      };
    default:
      return state;
  }
};

export default characterReducer;
