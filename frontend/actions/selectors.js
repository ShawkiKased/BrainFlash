import values from 'lodash/values';

export const selectAllDecks = state => values(state.entities.deck);

export const selectDeckCards = (state, deck) => {
    if (deck) {
        return deck.cards.map( cardId => state.entities.cards[cardId]);
    }else {
        return [];
    };
};

export const selectDeckSingleCard = (state, cardId) => {
    return state.entities.cards[cardId];
};