import { connect } from 'react-redux';
import DecksIndex from './decks_index';
import { withRouter } from 'react-router-dom';
import { selectAllDecks } from '../../actions/selectors';
import { fetchDecks, createDeck } from '../../actions/deck_actions';

const mStP = state => {
    return {
        decks: selectAllDecks(state)
    };
}

const mDtP = dispatch => {
    return {
        fetchDecks: () => dispatch(fetchDecks()),
        createDeck: deck => dispatch(createDeck(deck))
    };
}

export default withRouter(connect(mStP,mDtP)(DecksIndex));