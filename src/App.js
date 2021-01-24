import React, { useState } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Login';
import { useStateValue } from './StateProvider';
import Home from './Home';

function App() {

  const [{ user }, dispatch ] = useStateValue();

  document.title = 'WhatsApp Clone';

  return (
    <div className="app">
      
      {!user ? (
        <Login />
      ): (

        <div className="app__body">
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
        

      </div>

      )}

      
    </div>
  );
}

export default App;
