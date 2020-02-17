import React from 'react';


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

        let deckName;
        let deckId;
        if(this.props.deck) {
            deckName = this.props.deck.title;
            deckId = this.props.deck.id;
        } else {
            deckName = "";
        }

        return(
            <>
              <section>
                  <div className="deck-name">
                      {deckName}
                  </div>
                  <button className="delete-button"
                    onClick={() => this.props.deleteDeck(deckId) }>
                        Delete
                  </button>
              </section>
            </>
        );
    }
}

export default DeckShow;