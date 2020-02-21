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
            <button className="make">Make Flashcards</button>
            <a className="educators" href="#/educator">Educators</a>
            <a className="companies" href="#/companies">Companies</a>
            <a className="about" href="#/about">About</a>
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
                {/* <a className="deck-link" href="#/decks">
                    <button className="make">Make Flashcards</button>
                    <h2 className="header-name">Welcome Back!</h2>
                    <a className="educators" href="#/educator">Educators</a>
                    <a className="companies" href="#/companies">Companies</a>
                    <a className="about" href="#/about">About</a>
                </a>
                <a className="logout" href="#/"><button className="header-button" onClick={logout}>Log Out</button>
                </a> */}
                <a className="deck-link" href="#/decks">
                    <button className="make">Make Flashcards</button>
                    <h2 className="header-name">Welcome Back!</h2>
                    <button className="educators" href="#/educator">Educators</button>
                    <button className="companies" href="#/companies">Companies</button>
                    <button className="about" href="#/about">About</button>
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
