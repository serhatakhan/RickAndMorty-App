import {CHARACTERS_URL} from '../../service/urls';
import {getRequest} from '../../service/verbs';
import {
  FETCH_CHARACTER,
  PENDING_CHARACTER,
  REJECT_CHARACTER,
} from '../types/characterTypes';

export const getCharacterList = params => {
  return async dispatch => {
    // istek çıktığı zaman spinner basmak için
    dispatch({type: PENDING_CHARACTER});

    try {
      // karakterleri almak için istek at
      const response = await getRequest(CHARACTERS_URL);
      // console.log(response.data.results);
      dispatch({
        type: FETCH_CHARACTER,
        payload: response.data.results,
      });
    } catch (error) {
      dispatch({
        type: REJECT_CHARACTER,
        error: error,
      });
    }
  };
};
