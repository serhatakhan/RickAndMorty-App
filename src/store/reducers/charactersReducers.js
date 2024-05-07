import {
  CHANGE_PARAMS,
  FETCH_CHARACTER,
  FETCH_SINGLECHARACTER,
  LOAD_MORE,
  PENDING_CHARACTER,
  PENDING_SINGLECHARACTER,
  REJECT_CHARACTER,
  REJECT_SINGLECHARACTER,
  RESET_DATA,
} from '../types/characterTypes';

const initialState = {
  characterList: [],
  pending: false,
  error: null,
  singleCharacter: {}, // gelecek veri obje olduğu için boş obje tanımla
  pendingSingleCharacter: false,
  errorSingleCharacter: null,
  params: {
    page: 1,
    count:20,
    status: null,
    gender: null,
    name: null,
  },
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

    case RESET_DATA:
      return {
        ...state,
        pendingSingleCharacter: false,
        errorSingleCharacter: null,
        singleCharacter: {},
      };

    case CHANGE_PARAMS:
      return {
        ...state,
        params: {...state.params, ...action.params},
        // bu sefer payload değil de params diye gönderdik. obje olarak geldiği için {} şeklinde yaptık
      };

    case LOAD_MORE:
      return {
        ...state,
        characterList: [...state.characterList, ...action.payload],
      };

    default:
      return state;
  }
};

export default characterReducer;
