import React from 'react';

class AddCardForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: "",
      answer: "",
    };

    this.makeNewCard = this.makeNewCard.bind(this);
  }

  makeNewCard(e) {
    e.preventDefault();
    const card = this.state;
    const deckId = this.props.match.params.deckId;
    let cardO = Object.assign({}, card, { deck_id: deckId });
    this.props.createCard(cardO);
    this.props.closeCardForm();
  }

  update(card) {
    return (e) =>
      this.setState({
        [card]: e.currentTarget.value,
      });
  }

  getErrors() {
    if (this.errors) {
      return (
        <>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>{error}</li>
          ))}
        </>
      );
    }
  }

  render() {
    return (
      <>
        <div
          onClick={() => this.props.closeCardForm()}
          className="modal-overlay"
        />

        <form onSubmit={this.makeNewCard} className="add-card-form">
          {this.props.errors &&
            this.props.errors.map((error, i) => (
              <li key={`error-${i}`}>{error}</li>
          ))}
          <textarea
            rows="4"
            cols="50"
            placeholder="e.g., Who is the first president?"
            value={this.state.question}
            onChange={this.update("question")}
            className="add-card-input"
          ></textarea>

          <textarea
            rows="4"
            cols="50"
            placeholder="George Washington"
            value={this.state.answer}
            onChange={this.update("answer")}
            className="add-card-input"
          ></textarea>

          {/* <input className="save-button" type="submit" value="Add Card!" /> */}
          <div className="form-buttons">
            <button
              onClick={this.props.closeDeckModal}
              className="cancel-button"
            >
              Cancel
            </button>
            <button className="save-button">Save</button>
          </div>
        </form>
      </>
    );
  }
}

export default AddCardForm;