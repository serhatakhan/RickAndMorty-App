import { FETCH_EPISODE, PENDING_EPISODE, REJECT_EPISODE } from "../types/episodeTypes";

const initialState = {
  episodeList: [],
  pending: false,
  error: null,
};

const episodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EPISODE:
      return {
        ...state,
        episodeList: action.payload,
        pending: false,
      };
    case PENDING_EPISODE:
      return {
        ...state,
        pending: true,
      };
    case REJECT_EPISODE:
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default episodeReducer;
