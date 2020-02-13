import {RECEIVE_ALL_CARDS, RECEIVE_CARD, REMOVE_CARD} from '../actions/card_actions';
import {RECEIVE_DECK} from '../actions/deck_actions';

const cardsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_ALL_CARDS:
            return oldState;
        case RECEIVE_CARD:
            return Object.assign({}, oldState, {[action.card.id]: action.card});
        case REMOVE_CARD:
            let nextState = Object.assign({}, oldState);
            delete nextState[action.cardId];
            return nextState;
        case RECEIVE_DECK:
            return Object.assign({}, oldState, action.cards)
        default:
            return oldState;
    };
}

export default cardsReducer;