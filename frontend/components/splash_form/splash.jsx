import React from 'react';

class SplashForm extends React.Component {

    render() {
        return(
            <>
            <h1> Welcome to BrainFlash, an Endless World of Flash Cards!</h1>
            <h2 className="h1">Learn twice as fast, and remember longer!</h2>
            <h2 className="h2">Proven by decades of cognitive science</h2>
            {/* <footer>
                <a className="footer-2" onClick={() => openModal('Login')}>
                    <h1>Make Flashcards</h1>
                    <h2>
                        <p>Create, share, and study on any device for free</p>
                    </h2>
                </a>
                <a className="footer-3" onClick={() => openModal('Login')}>
                    <h1>Just Make Me Smarter</h1>
                    <h2>
                        <p>Study the flashcards you created!</p>
                    </h2>
                </a>
            </footer> */}
            {/* <div className="search">
                <div className="search-blurb">Search for Brainscape Flashcards on thousands of classes:</div>
                <div className="search-bar">
                    <svg aria-hidden="true" data-prefix="fas" data-icon="search" className="mag-glass" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                    </svg>
                    <input type="text" className="search-field" placeholder="e.g. MCAT, pharma, bar exam, Spanish, Series 7" />
                    <button className="search-button">
                        <span>Search</span>
                    </button>
                </div>
            </div> */}
            
            </>
        );
    }
}

export default SplashForm;