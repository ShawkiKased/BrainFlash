import React from "react";
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute } from '../util/route_util';
import { Route } from 'react-router-dom';

const App = () => (
    <>
        <header>
        <h1>Welcome to a world of Flash Cards, Welcome, to BRAINFLASH </h1>
        <GreetingContainer />
        </header>
        
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </>
);

export default App;