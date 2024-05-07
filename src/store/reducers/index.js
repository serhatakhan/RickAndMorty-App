import { combineReducers } from "redux"; 
import characterReducer from "./charactersReducers";
import episodeReducer from "./episodeReducers";

const rootReducer = combineReducers({
    characters: characterReducer,
    episode: episodeReducer
})

export default rootReducer