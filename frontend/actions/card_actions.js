import * as APIUtil from "../util/card_api_util";


export const RECEIVE_ALL_CARDS = "RECEIVE_ALL_CARDS";
export const RECEIVE_CARD = "RECEIVE_CARD";
export const REMOVE_CARD = "REMOVE_CARD";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveCard = ({card, deck}) => {
    return {
        type: RECEIVE_CARD,
        card,
        deck
    };
}

const receiveCards = ({ cards, deck }) => {
    return {
        type: RECEIVE_ALL_CARDS,
        cards,
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

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors,
  };
};

export const fetchCards = deckId => dispatch => {
    return APIUtil.fetchCards(deckId)
    .then((cards) => dispatch(receiveCards(cards)))
}

export const createCard = card => dispatch => {
    return APIUtil.createCard(card)
    .then(card => dispatch(receiveCard(card)))
}

export const deleteCard = cardId => dispatch => {
    return APIUtil.removeCard(cardId)
    .then(cardId => dispatch(removeCard(cardId)))
}
