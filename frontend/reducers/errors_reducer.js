import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";
import cardErrorsReducer from "./card_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    card: cardErrorsReducer
});

export default errorsReducer;