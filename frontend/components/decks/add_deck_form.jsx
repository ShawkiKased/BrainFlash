import React from 'react';

class AddDeckForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            title: ""
        };

        this.makeNewDeck = this.makeNewDeck.bind(this);
    }

    makeNewDeck(e) {
        e.preventDefault();
        const deck = this.state;
        this.props.createDeck(deck);
        this.props.closeDeckModal();
    }

    update(deck) {
        return e => this.setState({
            [deck]: e.target.value
        });
    }

    render() {
        return(
            <>
              <div onClick={() => this.props.closeDeckModal()} className="modal-overlay" />
              <div className="add-deck-form">
                  <form onSubmit={this.makeNewDeck}>
                      <p className="add-deck-title">New Deck</p>
                      <input 
                        type="text"
                        placeholder="e.g., Math, Science, etc"
                        value={this.state.title}
                        onChange={this.update('title')}
                        className="form-input" />
                      <div className="form-buttons">
                          <button onClick={this.props.closeDeckModal} className="cancel-button">
                              Cancel
                          </button>
                          <button className="save-button">
                              Save
                          </button>
                      </div>
                  </form>
              </div>
            </>
        );
    }
}

export default AddDeckForm;