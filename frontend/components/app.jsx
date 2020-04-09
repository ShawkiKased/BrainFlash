import React from "react";
import NavBar from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import Modal from './modal/modal';
import SplashForm from './splash_form/splash_container';
import DecksIndexContainer from './decks/decks_index_container';
import DeckShowContainer from './decks/deck_show_container';
import CardShowContainer from './cards/card_show_container';
import About from './extra/about';
import Educator from './extra/educators';
import Companies from './extra/companies';
// import { AuthRoute } from '../util/route_util';


const App = () => (
    <>
      <header> 
        <Modal />
      </header>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <NavBar className="greeting" />
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