import React from 'react';
import CardQuestion from './card_question';
import CardAnswer from './card_answer';
import AnswerButtons from './answer_buttons';
import { Link } from 'react-router-dom';
import { FlipCard } from 'react-flop-card';


class CardShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: props.cards,
            answer: false
        };
        // this.rankScore = this.rankScore.bind(this);
    }

    // rankScore(score) {
    //     if (score == 5) {
    //         if (this.state.mastered >= this.props.deck.cardIds.length) {
    //             this.setState({
    //                 mastered: 0
    //             });
    //         } else {
    //             this.setState({
    //                 mastered: this.state.mastered + 1
    //             });
    //         }
    //     }
    // }
    render() {
        debugger
        return(
            <div  className="card-show-container">
                <div className="progress">
                    <section>
                        <div className="section-title">
                            <div className="study-title">
                                Studying:{"  "}
                            </div>
                            <div className="current-deck-title">
                                {"  "}{this.props.deck ? this.props.deck.title : ""}
                            </div>
                        </div>
                    </section>
                    <Link to={`/decks/${this.props.deck.id}`}>
                        <button className="done-button">
                            <div className="done">
                                Done
                            </div>
                        </button>
                    </Link>
                </div>
                
                <div className="flashcard-container">
                    { this.props.deck.cardIds ? 
                      <div className="card-list-array"> 
                        {this.props.deck.cardIds.indexOf((this.props.currentCard.id) + 1)}
                        {" "} of {" "}
                        {this.props.deck.cardIds.length}
                      </div> : "" 
                    }
                    <button onClick={() => this.setState({ answer: !this.state.answer })}>
                        <CardQuestion question={this.props.currentCard ? this.props.currentCard.question : ""} />
                    </button>
                    <div className="bottom-buttons">
                        { this.state.answer ? 
                          <>
                          <CardAnswer answer={this.props.currentCard ? this.props.currentCard.answer : ""} />
                          <AnswerButtons 
                            // rankScore={(num) => this.rankScore(num)}
                            flipAnswer={() => this.setState({ answer: !this.state.answer })}
                            currentCard={this.props.deck ? this.props.currentCard : ""}
                            deck={this.props.deck ? this.props.deck : ""}
                            index={this.props.deck ? this.props.deck.cardIds.indexOf(this.props.currentCard.id) : 0}
                            length={this.props.deck ? this.props.deck.cardIds.length : ""}
                          />
                          </> : null
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default CardShow;