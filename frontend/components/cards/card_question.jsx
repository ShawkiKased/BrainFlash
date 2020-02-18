import React from 'react';

class CardFront extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div className="flip-page">
                <div className="card-text">
                    Q.
                </div>
                <div class="flashcard">
                    {this.props.question}
                </div>
            </div>

        );
    }
}

export default CardQuestion;