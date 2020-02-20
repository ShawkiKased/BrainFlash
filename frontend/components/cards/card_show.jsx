import React from 'react';
import CardQuestion from './card_question';
import CardAnswer from './card_answer';
import QuestionButtons from './question_buttons';
import AnswerButtons from './answer_buttons';
import { Link } from 'react-router-dom';
import { FlipCard } from 'react-flop-card';


class CardShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: props.cards,
            answer: false,
            mastered: 0
        };
        this.rankScore = this.rankScore.bind(this);
    }


    rankScore(score) {
        if (score == 5) {
            if (this.state.mastered >= this.props.deck.cardIds.length) {
                this.setState({
                    mastered: 0
                });
            } else {
                this.setState({
                    mastered: this.state.mastered + 1
                });
            }
        }
    }
    render() {
        return(
            <div  className="card-show-container">
                <div className="progress">
                    <section>
                        <div className="section-title">
                            <div className="study-title">
                                Studying:{"  "}
                            </div>
                            <div className="current-deck-title">
                                {"  "}{this.props ? this.props.deck.title : ""}
                            </div>
                        </div>
                    </section>
                    <Link to={`/decks/${this.props.deck}`}>
                        <button className="done-button">
                            <div className="done">
                                Done
                            </div>
                        </button>
                    </Link>
                </div>
                <div className="mastery-container">
                    <div className="pair-1">
                        <div className="card-count">
                            {this.state.mastered} {" "}
                        </div>
                        <br/>
                        <div className="cards-mastered">
                            Cards <br/> Mastered
                        </div>
                    </div>
                    <div className="card-count">
                        /
                    </div>
                    <div className="pair-2">
                        { this.props.deck.cardIds ?
                          <div className="card-count">
                            {this.props.deck.cardIds.length}} 
                          </div> : ""
                        }
                        <div className="card-count">
                            {this.cardsLength} {" "}
                        </div>
                        <div className="cards-mastered">
                            Total <br/> Cards
                        </div>
                    </div>
                </div>

                <div className="flashcard-container">
                    { this.props.deck.cardIds ? 
                      <div className="card-list-array"> 
                        {this.props.deck.cardIds.indexOf(this.props.currentCard.id) + 1 }
                        {" "} of {" "}
                        {this.props.deck.cardIds.length}
                      </div> : "" 
                    }
                    <aside>
                        <FlipCard width={"100%"} height={"100"}
                          onClick={() => this.setState({ answer: !this.state.answer })}
                          questionChild={<CardQuestion question={this.props.currentCard ? this.props.currentCard.question : ""} />}
                          answerChild={<CardAnswer answer={this.props.currentCard ? this.props.currentCard.answer : ""} />}
                          flipped={this.state.answer}
                        />
                    </aside>
                    <div className="bottom-buttons">
                        { this.state.answer ? 
                          <AnswerButtons 
                            rankScore={(num) => this.rankScore(num)}
                            flipAnswer={() => this.setState({ answer: !this.state.answer })}
                            currentCard={this.props.deck ? this.props.currentCard : ""}
                            deck={this.props.deck ? this.props.deck : ""}
                            index={this.props.deck ? this.props.deck.cardIds.indexOf(this.props.currentCard.id) : 0}
                            length={this.props.deck ? this.props.deck.cardIds.length : ""}
                          /> :
                          <QuestionButtons />
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default CardShow;