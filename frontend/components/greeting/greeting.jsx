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
            <a className="make" onClick={() => openModal('Login')}>Make Flashcards</a>
            <a className="educators" href="#/educator">Educators</a>
            <a className="companies" href="#/companies">Companies</a>
            <a className="about" href="#/about">About</a>
            <a className="login-button"  onClick={() => openModal('Login')}>Login</a>
            <a className="started-button"  onClick={() => openModal('Get Started')}>Get Started</a>
          </nav>
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
                    <a className="make" href="#/decks">Make Flashcards</a>
                    <a className="educators" href="#/educator">Educators</a>
                    <a className="companies" href="#/companies">Companies</a>
                    <a className="about" href="#/about">About</a>
                    <a className="logout" href="#/"><button className="header-button" onClick={logout}>Log Out</button></a>
                </nav>
                
                {/* <footer>
                    <a className="footer-2" href="#/decks">
                        <h1>Make Flashcards</h1>
                        <h2>
                            <p>Create, share, and study on any device for free</p>
                        </h2>
                    </a>
                    <a className="footer-3" href="#/decks">
                        <h1>Just Make Me Smarter</h1>
                        <h2>
                            <p>Study the flashcards you created!</p>
                        </h2>
                    </a>
                </footer> */}
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
