import React from 'react';

class DecksIndex extends React.Component {

    componentDidMount() {
        this.props.fetchDecks();
    }

    render() {
        return(
            <>
                <h2> Welcome to your Deck Universe! Click a deck to get started!</h2>
            </>
        );
    }
}

export default DecksIndex;