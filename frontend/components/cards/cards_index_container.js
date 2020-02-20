import { connect } from 'react-redux';
import CardsIndex from './cards_index';
import {createCard, deleteCard } from '../../actions/card_actions';
import { fetchDeck } from '../../actions/deck_actions';
import { withRouter } from 'react-router';

// const mStP = (state, ownProps) => {
//    
//     return{
//         cards: state.entities.cards,
//         deck: (state.entities.decks[ownProps.match.params.deckId]) || { cardIds: [] },
//         hideDelete: ownProps.hideDelete
//     };
// }
// const mStP = (state, ownProps) => {
//     debugger
//     return {
//         cards: state.entities.cards,
//         decks: state.entities.decks,
//         hideDelete: state.hideDelete,
//         deckId: ownProps.match.params.id
//     };
// }

const mStP = state => {
    return {
        cards: state.entities.cards,
        decks: state.entities.decks,
        hideDelete: state.hideDelete
    };
}

const mDtP = dispatch => {
    return{
        createCard: card => dispatch(createCard(card)),
        deleteCard: cardId => dispatch(deleteCard(cardId)),
        fetchDeck: deckId => dispatch(fetchDeck(deckId)),
        // fetchCards: deckId => dispatch(fetchCards(deckId))
    };
}

export default connect(mStP,mDtP)(withRouter(CardsIndex));