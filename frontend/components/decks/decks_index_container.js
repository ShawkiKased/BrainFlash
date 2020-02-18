import { connect } from 'react-redux';
import DecksIndex from './decks_index';
import { selectAllDecks } from '../../actions/selectors';
import { fetchDecks, createDeck } from '../../actions/deck_actions';

const mStP = state => {
    return {
        // decks: selectAllDecks(state)
        decks: Object.values(state.entities.decks)
    };
}

const mDtP = dispatch => {
    return {
        fetchDecks: () => dispatch(fetchDecks()),
        createDeck: deck => dispatch(createDeck(deck))
    };
}

export default connect(mStP,mDtP)(DecksIndex);