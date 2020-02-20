import { connect } from 'react-redux';
import CardShow from './card_show';
import { deleteCard } from '../../actions/card_actions';
import { withRouter } from 'react-router-dom';

const mStP = (state, ownProps) => {
    // return {
    //     cards: state.entities.cards,
    //     currentCard: (state.entities.cards[ownProps.match.params.cardId]),
    //     deck: (ownProps.location.state ? ownProps.location.state.currentDeckId : ""),
    //     answer: (ownProps.location.state ? ownProps.location.state.answer : "")
    // };
    
    return {
        cards: state.entities.cards,
        currentCard: (state.entities.cards[ownProps.match.params.cardId]),
        deck: (ownProps.location.state ? state.entities.decks[ownProps.location.state.currentDeckId] : ""),
        answer: (ownProps.location.state ? state.entities.cards[ownProps.match.params.cardId].answer : "")
    };
}

const mDtP = dispatch => {
    return {
        deleteCard: cardId => dispatch(deleteCard(cardId))
    };
}

export default connect(mStP, mDtP)(withRouter(CardShow));