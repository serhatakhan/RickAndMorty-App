import {ADD_ITEM, REMOVE_ITEM} from '../types/todoTypes';

const initialState = {
  todo: [], // ekrana flatlisti basacağız
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        todo: [...state.todo, action.payload], // state.todo.concat(action.payload) -> böyle yaparsak da oldu
        // state'in altındaki todo dizisine, action ile gelen payloadı koy
      };
    case REMOVE_ITEM:
      return {
        ...state,
        todo: state.todo.filter(item => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default todoReducer;
