import React from 'react';

const Greeting = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => {
        return (
         <>
          <nav className="login-signup">
            <div className="logo-header">
              <a className="header-link" href="#/">
                  <span className="brain">BRAIN</span>
                  <span className="flash">FLASH</span>
              </a> 
            </div>
            <button className="find">Find Flashcards</button>
            <button className="make">Make Flashcards</button>
            <button className="educators">Educators</button>
            <button className="companies">Companies</button>
            <button className="about">About</button>
            <button className="login-button" onClick={() => openModal('Login')}>Login</button>
            <button className="started-button" onClick={() => openModal('Get Started')}>Get Started</button>
          </nav>
         </>
        );
    };
    
    const personalGreeting = () => {
        return (
        <>
            <nav className="login-signup">
                <div className="logo-header">
                    <a className="header-link" href="#/">
                        <span className="brain">BRAIN</span>
                        <span className="flash">FLASH</span>
                    </a>
                </div>
                <a className="deck-link" href="#/decks">
                    <button className="find">Find Flashcards</button>
                    <button className="make">Make Flashcards</button>
                    <button className="educators">Educators</button>
                    <button className="companies">Companies</button>
                    <button className="about">About</button>
                    <h2 className="header-name">Welcome Back!</h2>
                </a>
                <a className="logout" href="#/"><button className="header-button" onClick={logout}>Log Out</button>
                </a>
            </nav>
            {/* <div className="header-group">
            </div> */}
        </>
        );
    };

    return (
        currentUser ?
        personalGreeting(currentUser, logout) : 
        sessionLinks()
    );
};

export default Greeting;
