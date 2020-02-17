// import React from 'react';
// import AddDeckContainer from '../decks/add_deck_container';

// class DecksIndex extends React.Component {
//     constructor(props) {
//         super(props);

//     }
//     componentDidMount() {
//         this.props.fetchDecks();
//     }

//     render() {
//         return(
//             <>
//                 <h2 className="welcome-deck"> Welcome to your Deck Universe! Click a deck to get started!</h2>
//                 <h2> DECKS </h2>
//             </>
//         );
//     }
// }

// export default DecksIndex;

import React from 'react';
import AddDeckContainer from './add_deck_container';
import { Link } from 'react-router-dom';
import onClickOutside from "react-onclickoutside";


class DecksIndex extends React.Component {

    render() {
        return (
            <div>
                <div className="deck-title-container">
                    <div className="add-deck-title">
                        Decks
                    </div>
                </div>
                <div className="deck-outer" />
            </div>
        );
    }
}

export default DecksIndex;
