import {RECEIVE_ERRORS } from '../actions/card_actions';

const cardErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ERRORS:
            return action.errors;
        default:
            return state;
    };
}

export default cardErrorsReducer;