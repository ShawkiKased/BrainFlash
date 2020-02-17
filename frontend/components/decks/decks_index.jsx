import React from 'react';

class DecksIndex extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        this.props.fetchDecks();
    }

    render() {
        return(
            <>
                <h2 className="welcome-deck"> Welcome to your Deck Universe! Click a deck to get started!</h2>
            </>
        );
    }
}

export default DecksIndex;