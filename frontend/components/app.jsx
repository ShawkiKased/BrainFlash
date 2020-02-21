import React from "react";
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Modal from './modal/modal';
import SplashForm from './splash_form/splash_container';
import DecksIndexContainer from './decks/decks_index_container';
import DeckShowContainer from './decks/deck_show_container';
import CardShowContainer from './cards/card_show_container';
import About from './extra/about';
import Educator from './extra/educators';
import Companies from './extra/companies';


const App = () => (
    <>
      <header> 
        <Modal />
      </header>
      <GreetingContainer className="greeting" />
      <Route exact path="/" component={SplashForm} />
      <Route path="/decks" component={DecksIndexContainer} />
      <Route path="/decks/:deckId" component={DeckShowContainer} />
      <Route path="/cards/:cardId" component={CardShowContainer} />
      <Route path="/about" component={About} />
      <Route path="/educator" component={Educator} />
      <Route path="/companies" component={Companies} />

    </>
);

export default App;