import { EPISODES_URL } from "../../service/urls";
import { getRequest } from "../../service/verbs";
import { FETCH_EPISODE, PENDING_EPISODE, REJECT_EPISODE } from "../types/episodeTypes";

export const getEpisodeList = params => {
    return async dispatch => {
      // istek çıktığı zaman spinner basmak için
      dispatch({type: PENDING_EPISODE});
  
      try {
        // bölümleri almak için istek at
        const response = await getRequest(EPISODES_URL, params); // yanına parametreleri ekle
        // console.log(response.data.results);
        dispatch({
          type: FETCH_EPISODE,
          payload: response.data.results,
        });
      } catch (error) {
        dispatch({
          type: REJECT_EPISODE,
          error: error,
        });
      }
    };
  };