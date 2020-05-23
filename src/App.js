import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'jquery';
import 'popper.js';

import Sidebar from './components/layout/Sidebar/Sidebar';
import Dashboard from './components/dashboard/Dashboard';
import CreateRoom from './components/dashboard/createRoom/CreateRoom';
import JoinRoom from './components/dashboard/joinRoom/JoinRoom';
import Room from './components/rooms/Room';
import AddEvent from './components/rooms/AddEvent';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Helmet>
          <style>{"body{ background-color: #1c2833;}"}</style>
        </Helmet>
        <Sidebar></Sidebar>
        <main>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/createRoom" component={CreateRoom} />
            <Route exact path="/joinRoom" component={JoinRoom} />
            <Route exact path="/room/:room_id" component={Room} />
            <Route exact path="/room/:room_id/addEvent" component={AddEvent} />
            <Route exact path="/signIn" component={SignIn} />
            <Route exact path="/signUp" component={SignUp} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
