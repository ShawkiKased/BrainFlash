import React from 'react';
import onClickOutside from "react-onclickoutside";

class CardDelete extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            showDeleteButton: false
        };
    }

    handleClickOutside(e) {
        this.props.hideDeleteDeck();
        this.setState({
            showDeleteButton: false
        });
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
                onClick={()  => this.toggleDelete()}> X
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

export default onClickOutside(CardDelete);