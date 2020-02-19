import * as APIUtil from '../util/deck_api_util';

export const RECEIVE_ALL_DECKS = "RECEIVE_ALL_DECKS";
export const RECEIVE_DECK = "RECEIVE_DECK";
export const REMOVE_DECK = "REMOVE_DECK";

export const receiveAllDecks = decks => {
    return {
        type: RECEIVE_ALL_DECKS,
        decks
    };
}

export const receiveDeck = deck => {
    debugger
    return {
        type: RECEIVE_DECK,
        deck
    };
}

export const removeDeck = deckId => {
    return {
        type: REMOVE_DECK,
        deckId
    };
}

export const fetchDecks = () => dispatch => {
    return APIUtil.fetchDecks()
    .then(decks => dispatch(receiveAllDecks(decks)))
}

export const fetchDeck = deckId => dispatch => {
    return APIUtil.fetchDeck(deckId)
    .then(deck => dispatch(receiveDeck(deck)))
}

export const createDeck = deck => dispatch => {
    return APIUtil.createDeck(deck)
    .then(deck => dispatch(receiveDeck(deck)))
}

export const deleteDeck = deckId => dispatch => {
    return APIUtil.removeDeck(deckId)
    .then(deckId => dispatch(removeDeck(deckId)))
}