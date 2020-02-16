import { connect } from 'react-redux';
import CardsIndex from './cards_index';
import {createCard, deleteCard } from '../../actions/card_actions';
import { fetchDeck } from '../../actions/deck_actions';
import { withRouter } from 'react-router-dom';

const mStP = (state, ownProps) => {
    return{
        cards: state.entities.cards,
        deck: (state.entities.deck[ownProps.match.params.deckId]) || { cardIds: [] }
    };
}

const mDtP = dispatch => {
    return{
        createCard: card => dispatch(createCard(card)),
        deleteCard: cardId => dispatch(deleteCard(cardId)),
        fetchDeck: deckId => dispatch(fetchDeck(deckId))
    };
}

export default withRouter(connect(mStP,mDtP)(CardsIndex));