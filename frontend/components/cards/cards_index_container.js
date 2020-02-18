import { connect } from 'react-redux';
import CardsIndex from './cards_index';
import {createCard, deleteCard } from '../../actions/card_actions';
import { fetchDeck } from '../../actions/deck_actions';

const mStP = (state, ownProps) => {
    return{
        cards: state.entities.cards,
        deck: (state.entities.deck[ownProps.match.params.deckId]) || { cardIds: [] },
        hideDelete: ownProps.hideDelete
    };
}

const mDtP = dispatch => {
    return{
        createCard: card => dispatch(createCard(card)),
        deleteCard: cardId => dispatch(deleteCard(cardId)),
        fetchDeck: deckId => dispatch(fetchDeck(deckId))
    };
}

export default connect(mStP,mDtP)(CardsIndex);