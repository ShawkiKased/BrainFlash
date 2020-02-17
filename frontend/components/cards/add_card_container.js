import { connect } from 'react-redux';
import { createCard } from '../../actions/card_actions';
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

export default connect(mStP,mDtP)(AddCardForm);