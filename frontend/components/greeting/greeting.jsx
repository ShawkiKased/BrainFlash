import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => {
        return (
        <nav className="login-signup">
            <Link to="/login">Login</Link>
            &nbsp;
            <Link to="/signup">Get Started!</Link>
        </nav>
        );
    };
    
    const personalGreeting = () => {
        return (
        <div className="header-group">
            <h2 className="header-name">Welcome, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </div>
        );
    };

    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;