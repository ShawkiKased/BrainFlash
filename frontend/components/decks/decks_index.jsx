import React from 'react';
import AddDeckContainer from '../decks/add_deck_container';

class DecksIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showDeck: false,
        };

        this.flipDeck = this.flipDeck.bind(this);

    }
    componentDidMount() {
        this.props.fetchDecks();
    }

    flipDeck() {
        this.setState({
            showDeck: !this.state.showDeck
        });
    }


    render() {

        const addDeck = (this.state.showDeck ? 
          <AddDeckContainer showModal={this.state.showDeck}
            closeDeckModal={() => this.setState({showDeck: false})} />
          : null
        );
        return(
            <>
                {addDeck}
                <h2 className="welcome-deck"> Welcome to your Deck Universe! Click a deck to get started! </h2>
                <div className="deck-title-container">
                    <button className="add-start" onClick={this.flipDeck} >Create New Deck</button>
                    <div className="deck-title">
                        Decks
                    </div>
                </div>
                <div className="deck-outer" >

                    {
                        this.props.decks.map( deck => {
                            <ul className="deck-list">
                                {deck.title}
                            </ul>
                        })
                    }
                </div>
            </>
        );
    }
}

export default DecksIndex;