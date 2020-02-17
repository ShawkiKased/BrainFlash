import React from "react";
import GreetingContainer from './greeting/greeting_container';
import { AuthRoute } from '../util/route_util';
import { Route } from 'react-router-dom';
import Modal from './modal/modal';
import SplashForm from '../components/splash_form/splash_container';
import DecksIndexContainer from '../components/decks/decks_index_container';
import DeckShowContainer from '../components/decks/deck_show_container';


const App = () => (
    <>
      <header> 
        <Modal />
      </header>
      <GreetingContainer className="greeting" />
      <Route exact path="/" component={SplashForm} />
      <Route path="/decks" component={DecksIndexContainer} />
      <Route path="/decks/:deckId" component={DeckShowContainer} />
    </>
);

export default App;