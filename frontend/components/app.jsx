import React from "react";
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import Modal from './modal/modal';
import SplashForm from './splash_form/splash_container';
import DecksIndexContainer from './decks/decks_index_container';
import DeckShowContainer from './decks/deck_show_container';
import CardShowContainer from './cards/card_show_container';


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
    </>
);

export default App;