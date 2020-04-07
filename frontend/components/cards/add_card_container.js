import { connect } from 'react-redux';
import { createCard } from '../../actions/card_actions';
import AddCardForm from './add_card_form';
import { withRouter } from 'react-router-dom';

const mStP = state => {
   
    return {
        errors: state.errors.card,
        cards: state.entities.cards
        // deckId: ownProps.match.params.deckId
    };
}

const mDtP = dispatch => {
    return {
        createCard: card => dispatch(createCard(card))
    };
}

export default connect(mStP,mDtP)(withRouter(AddCardForm));