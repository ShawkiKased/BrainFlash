import { RECEIVE_ALL_DECKS, RECEIVE_DECK, REMOVE_DECK } from '../actions/deck_actions';

const decksReducer = (oldState = {}, action ) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_ALL_DECKS:
            debugger
            return action.decks
            // return Object.assign({}, oldState, action.decks);
        case RECEIVE_DECK:
            debugger
            const duplicate = Object.assign({}, action.deck);
            delete duplicate["cards"];
            // nextState[action.deck.id] = action.deck;
            return Object.assign({}, oldState, duplicate);
            // return Object.assign({}, oldState, {[action.deck.id]: action.deck});
        case REMOVE_DECK:
            delete nextState[action.deckId];
            return nextState;
        default:
            return oldState;
    };
}

export default decksReducer;