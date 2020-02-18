import React from 'react';
import AddCardContainer from '../cards/add_card_container';


class CardsIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            showCard: false
        };

        this.toggleCard = this.toggleCard.bind(this);
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
        const cards = this.props.deck.cardIds.map( cardId => {
            const card = this.props.cards[cardId];

            return (
                <div className="card-list-inner">
                    <ul className="list-container">
                        <li className="card-preview-text">
                            {card ? card.question : ""}
                        </li>

                        <li className="study-set">
                            { card ? <Link to={
                                { pathname: `/cards/${card.id}`,
                                  state: {
                                      deck: this.props.decks,
                                      currentDeckId: currentDeckId
                                    }
                                }
                            }
                            className="study-button">
                                Study
                            </Link> : "" 
                            }
                        </li>
                    </ul>
                </div>
            );
        });


        return(
            <div className="card-list-outer">
                <span className="toggle-card" onClick={() => this.toggleCard()}>
                    <div className="add-cards">
                        Add Cards
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