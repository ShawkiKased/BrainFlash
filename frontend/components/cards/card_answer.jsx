import React from 'react';

class CardAnswer extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        debugger
        return (
            <>
              <div className="card-text">
                  <div className="card-header">
                      A.
                  </div>
                  <div className="flashcard">
                      {this.props.answer}
                  </div>
              </div>
            </>

        );
    }
}

export default CardAnswer;