import React from 'react';
import { Link } from 'react-router-dom';

class AnswerButtons extends React.Component{
    constructor(props) {
        super(props);

    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.deck !== prevProps.deck) {
    //         this.fetchDeck(this.props.deck);
    //     }
    // }

    componentDidMount() {
        const index = this.props.deck ?
        ((this.props.index + 1) % this.props.length) : 0;

        const nextCardId = this.props.deck ?
        (this.props.deck.cardIds[index]) : 0;
    }

    

    render() {
        debugger
        const index = this.props.deck ?
        ((this.props.index + 1) %  this.props.length) : 0;

        const nextCardId = this.props.deck ?
        (this.props.deck.cardIds[index]) : 0;

        return(
            <>
                <div className="how-well">
                    Did you get it right?
                </div>
                { this.props.deck ? <Link
                    className="answer-button-container"
                    onClick={() => {this.props.flipAnswer();}}
                    to={
                        {
                        pathname: `/cards/${nextCardId}`,
                        state: {
                            deck: this.props.deck,
                            currentCard: this.props.currentCard,
                            answer: false
                        }
                       }
                    }>
                    <div className="pass">Correct!</div>
                    <div className="fail">Incorrect!</div>
                </Link> : ""}
            </>
        );
    }
}

export default AnswerButtons;