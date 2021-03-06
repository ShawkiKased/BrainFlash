import { connect } from 'react-redux';
import DeckShow from './deck_show';
import { fetchDeck, deleteDeck } from '../../actions/deck_actions'

const mStP = (state, ownProps) => {
    return {
        deck: state.entities.decks[ownProps.match.params.deckId],
        deckTitle: state.entities.title
    };
};

const mDtP = dispatch => {
    return {
        fetchDeck: deckId => dispatch(fetchDeck(deckId)),
        deleteDeck: deckId => dispatch(deleteDeck(deckId))
    };
};

export default connect(mStP,mDtP)(DeckShow);