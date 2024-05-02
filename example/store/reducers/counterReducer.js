import { DECREMENT, INCREMENT, RESET } from "../types/countTypes";

const initialState = {
  count: 0,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};

export default countReducer
