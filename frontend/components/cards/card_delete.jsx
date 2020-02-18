import React from 'react';

class CardDelete extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            showDeleteButton: false
        };
    }

    toggleDelete () {
        this.setState({
            showDeleteButton: !this.state.showDeleteButton
        });
    }

    render() {
        const card = this.props.card;

        return (
            <>
              <div className="card-settings-icon"
                onClick={()  => this.toggleDelete()}>
              </div>
              <div className="delete-container">
                  {
                      this.state.showDeleteButton ?
                      <button className="delete-card-button"
                        onClick={card ? () => this.props.deleteCard(card.id) : ""}>
                            Delete
                      </button> : ""
                  }
              </div>
            </>
        );
    }
}

export default CardDelete;