import { LOCATIONS_URL } from "../../service/urls";
import { getRequest } from "../../service/verbs";
import { FETCH_LOCATION, PENDING_LOCATION, REJECT_LOCATION } from "../types/locationTypes";

export const getLocationList = params => {
    return async dispatch => {
      // istek çıktığı zaman spinner basmak için
      dispatch({type: PENDING_LOCATION});
  
      try {
        // lokasyonları almak için istek at
        const response = await getRequest(LOCATIONS_URL, params); // yanına parametreleri ekle
        // console.log(response.data.results);
        dispatch({
          type: FETCH_LOCATION,
          payload: response.data.results,
        });
      } catch (error) {
        dispatch({
          type: REJECT_LOCATION,
          error: error,
        });
      }
    };
  };