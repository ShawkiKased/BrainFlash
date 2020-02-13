import { RECEIVE_ALL_DECKS, RECEIVE_DECK, REMOVE_DECK } from '../actions/deck_actions';

const decksReducer = (oldState = {}, action ) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_ALL_DECKS:
            return Object.assign({}, oldState, action.decks);
        case RECEIVE_DECK:
            return Object.assign({}, oldState, {[action.deck.id]: action.deck});
        case REMOVE_DECK:
            let nextState = Object.assign({}, oldState);
            delete nextState[action.deckId];
            return nextState;
        default:
            return oldState;
    };
}

export default decksReducer;