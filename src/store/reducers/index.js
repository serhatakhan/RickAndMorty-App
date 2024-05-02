import { combineReducers } from "redux"; 
import characterReducer from "./charactersReducers";

const rootReducer = combineReducers({
    characters: characterReducer
})

export default rootReducer