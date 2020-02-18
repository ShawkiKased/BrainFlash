import React from 'react';
import { Link } from 'react-router-dom';

class AnswerButtons extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        const index = this.props.deck ?
        ((this.props.index + 1) %  this.props.length) : 0;

        const nextCardId = this.props.deck ?
        (this.props.deck.cardIds[index]) : 0;

        return(
            <>
                <div className="how-well">
                    How well did you know this?
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
                    <div onClick={() => this.props.rankScore(1)} className="rank-1">1</div>
                    <div onClick={() => this.props.rankScore(2)} className="rank-2">2</div>
                    <div onClick={() => this.props.rankScore(3)} className="rank-3">3</div>
                    <div onClick={() => this.props.rankScore(4)} className="rank-4">4</div>
                    <div onClick={() => this.props.rankScore(5)} className="rank-5">5</div>
                </Link> : ""}
            </>
        );
    }
}

export default AnswerButtons;