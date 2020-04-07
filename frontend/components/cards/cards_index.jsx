import React from 'react';
import AddCardContainer from './add_card_container';
import CardDelete from './card_delete';
import { Link } from 'react-router-dom';


class CardsIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            showCard: false
        };

        this.toggleCard = this.toggleCard.bind(this);
    }

    componentDidMount() {
        this.props.fetchDeck(this.props.match.params.deckId);
        // this.props.fetchCards(this.props.deckId);
    }

    componentDidUpdate(nextProps) {
        if (this.props.match.params.deckId !== nextProps.match.params.deckId) {
            this.props.fetchDeck(nextProps.match.params.deckId);
        }
    }

    toggleCard() {
        this.setState({
            showCard: !this.state.showCard
        });
    }


    render() {
        const addCard = (this.state.showCard ? <AddCardContainer 
            showModal={this.state.showCard}
            closeCardForm={() => this.setState({showCard: false})}/> 
            : null
        );

        const currentDeckId = this.props.match.params.deckId;
        const cards = this.props.decks[currentDeckId].cardIds.map( cardId => {
            const card = this.props.cards[cardId];

            return (
                <div className="card-list-inner" key={cardId}>
                    <ul className="list-container">
                        <li className="card-preview-text">
                            {card ? card.question : ""}
                        </li>

                        <li className="study-set">
                            { card ? <Link to={
                                { pathname: `/cards/${card.id}`,
                                  state: {
                                      deck: this.props.deck,
                                      currentDeckId: currentDeckId
                                    }
                                }
                            }
                            className="study-button">
                               = Study =
                            </Link> : "" 
                            }
                            <CardDelete
                              hideDeleteDeck={this.props.hideDelete}
                              deleteCard={this.props.deleteCard}
                              card = {card}
                            />
                        </li>
                    </ul>
                </div>
            );
        });


        return(
            <div className="card-list-outer">
                <span className="toggle-card" onClick={() => this.toggleCard()}>
                    <div className="add-cards">
                        + Add Cards +
                    </div>
                </span>

                <div className="cards">
                    Cards
                </div>
                <div className="card-list-container">
                    {cards}
                </div>
                {addCard}
            </div>
        );
    }
}

export default CardsIndex;