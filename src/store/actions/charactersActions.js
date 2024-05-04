import {CHARACTERS_URL} from '../../service/urls';
import {getRequest} from '../../service/verbs';
import {
  FETCH_CHARACTER,
  FETCH_SINGLECHARACTER,
  PENDING_CHARACTER,
  PENDING_SINGLECHARACTER,
  REJECT_CHARACTER,
  REJECT_SINGLECHARACTER,
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

export const getSingleCharacter = id => {
  const url = `${CHARACTERS_URL}/${id}` // mesela character/3 olması gerekiyor

  return async dispatch => {
    // istek çıktığı zaman spinner basmak için
    dispatch({type: PENDING_SINGLECHARACTER});

    try {
      // tek bir karakteri almak için yukarıda düzenlediğimiz url'e istek at
      const response = await getRequest(url);
      // console.log(response.data);
      dispatch({
        type: FETCH_SINGLECHARACTER,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: REJECT_SINGLECHARACTER,
        error: error,
      });
    }
  };
};
