import React from 'react';

class AddCardForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            question: "",
            answer: ""
        };

        this.makeNewCard = this.makeNewCard.bind(this);

    }

    makeNewCard(e){
        e.preventDefault();
        const card = this.state;
        const deckId = this.props.match.params.deckId;
        let CardO = object.assign({}, card, {deck_id: deckId});
        this.props.createCard(cardO);
        this.props.closeCardForm();
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }


    render() {
        return (
            <>
                <div onClick={() => this.props.closeCardForm()} className="modal-overlay" />

                <form onSubmit={this.makeNewCard}
                  className="add-card-form">
                    <textarea rows="4" cols="50"
                        placeholder="e.g., Who is the first president?"
                        value={this.state.question}
                        onChange={this.update('question')}
                        className="add-card-input"
                    ></textarea>

                    <textarea rows="4" cols="50"
                        placeholder="George Washington"
                        value={this.state.answer}
                        onChange={this.update('answer')}
                        className="add-card-input"
                    ></textarea>

                    <input className="save-button" type="submit" value="Add Card!" />

                </form>
            </>
        );
    }
}

export default AddCardForm;