import React from "react";
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute } from '../util/route_util';
import { Route } from 'react-router-dom';
import Modal from './modal/modal';
import SplashForm from '../components/splash_form/splash_container';


const App = () => (
    <>
      <Modal />
      <header> 
        <GreetingContainer className="greeting" />
        <Route exact path="/" component={SplashForm} />
      </header>
    </>
);

export default App;