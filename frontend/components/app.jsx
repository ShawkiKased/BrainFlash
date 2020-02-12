import React from "react";
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute } from '../util/route_util';
import { Route } from 'react-router-dom';
import Modal from './modal/modal';

const App = () => (
    <>
        <Modal />
        <header>
          <h1> Welcome to BrainFlash, an Endless World of Flash Cards!</h1>
          <GreetingContainer />
        </header>
    </>
);

export default App;