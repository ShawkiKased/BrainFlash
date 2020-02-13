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
          <GreetingContainer />
          <h1> Welcome to BrainFlash, an Endless World of Flash Cards!</h1>
          <h2 className="h1">Learn twice as fast, and remember longer!</h2>
          <h2 className="h2">Proven by decades of cognitive science</h2>
         
        </header>
    </>
);

export default App;