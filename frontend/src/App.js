import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useParams
} from "react-router-dom";
import Skills from "./components/Skills";
import Tutorials from "./components/Tutorials";


function App() {

  return (
    <Router forceRefresh={true}>
      <Switch>
        <Route exact path="/" component={Skills} />
        <Route path="/tutorials/:id" render={({ match }) => <Tutorials match={match} />} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )

}

export default App;
