import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Skills from "./components/Skills";

function App() {
  return (
    <>
    <Router>
      <Switch>
      <Route exact path="/" component={Skills} />
      <Redirect to="/" />
      </Switch>
    </Router>
    </>
  )

}

export default App;
