import React from 'react';
import CardsIndexContainer from '../cards/cards_index_container';

class DeckShow extends React.Component {

    constructor(props){
        super(props);

        this.fetchDeck = this.props.fetchDeck.bind(this);

    }

    componentDidMount() {
        const deckId = this.props.match.params.deckId;
        this.props.fetchDeck(deckId);
    }

    componentDidUpdate(nextProps) {
        if (this.props.match.params.deckId !== nextProps.match.params.deckId) {
            this.props.fetchDeck(nextProps.match.params.deckId);
        }
    }


    render() {

        let deckTitle;
        let deckId;
        if(this.props.deck) {
            deckTitle = this.props.deck.title;
            deckId = this.props.deck.id;
        } else {
            deckTitle = "";
        }

        return(
            <div className="cards-container">
              <section>
                  <div className="deck-name">
                      {deckTitle}
                  </div>
                  <button className="delete-button"
                    onClick={() => this.props.deleteDeck(deckId) }>
                        Delete
                  </button>
              </section>
              <CardsIndexContainer/>
            </div>
        );
    }
}

export default DeckShow;