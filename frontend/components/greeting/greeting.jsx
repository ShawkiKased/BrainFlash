import React from 'react';

const Greeting = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => {
        return (
        <nav className="login-signup">
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
         &nbsp;
        &nbsp;
        &nbsp;
         &nbsp;
        &nbsp;
        &nbsp;
         &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
         &nbsp;
        &nbsp;
        &nbsp;
         &nbsp;
        &nbsp;
        &nbsp;
         &nbsp;
        &nbsp;
        &nbsp;
         &nbsp;
        &nbsp;
        &nbsp;
         &nbsp;
        &nbsp;
        &nbsp;
         &nbsp;
        &nbsp;
        &nbsp;
         &nbsp;
        &nbsp;
        &nbsp;
         &nbsp;
        &nbsp;
        &nbsp;
         &nbsp;
        &nbsp;
        &nbsp;
         &nbsp;
        &nbsp;
        &nbsp;
         &nbsp;
        &nbsp;
        &nbsp;
         &nbsp;
        &nbsp;
        &nbsp;
         &nbsp;
        &nbsp;
        &nbsp;
         &nbsp;
        &nbsp;
        &nbsp;
         &nbsp;
        &nbsp;
        &nbsp;
         &nbsp;
        &nbsp;
        &nbsp;
         &nbsp;
        &nbsp;
        &nbsp;
         &nbsp;
        &nbsp;
        &nbsp;
         &nbsp;
        &nbsp;
        &nbsp;
         &nbsp;
        &nbsp;
        &nbsp;
        <button className="make">Make Flashcards</button>
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
         &nbsp;
        &nbsp;
        &nbsp;
         &nbsp;
        &nbsp;
        &nbsp;
        <button className="educators">Educators</button>
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
         &nbsp;
        &nbsp;
        &nbsp;
         &nbsp;
        &nbsp;
        &nbsp;
        <button className="companies">Companies</button>
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
         &nbsp;
        &nbsp;
        &nbsp;
         &nbsp;
        &nbsp;
        &nbsp;
        <button className="about">About</button>
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
         &nbsp;
        &nbsp;
        &nbsp;
         &nbsp;
        &nbsp;
        &nbsp;
        <button className="login-button" onClick={() => openModal('Login')}>Login</button>
        &nbsp;
        &nbsp;
        &nbsp;
        <button className="started-button" onClick={() => openModal('Get Started!')}>Get Started!</button>
        </nav>
        );
    };
    
    const personalGreeting = () => {
        return (
        <div className="header-group">
            <h2 className="header-name">Welcome, {currentUser.email}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </div>
        );
    };

    return (
        currentUser ?
        personalGreeting(currentUser, logout) : 
        sessionLinks()
    );
};

export default Greeting;
