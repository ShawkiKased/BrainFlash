import React from 'react';
import AddDeckContainer from '../decks/add_deck_container';
import { Link } from 'react-router-dom';

class DecksIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showDeck: false,
            showBackgroundI: true
        };

        this.toggleDeck = this.toggleDeck.bind(this);
        this.hideBackground = this.hideBackground.bind(this);

    }
    componentDidMount() {
        this.props.fetchDecks();
    }

    toggleDeck() {
        this.setState({
            showDeck: !this.state.showDeck
        });
    }

    hideBackground() {
        this.setState({
            showBackgroundI: false
        });
    }
    
    render() {
        
        const addDeck = (this.state.showDeck ? 
            <AddDeckContainer showModal={this.state.showDeck}
            closeDeckModal={() => this.setState({showDeck: false})} />
            : null
            );
            
            const showBackground = (this.props.location.pathname.length < 7 ?
                <div className="background-img-container">
                <br/>
                <img className="welcome-image"  src={window.background}/>
                <div className="welcome-deck">Welcome to your Deck Universe! Click a deck to get started!</div>
                <br/>
            </div>
            : ""
            );
            
            const deckList = this.props.decks.map( deck => {
                return(
                    <div className="deck-container">
                        <div className="deck-list">
                            <Link to={`/decks/${deck.id}`} className="in-line">
                                <ul className="deck-list-item"
                                    onClick={this.hideBackgroundImage}>
                                    <div className="item-title">
                                        <div className="sidebar-title">
                                            {deck.title}
                                        </div>
                                    </div>
                                </ul>
                            </Link>
                        </div>
                    </div>
                );
            })
            return(
                <>
                {addDeck}
                <div className="deck-title-container">
                    <button className="add-start" onClick={this.toggleDeck} >Create New Deck</button>
                    <div className="add-deck-title">
                        Decks
                    </div>
                </div>
                <div className="deck-outer" >
                    { deckList }
                </div>
                <div className="cards-container">
                    {showBackground}
                </div>
            </>
        );
    }
}

export default DecksIndex;