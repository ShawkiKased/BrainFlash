import { connect } from 'react-redux';
import { createDeck, removeDeck } from '../../actions/deck_actions';
import AddDeckForm from './add_deck_form';

const mStP = state => {
    return {
        decks: state.entities.decks
    };
}

const mDtP = dispatch => {
    return {
        createDeck: deck => dispatch(createDeck(deck)),
        removeDeck: deck => dispatch(removeDeck(deck))
    };
}

export default connect(mStP,mDtP)(AddDeckForm);