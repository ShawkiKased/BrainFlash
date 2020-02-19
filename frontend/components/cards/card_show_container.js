import { connect } from 'react-redux';
import CardShow from './card_show';
import { deleteCard } from '../../actions/card_actions';
import { withRouter } from 'react-router-dom';

const mStP = (state, ownProps) => {
    return {
        cards: state.entities.cards,
        currentCard: (state.entities.cards[ownProps.match.params.cardId]),
        deck: (ownProps.location.state ? ownProps.location.state.deck : ""),
        answer: (ownProps.location.state ? ownProps.location.state.answer : "")
    };
}

const mDtP = dispatch => {
    return {
        deleteCard: cardId => dispatch(deleteCard(cardId))
    };
}

export default connect(mStP, mDtP)(withRouter(CardShow));