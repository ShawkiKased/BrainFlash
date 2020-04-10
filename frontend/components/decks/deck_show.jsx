import React from 'react';
import CardsIndexContainer from '../cards/cards_index_container';
import { withRouter } from 'react-router-dom';

class DeckShow extends React.Component {

    constructor(props){
        super(props);

        this.hideDelete = this.hideDelete.bind(this);
        this.toggleDelete =  this.toggleDelete.bind(this);

        this.state = {
            showDropdown: false
        };

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

    hideDelete() {
        this.setState({showDropdown: false});
    }

    toggleDelete() {
        this.setState({showDropdown: !this.state.showDropdown});
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
                  <div className="dropdown">
                      <div className="settings-icon"
                        onClick={() => this.toggleDelete()} ><i className="fas fa-cog"></i></div>
                      { this.state.showDropdown ? 
                        <button className="delete-button"
                          onClick={() => this.props.deleteDeck(deckId) }>
                              Delete
                        </button> : ""
                      }
                  </div>
              </section>
              <CardsIndexContainer
                hideDelete = {() => this.hideDelete()}
              />
            </div>
        );
    }
}

export default withRouter(DeckShow);