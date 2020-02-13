import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import decksReducer from './decks_reducer';
import cardsReducer from './cards_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    decks: decksReducer,
    cards: cardsReducer
});

export default entitiesReducer;

