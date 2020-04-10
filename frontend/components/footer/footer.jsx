import React from 'react';

const Footer = ({currentUser, logout, openModal }) => {

    const base = () => {
        return (
            <>
            <footer>
                <a className="footer-2" onClick={() => openModal('Get Started')}>
                    <h1>Make Flashcards</h1>
                    <h2>
                        <p>Create, share, and study on any device for free</p>
                    </h2>
                </a>
                {/* <a className="footer-3" onClick={() => openModal('Login')}>
                    <h1>Just Make Me Smarter</h1>
                    <h2>
                        <p>Study the flashcards you created!</p>
                    </h2>
                </a> */}
            </footer>
            </>
        );
    };

    const logged = () => {
        return (
            <>
            <footer>
                <a className="footer-2" href="#/decks">
                    <h1>Make Flashcards</h1>
                    <h2>
                        <p>Create, share, and study on any device for free</p>
                    </h2>
                </a>
                {/* <a className="footer-3" href="#/decks">
                    <h1>Just Make Me Smarter</h1>
                    <h2>
                        <p>Study the flashcards you created!</p>
                    </h2>
                </a> */}
            </footer>
            </>
        );
    };

    return (
        currentUser ?
        logged(currentUser, logout) :
        base()
    );
};

export default Footer;