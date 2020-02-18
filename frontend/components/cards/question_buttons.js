import React from 'react';

class QuestionButtons extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div className="question-button-container">
                click the card to reveal the answer!
            </div>
        );
    }
}

export default QuestionButtons;