import { combineReducers } from "redux"; 
import characterReducer from "./charactersReducers";
import episodeReducer from "./episodeReducers";
import locationReducer from "./locationsReducers";

const rootReducer = combineReducers({
    characters: characterReducer,
    episode: episodeReducer,
    location: locationReducer
})

export default rootReducer