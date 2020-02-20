import React from 'react';

class CardQuestion extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="flip-page">
                <div className="card-text">
                    <div className="card-header">Q. Click The Card to Reveal the Answer!</div>
                </div>
                <div className="flashcard">
                    {this.props.question}
                </div>
            </div>

        );
    }
}

export default CardQuestion;