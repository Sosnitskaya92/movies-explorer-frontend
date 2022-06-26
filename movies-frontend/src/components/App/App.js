import './App.css';
import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext'; 
import Header from '..Header/Header';
import Main from '..Main/Main';
import Footer from '..Footer/Footer';

function App() {
  return (
    <CurrentUserContext.Provider>
        <Header />
        <Switch>
            <Route
                exact path="/"

            />
            <Route path="/movies">

            </ Route>
            <Route path="/saved-movies">

            </ Route>
            <Route path="/profile">

               </ Route>
               <Route path="/signup">

                </ Route>
                <Route path="/signin">

                </ Route>
        </Switch>
        <Footer />

    </CurrentUserContext.Provider>    
);
}

export default App;
