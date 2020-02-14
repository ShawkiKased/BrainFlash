import { connect } from 'react-redux';
import { createCard } from '../../actions/card_actions';
import { withRouter } from 'react-router-dom';
import AddCardForm from './add_card_form';

const mStP = (state, ownProps) => {
    return {
        cards: state.entities.cards,
        deckId: ownProps.match.params.deckId
    };
}

const mDtP = dispatch => {
    return {
        createCard: card => dispatch(createCard(card))
    };
}

export default withRouter(connect(mStP,mDtP)(AddCardForm));