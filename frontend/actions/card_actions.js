import * as APIUtil from "../util/card_api_util";


export const RECEIVE_ALL_CARDS = "RECEIVE_ALL_CARDS";
export const RECEIVE_CARD = "RECEIVE_CARD";
export const REMOVE_CARD = "REMOVE_CARD";

const receiveCard = ({card, deck}) => {
    return {
        type: RECEVE_CARD,
        card,
        deck
    };
}

const removeCard = ({cardId, deck}) => {
    return {
        type: REMOVE_CARD,
        cardId,
        deck
    };
}

export const fetchCards = deckId => dispatch => {
    return APIUtil.fetchCards(deckId)
    .then(() => dispatch(receiveCard()))
}

export const createCard = card => dispatch => {
    return APIUtil.createCard(card)
    .then(card => dispatch(receiveCard(card)))
}

export const deleteCard = cardId => dispatch => {
    return APIUtil.removeCard(cardId)
    .then(cardId => dispatch(removeCard(cardId)))
}
